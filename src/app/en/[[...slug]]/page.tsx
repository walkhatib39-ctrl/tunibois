import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ContactPage,
  ExportPage,
  FactoryPage,
  GuidesIndexPage,
  HomePage,
  ProductDetailPage,
  ProductsIndexPage,
  WoodsIndexPage,
} from "@/components/pages/site-pages";
import { getProductByRouteKey } from "@/content/products";
import { resolveRoute, staticParamsFor } from "@/lib/page-resolver";
import { pageMetadata } from "@/lib/seo";
import type { RouteKey } from "@/lib/routes";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export function generateStaticParams() {
  return staticParamsFor("en");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const routeKey = resolveRoute("en", (await params).slug);
  const product = getProductByRouteKey(routeKey);

  if (product) {
    return pageMetadata({ ...product.seo.en, routeKey, image: product.image });
  }

  return metadataByRoute(routeKey);
}

export default async function Page({ params }: Props) {
  const routeKey = resolveRoute("en", (await params).slug);
  return renderRoute(routeKey);
}

function renderRoute(routeKey: RouteKey) {
  if (getProductByRouteKey(routeKey)) return <ProductDetailPage locale="en" routeKey={routeKey} />;

  switch (routeKey) {
    case "home":
      return <HomePage locale="en" />;
    case "factory":
      return <FactoryPage locale="en" />;
    case "export":
      return <ExportPage locale="en" />;
    case "contact":
      return <ContactPage locale="en" />;
    case "products":
      return <ProductsIndexPage locale="en" />;
    case "woods":
      return <WoodsIndexPage locale="en" />;
    case "guides":
      return <GuidesIndexPage locale="en" />;
    default:
      notFound();
  }
}

function metadataByRoute(routeKey: RouteKey) {
  const map: Partial<Record<RouteKey, { title: string; description: string }>> = {
    home: {
      title: "Tunibois | Industrial wood transformation and export solutions",
      description: "Tunibois manufactures and exports wood products, components, pallets and eco wood solutions for international B2B buyers.",
    },
    factory: {
      title: "Factory | Industrial wood transformation | Tunibois",
      description: "Industrial wood transformation, manufacturing, quality control and export preparation from Tunisia.",
    },
    export: {
      title: "Wood export from Tunisia | Tunibois",
      description: "Wood solutions, pallets, components and eco wood products prepared for importers, distributors and international manufacturers.",
    },
    contact: {
      title: "Contact and quote request | Tunibois",
      description: "Contact Tunibois for a quote, sample request or export discussion for your wood product needs.",
    },
    products: {
      title: "B2B wood products | Tunibois",
      description: "Tunibois catalogue: pallets, pellets, stirrers, sticks, cutlery, panels, components and custom wood solutions.",
    },
    woods: {
      title: "Wood species | Tunibois",
      description: "Olive wood, beech, white eucalyptus, Aleppo pine and industrial applications for B2B wood products.",
    },
    guides: {
      title: "Wood and export technical guides | Tunibois",
      description: "Tunibois guides to prepare B2B purchasing: export pallets, specifications, MOQ and export packing.",
    },
  };

  const seo = map[routeKey] ?? map.products;
  return pageMetadata({ title: seo!.title, description: seo!.description, routeKey });
}
