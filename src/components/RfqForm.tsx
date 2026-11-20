"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AlertCircle, CheckCircle2, Paperclip, ShieldCheck } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { SiteDictionary } from "@/data/dictionaries/types";

interface RfqFormProps {
  lang: Locale;
  formDict: SiteDictionary["contact"]["form"];
  privacyNotice: string;
  legalLinkLabel: string;
}

export function RfqForm({
  lang,
  formDict,
  privacyNotice,
  legalLinkLabel,
}: RfqFormProps) {
  const searchParams = useSearchParams();
  const divisionParam = searchParams.get("division") ?? "";
  const tierParam = searchParams.get("tier") ?? "";

  const formRef = useRef<HTMLFormElement>(null);
  const announcerRef = useRef<HTMLDivElement>(null);
  const announceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [division, setDivision] = useState(() => {
    const valid = formDict.divisions.some((d) => d.value === divisionParam);
    return valid ? divisionParam : "";
  });
  const [timeline, setTimeline] = useState("");
  const [scope, setScope] = useState(() => {
    if (divisionParam === "bio-ipm" && ["1", "2", "3"].includes(tierParam)) {
      return `${formDict.tierPreselectedNote} ${tierParam}. `;
    }
    return "";
  });
  const [boqFile, setBoqFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  // Synchronize aria-invalid and aria-describedby with :user-invalid (plus fallback)
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const supportsUserInvalid =
      typeof CSS !== "undefined" && CSS.supports("selector(:user-invalid)");
    const dirtyState = new WeakMap<Element, { interacted: boolean; blurred: boolean }>();
    const announced = new WeakSet<Element>();
    let announcedField: Element | null = null;

    const linkError = (el: HTMLElement, shown: boolean) => {
      const errorId = el.dataset.error;
      if (!errorId) return;
      const ids = (el.getAttribute("aria-describedby") || "")
        .split(/\s+/)
        .filter((id) => id && id !== errorId);
      if (shown) ids.push(errorId);
      if (ids.length > 0) el.setAttribute("aria-describedby", ids.join(" "));
      else el.removeAttribute("aria-describedby");
    };

    const announceError = (el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
      const errorId = el.dataset.error;
      if (!errorId || !announcerRef.current) return;
      const errorEl = document.getElementById(errorId);
      if (!errorEl) return;
      const labelText = el.labels?.[0]?.textContent?.trim() ?? "";
      const message = errorEl.textContent?.trim() ?? "";
      if (announceTimerRef.current) clearTimeout(announceTimerRef.current);
      announcerRef.current.textContent = "";
      announcedField = el;
      announceTimerRef.current = setTimeout(() => {
        if (announcerRef.current) {
          announcerRef.current.textContent = labelText ? `${labelText}: ${message}` : message;
        }
      }, 500);
    };

    const syncAria = (el: EventTarget | null, announce = false) => {
      if (!(el instanceof HTMLElement)) return;
      if (!el.matches("input, select, textarea")) return;
      const control = el as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

      let invalid = false;
      if (supportsUserInvalid) {
        invalid = control.matches(":user-invalid");
      } else {
        const state = dirtyState.get(control);
        invalid = Boolean(state?.interacted && state?.blurred && !control.validity.valid);
        control.classList.toggle("user-invalid-fallback", invalid);
      }

      if (invalid) {
        if (announce && !announced.has(control)) {
          announceError(control);
          announced.add(control);
        }
        control.setAttribute("aria-invalid", "true");
        linkError(control, true);
      } else {
        control.setAttribute("aria-invalid", "false");
        linkError(control, false);
        announced.delete(control);
        if (announcedField === control && announcerRef.current) {
          if (announceTimerRef.current) clearTimeout(announceTimerRef.current);
          announcerRef.current.textContent = "";
        }
      }
    };

    form.querySelectorAll("input, select, textarea").forEach((el) => {
      el.setAttribute("aria-invalid", "false");
    });

    const onBlur = (e: Event) => {
      if (!supportsUserInvalid && e.target instanceof HTMLElement) {
        const prev = dirtyState.get(e.target) ?? { interacted: false, blurred: false };
        dirtyState.set(e.target, { ...prev, blurred: true });
      }
      syncAria(e.target, true);
    };

    const onInput = (e: Event) => {
      if (!supportsUserInvalid && e.target instanceof HTMLElement) {
        const prev = dirtyState.get(e.target) ?? { interacted: false, blurred: false };
        dirtyState.set(e.target, { ...prev, interacted: true });
      }
      if (e.target instanceof HTMLElement && e.target.hasAttribute("aria-invalid")) {
        syncAria(e.target, false);
      }
    };

    const onChange = (e: Event) => {
      if (!supportsUserInvalid && e.target instanceof HTMLElement) {
        dirtyState.set(e.target, { interacted: true, blurred: true });
      }
      syncAria(e.target, true);
    };

    const onInvalid = (e: Event) => {
      if (e.target instanceof HTMLElement) {
        dirtyState.set(e.target, { interacted: true, blurred: true });
        announced.add(e.target);
        syncAria(e.target, false);
      }
    };

    form.addEventListener("blur", onBlur, true);
    form.addEventListener("input", onInput);
    form.addEventListener("change", onChange, true);
    form.addEventListener("invalid", onInvalid, true);

    return () => {
      if (announceTimerRef.current) clearTimeout(announceTimerRef.current);
      form.removeEventListener("blur", onBlur, true);
      form.removeEventListener("input", onInput);
      form.removeEventListener("change", onChange, true);
      form.removeEventListener("invalid", onInvalid, true);
    };
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError(null);
    const form = formRef.current;
    if (!form) return;

    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector<HTMLElement>(":invalid");
      form.querySelectorAll<HTMLElement>("input, select, textarea").forEach((el) => {
        if (
          el instanceof HTMLInputElement ||
          el instanceof HTMLSelectElement ||
          el instanceof HTMLTextAreaElement
        ) {
          if (!el.validity.valid) {
            el.classList.add("user-invalid-fallback");
            el.setAttribute("aria-invalid", "true");
            const errorId = el.dataset.error;
            if (errorId) el.setAttribute("aria-describedby", errorId);
          }
        }
      });
      firstInvalid?.focus();
      return;
    }

    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("company", company);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("country", country);
      formData.append("division", division);
      formData.append("timeline", timeline);
      formData.append("scope", scope);
      formData.append("locale", lang);
      if (boqFile) {
        formData.append("boqFile", boqFile);
      }

      const res = await fetch("/api/rfq", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok || !data?.ok) {
        setServerError(
          data?.error ||
            "Unable to submit your inquiry right now. Please contact info@novaltron.com directly."
        );
        return;
      }

      setReferenceId(data.referenceId ?? null);
      setSubmitted(true);
    } catch {
      setServerError(
        "Network error while submitting RFQ. Please retry or email info@novaltron.com directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-[#059669] bg-[#ECFDF5] p-8 shadow-sm"
      >
        <div className="flex items-start gap-4">
          <CheckCircle2 aria-hidden="true" className="h-8 w-8 shrink-0 text-[#059669]" />
          <div>
            <h2 className="text-xl font-bold text-[#0F172A]">
              {formDict.confirmationTitle}
            </h2>
            {referenceId && (
              <p className="mt-1.5 font-mono text-xs font-semibold text-[#065F46]">
                {formDict.referenceIdLabel}: {referenceId}
              </p>
            )}
            <p className="mt-3 text-sm leading-relaxed text-[#334155]">
              {formDict.confirmationBody}
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setReferenceId(null);
                setFullName("");
                setCompany("");
                setEmail("");
                setPhone("");
                setCountry("");
                setDivision("");
                setTimeline("");
                setScope("");
                setBoqFile(null);
              }}
              className="mt-6 inline-flex min-h-[44px] cursor-pointer items-center rounded-xl border border-[#059669] bg-white px-5 py-2 text-sm font-semibold text-[#065F46] transition-colors hover:bg-[#059669] hover:text-white"
            >
              {formDict.confirmationReset}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div ref={announcerRef} aria-live="polite" className="visually-hidden" />

      {divisionParam === "bio-ipm" && ["1", "2", "3"].includes(tierParam) && (
        <div className="mb-6 rounded-xl border border-[#059669]/40 bg-[#ECFDF5] px-4 py-3 text-sm font-medium text-[#065F46]">
          {formDict.tierPreselectedNote} {tierParam}
        </div>
      )}

      {serverError && (
        <div
          role="alert"
          className="mb-6 flex items-start gap-3 rounded-xl border border-red-300 bg-red-50 px-4 py-3.5 text-sm text-red-900"
        >
          <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
          <span>{serverError}</span>
        </div>
      )}

      <form
        ref={formRef}
        noValidate
        onSubmit={handleSubmit}
        className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Full Name */}
          <div>
            <label htmlFor="rfq-fullname" className="block text-sm font-semibold text-[#0F172A]">
              {formDict.fullNameLabel}{" "}
              <span className="font-mono text-xs font-normal text-[#059669]">
                ({formDict.requiredTag})
              </span>
            </label>
            <input
              id="rfq-fullname"
              name="fullName"
              type="text"
              required
              autoComplete="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder={formDict.fullNamePlaceholder}
              data-error="rfq-fullname-error"
              className="rfq-input mt-2 block min-h-[46px] w-full rounded-xl border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-sm text-[#0F172A] placeholder:text-slate-400"
            />
            <span id="rfq-fullname-error" className="rfq-error-msg">
              {formDict.validationErrors.required}
            </span>
          </div>

          {/* Company */}
          <div>
            <label htmlFor="rfq-company" className="block text-sm font-semibold text-[#0F172A]">
              {formDict.companyLabel}{" "}
              <span className="font-mono text-xs font-normal text-[#059669]">
                ({formDict.requiredTag})
              </span>
            </label>
            <input
              id="rfq-company"
              name="company"
              type="text"
              required
              autoComplete="organization"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder={formDict.companyPlaceholder}
              data-error="rfq-company-error"
              className="rfq-input mt-2 block min-h-[46px] w-full rounded-xl border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-sm text-[#0F172A] placeholder:text-slate-400"
            />
            <span id="rfq-company-error" className="rfq-error-msg">
              {formDict.validationErrors.required}
            </span>
          </div>

          {/* Work Email */}
          <div>
            <label htmlFor="rfq-email" className="block text-sm font-semibold text-[#0F172A]">
              {formDict.emailLabel}{" "}
              <span className="font-mono text-xs font-normal text-[#059669]">
                ({formDict.requiredTag})
              </span>
            </label>
            <input
              id="rfq-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={formDict.emailPlaceholder}
              data-error="rfq-email-error"
              className="rfq-input mt-2 block min-h-[46px] w-full rounded-xl border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-sm text-[#0F172A] placeholder:text-slate-400"
            />
            <span id="rfq-email-error" className="rfq-error-msg">
              {formDict.validationErrors.email}
            </span>
          </div>

          {/* Phone / WhatsApp */}
          <div>
            <label htmlFor="rfq-phone" className="block text-sm font-semibold text-[#0F172A]">
              {formDict.phoneLabel}{" "}
              <span className="font-mono text-xs font-normal text-[#059669]">
                ({formDict.requiredTag})
              </span>
            </label>
            <input
              id="rfq-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={formDict.phonePlaceholder}
              data-error="rfq-phone-error"
              className="rfq-input mt-2 block min-h-[46px] w-full rounded-xl border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-sm text-[#0F172A] placeholder:text-slate-400"
            />
            <span id="rfq-phone-error" className="rfq-error-msg">
              {formDict.validationErrors.required}
            </span>
          </div>

          {/* Project Country */}
          <div>
            <label htmlFor="rfq-country" className="block text-sm font-semibold text-[#0F172A]">
              {formDict.countryLabel}{" "}
              <span className="font-mono text-xs font-normal text-[#059669]">
                ({formDict.requiredTag})
              </span>
            </label>
            <select
              id="rfq-country"
              name="country"
              required
              autoComplete="country-name"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              data-error="rfq-country-error"
              className="rfq-input mt-2 block min-h-[46px] w-full rounded-xl border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-sm text-[#0F172A]"
            >
              <option value="">{formDict.countryPlaceholder}</option>
              {formDict.countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <span id="rfq-country-error" className="rfq-error-msg">
              {formDict.validationErrors.required}
            </span>
          </div>

          {/* Primary Division */}
          <div>
            <label htmlFor="rfq-division" className="block text-sm font-semibold text-[#0F172A]">
              {formDict.divisionLabel}{" "}
              <span className="font-mono text-xs font-normal text-[#059669]">
                ({formDict.requiredTag})
              </span>
            </label>
            <select
              id="rfq-division"
              name="division"
              required
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              data-error="rfq-division-error"
              className="rfq-input mt-2 block min-h-[46px] w-full rounded-xl border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-sm text-[#0F172A]"
            >
              <option value="">{formDict.divisionPlaceholder}</option>
              {formDict.divisions.map((div) => (
                <option key={div.value} value={div.value}>
                  {div.label}
                </option>
              ))}
            </select>
            <span id="rfq-division-error" className="rfq-error-msg">
              {formDict.validationErrors.required}
            </span>
          </div>

          {/* Estimated Timeline (Optional) */}
          <div className="sm:col-span-2">
            <label htmlFor="rfq-timeline" className="block text-sm font-semibold text-[#0F172A]">
              {formDict.timelineLabel}{" "}
              <span className="font-mono text-xs font-normal text-slate-500">
                ({formDict.optionalTag})
              </span>
            </label>
            <input
              id="rfq-timeline"
              name="timeline"
              type="text"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              placeholder={formDict.timelinePlaceholder}
              className="mt-2 block min-h-[46px] w-full rounded-xl border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-sm text-[#0F172A] placeholder:text-slate-400"
            />
          </div>

          {/* Project Scope */}
          <div className="sm:col-span-2">
            <label htmlFor="rfq-scope" className="block text-sm font-semibold text-[#0F172A]">
              {formDict.scopeLabel}{" "}
              <span className="font-mono text-xs font-normal text-[#059669]">
                ({formDict.requiredTag})
              </span>
            </label>
            <textarea
              id="rfq-scope"
              name="scope"
              required
              rows={5}
              value={scope}
              onChange={(e) => setScope(e.target.value)}
              placeholder={formDict.scopePlaceholder}
              data-error="rfq-scope-error"
              className="rfq-input mt-2 block w-full rounded-xl border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-sm text-[#0F172A] placeholder:text-slate-400"
            />
            <span id="rfq-scope-error" className="rfq-error-msg">
              {formDict.validationErrors.required}
            </span>
          </div>

          {/* BOQ File Upload (Optional) */}
          <div className="sm:col-span-2">
            <label htmlFor="rfq-boq" className="block text-sm font-semibold text-[#0F172A]">
              {formDict.boqLabel}{" "}
              <span className="font-mono text-xs font-normal text-slate-500">
                ({formDict.optionalTag})
              </span>
            </label>
            <p id="rfq-boq-hint" className="mt-1 text-xs text-slate-500">
              {formDict.boqHint}
            </p>
            <div className="mt-2 flex min-w-0 items-center gap-3 rounded-xl border border-dashed border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3.5">
              <Paperclip aria-hidden="true" className="h-4 w-4 shrink-0 text-slate-500" />
              <input
                id="rfq-boq"
                name="boqFile"
                type="file"
                accept=".pdf,.xlsx,.xls,.docx,.doc,.zip"
                aria-describedby="rfq-boq-hint"
                onChange={(e) => setBoqFile(e.target.files?.[0] ?? null)}
                className="block min-w-0 w-full cursor-pointer text-xs text-[#334155] file:mr-3 file:cursor-pointer file:rounded-lg file:border-0 file:bg-[#0F172A] file:px-3.5 file:py-2 file:text-xs file:font-semibold file:text-white hover:file:bg-slate-800"
              />
            </div>
            {boqFile && (
              <p className="mt-1.5 font-mono text-xs text-[#059669]">
                {boqFile.name} ({(boqFile.size / (1024 * 1024)).toFixed(2)} MB)
              </p>
            )}
          </div>
        </div>

        {/* Confidentiality Notice + Submit */}
        <div className="mt-8 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-2 text-xs text-slate-500">
            <ShieldCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#059669]" />
            <span>
              {privacyNotice}{" "}
              <Link
                href={`/${lang}/legal`}
                className="font-semibold text-[#0F172A] underline decoration-slate-300 underline-offset-2 hover:text-[#059669]"
              >
                {legalLinkLabel}
              </Link>
              .
            </span>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex min-h-[48px] shrink-0 cursor-pointer items-center justify-center rounded-xl bg-[#059669] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-[#047857] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? formDict.submittingButton : formDict.submitButton}
          </button>
        </div>
      </form>
    </>
  );
}
