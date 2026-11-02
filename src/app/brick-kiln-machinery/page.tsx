import type { Metadata } from "next";
import CategoryTemplate from "@/components/sections/category/CategoryTemplate";
import { brickKilnCategory } from "@/data/categories";
import { brickKilnProducts } from "@/data/products";
import { images } from "@/lib/images";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: brickKilnCategory.metaTitle,
  description: brickKilnCategory.metaDescription,
  path: `/${brickKilnCategory.slug}`,
  image: images[brickKilnCategory.hero.image as keyof typeof images],
});

export default function BrickKilnMachineryPage() {
  return (
    <CategoryTemplate category={brickKilnCategory} products={brickKilnProducts} />
  );
}
