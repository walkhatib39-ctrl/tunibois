import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { woodSpeciesDetails, woodsApplicationGroups, woodsApplications } from "@/content/pages/woods";
import type { Locale } from "@/lib/locales";

type WoodsApplicationsSectionProps = {
  locale: Locale;
};

export function WoodsApplicationsSection({ locale }: WoodsApplicationsSectionProps) {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <SectionHeading title={woodsApplications.title[locale]} intro={woodsApplications.text[locale]} />

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {woodsApplicationGroups.map((group) => (
            <article key={group.title.fr} className="rounded-lg border border-line bg-background p-6 shadow-sm">
              <div className="flex size-11 items-center justify-center rounded-md bg-brand text-accent-soft">
                <FontAwesomeIcon icon={faLayerGroup} className="size-5" aria-hidden />
              </div>
              <h2 className="mt-5 text-xl font-semibold leading-tight text-brand-strong">{group.title[locale]}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{group.text[locale]}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.species.map((speciesId) => {
                  const wood = woodSpeciesDetails.find((item) => item.id === speciesId)!;

                  return (
                    <span key={speciesId} className="rounded-sm border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-brand">
                      {wood.title[locale]}
                    </span>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
