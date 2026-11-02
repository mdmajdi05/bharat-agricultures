/**
 * Old product URLs kept alive for SEO and inbound links.
 * Consumed by `next.config.ts` (redirects) and re-exported from `products.ts`.
 */
export const legacyProductSlugs: Record<string, string> = {
  "dust-cleaner": "agricultural-dust-cleaner-machine",
  "paddy-cleaner": "paddy-cleaner-machine",
  harrow: "agricultural-harrow-machine",
  "hawa-thresher": "hawa-thresher-machine",
  thresher: "agricultural-thresher-machine",
  "id-fan": "id-fan-for-brick-kiln",
  "coal-crusher": "coal-crusher-machine",
  "maize-thresher": "maize-thresher-machine",
  cultivator: "tractor-cultivator",
  "land-leveler": "plate-land-leveler",
};

/** Old flat product URLs that now live under `/products/[slug]`. */
export const legacyRootProductSlugs = [
  "agricultural-dust-cleaner-machine",
  "paddy-cleaner-machine",
  "disc-harrow",
  "agricultural-harrow-machine",
  "hawa-thresher-machine",
  "agricultural-thresher-machine",
  "maize-thresher-machine",
  "plate-land-leveler",
  "2-in-1-land-leveler",
  "tractor-cultivator",
  "pugmill-machine",
  "id-fan-for-brick-kiln",
  "coal-crusher-machine",
];

/** Old page URLs from the preview site, kept alive for inbound links. */
export const legacyPageRedirects: Record<string, string> = {
  "/about-us": "/about",
  "/contact-us": "/contact",
  "/agricultural-machinery-parts": "/machinery-parts/agricultural-parts",
  "/brick-kiln-machinery-parts": "/machinery-parts/brick-kiln-parts",
  "/casting-parts": "/machinery-parts/casting-parts",
};
