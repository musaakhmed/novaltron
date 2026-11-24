import test from "node:test";
import assert from "node:assert/strict";

import {
  CORPORATE_FALLBACK_CARD,
  foldVcardLine,
  renderVcard30,
  resolveSafeCardRedirect,
} from "../src/lib/erm-cards.ts";
import {
  isValidCardSlug,
  parseCardRefParam,
} from "../src/lib/card-attribution.ts";

test("renderVcard30 formats RFC 2426 vCard with escaping, diacritics, multi-phone, no ADR, CRLF, and 75-octet folding", () => {
  const sampleCard = {
    slug: "elshan-mammadov",
    fullName: "Elşən Məmmədov",
    salutationPrefix: "Dr.",
    jobTitle: "Direktor; Layihə, Təchizat & Mühəndislik",
    divisionLabel: "Agro & Industrial",
    scopeSummary:
      "Açar təslimi layihələr; suvarma, istixana və taxıl saxlama sistemləri\\logistika",
    email: "elshan@novaltron.com",
    phones: [
      { label: "AZ Mobile", number: "+994 50 123 45 67", whatsapp: true },
      { label: "BE Office", number: "+32 2 555 01 99", whatsapp: false },
    ],
    whatsappNumber: "+994501234567", // same digits as AZ Mobile -> should NOT duplicate
    whatsappNumbers: ["+994 50 123 45 67"],
    linkedinUrl: "https://www.linkedin.com/in/elshan-mammadov",
    spokenLanguages: ["EN", "AZ", "TR", "RU"],
    legalEntity: "შპს ნოვალტრონი", // must be forced strictly to Latin Novaltron LLC
    corridorLine: "Azerbaijan · Belgium · Türkiye · Georgia · Central Asia",
    corridorCompact: "AZ · BE · TR · GE · CENTRAL ASIA",
    cardUrl: "https://novaltron.com/card/elshan-mammadov",
    websiteUrl: "https://novaltron.com",
    rfqUrl: "https://novaltron.com/contact?ref=card-elshan-mammadov",
  };

  const vcf = renderVcard30(sampleCard);

  // Strict CRLF line endings
  assert.ok(vcf.endsWith("\r\n"), "vCard must end with CRLF");
  assert.equal(vcf.replaceAll("\r\n", "").includes("\n"), false, "No bare LF");
  assert.equal(vcf.replaceAll("\r\n", "").includes("\r"), false, "No bare CR");

  // Unfold lines per RFC 2426 section 2.6 for structural assertions
  const lines = vcf.split("\r\n").filter(Boolean);
  for (const line of lines) {
    assert.ok(
      Buffer.byteLength(line, "utf8") <= 75,
      `Line exceeds 75 octets (${Buffer.byteLength(line, "utf8")}): ${line}`
    );
    // Ensure UTF-8 decoding didn't produce replacement chars
    assert.equal(line.includes("\uFFFD"), false);
  }

  const unfolded = vcf.replaceAll("\r\n ", "");
  const unfoldedLines = unfolded.split("\r\n").filter(Boolean);

  assert.equal(unfoldedLines[0], "BEGIN:VCARD");
  assert.equal(unfoldedLines[1], "VERSION:3.0");
  assert.equal(unfoldedLines.at(-1), "END:VCARD");

  assert.ok(unfoldedLines.includes("N:Məmmədov;Elşən;;Dr.;"));
  assert.ok(unfoldedLines.includes("FN:Elşən Məmmədov"));
  assert.ok(unfoldedLines.includes("ORG:Novaltron LLC"));
  assert.ok(
    unfoldedLines.includes("TITLE:Direktor\\; Layihə\\, Təchizat & Mühəndislik")
  );
  assert.ok(unfoldedLines.includes("EMAIL;TYPE=PREF,INTERNET:elshan@novaltron.com"));
  assert.ok(unfoldedLines.includes("URL:https://novaltron.com"));
  assert.equal(
    unfoldedLines.includes("URL:https://novaltron.com/card/elshan-mammadov"),
    false
  );
  assert.ok(
    unfoldedLines.includes(
      "X-SOCIALPROFILE;TYPE=linkedin:https://www.linkedin.com/in/elshan-mammadov"
    )
  );
  assert.ok(
    unfoldedLines.some(
      (l) =>
        l.startsWith("NOTE:Açar təslimi layihələr\\; suvarma\\, istixana") &&
        l.includes("\\\\logistika") &&
        l.includes("Türkiye")
    )
  );

  // Deduplicated phone count (2 distinct phones)
  const telLines = unfoldedLines.filter((l) => l.startsWith("TEL;"));
  assert.equal(telLines.length, 2);
  assert.equal(telLines[0], "TEL;TYPE=CELL,VOICE:+994 50 123 45 67");
  assert.equal(telLines[1], "TEL;TYPE=CELL,VOICE:+32 2 555 01 99");

  // Guardrails: no ADR, no Georgian script, no Tbilisi
  assert.equal(
    unfoldedLines.some((l) => l.startsWith("ADR")),
    false
  );
  assert.equal(/[\u10A0-\u10FF]/.test(unfolded), false);
  assert.equal(unfolded.includes("Tbilisi"), false);
});

