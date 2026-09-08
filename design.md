# Zenith Realty — Design Reference

Source of truth: the live components in `src/app` and `src/components`. Every value below
is read directly from that code — this file describes what is currently built, not a target
to reconcile against.

> Rebuilt 2026-09-08 from the Claude Design canvas project "M&H Dev" (`MnH Dev v1.html`
> export). An earlier same-day pass used a stale/wrong export and got the hero, form,
> footer, and several images wrong — this revision replaces that pass. If you're diffing
> against an older copy of this file, treat this version as current.

---

## 1. Color

| Role | Value | Where |
|---|---|---|
| Page ground | `#FFFFFF` | `globals.css` `body` background |
| Nav bar | `#FFFFFF` opaque | `Nav.tsx` — no transparency, no blur |
| Panel surface (contact form, service card back) | `#F7F8F9` | `brand.lightGray` |
| Footer | `#0A0A0A` bg, white text at varying opacity | `Footer.tsx` |
| Primary text | `#0A0A0A` | `brand.black` |
| Secondary text | `#5E6670` | `brand.gray` |
| Borders / dividers | `#E3E5E8` | `brand.border` |
| Required-field marker | `#C0392B` | `FindYourNextHome.tsx` asterisks |
| Text selection | `#0A0A0A` bg / `#FFFFFF` text | `globals.css` `::selection` |

The footer is now a dark section (`#0A0A0A`) — the only dark surface on the page. Everything
else stays on the white ground with `#F7F8F9` reserved for panels that need to read apart
from it.

---

## 2. Typography

Family: **Plus Jakarta Sans** via `next/font/google`, weights 300–800 loaded, exposed as
`--font-plus-jakarta-sans`, fallback `Inter, sans-serif`.

| Element | Size | Weight |
|---|---|---|
| Hero `h1` | `clamp(32px,4.2vw,64px)`, tracking `-1.8px`, `leading-[1.1]` | 600 |
| Hero CTA "BOOK A CALL" | 12px, uppercase, tracking `1.2px` | 800 |
| Nav links | 15px | 800 |
| Nav "SOON" pill | 10px, uppercase | 700 |
| "Let's find your next home" `h2` | `clamp(28px,3.6vw,44px)`, `leading-[1.15]` | 500 |
| Metric figure | 36px (`text-4xl`), tracking `-1px` | 700 |
| Metric label | 14px | 500 |
| Form labels | 14px | 600 |
| "What we do" `h2` | `clamp(28px,3.6vw,48px)` | 500 |
| Service card category | 13px, 85% white | 600 |
| Service card title | 23px, white | 700 |
| Testimonial name | 24px | 700 |
| Testimonial designation | 14px | 500 |
| Testimonial quote | 18px, `leading-relaxed` | 400 |
| Footer column heading | 13px, tracking `0.5px`, 90% white | 700 |
| Footer body / links | 14px | 400–500 |

The hero no longer carries a subtext paragraph — just the heading and the CTA.

---

## 3. Shape & elevation

| Element | Treatment |
|---|---|
| Nav "SOON" pill | `rounded-[7px]` |
| Contact form panel | `rounded-[20px]`, no shadow |
| Form inputs / select / submit button | `rounded-lg` (8px) |
| Service card (outer / inner) | `rounded-[22px]` / `rounded-[20px]`, no shadow |
| Service card shine border | animated `conic-gradient`, 4s linear spin (`@keyframes shine-spin` in `globals.css`) |
| Testimonial image | `rounded-3xl` |
| Contact dock (fixed bottom pill) | `rounded-3xl`, `shadow-[0_8px_32px_rgba(10,10,10,0.28)]` |
| Contact dock / footer social icon buttons | `rounded-full` |
| Newsletter input / submit | `rounded-lg` |

---

## 4. Layout

Page container: `max-w-wrap` (1440px) `mx-auto`. Each section owns its own `px-6 md:px-12`
side padding and top spacing rather than a shared `space-y-*` wrapper.

**Hero is full-viewport.** `Nav` + the hero heading/CTA + the video frame are wrapped
together in one `min-h-screen flex flex-col` container (see `page.tsx`): nav and the copy
block are `shrink-0`, the video frame is `flex-1`, so together they exactly fill the first
viewport height — there is no image/video overlap trick here, unlike the old build's hero.

