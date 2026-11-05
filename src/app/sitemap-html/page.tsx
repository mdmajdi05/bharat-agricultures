import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema, JsonLd, webPageSchema } from "@/components/seo/StructuredData";
import Container from "@/components/ui/Container";
import { getPartsPages, getProducts } from "@/data/localized";
import { getLocale } from "@/lib/locale";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isHinglish = locale === "hi";
  return createMetadata({
    title: isHinglish ? "Website ke sabhi pages" : "HTML Sitemap",
    description: isHinglish
      ? "Bharat Agricultures ke pages, kheti ki machinery, eent bhatta machinery aur spare parts ek jagah dekhein."
      : "Browse Bharat Agricultures pages, agricultural machinery, brick kiln machinery and spare parts.",
    path: "/sitemap-html",
    locale,
    keywords: ["Bharat Agricultures website pages", "agricultural machinery catalogue", "brick kiln equipment catalogue"],
  });
}

export default async function HtmlSitemapPage() {
  const [products, partsPages, locale] = await Promise.all([
    getProducts(),
    getPartsPages(),
    getLocale(),
  ]);
  const isHinglish = locale === "hi";
  const pageGroups = [
    {
      title: isHinglish ? "Company" : "Company",
      links: [
        { title: isHinglish ? "Home" : "Home", href: "/" },
        { title: isHinglish ? "Hamare baare mein" : "About Us", href: "/about" },
        { title: isHinglish ? "Quality ka vaada" : "Quality Commitment", href: "/quality" },
        { title: isHinglish ? "Hamari unit" : "Infrastructure", href: "/infrastructure" },
        { title: isHinglish ? "Sampark" : "Contact", href: "/contact" },
      ],
    },
    {
      title: isHinglish ? "Kheti ki machinery" : "Agricultural machinery",
      links: [
        {
          title: isHinglish ? "Kheti ki saari machinery" : "All Agricultural Machinery",
          href: "/agricultural-machinery",
        },
        ...products
          .filter((product) => product.category === "agricultural")
          .map((product) => ({
            title: product.name,
            href: `/products/${product.slug}`,
          })),
      ],
    },
    {
      title: isHinglish ? "Eent bhatta machinery" : "Brick kiln machinery",
      links: [
        {
          title: isHinglish ? "Eent bhatta ki saari machinery" : "All Brick Kiln Machinery",
          href: "/brick-kiln-machinery",
        },
        ...products
          .filter((product) => product.category === "brick-kiln")
          .map((product) => ({
            title: product.name,
            href: `/products/${product.slug}`,
          })),
      ],
    },
    {
      title: isHinglish ? "Machinery ke parts" : "Machinery parts",
      links: [
        {
          title: isHinglish ? "Saare machinery parts" : "All Machinery Parts",
          href: "/machinery-parts",
        },
        ...partsPages.map((page) => ({
          title: page.name,
          href: `/machinery-parts/${page.slug}`,
        })),
      ],
    },
  ];

  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: isHinglish ? "Website ke sabhi pages" : "HTML Sitemap",
          description: isHinglish
            ? "Bharat Agricultures ke pages, kheti ki machinery, eent bhatta machinery aur spare parts ek jagah dekhein."
            : "Browse Bharat Agricultures pages, agricultural machinery, brick kiln machinery and spare parts.",
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
            <p className="ba-eyebrow text-gold-deep">
              {isHinglish ? "Website explore karein" : "Explore the website"}
            </p>
            <h1 className="mt-[0.8rem] text-[length:var(--display-lg)]">
              {isHinglish ? "Website ke sabhi pages" : "HTML Sitemap"}
            </h1>
            <p className="mt-[1rem] max-w-[60ch] text-[0.95rem] leading-[1.8] text-muted">
              {isHinglish
                ? "Company ki jaankari, machinery range aur product pages ek jagah dekhein."
                : "Browse our company information, machinery ranges and product pages."}
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
