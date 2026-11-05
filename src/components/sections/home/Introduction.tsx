
import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  Leaf,
  ShieldCheck,
  Sprout,
} from "lucide-react";

import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { getLocale, type Locale } from "@/lib/locale";
import { imageSizes, images } from "@/lib/images";

/* All section content lives here */
const contentByLocale = {
  en: {
    eyebrow: "01 — WHO WE ARE",
    heading: {
      brand: "Bharat Agricultures.",
      accent: "Agricultural machinery manufacturer in Sambhal.",
    },
    paragraphs: [
      "Bharat Agricultures is an agricultural machinery manufacturer based in Sambhal, Uttar Pradesh. We focus on building machinery and equipment for farming, designed around changing agricultural needs.",
      "Our goal is to bring useful machinery solutions to farmers and the agriculture industry. Quality, practical design and continuous improvement are the foundation of our work.",
    ],
    image: {
      alt: "Agricultural tractor working in a farm field",
      brand: "BHARAT AGRICULTURES",
      statement: "The strength of farming.",
      statementAccent: "The start of a better tomorrow.",
    },
    badge: {
      value: "15",
      label: "Machines, tractors and agricultural solutions",
    },
    features: [
      {
        icon: Sprout,
        title: "Agriculture First",
        description: "Every decision keeps the needs of farming in focus.",
      },
      {
        icon: ShieldCheck,
        title: "Quality Focus",
        description: "Special attention to product quality and reliability.",
      },
      {
        icon: Leaf,
        title: "Growth Mindset",
        description: "A mindset that moves forward with modern agriculture.",
      },
    ],
    cta: {
      label: "About Us",
      href: "/about",
    },
    location: "SAMBHAL, UTTAR PRADESH",
    bottom: ["Agriculture First", "Quality Driven", "Future Focused"],
  },
  hi: {
    eyebrow: "01 — WHO WE ARE",
    heading: {
      brand: "Bharat Agricultures.",
      accent: "Sambhal ka agricultural machinery manufacturer.",
    },
    paragraphs: [
      "Bharat Agricultures, Sambhal, Uttar Pradesh mein sthit ek agricultural machinery manufacturer hai. Hum kheti ke liye machinery aur equipment banane par focus karte hain, jo badalti agricultural needs ko dhyan mein rakhkar design kiye jaate hain.",
      "Humara maqsad hai ki farmers aur agriculture industry tak useful machinery solutions pahunch sakein. Quality, practical design aur continuous improvement humare kaam ki buniyad hain.",
    ],
    image: {
      alt: "Agricultural tractor working in a farm field",
      brand: "BHARAT AGRICULTURES",
      statement: "Kheti ki taqat.",
      statementAccent: "Behtar kal ki shuruaat.",
    },
    badge: {
      value: "15",
      label: "Machines, tractors aur agricultural solutions",
    },
    features: [
      {
        icon: Sprout,
        title: "Agriculture First",
        description: "Har faisle mein kheti ki zarooraton ko ahmiyat.",
      },
      {
        icon: ShieldCheck,
        title: "Quality Focus",
        description: "Product quality aur reliability par khaas dhyan.",
      },
      {
        icon: Leaf,
        title: "Growth Mindset",
        description: "Modern agriculture ke saath aage badhne ki soch.",
      },
    ],
    cta: {
      label: "Humare Baare Mein",
      href: "/about",
    },
    location: "SAMBHAL, UTTAR PRADESH",
    bottom: ["Agriculture First", "Quality Driven", "Future Focused"],
  },
} as const;

function contentFor(locale: Locale) {
  return locale === "hi" ? contentByLocale.hi : contentByLocale.en;
}

