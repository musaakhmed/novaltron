import type { Locale } from "@/lib/i18n";
import type { SiteDictionary } from "./types";
import { en } from "./en";
import { az } from "./az";
import { tr } from "./tr";
import { ru } from "./ru";

const dictionaries: Record<Locale, SiteDictionary> = {
  en,
  az,
  tr,
  ru,
};

export function getDictionary(locale: Locale): SiteDictionary {
  return dictionaries[locale] ?? dictionaries.en;
}

export type { SiteDictionary };
