import type { MetadataRoute } from "next";
import { partsPages } from "@/data/partsPages";
import { products } from "@/data/products";
import { localizedAlternates, localizedPath, type Locale } from "@/lib/locale";
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
  "/sitemap-html",
];

const categoryRoutes = new Set(["/agricultural-machinery", "/brick-kiln-machinery", "/machinery-parts"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes.map((path) => ({
      path,
      priority: path === "" ? 1 : categoryRoutes.has(path) ? 0.85 : 0.7,
    })),
    ...partsPages.map((page) => ({
      path: `/machinery-parts/${page.slug}`,
      priority: 0.75,
    })),
    ...products.map((product) => ({
      path: `/products/${product.slug}`,
      priority: 0.75,
    })),
  ];

  return [
    ...routes.flatMap(({ path, priority }) => {
      const alternates = localizedAlternates(path);

      return (["en", "hi"] as const satisfies readonly Locale[]).map((locale) => ({
        url: `${site.url}${localizedPath(path, locale)}`,
        changeFrequency: "monthly" as const,
        priority,
        alternates: {
          languages: Object.fromEntries(
            Object.entries(alternates).map(([language, href]) => [language, `${site.url}${href}`]),
          ),
        },
      }));
    }),
  ];
}
