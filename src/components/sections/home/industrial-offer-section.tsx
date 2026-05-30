import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBoxOpen, faCheck, faFire, faLayerGroup, faPallet, faTree } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeCopy } from "@/content/pages/home";
import { productFamilies, productFamilyHref, type ProductFamilyId } from "@/content/product-families";
import type { Locale } from "@/lib/locales";

const offerIcons = {
  "architectural-products": faBoxOpen,
  "decking-outdoor": faTree,
  "eco-wood": faTree,
  "furniture-components": faBoxOpen,
  "olive-wood": faTree,
  "pallets-packaging": faPallet,
  "stairs": faLayerGroup,
  "wood-panels": faLayerGroup,
  "wood-energy": faFire,
} satisfies Record<ProductFamilyId, IconDefinition>;

type IndustrialOfferSectionProps = {
  locale: Locale;
};

export function IndustrialOfferSection({ locale }: IndustrialOfferSectionProps) {
  const title = homeCopy.shared[locale].products;
  const intro =
    locale === "fr"
      ? "Les produits sont organisés par catégories industrielles: panneaux, composants, escaliers, architecture, extérieur, palettes, collection olivier, eco wood et wood energy."
      : locale === "en"
        ? "Products are organized by industrial categories: panels, components, stairs, architecture, outdoor, pallets, olive wood, eco wood and wood energy."
        : "تم تنظيم المنتجات حسب فئات صناعية: ألواح ومكونات وسلالم ومعمار وخارج ومنصات وخشب زيتون وeco wood وطاقة خشبية.";

  return (
    <section className="bg-surface py-20">
      <Container>
        <SectionHeading eyebrow={locale === "fr" ? "Offre industrielle" : locale === "en" ? "Industrial offer" : "عرض صناعي"} title={title} intro={intro} />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {productFamilies.map((family) => (
            <article key={family.id} className="group overflow-hidden rounded-lg border border-line bg-background shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <Link href={productFamilyHref(family.id, locale)} className="block">
                <div className="relative aspect-[16/8.5] overflow-hidden bg-surface-strong">
                  <Image
                    src={family.image}
                    alt={family.imageAlt[locale]}
                    fill
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-strong/72 via-brand-strong/8 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex size-11 items-center justify-center rounded-md bg-accent text-brand-strong shadow-sm">
                    <FontAwesomeIcon icon={offerIcons[family.id]} className="size-5" aria-hidden />
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <h2 className="text-2xl font-semibold leading-tight text-brand-strong">
                  <Link href={productFamilyHref(family.id, locale)} className="hover:text-accent">
                    {family.title[locale]}
                  </Link>
                </h2>
                <p className="mt-3 leading-7 text-muted">{family.text[locale]}</p>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {family.products[locale].slice(0, 4).map((product) => (
                    <div key={product} className="flex items-center gap-2 text-sm font-semibold text-brand">
                      <FontAwesomeIcon icon={faCheck} className="size-3 text-accent" aria-hidden />
                      {product}
                    </div>
                  ))}
                </div>
                <Link href={productFamilyHref(family.id, locale)} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-brand">
                  {locale === "fr" ? "Explorer la catégorie" : locale === "en" ? "Explore category" : "استعراض الفئة"}
                  <FontAwesomeIcon icon={faArrowRight} className="size-3 transition group-hover:translate-x-1" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
