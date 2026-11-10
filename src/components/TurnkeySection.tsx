"use client";

import React from "react";
import { TURNKEY_STAGES } from "@/data/novaltron-data";

export function TurnkeySection() {
  return (
    <section
      id="services"
      aria-labelledby="turnkey-heading"
      className="py-20 lg:py-24 bg-white text-[#0B132B] border-b border-[#E2E8F0]"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-xl mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-[#0D9488]">
            Execution
          </p>
          <h2
            id="turnkey-heading"
            className="font-heading text-2xl sm:text-3xl font-bold text-[#0B132B] tracking-tight mt-2"
          >
            Turnkey Delivery Model
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {TURNKEY_STAGES.map((stage) => (
            <div key={stage.step} className="pt-4 border-t border-[#E2E8F0]">
              <span className="font-mono text-xs text-[#0D9488]">
                {stage.step}
              </span>
              <h3 className="font-heading text-sm font-bold text-[#0B132B] mt-1 mb-1.5">
                {stage.title}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {stage.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
