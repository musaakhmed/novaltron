export interface PublicCardPhone {
  label: string;
  number: string;
  whatsapp?: boolean;
}

export interface PublicCardProfile {
  slug: string;
  fullName: string;
  salutationPrefix: string | null;
  jobTitle: string;
  divisionLabel: string;
  scopeSummary: string;
  email: string;
  phones: PublicCardPhone[];
  whatsappNumber: string | null;
  whatsappNumbers?: string[];
  linkedinUrl: string | null;
  spokenLanguages: string[];
  legalEntity: string;
  corridorLine: string;
  corridorCompact: string;
  cardUrl: string;
  websiteUrl?: string;
  rfqUrl: string;
}

export interface ErmCardApiResponse {
  found: boolean;
  canonicalSlug?: string;
  redirectedFromAlias?: boolean;
  redirectTo?: string;
  card?: PublicCardProfile;
}

export const CANONICAL_LEGAL_ENTITY = "Novaltron LLC";
export const CANONICAL_CORRIDOR_LINE =
  "Azerbaijan · Belgium · Türkiye · Georgia · Central Asia";
export const CANONICAL_CORRIDOR_COMPACT = "AZ · BE · TR · GE · CENTRAL ASIA";

export const CORPORATE_FALLBACK_CARD: PublicCardProfile = {
  slug: "novaltron",
  fullName: CANONICAL_LEGAL_ENTITY,
  salutationPrefix: null,
  jobTitle: "Engineering, Sourcing & Turnkey Project Execution Desk",
  divisionLabel: "Corporate Desk",
  scopeSummary:
    "Industrial engineering, OEM sourcing, and turnkey project execution across agro-industrial and critical infrastructure corridors.",
  email: "info@novaltron.com",
  phones: [],
  whatsappNumber: null,
  whatsappNumbers: [],
  linkedinUrl: null,
  spokenLanguages: ["EN", "AZ", "TR", "RU"],
  legalEntity: CANONICAL_LEGAL_ENTITY,
  corridorLine: CANONICAL_CORRIDOR_LINE,
  corridorCompact: CANONICAL_CORRIDOR_COMPACT,
  cardUrl: "https://novaltron.com/card",
  websiteUrl: "https://novaltron.com",
  rfqUrl: "https://novaltron.com/contact",
};

const SAFE_FETCH_SLUG_REGEX = /^[a-z0-9][a-z0-9._-]{0,63}$/i;
const CANONICAL_REDIRECT_SLUG_REGEX = /^[a-z0-9][a-z0-9-]{0,63}$/;
const encoder = new TextEncoder();

export function getErmApiBaseUrl(): string {
  const raw = process.env.ERM_API_BASE_URL?.trim() || "https://erm.novaltron.com";
  return raw.replace(/\/+$/, "");
}

/**
 * Fetches a public digital business card from the ERM API.
 * Never throws: any error, timeout, or non-200 status returns `{ found: false }`.
 */
export async function fetchPublicCard(
  slug: string,
  options?: { noStore?: boolean }
): Promise<ErmCardApiResponse> {
  if (typeof slug !== "string") return { found: false };
  const normalized = slug.trim().toLowerCase();
  if (
    !normalized ||
    normalized.includes("..") ||
    normalized.includes("/") ||
    normalized.includes("\\") ||
    !SAFE_FETCH_SLUG_REGEX.test(normalized)
  ) {
    return { found: false };
  }

  const url = `${getErmApiBaseUrl()}/api/public/cards/${encodeURIComponent(normalized)}`;
  const secret = process.env.WEBSITE_RFQ_WEBHOOK_SECRET;
  const headers: Record<string, string> = {
    Accept: "application/json",
  };
  if (secret) {
    headers["x-novaltron-webhook-secret"] = secret;
  }

  try {
    const fetchInit: RequestInit & { next?: { revalidate: number } } = {
      method: "GET",
      headers,
      signal: AbortSignal.timeout(8000),
      ...(options?.noStore ? { cache: "no-store" } : { next: { revalidate: 60 } }),
    };

    const res = await fetch(url, fetchInit);
    if (!res.ok) {
      return { found: false };
    }

    const data = (await res.json()) as ErmCardApiResponse;
    if (!data || typeof data.found !== "boolean") {
      return { found: false };
    }
    return data;
  } catch {
    return { found: false };
  }
}

