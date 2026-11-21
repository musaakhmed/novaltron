import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { hasLocale } from "@/lib/i18n";
import { getDictionary } from "@/data/dictionaries";
import {
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  serializeJsonLd,
} from "@/lib/seo";
import { StickyAnchorBar } from "@/components/StickyAnchorBar";
import { RevealSection } from "@/components/RevealSection";
import { TechnicalSchematic } from "@/components/TechnicalDiagrams";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/agro-solutions">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return buildPageMetadata({
    lang,
    path: "/agro-solutions",
    title: dict.agroSolutions.metaTitle,
    description: dict.agroSolutions.subHeadline,
    siteName: dict.meta.siteName,
    ogImage: "/images/agro-irrigation.jpg",
    ogImageAlt: dict.agroSolutions.h1,
  });
}

export default async function AgroSolutionsPage({
  params,
}: PageProps<"/[lang]/agro-solutions">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const { agroSolutions } = dict;
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(lang, [
    { name: dict.meta.siteName, path: "" },
    { name: agroSolutions.metaTitle, path: "/agro-solutions" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(breadcrumbJsonLd),
        }}
      />
      {/* Editorial Hero */}
      <section className="bg-blueprint-dark border-b border-slate-800 pt-28 pb-16 text-white lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#059669]/40 bg-[#059669]/12 px-3.5 py-1">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#34D399]" />
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#34D399]">
              {agroSolutions.eyebrow}
            </p>
          </div>
          <h1 className="mt-5 max-w-4xl text-3xl font-extrabold leading-[1.12] text-white sm:text-4xl lg:text-[2.65rem]">
            {agroSolutions.h1}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {agroSolutions.subHeadline}
          </p>
        </div>
      </section>

      {/* Sticky In-Page Anchor Bar */}
      <StickyAnchorBar anchors={agroSolutions.anchors} accent="emerald" />

      {/* 4 Numbered Engineering Pillar Sections */}
      <div className="bg-[#F8FAFC] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">
          {agroSolutions.pillars.map((pillar) => (
            <section
              key={pillar.id}
              id={pillar.id}
              className="scroll-mt-32 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-2xs sm:p-8 lg:p-10"
            >
              <RevealSection>
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
                  <div className="min-w-0 lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="band-numeral text-3xl font-bold text-[#059669] sm:text-4xl">
                        {pillar.number}
                      </span>
                      {pillar.standards.map((std) => (
                        <span
                          key={std}
                          className="rounded-md border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-0.5 font-mono text-xs font-semibold text-[#334155]"
                        >
                          {std}
                        </span>
                      ))}
                    </div>

                    <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#0F172A] sm:text-3xl">
                      {pillar.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-[#334155]">
                      {pillar.subtitle}
                    </p>

                    <ul className="mt-6 flex flex-col gap-3">
                      {pillar.items.map((item, itemIdx) => (
                        <li
                          key={item.heading}
                          className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 transition-colors duration-150 hover:border-[#059669]/50"
                        >
                          <div className="flex items-start gap-3">
                            <span className="mt-0.5 shrink-0 rounded-md border border-[#059669]/20 bg-[#059669]/8 px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none text-[#059669]">
                              {pillar.number}.{itemIdx + 1}
                            </span>
                            <div className="min-w-0">
                              <h3 className="text-sm font-bold leading-snug text-[#0F172A] sm:text-[15px]">
                                {item.heading}
                              </h3>
                              <p className="mt-1 text-sm leading-relaxed text-[#334155]">
                                {item.detail}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex min-w-0 flex-col gap-4 lg:col-span-5">
                    {pillar.imageSrc && (
                      <div className="relative aspect-[16/9] w-full overflow-clip rounded-xl border border-[#E2E8F0] bg-slate-900">
                        <Image
                          src={pillar.imageSrc}
                          alt={pillar.imageAlt || pillar.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 42vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <TechnicalSchematic
                      variant={
                        pillar.id as
                          | "irrigation"
                          | "greenhouses"
                          | "grain-silos"
                          | "safety-feed"
                      }
                      label={pillar.diagramLabel}
                      code={`PILLAR ${pillar.number}`}
                      compact={Boolean(pillar.imageSrc)}
                      aspect="16/9"
                    />
                  </div>
                </div>
              </RevealSection>
            </section>
          ))}

          {/* Bottom Conversion Banner */}
          <RevealSection className="bg-blueprint-dark rounded-2xl border border-slate-800 p-8 text-white shadow-lg sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                  {agroSolutions.bottomCtaTitle}
                </h2>
                <p className="mt-2.5 text-sm text-slate-300 sm:text-base">
                  {agroSolutions.bottomCtaBody}
                </p>
              </div>
              <Link
                href={`/${lang}/contact?division=agro-irrigation`}
                className="group inline-flex min-h-[48px] shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#059669] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#047857]"
              >
                <span>{agroSolutions.bottomCtaButton.replace(" →", "")}</span>
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </RevealSection>
        </div>
      </div>
    </>
  );
}
