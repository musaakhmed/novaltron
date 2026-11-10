"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="bg-[#0B132B] text-[#64748B] border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p>© 2026 Novaltron LLC. All Rights Reserved.</p>

        <div className="flex flex-wrap items-center gap-4 font-mono text-[11px]">
          <a
            href="mailto:info@novaltron.com"
            className="text-[#94A3B8] hover:text-white transition-colors"
          >
            info@novaltron.com
          </a>
          <span>·</span>
          <a
            href="mailto:musa@novaltron.com"
            className="text-[#94A3B8] hover:text-white transition-colors"
          >
            musa@novaltron.com
          </a>
          <span>·</span>
          <a
            href="mailto:zaur@novaltron.com"
            className="text-[#94A3B8] hover:text-white transition-colors"
          >
            zaur@novaltron.com
          </a>
        </div>
      </div>
    </footer>
  );
}
