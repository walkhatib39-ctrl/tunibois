# Tunibois V1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first production-grade Tunibois V1 Next.js site with preserved French WordPress URLs, rich starter catalogue, multilingual structure, sourced assets, and lead forms saved to MySQL plus emailed.

**Architecture:** Use a Next.js App Router application with French at the root and English/Arabic under subfolders. Keep V1 content in structured TypeScript files so product data can later move into a lightweight back office. Use MySQL/MariaDB for commercial lead capture and server actions/API routes for form handling.

**Tech Stack:** Next.js, TypeScript, Tailwind CSS, Prisma, MySQL/MariaDB, Nodemailer, Zod, React Hook Form, Lucide React.

---

## File Structure

Create and maintain these boundaries:

- `src/app/` routes, layouts, SEO files, API handlers.
- `src/content/` structured business content, products, translations, SEO copy, and asset inventory.
- `src/components/` reusable UI components only.
- `src/lib/` utilities for locales, routes, SEO, Prisma, email, validation.
- `src/styles/` shared styling tokens if Tailwind config is not enough.
- `prisma/` database schema and migrations.
- `public/assets/` copied, optimized, and generated visual assets.
- `docs/assets/` asset inventory and sourcing notes.
- `docs/superpowers/` specs and implementation plans.

## Task 1: Scaffold The Next.js Project

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `eslint.config.mjs`
- Create: `postcss.config.mjs`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`
- Create: `.gitignore`
- Preserve: `docs/superpowers/specs/2026-05-30-tunibois-v1-design.md`

- [ ] **Step 1: Run the scaffold command**

Run:

```powershell
npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

Expected:

```text
Success! Created tunibois.tn
```

If the command refuses because the directory is not empty, create the app in a temporary sibling folder and move only scaffolded project files into the current repo while preserving `docs/` and `Tunibois-logo.png`.

- [ ] **Step 2: Install production dependencies**

Run:

```powershell
npm install @prisma/client prisma zod nodemailer react-hook-form @hookform/resolvers lucide-react clsx tailwind-merge
npm install -D @types/nodemailer
```

Expected:

```text
added
found 0 vulnerabilities
```

- [ ] **Step 3: Run the scaffold validation**

Run:

```powershell
npm run lint
npm run build
```

Expected: both commands complete without errors.

- [ ] **Step 4: Commit the scaffold**

Run:

```powershell
git add package.json package-lock.json next.config.ts tsconfig.json eslint.config.mjs postcss.config.mjs src .gitignore
git commit -m "chore: scaffold Tunibois Next app"
```

Expected: a new local commit is created.

## Task 2: Add Project Configuration And Environment Contract

**Files:**
- Create: `.env.example`
- Create: `src/lib/config.ts`
- Modify: `.gitignore`

- [ ] **Step 1: Add environment example**

Create `.env.example` with:

```env
DATABASE_URL="mysql://root:@127.0.0.1:3306/tunibois"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
MAIL_HOST="localhost"
MAIL_PORT="1025"
MAIL_USER=""
MAIL_PASSWORD=""
MAIL_FROM="Tunibois <devis@tunibois.tn>"
LEADS_TO_EMAIL="devis@tunibois.tn"
```

- [ ] **Step 2: Add typed runtime config**

Create `src/lib/config.ts`:

```ts
import { z } from "zod";

const configSchema = z.object({
  DATABASE_URL: z.string().min(1),
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  MAIL_HOST: z.string().min(1).default("localhost"),
  MAIL_PORT: z.coerce.number().int().positive().default(1025),
  MAIL_USER: z.string().optional().default(""),
  MAIL_PASSWORD: z.string().optional().default(""),
  MAIL_FROM: z.string().min(1).default("Tunibois <devis@tunibois.tn>"),
  LEADS_TO_EMAIL: z.string().email().default("devis@tunibois.tn"),
});

export const appConfig = configSchema.parse({
  DATABASE_URL: process.env.DATABASE_URL,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  MAIL_HOST: process.env.MAIL_HOST,
  MAIL_PORT: process.env.MAIL_PORT,
  MAIL_USER: process.env.MAIL_USER,
  MAIL_PASSWORD: process.env.MAIL_PASSWORD,
  MAIL_FROM: process.env.MAIL_FROM,
  LEADS_TO_EMAIL: process.env.LEADS_TO_EMAIL,
});
```

- [ ] **Step 3: Ensure local secrets are ignored**

