"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useNovaltron } from "./NovaltronProvider";

export function Header() {
  const { dict } = useNovaltron();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navItems = [
    { label: dict.nav.solutions, href: isHome ? "#solutions" : "/solutions" },
    { label: dict.nav.turnkey, href: isHome ? "#services" : "/services" },
    { label: dict.nav.compliance, href: isHome ? "#about" : "/about" },
    { label: dict.nav.resources, href: isHome ? "#contact" : "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B132B]/90 backdrop-blur-md border-b border-white/10 text-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-heading text-base font-bold tracking-widest uppercase text-white"
          >
            NOVALTRON
          </Link>

          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-8"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs text-[#94A3B8] hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              href={isHome ? "#contact" : "/contact"}
              className="px-4 py-2 rounded bg-[#10B981] hover:bg-[#0D9488] text-[#0B132B] font-heading font-semibold text-xs transition-colors"
            >
              {dict.nav.rfqCta}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Menu"
            className="md:hidden text-[#94A3B8] hover:text-white cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B132B] border-t border-white/10 px-6 py-4 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-[#CBD5E1] hover:text-white py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href={isHome ? "#contact" : "/contact"}
            onClick={() => setMobileMenuOpen(false)}
            className="inline-block px-4 py-2 rounded bg-[#10B981] text-[#0B132B] font-heading font-semibold text-xs"
          >
            {dict.nav.rfqCta}
          </Link>
        </div>
      )}
    </header>
  );
}
