import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PartsTemplate from "@/components/sections/category/PartsTemplate";
import { getPartsPage, partsPages } from "@/data/partsPages";
import { createMetadata } from "@/lib/seo";

type PartsPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return partsPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PartsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPartsPage(slug);

  if (!page) return {};

  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/machinery-parts/${page.slug}`,
  });
}

export default async function PartsDetailPage({ params }: PartsPageProps) {
  const { slug } = await params;
  const page = getPartsPage(slug);

  if (!page) notFound();

  return <PartsTemplate page={page} />;
}
