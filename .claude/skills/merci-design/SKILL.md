---
name: merci-design
description: Design system for the Merci Bistro & Coffee (Oradea) website — fonts, color tokens, fluid type scale, spacing, block patterns, GSAP/Lenis motion recipes and image rules, adapted from the Ballena Cabo reference. Use whenever adding or changing pages, sections or components in this repo so they stay consistent.
---

# Merci design system

Reference look: **ballenacabo.com** (full teardown in `_research/ballena-design.md`, raw CSS/JS in `_research/raw/`).
Feel = editorial, calm, mostly light paper pages punctuated by 1–2 bold colour blocks per page, huge uppercase display
type at weight 400, slow expo-out motion. Copy is Romanian with correct diacritics (ș ț ă î â — comma-below, never cedilla).

## Fonts (`src/app/layout.tsx`, next/font/google, `display: swap`)
| Role | Font | Why |
|---|---|---|
| Display (`font-display`, `.title-*`, eyebrows, buttons, nav) | **Josefin Sans** 300/400/500 | Compared side by side with Sweet Sans Pro against Figtree, Montserrat, Jost, Tenor Sans, Raleway, Outfit, Urbanist… Josefin is the only free face with Sweet Sans's engraved-geometric, slightly classical, wide caps (round O/C, narrow E/S, vintage proportions). Has `latin-ext` → correct Ș/Ț. |
| Body (`font-sans`) | **Figtree** 400–700 | Closest free match to TT Commons Pro (geometric-humanist, similar x-height). Body weight 500 like Ballena. |
| Accent (`.script`) | **Homemade Apple** | Merci's own brand script. Latin only → use for diacritic-free phrases („De prin lume adunate”, „Merci”). Never for headings. |

Font CSS variables live on `<html>` (required: `@theme` vars resolve at `:root`).

## Colour tokens (`@theme` in `src/app/globals.css`)
| Token | Hex | Use |
|---|---|---|
| `gold` | #d4ab65 | brand accent: split-content block bg, CTAs (`.btn-gold`), eyebrows on dark, stars |
| `gold-deep` | #7d5f28 | gold *text* on light bg (5.2:1 on paper) — never use `gold` text on paper |
| `gold-soft` | #e6cc9c | headings on navy, script tagline |
| `navy` / `navy-2` / `navy-3` | #1a282e / #1f3038 / #1b2a31 | dark blocks (hero-simple, CTA card, pillars), header when scrolled |
| `ink` | #030612 | text on light, footer bg, dark buttons |
| `paper` | #f5efe3 | default page bg (Ballena cream → warmed to the gold) |
| `paper-2` | #ece3d1 | alternate light section (Ballena #F9FBF3 break), summary boxes |
| `stone` | #d8ccb6 | dividers on paper |
| `muted` | #5b5a55 | secondary text on paper (6:1) |
| `mist` | #c9c2b4 | secondary text on navy (8.5:1) |
Ballena mapping: cream → `paper`, terracotta block → `gold` block, sage card → `navy` block, near-black → `ink`.
All text pairs above pass WCAG AA; ink on gold = 9.4:1.

## Fluid sizing & type scale
Root font-size is fluid (Ballena §6): `--size-font = max(14px, container / (ideal / 16))`, tiers ideal 1440 (≥1025),
960 (768–1024), 600 (480–767), 390 (≤479). **Size everything in `rem`** (Tailwind spacing is rem too) so it all scales.
| Class | Desktop | ≤1024 | Notes |
|---|---|---|---|
| `.title-xl` | 5.125rem | 2.75rem | hero h1 |
| `.title-l` | 4rem | 2.25rem | section headings |
| `.title-m` | 3.625rem | 2rem | menu categories |
| `.title-s` | 3rem | 1.75rem | |
| `.title-sm` | 2rem | 1.5rem | |
| `.title-xs` | 1.5rem | 1.125rem | |
Titles: uppercase, weight 400, line-height **0.95** (Ballena .9 + room for diacritics), tracking +0.025em, `text-wrap: balance`.
`.eyebrow` .875rem/500/+0.04375em, `.eyebrow-l` 1.5rem/+0.075em, `.eyebrow-mini` .75rem. Body: `.paragraph-l` 1.125rem, `.paragraph-m` 1rem, lh 1.4.

