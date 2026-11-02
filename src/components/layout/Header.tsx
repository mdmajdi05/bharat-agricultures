
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import DesktopNav from "@/components/layout/DesktopNav";
import MobileMenu from "@/components/layout/MobileMenu";
import ButtonLink from "@/components/ui/ButtonLink";
import { chromeCopy } from "@/data/siteContent";
import { emailHref, phoneHref, site } from "@/lib/site";

export default function Header() {
  return (
    <>
      <div className={`
          ba-topbar hidden bg-forest-950
          text-muted-dark text-[length:0.66rem] font-semibold
          tracking-[0.14em] uppercase [&_a]:[transition:color_0.2s_var(--ease)]
          [&_a:hover]:text-gold-bright min-[1200px]:block
        `}>
        <div className={`
          ba-container w-full max-w-[var(--container-max)]
          mx-auto px-[var(--gutter)] [.ba-not-found_&]:grid
          [.ba-not-found_&]:gap-[1.15rem] [.ba-not-found_&]:justify-items-start [.ba-not-found_&]:content-center
          ba-topbar__inner h-[2.4rem] flex
          items-center justify-between gap-[1rem]
        `}>
          <span>{site.tagline}</span>
          <div className={`
          ba-topbar__contacts flex items-center
          gap-[0.9rem]
        `}>
            <a href={emailHref}>{site.email}</a>
            <span className={"ba-topbar__dot [opacity:0.4]"} aria-hidden="true">
              /
            </span>
            <a href={phoneHref}>{site.phone}</a>
          </div>
        </div>
      </div>

      <header className={`
          ba-site-header sticky top-[0]
          z-[50] bg-[color-mix(in_srgb,_var(--c-cream)_92%,_transparent)] [border-bottom:1px_solid_var(--c-line)]
          backdrop-blur-[blur(18px)_saturate(1.15)] [-webkit-backdrop-filter:blur(18px)_saturate(1.15)]
        `}>
        <div className={`
          ba-container w-full max-w-[var(--container-max)]
          mx-auto px-[var(--gutter)] [.ba-not-found_&]:grid
          [.ba-not-found_&]:gap-[1.15rem] [.ba-not-found_&]:justify-items-start [.ba-not-found_&]:content-center
          ba-header__inner h-[var(--header-h)] flex
          items-center justify-between gap-[1rem]
        `}>
          <Link href="/" className={`
          ba-brand inline-flex items-center
          shrink-0 [&_img]:w-[8.6rem] [&_img]:h-[auto]
          [&_img]:[mix-blend-mode:multiply] min-[1200px]:[&_img]:w-[11rem]
        `} aria-label={`${site.name} home`}>
            <Image src="/header-logo.png" alt={`${site.name} — ${site.tagline}`} width={838} height={298} priority sizes="(max-width: 1200px) 138px, 176px" />
          </Link>

          <DesktopNav />

          <div className={`
          ba-header__actions flex items-center
          gap-[0.6rem]
        `}>
            <a href={phoneHref} className={`
          ba-header__call grid [place-items:center]
          w-[2.75rem] h-[2.75rem] [border:1px_solid_var(--c-line-strong)]
          rounded-full [transition:background-color_0.2s_var(--ease),_color_0.2s_var(--ease)] [&:hover]:bg-forest-900
          [&:hover]:text-cream min-[1200px]:hidden
        `} aria-label={`Call ${site.name}`}>
              <Phone size={17} aria-hidden="true" />
            </a>
            <ButtonLink href="/enquiry" variant="dark" className={"ba-header__cta max-[1199px]:hidden min-[1200px]:inline-flex"}>
              {chromeCopy.requestQuote} <ArrowUpRight size={15} aria-hidden="true" />
            </ButtonLink>
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}
