import type { Locale } from "@/lib/i18n";

export interface CardUiDictionary {
  languageLabel: string;
  backToSiteLabel: string;
  saveContactCta: string;
  requestQuoteCta: string;
  directChannelsHeading: string;
  emailLabel: string;
  callLabel: string;
  whatsappLabel: string;
  linkedinLabel: string;
  websiteLabel: string;
  spokenLanguagesLabel: string;
  scopeHeading: string;
  corporateDivisionLabel: string;
  corporateSubtitle: string;
  corporateScopeSummary: string;
}

export const CARD_DICTIONARIES: Record<Locale, CardUiDictionary> = {
  en: {
    languageLabel: "Card language",
    backToSiteLabel: "Go to Novaltron website",
    saveContactCta: "Save Contact (.vcf)",
    requestQuoteCta: "Request a Quote / Project Inquiry",
    directChannelsHeading: "Direct Channels",
    emailLabel: "Email",
    callLabel: "Call",
    whatsappLabel: "WhatsApp",
    linkedinLabel: "LinkedIn",
    websiteLabel: "Corporate Website",
    spokenLanguagesLabel: "Languages",
    scopeHeading: "Engineering & Execution Scope",
    corporateDivisionLabel: "Corporate Desk",
    corporateSubtitle: "Engineering, Sourcing & Turnkey Project Execution Desk",
    corporateScopeSummary:
      "Industrial engineering, OEM sourcing, and turnkey project execution across agro-industrial and critical infrastructure corridors.",
  },
  az: {
    languageLabel: "Kart dili",
    backToSiteLabel: "Novaltron saytına keçid",
    saveContactCta: "Kontaktı Yadda Saxla (.vcf)",
    requestQuoteCta: "Təklif Sorğusu / Layihə Müraciəti",
    directChannelsHeading: "Birbaşa Əlaqə Kanalları",
    emailLabel: "E-poçt",
    callLabel: "Zəng et",
    whatsappLabel: "WhatsApp",
    linkedinLabel: "LinkedIn",
    websiteLabel: "Korporativ Sayt",
    spokenLanguagesLabel: "Dillər",
    scopeHeading: "Mühəndislik və İcra Sahəsi",
    corporateDivisionLabel: "Korporativ Ofis",
    corporateSubtitle: "Mühəndislik, Təchizat və Açar Təslimi Layihə İcrası Masası",
    corporateScopeSummary:
      "Aqro-sənaye və kritik infrastruktur dəhlizləri üzrə sənaye mühəndisliyi, OEM təchizatı və açar təslimi layihələrin icrası.",
  },
  tr: {
    languageLabel: "Kart dili",
    backToSiteLabel: "Novaltron web sitesine git",
    saveContactCta: "Kişiyi Kaydet (.vcf)",
    requestQuoteCta: "Teklif Talebi / Proje Başvurusu",
    directChannelsHeading: "Doğrudan İletişim Kanalları",
    emailLabel: "E-posta",
    callLabel: "Ara",
    whatsappLabel: "WhatsApp",
    linkedinLabel: "LinkedIn",
    websiteLabel: "Kurumsal Web Sitesi",
    spokenLanguagesLabel: "Diller",
    scopeHeading: "Mühendislik ve Uygulama Kapsamı",
    corporateDivisionLabel: "Kurumsal Masa",
    corporateSubtitle: "Mühendislik, Tedarik ve Anahtar Teslim Proje İcra Masası",
    corporateScopeSummary:
      "Tarım-sanayi ve kritik altyapı koridorlarında endüstriyel mühendislik, OEM tedarik ve anahtar teslim proje uygulaması.",
  },
  ru: {
    languageLabel: "Язык визитки",
    backToSiteLabel: "Перейти на сайт Novaltron",
    saveContactCta: "Сохранить контакт (.vcf)",
    requestQuoteCta: "Запросить предложение / Заявка",
    directChannelsHeading: "Прямые каналы связи",
    emailLabel: "Эл. почта",
    callLabel: "Позвонить",
    whatsappLabel: "WhatsApp",
    linkedinLabel: "LinkedIn",
    websiteLabel: "Корпоративный сайт",
    spokenLanguagesLabel: "Языки",
    scopeHeading: "Инжиниринг и область реализации",
    corporateDivisionLabel: "Корпоративный офис",
    corporateSubtitle: "Инжиниринг, снабжение и реализация проектов под ключ",
    corporateScopeSummary:
      "Промышленный инжиниринг, OEM-снабжение и реализация проектов под ключ в агропромышленном и инфраструктурном секторах.",
  },
};
