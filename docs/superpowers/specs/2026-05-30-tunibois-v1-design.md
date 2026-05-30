# Tunibois V1 Design Spec

Date: 2026-05-30
Status: approved for implementation planning

## 1. Objective

Tunibois V1 will replace the current WordPress site with a premium B2B export website for industrial wood transformation.

The site must position Tunibois as:

- an industrial wood transformer
- a manufacturer of wood components
- an international exporter
- a B2B supplier for European, African, and Middle Eastern markets
- a credible partner for importers, distributors, and industrial buyers

The V1 must not feel empty. It must launch with real pages, product variants, credible copy, strong visuals, and working lead capture.

## 2. Positioning

Primary positioning:

> Industrial wood transformation and export partner from Tunisia.

French homepage direction:

> Solutions industrielles de transformation du bois pour les marches internationaux.

Supporting message:

> Fabrication de composants, panneaux, palettes, produits eco wood et solutions bois sur mesure depuis la Tunisie vers l'Europe, l'Afrique et le Moyen-Orient.

The design and copy must avoid a local craft/woodshop impression. The first screen must immediately communicate factory capability, export readiness, B2B credibility, and product seriousness.

## 3. Language And URL Strategy

French remains the primary language at the domain root to preserve current SEO.

Examples:

- `/`
- `/notre-usine/`
- `/contact/`
- `/palettes-en-bois/`
- `/pellets-en-bois/`
- `/agitateur-de-cafe/`

English and Arabic use language subfolders:

- `/en/`
- `/en/about-us/`
- `/en/products/wooden-pallets/`
- `/ar/`
- `/ar/about-us/`
- `/ar/products/wooden-pallets/`

The implementation must include hreflang, canonical URLs, sitemap generation, robots.txt, and controlled redirects where an old WordPress URL cannot remain as a real page.

## 4. Current WordPress URLs To Preserve

The following URLs were verified from the current WordPress sitemap and homepage links and must remain live as French pages when possible:

- `/`
- `/notre-usine/`
- `/contact/`
- `/cure-dent/`
- `/palettes-en-bois/`
- `/couverts-en-bois/`
- `/pellets-en-bois/`
- `/agitateur-de-cafe/`
- `/batonnets-pour-glaces/`

These are not temporary stubs. They should become polished V1 pages with improved copy, visuals, SEO metadata, and conversion blocks.

## 5. Page Architecture

### Institutional Pages

- Accueil
- Notre usine
- Export
- Contact

Quality, certifications, traceability, sustainability, waste reuse, pellets, and briquettes are not separate institutional pages in V1. They are integrated inside the homepage, Notre usine, Export, product pages, and future editorial content.

### Commercial Pages

- Produits
- Essences
- Blog / Guides index

### Product Families

- Panneaux bois
- Composants mobilier
- Escaliers
- Produits architecturaux
- Terrasses et exterieur
- Palettes et emballages
- Collection olivier
- Eco wood products
- Wood energy

### Wood Species

- Bois d'olivier
- Bois de hetre
- Eucalyptus blanc
- Pin d'Alep

## 6. Product Content Requirements

Every priority product page should contain:

- product positioning
- applications
- available variants
- compatible wood species where relevant
- dimensions or dimension ranges where safe to state
- thickness or format where relevant
- humidity targets if applicable and safe
- tolerances when available or framed as "on request"
- MOQ guidance where available or framed as "according to product and specification"
- production lead time guidance
- export packaging
- gallery
- technical sheet/download block
- quote request form
- sample request CTA where relevant

Claims must be commercially strong but factually safe. Do not invent certifications, machine capacities, exact tolerances, or compliance guarantees unless validated by the owner.

## 7. Initial Rich Catalogue

V1 must ship with a rich starter catalogue, not empty category shells.

Priority products using existing URLs:

- Palettes en bois
- Pellets en bois
- Agitateurs de cafe en bois
- Batonnets pour glaces
- Couverts en bois
- Cure-dents

Examples of variants to include where appropriate:

- Euro / EPAL-style pallets
- CP pallets
- export pallets
- heavy industrial pallets
- lost pallets
- custom pallets
- industrial crates
- palox
- coffee stirrers
- ice cream sticks
- toothpicks
- wooden cutlery
- pellets
- briquettes
- olive wood boards and premium items
- decking boards and outdoor wood elements
- panels, furniture components, stairs, and architectural elements as catalogue families

