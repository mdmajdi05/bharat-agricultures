"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import type { Product } from "@/data/products";

type Filter = "all" | "agricultural" | "brick-kiln";

interface ProductShowcaseProps {
  products: Product[];
}

const productImage: Record<string, string> = {
  "agricultural-dust-cleaner-machine": "/images/wheat-grain.jpg",
  "paddy-cleaner-machine": "/images/products/paddy-cleaner.jpg",
  "disc-harrow": "/images/products/cultivator.jpg",
  "agricultural-harrow-machine": "/images/soil-preparation.jpg",
  "hawa-thresher-machine": "/images/wheat-field.jpg",
  "agricultural-thresher-machine": "/images/products/thresher.jpg",
  "maize-thresher-machine": "/images/farm-barn.jpg",
  "plate-land-leveler": "/images/tractor-field.jpg",
  "2-in-1-land-leveler": "/images/hero-field.jpg",
  "tractor-cultivator": "/images/products/cultivator.jpg",
  "pugmill-machine": "/images/products/pugmill.jpg",
  "id-fan-for-brick-kiln": "/images/machining.jpg",
  "coal-crusher-machine": "/images/welding.jpg",
};

const filters: { label: string; value: Filter }[] = [
  { label: "All machinery", value: "all" },
  { label: "Agricultural", value: "agricultural" },
  { label: "Brick Kiln", value: "brick-kiln" },
];

