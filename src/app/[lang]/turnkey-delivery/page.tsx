import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Truck,
  Wrench,
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
import { TurnkeyStepper } from "@/components/TurnkeyStepper";

const PILLAR_ICONS = [Truck, ClipboardCheck, Wrench];

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/turnkey-delivery">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return buildPageMetadata({
    lang,
    path: "/turnkey-delivery",
    title: dict.turnkeyDelivery.metaTitle,
    description: dict.turnkeyDelivery.subHeadline,
    siteName: dict.meta.siteName,
    ogImageAlt: dict.turnkeyDelivery.h1,
  });
}

export default async function TurnkeyDeliveryPage({
  params,
}: PageProps<"/[lang]/turnkey-delivery">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const { turnkeyDelivery } = dict;
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(lang, [
    { name: dict.meta.siteName, path: "" },
    { name: turnkeyDelivery.metaTitle, path: "/turnkey-delivery" },
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
              {turnkeyDelivery.eyebrow}
            </p>
          </div>
          <h1 className="mt-5 max-w-4xl text-3xl font-extrabold leading-[1.12] text-white sm:text-4xl lg:text-[2.65rem]">
            {turnkeyDelivery.h1}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {turnkeyDelivery.subHeadline}
          </p>
        </div>
      </section>

      {/* Sticky Anchor Bar */}
      <StickyAnchorBar anchors={turnkeyDelivery.anchors} accent="emerald" />

      {/* Section 01: 5-Step Execution Workflow */}
      <section id="workflow" className="scroll-mt-36 bg-[#F4F7F9] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection className="mb-10">
            <div className="flex items-baseline gap-3.5">
              <span className="band-numeral text-3xl font-bold text-[#267042] sm:text-4xl">
                01
              </span>
              <h2 className="text-2xl font-extrabold text-[#0A1F2E] sm:text-3xl">
                {turnkeyDelivery.workflowTitle}
              </h2>
            </div>
            <p className="mt-3 max-w-3xl text-base text-[#455A69]">
              {turnkeyDelivery.workflowSubtitle}
            </p>
          </RevealSection>

          <TurnkeyStepper
            steps={turnkeyDelivery.steps}
            deliverableLabel={dict.home.deliverySection.deliverableLabel}
          />
        </div>
      </section>

      {/* Section 02: Execution Pillars & Quality Gates */}
      <section
        id="execution-pillars"
        className="scroll-mt-36 border-y border-[#D4DFE7] bg-white py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex items-baseline gap-3.5">
              <span className="band-numeral text-3xl font-bold text-[#267042] sm:text-4xl">
                02
              </span>
              <h2 className="text-2xl font-extrabold text-[#0A1F2E] sm:text-3xl">
                {turnkeyDelivery.pillarsTitle}
              </h2>
            </div>
            <p className="mt-3 max-w-3xl text-base text-[#455A69]">
              {turnkeyDelivery.pillarsSubtitle}
            </p>
          </RevealSection>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {turnkeyDelivery.executionPillars.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
              return (
                <RevealSection key={pillar.title} delayMs={idx * 80}>
                  <article className="flex h-full flex-col justify-between rounded-2xl border border-[#D4DFE7] bg-[#F4F7F9] p-6 shadow-2xs sm:p-7">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A1F2E] text-[#5BB87A]">
                          <Icon aria-hidden="true" className="h-5 w-5" />
                        </span>
                        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#267042]">
                          {pillar.badge}
                        </span>
                      </div>

                      <h3 className="mt-5 text-lg font-bold text-[#0A1F2E]">
                        {pillar.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-[#455A69]">
                        {pillar.body}
                      </p>

                      <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[#455A69]">
                        {pillar.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2">
                            <CheckCircle2
                              aria-hidden="true"
                              className="mt-0.5 h-4 w-4 shrink-0 text-[#267042]"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-1.5 border-t border-[#D4DFE7] pt-4">
                      {pillar.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-[#D4DFE7] bg-white px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#455A69]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 03: Representative Turnkey Scope Benchmarks */}
      <section id="benchmarks" className="scroll-mt-36 bg-[#F4F7F9] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex items-baseline gap-3.5">
              <span className="band-numeral text-3xl font-bold text-[#267042] sm:text-4xl">
                03
              </span>
              <h2 className="text-2xl font-extrabold text-[#0A1F2E] sm:text-3xl">
                {turnkeyDelivery.scopesTitle}
              </h2>
            </div>
            <p className="mt-3 max-w-3xl text-base text-[#455A69]">
              {turnkeyDelivery.scopesSubtitle}
            </p>
          </RevealSection>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {dict.home.referenceSection.scopes.map((item, idx) => (
              <RevealSection key={item.code} delayMs={idx * 80}>
                <article className="flex h-full flex-col justify-between rounded-2xl border border-[#D4DFE7] bg-white p-6 shadow-2xs">
                  <div>
                    <div className="flex items-baseline justify-between gap-2 border-b border-[#D4DFE7] pb-4">
                      <div>
                        <span className="block font-mono text-[11px] font-bold text-[#267042]">
                          {item.code}
                        </span>
                        <span className="mt-0.5 block font-mono text-[11px] text-slate-500">
                          {item.corridor}
                        </span>
                      </div>
                      <span className="band-numeral text-2xl font-bold text-[#0A1F2E]">
                        {item.metric}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-[#0A1F2E]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#455A69]">
                      {item.summary}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-[#D4DFE7]/80 pt-4">
                    {item.standards.map((std) => (
                      <span
                        key={std}
                        className="rounded border border-[#D4DFE7] bg-[#F4F7F9] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#455A69]"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </article>
              </RevealSection>
            ))}
          </div>

          <p className="mt-5 text-xs leading-relaxed text-slate-500">
            {dict.home.referenceSection.disclaimer}
          </p>

          {/* Bottom Conversion Banner */}
          <RevealSection className="bg-blueprint-dark mt-14 rounded-2xl border border-[#234863] p-8 text-white shadow-lg sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                  {turnkeyDelivery.bottomCtaTitle}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {turnkeyDelivery.bottomCtaBody}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  href={`/${lang}/contact?division=multi-division`}
                  className="group inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#267042] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1E5B35]"
                >
                  <span>{turnkeyDelivery.bottomCtaButton.replace(" →", "")}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href={`/${lang}/about`}
                  className="inline-flex min-h-[48px] cursor-pointer items-center justify-center rounded-xl border border-white/25 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10"
                >
                  {turnkeyDelivery.aboutCrossLinkLabel}
                </Link>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
