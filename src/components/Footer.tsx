import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { SiteDictionary } from "@/data/dictionaries/types";
import { SITE_CONFIG } from "@/lib/site-config";

interface FooterProps {
  lang: Locale;
  dict: SiteDictionary;
}

const STANDARDS = [
  "ISO 9001",
  "ISO 14001",
  "ISO 22000",
  "CE",
  "ATEX",
  "Eurocode / EN",
  "GLOBALG.A.P. IFA v6",
];

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
    >
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
    </svg>
  );
}

export function Footer({ lang, dict }: FooterProps) {
  return (
    <footer className="border-t border-slate-800 bg-[#0F172A] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Summary */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-md bg-[#059669] font-mono text-sm font-bold text-white"
              >
                N
              </span>
              <span className="font-heading text-base font-bold tracking-[0.16em] text-white">
                NOVALTRON
              </span>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300">
              {dict.footer.summary}
            </p>
            <div className="mt-5 space-y-1.5 text-sm">
              <p className="text-slate-400">
                <span className="font-semibold text-slate-200">{dict.footer.hubLabel}: </span>
                {dict.footer.hubValue}
              </p>
              <p className="text-slate-400">
                <span className="font-semibold text-slate-200">{dict.footer.corridorLabel}: </span>
                {dict.footer.corridorValue}
              </p>
            </div>

            {/* Social Channels: LinkedIn & Instagram */}
            <div className="mt-6">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                {dict.footer.socialLabel}
              </p>
              <div className="mt-2.5 flex flex-wrap items-center gap-2.5">
                <a
                  href={SITE_CONFIG.social.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-3.5 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-[#059669] hover:text-white"
                >
                  <LinkedInIcon />
                  <span>{SITE_CONFIG.social.linkedin.label}</span>
                  <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 opacity-60" />
                </a>
                <a
                  href={SITE_CONFIG.social.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-3.5 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-[#059669] hover:text-white"
                >
                  <InstagramIcon />
                  <span>{SITE_CONFIG.social.instagram.label}</span>
                  <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
              {dict.footer.navigationLabel}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {dict.nav.links.map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={`/${lang}${item.href}`}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`/${lang}/contact`}
                  className="font-semibold text-[#34D399] transition-colors hover:text-white"
                >
                  {dict.nav.primaryCta}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts & Standards */}
          <div>
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
              {dict.footer.contactsLabel}
            </h2>
            <ul className="mt-4 space-y-2 text-sm font-mono">
              <li>
                <a
                  href={SITE_CONFIG.websiteUrl}
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  {SITE_CONFIG.websiteDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-[#34D399] transition-colors hover:text-white"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>

            <h3 className="mt-6 font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
              {dict.footer.standardsLabel}
            </h3>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {STANDARDS.map((std) => (
                <span
                  key={std}
                  className="rounded border border-slate-700 bg-slate-800/80 px-2 py-0.5 font-mono text-[11px] text-slate-300"
                >
                  {std}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p>{dict.footer.copyright}</p>
            <span aria-hidden="true" className="hidden sm:inline text-slate-600">
              ·
            </span>
            <Link
              href={`/${lang}/legal`}
              className="text-slate-300 underline decoration-slate-600 underline-offset-4 transition-colors hover:text-white"
            >
              {dict.footer.legalLinkLabel}
            </Link>
          </div>
          <p className="font-mono">
            {SITE_CONFIG.companyName} ({SITE_CONFIG.companyGeorgianName}) · {SITE_CONFIG.hubLocation}
          </p>
        </div>
      </div>
    </footer>
  );
}