**Hero media is a looping video**, not a static image: `public/hero-video.mp4`, muted,
autoplay, loop, playsInline, `poster="/hero-poster.png"`. The video element is manually
sized in JS (`Hero.tsx`, `useEffect` + `ResizeObserver`) to a fixed "safe" aspect ratio
(`3840/1858`) inside its frame before `object-cover` crops it — matching the source canvas's
`_startHeroVideo` logic. Object position `50% 97.3%` keeps the ground/subject in frame.

**"Let's find your next home"** is a 2-column grid
(`lg:grid-cols-[minmax(280px,1fr)_minmax(360px,1.05fr)]`, `items-center`): copy + a 2×2
metrics grid on the left, a `#F7F8F9` contact form panel (`p-8`) on the right. Metrics
count up only once they scroll into view (`IntersectionObserver`, threshold 0.4) — not on
mount, unlike an earlier draft of this build.

**"What we do"** is a horizontally-scrolling row of fixed 300×400px cards (`overflow-x-auto`,
scrollbar hidden), with prev/next circular buttons that call `scrollBy`. All six cards now
carry real photography.

**Testimonials** is a 2-column grid: a stacked, cross-fading image on the left — fixed
`max-w-[280px] aspect-[233/256]`, centered, not full-width square — and name/designation/
quote + prev/next buttons on the right. Inactive frames sit at `scale(0.96) rotate(-3deg)`.

**Contact dock**: unchanged from the prior build — a fixed, bottom-center black pill holding
call / email / Instagram icon buttons.

**Particle field**: fixed, full-viewport `<canvas>` behind all content (`-z-10`), 45 slow
drifting dots (down from 70), `devicePixelRatio` capped at 1.5, frame rate throttled to
~30fps. Purely decorative, `aria-hidden`.

**Footer** is a dark, four-column section (`bg-brand-black`, `grid-cols-[repeat(auto-fit,minmax(180px,1fr))]`):
logo (inverted to white) + tagline + social icons; a "Company" link column; a "Legal" link
column; a "Stay in the loop" newsletter signup (email input + "Sign up", client-only —
`preventDefault` + form reset, no backend). A bottom bar carries the copyright line.

---

## 5. Nav

- `sticky top-0`, `h-20` (80px), opaque `#FFFFFF`, `border-b border-brand-border/50`.
- Logo: `Image`, `src="/logo.png"`, alt `"M&H Developments"`, intrinsic 616×276, rendered at
  `h-8` (32px).
- Links: **Properties**, **About Us** (plain `<a href="#">`, no dropdown — "About Us", not
  "Company"), and **Blog** as a non-interactive `<span>` carrying a black "SOON" pill. No
  Mortgage link, no CTA button, no dropdown, no mobile drawer/hamburger.
- Nav links hide below `860px` (`min-[860px]:flex`) with **no mobile replacement** — a known
  gap inherited from the source canvas, not a deliberate call; flag before shipping if
  mobile nav access matters.

---

## 6. Hero

`h1`: "Discover space you truly belong in", `max-w` none (no longer constrained — it's the
only element in its row now). CTA: "BOOK A CALL" directly beneath it, solid black, hover
fades to `brand.gray`. No subtext paragraph. Media: full-viewport looping video of a car
arriving at the dusk residence (see §4).

---

## 7. Let's find your next home

Heading: "Let's find your next home". Subtext: "Tell us what you're looking for and a member
of our team will follow up within one business day."

Metrics (count up 0→target over 1400ms, cubic ease-out, triggered on scroll into view):

| Metric | Target | Label |
|---|---|---|
| Homes delivered | 500+ | |
| Years in business | 15 | |
| Client satisfaction | 98% | |
| Cities served | 12 | |

