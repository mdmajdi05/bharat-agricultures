"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type TouchEvent } from "react";
import { ArrowRight, Cog, Handshake, ShieldCheck } from "lucide-react";

import type { HeroBadge, HeroCopy, HeroSlide } from "@/data/hero";

const AUTOPLAY_MS = 5000;

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

/**
 * Full-bleed hero reel: one photograph per product, the brand lockup and
 * claim on the left, trust icons underneath. Autoplay pauses when the visitor
 * prefers reduced motion; arrows, dots, swipe and arrow keys all navigate.
 */
export default function HeroSlider({ slides, copy, badges }: HeroSliderProps) {
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = slides.length;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reducedMotion || total < 2) return;

    const timer = window.setTimeout(() => setActive((index) => (index + 1) % total), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [active, reducedMotion, total]);

  const goTo = (index: number) => setActive(((index % total) + total) % total);
  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") setActive((index) => (index + 1) % total);
      if (event.key === "ArrowLeft") setActive((index) => (index - 1 + total) % total);
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
    if (Math.abs(diff) > 45) goTo(active + (diff > 0 ? 1 : -1));
  };

  if (total === 0) return null;

  return (
    <section
      id="hero"
      aria-roledescription="carousel"
      aria-label={`${copy.brandLine1} ${copy.brandLine2}`}
      className="ba-hero relative isolate flex h-[calc(100svh-var(--hero-offset))] min-h-[640px] w-full items-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      <div className="absolute inset-0 z-0 h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.slug}
            aria-hidden={index !== active}
            className={`ba-hero__slide absolute inset-0 h-full w-full ${
              index === active ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={index === active ? slide.imageAlt : ""}
              fill
              priority={index === 0}
              sizes="100vw"
              className="ba-hero__img"
              style={{ objectPosition: slide.focus }}
            />
          </div>
        ))}
      </div>

      <div aria-hidden="true" className="ba-hero__vignette absolute inset-0 z-10" />

      <div className="relative z-20 mx-auto flex h-full w-full max-w-[1440px] flex-col justify-between px-6 pb-[calc(5.6rem+env(safe-area-inset-bottom))] pt-8 sm:px-12 sm:pt-10 md:px-16 lg:px-20 lg:pt-12 min-[1200px]:pb-12">
        <div className="h-2 shrink-0" />

        <div className="mt-auto w-full max-w-[36rem] pb-10 [text-shadow:0_1px_2px_rgba(3,14,9,0.6),0_10px_36px_rgba(3,14,9,0.5)] sm:pb-14">
          <h1 className="text-balance font-display text-[clamp(2.05rem,6.6vw,4.1rem)] font-semibold uppercase leading-[1.04] tracking-[0.045em] text-[#f7f6f0]">
            {copy.brandLine1}
            <br />
            <span className="tracking-[0.055em] text-[#f5eed6]">{copy.brandLine2}</span>
          </h1>

          <h2 className="mt-6 text-[clamp(1.1rem,2.5vw,1.55rem)] font-semibold leading-[1.3] text-white sm:mt-8">
            {copy.subheading}{" "}
            <span className="text-[#f2b842]">{copy.subheadingAccent}</span>
          </h2>

          <p className="mt-4 max-w-[46ch] text-[0.9rem] leading-[1.7] text-cream/80 sm:mt-5 sm:text-[0.98rem]">
            {copy.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
            <Link
              href={copy.primaryHref}
              className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#f0a828] px-6 py-3 text-sm font-semibold text-[#1b1916] shadow-lg shadow-amber-950/30 transition-all duration-200 hover:bg-[#dba828] active:scale-[0.98] sm:px-7 sm:py-3.5 sm:text-[15px]"
            >
              {copy.primaryLabel}
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href={copy.secondaryHref}
              className="inline-flex items-center justify-center rounded-lg border border-white/80 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 hover:border-white hover:bg-white/10 active:scale-[0.98] sm:px-7 sm:py-3.5 sm:text-[15px]"
            >
              {copy.secondaryLabel}
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[0.7rem] font-normal text-cream/90 sm:mt-10 sm:text-[0.8rem]">
            {badges.map((badge, index) => {
              const Icon = badgeIcon[badge.icon];

              return (
                <li
                  key={badge.icon}
                  className={`flex items-center gap-2 ${
                    index === 0
                      ? "sm:border-r sm:border-white/20 sm:pr-5"
                      : index === badges.length - 1
                        ? "sm:pl-5"
                        : "sm:border-r sm:border-white/20 sm:px-5"
                  }`}
                >
                  <Icon
                    aria-hidden="true"
                    className="h-[1.15rem] w-[1.15rem] shrink-0 text-[#f2b842] sm:h-5 sm:w-5"
                    strokeWidth={1.8}
                  />
                  <span className="leading-[1.35]">
                    {badge.lines.map((line, lineIndex) => (
                      <span key={line}>
                        {lineIndex > 0 ? <br /> : null}
                        {line}
                      </span>
                    ))}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex w-full items-center justify-between gap-4 pt-5 sm:pt-6">
          <div className="hidden w-24 sm:block" />

          <div className="mx-auto flex items-center justify-center gap-2 sm:mx-0">
            {slides.map((slide, index) => {
              const isActive = index === active;

              return (
                <button
                  key={slide.slug}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`${copy.slideLabel}: ${slide.name}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive ? "w-8 bg-[#f2b842]" : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-medium tracking-wider text-white/90 tabular-nums sm:text-sm">
              {pad(active + 1)} / {pad(total)}
            </span>
            <div className="hidden h-[1.5px] w-10 bg-white/40 sm:block sm:w-16" />
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label={copy.prevLabel}
        className="absolute left-6 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 lg:flex items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/90 backdrop-blur-md transition-all duration-200 hover:bg-black/70 hover:text-white active:scale-95"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className="-ml-0.5 h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        onClick={next}
        aria-label={copy.nextLabel}
        className="absolute right-6 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 lg:flex items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/90 backdrop-blur-md transition-all duration-200 hover:bg-black/70 hover:text-white active:scale-95"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className="-mr-0.5 h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