export default async function Introduction() {
  const content = contentFor(await getLocale());
  return (
    <section
      id="introduction"
      className="relative isolate overflow-hidden bg-page py-[clamp(5rem,8vw,8rem)]"
    >
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[580px] w-[580px] rounded-full border border-line"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 -z-10 h-[390px] w-[390px] rounded-full border border-line"
      />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-[clamp(3.5rem,6vw,6rem)]">

          {/* IMAGE SIDE */}
          <Reveal className="relative mx-auto w-full max-w-[570px] lg:mx-0">
            {/* Decorative frame */}
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-5 right-10 top-10 rounded-[2rem] border border-gold/70"
            />

            <div className="relative aspect-[4/4.5] overflow-hidden rounded-tl-[125px] rounded-br-[65px] rounded-tr-xl rounded-bl-xl bg-[#173b26] shadow-[0_28px_65px_rgba(20,49,31,0.15)]">
              <Image
                src={images.tractor}
                alt={content.image.alt}
                fill
                sizes={imageSizes.half}
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071b10]/85 via-transparent to-[#071b10]/10" />

              {/* Image brand */}
              <div className="absolute left-7 top-7 flex items-center gap-3">
                <span className="h-px w-7 bg-[#e4bd65]" />
                <span className="text-[9px] font-bold tracking-[0.2em] text-white">
                  {content.image.brand}
                </span>
              </div>

              {/* Image statement */}
              <div className="absolute bottom-0 left-0 max-w-[390px] p-7 sm:p-9">
                <span className="mb-4 block h-[2px] w-10 bg-[#e1b95e]" />

                <p className="font-serif text-[clamp(1.8rem,3vw,2.7rem)] leading-[1.08] text-white">
                  {content.image.statement}
                  <span className="mt-1 block italic text-[#e8c77d]">
                    {content.image.statementAccent}
                  </span>
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-7 right-3 flex max-w-[270px] items-center gap-4 rounded-lg border border-line bg-paper/95 px-5 py-4 shadow-[0_15px_40px_rgba(15,43,26,0.14)] backdrop-blur-md sm:-right-7">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream-soft text-gold-deep">
                <Sprout size={21} />
              </div>

              <div>
                <strong className="block font-serif text-2xl leading-none text-ink">
                  {content.badge.value}
                </strong>
                <span className="mt-1 block text-[9px] font-bold uppercase leading-relaxed tracking-[0.1em] text-muted">
                  {content.badge.label}
                </span>
              </div>
            </div>
          </Reveal>

          {/* CONTENT SIDE */}
          <Reveal className="relative pt-5 lg:pt-0" delay={120}>
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-gold-deep" />
              <span className="text-[10px] font-bold uppercase tracking-[0.23em] text-gold-deep">
                {content.eyebrow}
              </span>
            </div>

            {/* Main heading */}
            <div className="max-w-[680px]">
              <h2 className="font-serif text-[clamp(2.7rem,4.7vw,2.7rem)] font-medium leading-[0.98] tracking-[-0.045em] text-ink">
                {content.heading.brand}
              </h2>

              <p className="mt-4 max-w-[570px] font-serif text-[clamp(1.65rem,3vw,2.65rem)] italic leading-[1.12] tracking-[-0.025em] text-gold-deep">
                {content.heading.accent}
              </p>
            </div>

            {/* Gold divider */}
            <div className="my-7 flex items-center gap-2">
              <span className="h-[3px] w-12 rounded-full bg-gold-deep" />
              <span className="h-[3px] w-5 rounded-full bg-gold-deep/40" />
              <span className="h-[3px] w-2 rounded-full bg-gold-deep/20" />
            </div>

            {/* Paragraphs */}
            <div className="grid max-w-[620px] gap-4">
              {content.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[13px] leading-[1.9] text-muted sm:text-[14px] sm:leading-[1.95]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Features */}
            <div className="mt-7 border-y border-line">
              {content.features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group flex items-center gap-4 border-b border-line py-4 last:border-0"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream-soft text-gold-deep transition-all duration-300 group-hover:bg-forest-900 group-hover:text-gold-soft">
                      <Icon size={17} strokeWidth={1.6} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-[15px] font-semibold text-ink">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-[11px] leading-relaxed text-muted">
                        {feature.description}
                      </p>
                    </div>

                    <Check
                      size={15}
                      className="shrink-0 text-gold-deep"
                    />
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <ButtonLink
                href={content.cta.href}
                variant="outline"
                className="group min-h-[48px] rounded-md border-line-strong px-6 text-[12px] text-ink transition-all duration-300 hover:bg-forest-900 hover:text-cream"
              >
                {content.cta.label}

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
              </ButtonLink>

              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-muted">
                {content.location}
              </span>
            </div>
          </Reveal>
        </div>

        {/* Bottom brand strip */}
        <div className="mt-24 grid overflow-hidden rounded-lg bg-forest-900 sm:grid-cols-3">
          {content.bottom.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-4 border-b border-white/10 px-6 py-5 last:border-0 sm:border-b-0 sm:border-r sm:px-8 sm:last:border-r-0"
            >
              <span className="font-serif text-2xl italic text-gold-soft">
                0{index + 1}
              </span>

              <p className="text-xs font-semibold text-white">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
