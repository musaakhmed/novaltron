import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { hasLocale } from "@/lib/i18n";
import { getDictionary } from "@/data/dictionaries";
import {
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  serializeJsonLd,
} from "@/lib/seo";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/legal">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return buildPageMetadata({
    lang,
    path: "/legal",
    title: dict.legal.metaTitle,
    description: dict.legal.subHeadline,
    siteName: dict.meta.siteName,
    ogImageAlt: dict.legal.h1,
  });
}

export default async function LegalPage({ params }: PageProps<"/[lang]/legal">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const { legal } = dict;
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(lang, [
    { name: dict.meta.siteName, path: "" },
    { name: legal.metaTitle, path: "/legal" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(breadcrumbJsonLd),
        }}
      />
      <section className="bg-blueprint-dark border-b border-[#234863] pt-28 pb-14 text-white lg:pt-32 lg:pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#5BB87A]/40 bg-[#267042]/20 px-3.5 py-1">
            <ShieldCheck aria-hidden="true" className="h-3.5 w-3.5 text-[#5BB87A]" />
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5BB87A]">
              {legal.eyebrow}
            </p>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {legal.h1}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-300">
            {legal.subHeadline}
          </p>
          <p className="mt-4 font-mono text-xs text-slate-400">{legal.updatedLabel}</p>
        </div>
      </section>

      <section className="bg-[#F4F7F9] py-14 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 rounded-2xl border border-[#D4DFE7] bg-white p-6 shadow-2xs sm:p-10">
            {legal.sections.map((sec) => (
              <div key={sec.heading} className="border-b border-slate-100 pb-6 last:border-b-0 last:pb-0">
                <h2 className="text-lg font-bold text-[#0A1F2E] sm:text-xl">
                  {sec.heading}
                </h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-[#455A69] sm:text-[15px]">
                  {sec.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href={`/${lang}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#267042] hover:text-[#1B5431]"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              <span>{dict.meta.siteName}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
