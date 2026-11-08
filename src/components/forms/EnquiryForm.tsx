"use client";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";
import type { enquiryFormCopy } from "@/data/siteContent";
import { getUiCopy } from "@/data/ui";
import type { Locale } from "@/lib/locale";
import { whatsappMessageHref } from "@/lib/site";

type EnquiryFormProps = {
  copy: typeof enquiryFormCopy;
  defaultProduct?: string;
  locale: Locale;
  products: Product[];
};

export default function EnquiryForm({ copy, defaultProduct = "", locale, products }: EnquiryFormProps) {
  const messageCopy = getUiCopy(locale).enquiryFormMessage;

  return (
    <form
      className={"ba-form grid gap-[1.05rem]"}
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const productSlug = formData.get("product")?.toString() ?? "";
        const productName =
          products.find((product) => product.slug === productSlug)?.name ??
          (productSlug === "other" ? messageCopy.other : messageCopy.notSpecified);
        const message = [
          messageCopy.intro,
          "",
          `${messageCopy.name}: ${formData.get("name")?.toString().trim() ?? ""}`,
          `${messageCopy.email}: ${formData.get("email")?.toString().trim() ?? ""}`,
          `${messageCopy.phone}: ${formData.get("phone")?.toString().trim() || messageCopy.phoneFallback}`,
          `${messageCopy.product}: ${productName}`,
          `${messageCopy.requirement}: ${formData.get("message")?.toString().trim() ?? ""}`,
        ].join("\n");

        window.location.assign(whatsappMessageHref(message));
      }}
    >
      <div className={`
          ba-form__grid grid gap-[1.05rem]
          min-[640px]:[grid-template-columns:1fr_1fr]
        `}>
        <label className={`
          ba-field grid gap-[0.4rem]
          [&_>_span]:text-[length:0.62rem] [&_>_span]:font-bold [&_>_span]:tracking-[0.16em]
          [&_>_span]:uppercase [&_>_span]:text-muted [&_input]:w-full
          [&_input]:p-[0.85rem_1rem] [&_input]:bg-page [&_input]:[border:1px_solid_var(--c-line-strong)]
          [&_input]:rounded-sm [&_input]:text-[length:0.92rem] [&_input]:leading-normal
          [&_input]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)] [&_select]:w-full [&_select]:p-[0.85rem_1rem]
          [&_select]:bg-page [&_select]:[border:1px_solid_var(--c-line-strong)] [&_select]:rounded-sm
          [&_select]:text-[length:0.92rem] [&_select]:leading-normal [&_select]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)]
          [&_textarea]:w-full [&_textarea]:p-[0.85rem_1rem] [&_textarea]:bg-page
          [&_textarea]:[border:1px_solid_var(--c-line-strong)] [&_textarea]:rounded-sm [&_textarea]:text-[length:0.92rem]
          [&_textarea]:leading-normal [&_textarea]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)] [&_input::placeholder]:text-muted
          [&_textarea::placeholder]:text-muted [&_input:focus]:[outline:none] [&_input:focus]:border-gold
          [&_input:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_select:focus]:[outline:none] [&_select:focus]:border-gold
          [&_select:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_textarea:focus]:[outline:none] [&_textarea:focus]:border-gold
          [&_textarea:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_textarea]:min-h-[8rem] [&_textarea]:[resize:vertical]
          [&_select]:[appearance:none] [&_select]:[background-image:url("data:image/svg+xml,%3Csvg_xmlns='http://www.w3.org/2000/svg'_width='14'_height='14'_viewBox='0_0_24_24'_fill='none'_stroke='%23a97a20'_stroke-width='2'_stroke-linecap='round'_stroke-linejoin='round'%3E%3Cpath_d='m6_9_6_6_6-6'/%3E%3C/svg%3E")] [&_select]:[background-repeat:no-repeat]
          [&_select]:[background-position:right_1rem_center] [&_select]:[background-size:0.85rem] [&_select]:pr-[2.5rem]
        `}>
          <span>{copy.nameLabel}</span>
          <input required name="name" autoComplete="name" placeholder={copy.namePlaceholder} />
        </label>

        <label className={`
          ba-field grid gap-[0.4rem]
          [&_>_span]:text-[length:0.62rem] [&_>_span]:font-bold [&_>_span]:tracking-[0.16em]
          [&_>_span]:uppercase [&_>_span]:text-muted [&_input]:w-full
          [&_input]:p-[0.85rem_1rem] [&_input]:bg-page [&_input]:[border:1px_solid_var(--c-line-strong)]
          [&_input]:rounded-sm [&_input]:text-[length:0.92rem] [&_input]:leading-normal
          [&_input]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)] [&_select]:w-full [&_select]:p-[0.85rem_1rem]
          [&_select]:bg-page [&_select]:[border:1px_solid_var(--c-line-strong)] [&_select]:rounded-sm
          [&_select]:text-[length:0.92rem] [&_select]:leading-normal [&_select]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)]
          [&_textarea]:w-full [&_textarea]:p-[0.85rem_1rem] [&_textarea]:bg-page
          [&_textarea]:[border:1px_solid_var(--c-line-strong)] [&_textarea]:rounded-sm [&_textarea]:text-[length:0.92rem]
          [&_textarea]:leading-normal [&_textarea]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)] [&_input::placeholder]:text-muted
          [&_textarea::placeholder]:text-muted [&_input:focus]:[outline:none] [&_input:focus]:border-gold
          [&_input:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_select:focus]:[outline:none] [&_select:focus]:border-gold
          [&_select:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_textarea:focus]:[outline:none] [&_textarea:focus]:border-gold
          [&_textarea:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_textarea]:min-h-[8rem] [&_textarea]:[resize:vertical]
          [&_select]:[appearance:none] [&_select]:[background-image:url("data:image/svg+xml,%3Csvg_xmlns='http://www.w3.org/2000/svg'_width='14'_height='14'_viewBox='0_0_24_24'_fill='none'_stroke='%23a97a20'_stroke-width='2'_stroke-linecap='round'_stroke-linejoin='round'%3E%3Cpath_d='m6_9_6_6_6-6'/%3E%3C/svg%3E")] [&_select]:[background-repeat:no-repeat]
          [&_select]:[background-position:right_1rem_center] [&_select]:[background-size:0.85rem] [&_select]:pr-[2.5rem]
        `}>
          <span>{copy.emailLabel}</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            placeholder={copy.emailPlaceholder}
          />
        </label>

        <label className={`
          ba-field grid gap-[0.4rem]
          [&_>_span]:text-[length:0.62rem] [&_>_span]:font-bold [&_>_span]:tracking-[0.16em]
          [&_>_span]:uppercase [&_>_span]:text-muted [&_input]:w-full
          [&_input]:p-[0.85rem_1rem] [&_input]:bg-page [&_input]:[border:1px_solid_var(--c-line-strong)]
          [&_input]:rounded-sm [&_input]:text-[length:0.92rem] [&_input]:leading-normal
          [&_input]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)] [&_select]:w-full [&_select]:p-[0.85rem_1rem]
          [&_select]:bg-page [&_select]:[border:1px_solid_var(--c-line-strong)] [&_select]:rounded-sm
          [&_select]:text-[length:0.92rem] [&_select]:leading-normal [&_select]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)]
          [&_textarea]:w-full [&_textarea]:p-[0.85rem_1rem] [&_textarea]:bg-page
          [&_textarea]:[border:1px_solid_var(--c-line-strong)] [&_textarea]:rounded-sm [&_textarea]:text-[length:0.92rem]
          [&_textarea]:leading-normal [&_textarea]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)] [&_input::placeholder]:text-muted
          [&_textarea::placeholder]:text-muted [&_input:focus]:[outline:none] [&_input:focus]:border-gold
          [&_input:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_select:focus]:[outline:none] [&_select:focus]:border-gold
          [&_select:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_textarea:focus]:[outline:none] [&_textarea:focus]:border-gold
          [&_textarea:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_textarea]:min-h-[8rem] [&_textarea]:[resize:vertical]
          [&_select]:[appearance:none] [&_select]:[background-image:url("data:image/svg+xml,%3Csvg_xmlns='http://www.w3.org/2000/svg'_width='14'_height='14'_viewBox='0_0_24_24'_fill='none'_stroke='%23a97a20'_stroke-width='2'_stroke-linecap='round'_stroke-linejoin='round'%3E%3Cpath_d='m6_9_6_6_6-6'/%3E%3C/svg%3E")] [&_select]:[background-repeat:no-repeat]
          [&_select]:[background-position:right_1rem_center] [&_select]:[background-size:0.85rem] [&_select]:pr-[2.5rem]
        `}>
          <span>{copy.phoneLabel}</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder={copy.phonePlaceholder} />
        </label>

        <label className={`
          ba-field grid gap-[0.4rem]
          [&_>_span]:text-[length:0.62rem] [&_>_span]:font-bold [&_>_span]:tracking-[0.16em]
          [&_>_span]:uppercase [&_>_span]:text-muted [&_input]:w-full
          [&_input]:p-[0.85rem_1rem] [&_input]:bg-page [&_input]:[border:1px_solid_var(--c-line-strong)]
          [&_input]:rounded-sm [&_input]:text-[length:0.92rem] [&_input]:leading-normal
          [&_input]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)] [&_select]:w-full [&_select]:p-[0.85rem_1rem]
          [&_select]:bg-page [&_select]:[border:1px_solid_var(--c-line-strong)] [&_select]:rounded-sm
          [&_select]:text-[length:0.92rem] [&_select]:leading-normal [&_select]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)]
          [&_textarea]:w-full [&_textarea]:p-[0.85rem_1rem] [&_textarea]:bg-page
          [&_textarea]:[border:1px_solid_var(--c-line-strong)] [&_textarea]:rounded-sm [&_textarea]:text-[length:0.92rem]
          [&_textarea]:leading-normal [&_textarea]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)] [&_input::placeholder]:text-muted
          [&_textarea::placeholder]:text-muted [&_input:focus]:[outline:none] [&_input:focus]:border-gold
          [&_input:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_select:focus]:[outline:none] [&_select:focus]:border-gold
          [&_select:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_textarea:focus]:[outline:none] [&_textarea:focus]:border-gold
          [&_textarea:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_textarea]:min-h-[8rem] [&_textarea]:[resize:vertical]
          [&_select]:[appearance:none] [&_select]:[background-image:url("data:image/svg+xml,%3Csvg_xmlns='http://www.w3.org/2000/svg'_width='14'_height='14'_viewBox='0_0_24_24'_fill='none'_stroke='%23a97a20'_stroke-width='2'_stroke-linecap='round'_stroke-linejoin='round'%3E%3Cpath_d='m6_9_6_6_6-6'/%3E%3C/svg%3E")] [&_select]:[background-repeat:no-repeat]
          [&_select]:[background-position:right_1rem_center] [&_select]:[background-size:0.85rem] [&_select]:pr-[2.5rem]
        `}>
          <span>{copy.productLabel}</span>
          <select name="product" defaultValue={defaultProduct}>
            <option value="" disabled>
              {copy.productPlaceholder}
            </option>
            {products.map((product) => (
              <option value={product.slug} key={product.slug}>
                {product.name}
              </option>
            ))}
            <option value="other">{copy.productOther}</option>
          </select>
        </label>
      </div>

      <label className={`
          ba-field grid gap-[0.4rem]
          [&_>_span]:text-[length:0.62rem] [&_>_span]:font-bold [&_>_span]:tracking-[0.16em]
          [&_>_span]:uppercase [&_>_span]:text-muted [&_input]:w-full
          [&_input]:p-[0.85rem_1rem] [&_input]:bg-page [&_input]:[border:1px_solid_var(--c-line-strong)]
          [&_input]:rounded-sm [&_input]:text-[length:0.92rem] [&_input]:leading-normal
          [&_input]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)] [&_select]:w-full [&_select]:p-[0.85rem_1rem]
          [&_select]:bg-page [&_select]:[border:1px_solid_var(--c-line-strong)] [&_select]:rounded-sm
          [&_select]:text-[length:0.92rem] [&_select]:leading-normal [&_select]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)]
          [&_textarea]:w-full [&_textarea]:p-[0.85rem_1rem] [&_textarea]:bg-page
          [&_textarea]:[border:1px_solid_var(--c-line-strong)] [&_textarea]:rounded-sm [&_textarea]:text-[length:0.92rem]
          [&_textarea]:leading-normal [&_textarea]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)] [&_input::placeholder]:text-muted
          [&_textarea::placeholder]:text-muted [&_input:focus]:[outline:none] [&_input:focus]:border-gold
          [&_input:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_select:focus]:[outline:none] [&_select:focus]:border-gold
          [&_select:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_textarea:focus]:[outline:none] [&_textarea:focus]:border-gold
          [&_textarea:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_textarea]:min-h-[8rem] [&_textarea]:[resize:vertical]
          [&_select]:[appearance:none] [&_select]:[background-image:url("data:image/svg+xml,%3Csvg_xmlns='http://www.w3.org/2000/svg'_width='14'_height='14'_viewBox='0_0_24_24'_fill='none'_stroke='%23a97a20'_stroke-width='2'_stroke-linecap='round'_stroke-linejoin='round'%3E%3Cpath_d='m6_9_6_6_6-6'/%3E%3C/svg%3E")] [&_select]:[background-repeat:no-repeat]
          [&_select]:[background-position:right_1rem_center] [&_select]:[background-size:0.85rem] [&_select]:pr-[2.5rem]
        `}>
        <span>{copy.messageLabel}</span>
        <textarea
          required
          name="message"
          rows={4}
          placeholder={copy.messagePlaceholder}
        />
      </label>

      <button className={`
          ba-btn inline-flex items-center
          justify-center gap-[0.55rem] min-h-[3rem]
          p-[0.8rem_1.4rem] [border:1px_solid_transparent] rounded-full
          font-sans text-[length:0.72rem] font-bold
          tracking-[0.09em] uppercase leading-none
          [transition:background-color_0.25s_var(--ease),_color_0.25s_var(--ease),_border-color_0.25s_var(--ease),_transform_0.25s_var(--ease)] [&_svg]:shrink-0 [&_svg]:[transition:transform_0.25s_var(--ease)]
          [&:hover_svg]:[transform:translate(2px,_-2px)] [.ba-mobile-cta_&]:min-h-[2.8rem] [.ba-mobile-cta_&]:px-[0.95rem]
          [.ba-mobile-cta_&]:text-[length:0.65rem] [.ba-quality-body_&]:[justify-self:start]
          [.ba-split-body_&]:[justify-self:start] [.ba-split-body_&]:mt-[0.35rem] [.ba-not-found_&]:[justify-self:start]
          [.ba-not-found_&]:mt-[0] [.ba-spec-card_&]:[justify-self:start] ba-btn--dark
          bg-forest-900 text-cream [&:hover]:bg-forest-700
        `} type="submit">
        {copy.submitLabel} <ArrowUpRight size={17} aria-hidden="true" />
      </button>

      <small className={`
          ba-form__note text-[length:0.68rem] leading-[1.6]
          text-muted
        `}>{copy.note}</small>
    </form>
  );
}
