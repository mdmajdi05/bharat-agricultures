import {
  agriculturalProducts as englishAgriculturalProducts,
  brickKilnProducts as englishBrickKilnProducts,
} from "@/data/en/products";
import { partsPages as englishPartsPages } from "@/data/en/partsPages";
import { partsPages as hinglishPartsPages } from "@/data/partsPages";
import {
  agriculturalProducts as hinglishAgriculturalProducts,
  brickKilnProducts as hinglishBrickKilnProducts,
} from "@/data/products";

export type NavigationLocale = "en" | "hi";

const hinglishLabels: Record<string, string> = {
  Home: "Home",
  "Agricultural Machinery": "Kheti ki Machinery",
  "Brick Kiln Machinery": "Eent Bhatta Machinery",
  "Machinery Parts": "Machinery ke Parts",
  "Agricultural machinery": "Kheti ki Machinery",
  "Brick kiln machinery": "Eent bhatta machinery",
  "Machinery parts": "Machinery ke parts",
  Company: "Company",
  "About Us": "Hamare baare mein",
  "About us": "Hamare baare mein",
  "All agricultural machinery": "Kheti ki saari machinery",
  "All brick kiln machinery": "Eent bhatta ki saari machinery",
  "All machinery parts": "Saare machinery parts",
  Contact: "Sampark",
  "Quality commitment": "Quality ka vaada",
  Infrastructure: "Hamari unit",
  "Send an enquiry": "Enquiry bhejein",
  "HTML sitemap": "Website ke sabhi pages",
};

export function getNavigationLabel(label: string, locale: NavigationLocale): string {
  return locale === "hi" ? hinglishLabels[label] ?? label : label;
}

export type NavChild = {
  href: string;
  label: string;
};

export type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

function getAgriculturalNav(locale: NavigationLocale): NavChild[] {
  const products =
    locale === "hi" ? hinglishAgriculturalProducts : englishAgriculturalProducts;

  return products.map((product) => ({
    href: `/products/${product.slug}`,
    label: product.name,
  }));
}

function getBrickKilnNav(locale: NavigationLocale): NavChild[] {
  const products =
    locale === "hi" ? hinglishBrickKilnProducts : englishBrickKilnProducts;

  return products.map((product) => ({
    href: `/products/${product.slug}`,
    label: product.name,
  }));
}

function getPartsNav(locale: NavigationLocale): NavChild[] {
  const pages = locale === "hi" ? hinglishPartsPages : englishPartsPages;

  return pages.map((page) => ({
    href: `/machinery-parts/${page.slug}`,
    label: page.navLabel,
  }));
}

export function getPrimaryNav(locale: NavigationLocale): NavItem[] {
  return [
    { href: locale === "hi" ? "/" : "/en", label: "Home" },
    {
      href: "/agricultural-machinery",
      label: "Agricultural Machinery",
      children: getAgriculturalNav(locale),
    },
    {
      href: "/brick-kiln-machinery",
      label: "Brick Kiln Machinery",
      children: getBrickKilnNav(locale),
    },
    {
      href: "/machinery-parts",
      label: "Machinery Parts",
      children: getPartsNav(locale),
    },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];
}

export function getFooterColumns(locale: NavigationLocale) {
  const columns: { title: string; links: NavChild[] }[] = [
    {
      title: "Agricultural machinery",
      links: [
        { href: "/agricultural-machinery", label: "All agricultural machinery" },
        ...getAgriculturalNav(locale),
      ],
    },
    {
      title: "Brick kiln machinery",
      links: [
        { href: "/brick-kiln-machinery", label: "All brick kiln machinery" },
        ...getBrickKilnNav(locale),
      ],
    },
    {
      title: "Machinery parts",
      links: [
        { href: "/machinery-parts", label: "All machinery parts" },
        ...getPartsNav(locale),
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About us" },
        { href: "/quality", label: "Quality commitment" },
        { href: "/infrastructure", label: "Infrastructure" },
        { href: "/contact", label: "Contact" },
        { href: "/enquiry", label: "Send an enquiry" },
        { href: "/sitemap-html", label: "HTML sitemap" },
      ],
    },
  ];

  return columns.map((column) => ({
    ...column,
    title: getNavigationLabel(column.title, locale),
    links: column.links.map((item) => ({
      ...item,
      label: getNavigationLabel(item.label, locale),
    })),
  }));
}
