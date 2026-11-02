# Bharat Agricultures — Content Summary

All H1 tags, subheadings, and key body copy extracted from the codebase.

---

## 1. Homepage (`/`)

| Element | Content |
|---------|---------|
| **Hero H1** | `Built for the <em>work</em> that feeds us.` |
| **Hero kicker** | `Agricultural components · Engineered to perform` |
| **Hero lead** | `Dependable agricultural machinery parts, thoughtfully manufactured for performance in the field and confidence in every season.` |
| **Hero stats** | `06 Component categories` · `02 Core industries` · `B2B Built for business` |
| **Marquee items** | Thresher Parts · Grain Cleaner Parts · Rotavator Parts · Seed Drill Parts · Harrow Parts · Trolley Parts |
| **Capabilities** | Customer-first thinking · Consistent standards · Responsive coordination |
| **Quality points** | Focus on fit and function · Quality-led processes · Practical product range · Manufacturing capability |

---

## 2. About Us (`/about`)

| Element | Content |
|---------|---------|
| **PageHero title** | `Rooted in the field.<br/>Focused on what's next.` |
| **Split body h2** | `Supporting the people and machines behind agriculture.` |
| **Body copy** | "Our work is centred on manufacturing and supplying components for essential agricultural machinery. We aim to make sourcing straightforward through clear communication, a useful product range and quality-led execution." |
| **Values titles** | Integrity · Consistency · Partnership |
| **Value copy** | Clear commitments and straightforward communication. · A quality-minded approach across every part of our work. · Understanding customer requirements at every step. |
| **Quality steps** | Understand the application · Work to clear standards · Focus on dependable output |
| **Infrastructure pillars** | People · Process · Partnership |
| **Pillar copy** | Teams focused on practical manufacturing, product knowledge and clear coordination. · Defined steps that support consistency from initial requirement through to dispatch. · Direct communication with customers from the first enquiry onwards. |
| **Facts** | `06` Component categories · `02` Core industries · B2B Built around requirements |

---

## 3. Quality (`/quality`)

| Element | Content |
|---------|---------|
| **PageHero title** | `Made with care.<br/>Checked with purpose.` |
| **Steps kickers** | `01 / Requirements` · `02 / Process` · `03 / Review` |
| **Step titles** | Understand the application · Work to clear standards · Focus on dependable output |
| **Step copy** | We start by understanding part references, machine compatibility and the intended use. · Defined requirements and process discipline help support consistency in the finished component. · Attention to fit, finish and customer expectations remains central to our quality approach. |
| **Quality points** | Focus on fit and function · Quality-led processes · Practical product range · Manufacturing capability |
| **Check list points** | Same as qualityPoints above |

---

## 4. Infrastructure (`/infrastructure`)

| Element | Content |
|---------|---------|
| **PageHero title** | `Capability that<br/>supports consistency.` |
| **Split body h2** | `Manufacturing with attention to detail.` |
| **Body copy** | "Our infrastructure story is about the people, equipment and processes that come together to meet customer requirements. It is a practical setup, organised around producing components that fit and perform as expected." |
| **Body copy (second paragraph)** | "For verified factory photographs, machine details and certifications, speak with our team directly." |
| **Values (same as about)** | Integrity · Consistency · Partnership |

---

## 5. Products (`/products`)

| Element | Content |
|---------|---------|
| **PageHero title** | `Parts that keep<br/>the field moving.` |
| **PageHero copy** | `Explore agricultural machinery components designed around performance, durability and practical application.` |
| **Breadcrumb** | Home / Products |
| **Product list eyebrow** | Harvesting equipment · Grain processing · Soil preparation · Precision sowing · Field cultivation · Material handling |
| **Product descriptions** (from products.ts) | Each product has: eyebrow, description, and items list (see products.ts for full text) |

---

## 6. Product Detail (`/products/[slug]`)

| Element | Content |
|---------|---------|
| **Detail H1** | `{product.name}` — dynamic, e.g.:<br/>- Thresher Parts<br/>- Grain Cleaner Parts<br/>- Rotavator Parts<br/>- Seed Drill Parts<br/>- Harrow Parts<br/>- Trolley Parts |
| **Detail breadcrumb** | Home / Products / `{product.name}` |
| **Detail eyebrow** | `{product.eyebrow}` — e.g. "Harvesting equipment", "Grain processing", etc. |
| **Detail description** | `{product.description}` — e.g. "Dependable components engineered to support efficient threshing, crop handling and long service life." |
| **Component range h2** | `Explore the components` |
| **Parts list items** | From product.items array (e.g. "Thresher drums", "Concave assemblies", etc.) |
| **More categories h2** | `More categories` |
| **Enquiry title** | `Looking for a specific {product.name.toLowerCase()} component?` |

---

## 7. Contact (`/contact`)

| Element | Content |
|---------|---------|
| **PageHero title** | `Good work starts<br/>with a conversation.` |
| **PageHero copy** | `For product information, sourcing requirements or business enquiries, reach out to our team.` |
| **Contact card titles** | Our location · Speak with us · Send an email |
| **Contact card copy** | Address: `Ludhiana, Punjab, India`<br/>Phone: `+91 00000 00000`<br/>Email: `sales@example.com` |

---

## 8. Product Enquiry (`/enquiry`)

| Element | Content |
|---------|---------|
| **Section H1** | `Tell us what<br/>you need.` |
| **Body copy** | `Share your part reference, machine model or requirement. Our team can follow up with the next steps.` |
| **Form h2** | `Product enquiry` |
| **Form intro** | `Fields marked with * are required.` |
| **Contact details** | Email: `site.email` · Phone: `site.phone` |

---

## 9. SEO & Metadata

| Page | Title | Description |
|------|-------|-------------|
| Home | (implicit from layout) | — |
| About | `Learn about Bharat Agricultures and our approach to agricultural machinery component manufacturing and supply.` | |
| Quality | `Our quality approach to agricultural machinery components — from requirements to dependable output.` | |
| Infrastructure | `Explore the manufacturing environment, process discipline and people supporting our agricultural components.` | |
| Products | `Explore thresher, grain cleaner, rotavator, seed drill, harrow and trolley parts manufactured and supplied by Bharat Agricultures.` | |
| Product Detail | `product.name` (from products.ts) | `product.description` |
| Contact | `Contact our team for agricultural machinery parts enquiries, product information and sourcing support.` | |
| Enquiry | `Send an enquiry for agricultural machinery parts and components.` | |
| Not Found | `404 — Page not found` | |
| Robots | `sitemap: ${site.url}/sitemap.xml` · `host: site.url` | |

---

## 10. Data Sources

- `src/data/products.ts` — 6 product records with name, eyebrow, description, image, number, items
- `src/data/company.ts` — values, qualitySteps, infrastructurePillars
- `src/data/home.ts` — heroStats, heroKicker, marqueeItems, qualityPoints, capabilities
- `src/data/navigation.ts` — primaryNav, footerNav
- `src/lib/site.ts` — site name, phone, email, address, url (placeholders)