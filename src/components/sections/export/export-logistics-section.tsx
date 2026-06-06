import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { assets } from "@/content/assets";
import { exportLogistics, exportLogisticsPoints } from "@/content/pages/export";
import type { Locale } from "@/lib/locales";

type ExportLogisticsSectionProps = {
  locale: Locale;
};

export function ExportLogisticsSection({ locale }: ExportLogisticsSectionProps) {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-line bg-surface-strong shadow-sm sm:min-h-[420px]">
          <Image
            src={assets.industrialCrates.src}
            alt={assets.industrialCrates.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand/88 via-brand/8 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="max-w-lg text-sm font-semibold leading-6 text-white/88">{exportLogistics.imageCaption[locale]}</p>
          </div>
        </div>

        <div>
          <SectionHeading title={exportLogistics.title[locale]} intro={exportLogistics.text[locale]} />
          <div className="mt-8 grid gap-3">
            {exportLogisticsPoints.map((point) => (
              <div key={point.fr} className="flex items-center gap-3 border-b border-line pb-3 text-sm font-semibold text-brand last:border-b-0">
                <FontAwesomeIcon icon={faCheckCircle} className="size-4 text-accent" aria-hidden />
                {point[locale]}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-line bg-background p-5">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon icon={faBoxArchive} className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
              <p className="text-sm font-semibold leading-6 text-brand-strong">{exportLogistics.note[locale]}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
