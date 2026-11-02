
import Image from "next/image";
import { ArrowUpRight, BadgeCheck, Boxes, Factory, ShieldCheck } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import { qualityBandCopy, qualityPoints } from "@/data/home";
import { imageSizes, images } from "@/lib/images";

const icons = [BadgeCheck, ShieldCheck, Boxes, Factory];

export default function QualityBand() {
  return (
    <section className={`
          ba-quality grid overflow-hidden
          bg-forest-900 text-cream [&_h2]:text-[length:var(--display-lg)]
          [&_h2]:text-cream [&_h2_em]:text-gold-bright min-[900px]:[grid-template-columns:1fr_1fr]
        `}>
      <div className={`
          ba-quality__media relative aspect-[16_/_11]
          min-h-[15rem] [&_img]:object-cover [&_img]:filter-[saturate(0.78)]
          [&::after]:[content:""] [&::after]:absolute [&::after]:inset-[40%_0_0]
          [&::after]:bg-[linear-gradient(0deg,_var(--c-forest-900),_transparent)] [&::after]:pointer-events-none min-[900px]:aspect-[auto]
          min-[900px]:min-h-[100%] min-[900px]:[&::after]:inset-[0] min-[900px]:[&::after]:bg-[linear-gradient(90deg,_transparent_55%,_var(--c-forest-900))]
        `}>
        <Image src={images.machining} alt={qualityBandCopy.imageAlt} fill sizes={imageSizes.half} />
      </div>

      <Reveal className={`
          ba-quality-body grid content-center
          gap-[1.2rem] p-[clamp(2.5rem,_8vw,_5rem)_var(--gutter)] min-[900px]:p-[clamp(3.5rem,_7vw,_6.5rem)_clamp(2rem,_6vw,_5.5rem)]
        `}>
        <span className={`
          ba-eyebrow inline-flex items-center
          gap-[0.6rem] font-sans text-xs
          font-bold tracking-[0.22em] uppercase
          leading-[1.4] text-gold-deep [&::before]:[content:""]
          [&::before]:w-[1.6rem] [&::before]:h-[1px] [&::before]:bg-[currentColor]
          [&::before]:shrink-0 [.ba-form-panel_&]:[display:inline-block] [.ba-form-panel_&]:mb-[0.7rem]
          [.ba-cta_&]:text-[color:rgba(10,_32,_20,_0.7)] [.ba-cta_&::before]:bg-[rgba(10,_32,_20,_0.45)] ba-eyebrow--light
          text-gold-bright
        `}>{qualityBandCopy.kicker}</span>
        <h2>
          {qualityBandCopy.title} <em>{qualityBandCopy.titleAccent}</em>
        </h2>
        <p className={`
          ba-quality__lead max-w-[40ch] text-[length:0.9rem]
          leading-[1.85] text-muted-dark
        `}>{qualityBandCopy.lead}</p>

        <ul className={`
          ba-quality__list grid gap-[0.65rem]
          my-[0.35rem] [&_li]:flex [&_li]:items-center
          [&_li]:gap-[0.6rem] [&_li]:text-[length:0.82rem] [&_li]:text-[color:rgba(246,_243,_233,_0.88)]
          [&_svg]:shrink-0 [&_svg]:text-gold min-[560px]:[grid-template-columns:1fr_1fr]
          min-[560px]:gap-[0.8rem_1.25rem]
        `}>
          {qualityPoints.map((point, index) => {
            const Icon = icons[index];
            return (
              <li key={point}>
                <Icon size={17} aria-hidden="true" /> {point}
              </li>
            );
          })}
        </ul>

        <ButtonLink href={qualityBandCopy.ctaHref} variant="gold">
          {qualityBandCopy.ctaLabel} <ArrowUpRight size={16} aria-hidden="true" />
        </ButtonLink>
      </Reveal>
    </section>
  );
}
