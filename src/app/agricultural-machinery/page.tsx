import type { Metadata } from "next";
import CategoryTemplate from "@/components/sections/category/CategoryTemplate";
import { agriculturalCategory } from "@/data/categories";
import { agriculturalProducts } from "@/data/products";
import { images } from "@/lib/images";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: agriculturalCategory.metaTitle,
  description: agriculturalCategory.metaDescription,
  path: `/${agriculturalCategory.slug}`,
  image: images[agriculturalCategory.hero.image as keyof typeof images],
});

export default function AgriculturalMachineryPage() {
  return (
    <CategoryTemplate category={agriculturalCategory} products={agriculturalProducts} />
  );
}
