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
  "components-panels": faLayerGroup,
  "eco-wood": faTree,
  "outdoor-architecture": faBoxOpen,
  "pallets-packaging": faPallet,
  "wood-energy": faFire,
} satisfies Record<ProductFamilyId, IconDefinition>;

type IndustrialOfferSectionProps = {
  locale: Locale;
};

export function IndustrialOfferSection({ locale }: IndustrialOfferSectionProps) {
  const title = homeCopy.shared[locale].products;
  const intro =
    locale === "fr"
      ? "Palettes, emballages, composants, panneaux, produits eco wood, bois énergie et éléments sur plan peuvent être étudiés selon vos dimensions, finitions, volumes et conditionnements."
      : locale === "en"
        ? "Pallets, packaging, components, panels, eco wood products, wood energy and made-to-plan elements can be reviewed according to your dimensions, finishes, volumes and packing needs."
        : "يمكن دراسة المنصات والتغليف والمكونات والألواح ومنتجات eco wood والطاقة الخشبية والعناصر حسب الرسم وفق الأبعاد والتشطيب والكميات والتغليف.";

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
                <p className="mt-3 text-sm leading-6 text-brand">{family.proof[locale]}</p>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {family.examples[locale].map((example) => (
                    <div key={example} className="flex items-center gap-2 text-sm font-semibold text-brand">
                      <FontAwesomeIcon icon={faCheck} className="size-3 text-accent" aria-hidden />
                      {example}
                    </div>
                  ))}
                </div>
                <Link href={productFamilyHref(family.id, locale)} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-brand">
                  {locale === "fr" ? "Explorer la famille" : locale === "en" ? "Explore family" : "استعراض العائلة"}
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
