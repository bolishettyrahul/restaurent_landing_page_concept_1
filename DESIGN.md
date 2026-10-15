---
name: The Grand Line
description: A buffet voyage drawn as a hand-coloured Deccan voyage chart and ship's-ticket ephemera.
colors:
  marigold: "#f2a51f"
  marigold-soft: "#f8c55a"
  marigold-deep: "#dc8221"
  peacock: "#0d5960"
  peacock-deep: "#083f45"
  peacock-light: "#2b8288"
  chilli: "#c3361c"
  chilli-deep: "#9b2913"
  rice: "#fff7ea"
  rice-shade: "#f6e7cc"
  ink: "#2b1b10"
  ink-soft: "#5a3c26"
  on-peacock-soft: "#b9dcd8"
  field-white: "#ffffff"
  veg: "#1c7c3a"
  nonveg: "#8b3a1e"
  error: "#9b1c1c"
typography:
  display:
    fontFamily: "Rozha One, Georgia, serif"
    fontSize: "clamp(3.4rem, 1.8rem + 6.4vw, 6rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.03em"
  fare-numeral:
    fontFamily: "Rozha One, Georgia, serif"
    fontSize: "clamp(3.5rem, 2.4rem + 4vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "\"tnum\" 1"
  headline:
    fontFamily: "Rozha One, Georgia, serif"
    fontSize: "clamp(2.8rem, 1.6rem + 4.6vw, 4.209rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title-large:
    fontFamily: "Rozha One, Georgia, serif"
    fontSize: "clamp(2.3rem, 1.5rem + 3vw, 3.157rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Rozha One, Georgia, serif"
    fontSize: "clamp(1.9rem, 1.4rem + 1.8vw, 2.369rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  display-list:
    fontFamily: "Rozha One, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.25
  lede:
    fontFamily: "Mukta, Segoe UI, system-ui, sans-serif"
    fontSize: "1.333rem"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Mukta, Segoe UI, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "\"lnum\" 1"
  label:
    fontFamily: "Mukta, Segoe UI, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 700
    letterSpacing: "0.06em"
rounded:
  mark: "3px"
  field: "8px"
  ticket: "14px"
  pill: "9999px"
spacing:
  space-1: "4px"
  space-2: "8px"
  space-3: "16px"
  space-4: "32px"
  space-5: "64px"
  space-6: "128px"
components:
  button-primary:
    backgroundColor: "{colors.chilli}"
    textColor: "{colors.field-white}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.chilli-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  button-call:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.rice}"
    rounded: "{rounded.pill}"
    padding: "8px 18px"
    height: "44px"
  button-call-hover:
    backgroundColor: "{colors.chilli}"
  tab:
    backgroundColor: "transparent"
    textColor: "{colors.peacock-deep}"
    rounded: "{rounded.pill}"
    padding: "8px 20px"
    height: "44px"
  tab-selected:
    backgroundColor: "{colors.peacock}"
    textColor: "{colors.rice}"
  chip-dish:
    backgroundColor: "transparent"
    textColor: "{colors.rice}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  ticket:
    backgroundColor: "{colors.rice}"
    textColor: "{colors.ink}"
    rounded: "{rounded.ticket}"
    padding: "{spacing.space-4}"
  boarding-pass:
    backgroundColor: "{colors.rice}"
    textColor: "{colors.ink}"
    rounded: "{rounded.ticket}"
  input-field:
    backgroundColor: "{colors.field-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "8px 12px"
    height: "48px"
---

# Design System: The Grand Line

## Overview

**Creative North Star: "The Voyage Chart and the Ship's Ticket"**

The buffet is a voyage, and the page is drawn as the ephemera of one: a hand-coloured chart of the Deccan spice route, a dhow leaving a Hyderabad harbour at sunrise, and the paper you would carry aboard. Two grounds hold the world. A marigold sky field carries warmth and the fare; a deep peacock sea carries the route and the evening. Rice paper is never a ground for the world itself; it is the material of things you hold (tickets, the boarding pass) and the reading ground of the information passages (menu, visit, FAQ).

The illustration is inked, not rendered: flat hand-coloured fills from the palette, a consistent ink outline with round joins, hatch shading, and dotted route lines. Depth comes from scroll (layers parting at different speeds, a route drawing itself across a pinned chart, tickets settling onto the table) rather than from gradients or glass. Density is generous and editorial in the narrative chapters, tighter and list-like in the information passages.

