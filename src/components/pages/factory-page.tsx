import { Factory, Globe2, PackageCheck, Ruler, ShieldCheck, Truck } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/sections/shared/page-hero";
import { Container } from "@/components/ui/container";
import { assets } from "@/content/assets";
import { capabilities, type CapabilityId } from "@/content/capabilities";
import type { Locale } from "@/lib/locales";

const capabilityIcons = {
  custom: Ruler,
  international: Globe2,
  logistics: Truck,
  packing: PackageCheck,
  quality: ShieldCheck,
  sourcing: Factory,
} satisfies Record<CapabilityId, typeof Factory>;

type FactoryPageProps = {
  locale: Locale;
};

export function FactoryPage({ locale }: FactoryPageProps) {
  const hero = {
    title: {
      fr: "Une base industrielle pour transformer, fabriquer et exporter",
      en: "An industrial base to transform, manufacture and export",
      ar: "قاعدة صناعية للتحويل والتصنيع والتصدير",
    },
    text: {
      fr: "Tunibois structure son offre autour de la transformation de la matière, de la répétabilité produit et de la préparation export.",
      en: "Tunibois structures its offer around material transformation, product repeatability and export preparation.",
      ar: "تنظم Tunibois عرضها حول تحويل المادة وتكرار المنتج والتحضير للتصدير.",
    },
  };

  return (
    <PageShell locale={locale} routeKey="factory">
      <PageHero locale={locale} routeKey="factory" image={assets.factoryTechnology.src} title={hero.title} text={hero.text} />
      <section className="py-16">
        <Container className="grid gap-6 lg:grid-cols-3">
          {capabilities.map(({ id, label }) => {
            const Icon = capabilityIcons[id];

            return (
              <div key={id} className="rounded-lg border border-line bg-surface p-6">
                <Icon className="size-7 text-accent" aria-hidden />
                <h2 className="mt-4 text-xl font-semibold text-brand-strong">{label[locale]}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {locale === "fr"
                    ? "Processus à documenter et affiner selon les capacités exactes de production et les demandes clients."
                    : locale === "en"
                      ? "Process to document and refine according to exact production capabilities and customer requirements."
                      : "عملية يتم توثيقها وضبطها حسب القدرات الفعلية ومتطلبات العملاء."}
                </p>
              </div>
            );
          })}
        </Container>
      </section>
    </PageShell>
  );
}
