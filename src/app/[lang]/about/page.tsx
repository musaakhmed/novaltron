import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Layers,
  Shield,
} from "lucide-react";
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
}: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return buildPageMetadata({
    lang,
    path: "/about",
    title: dict.aboutCompliance.metaTitle,
    description: dict.aboutCompliance.subHeadline,
    siteName: dict.meta.siteName,
    ogImageAlt: dict.aboutCompliance.h1,
  });
}

export default async function AboutCompliancePage({
  params,
}: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const { aboutCompliance } = dict;
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(lang, [
    { name: dict.meta.siteName, path: "" },
    { name: aboutCompliance.metaTitle, path: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(breadcrumbJsonLd),
        }}
      />
      {/* Hero */}
      <section className="bg-blueprint-dark border-b border-[#234863] pt-28 pb-16 text-white lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#5BB87A]/40 bg-[#267042]/20 px-3.5 py-1">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#5BB87A]" />
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5BB87A]">
              {aboutCompliance.eyebrow}
            </p>
          </div>
          <h1 className="mt-5 max-w-4xl text-3xl font-extrabold leading-[1.12] text-white sm:text-4xl lg:text-[2.65rem]">
            {aboutCompliance.h1}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {aboutCompliance.subHeadline}
          </p>
        </div>
      </section>

      {/* Sticky Anchor Bar */}
      <StickyAnchorBar anchors={aboutCompliance.anchors} accent="emerald" />

      {/* Section 01: Regional Corporate Hub */}
      <section
        id="corporate-structure"
        className="scroll-mt-36 bg-[#F4F7F9] py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex items-baseline gap-3.5">
              <span className="band-numeral text-3xl font-bold text-[#267042] sm:text-4xl">
                01
              </span>
              <h2 className="text-2xl font-extrabold text-[#0A1F2E] sm:text-3xl">
                {aboutCompliance.corporateTitle}
              </h2>
            </div>
            <p className="mt-3 max-w-3xl text-base text-[#455A69]">
              {aboutCompliance.corporateSubtitle}
            </p>
          </RevealSection>

          <RevealSection className="mt-10 rounded-2xl border border-[#D4DFE7] bg-white p-6 shadow-2xs sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="min-w-0 lg:col-span-7">
                <div className="flex items-center gap-3.5">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A1F2E] text-white">
                    <Building2 aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A1F2E]">
                      {aboutCompliance.corporateHubName}
                    </h3>
                    <p className="font-mono text-xs font-semibold text-[#267042]">
                      {aboutCompliance.corporateHubRole}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#455A69]">
                  {aboutCompliance.corporateHubPoints.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#267042]"
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {aboutCompliance.corridorCountries.map((country) => (
                    <span
                      key={country}
                      className="rounded-lg border border-[#D4DFE7] bg-[#F4F7F9] px-3 py-1.5 font-mono text-xs font-semibold text-[#0A1F2E]"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>

              <div className="min-w-0 lg:col-span-5">
                <TechnicalSchematic
                  variant="corridor-map"
                  label={aboutCompliance.corridorDiagramLabel}
                  code="HUB-TBILISI"
                  className="bg-[#F4F7F9]"
                />
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Section 02: Operating Model, Governance & Standards */}
      <section
        id="governance"
        className="scroll-mt-36 border-y border-[#D4DFE7] bg-white py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex items-baseline gap-3.5">
              <span className="band-numeral text-3xl font-bold text-[#267042] sm:text-4xl">
                02
              </span>
              <h2 className="text-2xl font-extrabold text-[#0A1F2E] sm:text-3xl">
                {aboutCompliance.governanceTitle}
              </h2>
            </div>
            <p className="mt-3 max-w-3xl text-base text-[#455A69]">
              {aboutCompliance.governanceSubtitle}
            </p>
          </RevealSection>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <RevealSection>
              <article className="h-full rounded-2xl border border-[#D4DFE7] bg-[#F4F7F9] p-6 shadow-2xs sm:p-7">
                <Layers aria-hidden="true" className="h-6 w-6 text-[#267042]" />
                <h3 className="mt-4 text-lg font-bold text-[#0A1F2E]">
                  {aboutCompliance.operatingModelHeading}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#455A69]">
                  {aboutCompliance.operatingModelBody}
                </p>
              </article>
            </RevealSection>

            <RevealSection delayMs={80}>
              <article className="h-full rounded-2xl border border-[#D4DFE7] bg-[#F4F7F9] p-6 shadow-2xs sm:p-7">
                <Shield aria-hidden="true" className="h-6 w-6 text-[#B45309]" />
                <h3 className="mt-4 text-lg font-bold text-[#0A1F2E]">
                  {aboutCompliance.standardsHeading}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#455A69]">
                  {aboutCompliance.standardsBody}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {aboutCompliance.standardsList.map((std) => (
                    <span
                      key={std}
                      className="rounded border border-amber-200 bg-amber-50 px-2.5 py-0.5 font-mono text-xs font-semibold text-[#92400E]"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </article>
            </RevealSection>

            <RevealSection delayMs={160}>
              <article className="h-full rounded-2xl border border-[#D4DFE7] bg-[#F4F7F9] p-6 shadow-2xs sm:p-7">
                <CheckCircle2 aria-hidden="true" className="h-6 w-6 text-[#006B68]" />
                <h3 className="mt-4 text-lg font-bold text-[#0A1F2E]">
                  {aboutCompliance.documentationHeading}
                </h3>
                <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-[#455A69]">
                  {aboutCompliance.documentationItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#006B68]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Section 03: Institutional Readiness & Vendor Pre-Qualification */}
      <section
        id="compliance-readiness"
        className="scroll-mt-36 bg-[#F4F7F9] py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex items-baseline gap-3.5">
              <span className="band-numeral text-3xl font-bold text-[#267042] sm:text-4xl">
                03
              </span>
              <h2 className="text-2xl font-extrabold text-[#0A1F2E] sm:text-3xl">
                {aboutCompliance.complianceTitle}
              </h2>
            </div>
            <p className="mt-3 max-w-3xl text-base text-[#455A69]">
              {aboutCompliance.complianceSubtitle}
            </p>
          </RevealSection>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {dict.home.trustSection.governancePillars.map((pillar, idx) => (
              <RevealSection key={pillar.number} delayMs={idx * 80}>
                <article className="flex h-full flex-col justify-between rounded-2xl border border-[#D4DFE7] bg-white p-6 shadow-2xs sm:p-7">
                  <div>
                    <div className="flex items-center justify-between gap-2 border-b border-[#D4DFE7] pb-4">
                      <span className="band-numeral text-3xl font-bold text-[#267042]">
                        {pillar.number}
                      </span>
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                        COMPLIANCE
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-[#0A1F2E]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#455A69]">
                      {pillar.detail}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-[#D4DFE7]/80 pt-4">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-amber-200/80 bg-amber-50/70 px-2 py-0.5 font-mono text-[11px] font-semibold text-[#92400E]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </RevealSection>
            ))}
          </div>

          {/* Bottom Conversion Banner */}
          <RevealSection className="bg-blueprint-dark mt-14 rounded-2xl border border-[#234863] p-8 text-white shadow-lg sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                  {aboutCompliance.bottomCtaTitle}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {aboutCompliance.bottomCtaBody}
                </p>
                <div className="mt-4">
                  <Link
                    href={`/${lang}/legal`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#5BB87A] underline decoration-[#5BB87A]/50 underline-offset-4 transition-colors hover:text-white"
                  >
                    {dict.footer.legalLinkLabel}
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  href={`/${lang}/contact`}
                  className="group inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#267042] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1E5B35]"
                >
                  <span>{aboutCompliance.bottomCtaButton.replace(" →", "")}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href={`/${lang}/turnkey-delivery`}
                  className="inline-flex min-h-[48px] cursor-pointer items-center justify-center rounded-xl border border-white/25 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10"
                >
                  {aboutCompliance.turnkeyCrossLinkLabel}
                </Link>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
