---
name: Obsidian Gazette
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#c7c6c5'
  on-secondary: '#2f3130'
  secondary-container: '#484948'
  on-secondary-container: '#b9b8b7'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#e29100'
  on-tertiary-container: '#523200'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#e3e2e0'
  secondary-fixed-dim: '#c7c6c5'
  on-secondary-fixed: '#1a1c1b'
  on-secondary-fixed-variant: '#464746'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#111317'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 44px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style
This design system articulates an "Editorial Magazine meets Modern Tech" aesthetic crafted for a high-profile Content Editor, Media Professional, and PR Manager. It combines the rigorous architectural layouts of classic broadsheets with the kinetic energy and polish of high-end digital design. 

The visual personality is authoritative, culturally attuned, discerning, and razor-sharp. It rejects generic tech minimalism in favor of structured editorial density: expressive display serif headers paired with precise, technical sans-serif body copy, generous yet controlled whitespace, crisp hairline frames, and bento-grid modules. The interface should feel like opening an exclusive, print-grade cultural publication that was built natively for the modern web.

## Colors
The palette is rooted in the dark, contemplative space of deep editorial charcoal and warm print-era tones:
- **Neutral Canvas (`#0F1115`)**: "Deep Obsidian", the core foundation that anchors the portfolio with high-end, cinematic gravitas.
- **Secondary (`#F9F8F6`)**: "Warm Paper", used for high-contrast typographic elements, hero displays, and light-mode inversion moments.
- **Primary Accent (`#10B981`)**: "Electric Emerald", used sparingly to highlight dynamic states, viral hooks, publication metrics, and calls to action.
- **Tertiary Accent (`#F59E0B`)**: "Amber Highlight", a secondary nod to press room pencils and archival marginalia, used for tags and featured status badges.

Subtle contextual tiers:
- Border/Dividers (Dark Mode): `#262930`
- Surface Elevated: `#16191F`
- Surface Muted: `#1E222A`
- Text Muted: `#8E95A2`

## Typography
Typographic rhythm sets the tension between traditional editorial prestige and contemporary digital precision:
- **Playfair Display**: Evokes literary covers, news mastheads, and glossy editorials. Reserved strictly for expressive headlines, quotes, pull statements, and section intros. Use italic variants intentionally for emphasize phrases or awards.
- **Plus Jakarta Sans**: Provides clean, ultra-readable contrast for bios, article summaries, case study narratives, metadata, and metric labels.
- **Upper-Case Micro Labels**: Utilize `label-caps` in uppercase tracking (`letter-spacing: 0.08em`) to mimic magazine section headings (e.g., "PRESS & MENTIONS", "EDITORIAL DIRECTING", "CASE STUDY").

## Layout & Spacing
The layout follows a responsive 12-column bento-grid structure rooted in editorial masthead frameworks:
- **Desktop (1024px+)**: 12 columns with 2rem gutters and margins. Asymmetrical bento arrangements (e.g., an 8-col hero narrative alongside a 4-col live metrics card; a 3-column press archive layout).
- **Tablet (768px - 1023px)**: 8 columns with 1.5rem gutters; bento-grid collapses into alternating 4/4 and full-width modules.
- **Mobile (<768px)**: 4 columns with 1rem gutters and 1.25rem outer margins. Cards snap into single-column stacks with edge-to-edge modular lines.

Maintain strict linear grid borders that tie the modules together like news columns. Whitespace inside bento cells is generous, preventing data fatigue.

## Elevation & Depth
Depth is created through surface luminosity, translucent backdrop blurs, and crisp structural borders rather than heavy, dirty drop shadows:
- **Layer 0 (Canvas)**: Solid `#0F1115`.
- **Layer 1 (Bento Cells / Editorial Cards)**: Surface `#16191F` with a 1px solid hairline border in `#262930`.
- **Layer 2 (Floating Micro-Cards & Overlays)**: Glassmorphism using `rgba(22, 25, 31, 0.75)` with `backdrop-filter: blur(16px)` and a 1px highlight border in `rgba(249, 248, 246, 0.12)`.
- **Hover Transitions**: Elevated hover states introduce an ambient green-tinted glow (`box-shadow: 0 12px 32px -8px rgba(16, 185, 129, 0.12)`) and edge brightening to `#3A3F4B`.

## Shapes
A disciplined "Soft" curvature (`roundedness: 1`) preserves the crisp, rectangular poise of printed broadsheets while staying approachable and tactile:
- **Base Cards & Bento Panels**: `0.5rem` (8px), striking a balance between structural architecture and software UI.
- **Tag Pills & Interactive Chips**: Fully pill-shaped (`rounded-full` / 9999px) to set visual distinction against rectangular content blocks.
- **Input Fields & Action Triggers**: `0.25rem` to `0.5rem` to emphasize sharpness and focus.

## Components

### Buttons
- **Primary Button**: Solid Electric Emerald (`#10B981`) text in `#0F1115`, font weight 600, pill-shaped or soft-cornered (`0.375rem`), with subtle scale on hover (`scale-102`) and ambient green shadow.
- **Editorial Ghost Button**: Border 1px `#262930`, background transparent, text `#F9F8F6`. On hover, border transitions to `#F9F8F6` with an inner wash of `rgba(249, 248, 246, 0.05)`.
- **Text Link Button**: Serif italic or upper-case tracked sans with an animated underline starting from the left.

### Tag Pills & Category Badges
- Pill-shaped (`rounded-full`), padding `0.25rem 0.75rem`.
- Background `rgba(249, 248, 246, 0.06)`, border `1px solid rgba(249, 248, 246, 0.12)`, text `#F9F8F6` in `label-caps` size. Emerald variant uses `rgba(16, 185, 129, 0.1)` with `#10B981` text.

### Bento-Grid Cards
- Contained modular blocks with 1px border (`#262930`), internal padding `1.5rem` to `2rem`.
- Distinct micro-interactions: slight border brightening on hover with subtle card scaling.
- Content types: Featured Articles, Metric Callouts ("10M+ Readers Reached"), Publication Logomarks, Live Media Feeds, and PR Case Studies.

### Lists & Press Tickers
- Divided by hairline borders (`1px solid #262930`).
- Left-aligned bold headline or media house name (in `Playfair Display`), right-aligned date and metric badge (in `Plus Jakarta Sans`).
- Row hover triggers an emerald dot indicator and shifts the row content 4px to the right.

### Input Fields (Contact & Pitch Submissions)
- Minimalist underline or boxed input with dark surface (`#16191F`), 1px border in `#262930`. Focus states transition border to `#10B981` with zero fuzzy focus rings, retaining geometric clarity.

### Specialized PR/Editorial Components
- **Pull Quote Module**: Giant Warm Paper typographic quote marks (`“`), italicized Playfair headline, minimal attribution tag with client avatar.
- **Impact Stat Block**: Giant tabular numbers (`display-hero`) in Electric Emerald paired with tight uppercase descriptive labels below.