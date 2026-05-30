import type { ReactNode } from "react";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { JsonLdScript, organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { localeDirections, type Locale } from "@/lib/locales";
import type { RouteKey } from "@/lib/routes";

type PageShellProps = {
  children: ReactNode;
  locale: Locale;
  routeKey: RouteKey;
};

export function PageShell({ children, locale, routeKey }: PageShellProps) {
  return (
    <div lang={locale} dir={localeDirections[locale]} className="flex min-h-screen flex-col">
      <Header locale={locale} routeKey={routeKey} />
      <JsonLdScript data={organizationJsonLd()} />
      <JsonLdScript data={websiteJsonLd()} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
