# Design System Master File — Novaltron (v1.0)

> **LOGIC:** When building a specific page, first check `design-system/novaltron/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Novaltron (`https://novaltron.com`)
**Generated & Refined:** 2026-11-07
**Category:** B2B Industrial Engineering, EPC Integration & Critical Equipment Supply
**Aesthetic:** Modern Industrial Precision — authoritative, technical, clean, and zero-fluff. Inspired by European OEMs and heavy infrastructure leaders (Siemens Energy, ABB, Cimbria).

---

## 1. Global Color Palette & Tokens

| Role | Hex | CSS Variable | Usage Notes |
|------|-----|--------------|-------------|
| Primary Background (Dark) | `#0B132B` | `--color-navy-deep` | Deep Industrial Navy — Hero, OT/SCADA deep-dive, Corporate Architecture, Footer |
| Primary Background (Light) | `#F8FAFC` | `--color-slate-crisp` | Crisp Technical Off-White — Alternating high-contrast light sections |
| Surface / Card (Dark) | `#1C2541` | `--color-slate-steel` | Slate Steel surface cards on dark sections with `#2D3A5E` subtle technical border |
| Surface / Card (Light) | `#FFFFFF` | `--color-surface-light` | Crisp white cards on light sections with `#E2E8F0` borders |
| Primary Accent | `#10B981` / `#0D9488` | `--color-emerald` / `--color-teal` | High-Tech Emerald & Teal — Clean energy, agro-tech, critical telecom networks, active states |
| Secondary Accent | `#F59E0B` | `--color-amber-safety` | Industrial Safety Amber — Primary CTAs, technical certification badges, FAT/SAT markers |
| Foreground (Light Section) | `#0B132B` | `--color-foreground` | High-contrast dark ink on light sections |
| Foreground (Dark Section) | `#F8FAFC` | `--color-on-dark` | Crisp white/slate text on `#0B132B` and `#1C2541` |
| Muted Foreground (Light) | `#475569` | `--color-muted-light` | Secondary technical copy (4.5:1+ contrast on `#F8FAFC` and `#FFFFFF`) |
| Muted Foreground (Dark) | `#94A3B8` | `--color-muted-dark` | Secondary technical copy (4.5:1+ contrast on `#0B132B` and `#1C2541`) |
| Border (Light) | `#E2E8F0` | `--color-border-light` | 1px technical grid borders on light surfaces |
| Border (Dark) | `#2A3659` | `--color-border-dark` | 1px technical grid borders on dark surfaces |
| Destructive / Error | `#DC2626` | `--color-destructive` | Form validation error states (`:user-invalid`) |

---

## 2. Typography System

- **Headings (`--font-heading`):** `Plus Jakarta Sans` (Bold / ExtraBold, tight tracking `-0.025em`, institutional precision)
- **Body (`--font-sans`):** `Inter` (Clean legibility for dense technical specifications, `16px` base, `1.6` line-height)
- **Monospace (`--font-mono`):** `JetBrains Mono` (Model numbers, standards, protocols & ratings: `TS/EN 61000-4`, `SMG50`, `RFC 2544`, `ITU-T Y.1564`, `GOOSE/SV`, `-48V DC`, `ISO 9001`)

---

## 3. UI/UX Pro Max & Modern Web Guidance Rules

### Pattern: Trust & Authority + Conversion
- **Bank KYC/AML & EPC AVL Transparency:** Surface physical supply chain flows, legal entity details (Novaltron LLC Tbilisi — شპს ნოვალტრონი & Novaltron MMC Baku), Incoterms/documentation readiness, and specific OEM hardware models right in the primary interface.
- **Interactive Portfolio & Multi-Route + Single-Page Hybrid Architecture:**
  - Full single-page executive journey at `/` with anchor navigation AND dedicated deep-dive routes (`/solutions`, `/services`, `/financing`, `/about`, `/contact`) so both direct links from bank compliance officers/procurement teams and smooth single-page scrolling work seamlessly.
- **Form Validation (`modern-web-guidance`):**
  - Use semantic `<form>`, `<fieldset>`, `<legend>`, `<label for="...">`, `autocomplete`, and `:user-invalid` / `:user-valid` so errors only appear after interaction (`blur` or submit attempt), with `aria-describedby` and synchronized `aria-invalid`.
- **Accessibility & Touch Targets (`ui-ux-pro-max`):**
  - Minimum `44x44px` (`48px` on form controls) interactive targets.
  - Visible high-contrast `:focus-visible` outlines (`3px solid #10B981`).
  - SVG icons exclusively via `lucide-react` (`aria-hidden="true"` on decorative icons).
  - Respect `prefers-reduced-motion: reduce`.
