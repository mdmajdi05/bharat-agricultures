
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { chromeCopy } from "@/data/siteContent";
import { phoneHref } from "@/lib/site";

/** Thumb-reach actions for mobile. Hidden on desktop via CSS. */
export default function MobileCtaBar() {
  return (
    <div className={`
          ba-mobile-cta fixed left-[0]
          right-[0] bottom-[0] z-[60]
          grid [grid-template-columns:auto_1fr] gap-[0.5rem]
          p-[0.55rem_0.9rem_calc(0.55rem_+_env(safe-area-inset-bottom))] bg-[color-mix(in_srgb,_var(--c-cream)_94%,_transparent)] [border-top:1px_solid_var(--c-line)]
          backdrop-blur-[blur(18px)] [-webkit-backdrop-filter:blur(18px)] min-[1200px]:hidden
        `} aria-label={chromeCopy.quickActions}>
      <a href={phoneHref} className={`
          ba-btn inline-flex items-center
          justify-center gap-[0.55rem] min-h-[3rem]
          p-[0.8rem_1.4rem] [border:1px_solid_transparent] rounded-full
          font-sans text-[length:0.72rem] font-bold
          tracking-[0.09em] uppercase leading-none
          [transition:background-color_0.25s_var(--ease),_color_0.25s_var(--ease),_border-color_0.25s_var(--ease),_transform_0.25s_var(--ease)] [&_svg]:shrink-0 [&_svg]:[transition:transform_0.25s_var(--ease)]
          [&:hover_svg]:[transform:translate(2px,_-2px)] [.ba-mobile-cta_&]:min-h-[2.8rem] [.ba-mobile-cta_&]:px-[0.95rem]
          [.ba-mobile-cta_&]:text-[length:0.65rem] [.ba-quality-body_&]:[justify-self:start]
          [.ba-split-body_&]:[justify-self:start] [.ba-split-body_&]:mt-[0.35rem] [.ba-not-found_&]:[justify-self:start]
          [.ba-not-found_&]:mt-[0] [.ba-spec-card_&]:[justify-self:start] ba-btn--outline
          border-line-strong text-ink [&:hover]:bg-forest-900
          [&:hover]:border-forest-900 [&:hover]:text-cream [.ba-mobile-cta_&]:gap-[0.4rem]
        `}>
        <Phone size={15} aria-hidden="true" /> {chromeCopy.callCta}
      </a>
      <Link href="/enquiry" className={`
          ba-btn inline-flex items-center
          justify-center gap-[0.55rem] min-h-[3rem]
          p-[0.8rem_1.4rem] [border:1px_solid_transparent] rounded-full
          font-sans text-[length:0.72rem] font-bold
          tracking-[0.09em] uppercase leading-none
          [transition:background-color_0.25s_var(--ease),_color_0.25s_var(--ease),_border-color_0.25s_var(--ease),_transform_0.25s_var(--ease)] [&_svg]:shrink-0 [&_svg]:[transition:transform_0.25s_var(--ease)]
          [&:hover_svg]:[transform:translate(2px,_-2px)] [.ba-mobile-cta_&]:min-h-[2.8rem] [.ba-mobile-cta_&]:px-[0.95rem]
          [.ba-mobile-cta_&]:text-[length:0.65rem] [.ba-quality-body_&]:[justify-self:start]
          [.ba-split-body_&]:[justify-self:start] [.ba-split-body_&]:mt-[0.35rem] [.ba-not-found_&]:[justify-self:start]
          [.ba-not-found_&]:mt-[0] [.ba-spec-card_&]:[justify-self:start] ba-btn--dark
          bg-forest-900 text-cream [&:hover]:bg-forest-700
        `}>
        {chromeCopy.quoteCta} <ArrowUpRight size={15} aria-hidden="true" />
      </Link>
    </div>
  );
}
