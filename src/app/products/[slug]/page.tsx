
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import FaqSection from "@/components/sections/shared/FaqSection";
import MiniCta from "@/components/sections/shared/MiniCta";
import ProductCard from "@/components/sections/shared/ProductCard";
import { breadcrumbSchema, faqSchema, JsonLd, productSchema } from "@/components/seo/StructuredData";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { getCategory, getPartsPage, getProduct, getProducts, getSiteContent } from "@/data/localized";
import { products as allProducts } from "@/data/products";
import { getUiCopy } from "@/data/ui";
import { imageSizes } from "@/lib/images";
import { getLocale, localizedPath } from "@/lib/locale";
import { createMetadata } from "@/lib/seo";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  const locale = await getLocale();

  if (!product) return {};

  return createMetadata({
    title: product.metaTitle,
    description: product.metaDescription,
    path: `/products/${product.slug}`,
    locale,
    keywords: [
      `${product.name.toLowerCase()} manufacturer India`,
      `${product.name.toLowerCase()} machine Sambhal`,
      product.category === "agricultural" ? "agricultural machinery manufacturer" : "brick kiln machinery manufacturer",
      `${product.name.toLowerCase()} spare parts`,
    ],
    image: product.image,
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const [product, products, { productPageCopy }, locale] = await Promise.all([
    getProduct(slug),
    getProducts(),
    getSiteContent(),
    getLocale(),
  ]);

  if (!product) notFound();

  const [categoryData, relatedParts] = await Promise.all([
    getCategory(product.category === "agricultural" ? "agricultural-machinery" : "brick-kiln-machinery"),
    getPartsPage(product.category === "agricultural" ? "agricultural-parts" : "brick-kiln-parts"),
  ]);

  const ui = getUiCopy(locale);
  const category = {
    label: categoryData?.name ?? (product.category === "agricultural" ? ui.productFallback.agricultural : ui.productFallback.brickKiln),
    href: product.category === "agricultural" ? "/agricultural-machinery" : "/brick-kiln-machinery",
  };

  const related = products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={productSchema({
          name: product.name,
          description: product.description,
          image: product.image,
          slug: product.slug,
          category: product.category,
          faqs: product.faqs,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: ui.breadcrumbHome, href: "/" },
          { name: category.label, href: category.href },
          { name: product.name, href: `/products/${product.slug}` },
        ])}
      />
      <JsonLd data={faqSchema(product.faqs)} />

      <section className={`
          ba-detail-hero relative overflow-hidden
          bg-forest-950 text-cream py-[clamp(2.25rem,_7vw,_4.5rem)]
          [&_h1]:text-[length:clamp(2.4rem,_9vw,_4.75rem)] [&_h1]:leading-[0.98]
        `}>
        <Container>
          <div className={`
          ba-detail-hero__grid grid gap-[1.75rem]
          items-center min-[900px]:[grid-template-columns:1.05fr_0.95fr] min-[900px]:gap-[clamp(2.5rem,_6vw,_5rem)]
        `}>
            <div className={`
          ba-detail-hero__copy grid gap-[1rem]
          [&_>_p]:max-w-[44ch] [&_>_p]:text-[length:0.95rem] [&_>_p]:leading-[1.85]
          [&_>_p]:text-muted-dark
        `}>
              <nav className={`
          ba-breadcrumb flex items-center
          gap-[0.5rem] text-[length:0.62rem] font-semibold
          tracking-[0.16em] uppercase text-[color:rgba(246,_243,_233,_0.45)]
          [&_a]:[transition:color_0.2s_var(--ease)] [&_a:hover]:text-gold-bright [&_span[aria-current="page"]]:text-gold-bright
        `} aria-label={ui.breadcrumbAria}>
                <Link href={localizedPath("/", locale)}>{ui.breadcrumbHome}</Link>
                <span aria-hidden="true">/</span>
                <Link href={category.href}>{category.label}</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">{product.name}</span>
              </nav>

              <span className={`
          ba-eyebrow inline-flex items-center
          gap-[0.6rem] font-sans text-xs
          font-bold tracking-[0.22em] uppercase
          leading-[1.4] text-gold-deep [&::before]:[content:""]
          [&::before]:w-[1.6rem] [&::before]:h-[1px] [&::before]:bg-[currentColor]
          [&::before]:shrink-0 [.ba-form-panel_&]:[display:inline-block] [.ba-form-panel_&]:mb-[0.7rem]
          [.ba-cta_&]:text-[color:rgba(10,_32,_20,_0.7)] [.ba-cta_&::before]:bg-[rgba(10,_32,_20,_0.45)] ba-eyebrow--light
          text-gold-bright
        `}>{product.tagline}</span>
              <h1>{product.eyebrow}</h1>
              <p>{product.description}</p>

              <div className={`
          ba-detail-hero__actions flex flex-wrap
          gap-[0.65rem] mt-[0.4rem]
        `}>
                <ButtonLink href={`/enquiry?product=${product.slug}`} variant="gold">
                  {productPageCopy.quoteLabel} <ArrowUpRight size={16} aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href={category.href} variant="outlineLight">
                  {productPageCopy.allPrefix} {category.label}
                </ButtonLink>
              </div>

              <ul className={`
          ba-detail-hero__meta flex flex-wrap
          gap-[0.5rem_1rem] mt-[0.4rem] text-[length:0.64rem]
          font-semibold tracking-[0.12em] uppercase
          text-muted-dark [&_li]:inline-flex [&_li]:items-center
          [&_li]:gap-[0.45rem] [&_li::before]:[content:""] [&_li::before]:w-[0.35rem]
          [&_li::before]:h-[0.35rem] [&_li::before]:rounded-full [&_li::before]:bg-gold
        `}>
                {productPageCopy.metaPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div className={`
          ba-detail-hero__media relative aspect-[4_/_3]
          overflow-hidden rounded-lg bg-forest-800
          [&_img]:object-cover [&_img]:filter-[saturate(0.9)] min-[900px]:aspect-[5_/_4]
        `}>
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className={"ba-section relative py-[var(--section-y)]"}>
        <Container>
          <div className={`
          ba-detail-grid grid gap-[2.5rem]
          [&_h2]:mt-[0.9rem] [&_h2]:text-[length:var(--display-md)] min-[900px]:[grid-template-columns:1fr_1fr]
          min-[900px]:gap-[clamp(3rem,_7vw,_6rem)] min-[900px]:[align-items:start]
        `}>
            <Reveal>
              <span className={`
          ba-eyebrow inline-flex items-center
          gap-[0.6rem] font-sans text-xs
          font-bold tracking-[0.22em] uppercase
          leading-[1.4] text-gold-deep [&::before]:[content:""]
          [&::before]:w-[1.6rem] [&::before]:h-[1px] [&::before]:bg-[currentColor]
          [&::before]:shrink-0 [.ba-form-panel_&]:[display:inline-block] [.ba-form-panel_&]:mb-[0.7rem]
          [.ba-cta_&]:text-[color:rgba(10,_32,_20,_0.7)] [.ba-cta_&::before]:bg-[rgba(10,_32,_20,_0.45)]
        `}>{productPageCopy.overviewKicker}</span>
              <h2>
                {product.name}
                {productPageCopy.overviewTitleSuffix}
              </h2>
              {product.intro.map((paragraph) => (
                <p className={`
          ba-body-copy max-w-[46ch] text-[length:0.9rem]
          leading-[1.9] text-muted [overflow-wrap:break-word]
          [.ba-detail-grid_&]:mt-[1rem] [.ba-enquiry-aside_&]:max-w-[40ch]
        `} key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal className={`
          ba-spec-card grid content-start
          gap-[1rem] p-[clamp(1.25rem,_4vw,_1.75rem)] bg-paper
          [border:1px_solid_var(--c-line)] rounded-lg shadow-soft
          [&_h3]:text-[length:1.4rem]
        `} delay={100}>
              <h3>{productPageCopy.specTitle}</h3>
              <dl className={`
          ba-spec-table grid [&_>_div]:flex
          [&_>_div]:items-baseline [&_>_div]:justify-between [&_>_div]:gap-[1rem]
          [&_>_div]:py-[0.7rem] [&_>_div]:[border-bottom:1px_solid_var(--c-line)] [&_>_div]:text-[length:0.84rem]
          [&_dt]:text-muted [&_dd]:text-[right] [&_dd]:font-semibold
          [&_dd]:text-ink
        `}>
                {product.specs.map((spec) => (
                  <div key={spec.label}>
                    <dt>{spec.label}</dt>
                    <dd>{spec.value}</dd>
                  </div>
                ))}
              </dl>
              <p className={`
          ba-spec-card__note text-[length:0.72rem] leading-[1.7]
          text-muted
        `}>{productPageCopy.specNote}</p>
              <ButtonLink href={`/enquiry?product=${product.slug}`} variant="dark">
                {productPageCopy.specCta}
              </ButtonLink>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className={`
          ba-section relative py-[var(--section-y)]
          ba-section--soft bg-cream-soft
        `}>
        <Container>
          <div className={`
          ba-detail-grid grid gap-[2.5rem]
          [&_h2]:mt-[0.9rem] [&_h2]:text-[length:var(--display-md)] min-[900px]:[grid-template-columns:1fr_1fr]
          min-[900px]:gap-[clamp(3rem,_7vw,_6rem)] min-[900px]:[align-items:start]
        `}>
            <Reveal>
              <span className={`
          ba-eyebrow inline-flex items-center
          gap-[0.6rem] font-sans text-xs
          font-bold tracking-[0.22em] uppercase
          leading-[1.4] text-gold-deep [&::before]:[content:""]
          [&::before]:w-[1.6rem] [&::before]:h-[1px] [&::before]:bg-[currentColor]
          [&::before]:shrink-0 [.ba-form-panel_&]:[display:inline-block] [.ba-form-panel_&]:mb-[0.7rem]
          [.ba-cta_&]:text-[color:rgba(10,_32,_20,_0.7)] [.ba-cta_&::before]:bg-[rgba(10,_32,_20,_0.45)]
        `}>{productPageCopy.useCaseKicker}</span>
              <h2>{productPageCopy.useCaseTitle}</h2>
              <p className={`
          ba-body-copy max-w-[46ch] text-[length:0.9rem]
          leading-[1.9] text-muted [overflow-wrap:break-word]
          [.ba-detail-grid_&]:mt-[1rem] [.ba-enquiry-aside_&]:max-w-[40ch]
        `}>{productPageCopy.useCaseCopy}</p>
              <ul className={`
          ba-check-list grid gap-[0.6rem]
          [&_li]:flex [&_li]:items-center [&_li]:gap-[0.55rem]
          [&_li]:text-[length:0.85rem] [&_li]:text-ink [&_svg]:shrink-0
          [&_svg]:text-gold-deep [.ba-parts-group_&]:mt-[0.4rem]
        `}>
                {product.useCases.map((item) => (
                  <li key={item}>
                    <Check size={15} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <span className={`
          ba-eyebrow inline-flex items-center
          gap-[0.6rem] font-sans text-xs
          font-bold tracking-[0.22em] uppercase
          leading-[1.4] text-gold-deep [&::before]:[content:""]
          [&::before]:w-[1.6rem] [&::before]:h-[1px] [&::before]:bg-[currentColor]
          [&::before]:shrink-0 [.ba-form-panel_&]:[display:inline-block] [.ba-form-panel_&]:mb-[0.7rem]
          [.ba-cta_&]:text-[color:rgba(10,_32,_20,_0.7)] [.ba-cta_&::before]:bg-[rgba(10,_32,_20,_0.45)]
        `}>{productPageCopy.componentsKicker}</span>
              <h2>{productPageCopy.componentsTitle}</h2>
              <p className={`
          ba-body-copy max-w-[46ch] text-[length:0.9rem]
          leading-[1.9] text-muted [overflow-wrap:break-word]
          [.ba-detail-grid_&]:mt-[1rem] [.ba-enquiry-aside_&]:max-w-[40ch]
        `}>{productPageCopy.componentsCopy}</p>
              <div className={`
          ba-parts-list grid content-start
          [border-top:1px_solid_var(--c-line)] [&_>_div]:flex [&_>_div]:items-center
          [&_>_div]:gap-[0.8rem] [&_>_div]:py-[1rem] [&_>_div]:[border-bottom:1px_solid_var(--c-line)]
          [&_>_div]:text-[length:0.95rem]
        `}>
                {product.items.map((item) => (
                  <div key={item}>
                    <span className={`
          ba-parts-list__icon grid [place-items:center]
          w-[2rem] h-[2rem] shrink-0
          rounded-full bg-[rgba(216,_164,_64,_0.16)] text-gold-deep
        `}>
                      <Check size={15} aria-hidden="true" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className={"ba-section relative py-[var(--section-y)]"}>
        <Container>
          <Reveal>
            <SectionHeading
              kicker={productPageCopy.buildKicker}
              title={productPageCopy.buildTitle}
              copy={productPageCopy.buildCopy}
            />
          </Reveal>

          <div className={`
          ba-detail-features grid gap-[1.25rem]
          mt-[2rem] min-[700px]:grid-cols-2 min-[700px]:gap-[1.5rem]
          min-[1000px]:grid-cols-3
        `}>
            {product.features.map((feature, index) => (
              <Reveal className={`
          ba-detail-feature grid content-start
          gap-[0.5rem] pt-[1.1rem] [border-top:1px_solid_var(--c-line)]
          [&_h3]:text-[length:1.3rem] [&_p]:text-[length:0.85rem] [&_p]:leading-[1.8]
          [&_p]:text-muted
        `} key={feature.title} delay={index * 70}>
                <span className={`
          ba-detail-feature__num text-[length:0.62rem] font-bold
          tracking-[0.16em] text-gold-deep
        `}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className={`
          ba-detail-benefits mt-[2.25rem] p-[clamp(1.25rem,_4vw,_1.75rem)]
          bg-paper [border:1px_solid_var(--c-line)] rounded-lg
          [&_h3]:mb-[1rem] [&_h3]:text-[length:1.35rem]
        `} delay={100}>
            <h3>{productPageCopy.benefitsTitle}</h3>
            <ul className={`
          ba-check-list grid gap-[0.6rem]
          [&_li]:flex [&_li]:items-center [&_li]:gap-[0.55rem]
          [&_li]:text-[length:0.85rem] [&_li]:text-ink [&_svg]:shrink-0
          [&_svg]:text-gold-deep [.ba-parts-group_&]:mt-[0.4rem] ba-check-list--two
          mt-[1rem] [&_li]:items-start [&_li]:leading-[1.6]
          min-[640px]:[grid-template-columns:1fr_1fr] min-[640px]:gap-[0.75rem_1.75rem]
        `}>
              {product.benefits.map((benefit) => (
                <li key={benefit}>
                  <Check size={15} aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <FaqSection
        kicker={productPageCopy.faqKicker}
        title={`${product.name}${productPageCopy.faqTitleSuffix}`}
        copy={productPageCopy.faqCopy}
        faqs={product.faqs}
        className={`
          ba-section relative py-[var(--section-y)]
          ba-section--paper bg-paper
        `}
      />

      <section className={"ba-section relative py-[var(--section-y)]"}>
        <Container>
          <Reveal className={`
          ba-related__head flex flex-wrap
          items-end justify-between gap-[1rem]
          mb-[2rem] [&_h2]:text-[length:var(--display-md)]
        `}>
            <h2>{productPageCopy.relatedTitle}</h2>
            <Link href={category.href} className={`
          ba-text-link inline-flex items-center
          gap-[0.45rem] pb-[0.35rem] [border-bottom:1px_solid_var(--c-line-strong)]
          text-[length:0.72rem] font-bold tracking-[0.09em]
          uppercase [transition:color_0.2s_var(--ease),_border-color_0.2s_var(--ease)] [&_svg]:[transition:transform_0.25s_var(--ease)]
          [&:hover]:text-gold-deep [&:hover]:border-gold-deep [&:hover_svg]:[transform:translate(2px,_-2px)]
          [.ba-contact-card_&]:mt-auto [.ba-contact-card_&]:[align-self:flex-start] [.ba-showcase-head_&]:[justify-self:start]
          min-[900px]:[.ba-showcase-head_&]:[justify-self:end] [.ba-split-body_&]:[justify-self:start] [.ba-split-body_&]:mt-[0.35rem]
          min-[900px]:[.ba-parts-teaser-head_&]:[justify-self:end]
        `}>
              {productPageCopy.allPrefix} {category.label} <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            {relatedParts && (
              <Link href={`/machinery-parts/${relatedParts.slug}`} className={`
          ba-text-link inline-flex items-center
          gap-[0.45rem] pb-[0.35rem] [border-bottom:1px_solid_var(--c-line-strong)]
          text-[length:0.72rem] font-bold tracking-[0.09em]
          uppercase [transition:color_0.2s_var(--ease),_border-color_0.2s_var(--ease)] [&_svg]:[transition:transform_0.25s_var(--ease)]
          [&:hover]:text-gold-deep [&:hover]:border-gold-deep [&:hover_svg]:[transform:translate(2px,_-2px)]
        `}>
                {relatedParts.name} <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            )}
          </Reveal>

          <div className={`
          ba-related-grid grid gap-[2rem]
          min-[640px]:[grid-template-columns:1fr_1fr] min-[1000px]:grid-cols-3 min-[1000px]:gap-[2rem_1.5rem]
        `}>
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} sizes={imageSizes.grid} />
            ))}
          </div>
        </Container>
      </section>

      <MiniCta
        title={`${product.name}${productPageCopy.ctaTitleSuffix}`}
        ctaLabel={productPageCopy.ctaLabel}
        href={`/enquiry?product=${product.slug}`}
      />
    </>
  );
}
