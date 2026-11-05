import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { getSiteContent } from "@/data/localized";

const hairline = "border-line";

const stageVisuals = [
  {
    image: "/products/cultivator.png",
    alt: "Bharat Agricultures tractor cultivator",
  },
  {
    image: "/products/Plate Land Leveler.png",
    alt: "Bharat Agricultures plate land leveler",
  },
  {
    image: "/products/Thresher.png",
    alt: "Bharat Agricultures agricultural thresher",
  },
  {
    image: "/products/Paddy Cleaner.png",
    alt: "Bharat Agricultures paddy cleaner",
  },
];

export default async function MachineGuide() {
  const { homeMachineGuideCopy } = await getSiteContent();
  const { kicker, title, copy, groups, note, linkHref, linkLabel } = homeMachineGuideCopy;

  return (
    <section
      id="machine-guide"
      className="relative isolate overflow-hidden bg-page py-[clamp(4rem,7vw,6rem)]"
    >
      <Container>
        <Reveal>
          <div
            className={`flex flex-col gap-8 border-b pb-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:pb-10 ${hairline}`}
          >
            <SectionHeading kicker={kicker} title={title} copy={copy} />

            <div className="max-w-[21rem] shrink-0 lg:pb-1">
              <p className="text-[12px] leading-[1.75] text-muted">{note}</p>
              <Link
                href={linkHref}
                className="group mt-4 inline-flex items-center gap-2 border-b border-line-strong pb-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-ink transition-colors duration-200 hover:border-gold-deep hover:text-gold-deep"
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

        <div className="mt-9 grid gap-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-7">
          {groups.map((group, index) => {
            const visual = stageVisuals[index] ?? stageVisuals[0];

            return (
              <Reveal key={group.label} delay={index * 70}>
                <article className="group grid grid-cols-[6.5rem_1fr] items-start gap-4 sm:block">
                  <Link
                    href={group.links[0]?.href ?? "/products"}
                    aria-label={`Explore ${group.label}`}
                    className="relative block aspect-square overflow-hidden rounded-lg bg-cream-soft ring-1 ring-line sm:aspect-[4/3]"
                  >
                    <Image
                      src={visual.image}
                      alt={visual.alt}
                      fill
                      sizes="(max-width: 640px) 30vw, (max-width: 1024px) 45vw, 23vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </Link>

                  <div className="min-w-0">
                    <div className="flex items-center gap-3 pt-1 sm:pt-4">
                      <span className="font-display text-[1.05rem] leading-none tracking-[-0.03em] text-gold-deep">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={`h-px flex-1 ${hairline}`} />
                    </div>

                    <h3 className="mt-2.5 font-display text-[1.3rem] leading-[1.2] tracking-[-0.02em] text-ink sm:text-[1.4rem]">
                      {group.label}
                    </h3>

                    <p className="mt-1.5 text-[11.5px] leading-[1.7] text-muted">
                      {group.copy}
                    </p>

                    <ul className="mt-3 flex flex-wrap gap-x-3.5 gap-y-1.5">
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="group/link inline-flex items-center gap-1 text-[11px] font-semibold text-ink transition-colors duration-200 hover:text-gold-deep"
                          >
                            {link.label}
                            <ArrowUpRight
                              size={11}
                              aria-hidden="true"
                              className="text-muted transition-all duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-gold-deep"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
