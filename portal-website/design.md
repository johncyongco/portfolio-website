---
version: '1.0'
name: JCY — Obsidian Spectrum
description: An original dark portfolio for John Christian Yongco, combining warm
  navy, ink, forest, and slate surfaces with steel blue, mint, and pale blue accents.
colors:
  primary: '#6F91B1'
  secondary: '#A8BAD0'
  tertiary: '#E6EFFA'
  neutral: '#050B14'
  surface: '#0B1522'
  on-surface: '#E6EFFA'
  border: '#26394F'
  muted: '#71859A'
  error: '#FF9AA8'
  surface-raised: '#142438'
  surface-ember: '#111D2E'
  surface-forest: '#152A25'
  surface-sky: '#0D1E32'
  surface-ink: '#0B192B'
  accent-mint: '#97D8BA'
  accent-sky: '#6F91B1'
  accent-blue: '#7C9FBE'
  focus: '#AFC8DE'
  success: '#97D8BA'
  warning: '#6F91B1'
typography:
  headline-display:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: 600
    lineHeight: 68px
    letterSpacing: -2px
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: 500
    lineHeight: 43px
    letterSpacing: -0.5px
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: 500
    lineHeight: 34px
    letterSpacing: 0px
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 21px
    fontWeight: 500
    lineHeight: 25px
    letterSpacing: 0px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: 400
    lineHeight: 26px
    letterSpacing: 0px
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: 0px
  label-lg:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
    letterSpacing: 0px
  label-md:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: 600
    lineHeight: 18px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0.08em
  micro:
    fontFamily: IBM Plex Mono
    fontSize: 12px
    fontWeight: 500
    lineHeight: 18px
    letterSpacing: 0.08em
rounded:
  none: 0px
  sm: 6px
  md: 12px
  lg: 18px
  xl: 24px
  full: 9999px
spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 96px
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.neutral}'
    typography: '{typography.label-sm}'
    rounded: '{rounded.sm}'
    padding: 12px 16px
    height: 44px
  button-secondary:
    backgroundColor: transparent
    textColor: '{colors.tertiary}'
    typography: '{typography.label-sm}'
    rounded: '{rounded.sm}'
    padding: 12px 16px
    height: 44px
    borderColor: '{colors.border}'
  button-link:
    backgroundColor: transparent
    textColor: '{colors.tertiary}'
    typography: '{typography.body-sm}'
    rounded: '{rounded.none}'
    padding: 0px
  card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.secondary}'
    rounded: '{rounded.md}'
    padding: 24px
    borderColor: '{colors.border}'
  chip:
    backgroundColor: '{colors.surface-ember}'
    textColor: '{colors.primary}'
    typography: '{typography.label-sm}'
    rounded: '{rounded.sm}'
    padding: 6px 12px
  input:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.sm}'
    padding: 12px 16px
    borderColor: '{colors.border}'
  divider:
    backgroundColor: '{colors.border}'
    height: 1px
  icon-button:
    backgroundColor: transparent
    textColor: '{colors.secondary}'
    rounded: '{rounded.sm}'
    padding: 8px
motion:
  duration-fast: 160ms
  duration-standard: 240ms
  duration-reveal: 420ms
  easing: cubic-bezier(0.22, 1, 0.36, 1)
  hover-lift: 3px
  reveal-distance: 12px
---

# JCY — Obsidian Spectrum

## Intent

Create an original portfolio for John Christian Yongco: thoughtful, technical, colorful, and smooth. Use the reference's clarity and readable content hierarchy as inspiration. Define an independent palette, typography, composition, and interaction system here.

## Color direction

Darkness comes from warm charcoal and several tinted surfaces rather than a uniform navy canvas. Steel blue anchors the identity; mint and pale blue distinguish areas of work. The page remains predominantly dark, with color concentrated in project panels, tags, diagrams, and interaction states.

| Role | Token | Hex | Use |
| --- | --- | --- | --- |
| Canvas | neutral | #050B14 | Main page background |
| Base panel | surface | #0B1522 | Cards and grouped content |
| Raised panel | surface-raised | #142438 | Open details, menus, hover surfaces |
| Ember | surface-ember | #111D2E | AI evaluation and knowledge work |
| Deep forest | surface-forest | #152A25 | Data operations and validation |
| Dark sky blue | surface-sky | #0D1E32 | Automation and integrations |
| Ink | surface-ink | #0B192B | GIS and spatial data projects |
| Steel blue | primary | #6F91B1 | Main actions and identity accents |
| Mint | accent-mint | #97D8BA | Data tags and validation diagrams |
| Steel blue | accent-sky | #6F91B1 | Automation tags and workflow details |
| Pale blue | accent-blue | #7C9FBE | Spatial tags and map highlights |
| Main text | tertiary / on-surface | #E6EFFA | Headings and essential copy |
| Supporting text | secondary | #A8BAD0 | Descriptions |
| Metadata | muted | #71859A | Dates and captions |
| Structural edge | border | #26394F | Decorative dividers and card boundaries |
| Keyboard focus | focus | #AFC8DE | Visible focus ring |