export default function ProductShowcase({ products }: ProductShowcaseProps) {
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
    <section id="machinery" className="relative isolate overflow-hidden bg-[#f7f7f2] py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-0 -z-10 h-[38rem] w-[38rem] rounded-full border border-[#dfe2d6]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-20 -z-10 h-[26rem] w-[26rem] rounded-full border border-[#dfe2d6]"
      />

      <Container>
        <div className="grid gap-10 lg:grid-cols-[21rem_1fr] lg:gap-14 xl:grid-cols-[23rem_1fr]">
          {/* Catalogue rail */}
          <Reveal className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-[2px] w-8 bg-[#a77b3c]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#667363]">
                Our Machinery
              </span>
            </div>

            <h2 className="mt-5 text-[clamp(2.15rem,3.7vw,3.1rem)] font-semibold leading-[1.06] tracking-[-0.045em] text-[#183d2d]">
              Equipment built for{" "}
              <span className="text-[#a77b3c]">better work.</span>
            </h2>

            <p className="mt-5 max-w-[26rem] text-sm leading-7 text-[#6c7169]">
              Explore dependable machinery designed for agricultural operations and brick kiln
              industries. Find the right equipment for your work.
            </p>

            <div className="mt-6 flex items-center gap-5 text-xs text-[#536153]">
              <span>
                <strong className="mr-1.5 text-base font-semibold text-[#183d2d]">
                  {products.length}
                </strong>
                Products
              </span>
              <span aria-hidden="true" className="h-4 w-px bg-[#d4d6cc]" />
              <span>
                <strong className="mr-1.5 text-base font-semibold text-[#183d2d]">02</strong>
                Industries
              </span>
            </div>

            <div className="mt-7 flex flex-wrap gap-2 lg:hidden">
              {filters.map((filter) => {
                const isActive = activeFilter === filter.value;

                return (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => setActiveFilter(filter.value)}
                    aria-pressed={isActive}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[11px] font-semibold transition-colors duration-200 ${
                      isActive
                        ? "border-[#183d2d] bg-[#183d2d] text-white"
                        : "border-[#d4d7cc] bg-transparent text-[#5d665d] hover:border-[#183d2d] hover:text-[#183d2d]"
                    }`}
                  >
                    {filter.label}
                    <span className={isActive ? "text-white/65" : "text-[#92988e]"}>
                      {counts[filter.value]}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 hidden border-t border-[#dcddd3] lg:block">
              {filters.map((filter) => {
                const isActive = activeFilter === filter.value;

                return (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => setActiveFilter(filter.value)}
                    aria-pressed={isActive}
                    className="group flex w-full items-center justify-between gap-4 border-b border-[#dcddd3] py-4 text-left transition-colors duration-200"
                  >
                    <span className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
                          isActive
                            ? "bg-[#a77b3c]"
                            : "bg-transparent group-hover:bg-[#a77b3c]/50"
                        }`}
                      />
                      <span
                        className={`text-[12px] font-semibold uppercase tracking-[0.1em] transition-colors duration-200 ${
                          isActive
                            ? "text-[#183d2d]"
                            : "text-[#6c7169] group-hover:text-[#183d2d]"
                        }`}
                      >
                        {filter.label}
                      </span>
                    </span>
                    <span
                      className={`grid h-6 min-w-6 place-items-center rounded-full px-1.5 text-[10px] font-semibold transition-colors duration-200 ${
                        isActive
                          ? "bg-[#183d2d] text-white"
                          : "bg-[#e8e8e0] text-[#7b8277] group-hover:bg-[#183d2d] group-hover:text-white"
                      }`}
                    >
                      {counts[filter.value]}
                    </span>
                  </button>
                );
              })}
            </div>

            <Link
              href="/products"
              className="group mt-7 hidden items-center gap-2 border-b border-[#b9bdb2] pb-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#183d2d] transition-colors duration-200 hover:border-[#a77b3c] hover:text-[#a77b3c] lg:inline-flex"
            >
              Browse full catalogue
              <ArrowUpRight
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </Reveal>

          {/* Catalogue grid */}
          <div>
            <div className="mb-5 flex items-center justify-between gap-4 border-b border-[#dcddd3] pb-4">
              <p aria-live="polite" className="text-xs text-[#858b80]">
                Showing{" "}
                <span className="font-semibold text-[#183d2d]">{visibleProducts.length}</span>{" "}
                {visibleProducts.length === 1 ? "product" : "products"}
              </p>
              <span className="hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9a9f95] sm:inline-flex">
                Built in Sambhal, UP
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#a77b3c]" />
              </span>
            </div>

            <div
              key={activeFilter}
              className="grid grid-cols-2 gap-3 min-[560px]:gap-5"
            >
              {visibleProducts.map((product) => (
                <article
                  key={product.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#e1e3da] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#c9d1c3] hover:shadow-[0_18px_42px_rgba(24,61,45,0.09)]"
                >
                  <Link
                    href={`/products/${product.slug}`}
                    className="relative block overflow-hidden"
                    aria-label={`View ${product.name}`}
                  >
                    <div className="relative aspect-[4_/_3] w-full bg-cream-soft sm:aspect-[5_/_3.5]">
                      <Image
                        src={productImage[product.slug] ?? product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 560px) 50vw, (max-width: 1024px) 50vw, 30vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.045]"
                      />
                    </div>

                    <span className="absolute left-2.5 top-2.5 rounded-sm border border-white/80 bg-white/90 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#435746] backdrop-blur-sm sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-[9px]">
                      {product.category === "brick-kiln" ? "Brick Kiln" : "Agricultural"}
                    </span>

                    <span className="absolute bottom-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#183d2d] shadow-sm transition-all duration-300 group-hover:bg-[#183d2d] group-hover:text-white sm:bottom-4 sm:right-4 sm:h-9 sm:w-9">
                      <ArrowUpRight size={15} strokeWidth={1.7} />
                    </span>
                  </Link>

                  <div className="flex flex-1 flex-col px-3 pb-3 pt-3.5 sm:px-5 sm:pb-5 sm:pt-5">
                    <div className="mb-2 flex items-center justify-between gap-3 sm:mb-3">
                      <span className="hidden truncate text-[10px] font-semibold uppercase tracking-[0.15em] text-[#a27b43] sm:block">
                        {product.eyebrow}
                      </span>
                      <span className="shrink-0 text-[9px] tabular-nums text-[#a2a69c] sm:text-[10px]">
                        {product.number}
                      </span>
                    </div>

                    <h3 className="text-[15px] font-semibold leading-snug tracking-[-0.02em] text-[#183d2d] transition-colors duration-200 group-hover:text-[#a27b43] sm:text-[19px] sm:tracking-[-0.025em]">
                      {product.name}
                    </h3>

                    <p className="mt-1.5 text-[11px] font-medium leading-4 text-[#697468] sm:mt-2 sm:text-[13px] sm:leading-5">
                      {product.tagline}
                    </p>

                    <p className="mt-3 hidden line-clamp-2 text-[12px] leading-[1.8] text-[#858a80] sm:block">
                      {product.description}
                    </p>

                    <div className="mt-auto pt-3 sm:pt-5">
                      <div className="mb-3 h-px bg-[#ecede7] sm:mb-4" />

                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#183d2d] transition-colors duration-200 hover:text-[#a77b3c] sm:gap-2 sm:text-[10px] sm:tracking-[0.12em]"
                      >
                        Explore Product
                        <ArrowRight
                          size={13}
                          aria-hidden="true"
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
