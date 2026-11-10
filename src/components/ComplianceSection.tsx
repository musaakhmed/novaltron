"use client";

import React from "react";

export function ComplianceSection() {
  return (
    <section
      id="about"
      aria-labelledby="compliance-heading"
      className="py-20 lg:py-24 bg-white text-[#0B132B] border-b border-[#E2E8F0]"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-xl mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-[#0D9488]">
            Corporate &amp; Compliance
          </p>
          <h2
            id="compliance-heading"
            className="font-heading text-2xl sm:text-3xl font-bold text-[#0B132B] tracking-tight mt-2"
          >
            Structure &amp; Governance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="pt-5 border-t border-[#E2E8F0]">
            <h3 className="font-heading text-base font-bold text-[#0B132B]">
              Novaltron LLC
            </h3>
            <p className="font-mono text-xs text-[#0D9488] mt-0.5 mb-2">
              Trading &amp; Procurement Hub
            </p>
            <p className="text-xs text-[#475569] leading-relaxed">
              International procurement, OEM representation, multi-currency trade finance, and supply chain logistics.
            </p>
          </div>

          <div className="pt-5 border-t border-[#E2E8F0]">
            <h3 className="font-heading text-base font-bold text-[#0B132B]">
              Novaltron MMC
            </h3>
            <p className="font-mono text-xs text-[#0D9488] mt-0.5 mb-2">
              Execution &amp; Contracting Arm
            </p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Tender contracting, customs clearance, on-site installation, SAT commissioning, and technical support.
            </p>
          </div>

          <div className="pt-5 border-t border-[#E2E8F0]">
            <h3 className="font-heading text-base font-bold text-[#0B132B]">
              Governance &amp; Traceability
            </h3>
            <p className="font-mono text-xs text-[#0D9488] mt-0.5 mb-2">
              ISO 9001 · ISO 14001 · CE · TS/EN
            </p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Led by founding partners Musa &amp; Zaur. Full supply chain documentation including Commercial Invoices, Packing Lists, Certificates of Origin, and FAT/SAT Protocols.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
