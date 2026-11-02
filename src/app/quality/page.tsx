
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import FaqSection from "@/components/sections/shared/FaqSection";
import MiniCta from "@/components/sections/shared/MiniCta";
import PageHero from "@/components/sections/shared/PageHero";
import { breadcrumbSchema, faqSchema, JsonLd, webPageSchema } from "@/components/seo/StructuredData";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { pageHero, qualityPageCopy, seoMetadata } from "@/data/siteContent";
import { imageSizes, images } from "@/lib/images";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  ...seoMetadata.quality,
  path: "/quality",
  image: images.welding,
});

export default function QualityPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: seoMetadata.quality.title,
          description: seoMetadata.quality.description,
          path: "/quality",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Quality", href: "/quality" },
        ])}
      />
      <JsonLd data={faqSchema(qualityPageCopy.faqs)} />

      <PageHero
        kicker={pageHero.quality.kicker}
        title={pageHero.quality.title}
        copy={pageHero.quality.copy}
        image={pageHero.quality.image}
        current={pageHero.quality.current}
      />

      <section className={"ba-section relative py-[var(--section-y)]"}>
        <Container>
          <Reveal>
            <SectionHeading
              kicker={qualityPageCopy.stepsKicker}
              title={qualityPageCopy.stepsTitle}
              copy={qualityPageCopy.stepsCopy}
            />
          </Reveal>

          <div className={`
          ba-steps grid gap-[1rem]
          min-[760px]:grid-cols-3 min-[760px]:gap-[1.25rem] ba-steps--four
          min-[760px]:max-[999px]:grid-cols-2 min-[1000px]:grid-cols-4
        `}>
            {qualityPageCopy.steps.map((step, index) => (
              <Reveal className={`
          ba-step-card grid content-start
          gap-[0.7rem] p-[clamp(1.35rem,_4vw,_1.9rem)] bg-paper
          [border:1px_solid_var(--c-line)] rounded-md [transition:transform_0.28s_var(--ease),_box-shadow_0.28s_var(--ease)]
          [&:hover]:[transform:translateY(-4px)] [&:hover]:shadow-soft [&_h2]:text-[length:clamp(1.3rem,_4vw,_1.5rem)]
          [&_h2]:leading-[1.15] [&_p]:text-[length:0.83rem] [&_p]:leading-[1.8]
          [&_p]:text-muted
        `} key={step.title} delay={index * 70}>
                <span className={`
          ba-step-card__kicker text-[length:0.6rem] font-bold
          tracking-[0.16em] uppercase text-muted
        `}>
                  {step.step} / {step.kicker}
                </span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={`
          ba-section relative py-[var(--section-y)]
          ba-section--paper bg-paper
        `}>
        <Container>
          <div className={`
          ba-split grid gap-[2rem]
          min-[900px]:[grid-template-columns:1fr_1fr] min-[900px]:items-center min-[900px]:gap-[clamp(3rem,_7vw,_6rem)]
        `}>
            <Reveal className={`
          ba-split__media relative aspect-[4_/_3]
          overflow-hidden rounded-lg bg-cream-soft
          [&_img]:object-cover min-[900px]:aspect-[5_/_4]
        `}>
              <Image
                src={images.welding}
                alt={qualityPageCopy.imageAlt}
                fill
                sizes={imageSizes.half}
              />
            </Reveal>

            <Reveal className={`
          ba-split-body grid content-center
          gap-[1.1rem] [overflow-wrap:break-word] [&_h2]:text-[length:var(--display-md)]
        `} delay={100}>
              <span className={`
          ba-eyebrow inline-flex items-center
          gap-[0.6rem] font-sans text-xs
          font-bold tracking-[0.22em] uppercase
          leading-[1.4] text-gold-deep [&::before]:[content:""]
          [&::before]:w-[1.6rem] [&::before]:h-[1px] [&::before]:bg-[currentColor]
          [&::before]:shrink-0 [.ba-form-panel_&]:[display:inline-block] [.ba-form-panel_&]:mb-[0.7rem]
          [.ba-cta_&]:text-[color:rgba(10,_32,_20,_0.7)] [.ba-cta_&::before]:bg-[rgba(10,_32,_20,_0.45)]
        `}>{qualityPageCopy.standardsKicker}</span>
              <h2>{qualityPageCopy.standardsTitle}</h2>
              <p className={`
          ba-body-copy max-w-[46ch] text-[length:0.9rem]
          leading-[1.9] text-muted [overflow-wrap:break-word]
          [.ba-detail-grid_&]:mt-[1rem] [.ba-enquiry-aside_&]:max-w-[40ch]
        `}>{qualityPageCopy.standardsCopy}</p>

              <ul className={`
          ba-check-list grid gap-[0.6rem]
          [&_li]:flex [&_li]:items-center [&_li]:gap-[0.55rem]
          [&_li]:text-[length:0.85rem] [&_li]:text-ink [&_svg]:shrink-0
          [&_svg]:text-gold-deep [.ba-parts-group_&]:mt-[0.4rem] ba-check-list--two
          mt-[1rem] [&_li]:items-start [&_li]:leading-[1.6]
          min-[640px]:[grid-template-columns:1fr_1fr] min-[640px]:gap-[0.75rem_1.75rem]
        `}>
                {qualityPageCopy.standards.map((item) => (
                  <li key={item}>
                    <Check size={15} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <ButtonLink href="/enquiry" variant="outline">
                {qualityPageCopy.ctaLabel} <ArrowUpRight size={16} aria-hidden="true" />
              </ButtonLink>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className={`
          ba-section relative py-[var(--section-y)]
          ba-section--soft bg-cream-soft
        `}>
        <Container>
          <Reveal>
            <SectionHeading
              kicker={qualityPageCopy.valuesKicker}
              title={qualityPageCopy.valuesTitle}
              copy={qualityPageCopy.valuesCopy}
            />
          </Reveal>

          <div className={`
          ba-values__grid grid gap-[1.5rem]
          min-[760px]:grid-cols-3 min-[760px]:gap-[2rem] ba-values__grid--four
          min-[640px]:[grid-template-columns:1fr_1fr] min-[1000px]:grid-cols-4
        `}>
            {qualityPageCopy.values.map((value, index) => (
              <Reveal className={`
          ba-value pt-[1.1rem] [border-top:1px_solid_var(--c-line)]
          [&_h3]:mt-[0.5rem] [&_h3]:text-[length:1.4rem] [&_p]:mt-[0.4rem]
          [&_p]:text-[length:0.83rem] [&_p]:leading-[1.7] [&_p]:text-muted
        `} key={value.title} delay={index * 70}>
                <span className={`
          ba-value__num text-[length:0.62rem] font-bold
          tracking-[0.16em] text-gold-deep [.ba-value--dark_&]:text-gold-bright
        `}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{value.title}</h3>
                <p>{value.copy}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FaqSection
        kicker={qualityPageCopy.faqKicker}
        title={qualityPageCopy.faqTitle}
        copy={qualityPageCopy.faqCopy}
        faqs={qualityPageCopy.faqs}
        className={"ba-section relative py-[var(--section-y)]"}
      />

      <MiniCta title={qualityPageCopy.ctaTitle} ctaLabel={qualityPageCopy.ctaLabel} />
    </>
  );
}
