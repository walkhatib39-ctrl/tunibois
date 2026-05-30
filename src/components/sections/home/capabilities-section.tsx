import { Factory, Globe2, PackageCheck, Ruler, ShieldCheck, Truck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { capabilities, type CapabilityId } from "@/content/capabilities";
import { homeCopy } from "@/content/pages/home";
import type { Locale } from "@/lib/locales";

const capabilityIcons = {
  custom: Ruler,
  international: Globe2,
  logistics: Truck,
  packing: PackageCheck,
  quality: ShieldCheck,
  sourcing: Factory,
} satisfies Record<CapabilityId, typeof Factory>;

type CapabilitiesSectionProps = {
  locale: Locale;
};

export function CapabilitiesSection({ locale }: CapabilitiesSectionProps) {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading eyebrow="Factory" title={homeCopy.shared[locale].factory} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ id, label }) => {
            const Icon = capabilityIcons[id];

            return (
              <div key={id} className="flex items-center gap-4 rounded-lg border border-line bg-surface p-5">
                <Icon className="size-6 text-accent" aria-hidden />
                <span className="font-semibold text-brand">{label[locale]}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
