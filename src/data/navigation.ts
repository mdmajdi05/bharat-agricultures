import { agriculturalProducts, brickKilnProducts } from "@/data/products";
import { partsPages } from "@/data/partsPages";

export type NavChild = {
  href: string;
  label: string;
};

export type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

export const agriculturalNav: NavChild[] = agriculturalProducts.map((product) => ({
  href: `/products/${product.slug}`,
  label: product.name,
}));

export const brickKilnNav: NavChild[] = brickKilnProducts.map((product) => ({
  href: `/products/${product.slug}`,
  label: product.name,
}));

export const partsNav: NavChild[] = partsPages.map((page) => ({
  href: `/machinery-parts/${page.slug}`,
  label: page.navLabel,
}));

export const primaryNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/agricultural-machinery", label: "Agricultural Machinery", children: agriculturalNav },
  { href: "/brick-kiln-machinery", label: "Brick Kiln Machinery", children: brickKilnNav },
  { href: "/machinery-parts", label: "Machinery Parts", children: partsNav },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export const footerColumns: { title: string; links: NavChild[] }[] = [
  {
    title: "Agricultural machinery",
    links: [{ href: "/agricultural-machinery", label: "All agricultural machinery" }, ...agriculturalNav],
  },
  {
    title: "Brick kiln machinery",
    links: [{ href: "/brick-kiln-machinery", label: "All brick kiln machinery" }, ...brickKilnNav],
  },
  {
    title: "Machinery parts",
    links: [{ href: "/machinery-parts", label: "All machinery parts" }, ...partsNav],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/quality", label: "Quality commitment" },
      { href: "/infrastructure", label: "Infrastructure" },
      { href: "/contact", label: "Contact" },
      { href: "/enquiry", label: "Send an enquiry" },
    ],
  },
];
