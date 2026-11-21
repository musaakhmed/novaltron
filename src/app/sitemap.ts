import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/i18n";
import {
  PUBLIC_ROUTES,
  SITE_LAST_MODIFIED,
  buildLanguageAlternates,
  buildLocaleUrl,
} from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLIC_ROUTES.flatMap((route) =>
    LOCALES.map((lang) => ({
      url: buildLocaleUrl(lang, route.path),
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: buildLanguageAlternates(route.path),
      },
    }))
  );
}