/**
 * Resolves a safe internal `/card/...` redirect path when ERM reports an alias redirect.
 * Rejects external hosts and path-traversal values.
 */
export function resolveSafeCardRedirect(
  data: ErmCardApiResponse
): string | null {
  if (!data.redirectedFromAlias) return null;

  if (typeof data.redirectTo === "string" && data.redirectTo.trim()) {
    const target = data.redirectTo.trim();
    if (
      target.startsWith("/card/") &&
      !target.startsWith("//") &&
      !target.includes("..")
    ) {
      return target;
    }
    try {
      const parsed = new URL(target);
      if (
        (parsed.hostname === "novaltron.com" ||
          parsed.hostname === "www.novaltron.com") &&
        parsed.pathname.startsWith("/card/") &&
        !parsed.pathname.includes("..")
      ) {
        return `${parsed.pathname}${parsed.search}`;
      }
    } catch {
      // Fall through to canonicalSlug check
    }
  }

  if (typeof data.canonicalSlug === "string") {
    const cleanSlug = data.canonicalSlug.trim().toLowerCase();
    if (CANONICAL_REDIRECT_SLUG_REGEX.test(cleanSlug)) {
      return `/card/${encodeURIComponent(cleanSlug)}`;
    }
  }

  return null;
}

export function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

export function normalizeTelHref(value: string): string {
  const trimmed = value.trim();
  const digits = digitsOnly(trimmed);
  if (!digits) return "";
  return trimmed.startsWith("+") ? `+${digits}` : digits;
}

/**
 * Escapes property values per RFC 2426 section 2.4.2 (`\`, `,`, `;`, newlines).
 */
export function escapeVcardValue(value: string): string {
  return value
    .replaceAll("\\", "\\\\")
    .replaceAll("\r\n", "\\n")
    .replaceAll("\r", "\\n")
    .replaceAll("\n", "\\n")
    .replaceAll(",", "\\,")
    .replaceAll(";", "\\;");
}

/**
 * Folds a single vCard content line to max 75 UTF-8 octets per line (RFC 2426 section 2.6),
 * never splitting multi-byte UTF-8 characters across lines.
 */
export function foldVcardLine(line: string, maxOctets = 75): string {
  if (encoder.encode(line).length <= maxOctets) {
    return line;
  }

  const segments: string[] = [];
  let current = "";
  let currentBytes = 0;
  let limit = maxOctets;

  for (const char of line) {
    const charBytes = encoder.encode(char).length;
    if (current && currentBytes + charBytes > limit) {
      segments.push(current);
      current = ` ${char}`;
      currentBytes = 1 + charBytes;
      limit = maxOctets;
    } else {
      current += char;
      currentBytes += charBytes;
    }
  }

  if (current) {
    segments.push(current);
  }

  return segments.join("\r\n");
}

function sanitizeUri(value: string | null | undefined): string | null {
  if (typeof value !== "string") return null;
  const cleaned = value.replace(/[\r\n\0]/g, "").trim();
  if (!cleaned) return null;
  try {
    const url = new URL(cleaned);
    if (url.protocol === "http:" || url.protocol === "https:") {
      return cleaned;
    }
  } catch {
    return null;
  }
  return null;
}

