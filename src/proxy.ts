import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["en", "az", "tr", "ru"] as const;
const DEFAULT_LOCALE = "en";
const CANONICAL_HOST = "novaltron.com";
const WWW_HOST = "www.novaltron.com";

export function proxy(request: NextRequest) {
  const { pathname, hostname } = request.nextUrl;

  // Permanently normalize www.novaltron.com -> novaltron.com
  if (hostname === WWW_HOST) {
    const canonicalUrl = request.nextUrl.clone();
    canonicalUrl.protocol = "https";
    canonicalUrl.hostname = CANONICAL_HOST;
    canonicalUrl.port = "";
    return NextResponse.redirect(canonicalUrl, 308);
  }

  // Skip Next.js internals, API routes, and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/brand-studio" ||
    pathname === "/brand-studio/" ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Permanently redirect `/` and unprefixed paths to the canonical English locale
  const targetUrl = request.nextUrl.clone();
  targetUrl.pathname =
    pathname === "/" ? `/${DEFAULT_LOCALE}` : `/${DEFAULT_LOCALE}${pathname}`;
  return NextResponse.redirect(targetUrl, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
