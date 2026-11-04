import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { getProduct } from "@/data/products";
import { site, whatsappQuoteHref } from "@/lib/site";

type Variant = "gold" | "dark" | "outline" | "outlineLight";

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  block?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

const variantClass: Record<Variant, string> = {
  gold: "ba-btn--gold bg-gold text-forest-950 [&:hover]:bg-gold-bright",
  dark: "ba-btn--dark bg-forest-900 text-cream [&:hover]:bg-forest-700",
  outline: "ba-btn--outline border-line-strong text-ink [&:hover]:bg-forest-900 [&:hover]:border-forest-900 [&:hover]:text-cream [.ba-mobile-cta_&]:gap-[0.4rem]",
  outlineLight: "ba-btn--outline-light border-line-dark-strong text-cream [&:hover]:bg-cream [&:hover]:border-cream [&:hover]:text-forest-900",
};

/** Brand button that keeps client-side navigation through next/link. */
export default function ButtonLink({
  href,
  variant = "gold",
  block = false,
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  const classes = ["ba-btn inline-flex items-center justify-center gap-[0.55rem] min-h-[3rem] p-[0.8rem_1.4rem] [border:1px_solid_transparent] rounded-full font-sans text-[length:0.72rem] font-bold tracking-[0.09em] uppercase leading-none [transition:background-color_0.25s_var(--ease),_color_0.25s_var(--ease),_border-color_0.25s_var(--ease),_transform_0.25s_var(--ease)] [&_svg]:shrink-0 [&_svg]:[transition:transform_0.25s_var(--ease)] [&:hover_svg]:[transform:translate(2px,_-2px)] [.ba-mobile-cta_&]:min-h-[2.8rem] [.ba-mobile-cta_&]:px-[0.95rem] [.ba-mobile-cta_&]:text-[length:0.65rem] [.ba-quality-body_&]:[justify-self:start] [.ba-split-body_&]:[justify-self:start] [.ba-split-body_&]:mt-[0.35rem] [.ba-not-found_&]:[justify-self:start] [.ba-not-found_&]:mt-[0] [.ba-spec-card_&]:[justify-self:start]", variantClass[variant], block ? "ba-btn--block w-full" : "", className].filter(Boolean).join(" ");
  const isQuoteAction = href === "/contact" || href === "/enquiry" || href.startsWith("/enquiry?");
  const productSlug = isQuoteAction
    ? new URL(href, site.url).searchParams.get("product")
    : null;
  const productName = productSlug ? getProduct(productSlug)?.name : undefined;
  const destination = isQuoteAction ? whatsappQuoteHref(productName) : href;

  return (
    <Link
      href={destination}
      className={classes}
      {...rest}
    >
      {children}
    </Link>
  );
}
