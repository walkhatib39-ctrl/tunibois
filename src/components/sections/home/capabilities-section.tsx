import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen, faCheckCircle, faGlobe, faIndustry, faRulerCombined, faTruck } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { capabilities, type CapabilityId } from "@/content/capabilities";
import { capabilitiesIntro, homeCopy } from "@/content/pages/home";
import type { Locale } from "@/lib/locales";

const capabilityIcons = {
  custom: faRulerCombined,
  international: faGlobe,
  logistics: faTruck,
  packing: faBoxOpen,
  quality: faCheckCircle,
  sourcing: faIndustry,
} satisfies Record<CapabilityId, typeof faIndustry>;

type CapabilitiesSectionProps = {
  locale: Locale;
};

export function CapabilitiesSection({ locale }: CapabilitiesSectionProps) {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading eyebrow={locale === "fr" ? "Capacités" : locale === "en" ? "Capabilities" : "القدرات"} title={homeCopy.shared[locale].factory} intro={capabilitiesIntro[locale]} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ id, label }) => {
            return (
              <div key={id} className="flex items-center gap-4 rounded-lg border border-line bg-surface p-5">
                <FontAwesomeIcon icon={capabilityIcons[id]} className="size-5 text-accent" aria-hidden />
                <span className="font-semibold text-brand">{label[locale]}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
