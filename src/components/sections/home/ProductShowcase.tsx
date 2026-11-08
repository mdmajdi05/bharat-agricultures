"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import type { Product } from "@/data/products";
import type { UiCopy } from "@/data/ui";

type Filter = "all" | "agricultural" | "brick-kiln";

interface ProductShowcaseProps {
  products: Product[];
  copy: UiCopy["productShowcase"];
}

export default function ProductShowcase({ products, copy }: ProductShowcaseProps) {
  const filters = copy.filters as readonly { label: string; shortLabel: string; value: Filter }[];
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const counts: Record<Filter, number> = {
    all: products.length,
    agricultural: products.filter((product) => product.category === "agricultural").length,
    "brick-kiln": products.filter((product) => product.category === "brick-kiln").length,
  };

  const visibleProducts = useMemo(() => {
    if (activeFilter === "all") return products;

    return products.filter((product) => product.category === activeFilter);
  }, [activeFilter, products]);

  return (
    <section id="machinery" className="relative isolate overflow-hidden bg-[#071b10] py-16 text-cream md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-48 -z-10 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(240,184,74,0.11),transparent_66%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-[linear-gradient(90deg,transparent,rgba(240,184,74,0.35),transparent)]"
      />

      <Container>
        <Reveal>
          <div className="grid gap-8 border-b border-white/10 pb-9 lg:grid-cols-[1fr_21rem] lg:items-end lg:gap-16 lg:pb-12">
            <div>
              <p className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#f0b84a] before:h-px before:w-7 before:bg-current before:content-['']">
                {copy.kicker}
              </p>
              <h2 className="mt-5 max-w-[43rem] text-[clamp(2.2rem,4.6vw,3.7rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-cream">
                {copy.title}{" "}
                <span className="text-[#f0b84a]">{copy.titleAccent}</span>
              </h2>
            </div>

            <div>
              <p className="max-w-[22rem] text-sm leading-7 text-cream/60">
                {copy.description}
              </p>
              <Link
                href="/products"
                className="group mt-5 inline-flex items-center gap-2 border-b border-white/20 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-cream/80 transition-colors duration-200 hover:border-[#f0b84a] hover:text-[#f0b84a]"
              >
                {copy.catalogueLink}
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div
            aria-label={copy.filterAria}
            className="-mx-1 grid grid-cols-3 border-b border-white/10 px-1 sm:flex sm:items-center sm:gap-1 sm:border-b-0"
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  aria-pressed={isActive}
                  className={`flex flex-col items-center gap-0.5 whitespace-nowrap border-b-2 pb-2 pt-1 text-[9px] font-semibold uppercase tracking-[0.06em] transition-colors duration-200 sm:inline-flex sm:shrink-0 sm:flex-row sm:gap-0 sm:border-b-2 sm:px-3 sm:pb-2.5 sm:pt-1 sm:text-left sm:text-[11px] sm:tracking-[0.14em] ${
                    isActive
                      ? "border-[#f0b84a] text-cream"
                      : "border-transparent text-cream/40 hover:text-cream/75"
                  }`}
                >
                  <span className="sm:hidden">{filter.shortLabel}</span>
                  <span className="hidden sm:inline">{filter.label}</span>
                  <span
                    className={`text-[8px] font-medium sm:ml-1.5 sm:text-[9px] ${
                      isActive ? "text-[#f0b84a]" : "text-cream/25"
                    }`}
                  >
                    {counts[filter.value]}
                  </span>
                </button>
              );
            })}
          </div>

          <p
            aria-live="polite"
            className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.16em] text-cream/35 sm:text-[10px]"
          >
            {copy.showing} <span className="text-cream/70">{visibleProducts.length}</span>{" "}
            {visibleProducts.length === 1 ? copy.productSingular : copy.productPlural}
          </p>
        </div>

        <div
          key={activeFilter}
          className="grid grid-cols-2 gap-x-3 gap-y-7 sm:gap-x-5 md:grid-cols-3 xl:grid-cols-4"
        >
          {visibleProducts.map((product) => (
            <article key={product.slug} className="group min-w-0">
              <Link
                href={`/products/${product.slug}`}
                className="relative block aspect-[4_/_3] overflow-hidden rounded-sm bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:ring-[#f0b84a]/50"
                aria-label={`${copy.viewPrefix} ${product.name}`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,12,7,0.55)_0%,transparent_55%)]"
                />
                <span className="absolute left-2.5 top-2.5 rounded-sm border border-white/15 bg-[#04130b]/60 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-cream/75 backdrop-blur-sm sm:left-3 sm:top-3">
                  {copy.categoryLabels[product.category]}
                </span>
                <span className="absolute bottom-2.5 right-2.5 grid h-7 w-7 place-items-center rounded-full bg-[#f0b84a] text-[#071b10] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:bottom-3 sm:right-3 sm:h-8 sm:w-8">
                  <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
                </span>
              </Link>

              <div className="pt-3.5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-sans text-[15px] font-semibold leading-snug tracking-[-0.015em] text-cream transition-colors duration-200 group-hover:text-[#f0b84a] sm:text-[17px]">
                    {product.name}
                  </h3>
                  <span className="pt-0.5 text-[9px] tabular-nums text-cream/25">
                    {product.number}
                  </span>
                </div>

                <p className="mt-1.5 line-clamp-2 text-[10.5px] leading-[1.55] text-cream/45 sm:text-[12px]">
                  {product.tagline}
                </p>

                <span className="mt-2.5 inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.13em] text-cream/60 transition-colors duration-200 group-hover:text-[#f0b84a]">
                  {copy.viewDetails}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
