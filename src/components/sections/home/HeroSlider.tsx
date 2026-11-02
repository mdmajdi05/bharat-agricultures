"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type TouchEvent } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Cog, Handshake, ShieldCheck } from "lucide-react";

import type { HeroBadge, HeroCopy, HeroSlide } from "@/data/hero";

const AUTOPLAY_MS = 6500;

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
 * Full-bleed hero reel.
 *
 * One photograph per business line, copy locked to the left over a forest
 * wash, and a thumbnail strip directly underneath. Autoplay pauses for
 * reduced-motion visitors; dots, thumbnails, swipe and arrow keys navigate.
 */
export default function HeroSlider({ slides, copy, badges }: HeroSliderProps) {
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = slides.length;
  const slide = slides[active];

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

  if (total === 0 || !slide) return null;

  return (
    <>
      <section
        id="home"
        aria-roledescription="carousel"
        aria-label="Featured machinery"
        className="ba-hero relative isolate flex h-[calc(100svh-var(--hero-offset))] min-h-[660px] w-full items-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute inset-0 z-0 h-full w-full">
          {slides.map((item, index) => (
            <div
              key={item.slug}
              aria-hidden={index !== active}
              className={`ba-hero__slide absolute inset-0 h-full w-full ${
                index === active ? "opacity-100" : "pointer-events-none opacity-0"
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

        <div aria-hidden="true" className="ba-hero__vignette absolute inset-0 z-10" />

        <div className="relative z-20 mx-auto flex h-full w-full max-w-[1440px] flex-col px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="flex flex-1 items-center pb-28 pt-16 sm:pb-32 sm:pt-20 lg:pb-28">
            <div key={slide.slug} className="ba-hero-rise w-full max-w-[44rem] [text-shadow:0_1px_2px_rgba(3,14,9,0.45),0_12px_40px_rgba(3,14,9,0.35)]">
              <p className="text-[length:0.72rem] font-bold uppercase leading-[1.5] tracking-[0.24em] text-[#f2b842] sm:text-xs">
                {slide.eyebrow}
              </p>

              <h1 className="mt-4 text-[clamp(2.5rem,7vw,5.1rem)] font-semibold uppercase leading-[0.98] tracking-[0.02em] text-[#f7f6f0] sm:mt-5">
                <span className="block">{slide.title}</span>
                <span className="block text-[#f2b842]">{slide.titleAccent}</span>
              </h1>

              <p className="mt-5 max-w-[36rem] text-[clamp(1rem,1.55vw,1.32rem)] leading-[1.6] text-cream/95 sm:mt-6">
                {slide.subtitle}{" "}
                <span className="font-semibold text-[#f2b842]">{slide.subtitleAccent}</span>
                {slide.description ? (
                  <>
                    <br className="hidden sm:block" />{" "}
                    <span className="text-[0.93em] text-cream/80">{slide.description}</span>
                  </>
                ) : null}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
                <Link
                  href={slide.primaryHref}
                  className="group inline-flex min-h-[3.2rem] items-center justify-center gap-2.5 rounded-lg border border-[#f2b842] bg-[#f0a828] px-6 text-sm font-bold text-[#1b1916] shadow-lg shadow-amber-950/25 transition-all duration-200 hover:bg-[#ffc94d] hover:-translate-y-0.5 active:scale-[0.98] sm:min-h-[3.4rem] sm:px-7 sm:text-[15px]"
                >
                  {slide.primaryLabel}
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href={slide.secondaryHref}
                  className="inline-flex min-h-[3.2rem] items-center justify-center rounded-lg border border-white/80 bg-black/15 px-6 text-sm font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-forest-900 active:scale-[0.98] sm:min-h-[3.4rem] sm:px-7 sm:text-[15px]"
                >
                  {slide.secondaryLabel}
                </Link>
              </div>

              {slide.showBadges ? (
                <ul className="ba-hero__badges mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[0.72rem] leading-[1.35] text-cream/90 sm:mt-11 sm:gap-x-6 sm:text-[13px]">
                  {badges.map((badge, index) => {
                    const Icon = badgeIcon[badge.icon];

                    return (
                      <li
                        key={badge.icon}
                        className={`flex items-center gap-2.5 ${
                          index === badges.length - 1
                            ? ""
                            : "border-r border-[rgba(244,181,45,0.55)] pr-5 sm:pr-6"
                        }`}
                      >
                        <Icon
                          aria-hidden="true"
                          className="h-5 w-5 shrink-0 text-[#f2b842]"
                          strokeWidth={1.8}
                        />
                        <span>
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
              ) : null}
            </div>
          </div>

          <div className="absolute inset-x-6 bottom-5 flex items-center justify-between gap-4 sm:inset-x-10 sm:bottom-6 md:inset-x-14 lg:inset-x-20">
            <div className="flex items-center gap-2.5">
              {slides.map((item, index) => {
                const isActive = index === active;

                return (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`${copy.slideLabel} ${index + 1}: ${item.name}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      isActive ? "w-7 bg-[#f2b842]" : "w-2 bg-white/45 hover:bg-white/75"
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

        <button
          type="button"
          onClick={prev}
          aria-label={copy.prevLabel}
          className="absolute left-4 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/30 text-white transition-all duration-200 hover:bg-[#f2b842] hover:text-forest-900 active:scale-95 sm:flex lg:left-6"
        >
          <ChevronLeft aria-hidden="true" className="h-6 w-6" strokeWidth={2.1} />
        </button>

        <button
          type="button"
          onClick={next}
          aria-label={copy.nextLabel}
          className="absolute right-4 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/30 text-white transition-all duration-200 hover:bg-[#f2b842] hover:text-forest-900 active:scale-95 sm:flex lg:right-6"
        >
          <ChevronRight aria-hidden="true" className="h-6 w-6" strokeWidth={2.1} />
        </button>
      </section>

      <div aria-label="Featured categories" className="bg-[#061b0e] px-[var(--gutter)] py-3 sm:py-4">
        <div className="mx-auto grid max-w-[1440px] grid-cols-4 gap-2 sm:gap-4">
          {slides.map((item, index) => {
            const isActive = index === active;

            return (
              <button
                key={item.slug}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`${copy.thumbnailLabel} ${index + 1}: ${item.name}`}
                aria-current={isActive ? "true" : undefined}
                className={`group relative h-[4.6rem] overflow-hidden rounded-lg border-2 transition-colors duration-200 sm:h-[6rem] lg:h-[7.8rem] lg:rounded-xl ${
                  isActive ? "border-[#f2b842]" : "border-white/20 hover:border-white/50"
                }`}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 25vw, 360px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: item.focus }}
                />
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 bg-forest-950 transition-opacity duration-200 ${
                    isActive ? "opacity-0" : "opacity-35 group-hover:opacity-10"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
