import Image from "next/image";
import { Container } from "@/components/ui/container";
import type { Product } from "@/content/products";
import type { Locale } from "@/lib/locales";

type ProductGallerySectionProps = {
  locale: Locale;
  product: Product;
};

export function ProductGallerySection({ locale, product }: ProductGallerySectionProps) {
  return (
    <section className="bg-surface py-16">
      <Container className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {product.gallery.map((image) => (
          <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-surface-strong">
            <Image src={image} alt={product.name[locale]} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
          </div>
        ))}
      </Container>
    </section>
  );
}
