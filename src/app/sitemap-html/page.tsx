import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema, JsonLd, webPageSchema } from "@/components/seo/StructuredData";
import Container from "@/components/ui/Container";
import { getPartsPages, getProducts } from "@/data/localized";
import { getUiCopy } from "@/data/ui";
import { getLocale } from "@/lib/locale";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = getUiCopy(locale).htmlSitemap;
  return createMetadata({
    title: copy.title,
    description: copy.description,
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
  const copy = getUiCopy(locale).htmlSitemap;
  const groups = copy.groups;
  const pageGroups = [
    {
      title: groups.company,
      links: [
        { title: groups.home, href: "/" },
        { title: groups.about, href: "/about" },
        { title: groups.quality, href: "/quality" },
        { title: groups.infrastructure, href: "/infrastructure" },
        { title: groups.contact, href: "/contact" },
      ],
    },
    {
      title: groups.agricultural,
      links: [
        {
          title: groups.allAgricultural,
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
      title: groups.brickKiln,
      links: [
        {
          title: groups.allBrickKiln,
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
      title: groups.parts,
      links: [
        {
          title: groups.allParts,
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
          name: copy.title,
          description: copy.description,
          path: "/sitemap-html",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: groups.home, href: "/" },
          { name: copy.breadcrumb, href: "/sitemap-html" },
        ])}
      />
      <section className="ba-section relative py-[var(--section-y)]">
        <Container>
          <div className="mb-[2.5rem] max-w-[46rem]">
            <p className="ba-eyebrow text-gold-deep">
              {copy.exploreKicker}
            </p>
            <h1 className="mt-[0.8rem] text-[length:var(--display-lg)]">
              {copy.title}
            </h1>
            <p className="mt-[1rem] max-w-[60ch] text-[0.95rem] leading-[1.8] text-muted">
              {copy.intro}
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
