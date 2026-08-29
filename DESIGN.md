---
name: Viralup
description: A media-led social growth agency surface where campaign work is the proof.
colors:
  accent: "#047efb"
  accent-hover: "#0072eb"
  accent-soft: "#eaf4ff"
  rating: "#ff8f00"
  canvas: "#f5f5f5"
  surface: "#ffffff"
  surface-glass: "rgba(255, 255, 255, 0.82)"
  ink: "#000000"
  muted-ink: "#5b5b5b"
  placeholder-ink: "#858585"
  hairline: "rgba(0, 0, 0, 0.08)"
typography:
  display:
    fontFamily: "Inter Display, sans-serif"
    fontSize: "clamp(46px, 4vw, 64px)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  display-emphasis:
    fontFamily: "Instrument Serif, serif"
    fontWeight: 400
  headline:
    fontFamily: "Inter Display, sans-serif"
    fontSize: "clamp(40px, 3.3vw, 52px)"
    fontWeight: 500
    lineHeight: 0.99
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Inter Display, sans-serif"
    fontSize: "20px"
    fontWeight: 500
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Inter Display, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.45
  support-lead:
    fontFamily: "Inter Display, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.03em"
  form-label:
    fontFamily: "Inter Display, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "-0.03em"
  body-small:
    fontFamily: "Inter Display, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.45
  button-label:
    fontFamily: "Inter Display, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1
  label:
    fontFamily: "Inter Display, sans-serif"
    fontSize: "11px"
    fontWeight: 400
rounded:
  control: "8px"
  field: "10px"
  inset: "11px"
  portrait: "12px"
  header: "14px"
  card: "16px"
  panel: "20px"
  pill: "999px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    typography: "{typography.button-label}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.surface}"
  button-surface:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button-label}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "44px"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    typography: "{typography.button-label}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "44px"
  chip-signal:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 9px"
    height: "24px"
  navigation-floating:
    backgroundColor: "{colors.surface-glass}"
    textColor: "{colors.ink}"
    rounded: "{rounded.header}"
    padding: "8px"
    height: "64px"
  card-media:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
  panel-inset:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
  input-inline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-small}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "44px"
  field-filled:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.form-label}"
    rounded: "{rounded.field}"
    padding: "8px 12px"
    height: "40px"
  button-submit:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    typography: "{typography.form-label}"
    rounded: "{rounded.field}"
    padding: "0 12px"
    width: "100%"
    height: "40px"
  panel-help:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    rounded: "{rounded.panel}"
    padding: "26px"
---

# Design System: Viralup

## Overview

**Creative North Star: "The Campaign Proof Stream"**

“The Campaign Proof Stream” treats the approved Viralup reference as the visual authority: a soft neutral scroll canvas carries white inset surfaces, electric cobalt signals action and emphasis, and real campaign imagery supplies the energy. The interface feels contemporary, fashion-aware, and performance-minded without letting decorative UI compete with the work.

Density is airy and sequential. Large typographic promises introduce each chapter, then structured media grids, compact proof cards, and clear calls to action carry the narrative forward. Motion remains restrained: a single composed hero arrival, looping campaign reels, small hover lifts, and direct disclosure transitions.

The system rejects generic agency chrome that hides the product. Campaign work must remain visible, vivid, and compositionally central.

**Key Characteristics:**

- Soft neutral ground with white inset surfaces.
- Electric cobalt used selectively for action, emphasis, and compact signals.
- Inter Display structure punctuated by italic Instrument Serif emphasis.
- Real campaign media used as the primary visual proof.
- Rounded cards with quiet borders and selective ambient shadow.
- Restrained, purposeful motion with reduced-motion support.

## Colors

The palette is almost monochrome so the cobalt signal and full-color campaign media can carry the visual momentum.

### Primary

- **Electric Growth Blue** (`#047efb`): The main action color for primary buttons, emphasized serif words, status copy, icon treatments, selection, and active controls.
- **Hover Cobalt** (`#0072eb`): The deeper action state used when a primary button is hovered.
- **Pale Signal Blue** (`#eaf4ff`): The quiet blue wash behind service tags and role chips.

### Secondary

