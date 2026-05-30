import type { MetadataRoute } from "next";
import { allLocalizedRoutes } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return allLocalizedRoutes().map(({ path }) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: path.includes("/products/") || path.includes("-en-bois") ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.includes("/contact") ? 0.7 : 0.8,
  }));
}
