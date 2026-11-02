"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type TouchEvent } from "react";
import { ArrowUpRight } from "lucide-react";

import type { HeroCopy } from "@/data/hero";

export type SlideData = {
  id: string;
  tagline: string;
  title: string;
  highlight: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image: string;
  alt: string;
  /** `object-position` for the photo crop. */
  focus?: string;
  badge: string;
};

const AUTOPLAY_INTERVAL = 7000;

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Full-bleed product reel with no player chrome: the photograph and a
 * headline that swaps with each slide. Autoplay pauses on hover/focus and is
 * switched off entirely when the visitor prefers reduced motion.
 */
export default function HeroSlider({ slides, copy }: { slides: SlideData[]; copy: HeroCopy }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const total = slides.length;
  const current = slides[active] ?? slides[0];

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || total < 2) return;

    const timer = window.setTimeout(() => setActive((index) => (index + 1) % total), AUTOPLAY_INTERVAL);
    return () => window.clearTimeout(timer);
  }, [active, paused, reducedMotion, total]);

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY };
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    const origin = touchStart.current;
    if (!origin) return;

    touchStart.current = null;

    const dx = event.changedTouches[0].clientX - origin.x;
    const dy = event.changedTouches[0].clientY - origin.y;

    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      setActive((index) => (index + (dx < 0 ? 1 : -1) + total) % total);
    }
  };

  if (!current) return null;

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured machinery"
      className="relative isolate overflow-hidden bg-forest-950 text-cream min-h-[clamp(30rem,calc(100svh_-_var(--header-h)_-_4.1rem),52rem)] min-[1200px]:min-h-[clamp(34rem,calc(100svh_-_7.4rem),56rem)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Photography: one plate per product, cross-fading with a slow drift. */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        {slides.map((slide, index) => {
          const isActive = index === active;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-[1100ms] ease-out motion-reduce:transition-none ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className={`relative h-full w-full transition-transform duration-[9000ms] ease-out motion-reduce:transition-none ${
                  isActive ? "scale-[1.045] motion-reduce:scale-100" : "scale-100"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                  style={{ objectPosition: slide.focus ?? "50% 50%" }}
                />
              </div>
            </div>
          );
        })}

        {/* Brand-tinted scrims keep the type legible without washing out the photo. */}
        <div className="absolute inset-0 bg-[linear-gradient(104deg,rgba(5,19,12,0.94)_0%,rgba(5,19,12,0.66)_42%,rgba(5,19,12,0.16)_76%,rgba(5,19,12,0.42)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[62%] bg-[linear-gradient(to_top,rgba(5,19,12,0.92)_0%,rgba(5,19,12,0.34)_52%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[inherit] w-full min-w-0 max-w-[1320px] flex-col px-[var(--gutter)] pb-7 pt-6 sm:pt-8 lg:pb-12 lg:pt-10">
        {/* Masthead line: where we are, and which plate is on screen. */}
        <div className="flex items-start justify-between gap-6 border-b border-cream/15 pb-4">
          <p className="flex min-w-0 items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-cream/80">
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            <span className="min-w-0">{copy.eyebrow}</span>
          </p>

          <p className="shrink-0 pt-0.5 font-mono text-[0.66rem] tracking-[0.18em] text-cream/70 tabular-nums">
            <span className="text-gold-bright">{pad(active + 1)}</span>
            <span className="mx-1.5 text-cream/35">/</span>
            {pad(total)}
          </p>
        </div>

        {/* Headline: anchored bottom-left with a fixed rhythm — kicker, title,
            lead, actions — so every slide lands in the same place. */}
        <div className="mt-auto grid min-w-0 grid-cols-1 items-end gap-8 pt-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:pt-20">
          <div key={current.id} className="ba-hero-rise w-full min-w-0 max-w-[46rem]">
            <p className="flex items-center gap-3 text-[0.6rem] font-bold uppercase tracking-[0.24em] text-gold-soft">
              <span aria-hidden="true" className="h-px w-8 shrink-0 bg-gold/60" />
              {current.badge}
            </p>

            <h1 className="mt-3.5 font-display text-[clamp(2.15rem,5.2vw,4.1rem)] font-medium leading-[1.02] tracking-[-0.03em] text-balance">
              {current.title}
              {current.highlight ? (
                <>
                  {" "}
                  <em className="italic text-gold-soft">{current.highlight}</em>
                </>
              ) : null}
            </h1>

            <p className="mt-4 w-full max-w-[32rem] text-[0.95rem] leading-[1.7] text-cream/75 line-clamp-3 sm:line-clamp-2 sm:text-base">
              {current.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href={current.primaryCta.href}
                className="group inline-flex min-h-[2.85rem] items-center justify-center gap-2 rounded-[2px] bg-[linear-gradient(135deg,#f7dca4_0%,#e8b458_46%,#d8a440_100%)] px-5 py-3 text-[0.6rem] font-extrabold uppercase leading-none tracking-[0.1em] text-forest-950 shadow-[0_16px_34px_-16px_rgba(216,164,64,0.7),inset_0_1px_0_rgba(255,255,255,0.55)] transition-[transform,box-shadow,background] duration-200 hover:-translate-y-px hover:bg-[linear-gradient(135deg,#fde8bb_0%,#f0c473_46%,#e0ae4c_100%)]"
              >
                {current.primaryCta.label}
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              {current.secondaryCta ? (
                <a
                  href={current.secondaryCta.href}
                  className="group inline-flex items-center gap-1.5 border-b border-gold-bright/45 pb-1 pt-1 text-[0.6rem] font-extrabold uppercase tracking-[0.12em] text-cream transition-colors duration-200 hover:border-gold-bright hover:text-gold-bright"
                >
                  {current.secondaryCta.label}
                  <ArrowUpRight aria-hidden="true" className="h-3 w-3 text-gold-bright transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ) : null}
            </div>
          </div>

          {/* Chapter index — thin rules, no player chrome. */}
          <div className="flex items-center gap-2 lg:justify-end lg:pb-1.5">
            {slides.map((slide, index) => {
              const isActive = index === active;

              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`${copy.slideLabel}: ${slide.title}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`h-[2px] rounded-full transition-all duration-500 ${
                    isActive ? "w-12 bg-gold-soft" : "w-6 bg-cream/25 hover:bg-cream/50"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
