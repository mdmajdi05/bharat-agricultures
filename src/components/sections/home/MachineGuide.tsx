
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { homeMachineGuideCopy } from "@/data/siteContent";

export default function MachineGuide() {
  return (
    <section className={`
          ba-section relative py-[var(--section-y)]
          guide
        `}>
      <Container>
        <Reveal className={"ba-guide__head mb-[2rem]"}>
          <SectionHeading
            kicker={homeMachineGuideCopy.kicker}
            title={homeMachineGuideCopy.title}
            copy={homeMachineGuideCopy.copy}
          />
        </Reveal>

        <div className={`
          ba-guide__grid grid gap-[1rem]
          min-[640px]:[grid-template-columns:1fr_1fr] min-[640px]:gap-[1.25rem] min-[1000px]:grid-cols-4
        `}>
          {homeMachineGuideCopy.groups.map((group, index) => (
            <Reveal className={`
          ba-guide-card grid content-start
          gap-[0.55rem] p-[clamp(1.25rem,_3.5vw,_1.6rem)] bg-paper
          [border:1px_solid_var(--c-line)] rounded-md [&_h3]:text-[length:1.35rem]
          [&_p]:text-[length:0.83rem] [&_p]:leading-[1.75] [&_p]:text-muted
        `} key={group.label} delay={index * 80}>
              <span className={`
          ba-guide-card__num text-[length:0.62rem] font-bold
          tracking-[0.16em] text-gold-deep
        `}>{String(index + 1).padStart(2, "0")}</span>
              <h3>{group.label}</h3>
              <p>{group.copy}</p>
              <ul className={`
          ba-guide-card__links grid gap-[0.4rem]
          mt-[0.35rem] pt-[0.8rem] [border-top:1px_solid_var(--c-line)]
          [&_a]:inline-flex [&_a]:items-center [&_a]:gap-[0.4rem]
          [&_a]:text-[length:0.79rem] [&_a]:font-semibold [&_a]:text-ink
          [&_a]:[transition:color_0.2s_var(--ease)] [&_a:hover]:text-gold-deep
        `}>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      {link.label}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className={`
          ba-guide__foot flex flex-wrap
          items-center justify-between gap-[1rem]
          mt-[2rem] pt-[1.5rem] [border-top:1px_solid_var(--c-line)]
          [&_p]:max-w-[48ch] [&_p]:text-[length:0.85rem] [&_p]:leading-[1.8]
          [&_p]:text-muted
        `} delay={120}>
          <p>{homeMachineGuideCopy.note}</p>
          <Link href={homeMachineGuideCopy.linkHref} className={`
          ba-text-link inline-flex items-center
          gap-[0.45rem] pb-[0.35rem] [border-bottom:1px_solid_var(--c-line-strong)]
          text-[length:0.72rem] font-bold tracking-[0.09em]
          uppercase [transition:color_0.2s_var(--ease),_border-color_0.2s_var(--ease)] [&_svg]:[transition:transform_0.25s_var(--ease)]
          [&:hover]:text-gold-deep [&:hover]:border-gold-deep [&:hover_svg]:[transform:translate(2px,_-2px)]
          [.ba-contact-card_&]:mt-auto [.ba-contact-card_&]:[align-self:flex-start] [.ba-showcase-head_&]:[justify-self:start]
          min-[900px]:[.ba-showcase-head_&]:[justify-self:end] [.ba-split-body_&]:[justify-self:start] [.ba-split-body_&]:mt-[0.35rem]
          min-[900px]:[.ba-parts-teaser-head_&]:[justify-self:end]
        `}>
            {homeMachineGuideCopy.linkLabel} <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
