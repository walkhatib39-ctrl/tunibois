import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { ProductCard } from "@/components/cards/product-card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { ProductFamily } from "@/content/product-families";
import type { Product } from "@/content/products";
import type { Locale } from "@/lib/locales";
import { route } from "@/lib/routes";

type ProductFamilySectionProps = {
  family: ProductFamily;
  index: number;
  locale: Locale;
  products: Product[];
};

export function ProductFamilySection({ family, index, locale, products }: ProductFamilySectionProps) {
  const isAlt = index % 2 === 1;

  return (
    <section id={family.id} className={`scroll-mt-28 py-16 sm:py-20 ${isAlt ? "bg-surface" : "bg-background"}`}>
      <Container>
        <div className="mb-10 max-w-4xl">
          <div className="flex items-center gap-3 text-sm font-semibold text-accent">
            <span>0{index + 1}</span>
            <span className="h-px w-10 bg-accent/50" aria-hidden />
            <span>{locale === "fr" ? "Famille produit" : locale === "en" ? "Product family" : "عائلة منتجات"}</span>
          </div>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-brand-strong sm:text-4xl">{family.title[locale]}</h2>
          <p className="mt-4 text-lg leading-8 text-muted">{family.text[locale]}</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
          <div className="overflow-hidden rounded-lg border border-line bg-background shadow-sm">
            <div className="relative aspect-[16/11] overflow-hidden bg-surface-strong">
              <Image src={family.image} alt={family.imageAlt[locale]} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6 sm:p-8">
              <p className="rounded-md border border-line bg-surface p-4 text-sm leading-6 text-brand">{family.proof[locale]}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={route("contact", locale)} variant="secondary">
                  {locale === "fr" ? "Étudier une demande" : locale === "en" ? "Review a request" : "دراسة طلب"}
                </Button>
                {products.length > 0 ? (
                  <Button href={`#${family.id}-products`} variant="outline">
                    {locale === "fr" ? "Voir les fiches" : locale === "en" ? "View sheets" : "عرض البطاقات"}
                  </Button>
                ) : null}
              </div>
            </div>
          </div>

          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {family.examples[locale].map((example) => (
                <div key={example} className="flex min-h-16 items-center gap-3 rounded-md border border-line bg-background p-4 text-sm font-semibold text-brand shadow-sm">
                  <FontAwesomeIcon icon={faCheck} className="size-3 text-accent" aria-hidden />
                  {example}
                </div>
              ))}
            </div>

            {products.length > 0 ? (
              <div id={`${family.id}-products`} className="mt-8">
                <div className="mb-5 flex items-end justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-brand-strong">{locale === "fr" ? "Fiches disponibles" : locale === "en" ? "Available sheets" : "بطاقات متاحة"}</h3>
                  <a href={route("contact", locale)} className="hidden items-center gap-2 text-sm font-semibold text-accent hover:text-brand sm:inline-flex">
                    {locale === "fr" ? "Demander un prix" : locale === "en" ? "Request pricing" : "طلب سعر"}
                    <FontAwesomeIcon icon={faArrowRight} className="size-3" aria-hidden />
                  </a>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} locale={locale} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-8 rounded-lg border border-line bg-background p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-brand text-accent-soft">
                    <FontAwesomeIcon icon={faClipboardList} className="size-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-brand-strong">
                      {locale === "fr" ? "Étude sur cahier des charges" : locale === "en" ? "Specification-based review" : "دراسة حسب دفتر الشروط"}
                    </h3>
                    <p className="mt-3 leading-7 text-muted">
                      {locale === "fr"
                        ? "Envoyez vos plans, dimensions, essences, quantités et contraintes de finition pour vérifier la faisabilité et préparer une réponse commerciale."
                        : locale === "en"
                          ? "Send drawings, dimensions, species, quantities and finish constraints to review feasibility and prepare a commercial answer."
                          : "أرسل الرسومات والأبعاد وأنواع الخشب والكميات ومتطلبات التشطيب لدراسة الجدوى وتحضير رد تجاري."}
                    </p>
                    <Button href={route("contact", locale)} className="mt-5">
                      {locale === "fr" ? "Envoyer un cahier des charges" : locale === "en" ? "Send specifications" : "إرسال دفتر الشروط"}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
