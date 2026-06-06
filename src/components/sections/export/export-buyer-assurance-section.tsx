import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive, faFileInvoice, faGlobe, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { exportAssurances, exportBuyerAssurance } from "@/content/pages/export";
import type { Locale } from "@/lib/locales";

type ExportBuyerAssuranceSectionProps = {
  locale: Locale;
};

const icons = [faShieldHalved, faBoxArchive, faFileInvoice, faGlobe];

export function ExportBuyerAssuranceSection({ locale }: ExportBuyerAssuranceSectionProps) {
  return (
    <section className="bg-background py-16 sm:py-20">
      <Container>
        <SectionHeading title={exportBuyerAssurance.title[locale]} intro={exportBuyerAssurance.text[locale]} />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {exportAssurances.map((item, index) => (
            <article key={item.title.fr} className="rounded-lg border border-line bg-surface p-6 shadow-sm">
              <div className="flex size-11 items-center justify-center rounded-md bg-brand text-accent-soft">
                <FontAwesomeIcon icon={icons[index]} className="size-5" aria-hidden />
              </div>
              <h2 className="mt-5 text-xl font-semibold leading-tight text-brand-strong">{item.title[locale]}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{item.text[locale]}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
