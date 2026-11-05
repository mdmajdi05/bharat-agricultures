import type { Metadata } from "next";
import CategoryTemplate from "@/components/sections/category/CategoryTemplate";
import { getBrickKilnProducts, getCategory } from "@/data/localized";
import { images } from "@/lib/images";
import { getLocale } from "@/lib/locale";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const category = await getCategory("brick-kiln-machinery");
  const products = await getBrickKilnProducts();

  if (!category) return {};

  return createMetadata({
    title: category.metaTitle,
    description: category.metaDescription,
    path: `/${category.slug}`,
    locale,
    keywords: [
      "brick kiln machinery manufacturer India",
      "brick making machine manufacturer Sambhal",
      "pugmill machine manufacturer",
      "coal crusher for brick kiln",
      ...products.slice(0, 5).map((product) => `${product.name} manufacturer`),
    ],
    image: images[category.hero.image as keyof typeof images],
  });
}

export default async function BrickKilnMachineryPage() {
  const category = await getCategory("brick-kiln-machinery");
  const products = await getBrickKilnProducts();

  if (!category) return null;

  return <CategoryTemplate category={category} products={products} />;
}
