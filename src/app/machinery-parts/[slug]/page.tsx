import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PartsTemplate from "@/components/sections/category/PartsTemplate";
import { getPartsPage } from "@/data/localized";
import { partsPages as allPartsPages } from "@/data/partsPages";
import { getLocale } from "@/lib/locale";
import { createMetadata } from "@/lib/seo";

type PartsPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allPartsPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PartsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPartsPage(slug);
  const locale = await getLocale();

  if (!page) return {};

  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/machinery-parts/${page.slug}`,
    locale,
    keywords: [
      `${page.name.toLowerCase()} manufacturer India`,
      `${page.name.toLowerCase()} spare parts`,
      "machinery parts supplier Sambhal",
    ],
  });
}

export default async function PartsDetailPage({ params }: PartsPageProps) {
  const { slug } = await params;
  const page = await getPartsPage(slug);

  if (!page) notFound();

  return <PartsTemplate page={page} />;
}
