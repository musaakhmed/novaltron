"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import { DOWNLOADABLE_ASSETS } from "@/data/novaltron-data";
import { useNovaltron } from "./NovaltronProvider";

const PRIMARY_DIVISIONS = [
  "Pipeline & Thermoplastic Welding",
  "Critical Infrastructure, OT & SCADA",
  "Agro-Industrial & Silo Monitoring",
  "Thermal Engineering & Agro-Energy",
  "General EPC / Turnkey",
];

export function ResourceRfqSection() {
  const { openAssetModal, selectedRfqDivision, setSelectedRfqDivision } =
    useNovaltron();

  const [attachedFileName, setAttachedFileName] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector<HTMLElement>(":invalid");
      if (firstInvalid) {
        firstInvalid.setAttribute("aria-invalid", "true");
        firstInvalid.classList.add("user-invalid-fallback");
        firstInvalid.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setSubmittedRef(
        `NVT-${Math.floor(1000 + Math.random() * 9000)}`
      );
      setIsSubmitting(false);
    }, 200);
  };

  return (
    <section
      id="contact"
      aria-labelledby="resources-rfq-heading"
      className="py-20 lg:py-28 bg-[#0B132B] text-[#F8FAFC]"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Left 5 Columns: Minimalist Line Cards List */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-[#10B981]">
                Resources &amp; Contact
              </p>
              <h2
                id="resources-rfq-heading"
                className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2"
              >
                Request a Quote
              </h2>
              <p className="text-sm text-[#94A3B8] mt-2 leading-relaxed">
                Download our technical line cards or submit your project specifications directly to{" "}
                <a
                  href="mailto:info@novaltron.com"
                  className="text-white underline underline-offset-4"
                >
                  info@novaltron.com
                </a>
                .
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8]">
                Line Cards (PDF)
              </p>
              <div className="divide-y divide-white/10">
                {DOWNLOADABLE_ASSETS.map((asset) => (
                  <button
                    key={asset.id}
                    type="button"
                    onClick={() => openAssetModal(asset.id)}
                    className="w-full py-3 flex items-center justify-between text-left text-xs text-[#CBD5E1] hover:text-white transition-colors cursor-pointer group"
                  >
                    <span>{asset.title}</span>
                    <ArrowUpRight
                      className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#10B981]"
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right 7 Columns: Clean, Uncrowded RFQ Form */}
          <div className="lg:col-span-7">
            {submittedRef ? (
              <div
                role="status"
                aria-live="polite"
                className="p-6 rounded border border-[#10B981]/40 bg-white/5 space-y-3"
              >
                <div className="flex items-center gap-2 text-[#10B981]">
                  <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                  <span className="font-mono text-xs">
                    Reference: {submittedRef}
                  </span>
                </div>
                <p className="text-sm text-[#CBD5E1]">
                  Thank you. Your inquiry has been received by our engineering desk.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedRef(null);
                    setAttachedFileName("");
                  }}
                  className="text-xs font-mono text-[#10B981] hover:underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form
                action="/contact"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rfq-field">
                    <label
                      htmlFor="rfq-full-name"
                      className="block text-xs text-[#94A3B8] mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="rfq-full-name"
                      name="full_name"
                      required
                      minLength={2}
                      autoComplete="name"
                      className="rfq-input w-full h-10 px-3 rounded bg-white/5 border border-white/15 text-white text-xs"
                    />
                    <div className="field-error-msg items-center gap-1 mt-1 text-[11px] text-[#F87171]">
                      <AlertCircle className="w-3 h-3" aria-hidden="true" />
                      <span>Required</span>
                    </div>
                  </div>

                  <div className="rfq-field">
                    <label
                      htmlFor="rfq-organization"
                      className="block text-xs text-[#94A3B8] mb-1.5"
                    >
                      Company *
                    </label>
                    <input
                      type="text"
                      id="rfq-organization"
                      name="organization"
                      required
                      minLength={2}
                      autoComplete="organization"
                      className="rfq-input w-full h-10 px-3 rounded bg-white/5 border border-white/15 text-white text-xs"
                    />
                    <div className="field-error-msg items-center gap-1 mt-1 text-[11px] text-[#F87171]">
                      <AlertCircle className="w-3 h-3" aria-hidden="true" />
                      <span>Required</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rfq-field">
                    <label
                      htmlFor="rfq-work-email"
                      className="block text-xs text-[#94A3B8] mb-1.5"
                    >
                      Work Email *{" "}
                      <span id="rfq-email-hint" className="text-[#64748B]">
                        (name@company.com)
                      </span>
                    </label>
                    <input
                      type="email"
                      id="rfq-work-email"
                      name="work_email"
                      required
                      autoComplete="email"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck={false}
                      aria-describedby="rfq-email-hint"
                      className="rfq-input w-full h-10 px-3 rounded bg-white/5 border border-white/15 text-white text-xs"
                    />
                    <div className="field-error-msg items-center gap-1 mt-1 text-[11px] text-[#F87171]">
                      <AlertCircle className="w-3 h-3" aria-hidden="true" />
                      <span>Valid email required</span>
                    </div>
                  </div>

                  <div className="rfq-field">
                    <label
                      htmlFor="rfq-phone"
                      className="block text-xs text-[#94A3B8] mb-1.5"
                    >
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="rfq-phone"
                      name="phone"
                      required
                      autoComplete="tel"
                      className="rfq-input w-full h-10 px-3 rounded bg-white/5 border border-white/15 text-white text-xs"
                    />
                    <div className="field-error-msg items-center gap-1 mt-1 text-[11px] text-[#F87171]">
                      <AlertCircle className="w-3 h-3" aria-hidden="true" />
                      <span>Required</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="rfq-division"
                    className="block text-xs text-[#94A3B8] mb-1.5"
                  >
                    Division
                  </label>
                  <select
                    id="rfq-division"
                    name="primary_division"
                    value={selectedRfqDivision}
                    onChange={(e) => setSelectedRfqDivision(e.target.value)}
                    className="w-full h-10 px-3 rounded bg-[#1C2541] border border-white/15 text-white text-xs"
                  >
                    {PRIMARY_DIVISIONS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="rfq-field">
                  <label
                    htmlFor="rfq-scope"
                    className="block text-xs text-[#94A3B8] mb-1.5"
                  >
                    Project Scope / BOQ *
                  </label>
                  <textarea
                    id="rfq-scope"
                    name="project_scope"
                    required
                    minLength={10}
                    rows={3}
                    className="rfq-input w-full px-3 py-2 rounded bg-white/5 border border-white/15 text-white text-xs resize-y"
                  />
                  <div className="field-error-msg items-center gap-1 mt-1 text-[11px] text-[#F87171]">
                    <AlertCircle className="w-3 h-3" aria-hidden="true" />
                    <span>Please enter project details</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <label
                    htmlFor="rfq-boq-file"
                    className="text-xs text-[#94A3B8] hover:text-white underline underline-offset-4 cursor-pointer"
                  >
                    {attachedFileName || "Attach BOQ / Specification file"}
                    <input
                      type="file"
                      id="rfq-boq-file"
                      name="boq_attachment"
                      accept=".pdf,.xls,.xlsx,.doc,.docx,.dwg,.zip"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        setAttachedFileName(file ? file.name : "");
                      }}
                      className="sr-only"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded bg-[#10B981] hover:bg-[#0D9488] text-[#0B132B] font-heading font-semibold text-xs transition-colors cursor-pointer"
                  >
                    {isSubmitting ? "Sending..." : "Submit RFQ"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