Photography is sample stock: open-licensed (CC BY / CC BY-SA) images under `public/images/demo/`, each with a provenance `.json`, labelled on-image as "Sample photo". They hold the place of the client's own photography and are to be replaced; the frames around them (rice mat, slight rotation, 14px corners) are the system, the pictures are not.

**Key Characteristics:**
- Marigold sky and peacock sea as the two world grounds; rice paper reserved for held objects and reading passages; ink for type and line.
- Chilli red fills only the booking action; elsewhere it appears as an inked accent (fare numerals, wax seals, chevrons, the dhow's sail stripe).
- Rozha One at a single weight for everything display, including prices and counts; Mukta for all reading and interface text.
- Tickets with perforated rules and punched notches; wax seals as port marks; dotted route lines.
- Scroll-driven motion (GSAP ScrollTrigger over Lenis) that fully stands down under reduced motion.

## Colors

A warm, saturated spice-trade palette: two deep grounds, one paper, one ink, one action red.

### Primary
- **Chilli Red** (chilli): the action. Fills the primary booking buttons (hero, fare tickets, voyage outro, visit, mobile dock), the call pill on hover, the text selection, and the wax seals' body. As ink it colours fare numerals, the FAQ chevron, the brand compass and the dhow's sail stripe.
- **Dried Chilli** (chilli-deep): hover state of the primary button; emphasis text on marigold and rice (kids' fare, visit fact labels, link and FAQ hover).

### Secondary
- **Peacock Sea** (peacock): the sea ground of the voyage chapter and the harbour; selected menu tab fill; the area chart's water; scrollbar thumb.
- **Peacock Night** (peacock-deep): the bar chapter's ground, the hero's base under the scene and the phone boarding-pass dock; headings on rice passages; default focus ring.
- **Shallows** (peacock-light): wave lines, the route's resting dots, dish-chip outlines, the graticule in the area chart, the phone voyage rail.
- **Sea Mist** (on-peacock-soft): secondary text on peacock grounds (cuisine lines, bar body copy); also the colour of the voyage graticule at 7% opacity.

### Tertiary
- **Marigold Sky** (marigold): the sky ground of the hero, the fares chapter and the occasions chapter; voyage and bar headings on peacock; the drawn route; the footer wordmark; browser theme colour.
- **Morning Haze** (marigold-soft): the horizon haze band in the harbour, the focus ring on dark grounds, the voyage scroll hint.
- **Turmeric** (marigold-deep): bullet dots in fare inclusions and the sun's inner dotted ring.

### Neutral
- **Rice Paper** (rice): tickets, boarding pass, the menu and visit/FAQ reading grounds, the scrolled header, the mobile dock, photo mats, text on peacock and ink.
- **Rice Shade** (rice-shade): perforation rules, list dividers, header and dock hairline, hover fill inside the guest stepper, scrollbar track.
- **Lamp Ink** (ink): all body and display text on light grounds, every illustration outline, the call pill, the footer ground.
- **Faded Ink** (ink-soft): secondary text on rice (inclusions, facts, FAQ answers, captions, field labels).
- **Field White** (field-white): input and stepper fills, the diet-mark plate, text on chilli buttons.

### Diet and state marks
- **Veg Green** (veg) and **Non-veg Brown** (nonveg): the Indian food-label diet marks only, a green dot or a brown triangle in a 16px square plate. Never used decoratively.
- **Error Red** (error): invalid field borders and phone error text in the boarding pass.

### Named Rules
**The Rice Is Paper Rule.** Rice is a material, not a sky. It belongs to tickets, the boarding pass, photo mats, the scrolled header and dock, and the reading grounds of menu and visit/FAQ. The world's narrative chapters sit on marigold or peacock.

**The Chilli Is the Action Rule.** A chilli fill means "book". Everywhere else chilli is a line or a numeral, never a panel or a ground.

**The Grounds Alternate Rule.** Chapters alternate sky and sea so no two neighbours share a ground: hero (marigold sky over peacock sea) → voyage (peacock, graticule) → fares (marigold) → menu (rice) → bar (peacock-deep) → occasions (marigold) → visit and FAQ (rice) → footer (ink). The header is transparent over the hero and turns rice once scrolled.

## Typography

**Display Font:** Rozha One (with Georgia, serif), weight 400 only
**Body Font:** Mukta (with Segoe UI, system-ui, sans-serif), weights 400, 500, 700

**Character:** Rozha One is a high-contrast Devanagari-tradition display serif with the heft of a painted shop board; Mukta is a plain, open humanist sans that keeps menus, forms and FAQs easy. Both load through `next/font` and are exposed as `--font-display` and `--font-text`.

### Hierarchy
The ramp is a 1.333 (perfect fourth) scale from a 1rem base, fluid from step 2 upward.
- **Display** (400, clamp 3.4rem to 6rem, line-height 1, -0.03em): the hero's "All Aboard." only.
- **Fare numeral** (400, clamp 3.5rem to 5.5rem, line-height 1, -0.03em, tabular figures): prices on fare tickets, rupee sign at 0.55em set high, chilli coloured.
- **Headline** (400, step 5, clamp 2.8rem to 4.209rem, line-height 1.1, -0.02em): chapter headings (h2).
- **Title large** (400, step 4, clamp 2.3rem to 3.157rem, -0.02em): port names, occasion titles, voyage outro.
- **Title** (400, step 3, clamp 1.9rem to 2.369rem, -0.01em): default h3; manifest counts use this size in peacock-deep.
- **Display list** (400, 1.5rem, line-height 1.2 to 1.25): menu items, FAQ questions, the boarding-pass route line. Step 2 (clamp 1.5rem to 1.777rem) sets the hero quote and fare ticket names.
- **Lede** (Mukta 400, step 1, 1.333rem, line-height 1.5, max 58ch): the paragraph under each chapter heading.
- **Body** (Mukta 400, 1rem, line-height 1.6, lining figures): running text, held to 40 to 62ch in context.
- **Label** (Mukta 700, 0.8rem, 0.06em, uppercase): boarding-pass field labels only.

Headings balance (`text-wrap: balance`), paragraphs use `text-wrap: pretty`.

### Named Rules
**The One Weight Display Rule.** Rozha One is set at 400 everywhere. It is never bolded, synthesised or swapped for a system face.

**The Numerals Are Display Rule.** Prices, counts and port numbers are set in Rozha One; the reading text around them stays in Mukta.

## Layout

A single centred container (`min(100% - 32px, 1200px)`) holds every chapter except the voyage track and the hero scene, which run full bleed. Chapters breathe on `space-6` (128px) vertical padding; inside them the rhythm is `space-5` (64px) between column groups, `space-4` (32px) between blocks and `space-3` (16px) between a heading and its lede. The scale is a doubling series from 4px; values off it appear only inside components (12px and 24px button and field padding, 18px and 20px pill padding).

Information chapters are asymmetric two-column grids (1fr against 1.1 to 1.6fr) that collapse to one column below 900px. The voyage is a horizontal track on desktop (900px and up, motion allowed): an intro column, then ports of fixed width (clamp 520px to 720px) staggered up and down by 7 to 9vh, joined by the drawn route. Below 900px, or with reduced motion, the ports stack vertically along a 3px dotted peacock-light rail with their seals hung on it.

The hero is at least the viewport tall (min 720px), copy upper-left, the boarding pass docked at the bottom edge. Below 720px the harbour drops into the flow between copy and pass (300px tall, birds removed), the hero ground turns marigold and the pass sits on a peacock-deep dock. Below 760px a fixed rice dock carries call, WhatsApp and a chilli "Book" pill; the footer pads beneath it. Anchor scrolling offsets 72 to 80px for the fixed header.

Breakpoints in use: 480, 520, 720, 760, 900, 960 and 1100px.

## Elevation & Depth

Grounds are flat. Depth belongs to paper: tickets, the boarding pass, matted photos, the primary button and the scrolled header cast soft, layered, ink-tinted shadows, as if lying on the chart. The illustration has no shadows at all; it reads depth from overlapping inked layers and from scroll parallax. Wax seals carry one small drop shadow so they read as raised.

### Shadow Vocabulary
- **Ticket** (`0 1px 2px rgb(43 27 16 / 0.08), 0 6px 14px rgb(43 27 16 / 0.12), 0 24px 48px rgb(43 27 16 / 0.16)`): the boarding pass and the matted occasions photo.
- **Fare ticket** (`0 2px 4px rgb(43 27 16 / 0.12), 0 14px 28px rgb(43 27 16 / 0.16), 0 32px 64px rgb(43 27 16 / 0.16)`): the two fare tickets on marigold, slightly heavier.
- **Port photo** (`0 2px 4px rgb(0 0 0 / 0.15), 0 18px 36px rgb(0 0 0 / 0.25)`): matted photos on the peacock sea, where an ink tint would vanish.
- **Chilli lift** (`0 2px 4px rgb(155 41 19 / 0.25), 0 8px 18px rgb(155 41 19 / 0.25)`): the primary button, tinted with its own colour.
- **Header and dock** (`0 1px 0 rice-shade` hairline plus `0 6px 18px rgb(43 27 16 / 0.08)`; the dock casts upward at 0.12).
- **Seal** (`drop-shadow(0 2px 2px rgb(0 0 0 / 0.25))`).

### Named Rules
**The Paper Lifts, Grounds Don't Rule.** Only held objects cast shadows. Shadows are soft and layered, never a hard offset block.

## Shapes

Corners are 14px on every paper object and framed photo, pills on every button, tab, chip and call link, 8px on form fields and 3px on the diet-mark plate. Photo mats are an 8px rice border with the inner image clipped to 6px, and are rotated ±2deg on the voyage and occasions so they read as pinned prints.

Lines carry the world. The route at rest is dotted (4px stroke, round caps, `1 14` dash); a perforation is a 2px dashed rule in rice-shade on rice, or in 30% ink on marigold; plain list dividers are 1px rice-shade. Punched notches sit where a perforation meets a ticket edge: 14px radius masks on the fare tickets, 20px circles filled with the ground colour on the boarding pass.

### Named Rules
**The Perforation Rule.** Every ticket is split by a dashed perforation, and the perforation ends in punched notches. A rice card without a perforation is not a ticket.

## Components

### Buttons
Confident pills that lift on hover.
- **Shape:** full pill (9999px), minimum 48px tall, 12px 24px padding, Mukta 700 at 1rem, 20px icon with an 8px gap.
- **Primary:** chilli fill, field-white text, chilli lift shadow; hover deepens to chilli-deep. Used only for booking and the one onward step from the voyage.
- **Ghost:** transparent with a 2px currentColor border; its colour is set by the ground (ink on marigold, peacock-deep on rice); hover adds an 8% ink wash.
- **Call pill (header):** ink fill, rice text, 44px tall, phone icon; turns chilli on hover; collapses to a 44px circle below 480px.
- **Hover / Active / Focus:** hover rises 2px, active returns to rest, transitions 150ms on the system ease. Focus is a 3px peacock-deep outline at 3px offset, marigold-soft on dark grounds.

### Chips and tabs
- **Menu tabs:** 44px pills, 2px peacock border, peacock-deep text; selected fills peacock with rice text; hover adds an 8% peacock wash. The tab row ends in a dashed perforation.
- **Dish chips:** passive labels on the voyage, 1.5px peacock-light outline, rice text, 4px 12px padding.

### Cards / Containers: the ship's ticket
- **Corner Style:** 14px.
- **Background:** rice, ink text.
- **Shadow Strategy:** fare ticket shadow (see Elevation).
- **Border:** none; notched by a radial mask at both sides of the perforation.
- **Internal Padding:** 32px (32px by 16px on phones).
- **Anatomy:** diet mark and name, then the fare numeral on a dashed perforation, a bold note, turmeric-dotted inclusions, then a primary booking button. Fares sit two-up, one column below 760px.

### Inputs / Fields: the boarding pass
- A rice ticket with a stub (route line in Rozha One with a compass) separated from the fields by a vertical dashed perforation and two punched notches; on phones the stub sits on top and the perforation turns horizontal.
- **Fields:** 48px, field-white fill, 8px radius, 2px border, Mukta 500; label above in the uppercase label style. Hover darkens the border to ink-soft; invalid shows the error border.
- **Guest stepper:** the same field shell with 44px minus and plus buttons; disabled at 35% opacity.
- **Submit:** primary button, spanning the full row below 1100px.

### Navigation
A fixed 72px bar, transparent over the hero, turning rice with a hairline and soft shadow after 40px of scroll (300ms). Brand is Rozha One at 1.6rem with a chilli compass. Links are Mukta 500 with a 2px underline that draws from the left on hover. Links hide below 960px, leaving the brand and the call pill; below 760px the mobile dock takes over the booking actions.

### Wax seal (signature)
An inline SVG seal: an irregular puddled rim (deterministic wobble from a per-seal seed), a dark pooled edge offset under it, a radial chilli body, a raised inner ring with one light rim, a single soft highlight, and a pressed Rozha One numeral or a flame emblem. Port seals are 50px and number the route; the "Live" seal is 76px, rotated 10deg, pinned to the top-right corner of a live-counter photo. On desktop the route is computed through the centre of every port seal.

### Inked illustration (signature)
All illustration is authored inline SVG in layered groups: flat fills from palette tokens, a lamp-ink outline of 2 to 2.5px with round joins and caps, a 45deg ink hatch pattern at 45% for shading, wave rows as repeated quadratic curves, and dotted (`1 14`) or dashed (`2 10`) lines for routes and wind. A few illustration-only tints sit outside the token set (tower ochre, sun cream, dhow hull brown, seal rim maroon). Interface icons are a separate authored set on a 24px grid at 1.75 stroke with round caps and joins, drawn in currentColor.

### Chart graticule (signature)
Peacock grounds that represent the chart carry a graticule: 1px lines every 120px in both directions in sea-mist at 7% opacity over the voyage, and every 80px in shallows at 60% on the schematic area chart. The area chart is a 14px-cornered peacock tile with rice roads, a dashed centre line, a marigold mall block with a chilli-and-rice pin, a marigold compass rose, and the caption "Schematic, not to scale."

### Diet marks
A 16px field-white square with a 2px border in the mark colour and a 3px radius: a 6px green dot for veg, a 7px brown triangle for non-veg. They carry an accessible label and appear on fare tickets and the menu legend.

### Motion
GSAP ScrollTrigger drives every scroll effect; Lenis (lerp 0.12) smooths the scroll and is ticked from GSAP's ticker so scrubs stay in sync. The system ease is `cubic-bezier(0.16, 1, 0.3, 1)` (CSS) and `expo.out` (GSAP).
- **Hero entrance:** copy blocks rise 36px and fade in over 0.9s, staggered 0.08s.
- **Hero parallax:** scrubbed (0.6) from top to bottom of the hero, each scene layer travels to its depth: sun -140px, birds -90px with -60px drift, towers 40px, city 70px, sea and route 90px, the dhow 110px down and 220px out to sea, the foreground wave 160px; the route's dots stream (dash offset -420) and the copy lifts 120px and fades to 0.2.
- **Pinned voyage:** at 900px and up, the voyage pins and the track sails sideways for its own width (scrub 0.6) while a solid marigold line draws over the dotted base route in step with progress. Each port's text rises 60px into place, and each photo eases from 1.18 scale to 1 as it crosses.
- **Fare ticket settle:** the two tickets drop in from 140px below, tilted -7deg and 7deg, and straighten onto the table as the chapter scrolls from 85% to 25% of the viewport.
- **Small transitions:** 150ms for buttons, tabs and link underlines; 200ms for the FAQ chevron; 300ms for the header and the menu list's rise (12px).
- **Reduced motion:** Lenis does not start, the hero entrance and parallax are skipped, the voyage does not pin (it stacks vertically on its dotted rail), the fare tickets do not settle, and all CSS transitions and animations are clamped to 1ms.

## Do's and Don'ts

### Do:
- **Do** put narrative chapters on marigold or peacock and keep rice for tickets, the boarding pass and the reading passages (The Rice Is Paper Rule).
- **Do** alternate grounds so no two neighbouring chapters share one (The Grounds Alternate Rule).
- **Do** reserve chilli fills for booking actions; use chilli as line or numeral elsewhere.
- **Do** split every ticket with a dashed perforation that ends in punched notches.
- **Do** mark ports with wax seals and join them with a dotted route line.
- **Do** draw illustration as inked SVG: palette fills, a 2 to 2.5px ink outline with round joins, hatch for shade.
- **Do** set prices and counts in Rozha One at 400 with tabular figures.
- **Do** gate every scroll effect behind `prefers-reduced-motion: no-preference` and give it a static layout that reads fully without it.
- **Do** treat the current photographs as sample stock to be replaced, keeping their rice mats, 14px corners and provenance records.

### Don't:
- **Don't** use rice as the ground of a narrative chapter or the hero.
- **Don't** fill panels or grounds with chilli.
- **Don't** bold Rozha One or set display text in a system face.
- **Don't** give grounds or illustrations shadows, and never use a hard offset shadow.
- **Don't** draw a route as a plain solid line at rest; solid marigold is only the drawn progress over the dotted base.
- **Don't** use the veg and non-veg colours for anything but diet marks.
- **Don't** use glyph or emoji icons; use the authored 24px line set.
- **Don't** set small uppercase eyebrow labels above headings; uppercase is for boarding-pass field labels only.
