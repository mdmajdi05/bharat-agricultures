import Link from "next/link";
import { ArrowUpRight, Sprout } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { homeMachineGuideCopy } from "@/data/siteContent";

const hairline = "border-[#dcded2]";

export default function MachineGuide() {
  const { kicker, title, copy, groups, note, linkHref, linkLabel } = homeMachineGuideCopy;

  return (
    <section
      id="machine-guide"
      className="relative isolate overflow-hidden bg-[#f5f2e9] py-[clamp(4.5rem,9vw,7.5rem)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-64 top-24 -z-10 hidden h-[36rem] w-[36rem] rounded-full border border-[#e0e2d6] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-44 -z-10 hidden h-[23rem] w-[23rem] rounded-full border border-[#e0e2d6] lg:block"
      />

      <Container>
        <div className="grid gap-11 lg:grid-cols-[0.82fr_1.18fr] lg:gap-[clamp(4rem,7vw,7rem)]">
          <Reveal className="self-start lg:sticky lg:top-28">
            <SectionHeading kicker={kicker} title={title} copy={copy} />

            <div className={`mt-8 flex items-center gap-4 border-t pt-6 ${hairline}`}>
              <span className="font-display text-[2.5rem] leading-none tracking-[-0.04em] text-[#183d2d]">
                04
              </span>
              <div className="border-l border-[#d2d5c8] pl-4">
                <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-[#8f948a]">
                  Stages
                </span>
                <span className="mt-1 block text-[11px] leading-5 text-[#5d6a5d]">
                  Jutai se mandi tak
                </span>
              </div>
              <span
                aria-hidden="true"
                className="ml-auto hidden h-10 w-10 place-items-center rounded-full border border-[#d2d5c8] text-[#a97a20] lg:grid"
              >
                <Sprout size={17} strokeWidth={1.6} />
              </span>
            </div>
          </Reveal>

          <div className={`border-t ${hairline}`}>
            {groups.map((group, index) => (
              <Reveal key={group.label} delay={index * 70}>
                <article
                  className={`group relative grid grid-cols-[2.4rem_1fr] gap-4 border-b py-7 transition-colors duration-300 before:absolute before:-left-4 before:top-9 before:h-6 before:w-px before:bg-[#a97a20] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 sm:grid-cols-[3.6rem_1fr] sm:gap-6 sm:py-9 ${hairline}`}
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-[1.9rem] leading-[0.9] tracking-[-0.04em] text-[#c9cdbf] transition-colors duration-300 group-hover:text-[#b99a5c] sm:text-[2.5rem]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#9a7a3d]">
                      Step {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-2 font-display text-[clamp(1.45rem,2.4vw,1.95rem)] leading-[1.15] tracking-[-0.025em] text-[#183d2d]">
                      {group.label}
                    </h3>

                    <p className="mt-2 max-w-[44ch] text-[12.5px] leading-[1.8] text-[#6c7169]">
                      {group.copy}
                    </p>

                    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="group/link inline-flex items-center gap-1.5 border-b border-transparent pb-0.5 text-[11.5px] font-semibold text-[#334f3c] transition-colors duration-200 hover:border-[#c3a25c] hover:text-[#a97a20]"
                          >
                            {link.label}
                            <ArrowUpRight
                              size={12}
                              aria-hidden="true"
                              className="text-[#a9b0a4] transition-all duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-[#a97a20]"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <div
            className={`mt-10 flex flex-col gap-5 border-t pt-7 sm:flex-row sm:items-center sm:justify-between sm:gap-10 ${hairline}`}
          >
            <p className="max-w-[52ch] text-[12.5px] leading-[1.8] text-[#6c7169]">{note}</p>

            <Link
              href={linkHref}
              className="group inline-flex shrink-0 items-center gap-2 self-start border-b border-[#b9bdb0] pb-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#183d2d] transition-colors duration-200 hover:border-[#a97a20] hover:text-[#a97a20] sm:self-auto"
            >
              {linkLabel}
              <ArrowUpRight
                size={14}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
