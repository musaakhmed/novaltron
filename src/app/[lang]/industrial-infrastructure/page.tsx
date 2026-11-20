import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { hasLocale } from "@/lib/i18n";
import { getDictionary } from "@/data/dictionaries";
import { StickyAnchorBar } from "@/components/StickyAnchorBar";
import { RevealSection } from "@/components/RevealSection";
import { TechnicalSchematic } from "@/components/TechnicalDiagrams";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/industrial-infrastructure">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.industrialInfrastructure.metaTitle,
    description: dict.industrialInfrastructure.subHeadline,
  };
}

export default async function IndustrialInfrastructurePage({
  params,
}: PageProps<"/[lang]/industrial-infrastructure">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const { industrialInfrastructure } = dict;

  return (
    <>
      {/* Hero */}
      <section className="bg-blueprint-dark border-b border-slate-800 pt-28 pb-16 text-white lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0284C7]/40 bg-[#0284C7]/15 px-3.5 py-1">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#38BDF8]" />
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#38BDF8]">
              {industrialInfrastructure.eyebrow}
            </p>
          </div>
          <h1 className="mt-5 max-w-4xl text-3xl font-extrabold leading-[1.12] text-white sm:text-4xl lg:text-[2.65rem]">
            {industrialInfrastructure.h1}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {industrialInfrastructure.subHeadline}
          </p>
        </div>
      </section>

      {/* Sticky Anchor Bar */}
      <StickyAnchorBar anchors={industrialInfrastructure.anchors} accent="teal" />

      {/* Track A & Track B */}
      <div className="bg-[#F1F5F9] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          {industrialInfrastructure.tracks.map((track, idx) => (
            <section
              key={track.id}
              id={track.id}
              className="scroll-mt-36 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-2xs sm:p-8 lg:p-10"
            >
              <RevealSection>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
                  <div className="min-w-0 lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="band-numeral text-3xl font-bold text-[#0284C7] sm:text-4xl">
                        0{idx + 1}
                      </span>
                      <span className="rounded-full bg-[#0284C7] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white">
                        {track.badge}
                      </span>
                      {track.standards.map((std) => (
                        <span
                          key={std}
                          className="rounded-md border border-sky-200 bg-sky-50 px-2.5 py-0.5 font-mono text-xs font-semibold text-[#0369A1]"
                        >
                          {std}
                        </span>
                      ))}
                    </div>
                    <h2 className="mt-5 text-2xl font-extrabold text-[#0F172A] sm:text-3xl">
                      {track.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-[#334155]">
                      {track.subtitle}
                    </p>
                  </div>

                  <div className="min-w-0 space-y-3 lg:col-span-5">
                    {track.imageSrc && (
                      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#E2E8F0] bg-slate-900">
                        <Image
                          src={track.imageSrc}
                          alt={track.imageAlt || track.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 42vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <TechnicalSchematic
                      variant={track.id as "pipelines-thermal" | "critical-it-ot"}
                      label={track.diagramLabel}
                      dark={track.id === "critical-it-ot"}
                      compact={Boolean(track.imageSrc)}
                    />
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-5 border-t border-slate-100 pt-8 lg:grid-cols-3">
                  {track.items.map((item, itemIdx) => (
                    <div
                      key={item.heading}
                      className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 transition-colors duration-150 hover:border-[#0284C7]/50"
                    >
                      <span className="font-mono text-xs font-bold text-[#0284C7]">
                        0{idx + 1}.{itemIdx + 1}
                      </span>
                      <h3 className="mt-1.5 text-base font-bold text-[#0F172A]">
                        {item.heading}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-[#334155]">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </RevealSection>
            </section>
          ))}

          {/* Bottom CTA */}
          <RevealSection className="bg-blueprint-dark rounded-2xl border border-slate-800 p-8 text-white shadow-lg sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <h2 className="max-w-2xl text-2xl font-extrabold text-white sm:text-3xl">
                {industrialInfrastructure.bottomCtaTitle}
              </h2>
              <Link
                href={`/${lang}/contact?division=critical-it-ot`}
                className="group inline-flex min-h-[48px] shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#0284C7] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0369A1]"
              >
                <span>{industrialInfrastructure.bottomCtaButton.replace(" →", "")}</span>
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
