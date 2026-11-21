import crypto from "node:crypto";
import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/lib/site-config";
import {
  INDEXNOW_ENDPOINT,
  INDEXNOW_KEY,
  getAllPublicUrls,
} from "@/lib/seo";

function isAuthorized(request: Request, expectedSecret: string): boolean {
  const authHeader = request.headers.get("authorization") || "";
  const prefix = "Bearer ";
  if (!authHeader.startsWith(prefix)) return false;
  const provided = Buffer.from(authHeader.slice(prefix.length));
  const expected = Buffer.from(expectedSecret);
  if (provided.length !== expected.length) return false;
  return crypto.timingSafeEqual(provided, expected);
}

export async function POST(request: Request) {
  const submitSecret = process.env.INDEXNOW_SUBMIT_SECRET;
  if (!submitSecret) {
    return NextResponse.json(
      { ok: false, error: "INDEXNOW_SUBMIT_SECRET is not configured." },
      { status: 503 }
    );
  }

  if (!isAuthorized(request, submitSecret)) {
    return NextResponse.json(
      { ok: false, error: "Unauthorized." },
      { status: 401 }
    );
  }

  let urlList = getAllPublicUrls();

  const contentType = request.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    try {
      const body = (await request.json()) as { urls?: unknown };
      if (Array.isArray(body.urls) && body.urls.length > 0) {
        const hostPrefix = `${SITE_CONFIG.websiteUrl}/`;
        const filtered = body.urls
          .filter((item): item is string => typeof item === "string")
          .map((item) => item.trim())
          .filter((item) => item === SITE_CONFIG.websiteUrl || item.startsWith(hostPrefix));

        if (filtered.length === 0) {
          return NextResponse.json(
            { ok: false, error: `All URLs must belong to ${SITE_CONFIG.websiteUrl}.` },
            { status: 400 }
          );
        }
        urlList = filtered.slice(0, 10000);
      }
    } catch {
      return NextResponse.json(
        { ok: false, error: "Invalid JSON payload." },
        { status: 400 }
      );
    }
  }

  const host = new URL(SITE_CONFIG.websiteUrl).host;
  const payload = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_CONFIG.websiteUrl}/${INDEXNOW_KEY}.txt`,
    urlList,
  };

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  const responseText = await response.text();
  return NextResponse.json(
    {
      ok: response.ok,
      status: response.status,
      submittedCount: urlList.length,
      response: responseText || null,
    },
    { status: response.ok ? 200 : 502 }
  );
}
