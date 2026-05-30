import { HomePage } from "@/components/pages/site-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Tunibois | Solutions industrielles de transformation du bois et export",
  description: "Tunibois transforme, fabrique et exporte des solutions bois pour industriels, distributeurs et importateurs internationaux.",
  routeKey: "home",
  image: "/assets/tunibois/hero-industrial-wood.jpg",
});

export default function Page() {
  return <HomePage locale="fr" />;
}