Form fields: **Full Name\* , Phone\*** (both required), **Email** (optional — no longer
required), "I'm interested in" (select: Buying / Selling / Construction / Mortgage &
financing, optional, custom chevron), newsletter checkbox, submit button ("REQUEST A
CALLBACK" → "SUBMITTING..." while pending). Field grid is
`repeat(auto-fit,minmax(170px,1fr))` — Name/Phone/Email sit side by side on wide panels; the
select, checkbox, and button each span the full row. On submit the form is replaced by a
"Thanks — we've got it." panel. No network call — client-side only, 800ms simulated delay.

---

## 8. What we do

Heading: "What we do". Six services, all with real photography, horizontally scrollable:

| Slot | Category | Title | Image |
|---|---|---|---|
| svc-construction | Build | Construction | `/service-construction.jpg` |
| svc-sales | Buy & Sell | Home Sales | `/service-sales.jpg` |
| svc-realty | Represent | Realty & Brokerage | `/service-realty.jpg` |
| svc-mortgage | Finance | Mortgage & Financing | `/service-mortgage.jpg` |
| svc-management | Manage | Property Management | `/service-management.jpg` |
| svc-design | Plan | Design & Architecture | `/service-design.jpg` |

---

## 9. Testimonials

Five entries, `active` index starts at 0, prev/next buttons cycle with wraparound. All five
now carry a real headshot-style photo:

| Name | Designation | Image |
|---|---|---|
| Sarah Chen | Homeowner, Aether Heights | `/testimonial-1.jpg` |
| Rajwinder Singh | Homeowner, Azure Sanctuary | `/testimonial-2.jpg` |
| Amara Okafor | Homeowner, Summit Pavilion | `/testimonial-3.jpg` |
| Diego Martinez | First-time buyer | `/testimonial-4.jpg` |
| Priya Nair | Homeowner, Malibu | `/testimonial-5.jpg` |

Quotes reference "M&H Developments" by name (not "Zenith Realty") — the brand switch is now
consistent through nav, hero, testimonials, and footer. The only leftover placeholder is the
contact dock's `mailto:hello@zenithrealty.com` / `tel:+10000000000`, which the source canvas
itself never reconciled with the footer's `hello@mhdevelopments.com`.

---

## 10. Footer & contact dock

Footer (§4) carries the real brand throughout: logo, "Helping you find space you truly
belong in.", Company/Legal link columns, a newsletter signup, and "© 2026 M&H Developments.
All rights reserved." — no more "Zenith Realty" copyright line.

Contact dock (unchanged): fixed bottom-center, phone / email / Instagram, `tel:+10000000000`
and `mailto:hello@zenithrealty.com` placeholders (see the inconsistency noted in §9),
Instagram button has its own gradient fill.

---

## 11. Assets

| Asset | File | Source |
|---|---|---|
| Logo | `public/logo.png` | M&H Dev design canvas, 616×276, tight-cropped |
| Hero video | `public/hero-video.mp4` | Design canvas — car arriving at dusk residence |
| Hero poster | `public/hero-poster.png` | Design canvas — video's static fallback frame |
| Service card images (×6) | `public/service-*.jpg` | Design canvas image slots, one per service |
| Testimonial images (×5) | `public/testimonial-*.jpg` | Design canvas image slots, one per person |

All slots shipped filled in this export — no placeholder/unfilled cards remain, unlike the
earlier (wrong) pass.

---

## 12. Constraints

- **One accent colour at most, and only when asked.** Still holds — the Instagram gradient
  and the service-card shine border are explicitly-specified UI accents from the source
  canvas, not a general invitation to add color elsewhere.
- **Keep the palette light** except the footer, which the source canvas explicitly makes
  dark (`#0A0A0A`). Don't extend dark styling beyond the footer without a new canvas update.
- **Framer Motion only for scroll-in animation.** Section reveals still go through
  `FadeInSection`. The metrics count-up, testimonial crossfade, service-card shine spin, and
  particle field are plain `requestAnimationFrame`/CSS transitions, matching the source
  canvas, which used no animation library.
- **Named testimonials are sourced content, not invented.** All five, with quotes, come
  directly from the design canvas — keep them as delivered, don't add more or rewrite them
  without a new canvas update.
- **No generic AI-sounding marketing copy.** Existing copy (including the testimonials and
  footer tagline) is taken verbatim from the source canvas — don't rewrite it on your own
  judgment.
- **Before touching this build again, re-verify which exported `.html` bundle is actually
  current.** This project has accumulated multiple exports across Desktop/Downloads at
  different times; confirm the file's timestamp and ask if more than one exists.
