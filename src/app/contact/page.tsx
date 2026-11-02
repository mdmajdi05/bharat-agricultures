
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, Mail, MessageCircle, Phone } from "lucide-react";
import EnquiryForm from "@/components/forms/EnquiryForm";
import FaqSection from "@/components/sections/shared/FaqSection";
import PageHero from "@/components/sections/shared/PageHero";
import {
  breadcrumbSchema,
  faqSchema,
  JsonLd,
  localBusinessSchema,
  webPageSchema,
} from "@/components/seo/StructuredData";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { contactCardData, contactPageCopy, pageHeroContact, seoMetadata } from "@/data/siteContent";
import { images } from "@/lib/images";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  ...seoMetadata.contact,
  path: "/contact",
  image: images.warehouse,
});

const iconMap = {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} as const;

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          type: "ContactPage",
          name: seoMetadata.contact.title,
          description: seoMetadata.contact.description,
          path: "/contact",
        })}
      />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ])}
      />
      <JsonLd data={faqSchema(contactPageCopy.faqs)} />

      <PageHero
        kicker={pageHeroContact.kicker}
        title={pageHeroContact.title}
        copy={pageHeroContact.copy}
        image={pageHeroContact.image}
        current={pageHeroContact.current}
      />

      <section className={"ba-section relative py-[var(--section-y)]"}>
        <Container>
          <div className={`
          ba-contact-cards grid gap-[1rem]
          min-[560px]:grid-cols-2 min-[560px]:gap-[1.25rem] min-[1000px]:grid-cols-4
        `}>
            {contactCardData.map((card, index) => {
              const IconComponent = iconMap[card.icon as keyof typeof iconMap] ?? MapPin;

              return (
                <Reveal className={`
          ba-contact-card flex flex-col
          gap-[0.55rem] p-[1.5rem] bg-paper
          [border:1px_solid_var(--c-line)] rounded-md [transition:transform_0.28s_var(--ease),_box-shadow_0.28s_var(--ease)]
          [&:hover]:[transform:translateY(-4px)] [&:hover]:shadow-soft [&_h3]:text-[length:1.3rem]
          [&_p]:text-[length:0.85rem] [&_p]:text-muted [&_p]:[overflow-wrap:anywhere]
        `} key={card.title} delay={index * 80}>
                  <span className={`
          ba-contact-card__icon grid [place-items:center]
          w-[2.75rem] h-[2.75rem] mb-[0.5rem]
          rounded-full bg-[rgba(216,_164,_64,_0.16)] text-gold-deep
        `}>
                    <IconComponent size={19} aria-hidden="true" />
                  </span>
                  <span className={`
          ba-eyebrow inline-flex items-center
          gap-[0.6rem] font-sans text-xs
          font-bold tracking-[0.22em] uppercase
          leading-[1.4] text-gold-deep [&::before]:[content:""]
          [&::before]:w-[1.6rem] [&::before]:h-[1px] [&::before]:bg-[currentColor]
          [&::before]:shrink-0 [.ba-form-panel_&]:[display:inline-block] [.ba-form-panel_&]:mb-[0.7rem]
          [.ba-cta_&]:text-[color:rgba(10,_32,_20,_0.7)] [.ba-cta_&::before]:bg-[rgba(10,_32,_20,_0.45)] ba-eyebrow--plain
          [&::before]:[content:none]
        `}>{card.kicker}</span>
                  <h3>{card.title}</h3>
                  <p>{card.value}</p>
                  {card.href && card.linkLabel ? (
                    <a href={card.href} className={`
          ba-text-link inline-flex items-center
          gap-[0.45rem] pb-[0.35rem] [border-bottom:1px_solid_var(--c-line-strong)]
          text-[length:0.72rem] font-bold tracking-[0.09em]
          uppercase [transition:color_0.2s_var(--ease),_border-color_0.2s_var(--ease)] [&_svg]:[transition:transform_0.25s_var(--ease)]
          [&:hover]:text-gold-deep [&:hover]:border-gold-deep [&:hover_svg]:[transform:translate(2px,_-2px)]
          [.ba-contact-card_&]:mt-auto [.ba-contact-card_&]:[align-self:flex-start] [.ba-showcase-head_&]:[justify-self:start]
          min-[900px]:[.ba-showcase-head_&]:[justify-self:end] [.ba-split-body_&]:[justify-self:start] [.ba-split-body_&]:mt-[0.35rem]
          min-[900px]:[.ba-parts-teaser-head_&]:[justify-self:end]
        `}>
                      {card.linkLabel} <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  ) : null}
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className={`
          ba-section relative py-[var(--section-y)]
          ba-section--paper bg-paper
        `}>
        <Container>
          <div className={`
          ba-enquiry grid gap-[2.5rem]
          py-[clamp(3rem,_9vw,_6rem)] min-[900px]:[grid-template-columns:0.85fr_1.15fr] min-[900px]:[align-items:start]
          min-[900px]:gap-[clamp(3rem,_7vw,_6rem)]
        `}>
            <div className={`
          ba-enquiry-aside grid content-start
          gap-[1.1rem] [&_h1]:text-[length:var(--display-lg)] [&_h2]:text-[length:var(--display-md)]
        `}>
              <span className={`
          ba-eyebrow inline-flex items-center
          gap-[0.6rem] font-sans text-xs
          font-bold tracking-[0.22em] uppercase
          leading-[1.4] text-gold-deep [&::before]:[content:""]
          [&::before]:w-[1.6rem] [&::before]:h-[1px] [&::before]:bg-[currentColor]
          [&::before]:shrink-0 [.ba-form-panel_&]:[display:inline-block] [.ba-form-panel_&]:mb-[0.7rem]
          [.ba-cta_&]:text-[color:rgba(10,_32,_20,_0.7)] [.ba-cta_&::before]:bg-[rgba(10,_32,_20,_0.45)]
        `}>{contactPageCopy.stepsKicker}</span>
              <h2>{contactPageCopy.stepsTitle}</h2>

              <div className={`
          ba-checks [.ba-enquiry-aside_&]:mt-[0.5rem] grid
          [border-top:1px_solid_var(--c-line)]
        `}>
                {contactPageCopy.steps.map((step, index) => (
                  <div className={`
          ba-checks__row flex items-start
          gap-[1rem] py-[1.1rem] [border-bottom:1px_solid_var(--c-line)]
          [&_h3]:text-[length:1.1rem] [&_p]:text-[length:0.85rem] [&_p]:leading-[1.75]
          [&_p]:text-muted
        `} key={step.title}>
                    <span className={`
          ba-checks__num pt-[0.25rem] text-[length:0.62rem]
          font-bold tracking-[0.14em] text-gold-deep
        `}>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Reveal className={`
          ba-form-panel p-[clamp(1.35rem,_4vw,_2.5rem)] bg-paper
          [border:1px_solid_var(--c-line)] rounded-lg shadow-card
          [&_h2]:text-[length:clamp(1.5rem,_4vw,_1.9rem)]
        `} delay={100}>
              <span className={`
          ba-eyebrow inline-flex items-center
          gap-[0.6rem] font-sans text-xs
          font-bold tracking-[0.22em] uppercase
          leading-[1.4] text-gold-deep [&::before]:[content:""]
          [&::before]:w-[1.6rem] [&::before]:h-[1px] [&::before]:bg-[currentColor]
          [&::before]:shrink-0 [.ba-form-panel_&]:[display:inline-block] [.ba-form-panel_&]:mb-[0.7rem]
          [.ba-cta_&]:text-[color:rgba(10,_32,_20,_0.7)] [.ba-cta_&::before]:bg-[rgba(10,_32,_20,_0.45)] ba-eyebrow--plain
          [&::before]:[content:none]
        `}>{contactPageCopy.formKicker}</span>
              <h2>{contactPageCopy.formTitle}</h2>
              <p className={`
          ba-form-panel__intro mt-[0.45rem] mb-[1.5rem]
          text-[length:0.8rem] text-muted
        `}>{contactPageCopy.formCopy}</p>
              <EnquiryForm />
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
              kicker={contactPageCopy.serviceAreaKicker}
              title={contactPageCopy.serviceAreaTitle}
              copy={contactPageCopy.serviceArea}
            />
          </Reveal>

          <Reveal className={`
          ba-hub-note flex flex-wrap
          items-center justify-between gap-[1rem]
          mt-[2rem] pt-[1.5rem] [border-top:1px_solid_var(--c-line)]
          [&_p]:max-w-[48ch] [&_p]:text-[length:0.86rem] [&_p]:leading-[1.8]
          [&_p]:text-muted
        `} delay={80}>
            <p>{contactPageCopy.serviceAreaNote}</p>
            <Link href="/enquiry" className={`
          ba-text-link inline-flex items-center
          gap-[0.45rem] pb-[0.35rem] [border-bottom:1px_solid_var(--c-line-strong)]
          text-[length:0.72rem] font-bold tracking-[0.09em]
          uppercase [transition:color_0.2s_var(--ease),_border-color_0.2s_var(--ease)] [&_svg]:[transition:transform_0.25s_var(--ease)]
          [&:hover]:text-gold-deep [&:hover]:border-gold-deep [&:hover_svg]:[transform:translate(2px,_-2px)]
          [.ba-contact-card_&]:mt-auto [.ba-contact-card_&]:[align-self:flex-start] [.ba-showcase-head_&]:[justify-self:start]
          min-[900px]:[.ba-showcase-head_&]:[justify-self:end] [.ba-split-body_&]:[justify-self:start] [.ba-split-body_&]:mt-[0.35rem]
          min-[900px]:[.ba-parts-teaser-head_&]:[justify-self:end]
        `}>
              {contactPageCopy.serviceAreaCta} <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>
        </Container>
      </section>

      <FaqSection
        kicker={contactPageCopy.faqKicker}
        title={contactPageCopy.faqTitle}
        copy={contactPageCopy.faqCopy}
        faqs={contactPageCopy.faqs}
        className={"ba-section relative py-[var(--section-y)]"}
      />
    </>
  );
}
