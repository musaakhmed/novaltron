export const LOCALES = ["en", "az", "tr", "ru"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export function hasLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  az: "AZ",
  tr: "TR",
  ru: "RU",
};

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  az: "Azərbaycan",
  tr: "Türkçe",
  ru: "Русский",
};

export const OG_LOCALES: Record<Locale, string> = {
  en: "en_US",
  az: "az_AZ",
  tr: "tr_TR",
  ru: "ru_RU",
};
