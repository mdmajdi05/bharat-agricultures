import { products } from "@/data/products";
import { site } from "@/lib/site";

/** Organization structured data for search engines. */
export default function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/bharat-agricultures-logo.png`,
    description: site.description,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: site.locality,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      email: site.email,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["Hindi", "English"],
    },
    knowsAbout: products.map((product) => product.name),
  };

  return (
    <script
      type="application/ld+json"
      // Data is authored locally and contains no user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
