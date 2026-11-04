import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema, JsonLd, webPageSchema } from "@/components/seo/StructuredData";
import Container from "@/components/ui/Container";
import { partsPages } from "@/data/partsPages";
import { products } from "@/data/products";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "HTML Sitemap",
  description:
    "Browse Bharat Agricultures pages, agricultural machinery, brick kiln machinery and spare parts.",
  path: "/sitemap-html",
});

const pageGroups = [
  {
    title: "Company",
    links: [
      { title: "Home", href: "/" },
      { title: "About Us", href: "/about" },
      { title: "Quality Commitment", href: "/quality" },
      { title: "Infrastructure", href: "/infrastructure" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Agricultural machinery",
    links: [
      { title: "All Agricultural Machinery", href: "/agricultural-machinery" },
      ...products
        .filter((product) => product.category === "agricultural")
        .map((product) => ({
          title: product.name,
          href: `/products/${product.slug}`,
        })),
    ],
  },
  {
    title: "Brick kiln machinery",
    links: [
      { title: "All Brick Kiln Machinery", href: "/brick-kiln-machinery" },
      ...products
        .filter((product) => product.category === "brick-kiln")
        .map((product) => ({
          title: product.name,
          href: `/products/${product.slug}`,
        })),
    ],
  },
  {
    title: "Machinery parts",
    links: [
      { title: "All Machinery Parts", href: "/machinery-parts" },
      ...partsPages.map((page) => ({
        title: page.name,
        href: `/machinery-parts/${page.slug}`,
      })),
    ],
  },
];

export default function HtmlSitemapPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: "HTML Sitemap",
          description:
            "Browse Bharat Agricultures pages, agricultural machinery, brick kiln machinery and spare parts.",
          path: "/sitemap-html",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "HTML Sitemap", href: "/sitemap-html" },
        ])}
      />
      <section className="ba-section relative py-[var(--section-y)]">
        <Container>
          <div className="mb-[2.5rem] max-w-[46rem]">
            <p className="ba-eyebrow text-gold-deep">Explore the website</p>
            <h1 className="mt-[0.8rem] text-[length:var(--display-lg)]">HTML Sitemap</h1>
            <p className="mt-[1rem] max-w-[60ch] text-[0.95rem] leading-[1.8] text-muted">
              Browse our company information, machinery ranges and product pages.
            </p>
          </div>
          <div className="grid gap-[1rem] min-[760px]:grid-cols-2 min-[1100px]:grid-cols-4">
            {pageGroups.map((group) => (
              <section
                key={group.title}
                aria-labelledby={`sitemap-${group.title.replaceAll(" ", "-")}`}
                className="rounded-lg border border-line bg-paper p-[clamp(1.2rem,3vw,1.7rem)] shadow-soft"
              >
                <h2
                  id={`sitemap-${group.title.replaceAll(" ", "-")}`}
                  className="mb-[1rem] text-[length:1.35rem]"
                >
                  {group.title}
                </h2>
                <ul className="grid gap-[0.65rem]">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[0.84rem] leading-[1.5] text-muted transition-colors hover:text-gold-deep"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
