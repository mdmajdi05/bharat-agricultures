import { partsPages } from "@/data/partsPages";
import { products } from "@/data/products";
import { site } from "@/lib/site";

const sitePages = [
  ["Home", "/"],
  ["Agricultural Machinery", "/agricultural-machinery"],
  ["Brick Kiln Machinery", "/brick-kiln-machinery"],
  ["Machinery Parts", "/machinery-parts"],
  ["Products", "/products"],
  ["About Bharat Agricultures", "/about"],
  ["Quality", "/quality"],
  ["Manufacturing Infrastructure", "/infrastructure"],
  ["Contact", "/contact"],
] as const;

const markdownLink = (label: string, path: string) =>
  `- [${label}](${site.url}${path === "/" ? "" : path})`;

export function getLlmsContent(): string {
  const sections = [
    `# ${site.name}`,
    `> ${site.description}`,
    "",
    "Bharat Agricultures is a manufacturer of agricultural and brick kiln machinery based in Sambhal, Uttar Pradesh, India. While the manufacturing unit is located in Sambhal, the company provides Pan-India product delivery and services, catering to farmers, dealers, mills, and brick kiln operators nationwide.",
    "",
    "## Main pages",
    ...sitePages.map(([label, path]) => markdownLink(label, path)),
    "",
    "## Agricultural machinery",
    ...products
      .filter((product) => product.category === "agricultural")
      .map((product) => markdownLink(product.name, `/products/${product.slug}`)),
    "",
    "## Brick kiln machinery",
    ...products
      .filter((product) => product.category === "brick-kiln")
      .map((product) => markdownLink(product.name, `/products/${product.slug}`)),
    "",
    "## Machinery parts",
    ...partsPages.map((page) =>
      markdownLink(page.name, `/machinery-parts/${page.slug}`),
    ),
    "",
    "## Contact",
    `- Address: ${site.address}`,
    `- Phone: ${site.phone}`,
    `- Email: ${site.email}`,
    `- WhatsApp: https://wa.me/${site.whatsapp}`,
    `- Google Maps: ${site.googleMapsUrl}`,
    `- Sitemap: ${site.url}/sitemap.xml`,
    `- HTML sitemap: ${site.url}/sitemap-html`,
    "",
  ];

  return sections.join("\n");
}
