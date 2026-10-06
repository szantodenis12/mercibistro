# Merci Bistro & Coffee — website (redesign)

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS 4 · GSAP + ScrollTrigger · Lenis.
Design reference: ballenacabo.com — see `.claude/skills/merci-design/SKILL.md` and `_research/ballena-design.md`.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
npm run lint
```
Copy `.env.example` → `.env.local` to toggle `NEXT_PUBLIC_ORDERING_ENABLED` (default `false`).

## Structure
```
src/app/                 routes: / , /meniu, /despre-noi, /locatie, /comanda, /termeni-si-conditii, /despre-cookies
                         + sitemap.ts, robots.ts, opengraph/twitter image, icon, apple-icon, not-found, template (page fade)
src/components/layout    Header (floating pill + mobile panel), Footer
src/components/motion    SmoothScroll (Lenis), MotionController (reveals/parallax), Preloader, SplitText
src/components/home      MenuTeaser (split-content slider), DishCarousel
src/components/menu      MenuNav (sticky scroll-spy), DishRow (price, grams, nutrition)
src/components/ui        blocks (PageHero, Eyebrow, RevealImage), Icons, MapEmbed, LegalPage
src/data/                menu.ts (16 categories, 105 items, nutrition per 100 g), menu-types.ts, featured.ts
src/features/ordering/   cart + checkout shell (see docs/ORDERING.md)
src/lib/                 content.ts (business data, TODO_CLIENT), seo.ts (metadata + JSON-LD), motion.ts
public/images, public/brand   optimised photos, logos, ANPC SAL/SOL badges
```

## SEO / performance
All pages are statically prerendered. Per-page title/description/canonical + Open Graph/Twitter (shared OG image),
`Restaurant` JSON-LD (address, geo, hours, cuisine, menu, phone) site-wide and `Menu` JSON-LD on `/meniu`,
`sitemap.xml`, `robots.txt`. Fonts self-hosted via `next/font` (swap). Images via `next/image` (AVIF/WebP, real `sizes`,
only the hero preloaded). Google Map iframe injected only near the viewport. `prefers-reduced-motion` disables Lenis
and all reveals. Preloader shows once per session as a fixed overlay (no layout shift).

## Placeholder / not finished
- **Online ordering** — cart and checkout UI work; submission is disabled behind `NEXT_PUBLIC_ORDERING_ENABLED`.
  Backend plan: `docs/ORDERING.md`.
- **/blog** — skipped (no posts on the current site).
- **/business-lunch** — skipped (the current page has no offer/pricing, only contact info). Add when the client sends the
  business-lunch menu and price.
- `/valori-nutritionale` — replaced by per-dish nutrition on `/meniu` (current site shows only one dish).

## TODO_CLIENT (search the code for `TODO_CLIENT`)
1. Canonical Google Maps link (three different short-links on the old site) — `src/lib/content.ts`.
2. Google rating figure for `aggregateRating` JSON-LD (we only know „Excelent", 394 reviews) — `src/lib/seo.ts`.
3. Price range for schema.org (`$$` assumed).
4. Delivery: zones, fee, minimum order, presence on Glovo / Tazz / Bolt Food.
5. Reservations: phone only, or an online widget?
6. Business Lunch offer (menu + price).
7. Quesadilla portion weight (100 g vs 600 g in nutrition data) — `src/data/menu.ts`.
8. Allergens per dish (not available in the exported menu data).
9. Legal review of Termeni și condiții (old text cites Law 677/2001, repealed) and cookie policy.
10. Better photography: interior, terrace, team, pizza (no pizza photo exists), higher-res dish shots.
