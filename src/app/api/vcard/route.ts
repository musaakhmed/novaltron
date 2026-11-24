import { CORPORATE_FALLBACK_CARD, renderVcard30 } from "@/lib/erm-cards";

export async function GET() {
  const vcardBody = renderVcard30(CORPORATE_FALLBACK_CARD);

  return new Response(vcardBody, {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Novaltron_LLC.vcf"',
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "private, no-store",
    },
  });
}
