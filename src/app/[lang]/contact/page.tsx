import React, { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, Building2, Clock, Mail, ShieldCheck } from "lucide-react";
import { hasLocale } from "@/lib/i18n";
import { getDictionary } from "@/data/dictionaries";
import { SITE_CONFIG } from "@/lib/site-config";
import { RfqForm } from "@/components/RfqForm";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.contact.metaTitle,
    description: dict.contact.subHeadline,
  };
}

export default async function ContactPage({
  params,
}: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const { contact } = dict;

  return (
    <>
      <section className="bg-blueprint-dark border-b border-slate-800 pt-28 pb-16 text-white lg:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#059669]/40 bg-[#059669]/12 px-3.5 py-1">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#34D399]" />
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#34D399]">
              {contact.eyebrow}
            </p>
          </div>
          <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-[1.12] text-white sm:text-4xl">
            {contact.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            {contact.subHeadline}
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          {/* Sidebar Info */}
          <aside className="min-w-0 space-y-5 lg:col-span-4">
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-2xs sm:p-7">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#059669]">
                <ShieldCheck aria-hidden="true" className="h-4 w-4" />
                <span>TBILISI DESK</span>
              </div>
              <h2 className="mt-3 text-lg font-bold text-[#0F172A]">
                {contact.directDeskTitle}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#334155]">
                {contact.directDeskBody}
              </p>

              <div className="mt-6 space-y-3.5 border-t border-slate-100 pt-5 text-sm">
                <div className="flex items-center gap-2.5">
                  <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-[#059669]" />
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="font-mono font-semibold text-[#0F172A] hover:text-[#059669] cursor-pointer"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-[#334155]">
                  <Clock aria-hidden="true" className="h-4 w-4 shrink-0 text-[#059669]" />
                  <span>{contact.responseSla}</span>
                </div>
                <div className="flex items-start gap-2.5 text-[#334155]">
                  <Building2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#059669]" />
                  <span>
                    {SITE_CONFIG.companyName} ({SITE_CONFIG.companyGeorgianName}) —{" "}
                    {SITE_CONFIG.hubLocation}
                  </span>
                </div>
              </div>

              {/* Official Social Channels */}
              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  {contact.socialLabel}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={SITE_CONFIG.social.linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-2 text-xs font-semibold text-[#0F172A] transition-colors hover:border-[#059669] hover:text-[#059669]"
                  >
                    <span>{SITE_CONFIG.social.linkedin.label}</span>
                    <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={SITE_CONFIG.social.instagram.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-2 text-xs font-semibold text-[#0F172A] transition-colors hover:border-[#059669] hover:text-[#059669]"
                  >
                    <span>{SITE_CONFIG.social.instagram.label}</span>
                    <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main RFQ Form */}
          <div className="min-w-0 lg:col-span-8">
            <Suspense
              fallback={
                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-8 text-sm text-slate-500">
                  Loading RFQ form...
                </div>
              }
            >
              <RfqForm
                lang={lang}
                formDict={contact.form}
                privacyNotice={contact.privacyNotice}
                legalLinkLabel={contact.legalLinkLabel}
              />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
