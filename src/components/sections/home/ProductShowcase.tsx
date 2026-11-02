import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProductCard from "@/components/sections/shared/ProductCard";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Product } from "@/data/products";
import { imageSizes } from "@/lib/images";

type ProductShowcaseCopy = {
  kicker: string;
  title: string;
  copy: string;
  linkLabel: string;
  linkHref: string;
  railNote: string;
};

type ProductShowcaseProps = {
  copy: ProductShowcaseCopy;
  products: Product[];
  className?: string;
  ariaLabel?: string;
};

export default function ProductShowcase({
  copy,
  products,
  className = "ba-section relative py-[var(--section-y)] ba-section--paper bg-paper showcase",
  ariaLabel = "Product categories",
}: ProductShowcaseProps) {
  return (
    <section className={className}>
      <Container>
        <Reveal className={`
          ba-showcase-head grid gap-[1.5rem]
          mb-[2rem] min-[900px]:[grid-template-columns:1fr_auto] min-[900px]:[align-items:end]
          min-[900px]:gap-[2rem] min-[900px]:mb-[2.75rem]
        `}>
          <SectionHeading kicker={copy.kicker} title={copy.title} copy={copy.copy} />
          <Link href={copy.linkHref} className={`
          ba-text-link inline-flex items-center
          gap-[0.45rem] pb-[0.35rem] [border-bottom:1px_solid_var(--c-line-strong)]
          text-[length:0.72rem] font-bold tracking-[0.09em]
          uppercase [transition:color_0.2s_var(--ease),_border-color_0.2s_var(--ease)] [&_svg]:[transition:transform_0.25s_var(--ease)]
          [&:hover]:text-gold-deep [&:hover]:border-gold-deep [&:hover_svg]:[transform:translate(2px,_-2px)]
          [.ba-contact-card_&]:mt-auto [.ba-contact-card_&]:[align-self:flex-start] [.ba-showcase-head_&]:[justify-self:start]
          min-[900px]:[.ba-showcase-head_&]:[justify-self:end] [.ba-split-body_&]:[justify-self:start] [.ba-split-body_&]:mt-[0.35rem]
          min-[900px]:[.ba-parts-teaser-head_&]:[justify-self:end]
        `}>
            {copy.linkLabel} <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </Reveal>

        <div className={`
          ba-product-rail flex gap-[1rem]
          mx-[calc(var(--gutter)_*_-1)] px-[var(--gutter)] pb-[0.5rem]
          overflow-x-auto [scroll-snap-type:x_mandatory] [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden min-[700px]:grid min-[700px]:[grid-template-columns:1fr_1fr]
          min-[700px]:gap-[1.5rem] min-[700px]:mx-[0] min-[700px]:px-[0]
          min-[700px]:overflow-visible min-[1000px]:grid-cols-3 min-[1000px]:gap-[2.25rem_1.5rem]
        `} aria-label={ariaLabel}>
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} sizes={imageSizes.card} />
          ))}
        </div>

        <p className={`
          ba-rail-note flex items-center
          gap-[0.5rem] mt-[0.85rem] text-[length:0.6rem]
          font-semibold tracking-[0.14em] uppercase
          text-muted min-[700px]:hidden
        `} aria-hidden="true">
          {copy.railNote}
        </p>
      </Container>
    </section>
  );
}
