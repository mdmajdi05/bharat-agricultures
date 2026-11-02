import Link from "next/link";
import { ArrowUpRight, Flame, Layers, Sprout } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { homePartsCopy } from "@/data/siteContent";

const categories = [
  {
    icon: Sprout,
    parts: ["Tines", "Blades", "Jaali", "Drum parts", "Bearings"],
  },
  {
    icon: Flame,
    parts: ["Pugmill blades", "Crusher hammers", "Screens", "Fan components"],
  },
  {
    icon: Layers,
    parts: ["Custom casting", "As per drawing", "As per sample"],
  },
];

export default function PartsTeaser() {
  const { kicker, copy, cards, linkHref, linkLabel } = homePartsCopy;

  return (
    <section
      id="parts"
      className="relative isolate overflow-hidden bg-[#071b10] pt-[clamp(3.5rem,6vw,5rem)] pb-[clamp(3rem,5vw,4rem)] text-[#f4f4ed]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(240,196,115,0.09),transparent_66%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-[linear-gradient(90deg,transparent,rgba(240,196,115,0.32),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-8 -z-10 hidden h-64 w-[26rem] opacity-40 [background-image:radial-gradient(circle,rgba(244,244,237,0.22)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:linear-gradient(to_left,black,transparent)] lg:block"
      />

      <Container>
        <Reveal>
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#f0c473] before:h-px before:w-7 before:bg-current before:content-['']">
                {kicker}
              </p>

              <h2 className="mt-4 max-w-[21ch] font-display text-[clamp(2.1rem,3.6vw,3.05rem)] leading-[1.05] tracking-[-0.04em] text-[#f4f4ed]">
                Machine chalti rahe,{" "}
                <em className="italic text-[#f0c473]">spare ready rahe</em>
              </h2>
            </div>

            <div className="max-w-[24rem] shrink-0 lg:pb-1">
              <p className="text-[12.5px] leading-[1.8] text-[#f4f4ed]/55">{copy}</p>

              <Link
                href={linkHref}
                className="group mt-5 inline-flex items-center gap-2 rounded-full border border-[#f4f4ed]/22 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.13em] !text-[#f4f4ed] transition-colors duration-200 hover:border-[#f0c473] hover:bg-[#f0c473] hover:!text-[#071b10]"
              >
                {linkLabel}
                <ArrowUpRight
                  size={14}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="mt-9 grid border-y border-[#f4f4ed]/12 lg:mt-11 lg:grid-cols-3">
          {cards.map((card, index) => {
            const category = categories[index] ?? categories[0];
            const Icon = category.icon;

            return (
              <Reveal key={card.href} delay={index * 70}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col border-b border-[#f4f4ed]/12 px-0 py-5 transition-colors duration-200 last:border-b-0 hover:bg-[#f4f4ed]/[0.025] lg:border-b-0 lg:border-r lg:px-7 lg:py-7 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-[#f0c473]/30 bg-[#f0c473]/10 text-[#f0c473] transition-colors duration-200 group-hover:border-[#f0c473] group-hover:bg-[#f0c473] group-hover:text-[#071b10]">
                      <Icon size={17} strokeWidth={1.7} aria-hidden="true" />
                    </span>

                    <span
                      aria-hidden="true"
                      className="font-display text-[1.35rem] leading-none tracking-[-0.04em] text-[#f4f4ed]/25 transition-colors duration-200 group-hover:text-[#f0c473]/60"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-[1.5rem] leading-tight tracking-[-0.02em] text-[#f4f4ed] transition-colors duration-200 group-hover:text-[#f0c473]">
                    {card.title}
                  </h3>

                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {category.parts.map((part) => (
                      <li
                        key={part}
                        className="rounded-full border border-[#f4f4ed]/12 bg-[#f4f4ed]/[0.04] px-2.5 py-1 text-[10px] font-medium text-[#f4f4ed]/55 transition-colors duration-200 group-hover:border-[#f0c473]/25 group-hover:text-[#f4f4ed]/75"
                      >
                        {part}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[9.5px] font-bold uppercase tracking-[0.14em] text-[#f4f4ed]/45 transition-colors duration-200 group-hover:text-[#f0c473]">
                    View parts
                    <ArrowUpRight
                      size={13}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={140}>
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-[#f4f4ed]/12 py-5">
            <ul className="flex flex-wrap gap-x-7 gap-y-2">
              {["Direct from manufacturer", "Wear parts ready", "Pan-India dispatch"].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#f4f4ed]/45"
                  >
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#f0c473]" />
                    {item}
                  </li>
                ),
              )}
            </ul>

            <span className="text-[10px] leading-5 text-[#f4f4ed]/35">
              Part number ya sample bhejein — hum match kar denge.
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
