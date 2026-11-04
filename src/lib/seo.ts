import type { Metadata } from "next";
import { site } from "@/lib/site";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  robots?: Metadata["robots"];
};

/** Consistent per-page metadata: canonical URL, Open Graph and Twitter cards. */
export function createMetadata({
  title,
  description,
  path = "/",
  image,
  robots,
}: PageMeta): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  const ogImage = image ?? `${site.url}/header-logo.png`;
  const brandedTitle = title.includes(site.name)
    ? title
    : `${title} | ${site.name}`;

  return {
    title: { absolute: brandedTitle },
    description,
    ...(robots ? { robots } : {}),
    alternates: { canonical: path },
    openGraph: {
      title: brandedTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: [{ url: ogImage, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [ogImage],
    },
  };
}
