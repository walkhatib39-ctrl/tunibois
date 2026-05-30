import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/content/products";
import type { Locale } from "@/lib/locales";
import { route } from "@/lib/routes";

type ProductCardProps = {
  product: Product;
  locale: Locale;
};

export function ProductCard({ product, locale }: ProductCardProps) {
  return (
    <Link href={route(product.routeKey, locale)} className="group block overflow-hidden rounded-lg border border-line bg-surface shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-strong">
        <Image src={product.image} alt={product.name[locale]} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{product.eyebrow[locale]}</p>
        <h3 className="mt-2 text-xl font-semibold leading-tight text-brand-strong">{product.name[locale]}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">{product.summary[locale]}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
          RFQ <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
