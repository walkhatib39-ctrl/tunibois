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
      title: "مصنع خشب B2B | تحويل ومراقبة وتصدير | Tunibois",
      description: "تعرف على مصنع Tunibois: تحويل الخشب، تصنيع حسب الطلب، مراقبة الجودة، تغليف صناعي وتحضير للتصدير.",
    },
    export: {
      title: "تصدير الخشب من تونس | منصات ومكونات ومنتجات B2B | Tunibois",
      description: "تحضر Tunibois طلبات الخشب للتصدير: منتجات B2B، تغليف، وثائق، نقل ومرافقة للمستوردين والمشترين الصناعيين.",
    },
    contact: {
      title: "طلب عرض سعر للخشب وعينات وتواصل للتصدير | Tunibois",
      description: "تواصل مع Tunibois لطلب عرض سعر B2B أو عينة أو مشروع تصدير أو توزيع أو تصنيع صناعي.",
    },
    products: {
      title: "منتجات خشبية B2B | Tunibois",
      description: "كتالوج Tunibois: منصات، حبيبات، عيدان، أدوات مائدة، ألواح، مكونات وحلول خشبية مخصصة.",
    },
    woods: {
      title: "أنواع خشب B2B | الزيتون والزان والأوكالبتوس والصنوبر الحلبي | Tunibois",
      description: "قارن أنواع الخشب لدى Tunibois للإنتاج الصناعي والتصدير: خشب الزيتون والزان والأوكالبتوس الأبيض والصنوبر الحلبي حسب الاستخدام والتجفيف والتغليف.",
    },
    guides: {
      title: "أدلة تقنية للخشب والتصدير | Tunibois",
      description: "أدلة Tunibois لتحضير الشراء المهني: منصات التصدير، المواصفات، الحد الأدنى والتغليف.",
    },
  };

  const seo = map[routeKey] ?? map.products;
  return pageMetadata({ title: seo!.title, description: seo!.description, routeKey });
}
