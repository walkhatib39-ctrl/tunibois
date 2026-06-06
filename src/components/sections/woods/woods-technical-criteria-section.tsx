import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faFlask } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { woodSpeciesDetails } from "@/content/pages/woods";
import type { Locale } from "@/lib/locales";

type WoodsTechnicalCriteriaSectionProps = {
  locale: Locale;
};

const title = {
  fr: "Critères techniques par essence",
  en: "Technical criteria by species",
  ar: "معايير تقنية حسب نوع الخشب",
};

const intro = {
  fr: "Pour une demande de prix exploitable, chaque essence doit être lue avec ses points de validation: lot, humidité, stabilité, dimensions, tolérances et destination. Cette grille accélère le dialogue avec les acheteurs industriels.",
  en: "For a usable quotation request, each species must be reviewed with its validation points: batch, moisture, stability, dimensions, tolerances and destination. This grid accelerates the dialogue with industrial buyers.",
  ar: "لتحضير طلب سعر قابل للدراسة، يجب قراءة كل نوع خشب مع نقاط التحقق الخاصة به: الدفعة والرطوبة والثبات والأبعاد والتفاوتات والوجهة. تسرع هذه الشبكة الحوار مع المشترين الصناعيين.",
};

const qualificationTitle = {
  fr: "À confirmer",
  en: "To confirm",
  ar: "يجب تأكيده",
};

export function WoodsTechnicalCriteriaSection({ locale }: WoodsTechnicalCriteriaSectionProps) {
  return (
    <section className="bg-background py-16 sm:py-20">
      <Container>
        <SectionHeading title={title[locale]} intro={intro[locale]} />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {woodSpeciesDetails.map((wood) => (
            <article key={wood.id} id={`criteria-${wood.id}`} className="scroll-mt-36 rounded-lg border border-line bg-surface p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-brand text-accent-soft">
                  <FontAwesomeIcon icon={faFlask} className="size-5" aria-hidden />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold leading-tight text-brand-strong">{wood.title[locale]}</h2>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">{wood.scientificName}</p>
                </div>
              </div>

              <dl className="mt-6 grid gap-4">
                {wood.technicalProfile[locale].map((row) => (
                  <div key={row.label} className="border-b border-line pb-4 last:border-b-0 last:pb-0">
                    <dt className="text-sm font-semibold text-brand-strong">{row.label}</dt>
                    <dd className="mt-1 text-sm leading-6 text-muted">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 rounded-md bg-background p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">{qualificationTitle[locale]}</h3>
                <ul className="mt-4 grid gap-2">
                  {wood.qualification[locale].map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                      <FontAwesomeIcon icon={faCheckCircle} className="mt-1 size-4 shrink-0 text-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
