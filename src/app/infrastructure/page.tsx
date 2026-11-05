
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import FaqSection from "@/components/sections/shared/FaqSection";
import MiniCta from "@/components/sections/shared/MiniCta";
import PageHero from "@/components/sections/shared/PageHero";
import { breadcrumbSchema, faqSchema, JsonLd, webPageSchema } from "@/components/seo/StructuredData";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { getSiteContent } from "@/data/localized";
import { imageSizes, images } from "@/lib/images";
import { getLocale } from "@/lib/locale";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const [locale, { seoMetadata }] = await Promise.all([getLocale(), getSiteContent()]);
  return createMetadata({
    ...seoMetadata.infrastructure,
    path: "/infrastructure",
    locale,
    keywords: [
      "machinery manufacturing unit Sambhal",
      "agricultural machinery fabrication Uttar Pradesh",
      "industrial machinery assembly India",
      "Bharat Agricultures factory",
    ],
    image: images.warehouse,
  });
}

export default async function InfrastructurePage() {
  const { infrastructurePageCopy, pageHero, seoMetadata } = await getSiteContent();

  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: seoMetadata.infrastructure.title,
          description: seoMetadata.infrastructure.description,
          path: "/infrastructure",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Infrastructure", href: "/infrastructure" },
        ])}
      />
      <JsonLd data={faqSchema(infrastructurePageCopy.faqs)} />

      <PageHero
        kicker={pageHero.infrastructure.kicker}
        title={pageHero.infrastructure.title}
        copy={pageHero.infrastructure.copy}
        image={pageHero.infrastructure.image}
        current={pageHero.infrastructure.current}
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
                src={images.machining}
                alt={infrastructurePageCopy.imageAlt}
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
        `}>{infrastructurePageCopy.introKicker}</span>
              <h2>{infrastructurePageCopy.introTitle}</h2>
              {infrastructurePageCopy.intro.map((paragraph) => (
                <p className={`
          ba-body-copy max-w-[46ch] text-[length:0.9rem]
          leading-[1.9] text-muted [overflow-wrap:break-word]
          [.ba-detail-grid_&]:mt-[1rem] [.ba-enquiry-aside_&]:max-w-[40ch]
        `} key={paragraph}>
                  {paragraph}
                </p>
              ))}
              <ButtonLink href="/agricultural-machinery" variant="outline">
                {infrastructurePageCopy.introLinkLabel} <ArrowUpRight size={16} aria-hidden="true" />
              </ButtonLink>
            </Reveal>
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
              kicker={infrastructurePageCopy.pillarsKicker}
              title={infrastructurePageCopy.pillarsTitle}
              copy={infrastructurePageCopy.pillarsCopy}
            />
          </Reveal>

          <div className={`
          ba-values mt-[1.5rem] pt-[clamp(2rem,_6vw,_3.5rem)]
          [border-top:1px_solid_var(--c-line)]
        `}>
            <div className={`
          ba-values__grid grid gap-[1.5rem]
          min-[760px]:grid-cols-3 min-[760px]:gap-[2rem] ba-values__grid--four
          min-[640px]:[grid-template-columns:1fr_1fr] min-[1000px]:grid-cols-4
        `}>
              {infrastructurePageCopy.pillars.map((pillar, index) => (
                <Reveal className={`
          ba-value pt-[1.1rem] [border-top:1px_solid_var(--c-line)]
          [&_h3]:mt-[0.5rem] [&_h3]:text-[length:1.4rem] [&_p]:mt-[0.4rem]
          [&_p]:text-[length:0.83rem] [&_p]:leading-[1.7] [&_p]:text-muted
        `} key={pillar.title} delay={index * 70}>
                  <span className={`
          ba-value__num text-[length:0.62rem] font-bold
          tracking-[0.16em] text-gold-deep [.ba-value--dark_&]:text-gold-bright
        `}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.copy}</p>
                </Reveal>
              ))}
            </div>
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
              kicker={infrastructurePageCopy.noteKicker}
              title={infrastructurePageCopy.noteTitle}
            />
          </Reveal>

          <Reveal className={`
          ba-hub-note flex flex-wrap
          items-center justify-between gap-[1rem]
          mt-[2rem] pt-[1.5rem] [border-top:1px_solid_var(--c-line)]
          [&_p]:max-w-[48ch] [&_p]:text-[length:0.86rem] [&_p]:leading-[1.8]
          [&_p]:text-muted
        `} delay={80}>
            <p>{infrastructurePageCopy.note}</p>
            <ButtonLink href="/contact" variant="gold">
              {infrastructurePageCopy.ctaLabel} <ArrowUpRight size={15} aria-hidden="true" />
            </ButtonLink>
          </Reveal>
        </Container>
      </section>

      <FaqSection
        kicker={infrastructurePageCopy.faqKicker}
        title={infrastructurePageCopy.faqTitle}
        copy={infrastructurePageCopy.faqCopy}
        faqs={infrastructurePageCopy.faqs}
        className={"ba-section relative py-[var(--section-y)]"}
      />

      <MiniCta title={infrastructurePageCopy.ctaTitle} ctaLabel={infrastructurePageCopy.ctaLabel} href="/contact" />
    </>
  );
}
