# Car-rental redesign — apply guide (no-move version)

Your app/ structure is UNCHANGED. The new 45KB theme is scoped under `.crx` so it can never
touch the rest of the site, and the old site header/footer auto-hide on the redesigned
car-rental routes. globals.css and every other existing component are untouched.

## REPLACE (2 files)
- app/layout.jsx      — now wraps children in <SiteChrome> (which hides the old header on the
                        redesigned car-rental routes). Your Google Ads tag + fonts are kept.
- lib/seo.js          — 24 new car-rental routes appended (for the sitemap). Existing entries unchanged.

## ADD (new folders/files)
- components/carrental/                    — new chrome + theme + scripts:
    CarRentalShell (wraps pages in .crx + new header/footer/sticky/mobile menu),
    CrHeader, CrFooter, CrDisclosure, CrStickyCta, CrMobileMenu, CrSprite, CrSkip,
    CrScripts (client — runs the design's burger/sticky/reveal JS),
    car-rental-theme.css (the 45KB theme, every selector scoped under .crx)
- components/common/SiteChrome/SiteChrome.jsx   — client; renders your old chrome, but returns
    null on the 24 redesigned car-rental routes (so no double header)
- app/car-rental/<slug>/page.jsx  — the 24 new pages (18 airports + 6 cities)
- components/CarRental<City|Code>[Airport]/{PageHead,BandTight}/  — each page's sections (.jsx + .css)

## NOTE — the 3 redesigned airport pages
app/car-rental/lax-airport, miami-airport, orlando-airport now use the NEW design. Their OLD
section components (AirportCarRentalCalifornia, LaxQuestions, etc.) are no longer imported;
you can delete those old sub-folders, but leaving them does no harm.
las-vegas-airport and denver-airport were left on the OLD design (no new design supplied).

## Simplest option
Just replace your whole project folder with this one — it's your project + the additions above,
nothing else changed. Then: npm install && npm run build  (62 routes, static export).
