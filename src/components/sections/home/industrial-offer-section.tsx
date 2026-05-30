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
      ? "Une seule lecture de l'offre: familles industrielles, applications B2B et exemples de produits. L'acheteur comprend rapidement si Tunibois peut étudier sa demande."
      : locale === "en"
        ? "One clear reading of the offer: industrial families, B2B applications and product examples. Buyers quickly understand whether Tunibois can review their request."
        : "قراءة واحدة وواضحة للعرض: عائلات صناعية وتطبيقات مهنية وأمثلة منتجات. يفهم المشتري بسرعة هل يمكن دراسة طلبه.";

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
                {locale === "fr" ? "Voir les possibilités" : locale === "en" ? "View possibilities" : "عرض الإمكانيات"}
                <FontAwesomeIcon icon={faArrowRight} className="size-3" aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
