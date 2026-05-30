import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buyerPositioning, buyerSegments } from "@/content/pages/home";
import type { Locale } from "@/lib/locales";

type BuyerSegmentsSectionProps = {
  locale: Locale;
};

export function BuyerSegmentsSection({ locale }: BuyerSegmentsSectionProps) {
  return (
    <section className="py-20">
      <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="Tunibois" title={buyerPositioning.title[locale]} intro={buyerPositioning.intro[locale]} />
          <p className="mt-6 leading-8 text-muted">{buyerPositioning.body[locale]}</p>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {buyerSegments.map((segment) => (
            <div key={segment.title.fr} className="grid gap-3 py-6 sm:grid-cols-[0.45fr_0.55fr]">
              <h2 className="text-xl font-semibold text-brand-strong">{segment.title[locale]}</h2>
              <p className="leading-7 text-muted">{segment.text[locale]}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