Confirm `.gitignore` includes:

```gitignore
.env
.env*.local
```

- [ ] **Step 4: Validate and commit**

Run:

```powershell
npm run lint
git add .env.example .gitignore src/lib/config.ts
git commit -m "chore: add Tunibois environment contract"
```

Expected: lint passes and commit is created.

## Task 3: Model Leads In MySQL With Prisma

**Files:**
- Create: `prisma/schema.prisma`
- Create: `src/lib/prisma.ts`
- Modify: `package.json`

- [ ] **Step 1: Add Prisma schema**

Create `prisma/schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

enum LeadStatus {
  new
  contacted
  qualified
  closed
}

model QuoteRequest {
  id             Int        @id @default(autoincrement())
  status         LeadStatus @default(new)
  name           String
  company        String?
  country        String
  phone          String?
  email          String
  product        String
  quantity       String?
  message        String?    @db.Text
  sourceLocale   String     @default("fr")
  sourcePath     String?
  createdAt      DateTime   @default(now())
  updatedAt      DateTime   @updatedAt
}

model SampleRequest {
  id             Int        @id @default(autoincrement())
  status         LeadStatus @default(new)
  name           String
  company        String?
  country        String
  phone          String?
  email          String
  product        String
  deliveryAddress String?   @db.Text
  message        String?    @db.Text
  sourceLocale   String     @default("fr")
  sourcePath     String?
  createdAt      DateTime   @default(now())
  updatedAt      DateTime   @updatedAt
}

model ContactMessage {
  id             Int        @id @default(autoincrement())
  status         LeadStatus @default(new)
  name           String
  company        String?
  country        String?
  phone          String?
  email          String
  subject        String?
  message        String     @db.Text
  sourceLocale   String     @default("fr")
  sourcePath     String?
  createdAt      DateTime   @default(now())
  updatedAt      DateTime   @updatedAt
}
```

- [ ] **Step 2: Add Prisma singleton**

Create `src/lib/prisma.ts`:

```ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
```

- [ ] **Step 3: Add Prisma scripts to package.json**

Add:

```json
{
  "scripts": {
    "db:generate": "prisma generate",
    "db:push": "prisma db push",
    "db:studio": "prisma studio"
  }
}
```

Keep existing Next.js scripts intact.

- [ ] **Step 4: Generate client and push local schema**

Run:

```powershell
Copy-Item .env.example .env -ErrorAction SilentlyContinue
npm run db:generate
npm run db:push
```

Expected: Prisma generates client. `db:push` succeeds if WAMP MySQL is running and the `tunibois` database exists.

- [ ] **Step 5: Commit database foundation**

Run:

```powershell
git add prisma src/lib/prisma.ts package.json package-lock.json
git commit -m "feat: add lead database schema"
```

Expected: commit is created.

## Task 4: Add Locale, Route, SEO, And Navigation Foundations

**Files:**
- Create: `src/lib/locales.ts`
- Create: `src/lib/routes.ts`
- Create: `src/lib/seo.ts`
- Create: `src/content/site.ts`
- Create: `src/content/navigation.ts`

- [ ] **Step 1: Add locales**

Create `src/lib/locales.ts`:

```ts
export const locales = ["fr", "en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export const localeLabels: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  ar: "العربية",
};

export const localeDirections: Record<Locale, "ltr" | "rtl"> = {
  fr: "ltr",
  en: "ltr",
  ar: "rtl",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
```

- [ ] **Step 2: Add routes**

Create `src/lib/routes.ts`:

