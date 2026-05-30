# Tunibois Architecture Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor the Tunibois V1 frontend into a modular, maintainable architecture without changing the public routes or breaking the current rendered site.

**Architecture:** Keep Next.js route files thin, move page composition into focused page modules, move reusable visual sections into `components/sections`, and move multilingual page content into `content/pages`. Shared layout is split into topbar, navigation, language switcher, header and footer components.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS v4, Prisma, MySQL/MariaDB.

---

### Task 1: Stabilize The Current Working Tree

**Files:**
- Modify: current uncommitted Sprint 2-A files only if needed for cleanup.
- Delete: `.playwright-cli/` generated QA artifacts only.
- Preserve: `Tunibois-logo.png` root original file.

- [ ] **Step 1: Inspect current changes**

Run:

```powershell
git status --short --branch
git diff --stat
```

Expected: only Sprint 2-A edits, generated `.playwright-cli/`, root `Tunibois-logo.png`, and flag assets are present.

- [ ] **Step 2: Remove generated Playwright artifacts**

Run:

```powershell
$target = Resolve-Path ".playwright-cli" -ErrorAction SilentlyContinue
if ($target -and $target.Path.StartsWith((Resolve-Path ".").Path)) {
  Remove-Item -LiteralPath $target.Path -Recurse -Force
}
```

Expected: `.playwright-cli/` no longer appears in `git status`.

### Task 2: Split Shared Layout

**Files:**
- Create: `src/components/layout/top-bar.tsx`
- Create: `src/components/layout/main-nav.tsx`
- Create: `src/components/layout/mobile-nav.tsx`
- Create: `src/components/layout/header.tsx`
- Move/replace: `src/components/site/header.tsx`
- Move/replace: `src/components/site/language-switcher.tsx`
- Modify: `src/components/site/page-shell.tsx`

- [ ] **Step 1: Create focused layout components**

Create components with these responsibilities:

```txt
top-bar.tsx: email, phone, language switcher.
main-nav.tsx: desktop primary navigation links.
mobile-nav.tsx: horizontal mobile navigation and localized quote CTA.
header.tsx: logo, topbar, desktop nav, mobile nav composition.
language-switcher.tsx: flag icons and locale route links.
```

- [ ] **Step 2: Keep compatibility imports**

Keep `src/components/site/header.tsx` as a small re-export:

```ts
export { Header } from "@/components/layout/header";
```

Expected: existing imports keep working while the architecture moves to `components/layout`.

### Task 3: Extract Home Page Content

**Files:**
- Create: `src/content/pages/home.ts`
- Modify: `src/components/pages/site-pages.tsx`

- [ ] **Step 1: Move home copy arrays and objects**

Move these structures from `site-pages.tsx` to `src/content/pages/home.ts`:

```txt
home hero copy
shared home labels
trust rail items
industrial process steps
buyer segments
export documents
FAQ items
```

Expected: `site-pages.tsx` imports home content instead of defining large copy objects inline.

### Task 4: Extract Home Sections

**Files:**
- Create: `src/components/sections/home/home-hero.tsx`
- Create: `src/components/sections/home/trust-rail.tsx`
- Create: `src/components/sections/home/buyer-segments-section.tsx`
- Create: `src/components/sections/home/product-highlights-section.tsx`
- Create: `src/components/sections/home/industrial-process-section.tsx`
- Create: `src/components/sections/home/families-section.tsx`
- Create: `src/components/sections/home/capabilities-section.tsx`
- Create: `src/components/sections/home/export-readiness-section.tsx`
- Create: `src/components/sections/home/home-faq-section.tsx`
- Create: `src/components/sections/home/home-quote-section.tsx`
- Create: `src/components/pages/home-page.tsx`
- Modify: `src/components/pages/site-pages.tsx`

- [ ] **Step 1: Move each home section into its own component**

Each component receives only the props it needs:

```ts
type HomeSectionProps = {
  locale: Locale;
};
```

Expected: `HomePage` becomes a readable composition of section components.

- [ ] **Step 2: Replace old exported HomePage**

Keep `site-pages.tsx` compatibility by re-exporting:

```ts
export { HomePage } from "@/components/pages/home-page";
```

Expected: route resolver imports still work during the refactor.

### Task 5: Extract Product Page Sections

**Files:**
- Create: `src/content/product-specs.ts`
- Create: `src/components/sections/product/product-hero.tsx`
- Create: `src/components/sections/product/product-info-lists.tsx`
- Create: `src/components/sections/product/product-specs-section.tsx`
- Create: `src/components/sections/product/product-gallery-section.tsx`
- Create: `src/components/sections/product/product-lead-forms-section.tsx`
- Create: `src/components/pages/product-detail-page.tsx`
- Modify: `src/components/pages/site-pages.tsx`

- [ ] **Step 1: Move product specification row logic**

Move `technicalFallback`, `technicalLabels`, and `productSpecRows` into `src/content/product-specs.ts`.

Expected: product pages import `productSpecRows(product, locale)`.

- [ ] **Step 2: Move product sections**

Move hero, applications/variants/technical lists, spec table, gallery, quote form and sample form into product section components.

Expected: `ProductDetailPage` becomes a composition of product section components.

### Task 6: Extract Remaining Institutional Pages

**Files:**
- Create: `src/components/pages/products-index-page.tsx`
- Create: `src/components/pages/woods-index-page.tsx`
- Create: `src/components/pages/factory-page.tsx`
- Create: `src/components/pages/export-page.tsx`
- Create: `src/components/pages/contact-page.tsx`
- Create: `src/components/pages/guides-index-page.tsx`
- Modify: `src/components/pages/site-pages.tsx`

- [ ] **Step 1: Move each exported page out of `site-pages.tsx`**

Expected: `site-pages.tsx` contains only exports:

```ts
export { HomePage } from "@/components/pages/home-page";
export { ProductsIndexPage } from "@/components/pages/products-index-page";
export { WoodsIndexPage } from "@/components/pages/woods-index-page";
export { FactoryPage } from "@/components/pages/factory-page";
export { ExportPage } from "@/components/pages/export-page";
export { ContactPage } from "@/components/pages/contact-page";
export { GuidesIndexPage } from "@/components/pages/guides-index-page";
export { ProductDetailPage } from "@/components/pages/product-detail-page";
```

Expected: no public import path breaks while the file stops carrying implementation.

### Task 7: Validation And Commit

**Files:**
- All refactor files.

- [ ] **Step 1: Run static validation**

Run:

```powershell
npm run lint
npm run build
npm run db:generate
```

Expected: all commands exit 0.

- [ ] **Step 2: Run smoke HTTP checks**

Run:

```powershell
$urls = @(
  'http://127.0.0.1:3000/',
  'http://127.0.0.1:3000/contact/',
  'http://127.0.0.1:3000/palettes-en-bois/',
  'http://127.0.0.1:3000/en/contact/',
  'http://127.0.0.1:3000/ar/contact/',
  'http://127.0.0.1:3000/sitemap.xml'
)
foreach ($url in $urls) {
  $r = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 20
  [PSCustomObject]@{ Url = $url; StatusCode = $r.StatusCode }
}
```

Expected: every URL returns `200`.

- [ ] **Step 3: Commit the refactor**

Run:

```powershell
git add src public docs
git commit -m "refactor: modularize Tunibois frontend architecture"
```

Expected: refactor is committed, while the root original `Tunibois-logo.png` remains untracked unless explicitly requested.

