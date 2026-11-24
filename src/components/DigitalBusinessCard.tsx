"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Globe,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { LOCALES, LOCALE_LABELS, type Locale } from "@/lib/i18n";
import { CARD_DICTIONARIES } from "@/lib/card-i18n";
import {
  CANONICAL_CORRIDOR_LINE,
  CANONICAL_LEGAL_ENTITY,
  digitsOnly,
  normalizeTelHref,
  type PublicCardProfile,
} from "@/lib/erm-cards";
import { PrecisionCorridorWordmark } from "@/components/NovaltronLogo";

interface DigitalBusinessCardProps {
  mode: "employee" | "corporate";
  card: PublicCardProfile;
}

export function DigitalBusinessCard({ mode, card }: DigitalBusinessCardProps) {
  const [lang, setLang] = useState<Locale>("en");
  const ui = CARD_DICTIONARIES[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const isCorporate = mode === "corporate";
  const corridor = card.corridorLine?.trim() || CANONICAL_CORRIDOR_LINE;
  const contactHref = isCorporate
    ? `/${lang}/contact`
    : `/${lang}/contact?ref=card-${encodeURIComponent(card.slug)}`;
  const vcardHref = isCorporate
    ? "/api/vcard"
    : `/api/vcard/${encodeURIComponent(card.slug)}`;
  const homeHref = lang === "en" ? "/" : `/${lang}`;

  const displayFullName = isCorporate
    ? CANONICAL_LEGAL_ENTITY
    : card.salutationPrefix?.trim()
      ? `${card.salutationPrefix.trim()} ${card.fullName}`
      : card.fullName;

  const displayTitle = isCorporate ? ui.corporateSubtitle : card.jobTitle;
  const displayDivision = isCorporate
    ? ui.corporateDivisionLabel
    : card.divisionLabel;
  const displayScope = isCorporate ? ui.corporateScopeSummary : card.scopeSummary;
  const websiteHref = card.websiteUrl || "https://novaltron.com";

  return (
    <div className="flex min-h-dvh flex-col bg-[#F4F7F9] text-[#455A69]">
      {/* Top Bar: Precision Corridor Wordmark ONLY (never square N badge) + EN | AZ | TR | RU */}
      <header className="border-b border-[#234863] bg-[#0A1F2E]">
        <div className="mx-auto flex h-14 max-w-[540px] items-center justify-between gap-3 px-4">
          <Link
            href={homeHref}
            aria-label={ui.backToSiteLabel}
            className="inline-flex min-h-[44px] items-center py-2 pr-2 no-underline"
          >
            <PrecisionCorridorWordmark
              variant="light-on-dark"
              className="h-auto w-[124px] min-w-[110px] shrink-0 sm:w-[140px]"
            />
            <span className="sr-only">NOVALTRON</span>
          </Link>

          <div
            role="group"
            aria-label={ui.languageLabel}
            className="flex shrink-0 items-center gap-0.5 rounded-lg border border-[#234863] bg-[#133045] p-0.5 font-mono text-[11px]"
          >
            {LOCALES.map((loc) => {
              const active = loc === lang;
              return (
                <button
                  key={loc}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setLang(loc)}
                  className={`inline-flex min-h-[30px] min-w-[28px] cursor-pointer items-center justify-center rounded-md px-1.5 font-semibold transition-colors ${
                    active
                      ? "bg-[#267042] text-white"
                      : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {LOCALE_LABELS[loc]}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Mobile-First Card Surface */}
      <main className="mx-auto flex w-full max-w-[540px] flex-1 flex-col justify-start px-4 py-5 sm:py-8">
        <article className="overflow-hidden rounded-2xl border border-[#D4DFE7] bg-white shadow-xs">
          <div aria-hidden="true" className="h-1 w-full bg-[#267042]" />

          {/* Identity Block */}
          <div className="p-5 sm:p-6">
            {displayDivision && (
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#267042]">
                {displayDivision}
              </p>
            )}

            <h1 className="mt-1.5 text-2xl font-bold leading-tight text-[#0A1F2E] sm:text-[26px]">
              {displayFullName}
            </h1>

            {displayTitle && (
              <p className="mt-1 text-[15px] font-medium leading-snug text-[#455A69]">
                {displayTitle}
              </p>
            )}

            <p className="mt-2.5 text-xs font-medium text-[#455A69]">
              {isCorporate
                ? corridor
                : `${CANONICAL_LEGAL_ENTITY} · ${corridor}`}
            </p>

            {card.spokenLanguages && card.spokenLanguages.length > 0 && (
              <div
                aria-label={ui.spokenLanguagesLabel}
                className="mt-3.5 flex flex-wrap items-center gap-1.5"
              >
                {card.spokenLanguages.map((code) => (
                  <span
                    key={code}
                    className="inline-flex items-center rounded-md border border-[#D4DFE7] bg-[#F4F7F9] px-2 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#0A1F2E]"
                  >
                    {code}
                  </span>
                ))}
              </div>
            )}

            {/* Primary CTAs — Above the fold, full-width on mobile, min 48px touch targets */}
            <div className="mt-5 flex flex-col gap-2.5">
              {isCorporate ? (
                <>
                  <Link
                    href={contactHref}
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#267042] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1E5B35]"
                  >
                    <span>{ui.requestQuoteCta}</span>
                    <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                  </Link>
                  <a
                    href={vcardHref}
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-[#0A1F2E] bg-white px-4 py-3 text-sm font-semibold text-[#0A1F2E] transition-colors hover:bg-[#0A1F2E] hover:text-white"
                  >
                    <Download aria-hidden="true" className="h-4 w-4 shrink-0" />
                    <span>{ui.saveContactCta}</span>
                  </a>
                </>
              ) : (
                <>
                  <a
                    href={vcardHref}
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#267042] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1E5B35]"
                  >
                    <Download aria-hidden="true" className="h-4 w-4 shrink-0" />
                    <span>{ui.saveContactCta}</span>
                  </a>
                  <Link
                    href={contactHref}
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-[#0A1F2E] bg-white px-4 py-3 text-sm font-semibold text-[#0A1F2E] transition-colors hover:bg-[#0A1F2E] hover:text-white"
                  >
                    <span>{ui.requestQuoteCta}</span>
                    <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* 1-Tap Direct Contact Channels */}
          <div className="border-t border-[#D4DFE7] px-5 py-4 sm:px-6">
            <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#455A69]">
              {ui.directChannelsHeading}
            </h2>

            <ul className="mt-2.5 divide-y divide-[#EBF1F5]">
              {card.email && (
                <li>
                  <a
                    href={`mailto:${card.email}`}
                    className="flex min-h-[48px] items-center justify-between gap-3 py-2 text-sm text-[#0A1F2E] transition-colors hover:text-[#267042]"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <Mail
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-[#267042]"
                      />
                      <span className="min-w-0">
                        <span className="block text-[11px] font-medium text-[#455A69]">
                          {ui.emailLabel}
                        </span>
                        <span className="block truncate font-mono text-[13px] font-semibold">
                          {card.email}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-slate-400"
                    />
                  </a>
                </li>
              )}

              {(card.phones ?? []).map((phone) => {
                const telHref = normalizeTelHref(phone.number);
                const phoneDigits = digitsOnly(phone.number);
                const showWaButton = phone.whatsapp === true && Boolean(phoneDigits);

                return (
                  <li
                    key={`${phone.label}-${phone.number}`}
                    className="flex min-h-[48px] items-center justify-between gap-2 py-2"
                  >
                    <a
                      href={`tel:${telHref}`}
                      className="flex min-h-[44px] min-w-0 flex-1 items-center gap-3 text-sm text-[#0A1F2E] transition-colors hover:text-[#267042]"
                    >
                      <Phone
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-[#267042]"
                      />
                      <span className="min-w-0">
                        <span className="block text-[11px] font-medium text-[#455A69]">
                          {phone.label || ui.callLabel}
                        </span>
                        <span className="block truncate font-mono text-[13px] font-semibold">
                          {phone.number}
                        </span>
                      </span>
                    </a>

                    {showWaButton && (
                      <a
                        href={`https://wa.me/${phoneDigits}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] shrink-0 items-center gap-1.5 rounded-lg border border-[#D4DFE7] bg-[#F4F7F9] px-3 py-2 text-xs font-semibold text-[#267042] transition-colors hover:border-[#267042] hover:bg-[#EEF6F1]"
                      >
                        <MessageCircle
                          aria-hidden="true"
                          className="h-3.5 w-3.5 shrink-0"
                        />
                        <span>{ui.whatsappLabel}</span>
                      </a>
                    )}
                  </li>
                );
              })}

              {card.linkedinUrl && (
                <li>
                  <a
                    href={card.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[48px] items-center justify-between gap-3 py-2 text-sm text-[#0A1F2E] transition-colors hover:text-[#267042]"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4 shrink-0 text-[#267042]"
                      >
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
                      </svg>
                      <span className="font-semibold">{ui.linkedinLabel}</span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-slate-400"
                    />
                  </a>
                </li>
              )}

              <li>
                <a
                  href={websiteHref}
                  className="flex min-h-[48px] items-center justify-between gap-3 py-2 text-sm text-[#0A1F2E] transition-colors hover:text-[#267042]"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <Globe
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-[#267042]"
                    />
                    <span className="min-w-0">
                      <span className="block text-[11px] font-medium text-[#455A69]">
                        {ui.websiteLabel}
                      </span>
                      <span className="block truncate font-mono text-[13px] font-semibold">
                        novaltron.com
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-slate-400"
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* Concise Scope Summary (2-3 lines max) */}
          {displayScope && (
            <div className="border-t border-[#D4DFE7] bg-[#F4F7F9]/70 px-5 py-4 sm:px-6">
              <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#455A69]">
                {ui.scopeHeading}
              </h2>
              <p className="mt-1.5 line-clamp-3 text-[13px] leading-relaxed text-[#455A69]">
                {displayScope}
              </p>
            </div>
          )}
        </article>

        <footer className="mt-4 text-center font-mono text-[11px] text-[#455A69]">
          {CANONICAL_LEGAL_ENTITY} · novaltron.com
        </footer>
      </main>
    </div>
  );
}