```ts
import { defaultLocale, type Locale } from "@/lib/locales";

type RouteKey =
  | "home"
  | "factory"
  | "export"
  | "contact"
  | "products"
  | "woods"
  | "blog"
  | "pallets"
  | "pellets"
  | "stirrers"
  | "iceCreamSticks"
  | "woodenCutlery"
  | "toothpicks";

const paths: Record<RouteKey, Record<Locale, string>> = {
  home: { fr: "/", en: "/en/", ar: "/ar/" },
  factory: { fr: "/notre-usine/", en: "/en/about-us/", ar: "/ar/about-us/" },
  export: { fr: "/export/", en: "/en/export/", ar: "/ar/export/" },
  contact: { fr: "/contact/", en: "/en/contact/", ar: "/ar/contact/" },
  products: { fr: "/produits/", en: "/en/products/", ar: "/ar/products/" },
  woods: { fr: "/essences/", en: "/en/woods/", ar: "/ar/woods/" },
  blog: { fr: "/guides/", en: "/en/guides/", ar: "/ar/guides/" },
  pallets: { fr: "/palettes-en-bois/", en: "/en/products/wooden-pallets/", ar: "/ar/products/wooden-pallets/" },
  pellets: { fr: "/pellets-en-bois/", en: "/en/products/wood-pellets/", ar: "/ar/products/wood-pellets/" },
  stirrers: { fr: "/agitateur-de-cafe/", en: "/en/products/wooden-coffee-stirrers/", ar: "/ar/products/wooden-coffee-stirrers/" },
  iceCreamSticks: { fr: "/batonnets-pour-glaces/", en: "/en/products/ice-cream-sticks/", ar: "/ar/products/ice-cream-sticks/" },
  woodenCutlery: { fr: "/couverts-en-bois/", en: "/en/products/wooden-cutlery/", ar: "/ar/products/wooden-cutlery/" },
  toothpicks: { fr: "/cure-dent/", en: "/en/products/toothpicks/", ar: "/ar/products/toothpicks/" },
};

export function route(key: RouteKey, locale: Locale = defaultLocale) {
  return paths[key][locale];
}

export function alternates(key: RouteKey) {
  return {
    canonical: paths[key].fr,
    languages: {
      fr: paths[key].fr,
      en: paths[key].en,
      ar: paths[key].ar,
    },
  };
}
```

- [ ] **Step 3: Add site metadata**

Create `src/content/site.ts`:

```ts
export const site = {
  name: "Tunibois",
  domain: "tunibois.tn",
  email: "devis@tunibois.tn",
  phone: "97 706 721",
  tagline: "Industrial wood transformation and export partner from Tunisia",
};
```

- [ ] **Step 4: Add navigation**

Create `src/content/navigation.ts` with primary nav labels for `fr`, `en`, and `ar`, linked through `route()`.

- [ ] **Step 5: Commit routing foundation**

Run:

```powershell
npm run lint
git add src/lib/locales.ts src/lib/routes.ts src/lib/seo.ts src/content/site.ts src/content/navigation.ts
git commit -m "feat: add multilingual route foundation"
```

Expected: lint passes and commit is created.

## Task 5: Add Structured Product And Asset Content

**Files:**
- Create: `src/content/assets.ts`
- Create: `src/content/products.ts`
- Create: `src/content/families.ts`
- Create: `src/content/woods.ts`
- Create: `docs/assets/asset-inventory.md`
- Create/Copy: `public/assets/brand/tunibois-logo.png`
- Create/Copy: `public/assets/tunibois/*`

- [ ] **Step 1: Copy existing logo**

Copy `Tunibois-logo.png` to:

```text
public/assets/brand/tunibois-logo.png
```

- [ ] **Step 2: Download authorized Tunibois images**

Download the current Tunibois images for the verified pages into `public/assets/tunibois/`.

Initial source examples:

```text
https://www.tunibois.tn/wp-content/uploads/2024/04/0b358acb56449242cf62366ecc324d84_L.jpg
https://www.tunibois.tn/wp-content/uploads/2024/04/agitateur-bois-1000.jpg
https://www.tunibois.tn/wp-content/uploads/2024/04/cure-dent.jpg
https://www.tunibois.tn/wp-content/uploads/2024/04/couvert-en-bois.jpg
https://www.tunibois.tn/wp-content/uploads/2024/04/Pellets-de-Bois.jpg
https://www.tunibois.tn/wp-content/uploads/2024/10/vente-palettes-en-bois-Tunisie-Tunibois.png
https://www.tunibois.tn/wp-content/uploads/2024/04/usine-transformation-bois.jpg
https://www.tunibois.tn/wp-content/uploads/2024/04/technologie.jpg
```

- [ ] **Step 3: Add asset inventory**

Create `docs/assets/asset-inventory.md` with a table:

```markdown
# Tunibois Asset Inventory

| Local file | Source | Source URL | Usage | Notes |
| --- | --- | --- | --- | --- |
| `public/assets/brand/tunibois-logo.png` | Tunibois local file | local `Tunibois-logo.png` | Header, footer | Owner-provided file |
```

Add every downloaded or generated image to this table.

- [ ] **Step 4: Add product content**

Create `src/content/products.ts` exporting product records for:

