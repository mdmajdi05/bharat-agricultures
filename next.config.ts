import type { NextConfig } from "next";
import { legacyPageRedirects, legacyProductSlugs, legacyRootProductSlugs } from "./src/data/legacyRoutes";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      ...Object.entries(legacyProductSlugs).map(([legacySlug, slug]) => ({
        source: `/products/${legacySlug}`,
        destination: `/products/${slug}`,
        permanent: true,
      })),
      ...legacyRootProductSlugs.map((slug) => ({
        source: `/${slug}`,
        destination: `/products/${slug}`,
        permanent: true,
      })),
      ...Object.entries(legacyPageRedirects).map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
