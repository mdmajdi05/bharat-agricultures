/**
 * Homepage hero content.
 *
 * One slide per business line, photographed with the site's own imagery.
 * Copy is kept here so the carousel component stays purely presentational.
 */

export type HeroSlide = {
  slug: string;
  /** Accessible name used by the dots. */
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
    image: "/herosection-images/Bharat Agriculture Harrow at Sunset.png",
    imageAlt: "Bharat Agricultures harrow standing in a field at sunset",
    focus: "55% 52%",
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
    image: "/herosection-images/Blue Bharat Agricultural Thresher at Sunset.png",
    imageAlt: "Blue Bharat Agricultures thresher in a field at sunset",
    focus: "58% 52%",
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
    image: "/herosection-images/Industrial Brick Press at Sunset.png",
    imageAlt: "Industrial brick press working beside stacked bricks at sunset",
    focus: "56% 52%",
    primaryLabel: "Explore Brick Kiln Machinery",
    primaryHref: "/brick-kiln-machinery",
    secondaryLabel: "Get a Quote",
    secondaryHref: "/enquiry",
  },
  {
    slug: "pugmill-machine",
    name: "Pugmill Machine",
    eyebrow: "Clay preparation",
    title: "Pugmill",
    titleAccent: "Machines",
    subtitle: "Even clay mixing and steady output",
    subtitleAccent: "for every brick batch.",
    description:
      "Heavy-duty pugmills that prepare clay evenly, so brick quality stays consistent through the season.",
    image: "/herosection-images/Blue Agricultural Mixer at Sunset.png",
    imageAlt: "Blue Bharat Agricultures pugmill machine in the field at sunset",
    focus: "55% 52%",
    primaryLabel: "View Pugmill Machine",
    primaryHref: "/products/pugmill-machine",
    secondaryLabel: "Ask for Details",
    secondaryHref: "/enquiry",
  },
  {
    slug: "land-leveler",
    name: "Land Leveler",
    eyebrow: "Field preparation",
    title: "Land",
    titleAccent: "Levelers",
    subtitle: "Smooth, even fields before sowing —",
    subtitleAccent: "season after season.",
    description:
      "Strong land levelers that spread soil evenly and prepare a clean seedbed with fewer passes.",
    image: "/herosection-images/Blue Land Leveler at Sunset.png",
    imageAlt: "Blue land leveler ready for field preparation at sunset",
    focus: "55% 55%",
    primaryLabel: "View Land Leveler",
    primaryHref: "/products/plate-land-leveler",
    secondaryLabel: "Get a Quote",
    secondaryHref: "/enquiry",
  },
  {
    slug: "thresher",
    name: "Thresher",
    eyebrow: "Harvest support",
    title: "Threshing,",
    titleAccent: "Made Simple",
    subtitle: "Clean grain output with less",
    subtitleAccent: "effort and downtime.",
    description:
      "Threshers built for long harvest days — steady output, simple maintenance and dependable spares.",
    image: "/herosection-images/Bharat Agriculture Thresher at Sunset.png",
    imageAlt: "Green Bharat Agricultures thresher with grain at sunset",
    focus: "55% 52%",
    primaryLabel: "View Thresher",
    primaryHref: "/products/agricultural-thresher-machine",
    secondaryLabel: "Ask for Details",
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
