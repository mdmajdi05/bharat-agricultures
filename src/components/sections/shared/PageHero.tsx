
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import { imageSizes, images } from "@/lib/images";

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

export default function PageHero({ kicker, title, copy, image, current, trail }: PageHeroProps) {
  return (
    <section className={`
          ba-page-hero relative overflow-hidden
          isolate bg-forest-950 text-cream
          py-[clamp(3.5rem,_12vw,_6.5rem)_clamp(2.75rem,_8vw,_4.5rem)] [&::before]:[content:""] [&::before]:absolute
          [&::before]:z-[0] [&::before]:top-[-30%] [&::before]:right-[-20%]
          [&::before]:w-[34rem] [&::before]:h-[34rem] [&::before]:rounded-full
          [&::before]:bg-[radial-gradient(circle,_rgba(216,_164,_64,_0.16),_transparent_68%)] [&::before]:pointer-events-none [&_h1]:text-[length:clamp(2.5rem,_10vw,_5.25rem)]
          [&_h1]:leading-[0.98] [&_h1_em]:text-gold-bright [&_p]:max-w-[48ch]
          [&_p]:text-muted-dark [&_p]:text-[length:clamp(0.95rem,_3vw,_1.05rem)] [&_p]:leading-[1.8]
        `}>
      {image ? (
        <div className={`
          ba-page-hero__media absolute inset-[0]
          -z-[1] [&_img]:object-cover [&_img]:[opacity:0.28]
          [&_img]:filter-[saturate(0.7)] [&::after]:[content:""] [&::after]:absolute
          [&::after]:inset-[0] [&::after]:bg-[linear-gradient(90deg,_var(--c-forest-950)_8%,_rgba(5,_19,_12,_0.72)_55%,_rgba(5,_19,_12,_0.45))]
        `}>
          <Image src={images[image as keyof typeof images]} alt="" fill priority sizes={imageSizes.full} />
        </div>
      ) : null}

      <Container>
        <div className={`
          ba-page-hero__inner relative z-[1]
          grid gap-[1.15rem] max-w-[62rem]
        `}>
          {current ? (
            <nav className={`
          ba-breadcrumb flex items-center
          gap-[0.5rem] text-[length:0.62rem] font-semibold
          tracking-[0.16em] uppercase text-[color:rgba(246,_243,_233,_0.45)]
          [&_a]:[transition:color_0.2s_var(--ease)] [&_a:hover]:text-gold-bright [&_span[aria-current="page"]]:text-gold-bright
        `} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
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