Use one dominant accent per component. Category colors always appear with text labels; color alone must never communicate status or meaning. Error, success, and warning colors have semantic roles and must be accompanied by an icon or message. Decorative borders are not a substitute for a sufficiently visible input boundary.

## Typography

Space Grotesk gives headings a distinct technical character; Manrope keeps longer descriptions readable. IBM Plex Mono appears only in short dates, project labels, and workflow annotations. Provide system sans-serif and monospace fallbacks and load only the required font weights.

Hero display: 64px / 68px on wide screens, fluidly reducing to 36px / 42px on mobile. Body copy: 16px / 26px, with 18px / 28px introductions. Keep paragraphs within roughly 65 characters. Labels remain at least 12px. Use weight and spacing to establish hierarchy, with selective accent-colored words rather than entire colorful paragraphs.

## Original composition

A compact top navigation sits above a full-width identity introduction. The hero pairs John's introduction with a small abstract systems diagram: inputs, checks, context, and outputs. Fine grid marks reference the supplied Portal site's geometric character.

Below the hero, an asymmetric project grid alternates a larger featured project with smaller supporting projects. Project details open on dedicated pages when implemented; summaries remain visible without clicking. Follow with a grouped toolkit, a chronological experience list, short research notes, and a direct contact section.

Use the requested reference-style sticky left introduction and scrolling right content. This later user choice supersedes the earlier asymmetric full-width composition. Use a 1120px maximum content width, 32px desktop gutters, and 20px mobile gutters. Collapse all multi-column sections into a readable single column below 768px. On wide screens, keep projects in a 12-column grid; use 7/5 or 8/4 spans where content permits. Preserve document reading order on every breakpoint.

## Portfolio content

Positioning: AI Data Operations & Automation, supported by AI evaluation, trust and safety, Japanese language work, and GIS data research.

Potential featured work: RAG quality evaluation and metadata enrichment; spatial data sourcing and validation. Distinguish implemented work, prototypes, and research explorations using visible maturity labels. Never invent performance metrics or imply that an accepted offer is an already-started job.

Toolkit groups: automation and APIs; data quality and evaluation; infrastructure and deployment; web and product tooling; spatial and knowledge workflows; languages and domain experience. Connect tools to project evidence wherever possible rather than presenting equal proficiency in every tool.

## Components

- Primary actions: sky blue fill with charcoal text, 44px minimum touch target, 6px corners. Hover uses a slightly lighter fill without changing layout.
- Secondary actions: transparent fill, light text, visible border. Keyboard focus uses a 2px pale-sky blue ring with a 3px offset.
- Project cards: tinted dark surfaces, 18px corners, 24–32px padding, a concise title, maturity label, contribution summary, and an explicit detail link. Show content on touch without relying on hover.
- Skill tags: rectangular soft corners, tinted surface and paired accent text. Use sky blue, forest, blue, or ink variants according to the named category.
- Experience entries: dates, role, company, and readable descriptions. Fine separators rather than a card around every entry.
- Inputs: base surface, readable labels outside the control, clear focus and error states, and boundaries verified against their surrounding surface.
- Navigation: compact textual anchors with a short accent underline for the current section. Mobile navigation stays usable without tiny labels.

## Depth and color atmosphere

Use surface contrast before shadows. A faint blue-to-forest background wash may appear behind the hero only, at low opacity and away from body copy. Project panels may use a subtle gradient between their category surface and the base surface. Keep all text on predictable dark backgrounds. Avoid site-wide glass blur, bright neon halos, or continuous particle effects.

## Motion and interaction

Use 160ms for small hover responses, 240ms for state changes, and 420ms for once-only section entrances. Prefer opacity and transform animation. Cards lift at most 3px; section reveals travel at most 12px. Arrow links can translate 2px on hover.

Preserve native scrolling. Content is visible before JavaScript enhances it. Respect prefers-reduced-motion by removing entrance transforms, animated ambient effects, and smooth scrolling. Keyboard focus remains visible; menus and expandable content expose their state using semantic controls. Do not hide essential information behind pointer effects.

## Discoverability

Publish important project narratives as readable HTML with unique page titles and descriptions. Include a clear name, location, services, contribution details, and descriptive links. Add canonical URLs, social previews, a sitemap, and factual Person structured data during implementation. Ensure the site can be navigated and its core text read without animation or canvas. Record indexing and inquiry metrics after deployment; do not promise rankings or AI citations.

## Implementation acceptance

Verify text contrast on every surface: at least 4.5:1 for normal text and 3:1 for large text, plus 3:1 for essential control boundaries and focus indicators against adjacent colors. Confirm mobile layouts at 360px, keyboard navigation, reduced motion, working contact links, and no horizontal overflow. Color tokens are design choices; accessibility compliance must be tested on their actual combinations.

This file is the design specification. It does not imply that these features are implemented or that the live portfolio has been updated.
