/**
 * Hinglish homepage hero content.
 *
 * English copy lives separately in `src/data/en/hero.ts` so the two locales
 * never share identical text and can be edited independently.
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
  mobileImage?: string;
  mobileImageAlt?: string;
  /** `object-position` for the plate crop. */
  focus: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  /** Show the machinery benefits row below the description. */
  showBadges?: boolean;
};

export const heroSlides: HeroSlide[] = [
  {
    slug: "bharat-agricultures",
    name: "Bharat Agricultures",
    eyebrow: "Mehnat ke liye bani machinery",
    title: "Bharat",
    titleAccent: "Agricultures",
    subtitle: "Kheti aur eent bhatta",
    subtitleAccent: "machinery ka manufacturer",
    description:
      "Modern kheti aur industrial kaam ke liye bharosemand, quality-driven machinery solutions — Sambhal, UP se.",
    image: "/herosection-images/Bharat Agriculture Harrow at Sunset.png",
    imageAlt: "Shaam ke waqt khet mein khada Bharat Agricultures ka harrow",
    mobileImage: "/Hero-sec/Disc harrow.png",
    mobileImageAlt: "Shaam ke waqt khet mein Bharat Agricultures ka disc harrow",
    focus: "55% 52%",
    primaryLabel: "Hamari Machinery Dekhein",
    primaryHref: "/products",
    secondaryLabel: "Details Poochein",
    secondaryHref: "/enquiry",
    showBadges: true,
  },
  {
    slug: "agricultural-machinery",
    name: "Kheti ki Machinery",
    eyebrow: "Kheti ka equipment",
    title: "Modern Kheti",
    titleAccent: "Ke Liye Machinery",
    subtitle: "Khet taiyari, fasal handling aur",
    subtitleAccent: "rozana ke farm kaam.",
    description:
      "Season bhar kaam chalta rahe — pehli jotai se lekar aakhri safai tak practical equipment, seedha factory rate par.",
    image: "/herosection-images/Blue Bharat Agricultural Thresher at Sunset.png",
    imageAlt: "Shaam ke waqt khet mein neela Bharat Agricultures thresher",
    mobileImage: "/Hero-sec/dust cleaner.png",
    mobileImageAlt: "Khet mein Bharat Agricultures ka agricultural dust cleaner",
    focus: "58% 52%",
    primaryLabel: "Kheti ki Machinery Dekhein",
    primaryHref: "/agricultural-machinery",
    secondaryLabel: "Details Poochein",
    secondaryHref: "/enquiry",
    showBadges: true,
  },
  {
    slug: "brick-kiln-machinery",
    name: "Eent Bhatta Machinery",
    eyebrow: "Industrial solutions",
    title: "Eent Bhatta",
    titleAccent: "Machinery",
    subtitle: "Clay mixing, airflow aur coal sizing —",
    subtitleAccent: "bhatte ke liye bani.",
    description:
      "Brick manufacturing ke liye machinery aur components — material handling se process support tak, kiln owners ke liye.",
    image: "/herosection-images/Industrial Brick Press at Sunset.png",
    imageAlt: "Shaam ke waqt eenton ke paas chal raha industrial brick press",
    mobileImage: "/Hero-sec/Coal Crusher.png",
    mobileImageAlt: "Conveyor ke saath Bharat Agricultures ka coal crusher",
    focus: "56% 52%",
    primaryLabel: "Eent Bhatta Machinery Dekhein",
    primaryHref: "/brick-kiln-machinery",
    secondaryLabel: "Details Poochein",
    secondaryHref: "/enquiry",
    showBadges: true,
  },
  {
    slug: "pugmill-machine",
    name: "Pugmill Machine",
    eyebrow: "Clay ki taiyari",
    title: "Pugmill",
    titleAccent: "Machines",
    subtitle: "Barabar clay mixing aur steady output",
    subtitleAccent: "har brick batch ke liye.",
    description:
      "Heavy-duty pugmill jo clay ko barabar prepare karta hai, taaki brick quality season bhar consistent rahe.",
    image: "/products/pugmill machine.png",
    imageAlt: "Brick kiln ke liye Bharat Agricultures ka pugmill machine",
    mobileImage: "/Hero-sec/Bricks Mkaing Machine.png",
    mobileImageAlt: "Bharat Agricultures ki brick-making machine",
    focus: "55% 52%",
    primaryLabel: "Pugmill Machine Dekhein",
    primaryHref: "/products/pugmill-machine",
    secondaryLabel: "Details Poochein",
    secondaryHref: "/enquiry",
    showBadges: true,
  },
  {
    slug: "land-leveler",
    name: "Land Leveler",
    eyebrow: "Khet ki taiyari",
    title: "Land",
    titleAccent: "Levelers",
    subtitle: "Buwai se pehle khet barabar —",
    subtitleAccent: "har season.",
    description:
      "Mazboot land leveler jo mitti barabar failata hai aur kam passes mein saaf seedbed taiyar karta hai.",
    image: "/products/Plate Land Leveler.png",
    imageAlt: "Bharat Agricultures ka plate land leveler",
    mobileImage: "/Hero-sec/Disc harrow.png",
    mobileImageAlt: "Khet taiyar karta Bharat Agricultures ka disc harrow",
    focus: "55% 55%",
    primaryLabel: "Land Leveler Dekhein",
    primaryHref: "/products/plate-land-leveler",
    secondaryLabel: "Details Poochein",
    secondaryHref: "/enquiry",
    showBadges: true,
  },
  {
    slug: "thresher",
    name: "Thresher",
    eyebrow: "Fasal nikalne ka support",
    title: "Threshing,",
    titleAccent: "Aasan Tarike Se",
    subtitle: "Kam mehnat aur downtime mein",
    subtitleAccent: "saaf dana.",
    description:
      "Lambe harvest dinon ke liye bane thresher — steady output, aasan maintenance aur bharosemand spare parts.",
    image: "/products/Thresher.png",
    imageAlt: "Bharat Agricultures ka agricultural thresher",
    mobileImage: "/Hero-sec/Hawa thresher.png",
    mobileImageAlt: "Khet mein Bharat Agricultures ka Hawa thresher",
    focus: "55% 52%",
    primaryLabel: "Thresher Dekhein",
    primaryHref: "/products/agricultural-thresher-machine",
    secondaryLabel: "Details Poochein",
    secondaryHref: "/enquiry",
    showBadges: true,
  },
];

export type HeroCopy = {
  /** Accessible label for the carousel region. */
  carouselLabel: string;
  /** Accessible labels for the reel controls. */
  prevLabel: string;
  nextLabel: string;
  slideLabel: string;
  thumbnailLabel: string;
};

export const heroCopy: HeroCopy = {
  carouselLabel: "Featured machinery",
  prevLabel: "Pichla slide",
  nextLabel: "Agla slide",
  slideLabel: "Slide par jaayein",
  thumbnailLabel: "Slide dekhein",
};

export type HeroBadge = {
  icon: "shield" | "gear" | "handshake";
  /** Two short lines, rendered as-is. */
  lines: [string, string] | [string];
};

export const heroBadges: HeroBadge[] = [
  { icon: "gear", lines: ["Barabar", "Output"] },
  { icon: "gear", lines: ["Aasan", "Maintenance"] },
  { icon: "shield", lines: ["Bharosemand", "Spares"] },
];
