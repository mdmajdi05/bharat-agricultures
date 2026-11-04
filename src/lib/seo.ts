import type { Metadata } from "next";
import { site } from "@/lib/site";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

/** Consistent per-page metadata: canonical URL, Open Graph and Twitter cards. */
export function createMetadata({ title, description, path = "/", image }: PageMeta): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  const ogImage = image ?? `${site.url}/header-logo.png`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: [{ url: ogImage, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [ogImage],
    },
  };
}