- **Warm Rating Accent** (`#ff8f00`): A narrow proof color reserved for stars in secondary testimonial cards.

### Neutral

- **Soft Neutral Ground** (`#f5f5f5`): The continuous page canvas and the inset fill of accordion rows.
- **Inset White** (`#ffffff`): The dominant card, panel, footer, form, and button surface.
- **Glass White** (`rgba(255, 255, 255, 0.82)`): The translucent floating header surface over the hero.
- **Primary Ink** (`#000000`): Headlines, primary copy, dark buttons, dots, and compact icon discs.
- **Secondary Ink** (`#5b5b5b`): Supporting paragraphs, labels, navigation metadata, and de-emphasized text.
- **Placeholder Ink** (`#858585`): Placeholder copy inside filled contact fields.
- **Quiet Hairline** (`rgba(0, 0, 0, 0.08)`): Dividers and low-contrast control borders.

### Named Rules

**The One Blue Signal Rule.** Electric cobalt carries actions, emphasized words, and compact state signals; it does not become a large decorative background except for the approved pricing pause card.

**The Media Keeps Its Color Rule.** Keep campaign media vivid and untreated; the neutral interface exists to frame it, not recolor it.

## Typography

**Display Font:** Inter Display (with `sans-serif` fallback)  
**Body Font:** Inter Display (with `sans-serif` fallback)  
**Emphasis Font:** Instrument Serif (with `serif` fallback)

**Character:** Inter Display gives the site a direct, contemporary agency voice with compact tracking and controlled weight. Instrument Serif appears only as italic cobalt emphasis inside major promises, adding editorial contrast without creating a second hierarchy.

### Hierarchy

- **Display** (500, `clamp(46px, 4vw, 64px)`, `0.98`): The centered hero promise; it is balanced, tightly tracked, and limited to a compact two-line composition.
- **Headline** (500, `clamp(40px, 3.3vw, 52px)`, `0.99`): Section introductions and left-aligned mission statements.
- **Display Emphasis** (400): Instrument Serif replaces only selected words inside display and headline copy and inherits the surrounding size.
- **Title** (500, `20px`, `-0.03em`): Process steps and the main card titles; smaller service titles use the same medium-weight voice at `17px`.
- **Body** (400, `16px`, `1.45`): Global reading copy and the hero supporting statement; dense card descriptions step down to `14–15px` while keeping comfortable leading.
- **Support Lead** (500, `18px`, `1.3`, `-0.03em`): Centered supporting copy beneath the contact-route promise.
- **Form Label** (500, `16px`, `1.5`, `-0.03em`): Contact-field labels, filled controls, and the full-width submit action.
- **Button Label** (500, `14px`, `1`): Clear sentence-case actions inside controls with a minimum height of `44px`.
- **Label** (400, `11px`): Pills, small proof signals, and compact metadata.

### Named Rules

**The Split-Voice Rule.** Inter Display owns structure and information; Instrument Serif is reserved for the italic blue word or phrase inside a major headline.

**The Compact Promise Rule.** Major headings use tight negative tracking and near-solid leading, but remain short, balanced, and readable rather than wrapping into long editorial paragraphs.

## Layout

The page is a long, centered narrative built on a maximum content width of `1120px` with `24px` desktop side gutters. Sections open with centered titles and typically place the primary surface `82px` below the heading. Desktop sections breathe with `164px` top spacing; this reduces to `120px` below `760px` and `104px` below `520px`.

The hero deliberately exceeds one viewport: a centered promise leads into a full-width video rail pierced by a portrait phone, followed by a compact partner strip. After that high-energy opening, two-column grids carry projects, mission content, pricing, team, and testimonials while the services area uses three columns.

At `980px`, the content cap becomes `880px`, the process panel stacks, services reduce to two columns, and complex grids compress. At `760px`, the content cap becomes `680px` with `16px` side gutters; projects, about, pricing, team, testimonials, and callout layouts become single-column, while peripheral testimonial columns disappear. At `520px`, type, media frames, card geometry, and padding reduce again, the services grid becomes one column, and paired actions expand to use the available width.

