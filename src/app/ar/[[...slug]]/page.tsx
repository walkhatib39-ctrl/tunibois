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
  return staticParamsFor("ar");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const routeKey = resolveRoute("ar", (await params).slug);
  const product = getProductByRouteKey(routeKey);

  if (product) {
    return pageMetadata({ ...product.seo.ar, routeKey, image: product.image });
  }

  return metadataByRoute(routeKey);
}

export default async function Page({ params }: Props) {
  const routeKey = resolveRoute("ar", (await params).slug);
  return renderRoute(routeKey);
}

function renderRoute(routeKey: RouteKey) {
  if (getProductByRouteKey(routeKey)) return <ProductDetailPage locale="ar" routeKey={routeKey} />;

  switch (routeKey) {
    case "home":
      return <HomePage locale="ar" />;
    case "factory":
      return <FactoryPage locale="ar" />;
    case "export":
      return <ExportPage locale="ar" />;
    case "contact":
      return <ContactPage locale="ar" />;
    case "products":
      return <ProductsIndexPage locale="ar" />;
    case "woods":
      return <WoodsIndexPage locale="ar" />;
    case "guides":
      return <GuidesIndexPage locale="ar" />;
    default:
      notFound();
  }
}

function metadataByRoute(routeKey: RouteKey) {
  const map: Partial<Record<RouteKey, { title: string; description: string }>> = {
    home: {
      title: "Tunibois | حلول صناعية لتحويل الخشب والتصدير",
      description: "تصنع Tunibois وتصدر منتجات ومكونات ومنصات وحلولا خشبية صديقة للبيئة للمشترين المهنيين الدوليين.",
    },
    factory: {
      title: "المصنع | تحويل صناعي للخشب | Tunibois",
      description: "تحويل وتصنيع ومراقبة جودة وتحضير للتصدير انطلاقا من تونس.",
    },
    export: {
      title: "تصدير الخشب من تونس | Tunibois",
      description: "حلول خشبية ومنصات ومكونات ومنتجات خشبية صديقة للبيئة للمستوردين والموزعين والصناعيين.",
    },
    contact: {
      title: "اتصل بنا واطلب عرض سعر | Tunibois",
      description: "تواصل مع Tunibois لطلب عرض سعر أو عينة أو مناقشة احتياجاتك للتصدير.",
    },
    products: {
      title: "منتجات خشبية B2B | Tunibois",
      description: "كتالوج Tunibois: منصات، حبيبات، عيدان، أدوات مائدة، ألواح، مكونات وحلول خشبية مخصصة.",
    },
    woods: {
      title: "أنواع الخشب | Tunibois",
      description: "خشب الزيتون والزان والأوكالبتوس الأبيض والصنوبر الحلبي وتطبيقاتها الصناعية.",
    },
    guides: {
      title: "أدلة تقنية للخشب والتصدير | Tunibois",
      description: "أدلة Tunibois لتحضير الشراء المهني: منصات التصدير، المواصفات، الحد الأدنى والتغليف.",
    },
  };

  const seo = map[routeKey] ?? map.products;
  return pageMetadata({ title: seo!.title, description: seo!.description, routeKey });
}
