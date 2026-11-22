"use client";

import React, { useEffect, useState } from "react";

interface AnchorItem {
  id: string;
  label: string;
}

interface StickyAnchorBarProps {
  anchors: AnchorItem[];
  accent?: "emerald" | "teal" | "pine";
}

export function StickyAnchorBar({
  anchors,
  accent = "emerald",
}: StickyAnchorBarProps) {
  const [activeId, setActiveId] = useState<string>(anchors[0]?.id ?? "");

  useEffect(() => {
    if (anchors.length === 0) return;

    const elements = anchors
      .map((a) => document.getElementById(a.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (intersecting.length > 0) {
          setActiveId(intersecting[0].target.id);
        }
      },
      {
        rootMargin: "-148px 0px -55% 0px",
        threshold: 0.05,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [anchors]);

  const activeStyles =
    accent === "teal"
      ? "bg-[#006B68] text-white border-[#006B68] shadow-xs"
      : accent === "pine"
        ? "bg-[#1B5431] text-white border-[#1B5431] shadow-xs"
        : "bg-[#267042] text-white border-[#267042] shadow-xs";

  return (
    <div className="sticky top-[68px] z-30 border-b border-[#D4DFE7] bg-white/95 backdrop-blur-md">
      <nav
        aria-label="In-page sections"
        className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8"
      >
        {anchors.map((anchor, index) => {
          const isActive = activeId === anchor.id;
          return (
            <a
              key={anchor.id}
              href={`#${anchor.id}`}
              onClick={() => setActiveId(anchor.id)}
              aria-current={isActive ? "location" : undefined}
              className={`inline-flex min-h-[38px] shrink-0 items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-150 cursor-pointer sm:text-sm ${
                isActive
                  ? activeStyles
                  : "border-[#D4DFE7] bg-[#F4F7F9] text-[#455A69] hover:border-slate-300 hover:bg-slate-100 hover:text-[#0A1F2E]"
              }`}
            >
              <span
                aria-hidden="true"
                className={`font-mono text-[10px] ${
                  isActive ? "text-white/80" : "text-slate-400"
                }`}
              >
                0{index + 1}
              </span>
              <span>{anchor.label}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
