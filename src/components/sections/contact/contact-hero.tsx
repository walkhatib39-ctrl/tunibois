import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { contactHero } from "@/content/pages/contact";
import { site } from "@/content/site";
import type { Locale } from "@/lib/locales";

type ContactHeroProps = {
  locale: Locale;
};

const directContactTitle = {
  fr: "Contact direct",
  en: "Direct contact",
  ar: "تواصل مباشر",
};

const responseNote = {
  fr: "Pour une réponse utile, indiquez le produit, les dimensions, les quantités et le pays de destination.",
  en: "For a useful reply, include the product, dimensions, quantities and destination country.",
  ar: "للحصول على رد مفيد، اذكر المنتج والأبعاد والكميات وبلد الوجهة.",
};

export function ContactHero({ locale }: ContactHeroProps) {
  return (
    <section className="overflow-hidden bg-brand text-white">
      <Container className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{contactHero.title[locale]}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">{contactHero.text[locale]}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#quote">{contactHero.primary[locale]}</Button>
          </div>
        </div>

        <div className="rounded-lg border border-white/16 bg-white/[0.06] p-6 shadow-sm">
          <h2 className="text-xl font-semibold">{directContactTitle[locale]}</h2>
          <div className="mt-5 grid gap-4 text-sm font-semibold text-white/84">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-accent-soft">
              <FontAwesomeIcon icon={faEnvelope} className="size-4 text-accent-soft" aria-hidden />
              {site.email}
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-accent-soft">
              <FontAwesomeIcon icon={faPhone} className="size-4 text-accent-soft" aria-hidden />
              {site.phone}
            </a>
            <p className="flex items-center gap-3">
              <FontAwesomeIcon icon={faLocationDot} className="size-4 text-accent-soft" aria-hidden />
              {site.address}
            </p>
          </div>
          <p className="mt-6 border-t border-white/14 pt-5 text-sm leading-6 text-white/68">{responseNote[locale]}</p>
        </div>
      </Container>
    </section>
  );
}
