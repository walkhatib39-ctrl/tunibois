import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { woodsQualification, woodsQualificationItems } from "@/content/pages/woods";
import type { Locale } from "@/lib/locales";

type WoodsQualificationSectionProps = {
  locale: Locale;
};

export function WoodsQualificationSection({ locale }: WoodsQualificationSectionProps) {
  return (
    <section className="bg-brand py-16 text-white sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <SectionHeading title={woodsQualification.title[locale]} intro={woodsQualification.text[locale]} className="text-white [&_h2]:text-white [&_p]:text-white/72" />
          <div className="mt-8 rounded-lg border border-white/14 bg-white/8 p-5">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon icon={faClipboardList} className="mt-1 size-5 shrink-0 text-accent-soft" aria-hidden />
              <p className="text-sm font-semibold leading-6 text-white/78">{woodsQualification.note[locale]}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-white/14 bg-white/14 md:grid-cols-2">
          {woodsQualificationItems.map((item, index) => (
            <article key={item.fr} className="bg-brand p-5">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon={faCheckCircle} className="mt-1 size-4 shrink-0 text-accent-soft" aria-hidden />
                <div>
                  <p className="text-xs font-semibold text-accent-soft">0{index + 1}</p>
                  <h2 className="mt-2 text-base font-semibold leading-6 text-white">{item[locale]}</h2>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
