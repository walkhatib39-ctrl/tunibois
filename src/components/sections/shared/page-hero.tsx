import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import type { Locale } from "@/lib/locales";
import { route, type RouteKey } from "@/lib/routes";

type PageHeroProps = {
  image?: string;
  locale: Locale;
  routeKey: RouteKey;
  text: Record<Locale, string>;
  title: Record<Locale, string>;
};

export function PageHero({ image, locale, routeKey, text, title }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand py-20 text-white">
      {image ? (
        <Image src={image} alt={title[locale]} fill sizes="100vw" className="object-cover opacity-30" />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(240,193,140,0.22),transparent_36%)]" />
      )}
      <Container className="relative">
        <Link href={route(routeKey, locale)} className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-soft">
          Tunibois
        </Link>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">{title[locale]}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">{text[locale]}</p>
      </Container>
    </section>
  );
}
