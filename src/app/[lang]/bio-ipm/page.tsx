import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Bug, Cpu, ShieldCheck } from "lucide-react";
import { hasLocale } from "@/lib/i18n";
import { getDictionary } from "@/data/dictionaries";
import { StickyAnchorBar } from "@/components/StickyAnchorBar";
import { RevealSection } from "@/components/RevealSection";
import { BioIpmMatrix } from "@/components/BioIpmMatrix";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/bio-ipm">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.bioIpm.metaTitle,
    description: dict.bioIpm.subHeadline,
  };
}

const SCOPE_ICONS = [Bug, Cpu, ShieldCheck];

export default async function BioIpmPage({ params }: PageProps<"/[lang]/bio-ipm">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const { bioIpm } = dict;

  return (
    <>
      {/* Botanical Agritech Hero (Farm Minerals–inspired scientific clarity) */}
      <section className="border-b border-[#A7F3D0] bg-[#ECFDF5] pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="min-w-0 lg:col-span-7">
            <span className="inline-block rounded-full bg-[#065F46] px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
              {bioIpm.eyebrow}
            </span>
            <h1 className="mt-5 text-3xl font-extrabold leading-[1.12] text-[#0F172A] sm:text-4xl lg:text-[2.65rem]">
              {bioIpm.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#334155] sm:text-lg">
              {bioIpm.subHeadline}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["GLOBALG.A.P. IFA v6", "GRASP", "MRL Compliant", "ISO 22000"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="rounded-full bg-[#065F46] px-3 py-1 font-mono text-[11px] font-semibold text-white"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="min-w-0 lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-[#A7F3D0] bg-white p-3 shadow-sm">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/bio-ipm.jpg"
                  alt={bioIpm.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-between px-1 font-mono text-[11px]">
                <span className="font-bold text-[#065F46]">
                  BIOCONTROL · AI SCOUTING · IFA v6
                </span>
                <span className="text-[#16A34A]">M2M LTE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Anchor Bar */}
      <StickyAnchorBar anchors={bioIpm.anchors} accent="pine" />

      {/* Section 2: Core Bio & IPM Scope */}
      <section id="core-scope" className="scroll-mt-36 bg-[#F8FAFC] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection className="border-t border-[#E2E8F0] pt-7">
            <div className="flex items-baseline gap-3.5">
              <span className="band-numeral text-3xl font-bold text-[#065F46] sm:text-4xl">
                01
              </span>
              <h2 className="text-2xl font-extrabold text-[#0F172A] sm:text-3xl">
                {bioIpm.coreScopeTitle}
              </h2>
            </div>
          </RevealSection>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {bioIpm.coreScope.map((item, idx) => {
              const Icon = SCOPE_ICONS[idx % SCOPE_ICONS.length];
              return (
                <RevealSection key={item.title} delayMs={idx * 80}>
                  <article className="flex h-full flex-col justify-between rounded-2xl border border-[#A7F3D0] bg-[#ECFDF5]/65 p-6 shadow-2xs sm:p-7">
                    <div>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#A7F3D0] bg-white text-[#16A34A] shadow-2xs">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <h3 className="mt-5 text-xl font-bold text-[#0F172A]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#334155]">
                        {item.body}
                      </p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-1.5 border-t border-[#A7F3D0]/70 pt-4">
                      {item.badges.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-full bg-[#065F46] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-white"
                        >
                          {badge}
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

      {/* Section 3: Interactive Tiered Smart IPM Packages */}
      <section
        id="packages"
        className="scroll-mt-36 border-y border-[#E2E8F0] bg-white py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection className="mb-10">
            <div className="flex items-baseline gap-3.5">
              <span className="band-numeral text-3xl font-bold text-[#059669] sm:text-4xl">
                02
              </span>
              <h2 className="text-2xl font-extrabold text-[#0F172A] sm:text-3xl">
                {bioIpm.packagesSection.title}
              </h2>
            </div>
            <p className="mt-3 max-w-3xl text-base text-[#334155]">
              {bioIpm.packagesSection.subtitle}
            </p>
          </RevealSection>

          <BioIpmMatrix
            lang={lang}
            selectorLabel={bioIpm.packagesSection.selectorLabel}
            recommendedLabel={bioIpm.packagesSection.recommendedLabel}
            tiers={bioIpm.packagesSection.tiers}
            footnote={bioIpm.packagesSection.footnote}
          />
        </div>
      </section>

      {/* Section 4: 4-Step Certification Cycle */}
      <section id="roadmap" className="scroll-mt-36 bg-[#ECFDF5]/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex items-baseline gap-3.5">
              <span className="band-numeral text-3xl font-bold text-[#065F46] sm:text-4xl">
                03
              </span>
              <h2 className="text-2xl font-extrabold text-[#0F172A] sm:text-3xl">
                {bioIpm.roadmapSection.title}
              </h2>
            </div>
          </RevealSection>

          <ol className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {bioIpm.roadmapSection.steps.map((step, idx) => (
              <RevealSection key={step.step} delayMs={idx * 80}>
                <li className="h-full rounded-2xl border border-[#A7F3D0] bg-white p-6 shadow-2xs">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#065F46] font-mono text-xs font-bold text-white">
                    {step.step}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-[#0F172A]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#334155]">
                    {step.detail}
                  </p>
                </li>
              </RevealSection>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
