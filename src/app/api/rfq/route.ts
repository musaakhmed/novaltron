import { NextResponse } from "next/server";

const ALLOWED_EXTENSIONS = [".pdf", ".xlsx", ".xls", ".docx", ".doc", ".zip"];
const MAX_FILE_BYTES = 25 * 1024 * 1024; // 25 MB

interface RfqPayload {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  division: string;
  timeline: string;
  scope: string;
  locale: string;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    let payload: RfqPayload;
    let attachment: { filename: string; content: string } | null = null;

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      payload = {
        fullName: String(formData.get("fullName") ?? "").trim(),
        company: String(formData.get("company") ?? "").trim(),
        email: String(formData.get("email") ?? "").trim(),
        phone: String(formData.get("phone") ?? "").trim(),
        country: String(formData.get("country") ?? "").trim(),
        division: String(formData.get("division") ?? "").trim(),
        timeline: String(formData.get("timeline") ?? "").trim(),
        scope: String(formData.get("scope") ?? "").trim(),
        locale: String(formData.get("locale") ?? "en").trim(),
      };

      const file = formData.get("boqFile");
      if (file instanceof File && file.size > 0) {
        if (file.size > MAX_FILE_BYTES) {
          return NextResponse.json(
            { ok: false, error: "Attached BOQ file exceeds the 25 MB limit." },
            { status: 400 }
          );
        }
        const lowerName = file.name.toLowerCase();
        const validExt = ALLOWED_EXTENSIONS.some((ext) => lowerName.endsWith(ext));
        if (!validExt) {
          return NextResponse.json(
            {
              ok: false,
              error: "Unsupported file format. Accepted: .pdf, .xlsx, .xls, .docx, .doc, .zip.",
            },
            { status: 400 }
          );
        }
        const buffer = Buffer.from(await file.arrayBuffer());
        attachment = {
          filename: file.name,
          content: buffer.toString("base64"),
        };
      }
    } else {
      const body = await request.json();
      payload = {
        fullName: String(body?.fullName ?? "").trim(),
        company: String(body?.company ?? "").trim(),
        email: String(body?.email ?? "").trim(),
        phone: String(body?.phone ?? "").trim(),
        country: String(body?.country ?? "").trim(),
        division: String(body?.division ?? "").trim(),
        timeline: String(body?.timeline ?? "").trim(),
        scope: String(body?.scope ?? "").trim(),
        locale: String(body?.locale ?? "en").trim(),
      };
    }

    if (
      !payload.fullName ||
      !payload.company ||
      !payload.email ||
      !payload.phone ||
      !payload.country ||
      !payload.division ||
      !payload.scope
    ) {
      return NextResponse.json(
        { ok: false, error: "Missing required RFQ fields." },
        { status: 400 }
      );
    }

    const referenceId = `NVL-${Date.now().toString(36).toUpperCase()}`;
    const toEmail = process.env.RFQ_TO_EMAIL || "info@novaltron.com";
    const fromEmail = process.env.RFQ_FROM_EMAIL || "Novaltron RFQ Desk <rfq@novaltron.com>";
    const resendApiKey = process.env.RESEND_API_KEY;

    const htmlBody = `
      <div style="font-family: Inter, -apple-system, sans-serif; color: #0F172A; max-width: 640px;">
        <h2 style="margin: 0 0 8px;">New Project RFQ — ${escapeHtml(referenceId)}</h2>
        <p style="margin: 0 0 20px; color: #475569; font-size: 14px;">Routed via novaltron.com (${escapeHtml(payload.locale.toUpperCase())})</p>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;"><strong>Full Name</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;">${escapeHtml(payload.fullName)}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;"><strong>Company</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;">${escapeHtml(payload.company)}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;"><strong>Work Email</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;">${escapeHtml(payload.email)}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;"><strong>Phone / WhatsApp</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;">${escapeHtml(payload.phone)}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;"><strong>Country / Region</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;">${escapeHtml(payload.country)}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;"><strong>Primary Division</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;">${escapeHtml(payload.division)}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;"><strong>Estimated Timeline</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;">${escapeHtml(payload.timeline || "Not specified")}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;"><strong>BOQ Attachment</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;">${escapeHtml(attachment ? attachment.filename : "None")}</td></tr>
        </table>
        <h3 style="margin: 20px 0 8px;">Project Scope &amp; Technical Summary</h3>
        <p style="white-space: pre-wrap; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 14px; font-size: 14px;">${escapeHtml(payload.scope)}</p>
      </div>
    `;

    if (resendApiKey) {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: payload.email,
          subject: `[RFQ ${referenceId}] ${payload.company} — ${payload.country} (${payload.division})`,
          html: htmlBody,
          ...(attachment ? { attachments: [attachment] } : {}),
        }),
      });

      if (!resendResponse.ok) {
        const errText = await resendResponse.text();
        console.error("[Novaltron RFQ] Email dispatch error:", errText);
        return NextResponse.json(
          { ok: false, error: "Unable to dispatch RFQ email right now. Please email info@novaltron.com directly." },
          { status: 502 }
        );
      }

      return NextResponse.json(
        {
          ok: true,
          routedTo: toEmail,
          referenceId,
          deliveryMode: "email-dispatched",
        },
        { status: 200 }
      );
    }

    // Structured fallback when RESEND_API_KEY is not yet configured in local/staging environments
    console.info("[Novaltron RFQ Captured — set RESEND_API_KEY for live email delivery]", {
      referenceId,
      routedTo: toEmail,
      ...payload,
      attachmentFilename: attachment?.filename ?? null,
    });

    return NextResponse.json(
      {
        ok: true,
        routedTo: toEmail,
        referenceId,
        deliveryMode: "logged-awaiting-smtp-key",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Novaltron RFQ] Submission error:", err);
    return NextResponse.json(
      { ok: false, error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
