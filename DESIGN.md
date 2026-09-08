---
name: Renova TMS
description: Targeted brain stimulation clinic in Surrey Hills, Melbourne
colors:
  navy: "#1E3A5F"
  navy-deep: "#16293F"
  navy-darker: "#0F1C2C"
  navy-text-light: "#e8eef4"
  navy-text-muted: "#c4d2df"
  navy-text-soft: "#cdd9e6"
  navy-text-subtle: "#aebccd"
  navy-text-faint: "#8ea0b4"
  navy-text-dim: "#7f92a6"
  footer-muted: "#9fb0c2"
  teal: "#2E93A8"
  teal-bright: "#35A9C6"
  teal-dark: "#26808f"
  teal-accessible: "#7FE3F8"
  teal-accessible-hover: "#B0EFFD"
  tint: "#EAF3F5"
  tint-subtle: "#F4F8FA"
  ground: "#FBFCFD"
  card: "#FFFFFF"
  slate: "#46586A"
  slate-dark: "#3f5265"
  slate-light: "#687B8E"
  line: "#DCE6EA"
  line-subtle: "rgba(220, 230, 234, 0.65)"
  error: "#b23b3b"
typography:
  display:
    fontFamily: "'Poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(34px, 4.8vw, 54px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  h2:
    fontFamily: "'Poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(26px, 3.4vw, 36px)"
    fontWeight: 700
    lineHeight: 1.2
  h3:
    fontFamily: "'Poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "'Mulish', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  scale:
    xs: "12px"
    sm: "13px"
    label: "14px"
    caption: "14.5px"
    ui: "15px"
    input: "16px"
    lead-sm: "16.5px"
    base: "17px"
    intro: "18px"
    lead: "19px"
    title-sm: "20px"
    h4: "22px"
    title-md: "24px"
    title-lg: "27px"
    h2-sm: "28px"
    title-xl: "34px"
rounded:
  xs: "2px"
  sm: "8px"
  input: "11px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  full: "999px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "24px"
  lg: "32px"
  xl: "64px"
  xxl: "84px"
components:
  button-primary:
    backgroundColor: "{colors.teal}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: "11px 24px"
  button-primary-hover:
    backgroundColor: "{colors.teal-dark}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    rounded: "{rounded.full}"
    padding: "11px 24px"
  card:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.lg}"
    padding: "30px 26px"
---

# Design System

<!-- impeccable:design-schema 1 -->

## Overview

Renova TMS's design language reflects clinical rigor, neurological precision, and human calm. The visual world is defined by high-contrast deep oceanic navy tones, balanced clinical teal accents, and warm alabaster white surfaces. It projects the authority of an evidence-based medical service co-located with neurosurgery while remaining accessible, warm, and transparent to patients and referrers.

## Colors

- **Navy (`#1E3A5F`)**: Primary brand color for headings, prominent layout containers, and brand recognition.
- **Deep Navy (`#16293F`)**: Foundational grounding color used for footers, sub-bands, and high-contrast clinical sections.
- **Navy Darker (`#0F1C2C`)**: Deepest grounding tone for the primary footer surface.
- **Teal (`#2E93A8`)**: Primary action accent for buttons, icons, and interactive elements on light surfaces.
- **Accessible Cyan (`#7FE3F8`)**: Dedicated high-contrast text and link token on dark navy backgrounds, achieving WCAG AA compliance (6.8:1 contrast ratio against `#1E3A5F`).
- **Clean Ground (`#FBFCFD`)**: Crisp, light, clinical background tint that reduces harsh pure-white glare.
- **Card (`#FFFFFF`)**: Pure white surface container for interactive forms and informative tiles.
- **Line (`#DCE6EA`)**: Subtle slate-tinted border lines providing structural definition without harshness.
- **Dark Navy Text Hierarchy**:
  - Primary text on dark navy: `#e8eef4`
  - Secondary text on dark navy: `#c4d2df` / `#cdd9e6`
  - Tertiary / subtle text on dark navy: `#aebccd` / `#9fb0c2`
  - Footnote text: `#8ea0b4` / `#7f92a6`

## Typography

- **Headings (Poppins)**: Humanist geometric sans with strong geometric legibility. Used for all headings (`h1` through `h4`) and buttons. Headings feature balanced text wrapping and controlled negative letter spacing (`-0.015em` on hero display).
- **Body (Mulish)**: Clear, highly readable sans-serif optimized for continuous reading. Set at `17px` base size with generous `1.65` line height and a calibrated measure of 65–75 characters per line.
- **Craft Floor Rule on Eyebrows**: Redundant kicker labels above headings are eliminated; headlines carry authority directly without repetitive labels.

## Layout

- **Container**: Max width of `1200px` centered with `32px` padding on desktop (`20px` on mobile).
- **Fluid Grids**:
  - Principles Grid: Fluid multi-column layout using `repeat(auto-fit, minmax(240px, 1fr))` ensuring cards gracefully adapt from 4 columns to 2 to 1 without awkward cramped widths.
  - Form Layout: 2-column input rows that collapse to 1 column below `680px` for mobile usability.
- **Vertical Rhythm**: Generous section separation (`78px–84px` padding) allowing complex clinical ideas space to settle.

## Elevation & Depth

- **Ambient Elevation**: Multi-stop diffused box shadows (`0 18px 50px -28px rgba(30, 58, 95, 0.28)`) giving cards a weightless, clinical presence.
- **Hover Lift**: Subtle `translateY(-3px)` with expanded shadow dispersion on interactive cards.
- **Borders**: Translucent slate borders (`rgba(220, 230, 234, 0.65)`) preserve card boundary integrity regardless of display contrast.

## Shapes

- **Buttons & Pills**: Fully rounded pill shapes (`border-radius: 999px`) provide approachable, human tactile cues.
- **Cards & Containers**: Generously rounded corners (`16px` for principles tiles, `20px` for the registration form card and hero status card).
- **Form Inputs**: Soft rounded corners (`11px`) with distinct focus rings.

## Components

- **Navigation**: Sticky frosted glass header (`backdrop-filter: blur(12px)`) with responsive mobile menu morphing into an accessible overlay with clear toggle states.
- **Hero**: Balanced two-column composition featuring the main announcement alongside an editorial clinic establishment card.
- **Principles Tiles**: Four core pillars with custom dual-tone SVG icons, balanced line heights, and micro-hover states.
- **Registration Form**: Clear field structure with explicit optional badges, accessible validation alerts, honeypot protection, Turnstile slot, and inline confirmation state.
- **SEEK Job Link**: High-contrast external link with arrow icon and WCAG AA verified color palette.

## Do's and Don'ts

### Do's
- Do maintain calm, uncluttered layouts with ample negative space.
- Do ensure all text on dark navy backgrounds uses `--teal-accessible` (`#7FE3F8`) or documented high-contrast light navy text tints.
- Do provide clear crisis helpline disclaimers (000 / Lifeline 13 11 14).
- Do use fluid responsive grids (`minmax`) rather than rigid multi-column breakpoints.
- Do provide custom branded focus indicators (`:focus-visible`).

### Don'ts
- Don't use redundant eyebrow kickers above self-explanatory headlines.
- Don't use gradient text or decorative zero-offset neon glow halos.
- Don't create multi-column form rows that squish below 260px on mobile.
- Don't make therapeutic efficacy claims or accept patient bookings prior to clinic opening.
- Don't allow personal health information to be submitted through unencrypted or general web forms.
