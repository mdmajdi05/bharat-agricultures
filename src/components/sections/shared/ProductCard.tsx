
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";
import { imageSizes } from "@/lib/images";

type ProductCardProps = {
  product: Product;
  showDescription?: boolean;
  sizes?: string;
};

export default function ProductCard({ product, showDescription = false, sizes = imageSizes.grid }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className={`
          ba-product-card flex flex-col
          min-w-0 [scroll-snap-align:start] [.ba-product-rail_&]:flex-[0_0_82%]
          min-[700px]:[.ba-product-rail_&]:flex-[1_1_auto]
        `}>
      <div className={`
          ba-product-card__media relative aspect-[4_/_3]
          overflow-hidden rounded-md bg-cream-soft
          [&_img]:object-cover [&_img]:[transition:transform_0.8s_var(--ease),_filter_0.5s_var(--ease)] [&_img]:filter-[saturate(0.92)]
          [&::after]:[content:""] [&::after]:absolute [&::after]:inset-[45%_0_0]
          [&::after]:bg-[linear-gradient(0deg,_rgba(5,_19,_12,_0.35),_transparent)] [&::after]:pointer-events-none [.ba-product-card:hover_&_img]:[transform:scale(1.05)]
          [.ba-product-card:hover_&_img]:filter-[saturate(1.05)]
        `}>
        <Image src={product.image} alt={product.name} fill sizes={sizes} />
        <span className={`
          ba-product-card__index absolute top-[0.85rem]
          left-[0.85rem] z-[1] p-[0.38rem_0.65rem]
          bg-[rgba(252,_251,_246,_0.94)] rounded-full text-[length:0.6rem]
          font-bold tracking-[0.16em] text-forest-800
        `}>{product.number}</span>
        <span className={`
          ba-product-card__arrow absolute right-[0.85rem]
          bottom-[0.85rem] z-[1] grid
          [place-items:center] w-[2.65rem] h-[2.65rem]
          rounded-full bg-gold text-forest-950
          [transition:transform_0.3s_var(--ease),_background-color_0.3s_var(--ease)] [.ba-product-card:hover_&]:[transform:translate(2px,_-2px)] [.ba-product-card:hover_&]:bg-gold-bright
        `} aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      </div>

      <div className={`
          ba-product-card__body flex items-start
          justify-between gap-[1rem] mt-[0.2rem]
          p-[1rem_0.15rem] [border-bottom:1px_solid_var(--c-line)] [&_>_svg]:shrink-0
          [&_>_svg]:mt-[0.45rem] [&_>_svg]:text-muted [&_>_svg]:[transition:transform_0.3s_var(--ease),_color_0.3s_var(--ease)]
          [.ba-product-card:hover_&_>_svg]:[transform:translateX(4px)] [.ba-product-card:hover_&_>_svg]:text-gold-deep
        `}>
        <div>
          <span className={`
          ba-product-card__eyebrow text-[length:0.6rem] font-bold
          tracking-[0.18em] uppercase text-muted
        `}>{product.eyebrow}</span>
          <h3 className={`
          ba-product-card__title mt-[0.35rem] font-display
          text-[length:clamp(1.15rem,_3.4vw,_1.4rem)] font-medium tracking-[-0.02em]
          leading-[1.15]
        `}>{product.name}</h3>
        </div>
        <ArrowRight size={18} aria-hidden="true" />
      </div>

      {showDescription ? <p className={`
          ba-card-description mt-[0.7rem] max-w-[42ch]
          text-[length:0.8rem] leading-[1.75] text-muted
        `}>{product.description}</p> : null}
    </Link>
  );
}