Contact and support routes reuse the centered label, split-font promise, supporting copy, and paired actions before a `1000px` help/form grid. Desktop assigns one of three columns to the cobalt help panel and two to the white form panel. Below `810px`, the form becomes a single-column surface and moves before the help panel; the downstream FAQ and footer also switch to their roomier `16px` mobile reading rhythm instead of preserving desktop compression.

**The Media-Is-Proof Rule.** Layouts must give campaign imagery enough uninterrupted area to read as evidence, not as thumbnail decoration.

**The Sequential Collapse Rule.** Mobile preserves the desktop story order and emphasis; grids stack into one clear reading sequence instead of hiding essential sections.

**The Form-First Support Rule.** On narrow screens, place the full contact form before the help card, preserve their `20px` separation, and let the following FAQ and footer grow vertically rather than compressing their content.

## Elevation & Depth

The system combines tonal layering with selective ambient shadows. White cards usually rest flat on the soft-gray canvas; shadows appear where an element floats above the page, overlaps another surface, responds to hover, or frames hero media. Blur-backed glass is limited to the floating header and navigation scrim.

### Shadow Vocabulary

- **Ambient Small** (`0 6px 18px rgba(0, 0, 0, 0.08)`): Surface buttons and the email subscription shell.
- **Ambient Medium** (`0 18px 50px rgba(0, 0, 0, 0.12)`): Open navigation, overlapping creator images, elevated media, the featured testimonial, and hover-elevated project cards.
- **Floating Header** (`0 12px 34px rgba(0, 0, 0, 0.06)`): A nearly imperceptible lift beneath the translucent navigation.
- **Blue Action Glow** (`0 8px 18px rgba(4, 126, 251, 0.22)`): The resting lift beneath a primary action; hover increases it to `0 12px 25px rgba(4, 126, 251, 0.28)`.
- **Hero Phone** (`0 24px 45px rgba(0, 0, 0, 0.27)`): The strongest structural shadow, reserved for the centered device that overlaps the video rail.

### Named Rules

**The Flat-Until-Layered Rule.** Cards stay flat at rest unless they float, overlap, or are the active proof object; do not spread medium shadows across every white surface.

## Shapes

The form language is softly geometric and consistently clipped. Interactive controls use gently curved `8px` corners; filled contact fields and their submit action use `10px`; accordion rows and form shells use `11px`; inset portraits and stacked media use `12px`; the floating header uses `14px`; standard cards use `16px`; and large grouped panels use `20px`. Pills and circular controls use fully rounded geometry (`999px` or `50%`).

Borders are quiet and functional: an 8% black hairline separates navigation rows, list steps, footer regions, and social controls. Media always clips to its containing radius, while overlapping creator photos use a white border to separate them from the surface beneath.

**The Radius Ladder Rule.** Use `8px` for controls, `16px` for standard cards, and `20px` for major grouped panels; intermediary radii belong only to the observed inset treatments.

**The Round Means Compact Rule.** Fully rounded shapes are reserved for small tags, avatars, switches, icon controls, and the engagement badge—not large content containers.

## Components

Components are calm containers for confident type and vivid media. Their states use direct color shifts, small vertical movement, and clear focus outlines rather than decorative effects.

### Buttons

- **Shape:** Compact rounded rectangle (`8px`) with a `44px` minimum height and `20px` horizontal padding.
- **Primary:** Electric Growth Blue with white medium-weight text and a low blue action glow.
- **Hover / Focus:** Hover lifts `2px`, deepens to Hover Cobalt, and strengthens the blue glow. Keyboard focus uses a `3px` blue-mixed outline with `3px` offset; active state settles down `1px` and scales to `0.985`.
- **Secondary:** Inset White with Primary Ink and the small ambient shadow.
- **Dark:** Primary Ink with white text, used for high-contrast actions inside pale or white panels.

### Chips

- **Style:** Fully rounded (`999px`), `24px` tall, with Pale Signal Blue fill, Electric Growth Blue text, and `9px` horizontal padding.
- **State:** Chips are informational labels, not standalone controls; role chips may add a `5px` dot in the current text color.

### Cards / Containers

