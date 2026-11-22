import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Layers,
  Leaf,
  Network,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { hasLocale } from "@/lib/i18n";
import { getDictionary } from "@/data/dictionaries";
import { buildPageMetadata } from "@/lib/seo";
import { RevealSection } from "@/components/RevealSection";
import { TurnkeyStepper } from "@/components/TurnkeyStepper";
import { TechnicalSchematic } from "@/components/TechnicalDiagrams";
import { HeroBackgroundVideo } from "@/components/HeroBackgroundVideo";
import { CoreEngineeringShowcase } from "@/components/CoreEngineeringShowcase";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return buildPageMetadata({
    lang,
    path: "",
    title: dict.meta.defaultTitle,
    description: dict.meta.defaultDescription,
    siteName: dict.meta.siteName,
    isHome: true,
    ogImage: "/og-image.png",
    ogImageAlt: dict.home.heroImageAlt,
  });
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const { home } = dict;

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════════
          FULL-SCREEN CINEMATIC VIDEO HERO (h-screen, Valmont-Inspired Flagship)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative flex h-screen min-h-[640px] w-full flex-col justify-between overflow-hidden bg-[#0A1F2E] text-white">
        <HeroBackgroundVideo
          webmSrc="/videos/novaltron-hero.webm"
          mp4Src="/videos/novaltron-hero.mp4"
          poster="/videos/hero-poster.webp"
        />

        {/* Centered Editorial Hero Copy */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pt-24 pb-12 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#5BB87A]/40 bg-[#0A1F2E]/65 px-4 py-1.5 backdrop-blur-md">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#5BB87A]" />
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5BB87A]">
                {home.eyebrow}
              </p>
            </div>

            <h1 className="mt-6 text-3xl font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-xs sm:text-5xl lg:text-[3.5rem]">
              {home.h1}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-100/95 sm:text-lg lg:text-xl">
              {home.subHeadline}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href={`/${lang}/contact`}
                className="group inline-flex min-h-[52px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#267042] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-150 hover:bg-[#1E5B35] sm:text-base"
              >
                <span>{home.primaryCta.replace(" →", "")}</span>
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href={`/${lang}/agro-solutions`}
                className="inline-flex min-h-[52px] cursor-pointer items-center justify-center rounded-xl border border-white/35 bg-[#0A1F2E]/45 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-150 hover:border-white/70 hover:bg-[#0A1F2E]/70 sm:text-base"
              >
                {home.secondaryCta}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Institutional Trust Metadata Strip */}
        <div className="relative z-10 border-t border-white/15 bg-[#0A1F2E]/55 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 py-4 pr-16 sm:px-6 sm:py-5 sm:pr-20 lg:px-8">
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-slate-100">
              {home.heroTrustBar.map((item, idx) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 rounded-full ${
                      idx === 2 ? "bg-[#F59E0B]" : "bg-[#5BB87A]"
                    }`}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          INTERACTIVE ANIMATED CORE ENGINEERING ARCHITECTURE (DWG-01 → DWG-04)
          ═══════════════════════════════════════════════════════════════════════ */}
      <CoreEngineeringShowcase
        lang={lang}
        heading={home.heroGridHeading}
        cards={home.heroGridCards}
        showcase={home.heroShowcase}
      />

      {/* ═══════════════════════════════════════════════════════════════════════
          BAND 01 — PRIMARY FLAGSHIP: AGRO-INDUSTRIAL & POST-HARVEST SYSTEMS
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F4F7F9] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="grid grid-cols-1 gap-6 border-t border-[#D4DFE7] pt-8 lg:grid-cols-12 lg:items-end">
              <div className="min-w-0 lg:col-span-7">
                <div className="flex items-baseline gap-4">
                  <span
                    aria-hidden="true"
                    className="band-numeral text-4xl font-bold text-[#267042] sm:text-5xl"
                  >
                    {home.agroSection.bandNumber}
                  </span>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#267042]">
                    {home.agroSection.bandMarker}
                  </p>
                </div>
                <h2 className="mt-4 text-2xl font-extrabold text-[#0A1F2E] sm:text-3xl lg:text-[2.2rem] lg:leading-[1.15]">
                  {home.agroSection.h2}
                </h2>
              </div>

              <div className="lg:col-span-5 lg:pb-1">
                <p className="text-base leading-relaxed text-[#455A69]">
                  {home.agroSection.intro}
                </p>
                <Link
                  href={`/${lang}/agro-solutions`}
                  className="group mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#267042] hover:text-[#1B5431] cursor-pointer"
                >
                  <span>{home.agroSection.viewAllCta.replace(" →", "")}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </RevealSection>

          {/* 4-Card Editorial Grid pairing Photography & Technical Schematics */}
          <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2">
            {home.agroSection.cards.map((card, idx) => (
              <RevealSection key={card.id} delayMs={idx * 80}>
                <article className="group flex h-full min-w-0 flex-col justify-between overflow-hidden rounded-2xl border border-[#D4DFE7] bg-white p-6 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#267042] hover:shadow-lg sm:p-7">
                  <div className="min-w-0">
                    {card.imageSrc ? (
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#D4DFE7] bg-slate-900">
                        <Image
                          src={card.imageSrc}
                          alt={card.imageAlt || card.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        />
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-gradient-to-t from-[#0A1F2E]/60 via-transparent to-transparent"
                        />
                        <span className="absolute top-3 left-3 rounded-md bg-[#0A1F2E]/85 px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider text-[#5BB87A] backdrop-blur-xs">
                          {card.code}
                        </span>
                      </div>
                    ) : (
                      <TechnicalSchematic
                        variant={card.diagramVariant}
                        label={card.title}
                        code={card.code}
                        compact
                      />
                    )}

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {card.standards.map((std) => (
                        <span
                          key={std}
                          className="rounded-md border border-[#D4DFE7] bg-[#F4F7F9] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#455A69]"
                        >
                          {std}
                        </span>
                      ))}
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-[#0A1F2E] sm:text-[1.35rem]">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#455A69] sm:text-[15px]">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <Link
                      href={`/${lang}${card.anchor}`}
                      className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 text-sm font-semibold text-[#267042] transition-colors hover:text-[#1B5431]"
                    >
                      <span>{card.ctaLabel.replace(" →", "")}</span>
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          BAND 02 — FEATURED DIVISION SPOTLIGHT: BIO-SOLUTIONS & SMART IPM
          (Farm Minerals–Inspired Scientific Agritech Clarity)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="border-y border-[#B6DBC2] bg-[#EEF6F1] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-7">
              <div className="flex items-baseline gap-4">
                <span
                  aria-hidden="true"
                  className="band-numeral text-4xl font-bold text-[#1B5431] sm:text-5xl"
                >
                  {home.bioBanner.bandNumber}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#1B5431] px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-white">
                  <Leaf aria-hidden="true" className="h-3.5 w-3.5" />
                  <span>{home.bioBanner.bandMarker}</span>
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-extrabold text-[#0A1F2E] sm:text-3xl lg:text-[2.2rem] lg:leading-[1.15]">
                {home.bioBanner.h2}
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[#455A69]">
                {home.bioBanner.body}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {home.bioBanner.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-[#267042]/30 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#1B5431] shadow-2xs"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href={`/${lang}/bio-ipm`}
                  className="group inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#1B5431] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#267042]"
                >
                  <span>{home.bioBanner.cta.replace(" →", "")}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-[#B6DBC2] bg-white p-3 shadow-sm">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/bio-ipm.jpg"
                    alt={home.bioBanner.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1">
                  <span className="font-mono text-[11px] font-bold text-[#1B5431]">
                    GLOBALG.A.P. IFA v6 · GRASP · EU MRL
                  </span>
                  <span className="rounded-full bg-[#EEF6F1] px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[#267042]">
                    AI TELEMETRY
                  </span>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          BAND 03 — SECONDARY UMBRELLA: INDUSTRIAL ENGINEERING & CRITICAL INFRA
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#EBF1F5] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="grid grid-cols-1 gap-6 border-t border-slate-300/80 pt-8 lg:grid-cols-12 lg:items-end">
              <div className="min-w-0 lg:col-span-7">
                <div className="flex items-baseline gap-4">
                  <span
                    aria-hidden="true"
                    className="band-numeral text-4xl font-bold text-[#006B68] sm:text-5xl"
                  >
                    {home.industrialSection.bandNumber}
                  </span>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#006B68]">
                    {home.industrialSection.bandMarker}
                  </p>
                </div>
                <h2 className="mt-4 text-2xl font-extrabold text-[#0A1F2E] sm:text-3xl lg:text-[2.2rem] lg:leading-[1.15]">
                  {home.industrialSection.h2}
                </h2>
              </div>
              <div className="lg:col-span-5 lg:pb-1">
                <p className="text-base leading-relaxed text-[#455A69]">
                  {home.industrialSection.intro}
                </p>
              </div>
            </div>
          </RevealSection>

          <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-2">
            {/* Track A: Editorial Photography + Spec Bullets */}
            <RevealSection>
              <article className="group flex h-full min-w-0 flex-col justify-between rounded-2xl border border-[#D4DFE7] bg-white p-6 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#006B68] hover:shadow-lg sm:p-7">
                <div className="min-w-0">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#D4DFE7] bg-slate-900">
                    <Image
                      src="/images/industrial-infra.jpg"
                      alt={home.industrialSection.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    <span className="absolute top-3 left-3 rounded-md bg-[#0A1F2E]/85 px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider text-[#5CB3AE] backdrop-blur-xs">
                      PE100 · CNC WELD · THERMAL
                    </span>
                  </div>

                  <div className="mt-5 flex items-center gap-2.5">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAF5F4] text-[#006B68]">
                      <Wrench aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#006B68]">
                      {home.industrialSection.trackA.badge}
                    </span>
                  </div>

                  <h3 className="mt-3.5 text-xl font-bold text-[#0A1F2E] sm:text-[1.35rem]">
                    {home.industrialSection.trackA.title}
                  </h3>

                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[#455A69]">
                    {home.industrialSection.trackA.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#006B68]"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <Link
                    href={`/${lang}${home.industrialSection.trackA.anchor}`}
                    className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 text-sm font-semibold text-[#006B68] transition-colors hover:text-[#005552]"
                  >
                    <span>{home.industrialSection.trackA.cta.replace(" →", "")}</span>
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            </RevealSection>

            {/* Track B: Dark CAD Topology Schematic + Spec Bullets */}
            <RevealSection delayMs={80}>
              <article className="group flex h-full min-w-0 flex-col justify-between rounded-2xl border border-[#D4DFE7] bg-white p-6 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#006B68] hover:shadow-lg sm:p-7">
                <div className="min-w-0">
                  <TechnicalSchematic
                    variant="critical-it-ot"
                    label={home.industrialSection.trackB.diagramLabel}
                    dark
                    compact
                  />

                  <div className="mt-5 flex items-center gap-2.5">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAF5F4] text-[#006B68]">
                      <Network aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#006B68]">
                      {home.industrialSection.trackB.badge}
                    </span>
                  </div>

                  <h3 className="mt-3.5 text-xl font-bold text-[#0A1F2E] sm:text-[1.35rem]">
                    {home.industrialSection.trackB.title}
                  </h3>

                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[#455A69]">
                    {home.industrialSection.trackB.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#006B68]"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <Link
                    href={`/${lang}${home.industrialSection.trackB.anchor}`}
                    className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 text-sm font-semibold text-[#006B68] transition-colors hover:text-[#005552]"
                  >
                    <span>{home.industrialSection.trackB.cta.replace(" →", "")}</span>
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          REGIONAL OPERATING MODEL & REPRESENTATIVE TURNKEY SCOPES
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="border-t border-[#D4DFE7] bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            <div className="min-w-0 lg:col-span-7">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#267042]">
                <Layers aria-hidden="true" className="h-4 w-4" />
                <span>{home.referenceSection.eyebrow}</span>
              </div>
              <h2 className="mt-3 text-2xl font-extrabold text-[#0A1F2E] sm:text-3xl lg:text-[2.1rem] lg:leading-[1.16]">
                {home.referenceSection.h2}
              </h2>
              <p className="mt-3.5 text-base leading-relaxed text-[#455A69]">
                {home.referenceSection.subtitle}
              </p>
            </div>

            <div className="rounded-2xl border border-[#B6DBC2] bg-[#EEF6F1]/70 p-6 lg:col-span-5">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#1B5431]">
                {home.referenceSection.operatingModelBadge}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-[#0A1F2E]">
                {home.referenceSection.operatingModelBody}
              </p>
            </div>
          </RevealSection>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {home.referenceSection.scopes.map((item, idx) => (
              <RevealSection key={item.code} delayMs={idx * 80}>
                <article className="flex h-full flex-col justify-between rounded-2xl border border-[#D4DFE7] bg-[#F4F7F9] p-6">
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
                        className="rounded border border-[#D4DFE7] bg-white px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#455A69]"
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
            {home.referenceSection.disclaimer}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5 — 5-STAGE TURNKEY DELIVERY WORKFLOW (01 → 05)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="border-t border-[#D4DFE7] bg-[#F4F7F9] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection className="mb-12 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#267042]">
                {home.deliverySection.eyebrow}
              </p>
              <h2 className="mt-2.5 text-2xl font-extrabold text-[#0A1F2E] sm:text-3xl lg:text-[2.1rem]">
                {home.deliverySection.h2}
              </h2>
            </div>
            <p className="text-base text-[#455A69] lg:col-span-5">
              {home.deliverySection.subtitle}
            </p>
          </RevealSection>

          <TurnkeyStepper
            steps={home.deliverySection.steps}
            deliverableLabel={home.deliverySection.deliverableLabel}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 6 — NUMBERED INSTITUTIONAL GOVERNANCE STRIP (01 / 02 / 03)
          & BOTTOM CONVERSION BANNER
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="border-t border-[#D4DFE7] bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#B45309]">
                <ShieldCheck aria-hidden="true" className="h-4 w-4" />
                <span>{home.trustSection.eyebrow}</span>
              </div>
              <h2 className="mt-2.5 text-2xl font-extrabold text-[#0A1F2E] sm:text-3xl lg:text-[2.1rem]">
                {home.trustSection.h2}
              </h2>
            </div>
            <p className="text-base text-[#455A69] lg:col-span-5">
              {home.trustSection.subtitle}
            </p>
          </RevealSection>

          {/* 01 / 02 / 03 Numbered Institutional Governance Strip */}
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {home.trustSection.governancePillars.map((pillar, idx) => (
              <RevealSection key={pillar.number} delayMs={idx * 80}>
                <article className="flex h-full flex-col justify-between rounded-2xl border border-[#D4DFE7] bg-[#F4F7F9] p-6 sm:p-7">
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

          {/* Bottom High-Authority Conversion Banner */}
          <RevealSection className="bg-blueprint-dark mt-14 overflow-hidden rounded-2xl border border-[#234863] p-8 text-white shadow-lg sm:p-10 lg:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                  {home.trustSection.bottomCtaTitle}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {home.trustSection.bottomCtaBody}
                </p>
              </div>
              <Link
                href={`/${lang}/contact`}
                className="group inline-flex min-h-[50px] shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#267042] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#1E5B35]"
              >
                <span>{home.trustSection.bottomCtaButton.replace(" →", "")}</span>
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
