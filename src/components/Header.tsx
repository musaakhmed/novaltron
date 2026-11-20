"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { LOCALES, LOCALE_LABELS, type Locale } from "@/lib/i18n";
import type { SiteDictionary } from "@/data/dictionaries/types";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface HeaderProps {
  lang: Locale;
  dict: SiteDictionary;
}

export function Header({ lang, dict }: HeaderProps) {
  const pathname = usePathname() || `/${lang}`;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isWide, setIsWide] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const isWideRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useIsomorphicLayoutEffect(() => {
    const header = headerRef.current;
    const inner = innerRef.current;
    const nav = navRef.current;
    if (!header || !inner || !nav) return;

    let lastCollapsedWidth = 0;
    let rafId = 0;

    const measure = (force = false) => {
      const currentWidth = inner.clientWidth;

      if (!force && !isWideRef.current && currentWidth <= lastCollapsedWidth) {
        return;
      }

      header.classList.add("is-measuring");
      header.classList.add("is-wide");

      const fits = inner.scrollWidth <= inner.clientWidth + 1;

      if (fits) {
        lastCollapsedWidth = 0;
        isWideRef.current = true;
        setIsWide(true);
        setMobileOpen(false);
      } else {
        header.classList.remove("is-wide");
        lastCollapsedWidth = inner.clientWidth;
        isWideRef.current = false;
        setIsWide(false);
      }

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        header.classList.remove("is-measuring");
      });
    };

    measure(true);

    const observer = new ResizeObserver(() => measure(false));
    observer.observe(inner);
    observer.observe(nav);

    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) measure(true);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [lang, dict.nav.links, dict.nav.primaryCta]);

  const stripLocale = (path: string) => {
    for (const loc of LOCALES) {
      if (path === `/${loc}`) return "";
      if (path.startsWith(`/${loc}/`)) return path.slice(loc.length + 1);
    }
    return path === "/" ? "" : path;
  };

  const baseSubPath = stripLocale(pathname);

  const buildLocaleHref = (targetLang: Locale) =>
    baseSubPath ? `/${targetLang}${baseSubPath}` : `/${targetLang}`;

  const isActiveLink = (href: string) => {
    const cleanHref = href.split("#")[0];
    return baseSubPath === cleanHref && !href.includes("#");
  };

  const isOpaque = scrolled || mobileOpen;
  const isLightSurface = !isOpaque && baseSubPath === "/bio-ipm";

  return (
    <header
      ref={headerRef}
      className={`site-header${isWide ? " is-wide" : ""} fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
        isOpaque
          ? "bg-[#0F172A] border-b border-slate-800 shadow-md"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div
        ref={innerRef}
        className="header-inner mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-2 px-3 sm:gap-3 sm:px-6 lg:px-8"
      >
        {/* Brand Wordmark */}
        <Link
          href={`/${lang}`}
          className="group flex min-h-[44px] items-center gap-2 no-underline shrink-0 cursor-pointer sm:gap-2.5"
          onClick={() => setMobileOpen(false)}
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#10B981]/40 bg-[#059669] font-mono text-xs font-bold tracking-tight text-white shadow-xs transition-colors duration-200 group-hover:bg-[#047857] sm:h-9 sm:w-9 sm:text-sm"
          >
            N
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`font-heading text-[13px] font-extrabold tracking-[0.12em] whitespace-nowrap transition-colors duration-200 sm:text-base sm:tracking-[0.16em] ${
                isLightSurface ? "text-[#0F172A]" : "text-white"
              }`}
            >
              NOVALTRON
            </span>
            <span
              className={`mt-1 hidden font-mono text-[8.5px] uppercase tracking-[0.11em] whitespace-nowrap transition-colors duration-200 xl:block ${
                isLightSurface ? "text-[#065F46]" : "text-slate-300"
              }`}
            >
              CAUCASUS · CENTRAL ASIA
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav ref={navRef} aria-label="Primary" className="site-nav">
          {dict.nav.links.map((item) => {
            const active = isActiveLink(item.href);
            return (
              <Link
                key={item.href + item.label}
                href={`/${lang}${item.href}`}
                aria-current={active ? "page" : undefined}
                className={`relative shrink-0 whitespace-nowrap rounded-md px-2.5 py-2 text-[13px] font-medium transition-colors duration-150 cursor-pointer ${
                  isLightSurface
                    ? active
                      ? "text-[#065F46] font-semibold"
                      : "text-[#0F172A]/85 hover:bg-[#065F46]/10 hover:text-[#0F172A]"
                    : active
                      ? "text-white font-semibold"
                      : "text-slate-100/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
                {active && (
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-2.5 -bottom-[15px] h-[2px] ${
                      isLightSurface ? "bg-[#065F46]" : "bg-[#059669]"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Controls: Language Switcher + Primary CTA */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
          <div
            role="group"
            aria-label={dict.nav.languageLabel}
            className={`flex shrink-0 items-center gap-0.5 rounded-lg border p-0.5 font-mono text-[10px] transition-colors duration-200 sm:p-1 sm:text-[11px] ${
              isLightSurface
                ? "border-[#065F46]/25 bg-white/75 backdrop-blur-xs"
                : isOpaque
                  ? "border-slate-700/90 bg-slate-900/90"
                  : "border-white/25 bg-[#0F172A]/35 backdrop-blur-xs"
            }`}
          >
            {LOCALES.map((loc) => {
              const isCurrent = loc === lang;
              return (
                <Link
                  key={loc}
                  href={buildLocaleHref(loc)}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`inline-flex min-h-[28px] min-w-[22px] items-center justify-center rounded-md px-1 font-semibold transition-colors duration-150 cursor-pointer sm:min-w-[26px] sm:px-1.5 ${
                    isCurrent
                      ? "bg-[#059669] text-white shadow-xs"
                      : isLightSurface
                        ? "text-[#0F172A] hover:bg-[#ECFDF5]"
                        : "text-slate-100 hover:bg-white/15 hover:text-white"
                  }`}
                >
                  {LOCALE_LABELS[loc]}
                </Link>
              );
            })}
          </div>

          <Link
            href={`/${lang}/contact`}
            className="group hidden sm:inline-flex min-h-[40px] items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-[#059669] px-3.5 py-2 text-xs font-semibold text-white shadow-xs transition-all duration-150 hover:bg-[#047857] shrink-0 cursor-pointer"
          >
            <span>{dict.nav.primaryCta}</span>
            <ArrowRight
              aria-hidden="true"
              className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            aria-label={mobileOpen ? dict.nav.menuCloseLabel : dict.nav.menuOpenLabel}
            onClick={() => setMobileOpen((prev) => !prev)}
            className={`menu-button inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border transition-colors cursor-pointer ${
              isLightSurface
                ? "border-[#065F46]/30 text-[#0F172A] hover:bg-white/60"
                : "border-white/25 text-white hover:bg-white/10"
            }`}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-panel"
          className="mobile-nav-panel border-t border-slate-800 bg-[#0F172A] px-4 pb-6 pt-3"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-2">
            {dict.nav.links.map((item) => {
              const active = isActiveLink(item.href);
              return (
                <Link
                  key={item.href + item.label}
                  href={`/${lang}${item.href}`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMobileOpen(false)}
                  className={`flex min-h-[44px] items-center whitespace-nowrap rounded-lg px-3.5 text-sm font-medium transition-colors cursor-pointer ${
                    active
                      ? "border-l-2 border-[#34D399] bg-slate-800/90 text-white font-semibold"
                      : "text-slate-200 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={`/${lang}/contact`}
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex min-h-[44px] items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#059669] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#047857] cursor-pointer"
            >
              <span>{dict.nav.primaryCta}</span>
              <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
