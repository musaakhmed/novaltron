"use client";

import React from "react";

export function FinancingSection() {
  return (
    <section
      id="financing"
      aria-labelledby="financing-heading"
      className="py-16 bg-[#F8FAFC] text-[#0B132B] border-b border-[#E2E8F0]"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-[#0D9488]">
            Agro-Financing Advisory
          </p>
          <h2
            id="financing-heading"
            className="font-heading text-xl font-bold text-[#0B132B] mt-1"
          >
            Capital Structuring for Turnkey Agro-Infrastructure
          </h2>
          <p className="text-sm text-[#475569] mt-2 leading-relaxed">
            We structure turnkey grain terminal, seed processing, and irrigation packages to qualify for 40% equipment subsidies and subsidized leasing programs.
          </p>
        </div>

        <div className="font-mono text-xs text-[#0B132B] bg-white px-4 py-2.5 rounded border border-[#E2E8F0] shrink-0">
          40% Equipment Subsidy Eligible
        </div>
      </div>
    </section>
  );
}
