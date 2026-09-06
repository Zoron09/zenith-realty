# Zenith Realty — Design Reference

**Authoritative source of truth.** Supersedes `zenith-realty-specification.md`, which was
found to be inaccurate: of 14 discrepancies audited against the reference screenshot,
13 were the spec being wrong rather than the code.

Every value below was verified on **6 Sep 2026** against
`../Screenshot 2026-09-05 123512.png` by canvas pixel-sampling of the reference PNG.
Where a value could not be verified, it is marked **UNCONFIRMED** — treat those as open
questions, not as licence to invent.

> Reference caveat: the screenshot is 787 × 1032 and its page area is only 558px wide.
> Structure, layout and colour read reliably from it. Body copy is a few pixels tall and
> does **not**. Anything typographic below the heading level is inference, not measurement.

---

## 1. Color

| Role | Value | How it was verified |
|---|---|---|
| Page ground | `#F7F7F7` | Sampled `(60,620)` and `(330,432)` → `247,247,247`, uniform across the full window width |
| Nav bar | `#FFFFFF` opaque | Sampled `(55–84, 20)` → `255,255,255`. Not translucent, not blurred |
| Card / panel surface | `#FFFFFF` | Sampled `(160,715)` → `255,255,255`, sitting on the grey ground |
| Primary text | `#0A0A0A` | Per spec, unchanged and consistent with the reference |
| Secondary text | `#5E6670` | Per spec, unchanged |
| Borders / dividers | `#E3E5E8` | Per spec, unchanged |

The white nav and white card panels are what make the `#F7F7F7` ground legible as a
deliberate choice rather than an off-white accident. Keep all three together.

---

## 2. Typography

Family: **Plus Jakarta Sans** (via `next/font/google`).

| Element | Weight | Status |
|---|---|---|
| `h1` hero | **500** (`font-medium`) | Verified |
| `h2` section headings | **500** (`font-medium`) | Verified |
| Hero caption `h3` | **500** (`font-medium`) | Verified |
| Body copy | 400 (`font-normal`) | Verified |
| Property card names | 700 (`font-bold`) | **UNCONFIRMED** |
| Property card prices | 800 (`font-extrabold`) | **UNCONFIRMED** |

**Headings are not extrabold.** The old spec called for `font-extrabold` (800) throughout;
the reference measures far lighter. Stem width on "Guiding you toward the" is 2–3px against
a ~24px cap height — a ratio of ≈0.10, which corresponds to weight 400–500. Weight 800 would
measure ≈0.165.

**Open question:** card names and prices are still carrying the old spec's 700/800. The
reference appears to render them lighter as well, but they are too small in the capture to
measure with confidence. Do not change them without either a higher-resolution reference or
an explicit decision.

---

## 3. Shape

**Square corners throughout. No exceptions, no drop shadows.**

- Hero media — square, no shadow
- Property card images and panels — square
- Exclusive Collection image — square
- Spec chips inside cards — square

The old spec's `rounded-3xl` / `rounded-2xl` / `rounded-lg` ladder and its
`shadow-sm`/`md`/`lg` usage are both contradicted by the reference. The only surviving
`rounded-full` is the small "New" pill in the nav.

---

## 4. Layout

**Hero media — full-bleed.** It runs edge to edge of the viewport, escaping the padded
container. Measured: the hero spans x=55→612 in a browser window that itself spans
x=55→612. By contrast the property cards start at x=78, inset by 23px. So the padding
exists on the page and the hero deliberately breaks out of it. Implemented via the
`.full-bleed` utility in `globals.css`. Aspect ratio 21:9 — the reference measures
558 × 235 = 2.37:1, and `aspect-[21/9]` = 2.33:1.

**Property cards — flat white panels.** No location badges. The old spec's
Malibu / Bahamas / Vail pills are absent from the reference on all three cards. Cards are
a white panel containing a 4:3 image, a name/price row, a location line, and a four-up
spec strip.

**Exclusive Collection — roughly 32% text / 67% image.** Implemented as a 4/8 split on the
12-column grid. The old spec's 5/7 is too wide on the text side. The text sits in a white
panel; the image is larger and square-cornered.

**No eyebrow label.** There is no "ARCHITECTURAL EXCELLENCE" small-caps label above the
"Exclusive collection" heading. The heading sits at the top of its panel.

---

## 5. Nav

- Background: opaque `#FFFFFF`. **Not** `bg-white/80`, no `backdrop-blur`.
- Logo: **"ZENITH REALTY" stacked on two lines**, not one.
- Links: Properties (with chevron), Mortgage (with black "New" pill), Company, Careers, Blog.
- Right-hand "Post a property" button is visible at **all** widths.
- **UNCONFIRMED:** the fourth nav item appears to carry a chevron in the reference. Too
  blurry to confirm; currently rendered as a plain "Careers" link.

Accessibility behaviour to preserve (added deliberately, not part of any visual spec):
dropdown opens on click *and* keyboard focus, `aria-expanded`, Escape closes and returns
focus to the trigger, mobile drawer traps Tab, and a visible `:focus-visible` ring.

---

## 6. Photography

Direction, by slot:

| Slot | Subject |
|---|---|
| Hero | Dark villa at dusk, lit interiors, **a car in the driveway** |
| Property cards | Daylight architectural exteriors |
| Exclusive Collection | Daylight architectural exterior with mature planting |

**Current images are close-match approximations, not the originals.** The old spec's
Unsplash IDs are unchanged in git history but no longer serve the photographs seen in the
reference — the IDs now resolve to entirely different pictures. Everything currently in the
codebase was sourced to match the reference's subject and mood, not recovered from it.

If the original assets exist, they beat any approximation. Until then, treat the photography
as provisional.

---

## 7. Don't do

Lessons from this project's history. These are not stylistic preferences; each one is
something that already went wrong here.

- **One accent colour at most, and only when asked.** A brass `#A16207` accent was
  introduced, approved, then reverted. The palette is light white-and-grey. Do not add an
  accent — or a second one — without an explicit instruction.
- **Keep the palette light.** No dark mode, no dark-content direction, unless directed.
- **Don't mix GSAP and Framer Motion on the same interaction** without a specific, approved
  reason. The current site uses Framer Motion only. GSAP is not installed. A pinned GSAP
  aperture hero was built and reverted; it is future work, not a default.
- **Don't reintroduce reverted work.** Check git history before "restoring" anything: the
  brass accent, the radius scale, tinted shadows, Phosphor icons, the liquid-glass nav and
  the GSAP hero were all deliberately removed.
- **No invented brand names, fake locations, or fabricated trust content.** This is a
  template with placeholder content. Zenith Realty is itself a placeholder for M&M Homes.
  No testimonials, no client logos, no review counts, no awards.
- **No generic AI-sounding marketing copy.** Specifically: em-dashes sprinkled through
  marketing sentences, suspiciously round numbers, "elevate / seamless / curated
  excellence" filler, and tricolon headlines. Existing copy comes from the spec and should
  be changed only on instruction.
- **Verify before claiming a match.** Colour and geometry claims in this file came from
  pixel-sampling the reference. Do not assert a value matches by eye.

---

## 8. Change log

| Date | Change |
|---|---|
| 2026-09-06 | Created. Values verified against the reference screenshot by canvas sampling; supersedes `zenith-realty-specification.md`. |
