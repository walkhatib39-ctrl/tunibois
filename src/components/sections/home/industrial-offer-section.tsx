import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBoxOpen, faCheck, faFire, faLayerGroup, faPallet, faTree } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeCopy, homeOfferGroups, type HomeOfferGroupId } from "@/content/pages/home";
import type { Locale } from "@/lib/locales";
import { route } from "@/lib/routes";

const offerIcons = {
  "components-panels": faLayerGroup,
  "eco-wood": faTree,
  "outdoor-architecture": faBoxOpen,
  "pallets-packaging": faPallet,
  "wood-energy": faFire,
} satisfies Record<HomeOfferGroupId, IconDefinition>;

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
          {homeOfferGroups.map((group) => (
            <article key={group.id} className="rounded-lg border border-line bg-background p-6">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-brand text-accent-soft">
                  <FontAwesomeIcon icon={offerIcons[group.id]} className="size-5" aria-hidden />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold leading-tight text-brand-strong">{group.title[locale]}</h2>
                  <p className="mt-3 leading-7 text-muted">{group.text[locale]}</p>
                </div>
              </div>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {group.examples[locale].map((example) => (
                  <div key={example} className="flex items-center gap-2 text-sm font-semibold text-brand">
                    <FontAwesomeIcon icon={faCheck} className="size-3 text-accent" aria-hidden />
                    {example}
                  </div>
                ))}
              </div>
              <Link href={route(group.routeKey, locale)} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-brand">
                {locale === "fr" ? "Voir les produits" : locale === "en" ? "View products" : "عرض المنتجات"}
                <FontAwesomeIcon icon={faArrowRight} className="size-3" aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
