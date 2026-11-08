import type { MetadataRoute } from "next";
import { partsPages } from "@/data/partsPages";
import { products } from "@/data/products";
import { localizedAlternates, localizedPath, type Locale } from "@/lib/locale";
import { site } from "@/lib/site";

const locales = ["hi", "en"] as const satisfies readonly Locale[];

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

const categoryRoutes = new Set([
  "/agricultural-machinery",
  "/brick-kiln-machinery",
  "/machinery-parts",
]);

type RouteEntry = {
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
};

/** Keep the sitemap fresh so lastmod always reflects the current build/deploy. */
export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: RouteEntry[] = [
    ...staticRoutes.map((path) => ({
      path,
      priority: path === "" ? 1 : categoryRoutes.has(path) ? 0.85 : 0.7,
      changeFrequency: (path === "" ? "weekly" : "monthly") as RouteEntry["changeFrequency"],
    })),
    ...partsPages.map((page) => ({
      path: `/machinery-parts/${page.slug}`,
      priority: 0.75,
      changeFrequency: "monthly" as RouteEntry["changeFrequency"],
    })),
    ...products.map((product) => ({
      path: `/products/${product.slug}`,
      priority: 0.75,
      changeFrequency: "monthly" as RouteEntry["changeFrequency"],
    })),
  ];

  const seen = new Set<string>();
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    const languages = Object.fromEntries(
      Object.entries(localizedAlternates(route.path)).map(([language, href]) => [
        language,
        `${site.url}${href}`,
      ]),
    );

    for (const locale of locales) {
      const url = `${site.url}${localizedPath(route.path, locale)}`;

      if (seen.has(url)) continue;
      seen.add(url);

      entries.push({
        url,
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: { languages },
      });
    }
  }

  return entries.sort((a, b) => a.url.localeCompare(b.url));
}
