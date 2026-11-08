"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Languages } from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent } from "react";

import { getUiCopy } from "@/data/ui";

const LOCALE_COOKIE = "ba-locale";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "hi";
  const copy = getUiCopy(currentLocale).languageSwitcher;
  const [pendingLocale, setPendingLocale] = useState<"en" | "hi" | null>(null);
  const refreshPending = useRef(false);
  const activeLocale = pendingLocale ?? currentLocale;

  useEffect(() => {
    if (!refreshPending.current) return;

    // Layouts (header, footer, widgets) persist across client navigation, so
    // refresh once the new URL is active to re-render them in the new language.
    refreshPending.current = false;
    setPendingLocale(null);
    router.refresh();
  }, [pathname, router]);

  const pagePath =
    (currentLocale === "en"
      ? pathname.replace(/^\/en(?=\/|$)/, "")
      : pathname.replace(/^\/hi(?=\/|$)/, "")) || "/";
  const englishHref = pagePath === "/" ? "/en" : `/en${pagePath}`;
  const hinglishHref = pagePath;

  function switchLocale(locale: "en" | "hi", event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    if (locale === currentLocale) {
      setPendingLocale(null);
      return;
    }

    // Update the preference before navigating so the middleware renders the
    // target language immediately, without a second redirect or full reload.
    setPendingLocale(locale);
    refreshPending.current = true;
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
    router.push(locale === "en" ? englishHref : hinglishHref);
  }

  return (
    <nav aria-label={copy.chooseLabel} className="ba-lang-switch inline-flex items-center gap-[0.4rem]">
      <Languages
        size={15}
        strokeWidth={2.2}
        aria-hidden="true"
        className="shrink-0 text-gold-bright"
      />

      <div className="relative inline-grid grid-cols-2 items-center rounded-full border border-[color:rgba(240,168,40,0.45)] bg-[color:rgba(4,20,12,0.7)] p-[0.18rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_1px_8px_rgba(0,0,0,0.3)]">
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute bottom-[0.18rem] left-[0.18rem] top-[0.18rem] w-[calc(50%-0.18rem)] rounded-full bg-gradient-to-b from-[#f8cd63] to-[#e6a019] shadow-[0_1px_6px_rgba(240,168,40,0.55)] transition-transform duration-300 ease-[cubic-bezier(0.22,0.8,0.24,1)] ${
            activeLocale === "hi" ? "translate-x-full" : "translate-x-0"
          }`}
        />

        <Link
          href={englishHref}
          hrefLang="en-IN"
          prefetch={false}
          onClick={(event) => switchLocale("en", event)}
          aria-current={activeLocale === "en" ? "page" : undefined}
          aria-label={copy.englishAria}
          title={copy.englishTitle}
          style={activeLocale === "en" ? { color: "#0b5d2e" } : undefined}
          className={`relative z-10 rounded-full px-[0.7rem] py-[0.28rem] text-center text-[0.68rem] font-extrabold tracking-[0.02em] transition-colors duration-200 [&:focus-visible]:[outline:2px_solid_var(--c-gold-bright)] [&:focus-visible]:[outline-offset:2px] ${
            activeLocale === "en"
              ? "text-[#0b5d2e]"
              : "text-white/80 hover:text-white"
          }`}
        >
          {copy.englishLabel}
        </Link>

        <Link
          href={hinglishHref}
          hrefLang="hi-Latn-IN"
          prefetch={false}
          onClick={(event) => switchLocale("hi", event)}
          aria-current={activeLocale === "hi" ? "page" : undefined}
          aria-label={copy.hinglishAria}
          title={copy.hinglishTitle}
          style={activeLocale === "hi" ? { color: "#0b5d2e" } : undefined}
          className={`relative z-10 rounded-full px-[0.7rem] py-[0.28rem] text-center text-[0.68rem] font-extrabold tracking-[0.02em] transition-colors duration-200 [&:focus-visible]:[outline:2px_solid_var(--c-gold-bright)] [&:focus-visible]:[outline-offset:2px] ${
            activeLocale === "hi"
              ? "text-[#0b5d2e]"
              : "text-white/80 hover:text-white"
          }`}
        >
          {copy.hinglishLabel}
        </Link>
      </div>
    </nav>
  );
}
