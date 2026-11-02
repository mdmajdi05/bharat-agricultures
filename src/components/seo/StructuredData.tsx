import { site } from "@/lib/site";

export type JsonLdData = Record<string, unknown>;

/** Renders a schema.org JSON-LD block. Data is authored locally, never user input. */
export function JsonLd({ data }: { data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function faqSchema(faqs: { q: string; a: string }[]): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.href === "/" ? "" : item.href}`,
    })),
  };
}

export function webPageSchema({
  type = "WebPage",
  name,
  description,
  path,
}: {
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  name: string;
  description: string;
  path: string;
}): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: `${site.url}${path === "/" ? "" : path}`,
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };
}

export function itemListSchema(name: string, items: { name: string; href?: string }[]): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.href ? { url: `${site.url}${item.href}` } : {}),
    })),
  };
}

export function localBusinessSchema(): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#localbusiness`,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/bharat-agricultures-logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: site.locality,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    knowsAbout: ["Agricultural Machinery", "Brick Kiln Machinery", "Machinery Parts"],
  };
}

export function productSchema(product: {
  name: string;
  description: string;
  image: string;
  slug: string;
  category: string;
  faqs: { q: string; a: string }[];
}): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${site.url}${product.image}`,
    category: product.category === "agricultural" ? "Agricultural Machinery" : "Brick Kiln Machinery",
    brand: {
      "@type": "Brand",
      name: site.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    url: `${site.url}/products/${product.slug}`,
  };
}