test("renderVcard30 falls back URL to https://novaltron.com and adds distinct whatsappNumbers", () => {
  const card = {
    ...CORPORATE_FALLBACK_CARD,
    slug: "aydin-aliyev",
    fullName: "Aydın Əliyev",
    phones: [{ label: "Office", number: "+994 12 400 00 01", whatsapp: false }],
    whatsappNumber: "+994 55 777 88 99",
    whatsappNumbers: ["+994 55 777 88 99"],
    websiteUrl: undefined,
  };

  const unfolded = renderVcard30(card).replaceAll("\r\n ", "");
  const lines = unfolded.split("\r\n");
  const telLines = lines.filter((l) => l.startsWith("TEL;"));
  assert.equal(telLines.length, 2);
  assert.equal(telLines[0], "TEL;TYPE=CELL,VOICE:+994 12 400 00 01");
  assert.equal(telLines[1], "TEL;TYPE=CELL,VOICE:+994 55 777 88 99");
  assert.ok(lines.includes("URL:https://novaltron.com"));
});

test("foldVcardLine preserves multi-byte UTF-8 characters (ə, ğ, ş, ı) across fold boundaries", () => {
  const input = `NOTE:${"əğşı".repeat(25)}`;
  const folded = foldVcardLine(input, 75);
  const parts = folded.split("\r\n");
  assert.ok(parts.length > 1);
  for (const part of parts) {
    assert.ok(Buffer.byteLength(part, "utf8") <= 75);
  }
  assert.equal(folded.replaceAll("\r\n ", ""), input);
});

test("parseCardRefParam and isValidCardSlug validate ?ref=card-<slug> strictly", () => {
  assert.equal(parseCardRefParam("card-musa-akhmedov"), "musa-akhmedov");
  assert.equal(parseCardRefParam("  card-ab  "), "ab");
  assert.equal(parseCardRefParam(`card-${"a".repeat(40)}`), "a".repeat(40));

  // Invalid cases
  assert.equal(parseCardRefParam(null), null);
  assert.equal(parseCardRefParam(undefined), null);
  assert.equal(parseCardRefParam(""), null);
  assert.equal(parseCardRefParam("musa-akhmedov"), null);
  assert.equal(parseCardRefParam("card-"), null);
  assert.equal(parseCardRefParam("card-a"), null); // 1 char
  assert.equal(parseCardRefParam(`card-${"a".repeat(41)}`), null); // > 40 chars
  assert.equal(parseCardRefParam("card--invalid"), null);
  assert.equal(parseCardRefParam("card-invalid-"), null);
  assert.equal(parseCardRefParam("card-Musa"), null);
  assert.equal(parseCardRefParam("card-a/b"), null);
  assert.equal(isValidCardSlug("valid-slug-1"), true);
  assert.equal(isValidCardSlug("bad_slug"), false);
});

test("resolveSafeCardRedirect allows canonical card paths and blocks external URLs", () => {
  assert.equal(
    resolveSafeCardRedirect({
      found: true,
      redirectedFromAlias: true,
      redirectTo: "/card/musa-akhmedov",
    }),
    "/card/musa-akhmedov"
  );
  assert.equal(
    resolveSafeCardRedirect({
      found: true,
      redirectedFromAlias: true,
      redirectTo: "https://novaltron.com/card/musa-akhmedov",
    }),
    "/card/musa-akhmedov"
  );
  assert.equal(
    resolveSafeCardRedirect({
      found: true,
      redirectedFromAlias: true,
      redirectTo: "https://evil.example/phish",
      canonicalSlug: "musa-akhmedov",
    }),
    "/card/musa-akhmedov"
  );
  assert.equal(
    resolveSafeCardRedirect({
      found: true,
      redirectedFromAlias: true,
      redirectTo: "https://evil.example/phish",
    }),
    null
  );
});
