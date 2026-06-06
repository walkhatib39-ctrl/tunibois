import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { woodSpeciesDetails, woodsComparison, woodsComparisonRows } from "@/content/pages/woods";
import type { Locale } from "@/lib/locales";

type WoodsComparisonSectionProps = {
  locale: Locale;
};

export function WoodsComparisonSection({ locale }: WoodsComparisonSectionProps) {
  return (
    <section id="comparaison-essences" className="scroll-mt-36 bg-brand py-16 text-white sm:py-20">
      <Container>
        <SectionHeading title={woodsComparison.title[locale]} intro={woodsComparison.text[locale]} className="text-white [&_h2]:text-white [&_p]:text-white/72" />

        <div className="mt-10 overflow-hidden rounded-lg border border-white/14">
          <div className="hidden grid-cols-[0.86fr_1fr_1fr_1fr] border-b border-white/14 bg-white/8 text-sm font-semibold text-accent-soft lg:grid">
            <div className="p-4">{woodsComparison.columns.species[locale]}</div>
            <div className="p-4">{woodsComparison.columns.bestFor[locale]}</div>
            <div className="p-4">{woodsComparison.columns.attention[locale]}</div>
            <div className="p-4">{woodsComparison.columns.industrialUse[locale]}</div>
          </div>
          <div className="grid">
            {woodsComparisonRows.map((row) => {
              const wood = woodSpeciesDetails.find((item) => item.id === row.speciesId)!;

              return (
                <article key={row.speciesId} className="grid border-b border-white/14 bg-brand last:border-b-0 lg:grid-cols-[0.86fr_1fr_1fr_1fr]">
                  <div className="border-b border-white/12 p-5 lg:border-b-0 lg:border-r lg:border-white/14">
                    <p className="text-xl font-semibold">{wood.title[locale]}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent-soft">{wood.scientificName}</p>
                  </div>
                  <ComparisonCell label={woodsComparison.columns.bestFor[locale]} value={row.bestFor[locale]} />
                  <ComparisonCell label={woodsComparison.columns.attention[locale]} value={row.attention[locale]} />
                  <ComparisonCell label={woodsComparison.columns.industrialUse[locale]} value={row.industrialUse[locale]} last />
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ComparisonCell({ label, last, value }: { label: string; last?: boolean; value: string }) {
  return (
    <div className={`border-b border-white/12 p-5 text-sm leading-7 text-white/74 lg:border-b-0 ${last ? "" : "lg:border-r lg:border-white/14"}`}>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent-soft lg:hidden">{label}</p>
      {value}
    </div>
  );
}
