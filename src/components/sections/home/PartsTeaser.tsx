
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Flame,
  Layers,
  Sprout,
  Settings,
  ShieldCheck,
  Handshake,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { homePartsCopy } from "@/data/siteContent";

const categories = [
  {
    icon: Sprout,
    number: "01",
    image: "/images/parts/agricultural-parts.webp",
    alt: "Agricultural machinery spare parts",
    parts: "Tines • Blades • Jaali • Bearings",
  },
  {
    icon: Layers,
    number: "02",
    image: "/images/parts/brick-kiln-parts.webp",
    alt: "Brick kiln machinery spare parts",
    parts: "Pugmill Blades • Hammers • Screens",
  },
  {
    icon: Settings,
    number: "03",
    image: "/images/parts/casting-parts.webp",
    alt: "Industrial metal casting components",
    parts: "Custom Casting • As Per Drawing",
  },
];

const trustItems = [
  { icon: ShieldCheck, label: "Premium Quality" },
  { icon: Settings, label: "Direct Manufacturer" },
  { icon: Handshake, label: "Reliable Support" },
];

export default function PartsTeaser() {
  const { kicker, copy, cards, linkHref } = homePartsCopy;

  return (
    <section
      id="parts"
      className="parts-showcase relative isolate overflow-hidden bg-[#00351f] py-9 text-white sm:py-14 lg:py-[76px]"
    >
      {/* BACKGROUND EFFECTS */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-48 -z-10 h-[350px] w-[350px] rounded-full bg-[#75b943]/30 blur-[100px] sm:h-[450px] sm:w-[450px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-0 -z-10 h-[300px] w-[300px] rounded-full bg-[#001d12]/70 blur-[90px] sm:h-[400px] sm:w-[400px]"
      />

      {/* DECORATIVE GEAR */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-5 -z-10 hidden text-[#e9bd36]/[0.055] lg:block"
      >
        <Settings size={330} strokeWidth={0.7} />
      </div>

      {/* BOTTOM WAVES */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-[8%] -z-10 h-36 w-[116%] rotate-[-2deg] rounded-[50%] border-t-[15px] border-[#65a837]/80 bg-[#17602d]/30"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-[10%] -z-10 h-36 w-[120%] rotate-[1deg] rounded-[50%] border-t-[5px] border-[#a3cb48]/40"
      />

      <Container>
        {/* HEADING */}

        <Reveal>
          <div className="mx-auto max-w-[1100px] text-center">

            {/* KICKER */}

            <div className="mx-auto flex max-w-[820px] items-center justify-center gap-2 sm:gap-5">
              <span className="h-px min-w-4 flex-1 bg-gradient-to-r from-transparent via-[#e8bd35] to-[#e8bd35] sm:h-[2px]" />

              <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#e7bd30]/75 bg-[#004328] px-3.5 py-2 shadow-[0_0_25px_rgba(232,189,53,0.08)] sm:gap-3 sm:px-7 sm:py-2.5">
                <Settings
                  size={18}
                  strokeWidth={2.8}
                  className="text-[#ffc629] sm:h-[23px] sm:w-[23px]"
                />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.13em] sm:text-base">
                  {kicker || "Parts & Spares"}
                </span>
              </span>

              <span className="h-px min-w-4 flex-1 bg-gradient-to-l from-transparent via-[#e8bd35] to-[#e8bd35] sm:h-[2px]" />
            </div>

            {/* MAIN HEADING */}

            <h2 className="mx-auto mt-5 max-w-[1000px] text-[clamp(2rem,7.5vw,4.55rem)] font-extrabold leading-[1.12] tracking-[-0.045em] text-white sm:mt-5 sm:text-[clamp(2.5rem,5.2vw,4.55rem)]">
              Keep Every Machine{" "}
              <span className="italic text-[#ffc52e]">
                Running.
              </span>
            </h2>

            {/* SUBHEADING */}

            <div className="mt-3 flex items-center justify-center gap-2 sm:gap-6">
              <span className="hidden h-[2px] w-16 bg-gradient-to-r from-transparent to-[#e9c77a] sm:block" />

              <p className="text-[clamp(1rem,3.7vw,2rem)] font-semibold leading-tight text-[#f2e9c9] sm:text-[clamp(1.1rem,2.5vw,2rem)]">
                Genuine Parts. Reliable Performance.
              </p>

              <span className="hidden h-[2px] w-16 bg-gradient-to-l from-transparent to-[#e9c77a] sm:block" />
            </div>

            <p className="mx-auto mt-3 max-w-3xl px-2 text-[12px] leading-[1.8] text-white/75 sm:text-base sm:leading-6">
              High-quality spare parts for agricultural, brick kiln and
              industrial machinery.
            </p>
          </div>
        </Reveal>

        {/* CATEGORY CARDS */}

        <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6">

          {cards.slice(0, 3).map((card, index) => {
            const category = categories[index];
            if (!category) return null;

            const Icon = category.icon;

            return (
              <Reveal key={card.href} delay={index * 100}>
                <Link
                  href={card.href}
                  className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[17px] border-[1.5px] border-[#8fbe59] bg-[#f8f4df] shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-500 active:scale-[0.99] hover:-translate-y-2 hover:border-[#f4c62e] hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] sm:rounded-[24px] sm:border-2"
                >
                  {/* IMAGE */}

                  <div className="relative aspect-[1.7/1] overflow-hidden bg-[#dce5d4] sm:aspect-[1.55/1]">

                    <Image
                      src={category.image}
                      alt={category.alt}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#173c21]/25 to-transparent" />

                    {/* NUMBER BADGE */}

                    <div className="absolute left-0 top-0 z-10 flex h-[48px] min-w-[65px] items-center justify-center rounded-br-[19px] bg-gradient-to-br from-[#08743c] to-[#004225] px-3 shadow-lg sm:h-[65px] sm:min-w-[82px] sm:rounded-br-[25px] sm:px-4">
                      <span className="text-[25px] font-extrabold leading-none text-white sm:text-[32px]">
                        {category.number}
                      </span>
                    </div>

                  </div>

                  {/* INFORMATION PANEL */}

                  <div className="relative z-10 -mt-[1px] flex min-h-[88px] items-center gap-2 bg-[#f8f4df] px-2.5 py-3 sm:min-h-[112px] sm:gap-4 sm:px-5 sm:py-4">

                    {/* ICON */}

                    <div className="grid h-[48px] w-[48px] shrink-0 place-items-center bg-[#eeeed8] text-[#07512e] sm:h-[76px] sm:w-[80px]">
                      <Icon
                        size={30}
                        strokeWidth={2.1}
                        className="transition-transform duration-500 group-hover:scale-110 sm:h-[43px] sm:w-[43px]"
                      />
                    </div>

                    {/* TEXT */}

                    <div className="min-w-0 flex-1">
                      <h3 className="break-words font-display text-[16px] font-bold leading-tight tracking-[-0.035em] text-[#103c27] sm:text-[21px] lg:text-[clamp(17px,1.5vw,22px)]">
                        {card.title}
                      </h3>

                      <p className="mt-1 text-[10px] leading-[1.5] text-[#60645b] sm:mt-1.5 sm:text-[13px]">
                        {category.parts}
                      </p>
                    </div>

                    {/* ARROW */}

                    <span className="grid h-[37px] w-[37px] shrink-0 place-items-center rounded-full bg-[#00432a] text-white shadow-md transition-all duration-300 group-hover:rotate-[-35deg] group-hover:bg-[#e9b62b] group-hover:text-[#06351f] sm:h-[51px] sm:w-[51px]">
                      <ArrowRight
                        size={20}
                        strokeWidth={2}
                        className="sm:h-[25px] sm:w-[25px]"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* TRUST BAR */}

        <Reveal delay={150}>
          <div className="mt-7 border-y border-[#a6c88a]/20 py-5 sm:mt-10 sm:py-5">

            <div className="flex flex-col items-center justify-between gap-5 lg:flex-row lg:gap-5">

              {/* BENEFITS */}

              <div className="grid w-full grid-cols-3 gap-2 sm:flex sm:items-center sm:justify-center lg:w-auto">

                {trustItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className={`flex min-w-0 flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3 sm:px-5 lg:px-7 ${
                        index !== 0
                          ? "sm:border-l sm:border-white/35"
                          : ""
                      }`}
                    >
                      <Icon
                        size={25}
                        strokeWidth={1.9}
                        className="shrink-0 text-white sm:h-10 sm:w-10"
                      />

                      <span className="max-w-[100px] text-[9px] font-semibold leading-[1.35] text-white sm:max-w-none sm:text-sm">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}

              <Link
                href={linkHref}
                className="group inline-flex min-h-[48px] w-full items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#ffcf39] to-[#f3ad08] px-7 py-3.5 text-[13px] font-extrabold text-[#07351e] shadow-[0_7px_20px_rgba(239,179,17,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(239,179,17,0.35)] sm:min-h-[54px] sm:w-auto sm:min-w-[250px] sm:gap-4 sm:px-8 sm:py-4 sm:text-[14px]"
              >
                Explore All Parts

                <ArrowRight
                  size={19}
                  strokeWidth={2.3}
                  className="transition-transform duration-300 group-hover:translate-x-1.5 sm:h-[22px] sm:w-[22px]"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>

      {/* DECORATIVE LEAVES */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-3 -left-5 -z-10 hidden h-32 w-32 opacity-70 sm:block"
      >
        <Sprout
          size={135}
          strokeWidth={1.1}
          className="rotate-[-28deg] text-[#80b937]"
        />
      </div>
    </section>
  );
}
