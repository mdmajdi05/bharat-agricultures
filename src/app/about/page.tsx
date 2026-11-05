
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FaqSection from "@/components/sections/shared/FaqSection";
import MiniCta from "@/components/sections/shared/MiniCta";
import PageHero from "@/components/sections/shared/PageHero";
import { breadcrumbSchema, faqSchema, JsonLd, webPageSchema } from "@/components/seo/StructuredData";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  getSiteContent,
  isHinglish,
} from "@/data/localized";
import { imageSizes, images } from "@/lib/images";
import { getLocale } from "@/lib/locale";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { seoMetadata } = await getSiteContent();
  return createMetadata({
    ...seoMetadata.about,
    path: "/about",
    locale,
    keywords: [
      "Bharat Agricultures",
      "agricultural machinery manufacturer Sambhal",
      "brick kiln equipment manufacturer Uttar Pradesh",
      "farm machinery company India",
    ],
    image: images.barn,
  });
}

export default async function AboutPage() {
  const {
    aboutBodyCopy,
    aboutFaqCopy,
    aboutProcess,
    aboutSections,
    aboutStats,
    aboutValues,
    pageHero,
    seoMetadata,
  } = await getSiteContent();
  const hinglish = await isHinglish();

  return (
    <>
      <JsonLd
        data={webPageSchema({
          type: "AboutPage",
          name: seoMetadata.about.title,
          description: seoMetadata.about.description,
          path: "/about",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "About Us", href: "/about" },
        ])}
      />
      <JsonLd data={faqSchema(aboutFaqCopy.faqs)} />

      <PageHero
        kicker={pageHero.about.kicker}
        title={pageHero.about.title}
        copy={pageHero.about.copy}
        image={pageHero.about.image}
        current={pageHero.about.current}
      />

      <section className={"ba-section relative py-[var(--section-y)]"}>
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
                src={images.barn}
                alt={aboutBodyCopy.imageAlt}
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
        `}>{aboutSections.introKicker}</span>
              <h2>{aboutBodyCopy.title}</h2>
              {aboutBodyCopy.paragraphs.map((paragraph) => (
                <p className={`
          ba-body-copy max-w-[46ch] text-[length:0.9rem]
          leading-[1.9] text-muted [overflow-wrap:break-word]
          [.ba-detail-grid_&]:mt-[1rem] [.ba-enquiry-aside_&]:max-w-[40ch]
        `} key={paragraph}>
                  {paragraph}
                </p>
              ))}
              <ButtonLink href={aboutBodyCopy.linkHref} variant="outline">
                {aboutBodyCopy.linkLabel} <ArrowUpRight size={16} aria-hidden="true" />
              </ButtonLink>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className={`
          ba-stats-band bg-forest-900 text-cream
          py-[clamp(2.5rem,_6vw,_3.5rem)]
        `}>
        <Container>
          <div className={`
          ba-stats-band__grid grid grid-cols-2
          gap-[1.75rem_1.25rem] min-[760px]:grid-cols-3 min-[760px]:gap-[2rem]
        `}>
            {aboutStats.map((fact) => (
              <div className={"stat"} key={fact.label}>
                <span className={`
          ba-stat__value block font-display
          text-[length:clamp(2rem,_7vw,_3rem)] font-medium leading-none
          text-gold-bright
        `}>{fact.value}</span>
                <span className={`
          ba-stat__label block mt-[0.45rem]
          text-[length:0.6rem] font-semibold tracking-[0.14em]
          uppercase leading-normal text-[color:rgba(246,_243,_233,_0.6)]
        `}>{fact.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={`
          ba-section relative py-[var(--section-y)]
          ba-section--paper bg-paper
        `}>
        <Container>
          <Reveal>
            <SectionHeading
              kicker={aboutSections.valuesKicker}
              title={aboutSections.valuesTitle}
              copy={aboutSections.valuesCopy}
            />
          </Reveal>

          <div className={`
          ba-values mt-[1.5rem] pt-[clamp(2rem,_6vw,_3.5rem)]
          [border-top:1px_solid_var(--c-line)]
        `}>
            <div className={`
          ba-values__grid grid gap-[1.5rem]
          min-[760px]:grid-cols-3 min-[760px]:gap-[2rem]
        `}>
              {aboutValues.map((value, index) => (
                <Reveal className={`
          ba-value pt-[1.1rem] [border-top:1px_solid_var(--c-line)]
          [&_h3]:mt-[0.5rem] [&_h3]:text-[length:1.4rem] [&_p]:mt-[0.4rem]
          [&_p]:text-[length:0.83rem] [&_p]:leading-[1.7] [&_p]:text-muted
        `} key={value.title} delay={index * 80}>
                  <span className={`
          ba-value__num text-[length:0.62rem] font-bold
          tracking-[0.16em] text-gold-deep [.ba-value--dark_&]:text-gold-bright
        `}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{value.title}</h3>
                  <p>{value.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className={"ba-section relative py-[var(--section-y)]"}>
        <Container>
          <Reveal>
            <SectionHeading
              kicker={aboutSections.processKicker}
              title={aboutSections.processTitle}
              copy={aboutSections.processCopy}
            />
          </Reveal>

          <div className={`
          ba-steps grid gap-[1rem]
          min-[760px]:grid-cols-3 min-[760px]:gap-[1.25rem] ba-steps--four
          min-[760px]:max-[999px]:grid-cols-2 min-[1000px]:grid-cols-4
        `}>
            {aboutProcess.map((step, index) => (
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
        `}>Step {String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className={`
          ba-hub-note flex flex-wrap
          items-center justify-between gap-[1rem]
          mt-[2rem] pt-[1.5rem] [border-top:1px_solid_var(--c-line)]
          [&_p]:max-w-[48ch] [&_p]:text-[length:0.86rem] [&_p]:leading-[1.8]
          [&_p]:text-muted
        `} delay={120}>
            <p>{aboutSections.processNote}</p>
            <Link href="/infrastructure" className={`
          ba-text-link inline-flex items-center
          gap-[0.45rem] pb-[0.35rem] [border-bottom:1px_solid_var(--c-line-strong)]
          text-[length:0.72rem] font-bold tracking-[0.09em]
          uppercase [transition:color_0.2s_var(--ease),_border-color_0.2s_var(--ease)] [&_svg]:[transition:transform_0.25s_var(--ease)]
          [&:hover]:text-gold-deep [&:hover]:border-gold-deep [&:hover_svg]:[transform:translate(2px,_-2px)]
          [.ba-contact-card_&]:mt-auto [.ba-contact-card_&]:[align-self:flex-start] [.ba-showcase-head_&]:[justify-self:start]
          min-[900px]:[.ba-showcase-head_&]:[justify-self:end] [.ba-split-body_&]:[justify-self:start] [.ba-split-body_&]:mt-[0.35rem]
          min-[900px]:[.ba-parts-teaser-head_&]:[justify-self:end]
        `}>
              {hinglish ? "Infrastructure dekhein" : "View infrastructure"} <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>
        </Container>
      </section>

      <FaqSection
        kicker={aboutFaqCopy.kicker}
        title={aboutFaqCopy.title}
        copy={aboutFaqCopy.copy}
        faqs={aboutFaqCopy.faqs}
        className={`
          ba-section relative py-[var(--section-y)]
          ba-section--paper bg-paper
        `}
      />

      <MiniCta title={aboutSections.ctaTitle} ctaLabel={aboutSections.ctaLabel} />
    </>
  );
}
