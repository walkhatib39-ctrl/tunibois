import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { exportRegions } from "@/content/markets";
import { exportMarkets, exportRegionTexts } from "@/content/pages/export";
import type { Locale } from "@/lib/locales";

type ExportMarketsSectionProps = {
  locale: Locale;
};

type RegionTextKey = keyof typeof exportRegionTexts;

export function ExportMarketsSection({ locale }: ExportMarketsSectionProps) {
  return (
    <section className="bg-background py-16 sm:py-20">
      <Container>
        <SectionHeading title={exportMarkets.title[locale]} intro={exportMarkets.text[locale]} />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {exportRegions.map((region) => {
            const regionText = exportRegionTexts[region.title.fr as RegionTextKey];

            return (
              <article key={region.title.fr} className="rounded-lg border border-line bg-surface p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-md bg-brand text-accent-soft">
                    <FontAwesomeIcon icon={faGlobe} className="size-5" aria-hidden />
                  </div>
                  <h2 className="text-2xl font-semibold leading-tight text-brand-strong">{region.title[locale]}</h2>
                </div>
                <p className="mt-5 text-sm leading-6 text-muted">{regionText[locale]}</p>
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{exportMarkets.regionNote[locale]}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {region.countries.map((country) => (
                      <span key={country} className="rounded-sm border border-line bg-background px-3 py-1.5 text-xs font-semibold text-brand">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
