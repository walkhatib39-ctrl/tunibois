import Image from "next/image";
import Link from "next/link";
import { Factory, Globe2, PackageCheck, Ruler, ShieldCheck, Truck } from "lucide-react";
import { FamilyCard } from "@/components/cards/family-card";
import { ProductCard } from "@/components/cards/product-card";
import { LeadForm } from "@/components/forms/lead-form";
import { ProductSpecTable } from "@/components/product/product-spec-table";
import { CtaBand } from "@/components/site/cta-band";
import { PageShell } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { assets } from "@/content/assets";
import { productFamilies } from "@/content/families";
import { getProductByRouteKey, products, type Product } from "@/content/products";
import { woodSpecies } from "@/content/woods";
import type { Locale } from "@/lib/locales";
import { route, type RouteKey } from "@/lib/routes";

const copy = {
  home: {
    fr: {
      heroTitle: "Solutions industrielles de transformation du bois pour les marchés internationaux",
      heroText:
        "Fabrication de composants, panneaux, palettes, produits eco wood et solutions bois sur mesure depuis la Tunisie vers l'Europe, l'Afrique et le Moyen-Orient.",
      quote: "Demander un devis",
      catalogue: "Catalogue sur demande",
      proof: ["Fabrication B2B", "Export international", "Produits bois sur mesure"],
    },
    en: {
      heroTitle: "Industrial wood transformation solutions for international markets",
      heroText:
        "Manufacturing of components, panels, pallets, eco wood products and custom wood solutions from Tunisia to Europe, Africa and the Middle East.",
      quote: "Request a quote",
      catalogue: "Catalogue on request",
      proof: ["B2B manufacturing", "International export", "Custom wood products"],
    },
    ar: {
      heroTitle: "حلول صناعية لتحويل الخشب للأسواق الدولية",
      heroText: "تصنيع مكونات وألواح ومنصات ومنتجات خشبية صديقة للبيئة وحلول مخصصة من تونس نحو أوروبا وأفريقيا والشرق الأوسط.",
      quote: "طلب عرض سعر",
      catalogue: "الكتالوج عند الطلب",
      proof: ["تصنيع مهني", "تصدير دولي", "منتجات خشبية حسب الطلب"],
    },
  },
  shared: {
    fr: {
      products: "Produits prioritaires",
      families: "Familles de produits",
      factory: "Capacités industrielles",
      exportMarkets: "Marchés cibles",
      formTitle: "Parlez-nous de votre besoin",
      formText: "Produit, quantité, destination, cahier des charges: notre équipe vous répond avec une base de discussion claire.",
    },
    en: {
      products: "Priority products",
      families: "Product families",
      factory: "Industrial capabilities",
      exportMarkets: "Target markets",
      formTitle: "Tell us what you need",
      formText: "Product, quantity, destination and specification: our team replies with a clear basis for discussion.",
    },
    ar: {
      products: "المنتجات ذات الأولوية",
      families: "عائلات المنتجات",
      factory: "القدرات الصناعية",
      exportMarkets: "الأسواق المستهدفة",
      formTitle: "أخبرنا باحتياجك",
      formText: "المنتج والكمية والوجهة والمواصفات: يرد فريقنا بأساس واضح للنقاش.",
    },
  },
};

const markets = ["France", "Belgique", "Allemagne", "Italie", "Espagne", "Pays-Bas", "Suisse", "Royaume-Uni", "UAE", "Maroc", "Algérie", "Sénégal"];

