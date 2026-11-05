import { getLocale, type Locale } from "@/lib/locale";

import * as englishHome from "@/data/en/home";
import * as englishSiteContent from "@/data/en/siteContent";
import { categories as englishCategories } from "@/data/en/categories";
import { partsPages as englishPartsPages } from "@/data/en/partsPages";
import { agriculturalProducts as englishAgriculturalProducts, brickKilnProducts as englishBrickKilnProducts, products as englishProducts } from "@/data/en/products";

import * as hinglishHome from "@/data/home";
import * as hinglishSiteContent from "@/data/siteContent";
import { categories as hinglishCategories } from "@/data/categories";
import { partsPages as hinglishPartsPages } from "@/data/partsPages";
import { agriculturalProducts as hinglishAgriculturalProducts, brickKilnProducts as hinglishBrickKilnProducts, products as hinglishProducts } from "@/data/products";

import type { Category } from "@/data/categories";
import type { PartsPage } from "@/data/partsPages";
import type { Product } from "@/data/products";

export type SiteContent = typeof hinglishSiteContent;
export type HomeContent = typeof hinglishHome;

// This assignment makes TypeScript report any export missing from the English
// dataset, keeping both locales structurally in sync.
const englishSiteContentChecked: SiteContent = englishSiteContent;
const englishHomeContentChecked: HomeContent = englishHome;

function pick<T>(locale: Locale, english: T, hinglish: T): T {
  return locale === "hi" ? hinglish : english;
}

/** Copy + SEO metadata for the current request locale. */
export async function getSiteContent(): Promise<SiteContent> {
  return pick(await getLocale(), englishSiteContentChecked, hinglishSiteContent);
}

/** Homepage-only copy such as capabilities and the quality band. */
export async function getHomeContent(): Promise<HomeContent> {
  return pick(await getLocale(), englishHomeContentChecked, hinglishHome);
}

/** Product catalogue for the current request locale. */
export async function getProducts(): Promise<Product[]> {
  return pick(await getLocale(), englishProducts, hinglishProducts);
}

export async function getAgriculturalProducts(): Promise<Product[]> {
  return pick(await getLocale(), englishAgriculturalProducts, hinglishAgriculturalProducts);
}

export async function getBrickKilnProducts(): Promise<Product[]> {
  return pick(await getLocale(), englishBrickKilnProducts, hinglishBrickKilnProducts);
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  return (await getProducts()).find((product) => product.slug === slug);
}

export async function getProductsBySlugs(slugs: string[]): Promise<Product[]> {
  const products = await getProducts();
  return slugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product): product is Product => Boolean(product));
}

/** Category content for the current request locale. */
export async function getCategories(): Promise<Category[]> {
  return pick(await getLocale(), englishCategories, hinglishCategories);
}

export async function getCategory(slug: string): Promise<Category | undefined> {
  return (await getCategories()).find((category) => category.slug === slug);
}

/** Machinery-parts pages for the current request locale. */
export async function getPartsPages(): Promise<PartsPage[]> {
  return pick(await getLocale(), englishPartsPages, hinglishPartsPages);
}

export async function getPartsPage(slug: string): Promise<PartsPage | undefined> {
  return (await getPartsPages()).find((page) => page.slug === slug);
}

/** True when the current request is rendering the Hinglish version. */
export async function isHinglish(): Promise<boolean> {
  return (await getLocale()) === "hi";
}