## Spacing & layout
- `.container-x` = full width, gutter `--gutter` (1.25rem; 1rem ≤479px), max 120rem. 12-col grids on `lg`.
- Section rhythm: `py-[5rem] md:py-[8rem]`; colour blocks are full-bleed `grid lg:grid-cols-2` (media | text).
- Editorial pattern (reused everywhere): eyebrow in cols 1–4, `SplitText` title + paragraph in cols 5–12.

## Components (in `src/components`)
- `Header` — floating glass pill: fixed, `max-w-[47rem]`, radius .375rem, `backdrop-blur-[25px]`, `bg-ink/30` at top → `bg-navy/90` scrolled → `bg-paper` when menu open; dropdown links stagger 50ms.
- Buttons: `.btn` + `.btn-gold | .btn-ink | .btn-ghost-light | .btn-ghost-ink` — **sharp corners**. Rounded shapes only for header pill, chips, circular icon buttons.
- `.arrow-link` + `<ArrowCircle/>` — text link with circular arrow that fills on hover (set `--arrow-hover` on dark bgs).
- `blocks.tsx`: `Eyebrow`, `PageHero` (Ballena hero-simple), `RevealImage` (zoom-settle or `parallax`), `SplitText`.
- Home: `MenuTeaser` (split-content, hand-rolled slider, gold bg), `DishCarousel` (1/2/3 cards, 16px gap, scroll progress bar).
- Menu: `MenuNav` (sticky chips + scroll-spy), `DishRow` (price, grams, `<details>` nutrition, `AddToCartButton`).
- Ordering lives in `src/features/ordering` (see docs/ORDERING.md).

## Motion recipes (`MotionController`, `SmoothScroll`, `Preloader`)
Opt in with data attributes; nothing animates without `html.has-anim` (set pre-paint only if motion allowed).
| Hook | Effect |
|---|---|
| `SplitText hero` | words yPercent 115→0, **1.2s power4.out**, stagger {amount .4}, delay .25 after preloader |
| `SplitText` | words yPercent 115→0, **1s power3.out**, stagger .04, trigger `top 92%`, once |
| `data-hero-bg` | scale 1.15→1, **2s power2.out** |
| `data-parallax` | scale 1.15 + yPercent −6→6, scrub (stay < 7.5% overscan) |
| `data-zoom` | scale 1.05→1, **1.4s power2.out**, `top 95%`, once |
| `data-fade` / `data-hero-fade` | opacity 0→1, y 20→0, .9s power3.out |
Lenis `lerp: 0.075` on the GSAP ticker (`lagSmoothing(0)`); `lockScroll()` for drawers/menus; `data-lenis-prevent` on inner scrollers.
Preloader: navy curtain, logo mask-up .55s power3.out → out .4s power3.in → `clip-path: inset(0 0 100% 0)` .6s power3.inOut; total ≈1.45s, once per session (`sessionStorage`), fixed overlay → no CLS.
Page transition: `template.tsx` `.page-enter` (.6s fade/rise) + Lenis jump to top. Hovers: .3s `ease-merci` = cubic-bezier(.16,1,.3,1).
Reduced motion: no Lenis, no reveals, CSS durations ~0.

## Images
- Only `next/image`; `preload` only on the page hero; always a real `sizes`. AVIF/WebP via `next.config.ts` (qualities 75/85).
- Sources in `public/images/` with descriptive names, pre-resized ≤2400px. Alt text in Romanian, describe the dish.
- Photography is scarce (6 site + ~10 usable menu photos). Low-res phone shots (≤450px wide) only in small slots (carousel cards).
- No photo? Use a **typographic block** (navy radial gradient, gold dish name, script „Merci”) — never a grey placeholder.
- Dark food photos sit on navy/ink; overlays are ink gradients (`from-ink/90`), never pure black.

## Do / Don't
- Do keep pages ~80% paper/ink with max 1–2 colour blocks (gold, navy). Do keep headings short (≤7 words) — word masks animate per word.
- Do use `gold-deep` for gold text on light; `gold` text only on navy/ink.
- Don't bold display type (weight ≤500), don't round CTA corners, don't add new fonts/colours without updating this file.
- Don't invent facts (awards, chefs, years); missing data goes behind `TODO_CLIENT` in `src/lib/content.ts`.
