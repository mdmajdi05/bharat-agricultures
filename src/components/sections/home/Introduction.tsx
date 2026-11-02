
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { homeIntroCopy } from "@/data/siteContent";
import { imageSizes, images } from "@/lib/images";

export default function Introduction() {
  return (
    <section className={`
          ba-section relative py-[var(--section-y)]
          ba-intro overflow-hidden [&_h2]:text-[length:var(--display-lg)]
          [&_h2_em]:text-gold-deep
        `}>
      <Container>
        <div className={`
          ba-intro__grid grid gap-[2.5rem]
          min-[900px]:[grid-template-columns:1.05fr_0.95fr] min-[900px]:items-center min-[900px]:gap-[clamp(3rem,_7vw,_6.5rem)]
        `}>
          <Reveal className={`
          ba-intro__copy grid content-start
          gap-[1.25rem] min-[900px]:gap-[1.5rem]
        `}>
            <span className={`
          ba-eyebrow inline-flex items-center
          gap-[0.6rem] font-sans text-xs
          font-bold tracking-[0.22em] uppercase
          leading-[1.4] text-gold-deep [&::before]:[content:""]
          [&::before]:w-[1.6rem] [&::before]:h-[1px] [&::before]:bg-[currentColor]
          [&::before]:shrink-0 [.ba-form-panel_&]:[display:inline-block] [.ba-form-panel_&]:mb-[0.7rem]
          [.ba-cta_&]:text-[color:rgba(10,_32,_20,_0.7)] [.ba-cta_&::before]:bg-[rgba(10,_32,_20,_0.45)]
        `}>{homeIntroCopy.kicker}</span>
            <h2>
              {homeIntroCopy.title}
              <br />
              <em>{homeIntroCopy.titleAccent}</em>
            </h2>
            <div className={`
          ba-intro__lead grid gap-[1rem]
          max-w-[40rem] [&_p]:text-[length:0.92rem] [&_p]:leading-[1.9]
          [&_p]:text-muted
        `}>
              {homeIntroCopy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ButtonLink href={homeIntroCopy.linkHref} variant="outline" className={"ba-intro__link [justify-self:start]"}>
              {homeIntroCopy.linkLabel} <ArrowUpRight size={16} aria-hidden="true" />
            </ButtonLink>
          </Reveal>

          <Reveal className={"ba-intro__visual relative"} delay={120}>
            <div className={`
          ba-intro__figure relative aspect-[4_/_5]
          max-h-[38rem] overflow-hidden rounded-lg
          bg-cream-soft [&_img]:object-cover
        `}>
              <Image
                src={images.tractor}
                alt={homeIntroCopy.imageAlt}
                fill
                sizes={imageSizes.half}
              />
            </div>
            <div className={`
          ba-intro__badge absolute left-[0.9rem]
          right-[0.9rem] bottom-[0.9rem] flex
          items-center gap-[0.9rem] p-[1rem_1.1rem]
          bg-[rgba(252,_251,_246,_0.95)] [border:1px_solid_rgba(10,_28,_17,_0.08)] rounded-md
          shadow-soft backdrop-blur-[blur(10px)] [&_strong]:font-display
          [&_strong]:text-[length:2rem] [&_strong]:font-medium [&_strong]:leading-none
          [&_strong]:text-forest-800 [&_span]:text-[length:0.6rem] [&_span]:font-bold
          [&_span]:tracking-[0.14em] [&_span]:uppercase [&_span]:leading-[1.6]
          [&_span]:text-muted
        `}>
              <strong>{homeIntroCopy.badgeValue}</strong>
              <span>{homeIntroCopy.badgeLabel}</span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
