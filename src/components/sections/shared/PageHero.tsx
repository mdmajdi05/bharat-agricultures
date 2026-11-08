
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import { getUiCopy } from "@/data/ui";
import { imageSizes, images } from "@/lib/images";
import { getLocale, localizedPath } from "@/lib/locale";

export type TrailItem = {
  href: string;
  label: string;
};

type PageHeroProps = {
  kicker: string;
  title: ReactNode;
  copy?: string;
  /** Key from the `images` map, e.g. `wheat`. */
  image?: string;
  /** Current page label for the breadcrumb. */
  current?: string;
  /** Extra breadcrumb levels between Home and the current page. */
  trail?: TrailItem[];
};

export default async function PageHero({ kicker, title, copy, image, current, trail }: PageHeroProps) {
  const locale = await getLocale();
  const ui = getUiCopy(locale);
  return (
    <section className={`
          ba-page-hero relative overflow-hidden
          isolate bg-forest-950 text-cream
          py-[clamp(3.5rem,_12vw,_6.5rem)_clamp(2.75rem,_8vw,_4.5rem)]
          [&_h1]:text-[length:clamp(2.5rem,_10vw,_5.25rem)]
          [&_h1]:leading-[0.98] [&_h1_em]:text-gold-bright [&_p]:max-w-[48ch]
          [&_p]:text-muted-dark [&_p]:text-[length:clamp(0.95rem,_3vw,_1.05rem)] [&_p]:leading-[1.8]
          [&_h1]:[text-shadow:0_2px_20px_rgba(3,14,8,0.95)]
          [&_p]:[text-shadow:0_1px_14px_rgba(3,14,8,0.95)]
          [&_.ba-eyebrow]:[text-shadow:0_1px_10px_rgba(3,14,8,0.9)]
        `}>
      {image ? (
        <div className={`
          ba-page-hero__media absolute inset-[0]
          -z-[1] [&_img]:object-cover
        `}>
          <Image src={images[image as keyof typeof images]} alt="" fill priority sizes={imageSizes.full} />
        </div>
      ) : null}

      <Container>
        <div className={`
          ba-page-hero__inner relative z-[1]
          grid gap-[1.15rem] max-w-[62rem]
          rounded-[1.25rem] border border-white/10
          bg-[linear-gradient(135deg,rgba(3,14,8,0.82),rgba(3,14,8,0.52))]
          p-[clamp(1.2rem,_3vw,_2rem)]
          shadow-[0_20px_60px_rgba(3,14,8,0.35)]
        `}>
          {current ? (
            <nav className={`
          ba-breadcrumb flex items-center
          gap-[0.5rem] text-[length:0.62rem] font-semibold
          tracking-[0.16em] uppercase text-[color:rgba(246,_243,_233,_0.45)]
          [&_a]:[transition:color_0.2s_var(--ease)] [&_a:hover]:text-gold-bright [&_span[aria-current="page"]]:text-gold-bright
        `} aria-label={ui.breadcrumbAria}>
              <Link href={localizedPath("/", locale)}>{ui.breadcrumbHome}</Link>
              {trail?.map((item) => (
                <span key={item.href} className={`
          ba-breadcrumb__group inline-flex items-center
          gap-[0.5rem]
        `}>
                  <span aria-hidden="true">/</span>
                  <Link href={item.href}>{item.label}</Link>
                </span>
              ))}
              <span aria-hidden="true">/</span>
              <span aria-current="page">{current}</span>
            </nav>
          ) : null}

          <span className={`
          ba-eyebrow inline-flex items-center
          gap-[0.6rem] font-sans text-xs
          font-bold tracking-[0.22em] uppercase
          leading-[1.4] text-gold-deep [&::before]:[content:""]
          [&::before]:w-[1.6rem] [&::before]:h-[1px] [&::before]:bg-[currentColor]
          [&::before]:shrink-0 [.ba-form-panel_&]:[display:inline-block] [.ba-form-panel_&]:mb-[0.7rem]
          [.ba-cta_&]:text-[color:rgba(10,_32,_20,_0.7)] [.ba-cta_&::before]:bg-[rgba(10,_32,_20,_0.45)] ba-eyebrow--light
          text-gold-bright
        `}>{kicker}</span>
          <h1>{title}</h1>
          {copy ? <p>{copy}</p> : null}
        </div>
      </Container>
    </section>
  );
}