function formatStructuredName(
  fullName: string,
  salutationPrefix: string | null,
  legalEntity: string
): string {
  const normalized = fullName.trim().replace(/\s+/g, " ");
  const prefix = salutationPrefix?.trim() ?? "";

  if (!normalized) {
    return `${escapeVcardValue(CANONICAL_LEGAL_ENTITY)};;;;`;
  }

  if (normalized === legalEntity.trim() || normalized === CANONICAL_LEGAL_ENTITY) {
    return `${escapeVcardValue(normalized)};;;;`;
  }

  const tokens = normalized.split(" ");
  if (tokens.length === 1) {
    return `${escapeVcardValue(tokens[0])};;;${escapeVcardValue(prefix)};`;
  }
  if (tokens.length === 2) {
    const [given, family] = tokens;
    return `${escapeVcardValue(family)};${escapeVcardValue(given)};;${escapeVcardValue(prefix)};`;
  }

  const given = tokens[0];
  const family = tokens[tokens.length - 1];
  const middle = tokens.slice(1, -1).join(" ");
  return `${escapeVcardValue(family)};${escapeVcardValue(given)};${escapeVcardValue(middle)};${escapeVcardValue(prefix)};`;
}

/**
 * Renders an RFC 2426 vCard 3.0 payload for a Novaltron employee or corporate card.
 * Strictly omits ADR and preserves Latin `Novaltron LLC` legal entity rules.
 */
export function renderVcard30(card: PublicCardProfile): string {
  const displayName = card.fullName.trim() || CANONICAL_LEGAL_ENTITY;
  const orgName =
    card.legalEntity?.trim() === CANONICAL_LEGAL_ENTITY
      ? CANONICAL_LEGAL_ENTITY
      : CANONICAL_LEGAL_ENTITY;

  const lines: string[] = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${formatStructuredName(displayName, card.salutationPrefix, orgName)}`,
    `FN:${escapeVcardValue(displayName)}`,
    `ORG:${escapeVcardValue(orgName)}`,
  ];

  const jobTitle = card.jobTitle?.trim();
  if (jobTitle) {
    lines.push(`TITLE:${escapeVcardValue(jobTitle)}`);
  }

  const seenPhoneDigits = new Set<string>();
  for (const phone of card.phones ?? []) {
    const rawNum = phone?.number?.replace(/[\r\n\0]/g, "").trim();
    if (!rawNum) continue;
    const digits = digitsOnly(rawNum);
    if (!digits || seenPhoneDigits.has(digits)) continue;
    seenPhoneDigits.add(digits);
    lines.push(`TEL;TYPE=CELL,VOICE:${rawNum}`);
  }

  const extraWhatsappNumbers = [
    ...(card.whatsappNumbers ?? []),
    ...(card.whatsappNumber ? [card.whatsappNumber] : []),
  ];
  for (const rawWa of extraWhatsappNumbers) {
    const cleanedWa = rawWa?.replace(/[\r\n\0]/g, "").trim();
    if (!cleanedWa) continue;
    const waDigits = digitsOnly(cleanedWa);
    if (waDigits && !seenPhoneDigits.has(waDigits)) {
      seenPhoneDigits.add(waDigits);
      lines.push(`TEL;TYPE=CELL,VOICE:${cleanedWa}`);
    }
  }

  const email = card.email?.replace(/[\r\n\0]/g, "").trim();
  if (email) {
    lines.push(`EMAIL;TYPE=PREF,INTERNET:${escapeVcardValue(email)}`);
  }

  const websiteUrl = sanitizeUri(card.websiteUrl) || "https://novaltron.com";
  lines.push(`URL:${websiteUrl}`);

  const linkedinUrl = sanitizeUri(card.linkedinUrl);
  if (linkedinUrl) {
    lines.push(`X-SOCIALPROFILE;TYPE=linkedin:${linkedinUrl}`);
  }

  const corridor = card.corridorLine?.trim() || CANONICAL_CORRIDOR_LINE;
  const scope = card.scopeSummary?.trim();
  const noteText = scope ? `${scope} — ${corridor}` : corridor;
  if (noteText) {
    lines.push(`NOTE:${escapeVcardValue(noteText)}`);
  }

  lines.push("END:VCARD");

  return `${lines.map((line) => foldVcardLine(line, 75)).join("\r\n")}\r\n`;
}
