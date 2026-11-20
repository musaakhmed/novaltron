"use client";

import React, { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import type { StepItem } from "@/data/dictionaries/types";

interface TurnkeyStepperProps {
  steps: StepItem[];
  deliverableLabel?: string;
  dark?: boolean;
}

export function TurnkeyStepper({
  steps,
  deliverableLabel = "Deliverable",
  dark = false,
}: TurnkeyStepperProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [connectorVisible, setConnectorVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setConnectorVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const activeStep = steps[activeIndex] ?? steps[0];

  return (
    <div ref={containerRef} className="relative">
      {/* Horizontal calibrated progress connector rule on desktop */}
      <div
        aria-hidden="true"
        className={`hidden lg:block absolute top-7 left-10 right-10 h-[2px] ${
          dark ? "bg-slate-700" : "bg-[#E2E8F0]"
        }`}
      >
        <div
          className={`h-full bg-[#059669] stepper-connector ${
            connectorVisible ? "is-visible" : ""
          }`}
        />
      </div>

      <ol className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((item, idx) => {
          const isActive = idx === activeIndex;
          return (
            <li key={item.step} className="flex">
              <button
                type="button"
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                aria-pressed={isActive}
                className={`group flex w-full cursor-pointer flex-col items-start rounded-2xl border p-5 text-left transition-all duration-200 ${
                  dark
                    ? isActive
                      ? "border-[#059669] bg-slate-800/95 shadow-lg -translate-y-0.5"
                      : "border-slate-700/80 bg-slate-900/75 hover:border-slate-500"
                    : isActive
                      ? "border-[#059669] bg-[#ECFDF5]/70 shadow-sm -translate-y-0.5"
                      : "border-[#E2E8F0] bg-white hover:border-slate-300"
                }`}
              >
                <div className="flex w-full items-center justify-between gap-2">
                  <span
                    className={`relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-xl font-mono text-sm font-bold transition-colors duration-200 ${
                      isActive
                        ? "bg-[#059669] text-white shadow-xs"
                        : dark
                          ? "bg-slate-800 text-slate-300 border border-slate-700"
                          : "bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0]"
                    }`}
                  >
                    {item.step}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`h-2 w-2 rounded-full transition-colors ${
                      isActive
                        ? "bg-[#059669]"
                        : dark
                          ? "bg-slate-700"
                          : "bg-slate-200"
                    }`}
                  />
                </div>
                <h3
                  className={`mt-5 text-[15px] font-bold leading-snug ${
                    dark ? "text-white" : "text-[#0F172A]"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    dark ? "text-slate-300" : "text-[#334155]"
                  }`}
                >
                  {item.description}
                </p>
              </button>
            </li>
          );
        })}
      </ol>

      {/* Active Deliverable Summary Bar */}
      {activeStep && (
        <div
          className={`mt-6 flex flex-col gap-3 rounded-xl border px-5 py-4 sm:flex-row sm:items-center sm:justify-between ${
            dark
              ? "border-slate-700/90 bg-slate-900/90 text-slate-200"
              : "border-[#E2E8F0] bg-white text-[#0F172A] shadow-2xs"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-7 items-center rounded-md bg-[#059669] px-2.5 font-mono text-xs font-bold text-white">
              {activeStep.step}
            </span>
            <span className="text-sm font-bold">{activeStep.title}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 text-[#059669]" />
            <span className="font-mono text-xs uppercase tracking-wider opacity-65">
              {deliverableLabel}:
            </span>
            <span className="font-mono text-xs font-semibold text-[#059669]">
              {activeStep.deliverable}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
