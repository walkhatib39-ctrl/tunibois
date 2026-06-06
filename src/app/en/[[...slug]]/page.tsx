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
      title: "B2B wood factory | Transformation, control and export | Tunibois",
      description: "Discover the Tunibois factory: wood transformation, made-to-order production, quality control, industrial packing and export preparation.",
    },
    export: {
      title: "Wood export from Tunisia | Pallets, components and B2B products | Tunibois",
      description: "Tunibois prepares export wood orders: B2B products, packing, documents, transport and support for importers and industrial buyers.",
    },
    contact: {
      title: "Wood quote request, samples and export contact | Tunibois",
      description: "Contact Tunibois for a B2B wood quote, sample request, export project, distribution or industrial manufacturing enquiry.",
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