const capabilities = [
  { icon: Factory, label: { fr: "Approvisionnement et sciage", en: "Sourcing and sawing", ar: "توريد ونشر" } },
  { icon: Ruler, label: { fr: "Fabrication sur mesure", en: "Custom manufacturing", ar: "تصنيع حسب الطلب" } },
  { icon: ShieldCheck, label: { fr: "Contrôle qualité", en: "Quality control", ar: "مراقبة الجودة" } },
  { icon: PackageCheck, label: { fr: "Conditionnement export", en: "Export packing", ar: "تغليف للتصدير" } },
  { icon: Truck, label: { fr: "Flux logistiques", en: "Logistics flows", ar: "تدفقات لوجستية" } },
  { icon: Globe2, label: { fr: "Accompagnement international", en: "International support", ar: "مرافقة دولية" } },
];

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy.home[locale];
  const shared = copy.shared[locale];

  return (
    <PageShell locale={locale} routeKey="home">
      <section className="relative overflow-hidden bg-brand text-white">
        <div className="absolute inset-0">
          <Image src={assets.heroIndustrialWood.src} alt={assets.heroIndustrialWood.alt} fill priority sizes="100vw" className="object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-strong via-brand-strong/90 to-brand/40" />
        </div>
        <Container className="relative grid min-h-[680px] items-center py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-soft">Tunibois Export</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] sm:text-6xl">{t.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">{t.heroText}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={route("contact", locale)}>{t.quote}</Button>
              <Button href={route("products", locale)} variant="outline" className="border-white/35 text-white hover:bg-white/10">
                {t.catalogue}
              </Button>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {t.proof.map((item) => (
                <div key={item} className="rounded-lg border border-white/16 bg-white/10 p-4 text-sm font-semibold backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="B2B catalogue" title={shared.products} intro={shared.formText} />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} locale={locale} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container>
          <SectionHeading eyebrow="Industrial range" title={shared.families} />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productFamilies.map((family) => (
              <FamilyCard key={family.id} family={family} locale={locale} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Factory" title={shared.factory} />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, label }) => (
              <div key={label.fr} className="flex items-center gap-4 rounded-lg border border-line bg-surface p-5">
                <Icon className="size-6 text-accent" aria-hidden />
                <span className="font-semibold text-brand">{label[locale]}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand py-20 text-white">
        <Container>
          <SectionHeading eyebrow="Export" title={shared.exportMarkets} className="text-white [&_h2]:text-white [&_p]:text-white/70" />
          <div className="mt-10 flex flex-wrap gap-3">
            {markets.map((market) => (
              <span key={market} className="rounded-md border border-white/16 bg-white/10 px-4 py-2 text-sm font-semibold">
                {market}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading eyebrow="RFQ" title={shared.formTitle} intro={shared.formText} />
          <LeadForm mode="quote" locale={locale} sourcePath={route("home", locale)} />
        </Container>
      </section>
    </PageShell>
  );
}

export function ProductsIndexPage({ locale }: { locale: Locale }) {
  return (
    <PageShell locale={locale} routeKey="products">
      <PageHero
        locale={locale}
        routeKey="products"
        title={{ fr: "Produits bois pour industriels, distributeurs et importateurs", en: "Wood products for manufacturers, distributors and importers", ar: "منتجات خشبية للصناعيين والموزعين والمستوردين" }}
        text={{ fr: "Un catalogue de départ structuré par familles, avec des variantes à affiner selon vos marchés et vos cahiers des charges.", en: "A starter catalogue structured by product families, with variants to refine according to markets and specifications.", ar: "كتالوج أولي منظم حسب العائلات مع متغيرات يمكن ضبطها حسب الأسواق والمواصفات." }}
      />
      <section className="py-16">
        <Container className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </Container>
      </section>
      <CtaBand title="RFQ" text={copy.shared[locale].formText} href={route("contact", locale)} action={copy.home[locale].quote} />
    </PageShell>
  );
}

export function WoodsIndexPage({ locale }: { locale: Locale }) {
  return (
    <PageShell locale={locale} routeKey="woods">
      <PageHero
        locale={locale}
        routeKey="woods"
        title={{ fr: "Essences de bois et applications industrielles", en: "Wood species and industrial applications", ar: "أنواع الخشب والتطبيقات الصناعية" }}
        text={{ fr: "Les essences sont présentées comme bases de discussion technique. Les disponibilités, sections et finitions seront validées selon le projet.", en: "Species are presented as a technical discussion basis. Availability, sections and finishes are confirmed by project.", ar: "تعرض الأنواع كأساس للنقاش التقني، وتؤكد التوفرات والمقاطع والتشطيبات حسب المشروع." }}
      />
      <section className="py-16">
        <Container className="grid gap-6 md:grid-cols-2">
          {woodSpecies.map((wood) => (
            <article key={wood.id} className="rounded-lg border border-line bg-surface p-6">
              <h2 className="text-2xl font-semibold text-brand-strong">{wood.title[locale]}</h2>
              <p className="mt-3 leading-7 text-muted">{wood.summary[locale]}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {wood.uses[locale].map((use) => (
                  <span key={use} className="rounded-md bg-surface-strong px-3 py-2 text-sm font-semibold text-brand">
                    {use}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </Container>
      </section>
    </PageShell>
  );
}

export function FactoryPage({ locale }: { locale: Locale }) {
  return (
    <PageShell locale={locale} routeKey="factory">
      <PageHero
        locale={locale}
        routeKey="factory"
        image={assets.factoryTechnology.src}
        title={{ fr: "Une base industrielle pour transformer, fabriquer et exporter", en: "An industrial base to transform, manufacture and export", ar: "قاعدة صناعية للتحويل والتصنيع والتصدير" }}
        text={{ fr: "Tunibois structure son offre autour de la transformation de la matière, de la répétabilité produit et de la préparation export.", en: "Tunibois structures its offer around material transformation, product repeatability and export preparation.", ar: "تنظم Tunibois عرضها حول تحويل المادة وتكرار المنتج والتحضير للتصدير." }}
      />
      <section className="py-16">
        <Container className="grid gap-6 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, label }) => (
            <div key={label.fr} className="rounded-lg border border-line bg-surface p-6">
              <Icon className="size-7 text-accent" aria-hidden />
              <h2 className="mt-4 text-xl font-semibold text-brand-strong">{label[locale]}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                {locale === "fr"
                  ? "Processus à documenter et affiner selon les capacités exactes de production et les demandes clients."
                  : locale === "en"
                    ? "Process to document and refine according to exact production capabilities and customer requirements."
                    : "عملية يتم توثيقها وضبطها حسب القدرات الفعلية ومتطلبات العملاء."}
              </p>
            </div>
          ))}
        </Container>
      </section>
    </PageShell>
  );
}

export function ExportPage({ locale }: { locale: Locale }) {
  return (
    <PageShell locale={locale} routeKey="export">
      <PageHero
        locale={locale}
        routeKey="export"
        title={{ fr: "Export bois depuis la Tunisie vers les marchés internationaux", en: "Wood export from Tunisia to international markets", ar: "تصدير الخشب من تونس إلى الأسواق الدولية" }}
        text={{ fr: "Conditionnement, documentation, préparation logistique et accompagnement commercial pour acheteurs B2B.", en: "Packing, documentation, logistics preparation and commercial support for B2B buyers.", ar: "تغليف ووثائق وتحضير لوجستي ومرافقة تجارية للمشترين المهنيين." }}
      />
      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ProductSpecTable
            rows={[
              { label: "Documents", value: "Certificat d'origine, facture export, packing list, documents phytosanitaires selon destination." },
              { label: "Incoterms", value: "A confirmer selon client, destination et mode de transport." },
              { label: "Transport", value: "Maritime, routier ou multimodal selon pays cible." },
              { label: "Marchés", value: markets.join(", ") },
            ]}
          />
          <div className="rounded-lg border border-line bg-surface p-6">
            <h2 className="text-2xl font-semibold text-brand-strong">RFQ export</h2>
            <p className="mt-3 leading-7 text-muted">{copy.shared[locale].formText}</p>
            <div className="mt-6">
              <Button href={route("contact", locale)}>{copy.home[locale].quote}</Button>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

export function ContactPage({ locale }: { locale: Locale }) {
  return (
    <PageShell locale={locale} routeKey="contact">
      <PageHero
        locale={locale}
        routeKey="contact"
        title={{ fr: "Demande de devis, échantillon ou contact export", en: "Quote, sample request or export contact", ar: "طلب عرض سعر أو عينة أو تواصل للتصدير" }}
        text={{ fr: "Envoyez votre besoin avec produit, quantité, pays de destination et contraintes techniques.", en: "Send your requirement with product, quantity, destination country and technical constraints.", ar: "أرسل احتياجك مع المنتج والكمية وبلد الوجهة والمتطلبات التقنية." }}
      />
      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg border border-line bg-surface p-6">
            <h2 className="text-2xl font-semibold text-brand-strong">Tunibois</h2>
            <p className="mt-3 text-muted">devis@tunibois.tn</p>
            <p className="mt-2 text-muted">97 706 721</p>
          </div>
          <LeadForm mode="quote" locale={locale} sourcePath={route("contact", locale)} />
        </Container>
      </section>
    </PageShell>
  );
}

export function GuidesIndexPage({ locale }: { locale: Locale }) {
  return (
    <PageShell locale={locale} routeKey="guides">
      <PageHero
        locale={locale}
        routeKey="guides"
        title={{ fr: "Guides techniques bois et export", en: "Wood and export technical guides", ar: "أدلة تقنية حول الخشب والتصدير" }}
        text={{ fr: "La base éditoriale SEO est prête. Les guides seront ajoutés par lots, avec priorité aux sujets commerciaux et techniques utiles aux acheteurs.", en: "The SEO editorial base is ready. Guides will be added in batches, prioritizing commercial and technical topics useful to buyers.", ar: "القاعدة التحريرية جاهزة، وستضاف الأدلة على دفعات مع أولوية للمواضيع التجارية والتقنية المفيدة للمشترين." }}
      />
      <section className="py-16">
        <Container>
          <div className="rounded-lg border border-dashed border-line bg-surface p-8 text-muted">
            {locale === "fr"
              ? "Premiers guides prévus: choisir une palette export, préparer un cahier des charges bois, comprendre les MOQ et le conditionnement export."
              : locale === "en"
                ? "Planned first guides: choosing an export pallet, preparing a wood specification, understanding MOQ and export packing."
                : "الأدلة الأولى المخطط لها: اختيار منصة تصدير، إعداد مواصفات خشبية، فهم الحد الأدنى والتغليف للتصدير."}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

export function ProductDetailPage({ locale, routeKey }: { locale: Locale; routeKey: RouteKey }) {
  const product = getProductByRouteKey(routeKey);

  if (!product) {
    return null;
  }

  return (
    <PageShell locale={locale} routeKey={routeKey}>
      <section className="bg-surface py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">{product.eyebrow[locale]}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-brand-strong sm:text-5xl">{product.headline[locale]}</h1>
            <p className="mt-5 text-lg leading-8 text-muted">{product.summary[locale]}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#rfq">{locale === "fr" ? "Demander un devis" : locale === "en" ? "Request a quote" : "طلب عرض سعر"}</Button>
              <Button href="#sample" variant="outline">
                {locale === "fr" ? "Demander un échantillon" : locale === "en" ? "Request a sample" : "طلب عينة"}
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-surface-strong">
            <Image src={product.image} alt={product.name[locale]} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </Container>
      </section>
      <ProductSections product={product} locale={locale} />
    </PageShell>
  );
}

function ProductSections({ product, locale }: { product: Product; locale: Locale }) {
  return (
    <>
      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-3">
          <InfoList title={locale === "fr" ? "Applications" : locale === "en" ? "Applications" : "الاستخدامات"} items={product.applications[locale]} />
          <InfoList title={locale === "fr" ? "Variantes" : locale === "en" ? "Variants" : "الأنواع"} items={product.variants[locale]} />
          <InfoList title={locale === "fr" ? "Points techniques" : locale === "en" ? "Technical points" : "نقاط تقنية"} items={product.technical[locale]} />
        </Container>
      </section>
      <section className="bg-surface py-16">
        <Container className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {product.gallery.map((image) => (
            <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-surface-strong">
              <Image src={image} alt={product.name[locale]} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
            </div>
          ))}
        </Container>
      </section>
      <section id="rfq" className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="RFQ" title={locale === "fr" ? "Spécifications et devis" : locale === "en" ? "Specifications and quote" : "المواصفات وعرض السعر"} intro={product.packaging[locale]} />
          </div>
          <LeadForm mode="quote" locale={locale} product={product.name[locale]} sourcePath={route(product.routeKey, locale)} />
        </Container>
      </section>
      <section id="sample" className="pb-16">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Sample" title={locale === "fr" ? "Demande d'échantillon" : locale === "en" ? "Sample request" : "طلب عينة"} intro={locale === "fr" ? "Indiquez le produit, le pays et l'usage prévu pour préparer une réponse adaptée." : locale === "en" ? "Share the product, country and intended use so we can prepare a relevant reply." : "اذكر المنتج والبلد والاستخدام المتوقع لنحضر ردا مناسبا."} />
          </div>
          <LeadForm mode="sample" locale={locale} product={product.name[locale]} sourcePath={route(product.routeKey, locale)} />
        </Container>
      </section>
    </>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-lg border border-line bg-surface p-6">
      <h2 className="text-xl font-semibold text-brand-strong">{title}</h2>
      <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function PageHero({
  locale,
  routeKey,
  title,
  text,
  image,
}: {
  locale: Locale;
  routeKey: RouteKey;
  title: Record<Locale, string>;
  text: Record<Locale, string>;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand py-20 text-white">
      {image ? (
        <Image src={image} alt={title[locale]} fill sizes="100vw" className="object-cover opacity-30" />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(240,193,140,0.22),transparent_36%)]" />
      )}
      <Container className="relative">
        <Link href={route(routeKey, locale)} className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-soft">
          Tunibois
        </Link>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">{title[locale]}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">{text[locale]}</p>
      </Container>
    </section>
  );
}
