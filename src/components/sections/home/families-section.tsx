import { FamilyCard } from "@/components/cards/family-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { productFamilies } from "@/content/families";
import { homeCopy } from "@/content/pages/home";
import type { Locale } from "@/lib/locales";

type FamiliesSectionProps = {
  locale: Locale;
};

export function FamiliesSection({ locale }: FamiliesSectionProps) {
  return (
    <section className="bg-surface py-20">
      <Container>
        <SectionHeading eyebrow="Industrial range" title={homeCopy.shared[locale].families} />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productFamilies.map((family) => (
            <FamilyCard key={family.id} family={family} locale={locale} />
          ))}
        </div>
      </Container>
    </section>
  );
}
