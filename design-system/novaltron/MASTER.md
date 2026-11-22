# Design System Master File — Novaltron (v2.0)

> **LOGIC:** When building a specific page, first check `design-system/novaltron/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Novaltron (`https://novaltron.com`) & Novaltron ERM (`https://erm.novaltron.com`)
**Updated:** 2026-11-22 (Locked Direction: **Caspian Petrol & Ismayilli Forest** + **Concept 1: Precision Corridor** + **IBM Plex Superfamily & Noto Sans Georgian**)
**Category:** B2B Industrial Engineering, EPC Integration & Critical Equipment Supply
**Aesthetic:** Engineered Precision — authoritative, technical, clean, and zero-fluff across English, Azerbaijani, Turkish, Russian, and Georgian.

---

## 1. Global Color Palette & Tokens (Caspian Petrol & Ismayilli Forest)

| Role | Token | Hex | Contrast / Usage Notes |
|------|-------|-----|------------------------|
| Primary Dark (Brand Ink & Dark BG) | `--petrol-900` | `#0A1F2E` | Deep Caspian Petrol (`PMS 3035 C` · `RAL 5011`) — Hero scrim, CAD stage, Footer, Primary Light-mode headings & ink |
| Elevated Dark Surface | `--petrol-800` | `#133045` | Elevated cards/badges on dark sections (`#234863` border) |
| Primary Background (Light) | `--lab-50` | `#F4F7F9` | Lab Crisp Off-White (`PMS 656 C` · `RAL 9016`) — Primary workspace & section backgrounds |
| Light Surface / Cards | `--white` | `#FFFFFF` | Pure white cards on `#F4F7F9` with `#D4DFE7` (`--mist-200`) technical borders |
| Surface Accent Tint (Bio-IPM) | `--bio-tint` | `#EEF6F1` | Soft botanical tint with `#B6DBC2` border & `#1B5431` pine ink |
| Primary Brand Accent (Light Surfaces & Buttons) | `--forest-600` | `#267042` | **Ismayilli Forest** (`PMS 349 C` · `RAL 6002`) — Primary CTAs (`6.04:1` AA with `#FFFFFF` text) and text accent on light (`5.61:1` on `#F4F7F9`) |
| Dark-Surface Brand Accent | `--canopy-400` | `#5BB87A` | **Ismayilli Canopy** (`PMS 7480 C` · `RAL 6017`) — Dark-surface accents, active indicators & badges (`6.87:1` on `#0A1F2E`) |
| Secondary Technical Accent (Light) | `--teal-600` | `#006B68` | Technical Teal (`PMS 3282 C` · `RAL 5021`) — Industrial/OT track badges & Strategic Projects `[PRJ]` (`6.48:1` with white) |
| Secondary Technical Accent (Dark) | `--mineral-400` | `#5CB3AE` | Mineral Teal — Dark-surface Industrial/OT & SCADA telemetry accents (`6.82:1` on `#0A1F2E`) |
| Muted Ink (Light / Dark) | `--slate-600` / `--slate-300` | `#455A69` / `#9CB3C4` | Secondary body copy (`6.69:1` on light / `7.74:1` on `#0A1F2E`) |
| Safety / Attention Accent | `--amber-600` | `#B45309` | Standards/overdue/warning accents (`#F59E0B` on dark surfaces) |

---

## 2. Logo System (Concept 1 — Precision Corridor)

- **Wordmark (`NOVALTRON`):** Pure-vector uppercase geometric display mark with a two-tone 180°-symmetric diagonal-corridor split `N` (`#0A1F2E` + `#267042` on light, `#FFFFFF` + `#5BB87A` on dark).
- **Companion Icon Badge:** `64×64` top-right 45°-chamfered tile containing the interlocking split `N` (`#FFFFFF` + `#5BB87A` on `#0A1F2E`/`#133045`).
- **ERM Lockup:** Companion badge + reversed wordmark + `#5BB87A` `ERM` pill tag.

---

## 3. Multi-Script Typography (`EN · AZ · TR · RU · KA`)

- **Headings & UI (`--font-heading` / `--font-sans`):** `IBM Plex Sans` + `Noto Sans Georgian` (full coverage of `Ə/ə`, `Ğ/ğ`, `Ş/ş`, `İ/ı`, Cyrillic, and Georgian `Mkhedruli`).
- **Monospace Telemetry & Codes (`--font-mono`):** `IBM Plex Mono` (`font-variant-numeric: tabular-nums` for BOQs, HS codes, `EN 1993-4-1`, `RFC 2544`, `IEC 61850`, `-48V DC`, and ERM filenames).

---

## 4. Accessibility & Modern Web Rules

- WCAG 2.1 AA minimum (`>= 4.5:1` normal text, `>= 3:1` large/UI graphics) enforced separately for light (`#267042`) and dark (`#5BB87A`) accents.
- Minimum `44×44px` (`48px` form controls) touch targets and visible `:focus-visible` outlines (`3px solid #267042`).
- Semantic `<form>`, `<label for>`, `autocomplete`, `:user-invalid` validation, and `prefers-reduced-motion: reduce` support.
