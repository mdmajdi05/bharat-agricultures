
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import MachineGuide from "@/components/sections/home/MachineGuide";
import PartsTeaser from "@/components/sections/home/PartsTeaser";
import FaqSection from "@/components/sections/shared/FaqSection";
import MiniCta from "@/components/sections/shared/MiniCta";
import PageHero from "@/components/sections/shared/PageHero";
import {
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
  JsonLd,
  webPageSchema,
} from "@/components/seo/StructuredData";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { agriculturalProducts, brickKilnProducts, products } from "@/data/products";
import { partsPages } from "@/data/partsPages";
import { productsPageCopy, seoMetadata } from "@/data/siteContent";
import { imageSizes, images } from "@/lib/images";
import { createMetadata } from "@/lib/seo";
import { whatsappQuoteHref } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  ...seoMetadata.products,
  path: "/products",
  image: images.wheat,
});

const cardMeta = [
  { count: agriculturalProducts.length, unit: "machines" },
  { count: brickKilnProducts.length, unit: "machines" },
  { count: partsPages.length, unit: "parts categories" },
];

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          type: "CollectionPage",
          name: seoMetadata.products.title,
          description: seoMetadata.products.description,
          path: "/products",
        })}
      />
      <JsonLd
        data={itemListSchema(
          "Bharat Agricultures product families",
          productsPageCopy.cards.map((card) => ({ name: card.title, href: card.href })),
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
        ])}
      />
      <JsonLd data={faqSchema(productsPageCopy.faqs)} />

      <PageHero
        kicker={`Product hub / ${String(products.length).padStart(2, "0")} machines`}
        title={productsPageCopy.title}
        copy={productsPageCopy.description}
        image="wheat"
        current="Products"
      />

      <section className={"ba-section relative py-[var(--section-y)]"}>
        <Container>
          <div className={`
          ba-parts-cards grid gap-[1.25rem]
          min-[700px]:grid-cols-2 min-[1000px]:grid-cols-3 min-[1000px]:gap-[1.5rem]
        `}>
            {productsPageCopy.cards.map((card, index) => (
              <Reveal key={card.href} delay={index * 80}>
                <Link href={card.href} className={`
          ba-parts-card flex flex-col
          gap-[0.55rem] h-full p-[1.5rem]
          bg-paper [border:1px_solid_var(--c-line)] rounded-md
          text-ink [transition:border-color_0.25s_var(--ease)] [&:hover]:border-gold
          [&_h3]:text-[length:1.35rem] [&_p]:text-[length:0.84rem] [&_p]:leading-[1.75]
          [&_p]:text-muted ba-parts-card--media grid
          p-[0] overflow-hidden bg-paper
        `}>
                  <div className={`
          ba-parts-card__media relative aspect-[16_/_10]
          overflow-hidden bg-cream-soft [&_img]:object-cover
          [&_img]:[transition:transform_0.6s_var(--ease)] [.ba-parts-card:hover_&_img]:[transform:scale(1.04)]
        `}>
                    <Image
                      src={images[card.image as keyof typeof images]}
                      alt={card.title}
                      fill
                      sizes={imageSizes.card}
                    />
                  </div>
                  <div className={`
          ba-parts-card-body grid content-start
          gap-[0.5rem] p-[1.2rem_1.3rem_1.45rem] [&_h2]:text-[length:1.35rem]
          [&_h3]:text-[length:1.35rem]
        `}>
                    <span className={`
          ba-parts-card__kicker text-[length:0.6rem] font-bold
          tracking-[0.16em] uppercase text-gold-deep
        `}>
                      {String(cardMeta[index].count).padStart(2, "0")} {cardMeta[index].unit}
                    </span>
                    <h2>{card.title}</h2>
                    <p>{card.copy}</p>
                    <span className={`
          ba-parts-card__link inline-flex items-center
          gap-[0.4rem] mt-auto pt-[1rem]
          text-[length:0.62rem] font-bold tracking-[0.14em]
          uppercase text-gold-deep [.ba-parts-card-body_&]:pt-[0.8rem]
        `}>
                      {card.label} <ArrowUpRight size={14} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className={`
          ba-hub-note flex flex-wrap
          items-center justify-between gap-[1rem]
          mt-[2rem] pt-[1.5rem] [border-top:1px_solid_var(--c-line)]
          [&_p]:max-w-[48ch] [&_p]:text-[length:0.86rem] [&_p]:leading-[1.8]
          [&_p]:text-muted
        `} delay={120}>
            <p>{productsPageCopy.note}</p>
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
              {productsPageCopy.noteCtaLabel} <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>
        </Container>
      </section>

      <MachineGuide />

      <PartsTeaser />

      <FaqSection
        kicker={productsPageCopy.faqKicker}
        title={productsPageCopy.faqTitle}
        copy={productsPageCopy.faqCopy}
        faqs={productsPageCopy.faqs}
        className={`
          ba-section relative py-[var(--section-y)]
          ba-section--paper bg-paper
        `}
      />

      <MiniCta title={productsPageCopy.ctaTitle} ctaLabel={productsPageCopy.ctaLabel} />
    </>
  );
}
