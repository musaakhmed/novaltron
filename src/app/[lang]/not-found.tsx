import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LOCALES, LOCALE_LABELS } from "@/lib/i18n";

export default function NotFound() {
  return (
    <section className="bg-blueprint-dark flex min-h-[70vh] items-center pt-28 pb-20 text-white">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#5BB87A]">
          HTTP 404
        </p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-300">
          The requested resource does not exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/en"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#267042] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1E5B35]"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            <span>Back to Novaltron</span>
          </Link>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 font-mono text-xs text-slate-400">
          {LOCALES.map((loc) => (
            <Link
              key={loc}
              href={`/${loc}`}
              className="rounded-md border border-slate-700 px-2.5 py-1 transition-colors hover:border-[#267042] hover:text-white"
            >
              {LOCALE_LABELS[loc]}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
