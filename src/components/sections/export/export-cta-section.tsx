import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { exportCta } from "@/content/pages/export";
import type { Locale } from "@/lib/locales";
import { route } from "@/lib/routes";

type ExportCtaSectionProps = {
  locale: Locale;
};

export function ExportCtaSection({ locale }: ExportCtaSectionProps) {
  return (
    <section className="bg-brand py-16 text-white sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-[0.82fr_0.18fr] lg:items-center">
        <div>
          <h2 className="max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl">{exportCta.title[locale]}</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/74 sm:text-lg">{exportCta.text[locale]}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`${route("contact", locale)}#quote`}>
              {exportCta.primary[locale]}
              <FontAwesomeIcon icon={faArrowRight} className="size-3" aria-hidden />
            </Button>
            <Button href={route("products", locale)} variant="outline" className="border-white/35 text-white hover:bg-white/10">
              {exportCta.secondary[locale]}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
