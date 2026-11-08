
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type TouchEvent } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Cog,
  Handshake,
  Leaf,
  ShieldCheck,
} from "lucide-react";

import type { HeroBadge, HeroCopy, HeroSlide } from "@/data/hero";
import { whatsappQuoteHref } from "@/lib/site";

const AUTOPLAY_MS = 6500;
const DESKTOP_SLIDE_COUNT = 3;

const badgeIcon = {
  shield: ShieldCheck,
  gear: Cog,
  handshake: Handshake,
} as const;

const pad = (n: number) => String(n).padStart(2, "0");

type HeroSliderProps = {
  slides: HeroSlide[];
  copy: HeroCopy;
  badges: HeroBadge[];
};

export default function HeroSlider({
  slides,
  copy,
  badges,
}: HeroSliderProps) {
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [desktop, setDesktop] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = desktop
    ? Math.min(slides.length, DESKTOP_SLIDE_COUNT)
    : slides.length;
  const slide = slides[active];

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const sync = () => {
      setDesktop(query.matches);
      setActive(0);
    };

    sync();
    query.addEventListener("change", sync);

    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);

    sync();
    query.addEventListener("change", sync);

    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reducedMotion || total < 2) return;

    const timer = window.setTimeout(
      () => setActive((index) => (index + 1) % total),
      AUTOPLAY_MS
    );

    return () => window.clearTimeout(timer);
  }, [active, reducedMotion, total]);

  const goTo = (index: number) => {
    setActive(((index % total) + total) % total);
  };

  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setActive((index) => (index + 1) % total);
      }

      if (event.key === "ArrowLeft") {
        setActive((index) => (index - 1 + total) % total);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [total]);

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    touchStartX.current = event.changedTouches[0].screenX;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    const start = touchStartX.current;

    if (start === null) return;

    touchStartX.current = null;

    const diff = start - event.changedTouches[0].screenX;

    if (Math.abs(diff) > 45) {
      goTo(active + (diff > 0 ? 1 : -1));
    }
  };

  if (total === 0 || !slide) return null;

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label={copy.carouselLabel}
      className="ba-hero relative isolate flex h-[calc(100svh-var(--hero-offset))] min-h-[660px] w-full items-center overflow-hidden max-md:min-h-[570px]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* DESKTOP BACKGROUND */}
      <div className="absolute inset-0 z-0 hidden h-full w-full md:block">
        {slides.slice(0, DESKTOP_SLIDE_COUNT).map((item, index) => (
          <div
            key={item.slug}
            aria-hidden={index !== active}
            className={`ba-hero__slide absolute inset-0 h-full w-full ${
              index === active
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            <Image
              src={item.image}
              alt={index === active ? item.imageAlt : ""}
              fill
              priority={index === 0}
              sizes="100vw"
              className="ba-hero__img"
              style={{ objectPosition: item.focus }}
            />
          </div>
        ))}
      </div>

      {/* MOBILE FULLSCREEN BACKGROUND */}
      <div className="absolute inset-0 z-0 h-full w-full md:hidden">
        {slides.map((item, index) => (
          <div
            key={item.slug}
            aria-hidden={index !== active}
            className={`ba-hero__slide absolute inset-0 h-full w-full ${
              index === active
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            <Image
              src={item.mobileImage ?? item.image}
              alt={index === active ? item.mobileImageAlt ?? item.imageAlt : ""}
              fill
              priority={index === 0}
              sizes="100vw"
              className="ba-hero__img object-cover"
              style={{ objectPosition: item.focus }}
            />
          </div>
        ))}
      </div>

      {/* DESKTOP VIGNETTE */}
      <div
        aria-hidden="true"
        className="ba-hero__vignette absolute inset-0 z-10 max-md:hidden"
      />

      {/* MOBILE GRADIENT OVERLAY */}
      <div
        aria-hidden="true"
        className="ba-hero__mobile-vignette pointer-events-none absolute inset-0 z-10 hidden max-md:block"
      />

      {/* MOBILE BOTTOM DARKENING */}
      <div
        aria-hidden="true"
        className="ba-hero__mobile-bottom pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden max-md:block"
      />

      {/* MAIN CONTENT */}
      <div className="relative z-20 mx-auto flex h-full w-full max-w-[1440px] flex-col px-6 sm:px-10 md:px-14 lg:px-20 max-md:min-h-[inherit] max-md:px-0">

        {/* CONTENT AREA */}
        <div className="ba-hero__content flex flex-1 items-center pb-28 pt-16 sm:pb-32 sm:pt-20 lg:pb-28 max-md:items-start max-md:px-5 max-md:py-5 max-md:pb-0">

          <div
            key={slide.slug}
            className="ba-hero__copy ba-hero-rise w-full max-w-[44rem] [text-shadow:0_1px_2px_rgba(3,14,9,0.45),0_12px_40px_rgba(3,14,9,0.35)]"
          >
            {/* EYEBROW */}
            <p className="ba-hero__eyebrow text-[length:0.72rem] font-bold uppercase leading-[1.5] tracking-[0.24em] text-[#f2b842] sm:text-xs max-md:text-[11px] max-md:tracking-[0.22em]">
              <Leaf aria-hidden="true" className="hidden h-3.5 w-3.5 max-md:block" />
              {slide.eyebrow}
            </p>

            {/* HEADING */}
            <h1 className="ba-hero__heading mt-4 text-[clamp(2.5rem,7vw,5.1rem)] font-semibold uppercase leading-[0.98] tracking-[0.02em] text-[#f7f6f0] sm:mt-5 max-md:mt-3 max-md:text-[clamp(2.35rem,9.5vw,3rem)] max-md:leading-[0.98]">
              <span className="block">{slide.title}</span>
              <span className="block text-[#f2b842]">
                {slide.titleAccent}
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="ba-hero__description mt-5 max-w-[36rem] text-[clamp(1rem,1.55vw,1.32rem)] leading-[1.6] text-cream/95 sm:mt-6 max-md:mt-4 max-md:max-w-[340px] max-md:text-[15px] max-md:leading-[1.45]">
              {slide.subtitle}{" "}
              <span className="font-semibold text-[#f2b842]">
                {slide.subtitleAccent}
              </span>

              {slide.description ? (
                <>
                  <br className="hidden sm:block" />{" "}
                  <span className="text-[0.93em] text-cream/80">
                    {slide.description}
                  </span>
                </>
              ) : null}
            </p>

            {/* CTA BUTTONS */}
            <div className="ba-hero__actions mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4 max-md:mt-6 max-md:flex-col max-md:items-start max-md:gap-3">
              <Link
                href={slide.primaryHref}
                className="group inline-flex min-h-[3.2rem] items-center justify-center gap-2.5 rounded-lg border border-[#f2b842] bg-[#f0a828] px-6 text-sm font-bold text-[#1b1916] shadow-lg shadow-amber-950/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffc94d] active:scale-[0.98] sm:min-h-[3.4rem] sm:px-7 sm:text-[15px] max-md:min-h-[3.5rem] max-md:min-w-[190px] max-md:rounded-full max-md:px-7 max-md:text-[14px]"
              >
                {slide.primaryLabel}

                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href={
                  slide.secondaryHref.startsWith("/enquiry")
                    ? whatsappQuoteHref()
                    : slide.secondaryHref
                }
                target={slide.secondaryHref.startsWith("/enquiry") ? "_blank" : undefined}
                rel={slide.secondaryHref.startsWith("/enquiry") ? "noopener noreferrer" : undefined}
                className="inline-flex min-h-[3.2rem] items-center justify-center rounded-lg border border-white/80 bg-black/15 px-6 text-sm font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-forest-900 active:scale-[0.98] sm:min-h-[3.4rem] sm:px-7 sm:text-[15px] max-md:min-h-[3.5rem] max-md:min-w-[190px] max-md:rounded-full max-md:px-7 max-md:text-[14px]"
              >
                {slide.secondaryLabel}
              </Link>
            </div>

            {/* FEATURE BADGES */}
            {slide.showBadges ? (
              <ul className="ba-hero__badges mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[0.72rem] leading-[1.35] text-cream/90 sm:mt-11 sm:gap-x-6 sm:text-[13px] max-md:mt-3 max-md:grid max-md:grid-cols-3 max-md:gap-2">
                {badges.map((badge, index) => {
                  const Icon = badgeIcon[badge.icon];

                  return (
                    <li
                      key={`${badge.icon}-${index}`}
                      className={`ba-hero__badge flex items-center gap-2.5 ${
                        index === badges.length - 1
                          ? ""
                          : "border-r border-[rgba(244,181,45,0.55)] pr-5 sm:pr-6"
                      } max-md:flex-col max-md:items-start max-md:gap-2 max-md:border-r-0 max-md:pr-2`}
                    >
                      <Icon
                        aria-hidden="true"
                        className="ba-hero__badge-icon h-5 w-5 shrink-0 text-[#f2b842] max-md:h-6 max-md:w-6"
                        strokeWidth={1.8}
                      />

                      <span className="ba-hero__badge-label max-md:text-[11px] max-md:leading-[1.35]">
                        {badge.lines.map((line, lineIndex) => (
                          <span key={`${line}-${lineIndex}`}>
                            {lineIndex > 0 ? <br /> : null}
                            {line}
                          </span>
                        ))}
                      </span>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        </div>

        {/* SLIDER PAGINATION */}
        <div className="absolute inset-x-6 bottom-5 z-30 flex items-center justify-between gap-4 sm:inset-x-10 sm:bottom-6 md:inset-x-14 lg:inset-x-20 max-md:inset-x-6 max-md:bottom-5">
          <div className="flex items-center gap-2.5">
            {slides.slice(0, total).map((item, index) => {
              const isActive = index === active;

              return (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`${copy.slideLabel} ${index + 1}: ${item.name}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-7 bg-[#f2b842]"
                      : "w-2 bg-white/45 hover:bg-white/75"
                  }`}
                />
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.14em] text-white/90 tabular-nums sm:text-sm">
              {pad(active + 1)} / {pad(total)}
            </span>

            <span className="hidden h-[1.5px] w-10 bg-white/45 sm:block sm:w-16" />
          </div>
        </div>
      </div>

      {/* DESKTOP PREVIOUS BUTTON */}
      <button
        type="button"
        onClick={prev}
        aria-label={copy.prevLabel}
        className="absolute left-4 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/30 text-white transition-all duration-200 hover:bg-[#f2b842] hover:text-forest-900 active:scale-95 sm:flex lg:left-6"
      >
        <ChevronLeft
          aria-hidden="true"
          className="h-6 w-6"
          strokeWidth={2.1}
        />
      </button>

      {/* DESKTOP NEXT BUTTON */}
      <button
        type="button"
        onClick={next}
        aria-label={copy.nextLabel}
        className="absolute right-4 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/30 text-white transition-all duration-200 hover:bg-[#f2b842] hover:text-forest-900 active:scale-95 sm:flex lg:right-6"
      >
        <ChevronRight
          aria-hidden="true"
          className="h-6 w-6"
          strokeWidth={2.1}
        />
      </button>
    </section>
  );
}
