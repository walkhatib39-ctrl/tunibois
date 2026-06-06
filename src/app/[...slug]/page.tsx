import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ContactPage,
  ExportPage,
  FactoryPage,
  GuidesIndexPage,
  ProductDetailPage,
  ProductsIndexPage,
  WoodsIndexPage,
} from "@/components/pages/site-pages";
import { getProductByRouteKey } from "@/content/products";
import { resolveRoute, staticParamsFor } from "@/lib/page-resolver";
import { pageMetadata } from "@/lib/seo";
import type { RouteKey } from "@/lib/routes";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return staticParamsFor("fr");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const routeKey = resolveRoute("fr", (await params).slug);
  const product = getProductByRouteKey(routeKey);

  if (product) {
    return pageMetadata({
      ...product.seo.fr,
      routeKey,
      image: product.image,
    });
  }

  return metadataByRoute(routeKey);
}

export default async function Page({ params }: Props) {
  const routeKey = resolveRoute("fr", (await params).slug);
  return renderRoute(routeKey);
}

function renderRoute(routeKey: RouteKey) {
  if (getProductByRouteKey(routeKey)) {
    return <ProductDetailPage locale="fr" routeKey={routeKey} />;
  }

  switch (routeKey) {
    case "factory":
      return <FactoryPage locale="fr" />;
    case "export":
      return <ExportPage locale="fr" />;
    case "contact":
      return <ContactPage locale="fr" />;
    case "products":
      return <ProductsIndexPage locale="fr" />;
    case "woods":
      return <WoodsIndexPage locale="fr" />;
    case "guides":
      return <GuidesIndexPage locale="fr" />;
    default:
      notFound();
  }
}

function metadataByRoute(routeKey: RouteKey) {
  const map: Partial<Record<RouteKey, { title: string; description: string }>> = {
    factory: {
      title: "Notre usine | Transformation industrielle du bois | Tunibois",
      description: "Découvrez l'approche industrielle de Tunibois pour transformer, fabriquer, contrôler et préparer les produits bois à l'export.",
    },
    export: {
      title: "Export bois depuis la Tunisie | Tunibois",
      description: "Solutions bois, palettes, composants et produits eco wood préparés pour importateurs, distributeurs et industriels internationaux.",
    },
    contact: {
      title: "Demande de devis bois, échantillon et contact export | Tunibois",
      description: "Contactez Tunibois pour un devis bois B2B, une demande d'échantillon, un projet export, distribution ou fabrication industrielle.",
    },
    products: {
      title: "Produits bois B2B | Tunibois",
      description: "Catalogue Tunibois: palettes, pellets, agitateurs, bâtonnets, couverts, panneaux, composants et solutions bois sur mesure.",
    },
    woods: {
      title: "Essences de bois | Tunibois",
      description: "Bois d'olivier, hêtre, eucalyptus blanc, pin d'Alep et applications industrielles pour produits bois B2B.",
    },
    guides: {
      title: "Guides techniques bois et export | Tunibois",
      description: "Guides Tunibois pour mieux préparer vos achats B2B: palettes export, cahiers des charges, MOQ et conditionnement.",
    },
  };

  const seo = map[routeKey] ?? map.products;
  return pageMetadata({ title: seo!.title, description: seo!.description, routeKey });
}
