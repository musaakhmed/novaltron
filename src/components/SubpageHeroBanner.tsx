"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface SubpageHeroBannerProps {
  routeCode: string;
  title: string;
  subtitle: string;
}

export function SubpageHeroBanner({
  routeCode,
  title,
  subtitle,
}: SubpageHeroBannerProps) {
  return (
    <div className="bg-[#0B132B] text-[#F8FAFC] border-b border-[#1C2541] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 mb-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#10B981] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Overview</span>
          </Link>
          <span className="font-mono text-[11px] text-[#94A3B8]">
            {routeCode}
          </span>
        </div>
        <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {title}
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-[#94A3B8] max-w-2xl">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
