
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, Mail, MapPin, Phone } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import { footerColumns } from "@/data/navigation";
import { footerCopy } from "@/data/siteContent";
import { emailHref, phoneHref, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className={`
          ba-site-footer bg-forest-950 text-cream
          pt-[clamp(3rem,_8vw,_5.5rem)]
        `}>
      <Container>
        <div className={`
          ba-footer__grid grid gap-[2.25rem]
          min-[640px]:grid-cols-2 min-[1200px]:[grid-template-columns:1.35fr_1fr_0.95fr_1fr_0.95fr] min-[1200px]:gap-[2.5rem]
        `}>
          <div className={"ba-footer__brand min-[640px]:col-start-[1_/_-1] min-[1200px]:col-start-[auto]"}>
            <Link href="/" className={`
          ba-footer__brand-plate [display:inline-block] p-[0.85rem_1rem]
          bg-cream rounded-[12px] [&_img]:w-[10.5rem]
          [&_img]:h-[auto] [&_img]:[mix-blend-mode:multiply]
        `} aria-label={`${site.name} home`}>
              <Image src="/footer-logo.png" alt={site.name} width={1600} height={569} sizes="168px" />
            </Link>
            <p className={`
          ba-footer__about mt-[1.25rem] max-w-[34ch]
          text-[length:0.85rem] leading-[1.8] text-muted-dark
        `}>{footerCopy.about}</p>

            <div className={`
          ba-footer__contact grid gap-[0.65rem]
          [&_p]:flex [&_p]:items-start [&_p]:gap-[0.6rem]
          [&_p]:text-[length:0.85rem] [&_p]:text-[color:rgba(246,_243,_233,_0.76)] [&_svg]:shrink-0
          [&_svg]:mt-[0.22rem] [&_svg]:text-gold [&_a:hover]:text-gold-bright
          [&_a]:[overflow-wrap:anywhere] ba-footer__contact--brand mt-[1.4rem]
        `}>
              <p>
                <MapPin size={16} aria-hidden="true" />
                <a href={site.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  {site.address} — View on Google Maps
                </a>
              </p>
              <p>
                <Phone size={16} aria-hidden="true" /> <a href={phoneHref}>{site.phone}</a>
              </p>
              <p>
                <Mail size={16} aria-hidden="true" /> <a href={emailHref}>{site.email}</a>
              </p>
            </div>

            <div className="mt-5 grid gap-2">
              <span className="text-[length:0.64rem] font-bold uppercase tracking-[0.2em] text-gold-bright">
                Follow us
              </span>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Bharat Agricultures on Instagram"
                className="inline-flex items-center gap-2 text-[length:0.85rem] text-[color:rgba(246,_243,_233,_0.76)] transition-colors hover:text-gold-bright"
              >
                <Camera size={16} aria-hidden="true" />
                Instagram
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>

            <ButtonLink href="/enquiry" variant="gold" className={"ba-footer__cta mt-[1.5rem]"}>
              {footerCopy.contactCta} <ArrowUpRight size={15} aria-hidden="true" />
            </ButtonLink>
            <Link href="/about" className={`
          ba-footer__brand-link inline-flex items-center
          gap-[0.35rem] mt-[0.9rem] text-[length:0.64rem]
          font-bold tracking-[0.14em] uppercase
          text-[color:rgba(246,_243,_233,_0.6)] [transition:color_0.2s_var(--ease)] [&:hover]:text-gold-bright
        `}>
              {footerCopy.brandCta} <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
          </div>

          {footerColumns.map((column) => (
            <div className={`
          ba-footer__col [&_h4]:mb-[1rem] [&_h4]:font-sans
          [&_h4]:text-[length:0.64rem] [&_h4]:font-bold [&_h4]:tracking-[0.2em]
          [&_h4]:uppercase [&_h4]:text-gold-bright
        `} key={column.title}>
              <h4>{column.title}</h4>
              <div className={`
          ba-footer__links grid gap-[0.6rem]
          [&_a]:text-[length:0.85rem] [&_a]:text-[color:rgba(246,_243,_233,_0.76)] [&_a]:[transition:color_0.2s_var(--ease)]
          [&_a:hover]:text-gold-bright
        `}>
                {column.links.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`
          ba-footer__bottom mt-[clamp(2.5rem,_6vw,_4rem)] py-[1.5rem]
          [border-top:1px_solid_var(--c-line-dark)] flex flex-col
          gap-[0.4rem] text-[length:0.68rem] tracking-[0.05em]
          text-[color:rgba(246,_243,_233,_0.5)] min-[640px]:flex-row min-[640px]:items-center
          min-[640px]:justify-between
        `}>
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <div className="flex flex-wrap items-center gap-x-[1rem] gap-y-[0.35rem]">
            <span>{footerCopy.bottomNote}</span>
            <Link href="/sitemap-html" className="transition-colors hover:text-gold-bright">
              HTML Sitemap
            </Link>
            <a href="/sitemap.xml" className="transition-colors hover:text-gold-bright">
              XML Sitemap
            </a>
            <a href="/llms.txt" className="transition-colors hover:text-gold-bright">
              LLMs.txt
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
