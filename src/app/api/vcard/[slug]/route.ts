import { NextResponse, type NextRequest } from "next/server";
import { fetchPublicCard, renderVcard30 } from "@/lib/erm-cards";

const NOINDEX_NOSTORE_HEADERS = {
  "X-Robots-Tag": "noindex, nofollow",
  "Cache-Control": "private, no-store",
} as const;

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const res = await fetchPublicCard(slug, { noStore: true });

  if (res.redirectedFromAlias && !res.card && res.canonicalSlug) {
    const cleanCanonical = res.canonicalSlug
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "");
    if (cleanCanonical) {
      return NextResponse.redirect(
        new URL(`/api/vcard/${encodeURIComponent(cleanCanonical)}`, request.url),
        {
          status: 302,
          headers: NOINDEX_NOSTORE_HEADERS,
        }
      );
    }
  }

  if (!res.found || !res.card) {
    return NextResponse.redirect(new URL("/card", request.url), {
      status: 302,
      headers: NOINDEX_NOSTORE_HEADERS,
    });
  }

  const safeSlug =
    res.card.slug.replace(/[^a-zA-Z0-9_-]/g, "") || "contact";
  const vcardBody = renderVcard30(res.card);

  return new Response(vcardBody, {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="Novaltron_${safeSlug}.vcf"`,
      ...NOINDEX_NOSTORE_HEADERS,
    },
  });
}
