
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import FaqSection from "@/components/sections/shared/FaqSection";
import MiniCta from "@/components/sections/shared/MiniCta";
import PageHero from "@/components/sections/shared/PageHero";
import ProductCard from "@/components/sections/shared/ProductCard";
import { breadcrumbSchema, faqSchema, itemListSchema, JsonLd, webPageSchema } from "@/components/seo/StructuredData";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { getNavigationLabel } from "@/data/navigation";
import { getProductsBySlugs, getSiteContent } from "@/data/localized";
import { getUiCopy } from "@/data/ui";
import type { PartsPage } from "@/data/partsPages";
import { getLocale } from "@/lib/locale";
import { imageSizes, images } from "@/lib/images";
import { whatsappQuoteHref } from "@/lib/site";

type PartsTemplateProps = {
  page: PartsPage;
};

export default async function PartsTemplate({ page }: PartsTemplateProps) {
  const [{ partsTemplateCopy }, related, locale] = await Promise.all([
    getSiteContent(),
    getProductsBySlugs(page.relatedProductSlugs),
    getLocale(),
  ]);
  const partsLabel = getNavigationLabel("Machinery Parts", locale);
  const ui = getUiCopy(locale);

  return (
    <>
      <JsonLd
        data={webPageSchema({
          type: "CollectionPage",
          name: page.metaTitle,
          description: page.metaDescription,
          path: `/machinery-parts/${page.slug}`,
        })}
      />
      <JsonLd
        data={itemListSchema(
          page.name,
          page.groups.map((group) => ({ name: group.title })),
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: ui.breadcrumbHome, href: "/" },
          { name: partsLabel, href: "/machinery-parts" },
          { name: page.name, href: `/machinery-parts/${page.slug}` },
        ])}
      />
      <JsonLd data={faqSchema(page.faqs)} />

      <PageHero
        kicker={page.hero.kicker}
        title={page.hero.title}
        copy={page.hero.copy}
        image={page.hero.image}
        current={page.hero.current}
        trail={[{ href: "/machinery-parts", label: partsLabel }]}
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
        `}>{partsTemplateCopy.overviewKicker}</span>
              <h2>{page.introTitle}</h2>
              {page.intro.map((paragraph) => (
                <p className={`
          ba-body-copy max-w-[46ch] text-[length:0.9rem]
          leading-[1.9] text-muted [overflow-wrap:break-word]
          [.ba-detail-grid_&]:mt-[1rem] [.ba-enquiry-aside_&]:max-w-[40ch]
        `} key={paragraph}>
                  {paragraph}
                </p>
              ))}
              <Link href={whatsappQuoteHref()} target="_blank" rel="noopener noreferrer" className={`
          ba-text-link inline-flex items-center
          gap-[0.45rem] pb-[0.35rem] [border-bottom:1px_solid_var(--c-line-strong)]
          text-[length:0.72rem] font-bold tracking-[0.09em]
          uppercase [transition:color_0.2s_var(--ease),_border-color_0.2s_var(--ease)] [&_svg]:[transition:transform_0.25s_var(--ease)]
          [&:hover]:text-gold-deep [&:hover]:border-gold-deep [&:hover_svg]:[transform:translate(2px,_-2px)]
          [.ba-contact-card_&]:mt-auto [.ba-contact-card_&]:[align-self:flex-start] [.ba-showcase-head_&]:[justify-self:start]
          min-[900px]:[.ba-showcase-head_&]:[justify-self:end] [.ba-split-body_&]:[justify-self:start] [.ba-split-body_&]:mt-[0.35rem]
          min-[900px]:[.ba-parts-teaser-head_&]:[justify-self:end]
        `}>
                {partsTemplateCopy.overviewLink} <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </Reveal>

            <Reveal className={`
          ba-split__media relative aspect-[4_/_3]
          overflow-hidden rounded-lg bg-cream-soft
          [&_img]:object-cover min-[900px]:aspect-[5_/_4]
        `} delay={100}>
              <Image
                src={images[page.hero.image as keyof typeof images]}
                alt={page.hero.title}
                fill
                sizes={imageSizes.half}
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className={`
          ba-section relative py-[var(--section-y)]
          ba-section--soft bg-cream-soft
        `}>
        <Container>
          <Reveal>
            <SectionHeading
              kicker={partsTemplateCopy.groupsKicker}
              title={partsTemplateCopy.groupsTitle}
              copy={partsTemplateCopy.groupsCopy}
            />
          </Reveal>

          <div className={`
          ba-parts-groups grid gap-[1.25rem]
          mt-[2rem] min-[700px]:[grid-template-columns:1fr_1fr] min-[700px]:gap-[1.75rem]
        `}>
            {page.groups.map((group, index) => (
              <Reveal className={`
          ba-parts-group grid content-start
          gap-[0.55rem] pt-[1.1rem] [border-top:1px_solid_var(--c-line)]
          [&_h3]:text-[length:1.3rem] [&_p]:text-[length:0.84rem] [&_p]:leading-[1.75]
          [&_p]:text-muted
        `} key={group.title} delay={index * 70}>
                <span className={`
          ba-parts-group__num text-[length:0.62rem] font-bold
          tracking-[0.16em] text-gold-deep
        `}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{group.title}</h3>
                <p>{group.copy}</p>
                <ul className={`
          ba-check-list grid gap-[0.6rem]
          [&_li]:flex [&_li]:items-center [&_li]:gap-[0.55rem]
          [&_li]:text-[length:0.85rem] [&_li]:text-ink [&_svg]:shrink-0
          [&_svg]:text-gold-deep [.ba-parts-group_&]:mt-[0.4rem]
        `}>
                  {group.items.map((item) => (
                    <li key={item}>
                      <Check size={15} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

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
        `}>{partsTemplateCopy.checksKicker}</span>
              <h2>{page.checksTitle}</h2>
              <p className={`
          ba-body-copy max-w-[46ch] text-[length:0.9rem]
          leading-[1.9] text-muted [overflow-wrap:break-word]
          [.ba-detail-grid_&]:mt-[1rem] [.ba-enquiry-aside_&]:max-w-[40ch]
        `}>{partsTemplateCopy.checksCopy}</p>
            </Reveal>

            <Reveal className={`
          ba-checks [.ba-enquiry-aside_&]:mt-[0.5rem] grid
          [border-top:1px_solid_var(--c-line)]
        `} delay={100}>
              {page.checks.map((check, index) => (
                <div className={`
          ba-checks__row flex items-start
          gap-[1rem] py-[1.1rem] [border-bottom:1px_solid_var(--c-line)]
          [&_h3]:text-[length:1.1rem] [&_p]:text-[length:0.85rem] [&_p]:leading-[1.75]
          [&_p]:text-muted
        `} key={check}>
                  <span className={`
          ba-checks__num pt-[0.25rem] text-[length:0.62rem]
          font-bold tracking-[0.14em] text-gold-deep
        `}>{String(index + 1).padStart(2, "0")}</span>
                  <p>{check}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      <section className={`
          ba-section relative py-[var(--section-y)]
          ba-section--paper bg-paper
        `}>
        <Container>
          <Reveal className={`
          ba-related__head flex flex-wrap
          items-end justify-between gap-[1rem]
          mb-[2rem] [&_h2]:text-[length:var(--display-md)]
        `}>
            <h2>{partsTemplateCopy.relatedTitle}</h2>
            <Link href="/machinery-parts" className={`
          ba-text-link inline-flex items-center
          gap-[0.45rem] pb-[0.35rem] [border-bottom:1px_solid_var(--c-line-strong)]
          text-[length:0.72rem] font-bold tracking-[0.09em]
          uppercase [transition:color_0.2s_var(--ease),_border-color_0.2s_var(--ease)] [&_svg]:[transition:transform_0.25s_var(--ease)]
          [&:hover]:text-gold-deep [&:hover]:border-gold-deep [&:hover_svg]:[transform:translate(2px,_-2px)]
          [.ba-contact-card_&]:mt-auto [.ba-contact-card_&]:[align-self:flex-start] [.ba-showcase-head_&]:[justify-self:start]
          min-[900px]:[.ba-showcase-head_&]:[justify-self:end] [.ba-split-body_&]:[justify-self:start] [.ba-split-body_&]:mt-[0.35rem]
          min-[900px]:[.ba-parts-teaser-head_&]:[justify-self:end]
        `}>
              {partsTemplateCopy.relatedLink} <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>

          <div className={`
          ba-related-grid grid gap-[2rem]
          min-[640px]:[grid-template-columns:1fr_1fr] min-[1000px]:grid-cols-3 min-[1000px]:gap-[2rem_1.5rem]
        `}>
            {related.map((product) => (
              <ProductCard key={product.slug} product={product} sizes={imageSizes.grid} />
            ))}
          </div>
        </Container>
      </section>

      <FaqSection
        kicker={partsTemplateCopy.faqKicker}
        title={`${page.name}${partsTemplateCopy.faqTitleSuffix}`}
        copy={partsTemplateCopy.faqCopy}
        faqs={page.faqs}
      />

      <MiniCta title={partsTemplateCopy.ctaTitle} ctaLabel={partsTemplateCopy.ctaLabel} />
    </>
  );
}
