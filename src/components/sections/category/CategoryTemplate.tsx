
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FaqSection from "@/components/sections/shared/FaqSection";
import MiniCta from "@/components/sections/shared/MiniCta";
import PageHero from "@/components/sections/shared/PageHero";
import ProductCard from "@/components/sections/shared/ProductCard";
import { breadcrumbSchema, faqSchema, itemListSchema, JsonLd, webPageSchema } from "@/components/seo/StructuredData";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Category } from "@/data/categories";
import type { Product } from "@/data/products";
import { getSiteContent } from "@/data/localized";
import { getUiCopy } from "@/data/ui";
import { imageSizes, images } from "@/lib/images";
import { getLocale } from "@/lib/locale";

type CategoryTemplateProps = {
  category: Category;
  products: Product[];
};

export default async function CategoryTemplate({ category, products }: CategoryTemplateProps) {
  const [{ categoryTemplateCopy }, locale] = await Promise.all([
    getSiteContent(),
    getLocale(),
  ]);
  const ui = getUiCopy(locale);

  return (
    <>
      <JsonLd
        data={webPageSchema({
          type: "CollectionPage",
          name: category.metaTitle,
          description: category.metaDescription,
          path: `/${category.slug}`,
        })}
      />
      <JsonLd
        data={itemListSchema(
          category.name,
          products.map((product) => ({ name: product.name, href: `/products/${product.slug}` })),
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: ui.breadcrumbHome, href: "/" },
          { name: category.name, href: `/${category.slug}` },
        ])}
      />
      <JsonLd data={faqSchema(category.faqs)} />

      <PageHero
        kicker={category.hero.kicker}
        title={category.hero.title}
        copy={category.hero.copy}
        image={category.hero.image}
        current={category.hero.current}
      />

      <section className={"ba-section relative py-[var(--section-y)]"}>
        <Container>
          <div className={`
          ba-split grid gap-[2rem]
          min-[900px]:[grid-template-columns:1fr_1fr] min-[900px]:items-center min-[900px]:gap-[clamp(3rem,_7vw,_6rem)]
        `}>
            <Reveal className={`
          ba-split-body grid content-center
          gap-[1.1rem] [overflow-wrap:break-word] [&_h2]:text-[length:var(--display-md)]
        `}>
              <span className={`
          ba-eyebrow inline-flex items-center
          gap-[0.6rem] font-sans text-xs
          font-bold tracking-[0.22em] uppercase
          leading-[1.4] text-gold-deep [&::before]:[content:""]
          [&::before]:w-[1.6rem] [&::before]:h-[1px] [&::before]:bg-[currentColor]
          [&::before]:shrink-0 [.ba-form-panel_&]:[display:inline-block] [.ba-form-panel_&]:mb-[0.7rem]
          [.ba-cta_&]:text-[color:rgba(10,_32,_20,_0.7)] [.ba-cta_&::before]:bg-[rgba(10,_32,_20,_0.45)]
        `}>{categoryTemplateCopy.overviewKicker}</span>
              <h2>{category.introTitle}</h2>
              {category.intro.map((paragraph) => (
                <p className={`
          ba-body-copy max-w-[46ch] text-[length:0.9rem]
          leading-[1.9] text-muted [overflow-wrap:break-word]
          [.ba-detail-grid_&]:mt-[1rem] [.ba-enquiry-aside_&]:max-w-[40ch]
        `} key={paragraph}>
                  {paragraph}
                </p>
              ))}
              <Link href={`/${category.slug}#range`} className={`
          ba-text-link inline-flex items-center
          gap-[0.45rem] pb-[0.35rem] [border-bottom:1px_solid_var(--c-line-strong)]
          text-[length:0.72rem] font-bold tracking-[0.09em]
          uppercase [transition:color_0.2s_var(--ease),_border-color_0.2s_var(--ease)] [&_svg]:[transition:transform_0.25s_var(--ease)]
          [&:hover]:text-gold-deep [&:hover]:border-gold-deep [&:hover_svg]:[transform:translate(2px,_-2px)]
          [.ba-contact-card_&]:mt-auto [.ba-contact-card_&]:[align-self:flex-start] [.ba-showcase-head_&]:[justify-self:start]
          min-[900px]:[.ba-showcase-head_&]:[justify-self:end] [.ba-split-body_&]:[justify-self:start] [.ba-split-body_&]:mt-[0.35rem]
          min-[900px]:[.ba-parts-teaser-head_&]:[justify-self:end]
        `}>
                {categoryTemplateCopy.overviewLink} <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </Reveal>

            <Reveal className={`
          ba-split__media relative aspect-[4_/_3]
          overflow-hidden rounded-lg bg-cream-soft
          [&_img]:object-cover min-[900px]:aspect-[5_/_4]
        `} delay={100}>
              <Image
                src={images[category.hero.image as keyof typeof images]}
                alt={category.hero.title}
                fill
                sizes={imageSizes.half}
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className={`
          ba-section relative py-[var(--section-y)]
          ba-section--soft bg-cream-soft guide
        `}>
        <Container>
          <Reveal className={"ba-guide__head mb-[2rem]"}>
            <SectionHeading
              kicker={categoryTemplateCopy.picksKicker}
              title={categoryTemplateCopy.picksTitle}
              copy={categoryTemplateCopy.picksCopy}
            />
          </Reveal>

          <div className={`
          ba-guide__grid grid gap-[1rem]
          min-[640px]:[grid-template-columns:1fr_1fr] min-[640px]:gap-[1.25rem] min-[1000px]:grid-cols-4
        `}>
            {category.quickPicks.map((pick, index) => (
              <Reveal className={`
          ba-guide-card grid content-start
          gap-[0.55rem] p-[clamp(1.25rem,_3.5vw,_1.6rem)] bg-paper
          [border:1px_solid_var(--c-line)] rounded-md [&_h3]:text-[length:1.35rem]
          [&_p]:text-[length:0.83rem] [&_p]:leading-[1.75] [&_p]:text-muted
        `} key={pick.label} delay={index * 80}>
                <span className={`
          ba-guide-card__num text-[length:0.62rem] font-bold
          tracking-[0.16em] text-gold-deep
        `}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{pick.label}</h3>
                <p>{pick.copy}</p>
                <ul className={`
          ba-guide-card__links grid gap-[0.4rem]
          mt-[0.35rem] pt-[0.8rem] [border-top:1px_solid_var(--c-line)]
          [&_a]:inline-flex [&_a]:items-center [&_a]:gap-[0.4rem]
          [&_a]:text-[length:0.79rem] [&_a]:font-semibold [&_a]:text-ink
          [&_a]:[transition:color_0.2s_var(--ease)] [&_a:hover]:text-gold-deep
        `}>
                  {pick.slugs.map((slug) => {
                    const product = products.find((item) => item.slug === slug);
                    if (!product) return null;
                    return (
                      <li key={slug}>
                        <Link href={`/products/${slug}`}>
                          {product.name}
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={"ba-section relative py-[var(--section-y)]"} id="range">
        <Container>
          <Reveal className={`
          ba-related__head flex flex-wrap
          items-end justify-between gap-[1rem]
          mb-[2rem] [&_h2]:text-[length:var(--display-md)]
        `}>
            <SectionHeading
              kicker={categoryTemplateCopy.rangeKicker}
              title={category.gridTitle}
              copy={category.gridCopy}
            />
          </Reveal>

          <div className={`
          ba-listing-grid grid gap-[2rem]
          min-[640px]:[grid-template-columns:1fr_1fr] min-[640px]:gap-[2rem_1.25rem] min-[1000px]:grid-cols-3
          min-[1000px]:gap-[2.75rem_1.5rem]
        `}>
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} showDescription />
            ))}
          </div>
        </Container>
      </section>

      <section className={`
          ba-section relative py-[var(--section-y)]
          ba-section--dark bg-forest-900 text-cream
        `}>
        <Container>
          <Reveal>
            <SectionHeading
              kicker={categoryTemplateCopy.benefitsKicker}
              title={categoryTemplateCopy.benefitsTitle}
              copy={categoryTemplateCopy.benefitsCopy}
              light
            />
          </Reveal>

          <div className={`
          ba-values__grid grid gap-[1.5rem]
          min-[760px]:grid-cols-3 min-[760px]:gap-[2rem] ba-values__grid--dark
          mt-[2rem]
        `}>
            {category.benefits.map((benefit, index) => (
              <Reveal className={`
          ba-value pt-[1.1rem] [border-top:1px_solid_var(--c-line)]
          [&_h3]:mt-[0.5rem] [&_h3]:text-[length:1.4rem] [&_p]:mt-[0.4rem]
          [&_p]:text-[length:0.83rem] [&_p]:leading-[1.7] [&_p]:text-muted
          ba-value--dark [border-top-color:var(--c-line-dark)] [&_h3]:text-cream
          [&_p]:text-muted-dark
        `} key={benefit.title} delay={index * 70}>
                <span className={`
          ba-value__num text-[length:0.62rem] font-bold
          tracking-[0.16em] text-gold-deep [.ba-value--dark_&]:text-gold-bright
        `}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.copy}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={"ba-section relative py-[var(--section-y)]"}>
        <Container>
          <Reveal>
            <SectionHeading
              kicker={categoryTemplateCopy.processKicker}
              title={categoryTemplateCopy.processTitle}
              copy={categoryTemplateCopy.processCopy}
            />
          </Reveal>

          <div className={`
          ba-steps grid gap-[1rem]
          min-[760px]:grid-cols-3 min-[760px]:gap-[1.25rem] ba-steps--four
          min-[760px]:max-[999px]:grid-cols-2 min-[1000px]:grid-cols-4
        `}>
            {category.process.map((step, index) => (
              <Reveal className={`
          ba-step-card grid content-start
          gap-[0.7rem] p-[clamp(1.35rem,_4vw,_1.9rem)] bg-paper
          [border:1px_solid_var(--c-line)] rounded-md [transition:transform_0.28s_var(--ease),_box-shadow_0.28s_var(--ease)]
          [&:hover]:[transform:translateY(-4px)] [&:hover]:shadow-soft [&_h2]:text-[length:clamp(1.3rem,_4vw,_1.5rem)]
          [&_h2]:leading-[1.15] [&_p]:text-[length:0.83rem] [&_p]:leading-[1.8]
          [&_p]:text-muted
        `} key={step.title} delay={index * 70}>
                <span className={`
          ba-step-card__kicker text-[length:0.6rem] font-bold
          tracking-[0.16em] uppercase text-muted
        `}>{ui.stepPrefix} {String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FaqSection
        kicker={categoryTemplateCopy.faqKicker}
        title={`${category.name}${categoryTemplateCopy.faqTitleSuffix}`}
        copy={categoryTemplateCopy.faqCopy}
        faqs={category.faqs}
        className={`
          ba-section relative py-[var(--section-y)]
          ba-section--paper bg-paper
        `}
      />

      <MiniCta title={category.ctaTitle} ctaLabel={category.ctaLabel} />
    </>
  );
}
