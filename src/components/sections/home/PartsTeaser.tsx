
import Link from "next/link";
import { ArrowUpRight, Cog } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { homePartsCopy } from "@/data/siteContent";

export default function PartsTeaser() {
  return (
    <section className={`
          ba-section relative py-[var(--section-y)]
          ba-section--dark bg-forest-900 text-cream
          parts-teaser
        `}>
      <Container>
        <Reveal className={`
          ba-parts-teaser-head grid gap-[1.5rem]
          mb-[2.25rem] min-[900px]:[grid-template-columns:1fr_auto] min-[900px]:[align-items:end]
        `}>
          <SectionHeading
            kicker={homePartsCopy.kicker}
            title={homePartsCopy.title}
            copy={homePartsCopy.copy}
            light
          />
          <Link href={homePartsCopy.linkHref} className={`
          ba-text-link inline-flex items-center
          gap-[0.45rem] pb-[0.35rem] [border-bottom:1px_solid_var(--c-line-strong)]
          text-[length:0.72rem] font-bold tracking-[0.09em]
          uppercase [transition:color_0.2s_var(--ease),_border-color_0.2s_var(--ease)] [&_svg]:[transition:transform_0.25s_var(--ease)]
          [&:hover]:text-gold-deep [&:hover]:border-gold-deep [&:hover_svg]:[transform:translate(2px,_-2px)]
          [.ba-contact-card_&]:mt-auto [.ba-contact-card_&]:[align-self:flex-start] [.ba-showcase-head_&]:[justify-self:start]
          min-[900px]:[.ba-showcase-head_&]:[justify-self:end] [.ba-split-body_&]:[justify-self:start] [.ba-split-body_&]:mt-[0.35rem]
          min-[900px]:[.ba-parts-teaser-head_&]:[justify-self:end] ba-text-link--light border-line-dark-strong
          text-cream [&:hover]:text-gold-bright [&:hover]:border-gold-bright
        `}>
            {homePartsCopy.linkLabel} <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </Reveal>

        <div className={`
          ba-parts-teaser__grid grid gap-[1.25rem]
          min-[700px]:grid-cols-2 min-[1000px]:grid-cols-3 min-[1000px]:gap-[1.5rem]
        `}>
          {homePartsCopy.cards.map((card, index) => (
            <Reveal key={card.href} delay={index * 80}>
              <Link href={card.href} className={`
          ba-parts-card flex flex-col
          gap-[0.55rem] h-full p-[1.5rem]
          bg-paper [border:1px_solid_var(--c-line)] rounded-md
          text-ink [transition:border-color_0.25s_var(--ease)] [&:hover]:border-gold
          [&_h3]:text-[length:1.35rem] [&_p]:text-[length:0.84rem] [&_p]:leading-[1.75]
          [&_p]:text-muted
        `}>
                <span className={`
          ba-parts-card__icon grid [place-items:center]
          w-[2.6rem] h-[2.6rem] mb-[0.35rem]
          rounded-full bg-[rgba(216,_164,_64,_0.16)] text-gold-deep
        `}>
                  <Cog size={18} aria-hidden="true" />
                </span>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
                <span className={`
          ba-parts-card__link inline-flex items-center
          gap-[0.4rem] mt-auto pt-[1rem]
          text-[length:0.62rem] font-bold tracking-[0.14em]
          uppercase text-gold-deep [.ba-parts-card-body_&]:pt-[0.8rem]
        `}>
                  View parts <ArrowUpRight size={14} aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
