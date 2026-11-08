import type { Metadata } from "next";
import type { Locale } from "@/lib/locale";
import { localizedAlternates, localizedPath } from "@/lib/locale";
import { site } from "@/lib/site";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  locale?: Locale;
  image?: string;
  robots?: Metadata["robots"];
};

/** Consistent per-page metadata: canonical URL, Open Graph and Twitter cards. */
export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  locale = "en",
  image,
  robots,
}: PageMeta): Metadata {
  const canonicalPath = localizedPath(path, locale);
  const url = `${site.url}${canonicalPath}`;
  const ogImage = image ?? `${site.url}/header-logo.png`;
  const brandedTitle =
    title.includes(site.name) || title.length + site.name.length + 3 > 60
      ? title
      : `${title} | ${site.name}`;

  return {
    title: { absolute: brandedTitle },
    description,
    keywords,
    ...(robots ? { robots } : {}),
    alternates: {
      canonical: canonicalPath,
      languages: localizedAlternates(path),
    },
    openGraph: {
      title: brandedTitle,
      description,
      url,
      siteName: site.name,
      locale: locale === "hi" ? "hi_IN" : "en_IN",
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
