import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faFileInvoice, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { exportDocuments } from "@/content/markets";
import { exportBuyerInputs, exportDocumentation } from "@/content/pages/export";
import type { Locale } from "@/lib/locales";

type ExportDocumentationSectionProps = {
  locale: Locale;
};

export function ExportDocumentationSection({ locale }: ExportDocumentationSectionProps) {
  return (
    <section className="bg-background py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <SectionHeading title={exportDocumentation.title[locale]} intro={exportDocumentation.text[locale]} />

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-lg border border-line bg-surface p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faShieldHalved} className="size-5 text-accent" aria-hidden />
              <h2 className="text-xl font-semibold leading-tight text-brand-strong">{exportDocumentation.buyerTitle[locale]}</h2>
            </div>
            <ul className="mt-6 grid gap-4">
              {exportBuyerInputs.map((item) => (
                <li key={item.fr} className="flex gap-3 text-sm leading-6 text-muted">
                  <FontAwesomeIcon icon={faCheckCircle} className="mt-1 size-4 shrink-0 text-accent" aria-hidden />
                  {item[locale]}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-lg border border-line bg-brand p-6 text-white shadow-sm">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faFileInvoice} className="size-5 text-accent-soft" aria-hidden />
              <h2 className="text-xl font-semibold leading-tight">{exportDocumentation.documentsTitle[locale]}</h2>
            </div>
            <ul className="mt-6 grid gap-3">
              {exportDocuments.map((document) => (
                <li key={document.fr} className="border-b border-white/12 pb-3 text-sm font-semibold leading-6 text-white/78 last:border-b-0 last:pb-0">
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