- **Corner Style:** Standard media and service cards use `16px`; grouped panels use `20px`.
- **Background:** Inset White on Soft Neutral Ground, with dark backgrounds reserved for testimonial and scheduled-call media compositions.
- **Shadow Strategy:** Flat at rest by default; medium ambient elevation marks overlapping media, featured proof, or project hover.
- **Border:** Usually none. Quiet Hairline is used inside cards as a separator rather than outlining every container.
- **Internal Padding:** Dense service and caption cards use about `22px`; large panels expand to `28–66px` according to content and breakpoint.

### Inputs / Fields

- **Style:** The email field is borderless and transparent inside a white `11px` rounded shell with small ambient shadow; the input itself uses `14px` horizontal padding and `8px` corners.
- **Filled Form Variant:** Contact inputs, selects, and textareas sit directly on Soft Neutral Ground with no border, `10px` corners, and `12px` horizontal padding. Labels and control text use the `16px` medium-weight form voice.
- **Select:** Native chrome is removed and replaced by the observed black `16px` down-chevron positioned `14px` from the right edge; keep `40px` of right padding so text cannot collide with it.
- **Focus:** The shared visible blue-mixed focus outline remains available even though the input removes its default outline.
- **Error / Success:** Inline status copy appears directly below the form in Electric Growth Blue; the field does not introduce an unobserved red error system.

### Navigation

- **Style:** A centered floating header uses translucent Glass White, `14px` corners, `8px` internal padding, blur, and a soft shadow. A `44px` pale-gray icon control sits opposite the blue contact action.
- **Drawer:** The menu opens as a white `20px` rounded panel with medium ambient shadow. Links are large (`24px`), separated by Quiet Hairlines, and pair with cobalt arrows that move slightly up and right on hover.
- **Mobile:** The floating bar narrows with the viewport; the contact action and logo compress while both controls retain touch-safe height.

### Campaign Project Card

Campaign project cards pair a large, edge-to-edge video with a white caption panel. Hover lifts the card `6px`, scales the media to `1.035`, reveals bottom-gradient metrics, and brings in a cobalt diagonal arrow.

### FAQ Accordion

The accordion sits inside a white `20px` panel. Each item is a Soft Neutral Ground row with `11px` corners; its answer reveals through a `320ms` grid-row transition using the project’s ease-out curve.

### Contact / Support Surface

The reference-locked contact hero remains centered and uses the existing section-label, split-font headline, support lead, and paired button grammar. Its desktop support region is a three-column composition: a cobalt help panel occupies one column and a white form panel spans two, both with `20px` corners and equal height.

Below `810px`, the form is first, its paired name and email fields stack, and the help panel follows. The contact-route FAQ uses `16px` question text and extra top space; the footer keeps a `20px` outer inset, `16px` navigation text, and vertically separated legal lines so the final reading rhythm remains deliberate.

### Named Rules

**The Quiet Motion Rule.** State transitions stay between roughly `180–360ms`; longer motion is reserved for the composed hero entrance and slow media scaling.

## Do's and Don'ts

### Do:

- **Do** keep campaign photography and video compositionally central and full-color.
- **Do** use Electric Growth Blue for primary actions, headline emphasis, and compact state signals.
- **Do** preserve the Inter Display and Instrument Serif split exactly: sans for structure, italic serif for selective emphasis.
- **Do** keep the neutral canvas, white inset surfaces, generous section pacing, and observed `8px` / `16px` / `20px` radius ladder.
- **Do** maintain visible focus, `44px` touch targets, semantic disclosure states, and reduced-motion behavior.
- **Do** let desktop grids collapse into a complete, readable single-column story on mobile.

### Don't:

- **Don't** replace real campaign media with decorative CSS artwork, generic illustration, or identity-inconsistent stock imagery.
- **Don't** flood large areas with cobalt or introduce additional brand accents; the blue signal is effective because it is selective.
- **Don't** use Instrument Serif for body copy, labels, navigation, or entire headings.
- **Don't** add heavy shadow to every card; elevation must describe overlap, focus, or interaction.
- **Don't** introduce sharp-edged panels, capsule-shaped large cards, gradients as generic decoration, or motion without a clear hierarchy or state purpose.
- **Don't** reorder, hide, or compress away the campaign proof when adapting the surface responsively.
