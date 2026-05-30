import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { exportDocuments, exportRegions } from "@/content/markets";
import { exportReadinessIntro, homeCopy } from "@/content/pages/home";
import type { Locale } from "@/lib/locales";

type ExportReadinessSectionProps = {
  locale: Locale;
};

export function ExportReadinessSection({ locale }: ExportReadinessSectionProps) {
  return (
    <section className="bg-brand py-20 text-white">
      <Container className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
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
                <ShieldCheck className="size-4 text-accent-soft" aria-hidden />
                {document[locale]}
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {exportRegions.map((region) => (
            <article key={region.title.fr} className="rounded-lg border border-white/14 bg-white/8 p-6">
              <h3 className="text-xl font-semibold">{region.title[locale]}</h3>
              <div className="mt-5 grid gap-2 text-sm text-white/72">
                {region.countries.map((country) => (
                  <span key={country}>{country}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
