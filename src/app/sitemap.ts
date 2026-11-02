import type { MetadataRoute } from "next";
import { partsPages } from "@/data/partsPages";
import { products } from "@/data/products";
import { site } from "@/lib/site";

const staticRoutes = [
  "",
  "/agricultural-machinery",
  "/brick-kiln-machinery",
  "/machinery-parts",
  "/products",
  "/about",
  "/quality",
  "/infrastructure",
  "/contact",
  "/enquiry",
];

const categoryRoutes = new Set(["/agricultural-machinery", "/brick-kiln-machinery", "/machinery-parts"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : categoryRoutes.has(path) ? 0.85 : 0.7,
    })),
    ...partsPages.map((page) => ({
      url: `${site.url}/machinery-parts/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...products.map((product) => ({
      url: `${site.url}/products/${product.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
