import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { LOCALES, hasLocale } from "@/lib/i18n";
import { getDictionary } from "@/data/dictionaries";
import { SITE_CONFIG } from "@/lib/site-config";
import {
  buildOrganizationJsonLd,
  buildWebSiteJsonLd,
  serializeJsonLd,
} from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);

  return {
    title: {
      default: dict.meta.defaultTitle,
      template: `%s | ${dict.meta.siteName}`,
    },
    description: dict.meta.defaultDescription,
    metadataBase: new URL(SITE_CONFIG.websiteUrl),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const organizationJsonLd = buildOrganizationJsonLd(dict);
  const webSiteJsonLd = buildWebSiteJsonLd(lang, dict);

  return (
    <html lang={lang} data-scroll-behavior="smooth" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-[#F8FAFC] text-[#334155] selection:bg-[#059669] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd([organizationJsonLd, webSiteJsonLd]),
          }}
        />
        <a
          href="#main-content"
          className="visually-hidden focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-[#059669] focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          {dict.meta.skipToContent}
        </a>
        <Header lang={lang} dict={dict} />
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer lang={lang} dict={dict} />
      </body>
    </html>
  );
}
