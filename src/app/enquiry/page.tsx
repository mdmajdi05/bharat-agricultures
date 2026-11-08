
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check, Mail, MessageCircle, Phone } from "lucide-react";
import EnquiryForm from "@/components/forms/EnquiryForm";
import FaqSection from "@/components/sections/shared/FaqSection";
import {
  breadcrumbSchema,
  faqSchema,
  JsonLd,
  webPageSchema,
} from "@/components/seo/StructuredData";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { emailHref, phoneHref, site, whatsappHref } from "@/lib/site";
import { getProducts, getSiteContent } from "@/data/localized";
import { getUiCopy } from "@/data/ui";
import { imageSizes, images } from "@/lib/images";
import { getLocale } from "@/lib/locale";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const [locale, { seoMetadata }] = await Promise.all([getLocale(), getSiteContent()]);
  return createMetadata({
    ...seoMetadata.enquiry,
    path: "/enquiry",
    locale,
    keywords: [
      "agricultural machinery price enquiry",
      "brick kiln machinery quote",
      "machinery spare parts enquiry India",
    ],
    image: images.warehouse,
    robots: { index: false, follow: true },
  });
}

export default async function EnquiryPage({ searchParams }: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product } = await searchParams;
  const defaultProduct = product ? product : "";
  const [locale, { enquiryFormCopy, enquiryPageCopy, seoMetadata }, products] = await Promise.all([
    getLocale(),
    getSiteContent(),
    getProducts(),
  ]);
  const ui = getUiCopy(locale);
  return (
    <>
      <JsonLd
        data={webPageSchema({
          type: "ContactPage",
          name: seoMetadata.enquiry.title,
          description: seoMetadata.enquiry.description,
          path: "/enquiry",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: ui.breadcrumbHome, href: "/" },
          { name: "Send Enquiry", href: "/enquiry" },
        ])}
      />
      <JsonLd data={faqSchema(enquiryPageCopy.faqs)} />

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
        `}>{enquiryPageCopy.kicker}</span>
              <h1>
                {enquiryPageCopy.title}
                <br />
                <em>{enquiryPageCopy.titleAccent}</em>
              </h1>
              <p className={`
          ba-body-copy max-w-[46ch] text-[length:0.9rem]
          leading-[1.9] text-muted [overflow-wrap:break-word]
          [.ba-detail-grid_&]:mt-[1rem] [.ba-enquiry-aside_&]:max-w-[40ch]
        `}>{enquiryPageCopy.body}</p>

              <ul className={`
          ba-check-list grid gap-[0.6rem]
          [&_li]:flex [&_li]:items-center [&_li]:gap-[0.55rem]
          [&_li]:text-[length:0.85rem] [&_li]:text-ink [&_svg]:shrink-0
          [&_svg]:text-gold-deep [.ba-parts-group_&]:mt-[0.4rem] ba-check-list--two
          mt-[1rem] [&_li]:items-start [&_li]:leading-[1.6]
          min-[640px]:[grid-template-columns:1fr_1fr] min-[640px]:gap-[0.75rem_1.75rem]
        `}>
                {enquiryPageCopy.points.map((point) => (
                  <li key={point}>
                    <Check size={15} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>

              <span className={`
          ba-eyebrow inline-flex items-center
          gap-[0.6rem] font-sans text-xs
          font-bold tracking-[0.22em] uppercase
          leading-[1.4] text-gold-deep [&::before]:[content:""]
          [&::before]:w-[1.6rem] [&::before]:h-[1px] [&::before]:bg-[currentColor]
          [&::before]:shrink-0 [.ba-form-panel_&]:[display:inline-block] [.ba-form-panel_&]:mb-[0.7rem]
          [.ba-cta_&]:text-[color:rgba(10,_32,_20,_0.7)] [.ba-cta_&::before]:bg-[rgba(10,_32,_20,_0.45)] ba-eyebrow--plain
          [&::before]:[content:none]
        `}>{enquiryPageCopy.contactKicker}</span>

              <div className={`
          ba-enquiry__details grid gap-[1rem]
          mt-[1rem]
        `}>
                <div className={`
          ba-enquiry__detail [&_span]:block [&_span]:mb-[0.25rem]
          [&_span]:text-[length:0.6rem] [&_span]:font-bold [&_span]:tracking-[0.18em]
          [&_span]:uppercase [&_span]:text-muted [&_a]:inline-flex
          [&_a]:items-center [&_a]:gap-[0.4rem] [&_a]:font-display
          [&_a]:text-[length:1.2rem] [&_a]:[overflow-wrap:anywhere] [&_a]:[border-bottom:1px_solid_var(--c-line-strong)]
          [&_a]:[transition:color_0.2s_var(--ease),_border-color_0.2s_var(--ease)] [&_a_svg]:text-gold-deep [&_a:hover]:text-gold-deep
          [&_a:hover]:border-gold-deep
        `}>
                  <span>{ui.contactLabels.email}</span>
                  <a href={emailHref}>
                    <Mail size={15} aria-hidden="true" /> {site.email}
                  </a>
                </div>
                <div className={`
          ba-enquiry__detail [&_span]:block [&_span]:mb-[0.25rem]
          [&_span]:text-[length:0.6rem] [&_span]:font-bold [&_span]:tracking-[0.18em]
          [&_span]:uppercase [&_span]:text-muted [&_a]:inline-flex
          [&_a]:items-center [&_a]:gap-[0.4rem] [&_a]:font-display
          [&_a]:text-[length:1.2rem] [&_a]:[overflow-wrap:anywhere] [&_a]:[border-bottom:1px_solid_var(--c-line-strong)]
          [&_a]:[transition:color_0.2s_var(--ease),_border-color_0.2s_var(--ease)] [&_a_svg]:text-gold-deep [&_a:hover]:text-gold-deep
          [&_a:hover]:border-gold-deep
        `}>
                  <span>{ui.contactLabels.phone}</span>
                  <a href={phoneHref}>
                    <Phone size={15} aria-hidden="true" /> {site.phone}
                  </a>
                </div>
                <div className={`
          ba-enquiry__detail [&_span]:block [&_span]:mb-[0.25rem]
          [&_span]:text-[length:0.6rem] [&_span]:font-bold [&_span]:tracking-[0.18em]
          [&_span]:uppercase [&_span]:text-muted [&_a]:inline-flex
          [&_a]:items-center [&_a]:gap-[0.4rem] [&_a]:font-display
          [&_a]:text-[length:1.2rem] [&_a]:[overflow-wrap:anywhere] [&_a]:[border-bottom:1px_solid_var(--c-line-strong)]
          [&_a]:[transition:color_0.2s_var(--ease),_border-color_0.2s_var(--ease)] [&_a_svg]:text-gold-deep [&_a:hover]:text-gold-deep
          [&_a:hover]:border-gold-deep
        `}>
                  <span>{ui.contactLabels.whatsapp}</span>
                  <a href={whatsappHref}>
                    <MessageCircle size={15} aria-hidden="true" /> {site.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className={`
          ba-form-panel p-[clamp(1.35rem,_4vw,_2.5rem)] bg-paper
          [border:1px_solid_var(--c-line)] rounded-lg shadow-card
          [&_h2]:text-[length:clamp(1.5rem,_4vw,_1.9rem)]
        `}>
              <h2>{enquiryPageCopy.formH2}</h2>
              <p className={`
          ba-form-panel__intro mt-[0.45rem] mb-[1.5rem]
          text-[length:0.8rem] text-muted
        `}>{enquiryPageCopy.formIntro}</p>
              <EnquiryForm copy={enquiryFormCopy} defaultProduct={defaultProduct} locale={locale} products={products} />
            </div>
          </div>
        </Container>
      </section>

      <section className={"ba-section relative py-[var(--section-y)]"}>
        <Container>
          <div className={`
          ba-split grid gap-[2rem]
          min-[900px]:[grid-template-columns:1fr_1fr] min-[900px]:items-center min-[900px]:gap-[clamp(3rem,_7vw,_6rem)]
        `}>
            <Reveal className={`
          ba-split-body grid content-center
          gap-[1.1rem] [overflow-wrap:break-word] [&_h2]:text-[length:var(--display-md)]
        `}>
              <SectionHeading
                kicker={enquiryPageCopy.checklistKicker}
                title={enquiryPageCopy.checklistTitle}
                copy={enquiryPageCopy.checklistCopy}
              />
            </Reveal>

            <Reveal delay={100}>
              <ul className={`
          ba-check-list grid gap-[0.6rem]
          [&_li]:flex [&_li]:items-center [&_li]:gap-[0.55rem]
          [&_li]:text-[length:0.85rem] [&_li]:text-ink [&_svg]:shrink-0
          [&_svg]:text-gold-deep [.ba-parts-group_&]:mt-[0.4rem] ba-check-list--wide
          mt-[2rem] [&_svg]:shrink-0 [&_svg]:mt-[0.2rem]
          [&_svg]:text-gold-deep min-[640px]:[grid-template-columns:1fr_1fr] min-[640px]:gap-[0_2rem]
        `}>
                {enquiryPageCopy.checklist.map((item) => (
                  <li className={`
          ba-check-list__item [.ba-check-list--wide_&]:flex [.ba-check-list--wide_&]:items-start
          [.ba-check-list--wide_&]:gap-[0.55rem] [.ba-check-list--wide_&]:py-[0.8rem] [.ba-check-list--wide_&]:[border-bottom:1px_solid_var(--c-line)]
          [.ba-check-list--wide_&]:text-[length:0.88rem] [.ba-check-list--wide_&]:leading-[1.6]
        `} key={item}>
                    <Check size={15} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
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
              kicker={enquiryPageCopy.processKicker}
              title={enquiryPageCopy.processTitle}
              copy={enquiryPageCopy.processCopy}
            />
          </Reveal>

          <div className={`
          ba-steps grid gap-[1rem]
          min-[760px]:grid-cols-3 min-[760px]:gap-[1.25rem]
        `}>
            {enquiryPageCopy.process.map((step, index) => (
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
        `}>{ui.stepPrefix} {String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={`
          ba-section relative py-[var(--section-y)]
          ba-section--dark bg-forest-900 text-cream
        `}>
        <Container>
          <div className={`
          ba-split grid gap-[2rem]
          min-[900px]:[grid-template-columns:1fr_1fr] min-[900px]:items-center min-[900px]:gap-[clamp(3rem,_7vw,_6rem)]
        `}>
            <Reveal className={`
          ba-split-body grid content-center
          gap-[1.1rem] [overflow-wrap:break-word] [&_h2]:text-[length:var(--display-md)]
        `}>
              <SectionHeading
                kicker={enquiryPageCopy.visitKicker}
                title={enquiryPageCopy.visitTitle}
                copy={enquiryPageCopy.visitCopy}
                light
              />
              <ButtonLink href={enquiryPageCopy.visitCtaHref} variant="gold">
                {enquiryPageCopy.visitCtaLabel} <ArrowUpRight size={16} aria-hidden="true" />
              </ButtonLink>
            </Reveal>

            <Reveal className={`
          ba-split__media relative aspect-[4_/_3]
          overflow-hidden rounded-lg bg-cream-soft
          [&_img]:object-cover min-[900px]:aspect-[5_/_4]
        `} delay={100}>
              <Image
                src={images.warehouse}
                alt={`${site.name} manufacturing unit, ${site.locality}`}
                fill
                sizes={imageSizes.half}
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <FaqSection
        kicker={enquiryPageCopy.faqKicker}
        title={enquiryPageCopy.faqTitle}
        copy={enquiryPageCopy.faqCopy}
        faqs={enquiryPageCopy.faqs}
        className={"ba-section relative py-[var(--section-y)]"}
      />
    </>
  );
}
