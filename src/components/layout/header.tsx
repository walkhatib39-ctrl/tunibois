import Image from "next/image";
import Link from "next/link";
import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { TopBar } from "@/components/layout/top-bar";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { assets } from "@/content/assets";
import { navigationFor } from "@/content/navigation";
import type { Locale } from "@/lib/locales";
import { route, type RouteKey } from "@/lib/routes";

type HeaderProps = {
  locale: Locale;
  routeKey: RouteKey;
};

const quoteCta: Record<Locale, string> = {
  fr: "Demander un devis",
  en: "Request a quote",
  ar: "طلب عرض سعر",
};

export function Header({ locale, routeKey }: HeaderProps) {
  const navigation = navigationFor(locale);
  const ctaLabel = quoteCta[locale];
  const ctaHref = route("contact", locale);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/92 backdrop-blur">
      <TopBar locale={locale} routeKey={routeKey} />
      <Container className="flex min-h-20 items-center justify-between gap-5">
        <Link href={route("home", locale)} className="flex items-center gap-3">
          <Image src={assets.logo.src} alt={assets.logo.alt} width={178} height={68} className="h-12 w-auto" priority />
        </Link>
        <MainNav items={navigation} />
        <div className="hidden md:flex">
          <Button href={ctaHref} variant="outline">
            {ctaLabel}
          </Button>
        </div>
      </Container>
      <MobileNav items={navigation} ctaHref={ctaHref} ctaLabel={ctaLabel} />
    </header>
  );
}
