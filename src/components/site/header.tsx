import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { assets } from "@/content/assets";
import { navigationFor } from "@/content/navigation";
import { site } from "@/content/site";
import type { Locale } from "@/lib/locales";
import { route, type RouteKey } from "@/lib/routes";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { LanguageSwitcher } from "@/components/site/language-switcher";

type HeaderProps = {
  locale: Locale;
  routeKey: RouteKey;
};

export function Header({ locale, routeKey }: HeaderProps) {
  const navigation = navigationFor(locale);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/92 backdrop-blur">
      <div className="border-b border-line bg-surface">
        <Container className="flex min-h-10 items-center justify-between gap-4 text-xs text-muted">
          <a className="inline-flex items-center gap-2 hover:text-brand" href={`mailto:${site.email}`}>
            <Mail className="size-4" aria-hidden />
            {site.email}
          </a>
          <a className="inline-flex items-center gap-2 hover:text-brand" href={`tel:${site.phone.replace(/\s/g, "")}`}>
            <Phone className="size-4" aria-hidden />
            {site.phone}
          </a>
        </Container>
      </div>
      <Container className="flex min-h-20 items-center justify-between gap-5">
        <Link href={route("home", locale)} className="flex items-center gap-3">
          <Image src={assets.logo.src} alt={assets.logo.alt} width={178} height={68} className="h-12 w-auto" priority />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm font-semibold text-brand hover:bg-surface">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher activeLocale={locale} routeKey={routeKey} />
          <Button href={route("contact", locale)} variant="outline">
            RFQ
          </Button>
        </div>
      </Container>
      <div className="border-t border-line lg:hidden">
        <Container>
          <nav className="flex items-center gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Navigation mobile">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="shrink-0 rounded-md border border-line bg-surface px-3 py-2 text-sm font-semibold text-brand">
                {item.label}
              </Link>
            ))}
            <Link href={route("contact", locale)} className="shrink-0 rounded-md border border-brand px-4 py-2 text-sm font-semibold text-brand">
              RFQ
            </Link>
            <div className="shrink-0">
              <LanguageSwitcher activeLocale={locale} routeKey={routeKey} />
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
