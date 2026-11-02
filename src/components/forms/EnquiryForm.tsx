"use client";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { products } from "@/data/products";
import { enquiryFormCopy } from "@/data/siteContent";

type EnquiryFormProps = {
  defaultProduct?: string;
};

export default function EnquiryForm({ defaultProduct = "" }: EnquiryFormProps) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className={"ba-form grid gap-[1.05rem]"}
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
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
          [&_input]:p-[0.85rem_1rem] [&_input]:bg-[#fff] [&_input]:[border:1px_solid_var(--c-line-strong)]
          [&_input]:rounded-sm [&_input]:text-[length:0.92rem] [&_input]:leading-normal
          [&_input]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)] [&_select]:w-full [&_select]:p-[0.85rem_1rem]
          [&_select]:bg-[#fff] [&_select]:[border:1px_solid_var(--c-line-strong)] [&_select]:rounded-sm
          [&_select]:text-[length:0.92rem] [&_select]:leading-normal [&_select]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)]
          [&_textarea]:w-full [&_textarea]:p-[0.85rem_1rem] [&_textarea]:bg-[#fff]
          [&_textarea]:[border:1px_solid_var(--c-line-strong)] [&_textarea]:rounded-sm [&_textarea]:text-[length:0.92rem]
          [&_textarea]:leading-normal [&_textarea]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)] [&_input::placeholder]:text-[color:rgba(95,_108,_97,_0.6)]
          [&_textarea::placeholder]:text-[color:rgba(95,_108,_97,_0.6)] [&_input:focus]:[outline:none] [&_input:focus]:border-gold
          [&_input:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_select:focus]:[outline:none] [&_select:focus]:border-gold
          [&_select:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_textarea:focus]:[outline:none] [&_textarea:focus]:border-gold
          [&_textarea:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_textarea]:min-h-[8rem] [&_textarea]:[resize:vertical]
          [&_select]:[appearance:none] [&_select]:[background-image:url("data:image/svg+xml,%3Csvg_xmlns='http://www.w3.org/2000/svg'_width='14'_height='14'_viewBox='0_0_24_24'_fill='none'_stroke='%230a1c11'_stroke-width='2'_stroke-linecap='round'_stroke-linejoin='round'%3E%3Cpath_d='m6_9_6_6_6-6'/%3E%3C/svg%3E")] [&_select]:[background-repeat:no-repeat]
          [&_select]:[background-position:right_1rem_center] [&_select]:[background-size:0.85rem] [&_select]:pr-[2.5rem]
        `}>
          <span>{enquiryFormCopy.nameLabel}</span>
          <input required name="name" autoComplete="name" placeholder={enquiryFormCopy.namePlaceholder} />
        </label>

        <label className={`
          ba-field grid gap-[0.4rem]
          [&_>_span]:text-[length:0.62rem] [&_>_span]:font-bold [&_>_span]:tracking-[0.16em]
          [&_>_span]:uppercase [&_>_span]:text-muted [&_input]:w-full
          [&_input]:p-[0.85rem_1rem] [&_input]:bg-[#fff] [&_input]:[border:1px_solid_var(--c-line-strong)]
          [&_input]:rounded-sm [&_input]:text-[length:0.92rem] [&_input]:leading-normal
          [&_input]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)] [&_select]:w-full [&_select]:p-[0.85rem_1rem]
          [&_select]:bg-[#fff] [&_select]:[border:1px_solid_var(--c-line-strong)] [&_select]:rounded-sm
          [&_select]:text-[length:0.92rem] [&_select]:leading-normal [&_select]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)]
          [&_textarea]:w-full [&_textarea]:p-[0.85rem_1rem] [&_textarea]:bg-[#fff]
          [&_textarea]:[border:1px_solid_var(--c-line-strong)] [&_textarea]:rounded-sm [&_textarea]:text-[length:0.92rem]
          [&_textarea]:leading-normal [&_textarea]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)] [&_input::placeholder]:text-[color:rgba(95,_108,_97,_0.6)]
          [&_textarea::placeholder]:text-[color:rgba(95,_108,_97,_0.6)] [&_input:focus]:[outline:none] [&_input:focus]:border-gold
          [&_input:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_select:focus]:[outline:none] [&_select:focus]:border-gold
          [&_select:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_textarea:focus]:[outline:none] [&_textarea:focus]:border-gold
          [&_textarea:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_textarea]:min-h-[8rem] [&_textarea]:[resize:vertical]
          [&_select]:[appearance:none] [&_select]:[background-image:url("data:image/svg+xml,%3Csvg_xmlns='http://www.w3.org/2000/svg'_width='14'_height='14'_viewBox='0_0_24_24'_fill='none'_stroke='%230a1c11'_stroke-width='2'_stroke-linecap='round'_stroke-linejoin='round'%3E%3Cpath_d='m6_9_6_6_6-6'/%3E%3C/svg%3E")] [&_select]:[background-repeat:no-repeat]
          [&_select]:[background-position:right_1rem_center] [&_select]:[background-size:0.85rem] [&_select]:pr-[2.5rem]
        `}>
          <span>{enquiryFormCopy.emailLabel}</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            placeholder={enquiryFormCopy.emailPlaceholder}
          />
        </label>

        <label className={`
          ba-field grid gap-[0.4rem]
          [&_>_span]:text-[length:0.62rem] [&_>_span]:font-bold [&_>_span]:tracking-[0.16em]
          [&_>_span]:uppercase [&_>_span]:text-muted [&_input]:w-full
          [&_input]:p-[0.85rem_1rem] [&_input]:bg-[#fff] [&_input]:[border:1px_solid_var(--c-line-strong)]
          [&_input]:rounded-sm [&_input]:text-[length:0.92rem] [&_input]:leading-normal
          [&_input]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)] [&_select]:w-full [&_select]:p-[0.85rem_1rem]
          [&_select]:bg-[#fff] [&_select]:[border:1px_solid_var(--c-line-strong)] [&_select]:rounded-sm
          [&_select]:text-[length:0.92rem] [&_select]:leading-normal [&_select]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)]
          [&_textarea]:w-full [&_textarea]:p-[0.85rem_1rem] [&_textarea]:bg-[#fff]
          [&_textarea]:[border:1px_solid_var(--c-line-strong)] [&_textarea]:rounded-sm [&_textarea]:text-[length:0.92rem]
          [&_textarea]:leading-normal [&_textarea]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)] [&_input::placeholder]:text-[color:rgba(95,_108,_97,_0.6)]
          [&_textarea::placeholder]:text-[color:rgba(95,_108,_97,_0.6)] [&_input:focus]:[outline:none] [&_input:focus]:border-gold
          [&_input:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_select:focus]:[outline:none] [&_select:focus]:border-gold
          [&_select:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_textarea:focus]:[outline:none] [&_textarea:focus]:border-gold
          [&_textarea:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_textarea]:min-h-[8rem] [&_textarea]:[resize:vertical]
          [&_select]:[appearance:none] [&_select]:[background-image:url("data:image/svg+xml,%3Csvg_xmlns='http://www.w3.org/2000/svg'_width='14'_height='14'_viewBox='0_0_24_24'_fill='none'_stroke='%230a1c11'_stroke-width='2'_stroke-linecap='round'_stroke-linejoin='round'%3E%3Cpath_d='m6_9_6_6_6-6'/%3E%3C/svg%3E")] [&_select]:[background-repeat:no-repeat]
          [&_select]:[background-position:right_1rem_center] [&_select]:[background-size:0.85rem] [&_select]:pr-[2.5rem]
        `}>
          <span>{enquiryFormCopy.phoneLabel}</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder={enquiryFormCopy.phonePlaceholder} />
        </label>

        <label className={`
          ba-field grid gap-[0.4rem]
          [&_>_span]:text-[length:0.62rem] [&_>_span]:font-bold [&_>_span]:tracking-[0.16em]
          [&_>_span]:uppercase [&_>_span]:text-muted [&_input]:w-full
          [&_input]:p-[0.85rem_1rem] [&_input]:bg-[#fff] [&_input]:[border:1px_solid_var(--c-line-strong)]
          [&_input]:rounded-sm [&_input]:text-[length:0.92rem] [&_input]:leading-normal
          [&_input]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)] [&_select]:w-full [&_select]:p-[0.85rem_1rem]
          [&_select]:bg-[#fff] [&_select]:[border:1px_solid_var(--c-line-strong)] [&_select]:rounded-sm
          [&_select]:text-[length:0.92rem] [&_select]:leading-normal [&_select]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)]
          [&_textarea]:w-full [&_textarea]:p-[0.85rem_1rem] [&_textarea]:bg-[#fff]
          [&_textarea]:[border:1px_solid_var(--c-line-strong)] [&_textarea]:rounded-sm [&_textarea]:text-[length:0.92rem]
          [&_textarea]:leading-normal [&_textarea]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)] [&_input::placeholder]:text-[color:rgba(95,_108,_97,_0.6)]
          [&_textarea::placeholder]:text-[color:rgba(95,_108,_97,_0.6)] [&_input:focus]:[outline:none] [&_input:focus]:border-gold
          [&_input:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_select:focus]:[outline:none] [&_select:focus]:border-gold
          [&_select:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_textarea:focus]:[outline:none] [&_textarea:focus]:border-gold
          [&_textarea:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_textarea]:min-h-[8rem] [&_textarea]:[resize:vertical]
          [&_select]:[appearance:none] [&_select]:[background-image:url("data:image/svg+xml,%3Csvg_xmlns='http://www.w3.org/2000/svg'_width='14'_height='14'_viewBox='0_0_24_24'_fill='none'_stroke='%230a1c11'_stroke-width='2'_stroke-linecap='round'_stroke-linejoin='round'%3E%3Cpath_d='m6_9_6_6_6-6'/%3E%3C/svg%3E")] [&_select]:[background-repeat:no-repeat]
          [&_select]:[background-position:right_1rem_center] [&_select]:[background-size:0.85rem] [&_select]:pr-[2.5rem]
        `}>
          <span>{enquiryFormCopy.productLabel}</span>
          <select name="product" defaultValue={defaultProduct}>
            <option value="" disabled>
              {enquiryFormCopy.productPlaceholder}
            </option>
            {products.map((product) => (
              <option value={product.slug} key={product.slug}>
                {product.name}
              </option>
            ))}
            <option value="other">{enquiryFormCopy.productOther}</option>
          </select>
        </label>
      </div>

      <label className={`
          ba-field grid gap-[0.4rem]
          [&_>_span]:text-[length:0.62rem] [&_>_span]:font-bold [&_>_span]:tracking-[0.16em]
          [&_>_span]:uppercase [&_>_span]:text-muted [&_input]:w-full
          [&_input]:p-[0.85rem_1rem] [&_input]:bg-[#fff] [&_input]:[border:1px_solid_var(--c-line-strong)]
          [&_input]:rounded-sm [&_input]:text-[length:0.92rem] [&_input]:leading-normal
          [&_input]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)] [&_select]:w-full [&_select]:p-[0.85rem_1rem]
          [&_select]:bg-[#fff] [&_select]:[border:1px_solid_var(--c-line-strong)] [&_select]:rounded-sm
          [&_select]:text-[length:0.92rem] [&_select]:leading-normal [&_select]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)]
          [&_textarea]:w-full [&_textarea]:p-[0.85rem_1rem] [&_textarea]:bg-[#fff]
          [&_textarea]:[border:1px_solid_var(--c-line-strong)] [&_textarea]:rounded-sm [&_textarea]:text-[length:0.92rem]
          [&_textarea]:leading-normal [&_textarea]:[transition:border-color_0.2s_var(--ease),_box-shadow_0.2s_var(--ease)] [&_input::placeholder]:text-[color:rgba(95,_108,_97,_0.6)]
          [&_textarea::placeholder]:text-[color:rgba(95,_108,_97,_0.6)] [&_input:focus]:[outline:none] [&_input:focus]:border-gold
          [&_input:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_select:focus]:[outline:none] [&_select:focus]:border-gold
          [&_select:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_textarea:focus]:[outline:none] [&_textarea:focus]:border-gold
          [&_textarea:focus]:shadow-[0_0_0_4px_rgba(216,_164,_64,_0.16)] [&_textarea]:min-h-[8rem] [&_textarea]:[resize:vertical]
          [&_select]:[appearance:none] [&_select]:[background-image:url("data:image/svg+xml,%3Csvg_xmlns='http://www.w3.org/2000/svg'_width='14'_height='14'_viewBox='0_0_24_24'_fill='none'_stroke='%230a1c11'_stroke-width='2'_stroke-linecap='round'_stroke-linejoin='round'%3E%3Cpath_d='m6_9_6_6_6-6'/%3E%3C/svg%3E")] [&_select]:[background-repeat:no-repeat]
          [&_select]:[background-position:right_1rem_center] [&_select]:[background-size:0.85rem] [&_select]:pr-[2.5rem]
        `}>
        <span>{enquiryFormCopy.messageLabel}</span>
        <textarea
          required
          name="message"
          rows={4}
          placeholder={enquiryFormCopy.messagePlaceholder}
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
        {enquiryFormCopy.submitLabel} <ArrowUpRight size={17} aria-hidden="true" />
      </button>

      {sent ? (
        <p className={`
          ba-form-success flex items-start
          gap-[0.5rem] p-[0.8rem_1rem] [border:1px_solid_rgba(30,_82,_54,_0.24)]
          rounded-sm bg-[rgba(30,_82,_54,_0.07)] text-[length:0.78rem]
          leading-[1.6] text-forest-700 [&_svg]:shrink-0
          [&_svg]:mt-[0.15rem]
        `} role="status">
          <CheckCircle2 size={17} aria-hidden="true" />
          <span>{enquiryFormCopy.success}</span>
        </p>
      ) : null}

      <small className={`
          ba-form__note text-[length:0.68rem] leading-[1.6]
          text-muted
        `}>{enquiryFormCopy.note}</small>
    </form>
  );
}
