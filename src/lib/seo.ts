import type { Metadata } from "next";
import { DEFAULT_LOCALE, LOCALES, OG_LOCALES, type Locale } from "@/lib/i18n";
import { SITE_CONFIG } from "@/lib/site-config";
import type { SiteDictionary } from "@/data/dictionaries/types";

export const SITE_LAST_MODIFIED = "2026-11-21";
export const INDEXNOW_KEY = "39ff644dd0ba251796c980445855cb2b";
export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

export interface PublicRouteConfig {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
}

export const PUBLIC_ROUTES: readonly PublicRouteConfig[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/agro-solutions", changeFrequency: "monthly", priority: 0.9 },
  { path: "/bio-ipm", changeFrequency: "monthly", priority: 0.9 },
  { path: "/industrial-infrastructure", changeFrequency: "monthly", priority: 0.9 },
  { path: "/turnkey-delivery", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/legal", changeFrequency: "yearly", priority: 0.3 },
] as const;

const DEFAULT_OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
} as const;

export function buildLocaleUrl(lang: Locale, path = ""): string {
  const normalizedPath = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  return `${SITE_CONFIG.websiteUrl}/${lang}${normalizedPath}`;
}

export function getAllPublicUrls(): string[] {
  return PUBLIC_ROUTES.flatMap((route) =>
    LOCALES.map((lang) => buildLocaleUrl(lang, route.path))
  );
}

export function buildLanguageAlternates(path = ""): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    languages[locale] = buildLocaleUrl(locale, path);
  }
  languages["x-default"] = buildLocaleUrl(DEFAULT_LOCALE, path);
  return languages;
}

interface PageMetadataInput {
  lang: Locale;
  path: string;
  title: string;
  description: string;
  siteName: string;
  isHome?: boolean;
  ogImage?: string;
  ogImageAlt?: string;
}

export function buildPageMetadata({
  lang,
  path,
  title,
  description,
  siteName,
  isHome = false,
  ogImage = DEFAULT_OG_IMAGE.url,
  ogImageAlt,
}: PageMetadataInput): Metadata {
  const canonicalUrl = buildLocaleUrl(lang, path);
  const socialTitle = isHome ? title : `${title} | ${siteName}`;
  const alternateLocales = LOCALES.filter((l) => l !== lang).map((l) => OG_LOCALES[l]);
  const imageEntry = {
    url: ogImage,
    width: DEFAULT_OG_IMAGE.width,
    height: DEFAULT_OG_IMAGE.height,
    alt: ogImageAlt || socialTitle,
  };

  return {
    title: isHome ? { absolute: title } : title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: buildLanguageAlternates(path),
    },
    openGraph: {
      title: socialTitle,
      description,
      url: canonicalUrl,
      siteName,
      locale: OG_LOCALES[lang],
      alternateLocale: alternateLocales,
      type: "website",
      images: [imageEntry],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [imageEntry],
    },
  };
}

export function buildOrganizationJsonLd(dict: SiteDictionary) {
  const sameAs = Object.values(SITE_CONFIG.social)
    .filter((item) => item.configured && item.href)
    .map((item) => item.href);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.websiteUrl}/#organization`,
    name: SITE_CONFIG.companyName,
    alternateName: [dict.meta.siteName, SITE_CONFIG.companyGeorgianName],
    url: SITE_CONFIG.websiteUrl,
    email: SITE_CONFIG.email,
    description: dict.meta.defaultDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tbilisi",
      addressCountry: "GE",
    },
    areaServed: [
      { "@type": "Country", name: "Azerbaijan" },
      { "@type": "Country", name: "Georgia" },
      { "@type": "Country", name: "Uzbekistan" },
      { "@type": "Country", name: "Kazakhstan" },
      { "@type": "Country", name: "Turkey" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: SITE_CONFIG.email,
      availableLanguage: ["en", "az", "tr", "ru"],
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function buildWebSiteJsonLd(lang: Locale, dict: SiteDictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.websiteUrl}/#website`,
    name: dict.meta.siteName,
    url: buildLocaleUrl(lang),
    inLanguage: lang,
    publisher: {
      "@id": `${SITE_CONFIG.websiteUrl}/#organization`,
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function buildBreadcrumbJsonLd(lang: Locale, items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: buildLocaleUrl(lang, item.path),
    })),
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
