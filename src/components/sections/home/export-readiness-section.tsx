import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive, faFileInvoice, faGlobe, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { exportDocuments } from "@/content/markets";
import { exportPillars, exportReadinessIntro, homeCopy } from "@/content/pages/home";
import type { Locale } from "@/lib/locales";

type ExportReadinessSectionProps = {
  locale: Locale;
};

export function ExportReadinessSection({ locale }: ExportReadinessSectionProps) {
  const pillarIcons = [faFileInvoice, faBoxArchive, faGlobe];

  return (
    <section className="bg-brand py-20 text-white">
      <Container className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Export"
            title={homeCopy.shared[locale].exportMarkets}
            intro={exportReadinessIntro[locale]}
            className="text-white [&_h2]:text-white [&_p]:text-white/72"
          />
          <div className="mt-8 grid gap-3">
            {exportDocuments.map((document) => (
              <div key={document.fr} className="flex items-center gap-3 border-b border-white/12 pb-3 text-sm font-semibold text-white/82">
                <FontAwesomeIcon icon={faShieldHalved} className="size-4 text-accent-soft" aria-hidden />
                {document[locale]}
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          {exportPillars.map((pillar, index) => (
            <article key={pillar.title.fr} className="rounded-lg border border-white/14 bg-white/8 p-6">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-white/10 text-accent-soft">
                  <FontAwesomeIcon icon={pillarIcons[index]} className="size-5" aria-hidden />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{pillar.title[locale]}</h3>
                  <p className="mt-3 leading-7 text-white/72">{pillar.text[locale]}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
