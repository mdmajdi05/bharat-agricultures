import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Cog } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { homePartsCopy } from "@/data/siteContent";

export default function PartsTeaser() {
  const { kicker, copy, cards, linkHref, linkLabel } = homePartsCopy;

  return (
    <section
      id="parts"
      className="relative isolate overflow-hidden bg-[#071b10] py-[clamp(4rem,8vw,6.5rem)] text-[#f4f4ed]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(240,196,115,0.1),transparent_66%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-[linear-gradient(90deg,transparent,rgba(240,196,115,0.32),transparent)]"
      />

      <Container>
        <div className="grid gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch lg:gap-[clamp(3.5rem,6vw,5.5rem)]">
          <Reveal className="order-1">
            <div className="relative h-full min-h-[22rem] overflow-hidden rounded-[1.35rem] bg-[#0b2417] ring-1 ring-[#f4f4ed]/10 sm:min-h-[26rem] lg:min-h-[37rem]">
              <Image
                src="/images/machining.jpg"
                alt="Precision machining of a large spare part at the manufacturing unit"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,19,11,0.5)_0%,rgba(4,19,11,0.08)_38%,rgba(4,19,11,0.72)_74%,rgba(4,19,11,0.95)_100%)]"
              />

              <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-[#f4f4ed]/25 bg-[#04130b]/45 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#f4f4ed]/85 backdrop-blur-sm">
                <Cog size={12} className="text-[#f0c473]" aria-hidden="true" />
                Genuine spares
              </span>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 lg:p-8">
                <span aria-hidden="true" className="block h-px w-8 bg-[#f0c473]" />
                <p className="mt-4 max-w-[19ch] font-display text-[clamp(1.5rem,2.2vw,2rem)] leading-[1.15] tracking-[-0.02em] text-[#f4f4ed]">
                  The right part.
                  <span className="mt-0.5 block italic text-[#f0c473]">
                    Right when you need it.
                  </span>
                </p>
                <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#f4f4ed]/45">
                  Made in our Sambhal unit
                </p>
              </div>
            </div>
          </Reveal>

          <div className="order-2 flex flex-col">
            <Reveal>
              <SectionHeading
                kicker={kicker}
                title={
                  <>
                    Machine chalti rahe, <em>spare ready rahe</em>
                  </>
                }
                copy={copy}
                light
              />
            </Reveal>

            <Reveal delay={90}>
              <div className="mt-8 border-t border-[#f4f4ed]/12">
                {cards.map((card, index) => (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="group flex items-start gap-4 border-b border-[#f4f4ed]/12 py-6 transition-colors duration-200 hover:bg-[#f4f4ed]/[0.03] sm:gap-6"
                  >
                    <span className="w-8 shrink-0 font-display text-[1.55rem] leading-none tracking-[-0.04em] text-[#c9a55e]/55 transition-colors duration-200 group-hover:text-[#f0c473]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-4">
                        <h3 className="font-display text-[1.45rem] leading-tight tracking-[-0.02em] text-[#f4f4ed] transition-colors duration-200 group-hover:text-[#f0c473] sm:text-[1.6rem]">
                          {card.title}
                        </h3>
                        <span
                          aria-hidden="true"
                          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#f4f4ed]/18 text-[#f4f4ed]/55 transition-all duration-200 group-hover:border-[#f0c473] group-hover:bg-[#f0c473] group-hover:text-[#071b10]"
                        >
                          <ArrowUpRight size={14} strokeWidth={1.8} />
                        </span>
                      </span>

                      <p className="mt-1.5 max-w-[46ch] text-[12px] leading-[1.75] text-[#f4f4ed]/55">
                        {card.copy}
                      </p>
                    </span>
                  </Link>
                ))}
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link
                  href={linkHref}
                  className="group inline-flex items-center gap-2 rounded-full border border-[#f4f4ed]/22 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.13em] text-[#f4f4ed] transition-colors duration-200 hover:border-[#f0c473] hover:bg-[#f0c473] hover:text-[#071b10]"
                >
                  {linkLabel}
                  <ArrowUpRight
                    size={14}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <span className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-[#f4f4ed]/45">
                  Tines / Blades / Jaali / Hammers / Bearings
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
