
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import FaqSection from "@/components/sections/shared/FaqSection";
import MiniCta from "@/components/sections/shared/MiniCta";
import PageHero from "@/components/sections/shared/PageHero";
import { breadcrumbSchema, faqSchema, itemListSchema, JsonLd, webPageSchema } from "@/components/seo/StructuredData";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { partsCategory as staticPartsCategory } from "@/data/categories";
import { getCategory, getPartsPages, getSiteContent } from "@/data/localized";
import { getNavigationLabel } from "@/data/navigation";
import { getUiCopy } from "@/data/ui";
import { imageSizes, images } from "@/lib/images";
import { getLocale } from "@/lib/locale";
import { partIcon } from "@/lib/partIcons";
import { createMetadata } from "@/lib/seo";
import { whatsappQuoteHref } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const [partsCategory, partsPages] = await Promise.all([
    getCategory(staticPartsCategory.slug),
    getPartsPages(),
  ]);
  if (!partsCategory) return {};

  return createMetadata({
    title: partsCategory.metaTitle,
    description: partsCategory.metaDescription,
    path: `/${partsCategory.slug}`,
    locale,
    keywords: [
      "agricultural machinery parts manufacturer India",
      "brick kiln machinery spare parts",
      "industrial casting components manufacturer",
      "machinery spares Sambhal",
      ...partsPages.map((page) => page.name),
    ],
    image: images.machining,
  });
}

