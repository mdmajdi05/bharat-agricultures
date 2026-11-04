import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import FloatingContactWidget from "@/components/layout/FloatingContactWidget";
import EnquiryPopup from "@/components/forms/EnquiryPopup";
import OrganizationJsonLd from "@/components/seo/OrganizationJsonLd";
import { chromeCopy } from "@/data/siteContent";
import { site } from "@/lib/site";

import "@/styles/tokens.css";
import "@/styles/hero.css";

const display = localFont({
  src: [
    {
      path: "./fonts/fraunces-normal.woff2",
      weight: "400 600",
      style: "normal",
    },
    {
      path: "./fonts/fraunces-italic.woff2",
      weight: "400 600",
      style: "italic",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const sans = localFont({
  src: [
    {
      path: "./fonts/manrope.woff2",
      weight: "400 800",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
  fallback: ["Segoe UI", "system-ui", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Agricultural & Brick Kiln Machinery Manufacturer`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "agricultural machinery manufacturer India",
    "farm machinery manufacturer Sambhal",
    "agricultural equipment manufacturer Uttar Pradesh",
    "thresher manufacturer",
    "paddy cleaner machine",
    "disc harrow manufacturer",
    "land leveler manufacturer",
    "cultivator manufacturer",
    "brick kiln machinery",
    "pugmill machine manufacturer",
    "gara machine for brick kiln",
    "brick-making machine manufacturer",
    "ID fan for brick kiln",
    "coal crusher machine",
    "agricultural machinery parts",
    "brick kiln spare parts",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: `${site.name} — Agricultural & Brick Kiln Machinery Manufacturer`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Agricultural & Brick Kiln Machinery Manufacturer`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: { icon: "/header-logo.png" },
  verification: {
    google: "x8M9ZPirPTfSPL1Mdx9l3z4sEsntJkeQH_2Sn-TX02M",
    other: {
      "msvalidate.01": "94A8005D68616DB02F60C229FC1F12E5",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05130c",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ba-__html [-webkit-text-size-adjust:100%] [scroll-behavior:smooth] motion-reduce:[scroll-behavior:auto] [color-scheme:light] min-[640px]:[--gutter:2rem] min-[1100px]:[--gutter:2.5rem] min-[1100px]:[--header-h:5rem] min-[1200px]:[--hero-offset:calc(var(--header-h)_+_2.4rem_+_1px)]`}
    >
      <body className={`
          ba-__body [&_*]:[box-sizing:border-box] [&_*::before]:[box-sizing:border-box]
          [&_*::after]:[box-sizing:border-box] [&_section[id]]:[scroll-margin-top:calc(var(--header-h)_+_1.5rem)] m-[0]
          bg-cream text-ink font-sans
          text-base leading-[1.65] tracking-[-0.008em]
          [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale] overflow-x-hidden
          [&_h1]:m-[0] [&_h2]:m-[0] [&_h3]:m-[0]
          [&_h4]:m-[0] [&_p]:m-[0] [&_figure]:m-[0]
          [&_blockquote]:m-[0] [&_ul]:m-[0] [&_ol]:m-[0]
          [&_dl]:m-[0] [&_dd]:m-[0] [&_h1]:font-display
          [&_h1]:font-medium [&_h1]:leading-[1.04] [&_h1]:tracking-[-0.03em]
          [&_h1]:text-balance [&_h2]:font-display [&_h2]:font-medium
          [&_h2]:leading-[1.04] [&_h2]:tracking-[-0.03em] [&_h2]:text-balance
          [&_h3]:font-display [&_h3]:font-medium [&_h3]:leading-[1.04]
          [&_h3]:tracking-[-0.03em] [&_h3]:text-balance [&_h4]:font-display
          [&_h4]:font-medium [&_h4]:leading-[1.04] [&_h4]:tracking-[-0.03em]
          [&_h4]:text-balance [&_h1_em]:italic [&_h1_em]:text-gold-deep
          [&_h2_em]:italic [&_h2_em]:text-gold-deep [&_img]:block
          [&_img]:max-w-full [&_svg]:block [&_svg]:max-w-full
          [&_video]:block [&_video]:max-w-full [&_img]:h-[auto]
          [&_a]:text-inherit [&_a]:no-underline [&_ul]:p-[0]
          [&_ul]:[list-style:none] [&_ol]:p-[0] [&_ol]:[list-style:none]
          [&_button]:[font:inherit] [&_button]:text-inherit [&_input]:[font:inherit]
          [&_input]:text-inherit [&_select]:[font:inherit] [&_select]:text-inherit
          [&_textarea]:[font:inherit] [&_textarea]:text-inherit [&_button]:cursor-pointer
          [&_::selection]:bg-gold [&_::selection]:text-forest-950 [&_:focus-visible]:[outline:2px_solid_var(--c-gold)]
          [&_:focus-visible]:[outline-offset:3px] [&_:focus-visible]:rounded-[2px] motion-reduce:[&_*]:[animation-duration:0.01ms!important]
          motion-reduce:[&_*]:[animation-iteration-count:1!important] motion-reduce:[&_*]:[transition-duration:0.01ms!important] motion-reduce:[&_*::before]:[animation-duration:0.01ms!important]
          motion-reduce:[&_*::before]:[animation-iteration-count:1!important] motion-reduce:[&_*::before]:[transition-duration:0.01ms!important] motion-reduce:[&_*::after]:[animation-duration:0.01ms!important]
          motion-reduce:[&_*::after]:[animation-iteration-count:1!important] motion-reduce:[&_*::after]:[transition-duration:0.01ms!important] [&.ba-menu-open]:overflow-hidden
          max-[1199px]:pb-[calc(4.1rem_+_env(safe-area-inset-bottom))]
        `}>
        <a href="#main" className={`
          ba-skip-link fixed top-[0.75rem]
          left-[0.75rem] z-[200] p-[0.7rem_1rem]
          bg-gold text-forest-950 text-[length:0.75rem]
          font-bold rounded-sm [transform:translateY(-160%)]
          [transition:transform_0.2s_var(--ease)] [&:focus]:[transform:none]
        `}>
          {chromeCopy.skipToContent}
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingContactWidget />
        <EnquiryPopup />
        <OrganizationJsonLd />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q770DV8118"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q770DV8118');
          `}
        </Script>
      </body>
    </html>
  );
}
