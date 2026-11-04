# Bharat Agricultures — Next.js website

Premium B2B website starter for an agricultural machinery parts manufacturer.

## Stack
- Next.js 16 App Router + React 19 + TypeScript 7
- Tailwind CSS 4 with direct utilities in components and sections
- Brand colors, typography, and shared design tokens defined in `src/styles/tokens.css`
- Dynamic product detail routes
- SEO metadata, canonical URLs, sitemap.xml and robots.txt
- Product catalogue, company, quality, infrastructure, enquiry and contact pages

## Run locally
```powershell
npm install
npm run dev
```
Open http://localhost:3000

## Production build
```powershell
npm run build
npm start
```

## Type check
```powershell
npm run check
```

## Before launch — important
1. Update the company contact details and production domain in `src/lib/site.ts`.
2. Update `src/lib/site.ts` with real domain, phone, email and address.
3. Update Header/Footer contact information.
4. The site now uses locally bundled Pexels photographs in `public/images/`. Do not revert to Unsplash URLs (they return 404 from this environment).
5. The supplied logo is stored at `public/bharat-agricultures-logo.png`.
6. Connect `src/components/ContactForm.tsx` to a backend/API or email service. Current form is a front-end demo and does not send email.
7. Add verified company details, certifications, product specifications and legal pages. Do not publish placeholder claims.
8. The production domain is set to `https://bharatagricultures.com` in `src/lib/site.ts`; update it there if the domain changes.

## SEO structure
- `/` homepage
- `/about`
- `/products`
- `/products/[slug]` product landing pages
- `/quality`
- `/infrastructure`
- `/enquiry`
- `/contact`
- `/sitemap.xml`
- `/robots.txt`

Product category content is maintained in `src/data/products.ts`.
