/**
 * Homepage hero content.
 *
 * One slide per business line, photographed with the site's own imagery.
 * Copy is kept here so the carousel component stays purely presentational.
 */

export type HeroSlide = {
  slug: string;
  /** Accessible name used by the dots and thumbnails. */
  name: string;
  eyebrow: string;
  /** First headline line, rendered in cream. */
  title: string;
  /** Second headline line, rendered in gold. */
  titleAccent: string;
  subtitle: string;
  subtitleAccent: string;
  description?: string;
  image: string;
  imageAlt: string;
  /** `object-position` for the plate crop. */
  focus: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  /** The brand slide carries the trust row; the category slides stay lighter. */
  showBadges?: boolean;
};

export const heroSlides: HeroSlide[] = [
  {
    slug: "bharat-agricultures",
    name: "Bharat Agricultures",
    eyebrow: "Built for the work that matters",
    title: "Bharat",
    titleAccent: "Agricultures",
    subtitle: "Manufacturer of Agricultural &",
    subtitleAccent: "Brick Kiln Machinery",
    description:
      "Reliable, quality-driven machinery solutions for modern agriculture and industrial operations.",
    image: "/images/hero-field.jpg",
    imageAlt: "Khet mein kaam karte hue tractor aur agricultural machinery",
    focus: "55% 50%",
    primaryLabel: "Explore Our Machinery",
    primaryHref: "/products",
    secondaryLabel: "Get a Quote",
    secondaryHref: "/enquiry",
    showBadges: true,
  },
  {
    slug: "agricultural-machinery",
    name: "Agricultural Machinery",
    eyebrow: "Agricultural equipment",
    title: "Machinery for",
    titleAccent: "Modern Farming",
    subtitle: "Field preparation, crop handling and",
    subtitleAccent: "everyday farm operations.",
    description:
      "Practical equipment built to keep the whole season moving, from the first pass to the final clean.",
    image: "/images/products/thresher.jpg",
    imageAlt: "Khet mein agricultural thresher se fasal nikalte hue",
    focus: "50% 50%",
    primaryLabel: "Explore Agricultural Machinery",
    primaryHref: "/agricultural-machinery",
    secondaryLabel: "Request Details",
    secondaryHref: "/enquiry",
  },
  {
    slug: "brick-kiln-machinery",
    name: "Brick Kiln Machinery",
    eyebrow: "Industrial solutions",
    title: "Brick Kiln",
    titleAccent: "Machinery",
    subtitle: "Clay mixing, airflow and coal sizing —",
    subtitleAccent: "built for the kiln.",
    description:
      "Machinery and components for brick manufacturing operations, from material handling to process support.",
    image: "/images/products/pugmill.jpg",
    imageAlt: "Brick field ka clay mixer pugmill machine",
    focus: "50% 55%",
    primaryLabel: "Explore Brick Kiln Machinery",
    primaryHref: "/brick-kiln-machinery",
    secondaryLabel: "Get a Quote",
    secondaryHref: "/enquiry",
  },
  {
    slug: "machinery-parts",
    name: "Machinery Parts",
    eyebrow: "Support for your equipment",
    title: "Parts that",
    titleAccent: "Keep You Running",
    subtitle: "Wear parts and replacement components",
    subtitleAccent: "for every machine.",
    description:
      "Tines, blades, screens, hammers, bearings and castings — supplied to match the machine you already run.",
    image: "/images/machining.jpg",
    imageAlt: "Manufacturing workshop mein machining ka kaam",
    focus: "50% 50%",
    primaryLabel: "Explore Machinery Parts",
    primaryHref: "/machinery-parts",
    secondaryLabel: "Send Part Enquiry",
    secondaryHref: "/enquiry",
  },
];

export type HeroCopy = {
  /** Accessible labels for the reel controls. */
  prevLabel: string;
  nextLabel: string;
  slideLabel: string;
  thumbnailLabel: string;
};

export const heroCopy: HeroCopy = {
  prevLabel: "Previous slide",
  nextLabel: "Next slide",
  slideLabel: "Go to slide",
  thumbnailLabel: "Show slide",
};

export type HeroBadge = {
  icon: "shield" | "gear" | "handshake";
  /** Two short lines, rendered as-is. */
  lines: [string, string] | [string];
};

export const heroBadges: HeroBadge[] = [
  { icon: "shield", lines: ["High Quality", "Machines"] },
  { icon: "gear", lines: ["Reliable Performance"] },
  { icon: "handshake", lines: ["Trusted Partner"] },
];
