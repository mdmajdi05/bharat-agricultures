"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { chromeCopy } from "@/data/siteContent";
import { emailHref, phoneHref, site, whatsappQuoteHref } from "@/lib/site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setPortalContainer(document.body);
  }, []);

  useEffect(() => {
    const openFromPopupBackdrop = () => setOpen(true);
    window.addEventListener("ba:open-mobile-menu", openFromPopupBackdrop);
    return () => window.removeEventListener("ba:open-mobile-menu", openFromPopupBackdrop);
  }, []);

  // Close the menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    document.body.classList.add("ba-menu-open");
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("ba-menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Restore focus to the trigger after closing.
  const previousOpen = useRef(open);
  useEffect(() => {
    if (previousOpen.current && !open) toggleRef.current?.focus();
    previousOpen.current = open;
  }, [open]);

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className={`
          ba-menu-toggle grid [place-items:center]
          w-[2.75rem] h-[2.75rem] bg-transparent
          [border:1px_solid_var(--c-line-strong)] rounded-full [transition:background-color_0.2s_var(--ease),_color_0.2s_var(--ease)]
          [&:hover]:bg-forest-900 [&:hover]:text-cream min-[1200px]:hidden
        `}
        aria-label={open ? chromeCopy.closeMenu : chromeCopy.openMenu}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-haspopup="dialog"
        onClick={() => {
          if (open) {
            setOpen(false);
            return;
          }

          window.dispatchEvent(new Event("ba:close-enquiry-popup"));
          setOpen(true);
        }}
      >
        {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>

      {portalContainer && createPortal(
        <div
          id="mobile-menu"
          className={`ba-mobile-menu${open ? " ba-is-open" : ""}`}
          role="dialog"
          aria-modal={open || undefined}
          aria-label="Mobile navigation"
          aria-hidden={!open}
          inert={!open}
        >
        <div className={`
          ba-mobile-menu__top flex items-center
          justify-between gap-[1rem] h-[var(--header-h)]
          px-[var(--gutter)] [border-bottom:1px_solid_var(--c-line-dark)] shrink-0
        `}>
          <Link href="/" className={`
          ba-mobile-menu__brand inline-flex p-[0.4rem_0.55rem]
          bg-cream rounded-[8px] [&_img]:w-[7.6rem]
          [&_img]:h-[auto] [&_img]:[mix-blend-mode:multiply]
        `} aria-label={`${site.name} home`}>
            <Image src="/header-logo.png" alt={site.name} width={838} height={298} />
          </Link>
          <span className="ba-mobile-menu__caption">Site navigation</span>
          <button
            ref={closeRef}
            type="button"
            className={`
          ba-mobile-menu__close grid [place-items:center]
          w-[2.75rem] h-[2.75rem] [border:1px_solid_var(--c-line-dark-strong)]
          rounded-full bg-transparent text-cream
        `}
            aria-label={chromeCopy.closeMenu}
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className={`
          ba-mobile-menu__body flex-[1] overflow-y-auto
          p-[1.5rem_var(--gutter)] flex flex-col
        `}>
          <nav aria-label="Mobile">
            {primaryNav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              if (!item.children) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`ba-mobile-menu__link [display:flex] [align-items:baseline] [justify-content:space-between] [gap:1rem] [padding-block:0.95rem] [border-bottom:1px_solid_var(--c-line-dark)] [font-family:var(--font-display)] [font-size:clamp(1.8rem,_7.5vw,_2.6rem)] [line-height:1.1] [letter-spacing:-0.02em] [opacity:0] [transform:translateY(14px)] [transition:opacity_0.4s_var(--ease),_transform_0.4s_var(--ease),_color_0.2s_var(--ease)] [.ba-mobile-menu.ba-is-open_&]:[opacity:1] [.ba-mobile-menu.ba-is-open_&]:[transform:none] [&:nth-child(1)]:[transition-delay:0.06s] [&:nth-child(2)]:[transition-delay:0.1s] [&:nth-child(3)]:[transition-delay:0.14s] [&:nth-child(4)]:[transition-delay:0.18s] [&:nth-child(5)]:[transition-delay:0.22s] [&:nth-child(6)]:[transition-delay:0.26s] [&:hover]:[color:var(--c-gold-bright)] [&.ba-is-active]:[color:var(--c-gold-bright)] [.ba-mobile-menu-group_&]:[border-bottom:0]${active ? " ba-is-active" : ""}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <details className={`
          ba-mobile-menu-group [border-bottom:1px_solid_var(--c-line-dark)] [&_summary]:cursor-pointer
          [&_summary]:[list-style:none] [&_summary::-webkit-details-marker]:hidden
        `} key={item.href}>
                  <summary className={`ba-mobile-menu__link [display:flex] [align-items:baseline] [justify-content:space-between] [gap:1rem] [padding-block:0.95rem] [border-bottom:1px_solid_var(--c-line-dark)] [font-family:var(--font-display)] [font-size:clamp(1.8rem,_7.5vw,_2.6rem)] [line-height:1.1] [letter-spacing:-0.02em] [opacity:0] [transform:translateY(14px)] [transition:opacity_0.4s_var(--ease),_transform_0.4s_var(--ease),_color_0.2s_var(--ease)] [.ba-mobile-menu.ba-is-open_&]:[opacity:1] [.ba-mobile-menu.ba-is-open_&]:[transform:none] [&:nth-child(1)]:[transition-delay:0.06s] [&:nth-child(2)]:[transition-delay:0.1s] [&:nth-child(3)]:[transition-delay:0.14s] [&:nth-child(4)]:[transition-delay:0.18s] [&:nth-child(5)]:[transition-delay:0.22s] [&:nth-child(6)]:[transition-delay:0.26s] [&:hover]:[color:var(--c-gold-bright)] [&.ba-is-active]:[color:var(--c-gold-bright)] [.ba-mobile-menu-group_&]:[border-bottom:0]${active ? " ba-is-active" : ""}`}>
                    <span className={`
          ba-mobile-menu__label inline-flex items-center
          gap-[0.55rem] [&_svg]:text-gold [&_svg]:[transition:transform_0.25s_var(--ease)]
          [.ba-mobile-menu-group[open]_&_svg]:[transform:rotate(180deg)]
        `}>
          {item.label}
          <ChevronDown size={16} aria-hidden="true" />
        </span>
                  </summary>
                  <div className={`
          ba-mobile-menu__sublinks grid gap-[0.1rem]
          pb-[1.1rem] [&_a]:p-[0.45rem_0] [&_a]:text-[length:0.92rem]
          [&_a]:leading-[1.4] [&_a]:text-muted-dark [&_a]:[transition:color_0.2s_var(--ease)]
          [&_a:first-child]:mb-[0.25rem] [&_a:first-child]:text-[length:0.68rem] [&_a:first-child]:font-bold
          [&_a:first-child]:tracking-[0.16em] [&_a:first-child]:uppercase [&_a:first-child]:text-gold-bright
          [&_a:hover]:text-gold-bright
        `}>
                    <Link href={item.href}>{chromeCopy.allPrefix} {item.label}</Link>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </details>
              );
            })}
          </nav>

          <div className={`
          ba-mobile-menu__footer mt-auto pt-[1.75rem]
          grid gap-[1rem]
        `}>
            <a href={whatsappQuoteHref()} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className={`
          ba-btn inline-flex items-center
          justify-center gap-[0.55rem] min-h-[3rem]
          p-[0.8rem_1.4rem] [border:1px_solid_transparent] rounded-full
          font-sans text-[length:0.72rem] font-bold
          tracking-[0.09em] uppercase leading-none
          [transition:background-color_0.25s_var(--ease),_color_0.25s_var(--ease),_border-color_0.25s_var(--ease),_transform_0.25s_var(--ease)] [&_svg]:shrink-0 [&_svg]:[transition:transform_0.25s_var(--ease)]
          [&:hover_svg]:[transform:translate(2px,_-2px)] [.ba-mobile-cta_&]:min-h-[2.8rem] [.ba-mobile-cta_&]:px-[0.95rem]
          [.ba-mobile-cta_&]:text-[length:0.65rem] [.ba-quality-body_&]:[justify-self:start]
          [.ba-split-body_&]:[justify-self:start] [.ba-split-body_&]:mt-[0.35rem] [.ba-not-found_&]:[justify-self:start]
          [.ba-not-found_&]:mt-[0] [.ba-spec-card_&]:[justify-self:start] ba-btn--gold
          bg-gold text-forest-950 [&:hover]:bg-gold-bright
          ba-btn--block w-full
        `}>
              {chromeCopy.requestQuote} <ArrowUpRight size={16} aria-hidden="true" />
        </a>
            <div className={`
          ba-mobile-menu__contact grid gap-[0.35rem]
          text-[length:0.8rem] text-muted-dark [&_a:hover]:text-gold-bright
        `}>
              <a href={phoneHref}>{site.phone}</a>
              <a href={emailHref}>{site.email}</a>
              <span>{site.address}</span>
            </div>
          </div>
        </div>
        </div>,
        portalContainer,
      )}
    </>
  );
}
