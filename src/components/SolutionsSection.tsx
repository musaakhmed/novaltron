"use client";

import React from "react";
import { ENGINEERING_PILLARS } from "@/data/novaltron-data";

export function SolutionsSection() {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="py-20 lg:py-28 bg-[#F8FAFC] text-[#0B132B] border-b border-[#E2E8F0]"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-xl mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-[#0D9488]">
            Portfolio
          </p>
          <h2
            id="solutions-heading"
            className="font-heading text-2xl sm:text-3xl font-bold text-[#0B132B] tracking-tight mt-2"
          >
            Core Engineering Divisions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
          {ENGINEERING_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="pt-6 border-t border-[#CBD5E1] flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[#0D9488]">
                  {pillar.number}
                </span>
                <h3 className="font-heading text-lg font-bold text-[#0B132B] mt-1 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-4">
                  {pillar.overview}
                </p>

                <ul className="space-y-1.5 mb-6">
                  {pillar.keyEquipmentScope.map((item) => (
                    <li
                      key={item}
                      className="text-xs text-[#334155] leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-[#10B981] mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="font-mono text-[11px] text-[#64748B]">
                {pillar.oems}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
