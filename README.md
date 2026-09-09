# RentalForCar — Next.js (App Router, static export)

Faithful, responsive, SEO- and Google-Ads-friendly port of the RentalForCar design.
29 content pages + 404, one URL per page, server components only (no client JS).

## Run it

```bash
npm install
npm run build      # static export → ./out  (needs internet the first time: next/font fetches Sora/Inter/Space Grotesk)
npx serve out      # preview the exported static site
```

Deploy `out/` to any static host (Vercel, Netlify, S3+CloudFront, Nginx). On Vercel you can also just push the repo — it builds automatically.

## How it’s organized

```
app/                     one folder per route → static HTML at that URL
  layout.jsx             <html>, fonts, chrome (AnnounceBar/Header/Footer/MobileCallBar)
  page.jsx               "/"  (Home)
  car-rental/lax-airport/page.jsx   … all 29 routes (folders match the SEO sheet URLs)
  sitemap.js  robots.js  not-found.jsx
components/
  common/                chrome shared by every page (+ JsonLd helper)
  <PageName>/<Section>/<Section>.jsx    each page split into its sections
lib/
  seo.js                 all per-page metadata, generated from RentalForCar-SEO-Meta.xlsx
  site.js                phone, legal identity, nav, footer groups
app/globals.css          the shared design system (tokens, reset, type, buttons, sections)
public/                  media/, images/, llms.txt
```

Route pages are thin: they set `generateMetadata()` from `lib/seo.js`, render their sections,
and emit that page’s JSON-LD.

## CSS approach

- **`app/globals.css`** holds every rule reused across the site — tokens, reset, base
  typography, buttons, section shells, and all shared design-system classes — each defined
  **once** (no duplication). The design uses a single stylesheet across all pages, so this
  is where the bulk correctly lives.
- **Chrome CSS** (Header/Footer/AnnounceBar/MobileCallBar) is co-located with its component.
- **Section folders** contain the section’s `.jsx`. A co-located `.css` is added only when a
  section has styles unique to it. In this design nothing is section-unique, so section
  folders are `.jsx`-only; the convention is in place the moment you add a bespoke style.
- Class names are the design’s originals (`.hero`, `.counter`, `.faq`…), so edits map 1:1
  to what you see in the browser.

## Responsive

One responsive tree. The design’s `@media (max-width:900px / 560px)` rules handle mobile,
so there is a single URL per page (no `/m/`), which is what mobile-first indexing wants.

## Adding real media

The hero video and vehicle photos ship as **labeled placeholder boxes** (`.media`, `.pic`)
with the real tags commented in the source, exactly as delivered in the design. To go live,
drop files into `public/media/` and `public/images/cars/`, then replace the placeholder box
with a real `<img>`/`<video>` (add `width`/`height` to avoid layout shift; consider a poster
image on the hero video for a fast LCP).

## SEO / Ads notes baked in

Per-page title/description/canonical/OG from your sheet · per-page JSON-LD · `sitemap.xml`
and `robots.txt` (AI crawlers allowed) · `llms.txt` · message-matched H1s · `tel:` CTA in
header, footer and mobile bar · self-hosted fonts (no layout shift) · fully static HTML so
crawlers, the Ads landing-page rater, and AI answer engines see real content.
