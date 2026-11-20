"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { BioIpmTier } from "@/data/dictionaries/types";

interface BioIpmMatrixProps {
  lang: Locale;
  selectorLabel: string;
  recommendedLabel: string;
  tiers: BioIpmTier[];
  footnote: string;
}

export function BioIpmMatrix({
  lang,
  selectorLabel,
  recommendedLabel,
  tiers,
  footnote,
}: BioIpmMatrixProps) {
  const [selectedScale, setSelectedScale] =
    useState<BioIpmTier["scaleKey"]>("commercial");
  const [openMobileIds, setOpenMobileIds] = useState<Record<string, boolean>>({
    "2": true,
  });

  const toggleMobile = (id: string) => {
    setOpenMobileIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      {/* Interactive Farm-Scale Selector Bar */}
      <div className="mb-10 flex flex-col gap-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0F172A]">
          {selectorLabel}
        </span>
        <div
          role="group"
          aria-label={selectorLabel}
          className="flex flex-wrap gap-2"
        >
          {tiers.map((tier) => {
            const active = selectedScale === tier.scaleKey;
            return (
              <button
                key={tier.id}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setSelectedScale(tier.scaleKey);
                  setOpenMobileIds((prev) => ({ ...prev, [tier.id]: true }));
                }}
                className={`min-h-[44px] cursor-pointer rounded-xl border px-4 py-2 text-xs font-semibold transition-all duration-150 sm:text-sm ${
                  active
                    ? "border-[#065F46] bg-[#065F46] text-white shadow-xs"
                    : "border-[#E2E8F0] bg-white text-[#334155] hover:border-slate-300 hover:bg-slate-50 hover:text-[#0F172A]"
                }`}
              >
                {tier.scaleLabel}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-Column Tiered Matrix */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {tiers.map((tier) => {
          const isHighlighted = selectedScale === tier.scaleKey;
          const isMobileOpen = Boolean(openMobileIds[tier.id]);
          const panelId = `tier-panel-${tier.id}`;

          return (
            <article
              key={tier.id}
              className={`flex flex-col rounded-2xl border p-6 transition-all duration-200 sm:p-7 ${
                isHighlighted
                  ? "border-[#059669] bg-[#ECFDF5] shadow-md ring-1 ring-[#059669]/25 lg:-translate-y-1"
                  : "border-[#E2E8F0] bg-white hover:border-slate-300"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="inline-block rounded-full bg-[#065F46]/10 px-3 py-1 font-mono text-[11px] font-semibold text-[#065F46]">
                    {tier.scaleTag}
                  </span>
                  <h3 className="mt-3.5 text-xl font-bold text-[#0F172A]">
                    {tier.name}
                  </h3>
                </div>
                {isHighlighted && (
                  <span className="shrink-0 rounded-full bg-[#059669] px-3 py-1 font-mono text-[11px] font-bold text-white">
                    {recommendedLabel}
                  </span>
                )}
              </div>

              {/* Mobile Accordion Disclosure Button */}
              <button
                type="button"
                aria-expanded={isMobileOpen}
                aria-controls={panelId}
                onClick={() => toggleMobile(tier.id)}
                className="mt-5 flex min-h-[44px] w-full cursor-pointer items-center justify-between rounded-xl border border-[#E2E8F0] bg-white/90 px-4 py-2.5 text-xs font-semibold text-[#0F172A] lg:hidden"
              >
                <span>
                  {tier.hardwareTitle} &amp; {tier.advisoryTitle}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isMobileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Smooth intrinsic-size panel on mobile, always expanded on desktop */}
              <div
                id={panelId}
                className={`accordion-panel mt-5 flex-1 lg:!block lg:!h-auto lg:!overflow-visible lg:!opacity-100 ${
                  isMobileOpen ? "is-open" : ""
                }`}
              >
                <div className="space-y-5">
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#065F46]">
                      {tier.hardwareTitle}
                    </h4>
                    <ul className="mt-3 space-y-2.5 text-sm text-[#334155]">
                      {tier.hardwareItems.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check
                            aria-hidden="true"
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#16A34A]"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-slate-200/90 pt-5">
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#065F46]">
                      {tier.advisoryTitle}
                    </h4>
                    <ul className="mt-3 space-y-2.5 text-sm text-[#334155]">
                      {tier.advisoryItems.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check
                            aria-hidden="true"
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#16A34A]"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-7 border-t border-slate-200/90 pt-5">
                <Link
                  href={`/${lang}/contact?division=bio-ipm&tier=${tier.id}`}
                  className={`group inline-flex min-h-[46px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-150 ${
                    isHighlighted
                      ? "bg-[#059669] text-white shadow-xs hover:bg-[#047857]"
                      : "bg-[#0F172A] text-white hover:bg-slate-800"
                  }`}
                >
                  <span>{tier.ctaLabel.replace(" →", "")}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-xs leading-relaxed text-[#334155]">
        {footnote}
      </p>
    </div>
  );
}
