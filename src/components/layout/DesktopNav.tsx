"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { getPrimaryNav } from "@/data/navigation";
import type { Locale } from "@/lib/locale";

export default function DesktopNav({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const activePathname = pathname.replace(/^\/(en|hi)(?=\/|$)/, "") || "/";

  return (
    <nav className={`
          ba-desktop-nav hidden min-[1200px]:flex
          min-[1200px]:items-center min-[1200px]:gap-[1.05rem] min-[1320px]:gap-[1.5rem]
        `} aria-label="Primary">
      {getPrimaryNav(locale).map((item) => {
        const itemPath = item.href.replace(/^\/(en|hi)(?=\/|$)/, "") || "/";
        const active = itemPath === "/" ? activePathname === "/" : activePathname.startsWith(itemPath);

        if (!item.children) {
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`ba-nav-link [position:relative] [padding-block:0.4rem] [font-size:0.7rem] [font-weight:700] [letter-spacing:0.1em] [text-transform:uppercase] [color:rgba(10,_28,_17,_0.72)] [transition:color_0.2s_var(--ease)] [&::after]:[content:""] [&::after]:[position:absolute] [&::after]:[left:0] [&::after]:[bottom:0] [&::after]:[width:100%] [&::after]:[height:1px] [&::after]:[background:var(--c-gold-deep)] [&::after]:[transform:scaleX(0)] [&::after]:[transform-origin:left] [&::after]:[transition:transform_0.28s_var(--ease)] [&:hover]:[color:var(--c-ink)] [&.ba-is-active]:[color:var(--c-ink)] [&:hover::after]:[transform:scaleX(1)] [&.ba-is-active::after]:[transform:scaleX(1)] min-[1200px]:[font-size:0.64rem] min-[1200px]:[letter-spacing:0.06em] min-[1320px]:[font-size:0.7rem] min-[1320px]:[letter-spacing:0.1em]${active ? " ba-is-active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        }

        return (
          <div key={item.href} className={`ba-nav-item group relative${active ? " ba-is-active" : ""}`}>
            <Link
              href={item.href}
              className={`ba-nav-link [position:relative] [padding-block:0.4rem] [font-size:0.7rem] [font-weight:700] [letter-spacing:0.1em] [text-transform:uppercase] [color:rgba(10,_28,_17,_0.72)] [transition:color_0.2s_var(--ease)] [&::after]:[content:""] [&::after]:[position:absolute] [&::after]:[left:0] [&::after]:[bottom:0] [&::after]:[width:100%] [&::after]:[height:1px] [&::after]:[background:var(--c-gold-deep)] [&::after]:[transform:scaleX(0)] [&::after]:[transform-origin:left] [&::after]:[transition:transform_0.28s_var(--ease)] [&:hover]:[color:var(--c-ink)] [&.ba-is-active]:[color:var(--c-ink)] [&:hover::after]:[transform:scaleX(1)] [&.ba-is-active::after]:[transform:scaleX(1)] min-[1200px]:[font-size:0.64rem] min-[1200px]:[letter-spacing:0.06em] min-[1320px]:[font-size:0.7rem] min-[1320px]:[letter-spacing:0.1em] ba-nav-link--group [display:inline-flex] [align-items:center] [gap:0.22rem] [white-space:nowrap] [&_svg]:[flex-shrink:0] [&_svg]:[transition:transform_0.25s_var(--ease)] [.ba-nav-item:hover_&_svg]:[transform:rotate(180deg)] [.ba-nav-item:focus-within_&_svg]:[transform:rotate(180deg)]${active ? " ba-is-active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
              <ChevronDown size={13} aria-hidden="true" />
            </Link>

            <div className="ba-nav-dropdown invisible absolute left-0 top-full z-50 min-w-[15rem] translate-y-2 rounded-lg border border-line bg-paper p-2 opacity-0 shadow-soft transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <ul className="grid gap-1">
                <li>
                  <Link href={item.href} className="ba-nav-dropdown__all block rounded-md px-3 py-2 text-sm font-bold text-gold-deep transition-colors hover:bg-cream">
                    All {item.label}
                  </Link>
                </li>
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link href={child.href} className="block rounded-md px-3 py-2 text-sm text-ink transition-colors hover:bg-cream">
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
