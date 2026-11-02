import { products, type ProductCategory } from "@/data/products";

/**
 * Hero content + the product reel.
 *
 * Slides are built from real product records so the name, tagline and
 * destination always match the product page — no invented specs. The
 * photography is a real, licensable machine photo per product; the focus
 * point keeps the machine in frame when the plate is cropped.
 */

export type HeroSlide = {
  slug: string;
  name: string;
  tagline: string;
  family: string;
  image: string;
  imageAlt: string;
  /** `object-position` for the plate crop. */
  focus: string;
  href: string;
};

const familyLabel: Record<ProductCategory, string> = {
  agricultural: "Agricultural machinery",
  "brick-kiln": "Brick kiln machinery",
};

const heroSlideSlugs = [
  "tractor-cultivator",
  "paddy-cleaner-machine",
  "pugmill-machine",
  "agricultural-thresher-machine",
] as const;

/**
 * Product photography sourced from Wikimedia Commons (CC / public domain).
 * See `public/images/products/CREDITS.md` for the file-by-file source list.
 */
const heroImage: Record<(typeof heroSlideSlugs)[number], { src: string; alt: string; focus: string }> = {
  "tractor-cultivator": {
    src: "/images/products/cultivator.jpg",
    alt: "Tractor-mounted cultivator khet ki mitti todte hue",
    focus: "58% 58%",
  },
  "paddy-cleaner-machine": {
    src: "/images/products/paddy-cleaner.jpg",
    alt: "Paddy cleaner machine dhan ki safai ke liye",
    focus: "50% 52%",
  },
  "pugmill-machine": {
    src: "/images/products/pugmill.jpg",
    alt: "Brick field ka clay mixer pugmill machine",
    focus: "50% 55%",
  },
  "agricultural-thresher-machine": {
    src: "/images/products/thresher.jpg",
    alt: "Khet mein agricultural thresher se fasal nikalte hue",
    focus: "50% 50%",
  },
};

export const heroSlides: HeroSlide[] = heroSlideSlugs.map((slug) => {
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    throw new Error(`Hero slide product not found: ${slug}`);
  }

  const photo = heroImage[slug];

  return {
    slug: product.slug,
    name: product.name,
    tagline: product.tagline,
    family: familyLabel[product.category],
    image: photo.src,
    imageAlt: photo.alt,
    focus: photo.focus,
    href: `/products/${product.slug}`,
  };
});

export type HeroCopy = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  lead: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  indexLabel: string;
  slideLabel: string;
  viewLabel: string;
  pauseLabel: string;
  playLabel: string;
  pauseText: string;
  playText: string;
};

export type HeroStat = {
  value: string;
  label: string;
};

/** Small proof row that sits under the hero copy. */
export const heroStats: HeroStat[] = [
  { value: "06", label: "Component categories" },
  { value: "02", label: "Core industries" },
  { value: "B2B", label: "Built for business" },
];

export const heroCopy: HeroCopy = {
  eyebrow: "Manufacturer · Sambhal, Uttar Pradesh",
  title: "Agricultural & Brick Kiln Machinery",
  titleAccent: "Manufacturer in India",
  lead:
    "Sambhal, Uttar Pradesh se agricultural aur brick kiln machinery ka seedha manufacturer — thresher, harrow aur land leveler se lekar pugmill, ID fan aur coal crusher tak.",
  primaryLabel: "Get a quote",
  primaryHref: "/enquiry",
  secondaryLabel: "Explore machinery",
  secondaryHref: "/agricultural-machinery",
  indexLabel: "Product index",
  slideLabel: "Show product",
  viewLabel: "View machine",
  pauseLabel: "Pause product slideshow",
  playLabel: "Play product slideshow",
  pauseText: "Pause",
  playText: "Play",
};