export default async function MachineryPartsPage() {
  const [category, partsPages, { partsHubCopy }, locale] = await Promise.all([
    getCategory(staticPartsCategory.slug),
    getPartsPages(),
    getSiteContent(),
    getLocale(),
  ]);
  const partsCategory = category ?? staticPartsCategory;
  const partsLabel = getNavigationLabel("Machinery Parts", locale);
  const ui = getUiCopy(locale);

  return (
    <>
      <JsonLd
        data={webPageSchema({
          type: "CollectionPage",
          name: partsCategory.metaTitle,
          description: partsCategory.metaDescription,
          path: `/${partsCategory.slug}`,
        })}
      />
      <JsonLd
        data={itemListSchema(
          partsHubCopy.itemListName,
          partsPages.map((page) => ({ name: page.name, href: `/machinery-parts/${page.slug}` })),
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: ui.breadcrumbHome, href: "/" },
          { name: partsLabel, href: "/machinery-parts" },
        ])}
      />
      <JsonLd data={faqSchema(partsCategory.faqs)} />

      <PageHero
        kicker={partsCategory.hero.kicker}
        title={partsCategory.hero.title}
        copy={partsCategory.hero.copy}
        image={partsCategory.hero.image}
        current={partsCategory.hero.current}
      />

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
              <span className={`
          ba-eyebrow inline-flex items-center
          gap-[0.6rem] font-sans text-xs
          font-bold tracking-[0.22em] uppercase
          leading-[1.4] text-gold-deep [&::before]:[content:""]
          [&::before]:w-[1.6rem] [&::before]:h-[1px] [&::before]:bg-[currentColor]
          [&::before]:shrink-0 [.ba-form-panel_&]:[display:inline-block] [.ba-form-panel_&]:mb-[0.7rem]
          [.ba-cta_&]:text-[color:rgba(10,_32,_20,_0.7)] [.ba-cta_&::before]:bg-[rgba(10,_32,_20,_0.45)]
        `}>{partsHubCopy.overviewKicker}</span>
              <h2>{partsCategory.introTitle}</h2>
              {partsCategory.intro.map((paragraph) => (
                <p className={`
          ba-body-copy max-w-[46ch] text-[length:0.9rem]
          leading-[1.9] text-muted [overflow-wrap:break-word]
          [.ba-detail-grid_&]:mt-[1rem] [.ba-enquiry-aside_&]:max-w-[40ch]
        `} key={paragraph}>
                  {paragraph}
                </p>
              ))}
              <Link href={whatsappQuoteHref()} target="_blank" rel="noopener noreferrer" className={`
          ba-text-link inline-flex items-center
          gap-[0.45rem] pb-[0.35rem] [border-bottom:1px_solid_var(--c-line-strong)]
          text-[length:0.72rem] font-bold tracking-[0.09em]
          uppercase [transition:color_0.2s_var(--ease),_border-color_0.2s_var(--ease)] [&_svg]:[transition:transform_0.25s_var(--ease)]
          [&:hover]:text-gold-deep [&:hover]:border-gold-deep [&:hover_svg]:[transform:translate(2px,_-2px)]
          [.ba-contact-card_&]:mt-auto [.ba-contact-card_&]:[align-self:flex-start] [.ba-showcase-head_&]:[justify-self:start]
          min-[900px]:[.ba-showcase-head_&]:[justify-self:end] [.ba-split-body_&]:[justify-self:start] [.ba-split-body_&]:mt-[0.35rem]
          min-[900px]:[.ba-parts-teaser-head_&]:[justify-self:end]
        `}>
                {partsHubCopy.overviewLink} <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </Reveal>

            <Reveal className={`
          ba-split__media relative aspect-[4_/_3]
          overflow-hidden rounded-lg bg-cream-soft
          [&_img]:object-cover min-[900px]:aspect-[5_/_4]
        `} delay={100}>
              <Image
                src={images[partsCategory.hero.image as keyof typeof images]}
                alt={partsCategory.hero.title}
                fill
                sizes={imageSizes.half}
              />
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
              kicker={partsHubCopy.categoriesKicker}
              title={partsCategory.gridTitle}
              copy={partsCategory.gridCopy}
            />
          </Reveal>

          <div className={`
          ba-parts-cards grid gap-[1.25rem]
          min-[700px]:grid-cols-2 min-[1000px]:grid-cols-3 min-[1000px]:gap-[1.5rem]
        `}>
            {partsPages.map((page, index) => (
              <Reveal key={page.slug} delay={index * 80}>
                <Link href={`/machinery-parts/${page.slug}`} className={`
          ba-parts-card flex flex-col
          gap-[0.55rem] h-full p-[1.5rem]
          bg-paper [border:1px_solid_var(--c-line)] rounded-md
          text-ink [transition:border-color_0.25s_var(--ease)] [&:hover]:border-gold
          [&_h3]:text-[length:1.35rem] [&_p]:text-[length:0.84rem] [&_p]:leading-[1.75]
          [&_p]:text-muted ba-parts-card--media grid
          p-[0] overflow-hidden bg-paper
        `}>
                  <div className={`
          ba-parts-card__media relative aspect-[16_/_10]
          overflow-hidden bg-cream-soft [&_img]:object-cover
          [&_img]:[transition:transform_0.6s_var(--ease)] [.ba-parts-card:hover_&_img]:[transform:scale(1.04)]
        `}>
                    <Image
                      src={images[page.hero.image as keyof typeof images]}
                      alt={page.name}
                      fill
                      sizes={imageSizes.card}
                    />
                  </div>
                  <div className={`
          ba-parts-card-body grid content-start
          gap-[0.5rem] p-[1.2rem_1.3rem_1.45rem] [&_h2]:text-[length:1.35rem]
          [&_h3]:text-[length:1.35rem]
        `}>
                    <span className={`
          ba-parts-card__kicker text-[length:0.6rem] font-bold
          tracking-[0.16em] uppercase text-gold-deep
        `}>
                      {String(index + 1).padStart(2, "0")} {partsHubCopy.cardKickerSuffix}
                    </span>
                    <h3>{page.name}</h3>
                    <p>{page.hero.copy}</p>
                    <span className={`
          ba-parts-card__link inline-flex items-center
          gap-[0.4rem] mt-auto pt-[1rem]
          text-[length:0.62rem] font-bold tracking-[0.14em]
          uppercase text-gold-deep [.ba-parts-card-body_&]:pt-[0.8rem]
        `}>
                      {partsHubCopy.cardLink} <ArrowUpRight size={14} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={"ba-section relative py-[var(--section-y)]"}>
        <Container>
          <Reveal>
            <SectionHeading
              kicker={partsHubCopy.partCardsKicker}
              title={partsHubCopy.partCardsTitle}
              copy={partsHubCopy.partCardsCopy}
            />
          </Reveal>

          <div className={`
          ba-parts-cards-grid grid gap-[0.85rem] mt-[2rem]
          min-[460px]:grid-cols-2 min-[800px]:grid-cols-3 min-[1100px]:grid-cols-4
        `}>
            {partsPages.flatMap((page) =>
              page.groups.map((group) => {
                const item = group.items[0];
                const Icon = partIcon(item);

                return (
                  <Reveal key={`${page.slug}-${group.title}`}>
                    <Link
                      href={`/machinery-parts/${page.slug}`}
                      className={`
                  ba-part-card group/card flex flex-col h-full
                  gap-[0.7rem] p-[1rem]
                  bg-paper [border:1px_solid_var(--c-line)] rounded-[0.85rem]
                  text-ink [transition:border-color_0.25s_var(--ease),_box-shadow_0.25s_var(--ease),_transform_0.25s_var(--ease)]
                  [&:hover]:border-gold [&:hover]:shadow-soft [&:hover]:[transform:translateY(-2px)]
                `}
                    >
                      <span className={`
                  grid size-[2.3rem] place-items-center rounded-full
                  bg-cream-soft text-gold-deep
                  [transition:background-color_0.25s_var(--ease),_color_0.25s_var(--ease)]
                  [.ba-part-card:hover_&]:bg-gold [.ba-part-card:hover_&]:text-forest-950
                `}>
                        <Icon size={17} strokeWidth={1.9} aria-hidden="true" />
                      </span>
                      <span className={"text-[length:0.92rem] font-semibold leading-[1.35]"}>{item}</span>
                      <span className={`
                  text-[length:0.62rem] font-bold tracking-[0.14em]
                  uppercase text-muted
                `}>
                        {group.title}
                      </span>
                      <span className={`
                  mt-auto inline-flex items-center gap-[0.3rem] pt-[0.35rem]
                  text-[length:0.58rem] font-bold tracking-[0.12em]
                  uppercase text-gold-deep
                `}>
                        {partsHubCopy.partCardCta}
                        <ArrowUpRight size={12} aria-hidden="true" />
                      </span>
                    </Link>
                  </Reveal>
                );
              }),
            )}
          </div>
        </Container>
      </section>

      <section className={`
          ba-section relative py-[var(--section-y)]
          ba-section--dark bg-forest-900 text-cream
        `}>
        <Container>
          <Reveal>
            <SectionHeading
              kicker={partsHubCopy.benefitsKicker}
              title={partsHubCopy.benefitsTitle}
              copy={partsHubCopy.benefitsCopy}
              light
            />
          </Reveal>

          <div className={`
          ba-values__grid grid gap-[1.5rem]
          min-[760px]:grid-cols-3 min-[760px]:gap-[2rem] ba-values__grid--dark
          mt-[2rem]
        `}>
            {partsCategory.benefits.map((benefit, index) => (
              <Reveal className={`
          ba-value pt-[1.1rem] [border-top:1px_solid_var(--c-line)]
          [&_h3]:mt-[0.5rem] [&_h3]:text-[length:1.4rem] [&_p]:mt-[0.4rem]
          [&_p]:text-[length:0.83rem] [&_p]:leading-[1.7] [&_p]:text-muted
          ba-value--dark [border-top-color:var(--c-line-dark)] [&_h3]:text-cream
          [&_p]:text-muted-dark
        `} key={benefit.title} delay={index * 70}>
                <span className={`
          ba-value__num text-[length:0.62rem] font-bold
          tracking-[0.16em] text-gold-deep [.ba-value--dark_&]:text-gold-bright
        `}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.copy}</p>
              </Reveal>
            ))}
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
              <span className={`
          ba-eyebrow inline-flex items-center
          gap-[0.6rem] font-sans text-xs
          font-bold tracking-[0.22em] uppercase
          leading-[1.4] text-gold-deep [&::before]:[content:""]
          [&::before]:w-[1.6rem] [&::before]:h-[1px] [&::before]:bg-[currentColor]
          [&::before]:shrink-0 [.ba-form-panel_&]:[display:inline-block] [.ba-form-panel_&]:mb-[0.7rem]
          [.ba-cta_&]:text-[color:rgba(10,_32,_20,_0.7)] [.ba-cta_&::before]:bg-[rgba(10,_32,_20,_0.45)]
        `}>{partsHubCopy.processKicker}</span>
              <h2>{partsHubCopy.processTitle}</h2>
              <p className={`
          ba-body-copy max-w-[46ch] text-[length:0.9rem]
          leading-[1.9] text-muted [overflow-wrap:break-word]
          [.ba-detail-grid_&]:mt-[1rem] [.ba-enquiry-aside_&]:max-w-[40ch]
        `}>{partsHubCopy.processCopy}</p>
            </Reveal>

            <Reveal className={`
          ba-checks [.ba-enquiry-aside_&]:mt-[0.5rem] grid
          [border-top:1px_solid_var(--c-line)]
        `} delay={100}>
              {partsCategory.process.map((step, index) => (
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
              kicker={partsHubCopy.wearKicker}
              title={partsHubCopy.wearTitle}
              copy={partsHubCopy.wearCopy}
            />
          </Reveal>

          <Reveal className={`
          ba-check-list grid gap-[0.6rem]
          [&_li]:flex [&_li]:items-center [&_li]:gap-[0.55rem]
          [&_li]:text-[length:0.85rem] [&_li]:text-ink [&_svg]:shrink-0
          [&_svg]:text-gold-deep [.ba-parts-group_&]:mt-[0.4rem] ba-check-list--wide
          mt-[2rem] [&_svg]:shrink-0 [&_svg]:mt-[0.2rem]
          [&_svg]:text-gold-deep min-[640px]:[grid-template-columns:1fr_1fr] min-[640px]:gap-[0_2rem]
        `} delay={80}>
            {partsHubCopy.wearItems.map((item) => (
              <span className={`
          ba-check-list__item [.ba-check-list--wide_&]:flex [.ba-check-list--wide_&]:items-start
          [.ba-check-list--wide_&]:gap-[0.55rem] [.ba-check-list--wide_&]:py-[0.8rem] [.ba-check-list--wide_&]:[border-bottom:1px_solid_var(--c-line)]
          [.ba-check-list--wide_&]:text-[length:0.88rem] [.ba-check-list--wide_&]:leading-[1.6]
        `} key={item}>
                <Check size={15} aria-hidden="true" />
                {item}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      <FaqSection
        kicker={partsHubCopy.faqKicker}
        title={partsHubCopy.faqTitle}
        copy={partsHubCopy.faqCopy}
        faqs={partsCategory.faqs}
      />

      <MiniCta
        title={partsCategory.ctaTitle}
        ctaLabel={partsCategory.ctaLabel}
      />
    </>
  );
}
