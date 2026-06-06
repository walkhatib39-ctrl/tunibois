import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faFileInvoice, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { exportDocuments } from "@/content/markets";
import { factoryQualityExport, factoryQualityPoints } from "@/content/pages/factory";
import type { Locale } from "@/lib/locales";

type FactoryQualityExportSectionProps = {
  locale: Locale;
};

const controlTitle = {
  fr: "Points de contrôle",
  en: "Control points",
  ar: "نقاط المراقبة",
};

const documentsTitle = {
  fr: "Documents export possibles",
  en: "Possible export documents",
  ar: "وثائق تصدير ممكنة",
};

export function FactoryQualityExportSection({ locale }: FactoryQualityExportSectionProps) {
  return (
    <section className="bg-brand py-16 text-white sm:py-20">
      <Container className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <SectionHeading title={factoryQualityExport.title[locale]} intro={factoryQualityExport.text[locale]} className="text-white [&_h2]:text-white [&_p]:text-white/72" />
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-lg border border-white/14 bg-white/8 p-6">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faShieldHalved} className="size-5 text-accent-soft" aria-hidden />
              <h2 className="text-xl font-semibold">{controlTitle[locale]}</h2>
            </div>
            <ul className="mt-5 grid gap-3">
              {factoryQualityPoints.map((point) => (
                <li key={point.fr} className="flex gap-3 text-sm leading-6 text-white/74">
                  <FontAwesomeIcon icon={faCheckCircle} className="mt-1 size-4 shrink-0 text-accent-soft" aria-hidden />
                  {point[locale]}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-lg border border-white/14 bg-white/8 p-6">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faFileInvoice} className="size-5 text-accent-soft" aria-hidden />
              <h2 className="text-xl font-semibold">{documentsTitle[locale]}</h2>
            </div>
            <ul className="mt-5 grid gap-3">
              {exportDocuments.map((document) => (
                <li key={document.fr} className="border-b border-white/12 pb-3 text-sm font-semibold leading-6 text-white/76 last:border-b-0 last:pb-0">
                  {document[locale]}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
}