- palettes en bois
- pellets en bois
- agitateurs de cafe
- batonnets pour glaces
- couverts en bois
- cure-dents

Each record must include `id`, `routeKey`, `family`, localized `name`, localized `headline`, localized `summary`, variants, applications, technical bullets, gallery assets, CTA labels, and SEO metadata.

- [ ] **Step 5: Commit product content**

Run:

```powershell
npm run lint
git add public/assets docs/assets src/content/assets.ts src/content/products.ts src/content/families.ts src/content/woods.ts
git commit -m "feat: add starter catalogue content and assets"
```

Expected: lint passes and commit is created.

## Task 6: Build The Design System Components

**Files:**
- Modify: `src/app/globals.css`
- Create: `src/components/ui/button.tsx`
- Create: `src/components/ui/container.tsx`
- Create: `src/components/ui/section-heading.tsx`
- Create: `src/components/site/header.tsx`
- Create: `src/components/site/footer.tsx`
- Create: `src/components/site/language-switcher.tsx`
- Create: `src/components/site/cta-band.tsx`
- Create: `src/components/cards/product-card.tsx`
- Create: `src/components/cards/family-card.tsx`
- Create: `src/components/product/product-spec-table.tsx`
- Create: `src/components/forms/lead-form.tsx`

- [ ] **Step 1: Add global theme tokens**

Set CSS variables in `src/app/globals.css` for:

```css
:root {
  --background: #f7f3ec;
  --foreground: #17241b;
  --muted: #6a6f68;
  --brand: #24391f;
  --brand-strong: #172718;
  --accent: #b8773f;
  --accent-soft: #f0c18c;
  --line: #ded6c8;
}
```

- [ ] **Step 2: Implement reusable primitives**

Create focused components for button variants, page containers, section headings, cards, site header/footer, and CTA bands. Buttons must support link and button use cases and include clear focus states.

- [ ] **Step 3: Implement lead form UI**

Create a reusable lead form component that supports `quote`, `sample`, and `contact` modes and posts to the relevant API endpoint.

- [ ] **Step 4: Run UI validation**

Run:

```powershell
npm run lint
npm run build
```

Expected: both pass.

- [ ] **Step 5: Commit design system**

Run:

```powershell
git add src/app/globals.css src/components
git commit -m "feat: add Tunibois design system components"
```

Expected: commit is created.

## Task 7: Implement Lead API Routes And Email Delivery

**Files:**
- Create: `src/lib/lead-validation.ts`
- Create: `src/lib/mail.ts`
- Create: `src/app/api/leads/quote/route.ts`
- Create: `src/app/api/leads/sample/route.ts`
- Create: `src/app/api/leads/contact/route.ts`

- [ ] **Step 1: Add Zod validation schemas**

Create schemas with strict string limits:

```ts
import { z } from "zod";

const text = z.string().trim();

export const quoteRequestSchema = z.object({
  name: text.min(2).max(120),
  company: text.max(160).optional().or(z.literal("")),
  country: text.min(2).max(120),
  phone: text.max(80).optional().or(z.literal("")),
  email: text.email().max(160),
  product: text.min(2).max(160),
  quantity: text.max(120).optional().or(z.literal("")),
  message: text.max(3000).optional().or(z.literal("")),
  sourceLocale: z.enum(["fr", "en", "ar"]).default("fr"),
  sourcePath: text.max(300).optional().or(z.literal("")),
});
```

Add equivalent schemas for sample and contact.

- [ ] **Step 2: Add mail helper**

Create a helper that uses Nodemailer with `appConfig` and sends a plain text + HTML email to `LEADS_TO_EMAIL`.

- [ ] **Step 3: Add API routes**

Each route must:

1. parse JSON body
2. validate with Zod
3. save to Prisma
4. send email notification
5. return `{ ok: true }`
6. return safe errors without leaking server details

- [ ] **Step 4: Validate and commit**

Run:

```powershell
npm run lint
npm run build
git add src/lib/lead-validation.ts src/lib/mail.ts src/app/api/leads
git commit -m "feat: capture and email Tunibois leads"
```

Expected: lint/build pass and commit is created.

