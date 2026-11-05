import type { Metadata } from "next";
import CategoryTemplate from "@/components/sections/category/CategoryTemplate";
import { getAgriculturalProducts, getCategory } from "@/data/localized";
import { images } from "@/lib/images";
import { getLocale } from "@/lib/locale";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const category = await getCategory("agricultural-machinery");
  const products = await getAgriculturalProducts();

  if (!category) return {};

  return createMetadata({
    title: category.metaTitle,
    description: category.metaDescription,
    path: `/${category.slug}`,
    locale,
    keywords: [
      "agricultural machinery manufacturer India",
      "farm equipment manufacturer Sambhal",
      "tractor implements Uttar Pradesh",
      ...products.slice(0, 5).map((product) => `${product.name} manufacturer`),
    ],
    image: images[category.hero.image as keyof typeof images],
  });
}

export default async function AgriculturalMachineryPage() {
  const category = await getCategory("agricultural-machinery");
  const products = await getAgriculturalProducts();

  if (!category) return null;

  return <CategoryTemplate category={category} products={products} />;
}
