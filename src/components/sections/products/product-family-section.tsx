import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ProductCard } from "@/components/cards/product-card";
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
            <span>{locale === "fr" ? "Catégorie produit" : locale === "en" ? "Product category" : "فئة منتجات"}</span>
          </div>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-brand-strong sm:text-4xl">{family.title[locale]}</h2>
          <p className="mt-4 text-lg leading-8 text-muted">{family.text[locale]}</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
          <div className="overflow-hidden rounded-lg border border-line bg-background shadow-sm">
            <div className="relative aspect-[16/11] overflow-hidden bg-surface-strong">
              <Image src={family.image} alt={family.imageAlt[locale]} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
            </div>
          </div>

          <div>
            <div className="border-y border-line">
              <div className="grid gap-x-8 sm:grid-cols-2">
                {family.products[locale].map((product) => (
                  <div key={product} className="border-b border-line py-4 text-base font-semibold text-brand last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0">
                    {product}
                  </div>
                ))}
              </div>
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
              <div className="mt-8 border-t border-line pt-6">
                <h3 className="text-2xl font-semibold text-brand-strong">
                  {locale === "fr" ? "Étude sur cahier des charges" : locale === "en" ? "Specification-based review" : "دراسة حسب دفتر الشروط"}
                </h3>
                <p className="mt-3 max-w-2xl leading-7 text-muted">
                  {locale === "fr"
                    ? "Envoyez vos dimensions, quantités, essences, plans ou contraintes de finition pour préparer une réponse commerciale."
                    : locale === "en"
                      ? "Send dimensions, quantities, species, drawings or finish constraints to prepare a commercial answer."
                      : "أرسل الأبعاد والكميات وأنواع الخشب والرسومات أو متطلبات التشطيب لتحضير رد تجاري."}
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