The starter catalogue may include draft specifications and variants for owner correction before launch.

## 8. Visual Asset Strategy

Allowed image sources:

- current Tunibois WordPress website
- Hardydeck, owned by the user
- Piskorski Bois Energie, owned by the user
- generated visuals where needed
- royalty-free or otherwise licensable images where needed

External competitor images must not be copied. Research may be used to understand variants, terminology, standards, and product presentation, but not to steal assets.

Each imported or generated asset must be tracked in an asset inventory with source information:

- Tunibois current site
- Hardydeck
- Piskorski
- generated
- licensed/free source

Images must not misrepresent Tunibois capabilities. Factory, machinery, certification, and export imagery should be used carefully when the factual implication is sensitive.

## 9. UX And Design Direction

Design direction: industrial export premium.

The UI must be:

- modern
- responsive
- fast
- premium but practical
- credible for European B2B buyers
- optimized for scanning, comparison, and RFQ actions

Visual palette:

- deep Tunibois green as the trust color
- wood/copper/brown accents
- warm off-white and neutral gray surfaces
- limited decorative effects

Avoid:

- generic WordPress look
- local craft workshop tone
- overdecorated sections
- weak product cards
- long unstructured copy
- low quality or misleading photos
- empty category pages

## 10. Conversion

Primary conversion actions:

- Demander un devis
- Demander un echantillon
- Télécharger le catalogue or fiche technique
- Contact export

Forms must save submissions to MySQL/MariaDB and send email notifications to `devis@tunibois.tn`.

Initial lead tables:

- `quote_requests`
- `sample_requests`
- `contact_messages`

Optional later table:

- `catalog_downloads`

Lead statuses may include:

- `new`
- `contacted`
- `qualified`
- `closed`

## 11. Technical Architecture

V1 stack:

- Next.js
- TypeScript
- Tailwind CSS
- MySQL/MariaDB
- Prisma or Drizzle for database access
- server-side form handlers
- structured content files for pages/products/translations
- email sending via SMTP or a transactional provider depending on production configuration

The local database is named `tunibois` and is available through WAMP/MySQL.

Content for V1 should be managed in code/files, not a back office. The structure must still prepare for V2 migration to a lightweight back office.

## 12. Deployment Architecture

Current production context:

- domain currently on Ooredoo Tunisie DNS
- current site live on OVH shared hosting
- target production server is an OVH VPS managed with Plesk
- Plesk server already hosts other projects
- ChronoServe is deployed under `/var/www/vhosts/chronoserve.fr/httpdocs/public`
- Tunibois must have its own clean vhost/subscription path, ideally `/var/www/vhosts/tunibois.tn/...`

Deployment flow:

1. Build locally in `C:\Users\WALID DEV\apps walid\tunibois.tn`.
2. Keep the WordPress site online during development.
3. Create GitHub repository when V1 has shape.
4. Push code to GitHub.
5. Prepare the Plesk vhost for `tunibois.tn`.
6. Deploy to VPS.
7. Test with temporary access or hosts-file override before DNS switch.
8. Switch DNS at Ooredoo only after production verification.

## 13. SEO Requirements

V1 must include:

- preserved French URLs where possible
- clean English and Arabic URL structures
- page-level meta titles and descriptions
- canonical URLs
- hreflang
- sitemap.xml
- robots.txt
- structured data where relevant
- image alt text
- responsive performance
- internal linking
- product/category breadcrumbs
- redirects for any old WordPress URLs not preserved

SEO content should prioritize quality over volume. The blog/guides structure must be ready for 100+ articles later, but the launch should focus on a smaller set of high-value pages and guides rather than thin mass content.

## 14. V2 Back Office

V2 will introduce a lightweight back office for:

- products
- product families
- catalogues/PDFs
- articles/guides
- lead management
- translations
- media

The V1 content model should be structured so product data can later be moved from code files into database tables without a full rewrite.

## 15. Implementation Quality Bar

The owner is highly perfectionist. The implementation standard is:

- no empty commercial surfaces
- no generic copy
- no careless UI sections
- no unverified production claims
- strong responsive behavior
- strong page speed
- polished typography and spacing
- consistent design system
- high-quality images and image cropping
- clear SEO and conversion purpose on every page

The project should be treated as a product and marketing asset, not only as a website.
