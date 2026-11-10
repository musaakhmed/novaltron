"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useNovaltron } from "./NovaltronProvider";
import { HERO_METRICS } from "@/data/novaltron-data";

export function HeroSection() {
  const { dict, openAssetModal } = useNovaltron();

  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-[#0B132B] text-[#F8FAFC]"
    >
      <div className="max-w-5xl mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-2xl space-y-6">
          <p className="font-mono text-xs uppercase tracking-widest text-[#10B981]">
            {dict.hero.badge}
          </p>

          <h1
            id="hero-heading"
            className="font-heading text-3xl sm:text-5xl font-bold text-white leading-[1.12] tracking-tight"
          >
            {dict.hero.headline}
          </h1>

          <p className="text-base text-[#94A3B8] leading-relaxed">
            {dict.hero.subheadline}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#10B981] hover:bg-[#0D9488] text-[#0B132B] font-heading font-semibold text-sm transition-colors"
            >
              <span>{dict.hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            <button
              type="button"
              onClick={() => openAssetModal("corporate-line-card")}
              className="px-5 py-2.5 rounded text-sm font-medium text-[#CBD5E1] hover:text-white border border-white/15 hover:border-white/30 transition-colors cursor-pointer"
            >
              {dict.hero.ctaSecondary}
            </button>
          </div>
        </div>

        {/* Minimalist Hairline Trust Strip */}
        <div className="mt-20 pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {HERO_METRICS.map((metric) => (
            <div key={metric.id}>
              <h2 className="font-heading text-sm font-semibold text-white">
                {metric.title}
              </h2>
              <p className="text-xs text-[#94A3B8] mt-1">{metric.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
