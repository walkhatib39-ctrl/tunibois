import { HomePage } from "@/components/pages/site-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Tunibois | Produits bois transformés en Tunisie pour l'industrie et l'export",
  description: "Palettes, emballages, panneaux, composants, produits eco wood et bois énergie préparés selon dimensions, volumes, conditionnement et destination.",
  routeKey: "home",
  image: "/assets/tunibois/hero-industrial-wood.jpg",
});

export default function Page() {
  return <HomePage locale="fr" />;
}