## Task 8: Implement Public Pages

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`
- Create: `src/app/notre-usine/page.tsx`
- Create: `src/app/export/page.tsx`
- Create: `src/app/contact/page.tsx`
- Create: `src/app/produits/page.tsx`
- Create: `src/app/essences/page.tsx`
- Create: `src/app/guides/page.tsx`
- Create: product route pages for preserved WordPress URLs
- Create: English and Arabic route pages under `src/app/en/...` and `src/app/ar/...`

- [ ] **Step 1: Build the French homepage**

Include:

- industrial hero
- product family overview
- priority products
- factory capability strip
- export markets
- quality/trust proof section
- quote form
- strong internal links to current preserved product URLs

- [ ] **Step 2: Build institutional pages**

Build `Notre usine`, `Export`, and `Contact` with strong copy and conversion blocks.

- [ ] **Step 3: Build product/family pages**

Render products from structured content. Avoid duplicated page code by using shared page rendering helpers where practical.

- [ ] **Step 4: Build English and Arabic pages**

Use localized content from the same structured records. Set `dir="rtl"` for Arabic pages.

- [ ] **Step 5: Validate and commit**

Run:

```powershell
npm run lint
npm run build
git add src/app src/components src/content
git commit -m "feat: implement Tunibois public pages"
```

Expected: lint/build pass and commit is created.

## Task 9: Add SEO Outputs And Redirect Safety

**Files:**
- Create: `src/app/robots.ts`
- Create: `src/app/sitemap.ts`
- Modify: `next.config.ts`
- Create: `src/lib/jsonld.ts`

- [ ] **Step 1: Add sitemap**

Generate all French, English, and Arabic public routes from `src/lib/routes.ts` and product content.

- [ ] **Step 2: Add robots**

Allow crawling and point to `/sitemap.xml`.

- [ ] **Step 3: Add redirects**

In `next.config.ts`, preserve trailing slash behavior and add redirects only for old WordPress URLs that cannot remain real pages.

- [ ] **Step 4: Add structured data**

Add Organization, WebSite, BreadcrumbList, and Product/Offer-like structured data where safe. Do not claim unavailable prices, certifications, or stock.

- [ ] **Step 5: Validate and commit**

Run:

```powershell
npm run lint
npm run build
git add src/app/robots.ts src/app/sitemap.ts src/lib/jsonld.ts next.config.ts
git commit -m "feat: add Tunibois SEO outputs"
```

Expected: lint/build pass and commit is created.

## Task 10: Browser QA And Production Readiness Notes

**Files:**
- Create: `docs/qa/local-qa.md`
- Create: `docs/deployment/vps-plesk-nextjs.md`

- [ ] **Step 1: Run local app**

Run:

```powershell
npm run dev
```

Expected:

```text
Local: http://localhost:3000
```

- [ ] **Step 2: Browser-check key pages**

Check desktop and mobile:

- `/`
- `/notre-usine/`
- `/palettes-en-bois/`
- `/pellets-en-bois/`
- `/contact/`
- `/en/`
- `/ar/`

Look for broken images, overlapping text, weak responsive layout, console errors, and form behavior.

- [ ] **Step 3: Document deployment runbook**

Write the Plesk/OVH notes:

- create or map `tunibois.tn` vhost
- keep old WordPress live until final cutover
- configure Node runtime through Plesk or service process
- configure MySQL/MariaDB database
- set production `.env`
- test before DNS switch using temporary access or hosts-file override
- switch Ooredoo DNS only after validation

- [ ] **Step 4: Commit QA docs**

Run:

```powershell
git add docs/qa docs/deployment
git commit -m "docs: add QA and deployment notes"
```

Expected: commit is created.

## Self-Review

Spec coverage:

- Positioning and premium B2B export direction: covered by Tasks 5, 6, 8.
- French root and English/Arabic subfolders: covered by Tasks 4, 8, 9.
- Preserved WordPress URLs: covered by Tasks 4, 8, 9.
- Rich non-empty catalogue: covered by Task 5 and Task 8.
- Sourced images and owner-authorized image reuse: covered by Task 5.
- Forms saved to MySQL and emailed: covered by Tasks 3 and 7.
- SEO outputs: covered by Task 9.
- Local development and VPS/Plesk path: covered by Task 10.
- V2 back-office readiness: covered by content structure and database separation in Tasks 3, 4, 5.

Placeholder scan:

- The plan avoids unfinished marker words and makes each task concrete.
- Product copy will be authored during Task 5 inside structured content files.

Type consistency:

- Locale type is `Locale`.
- Route keys are centralized in `src/lib/routes.ts`.
- Lead table names match the Prisma models and API route names.
