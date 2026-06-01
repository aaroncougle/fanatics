# Fanatics Design System
## A Reference Guide Through the Lens of Atomic Design

> **Purpose:** This document serves as a foundational reference for designing within the Fanatics ecosystem. It captures brand fundamentals, design tokens, component patterns, and structural guidelines derived from Fanatics' established design language across Commerce, Collectibles, and Betting & Gaming platforms.

---

## Table of Contents

1. [Brand Foundation](#1-brand-foundation)
2. [Design Tokens](#2-design-tokens)
   - [Color Tokens](#21-color-tokens)
   - [Typography Tokens](#22-typography-tokens)
   - [Spacing Tokens](#23-spacing-tokens)
   - [Elevation & Shadow Tokens](#24-elevation--shadow-tokens)
   - [Border & Radius Tokens](#25-border--radius-tokens)
   - [Motion Tokens](#26-motion-tokens)
3. [Foundations](#3-foundations)
   - [Grid & Layout](#31-grid--layout)
   - [Breakpoints](#32-breakpoints)
   - [Iconography](#33-iconography)
   - [Imagery & Photography](#34-imagery--photography)
   - [Accessibility](#35-accessibility)
4. [Atomic Design System](#4-atomic-design-system)
   - [Atoms](#41-atoms)
   - [Molecules](#42-molecules)
   - [Organisms](#43-organisms)
   - [Templates](#44-templates)
   - [Pages](#45-pages)
5. [Sub-Brand Strategy](#5-sub-brand-strategy)
6. [Platform Contexts](#6-platform-contexts)
7. [Design Principles](#7-design-principles)
8. [Token Naming Conventions](#8-token-naming-conventions)
9. [Implementation Notes](#9-implementation-notes)

---

## 1. Brand Foundation

### 1.1 Brand Story

Fanatics is a global digital sports platform serving fans throughout their entire sports journey. The brand unifies three core pillars:

| Pillar | Product | Description |
|--------|---------|-------------|
| Commerce | Fanatics.com | Officially licensed merchandise and apparel |
| Collectibles | Fanatics Collectibles / Topps | Trading cards and memorabilia |
| Gaming | Fanatics Betting & Gaming | Sports wagering and engagement |

### 1.2 Brand Voice & Personality

- **Bold** — Confident, not arrogant. Passionate, not reckless.
- **Official** — The trusted, licensed partner to leagues and teams worldwide.
- **Fan-First** — Everything is built for the fan experience, not the bottom line.
- **Dynamic** — Sports are live and unpredictable; the brand reflects that energy.

### 1.3 Logo

The Fanatics wordmark is built around a **flag motif** — flags are central to sports culture, representing loyalty, pride, and allegiance. The logo uses:

- **Custom letterforms** — bold, contemporary, strong horizontal emphasis
- **Clean sans-serif influence** — professional and accessible to casual fans and families
- **Trademark protection** — custom-designed typeface, not a publicly available font

**Logo Usage Rules:**
- Always maintain clear space equal to the height of the "F" around all sides
- Do not stretch, skew, or recolor outside approved palette
- Use the full-color version on white/light backgrounds
- Use the white version on navy, red, or dark photographic backgrounds
- Use the reversed (white) version on dark brand backgrounds

---

## 2. Design Tokens

Design tokens are the single source of truth for all visual decisions. They are implemented as **Figma Variables** and map directly to CSS custom properties and code constants. Tokens follow a two-tier hierarchy:

```
Global Tokens (raw values)
    └── Alias Tokens (semantic, purpose-driven names)
```

### 2.1 Color Tokens

#### Global Color Palette

| Token Name | Hex | RGB | Pantone | Usage |
|---|---|---|---|---|
| `color.brand.red` | `#E53D2E` | `229, 61, 46` | 179 C | Primary brand red |
| `color.brand.navy` | `#09203F` | `9, 32, 63` | 289 C | Primary brand navy |
| `color.brand.red.light` | `#FF6B5E` | `255, 107, 94` | — | Hover states, accents |
| `color.brand.red.dark` | `#C42D1F` | `196, 45, 31` | — | Active/pressed states |
| `color.brand.navy.light` | `#1A3A6B` | `26, 58, 107` | — | Hover states |
| `color.brand.navy.dark` | `#040F1E` | `4, 15, 30` | — | Deep backgrounds |

#### Neutral Scale

| Token Name | Hex | Usage |
|---|---|---|
| `color.neutral.0` | `#FFFFFF` | Pure white — card backgrounds, inputs |
| `color.neutral.50` | `#F9F9F9` | Page backgrounds |
| `color.neutral.100` | `#F2F2F2` | Subtle dividers, hover fills |
| `color.neutral.200` | `#E5E5E5` | Borders, separators |
| `color.neutral.300` | `#CCCCCC` | Disabled states |
| `color.neutral.400` | `#AAAAAA` | Placeholder text |
| `color.neutral.500` | `#888888` | Secondary text |
| `color.neutral.600` | `#666666` | Body text (light backgrounds) |
| `color.neutral.700` | `#444444` | Strong body text |
| `color.neutral.800` | `#222222` | Headings |
| `color.neutral.900` | `#111111` | Near-black — high emphasis |
| `color.neutral.1000` | `#000000` | Pure black |

#### Semantic / Alias Color Tokens

| Alias Token | Maps To | Usage |
|---|---|---|
| `color.interactive.primary` | `color.brand.red` | Primary buttons, key CTAs |
| `color.interactive.primary.hover` | `color.brand.red.light` | Button hover |
| `color.interactive.primary.active` | `color.brand.red.dark` | Button pressed |
| `color.interactive.secondary` | `color.brand.navy` | Secondary actions, links |
| `color.background.page` | `color.neutral.50` | Global page background |
| `color.background.surface` | `color.neutral.0` | Cards, modals, overlays |
| `color.background.subtle` | `color.neutral.100` | Zebra rows, section dividers |
| `color.background.inverse` | `color.brand.navy` | Dark sections, nav bar |
| `color.text.primary` | `color.neutral.800` | Headings, primary labels |
| `color.text.secondary` | `color.neutral.600` | Supporting text, captions |
| `color.text.disabled` | `color.neutral.300` | Disabled inputs, labels |
| `color.text.inverse` | `color.neutral.0` | Text on dark backgrounds |
| `color.text.link` | `color.brand.navy` | Hyperlinks |
| `color.border.default` | `color.neutral.200` | Default borders |
| `color.border.strong` | `color.neutral.400` | Input focus, emphasis |
| `color.feedback.success` | `#28A745` | Confirmations, in-stock |
| `color.feedback.warning` | `#FFC107` | Low stock, alerts |
| `color.feedback.error` | `#DC3545` | Form errors, out-of-stock |
| `color.feedback.info` | `#17A2B8` | Informational messages |

#### Team Color Strategy

Fanatics manages **300+ league, team, and event partner** color systems. Team colors are applied as contextual overrides at the page/template level, layered on top of the base token system:

```
color.team.primary     → e.g., #013369 for Dallas Cowboys
color.team.secondary   → e.g., #D3BC8D for Dallas Cowboys
color.team.accent      → Optional third color
```

---

### 2.2 Typography Tokens

#### Font Families

| Token | Value | Usage |
|---|---|---|
| `font.family.primary` | System sans-serif / brand sans-serif | Body text, UI labels |
| `font.family.display` | Bold display face | Hero headings, marketing |
| `font.family.mono` | Monospace | Code, stats, jersey numbers |
| `font.family.jersey` | Team-specific generated font | Custom jersey personalization |

> **Note:** Fanatics generates 330+ custom font files for jersey number personalization across all NFL, NBA, MLB, and NHL teams. These are production assets, not UI fonts.

#### Type Scale

| Token | Size | Line Height | Weight | Usage |
|---|---|---|---|---|
| `text.display.2xl` | `48px` | `56px` | 800 | Hero headlines |
| `text.display.xl` | `40px` | `48px` | 700 | Campaign headers |
| `text.display.lg` | `32px` | `40px` | 700 | Section headers |
| `text.heading.xl` | `28px` | `36px` | 700 | Page titles (H1) |
| `text.heading.lg` | `24px` | `32px` | 600 | Section titles (H2) |
| `text.heading.md` | `20px` | `28px` | 600 | Card headers (H3) |
| `text.heading.sm` | `18px` | `26px` | 600 | Subsection (H4) |
| `text.heading.xs` | `16px` | `24px` | 600 | Label headers (H5) |
| `text.body.lg` | `18px` | `28px` | 400 | Large body text |
| `text.body.md` | `16px` | `24px` | 400 | Default body |
| `text.body.sm` | `14px` | `20px` | 400 | Supporting text |
| `text.body.xs` | `12px` | `16px` | 400 | Captions, metadata |
| `text.label.lg` | `16px` | `24px` | 500 | Button labels (large) |
| `text.label.md` | `14px` | `20px` | 500 | Button labels (default) |
| `text.label.sm` | `12px` | `16px` | 500 | Tags, badges |
| `text.price.lg` | `24px` | `32px` | 700 | Product price (featured) |
| `text.price.md` | `18px` | `24px` | 700 | Product price (card) |
| `text.price.strike` | `14px` | `20px` | 400 | Strikethrough sale price |

#### Letter Spacing

| Token | Value | Usage |
|---|---|---|
| `letterSpacing.tight` | `-0.02em` | Large display text |
| `letterSpacing.normal` | `0` | Body text default |
| `letterSpacing.wide` | `0.04em` | All-caps labels, badges |
| `letterSpacing.wider` | `0.08em` | Category tags, sport labels |

---

### 2.3 Spacing Tokens

Fanatics uses a **4px base grid**. All spacing values are multiples of 4.

| Token | Value | Name | Usage |
|---|---|---|---|
| `space.0` | `0px` | None | Reset |
| `space.1` | `4px` | Micro | Icon padding, tight inline gaps |
| `space.2` | `8px` | Condensed | Between related inline elements |
| `space.3` | `12px` | Compact | Internal component padding (small) |
| `space.4` | `16px` | Default | Standard internal padding, card gutters |
| `space.5` | `20px` | Comfortable-sm | Between related content blocks |
| `space.6` | `24px` | Comfortable | Between related sections |
| `space.8` | `32px` | Roomy | Section padding |
| `space.10` | `40px` | Spacious | Large section separation |
| `space.12` | `48px` | Vast | Unrelated section separation |
| `space.16` | `64px` | XL | Page-level vertical rhythm |
| `space.20` | `80px` | 2XL | Hero padding, large gaps |
| `space.24` | `96px` | 3XL | Top-of-page hero spacing |

#### Spacing Application Guidelines

| Context | Token | Value |
|---|---|---|
| Screen horizontal margin (mobile) | `space.4` | `16px` |
| Screen horizontal margin (desktop) | `space.8` | `32px` |
| Between related cards in a row | `space.2` | `8px` |
| Between unrelated sections | `space.12` | `48px` |
| Between related content sections | `space.6` | `24px` |
| Internal card padding | `space.4` | `16px` |
| Button padding (horizontal) | `space.4` — `space.6` | `16px — 24px` |
| Button padding (vertical) | `space.2` — `space.3` | `8px — 12px` |
| Form field internal padding | `space.3` | `12px` |

---

### 2.4 Elevation & Shadow Tokens

| Token | Value | Usage |
|---|---|---|
| `elevation.none` | `none` | Flat surfaces |
| `elevation.low` | `0 1px 3px rgba(0,0,0,0.08)` | Cards, raised surfaces |
| `elevation.medium` | `0 4px 12px rgba(0,0,0,0.12)` | Dropdowns, floating panels |
| `elevation.high` | `0 8px 24px rgba(0,0,0,0.16)` | Modals, drawers |
| `elevation.overlay` | `0 16px 40px rgba(0,0,0,0.24)` | Full-screen overlays |

---

### 2.5 Border & Radius Tokens

| Token | Value | Usage |
|---|---|---|
| `border.width.thin` | `1px` | Default borders, dividers |
| `border.width.medium` | `2px` | Focus rings, emphasis |
| `border.width.thick` | `4px` | Active indicators |
| `radius.none` | `0px` | Sharp corners (editorial) |
| `radius.sm` | `4px` | Tags, badges, chips |
| `radius.md` | `8px` | Cards, inputs, small buttons |
| `radius.lg` | `12px` | Large cards, panels |
| `radius.xl` | `16px` | Modals, drawers |
| `radius.pill` | `9999px` | Pill buttons, loyalty badges |
| `radius.circle` | `50%` | Avatars, team logos |

---

### 2.6 Motion Tokens

| Token | Value | Usage |
|---|---|---|
| `duration.instant` | `0ms` | No animation |
| `duration.fast` | `100ms` | Micro-interactions (checkbox, toggle) |
| `duration.normal` | `200ms` | Button hover, color transitions |
| `duration.moderate` | `300ms` | Panel slides, dropdown open |
| `duration.slow` | `500ms` | Page transitions, modal open |
| `easing.standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | General UI motion |
| `easing.enter` | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering the screen |
| `easing.exit` | `cubic-bezier(0.4, 0, 1, 1)` | Elements leaving the screen |

---

## 3. Foundations

### 3.1 Grid & Layout

Fanatics uses a **12-column fluid grid** system with fixed gutters.

| Breakpoint | Columns | Gutter | Margin | Max Width |
|---|---|---|---|---|
| Mobile (`< 768px`) | 4 | `16px` | `16px` | `100%` |
| Tablet (`768px–1023px`) | 8 | `24px` | `24px` | `100%` |
| Desktop (`1024px–1279px`) | 12 | `24px` | `32px` | `1280px` |
| Wide (`1280px–1535px`) | 12 | `32px` | `auto` | `1440px` |
| XL (`1536px+`) | 12 | `32px` | `auto` | `1600px` |

**Product listing grids:**

| Context | Mobile | Tablet | Desktop |
|---|---|---|---|
| Search Results / PLP | 2-col | 3-col | 4-col |
| Featured Products | 1-col (hero) | 2-col | 3-col |
| Horizontal Scroll Carousel | Peek 1.5 | Peek 2.5 | 4 visible |
| Collectibles Card Grid | 2-col | 4-col | 5-col |

---

### 3.2 Breakpoints

```
xs:   0px    — 479px   (small phone)
sm:   480px  — 767px   (large phone)
md:   768px  — 1023px  (tablet)
lg:   1024px — 1279px  (small desktop)
xl:   1280px — 1535px  (standard desktop)
2xl:  1536px+          (large screen / TV)
```

---

### 3.3 Iconography

- **Style:** Line-weight consistent, 2px stroke, rounded caps
- **Grid:** 24×24px base size (also available at 16px and 32px)
- **Padding:** 2px internal padding within 24px bounding box
- **Sport icons:** Custom icon set for all major sports leagues (NFL, NBA, MLB, NHL, MLS, etc.)
- **Action icons:** Standard e-commerce set (cart, wishlist/heart, search, account, filter, sort)
- **Status icons:** Checkmark, alert, info, error (maps to feedback color tokens)

---

### 3.4 Imagery & Photography

**Product Photography:**
- White or light-grey background (`color.neutral.50`) for product isolation shots
- Consistent lighting, no harsh shadows
- Multiple angles: front, back, detail, on-model

**Editorial / Campaign Photography:**
- High-energy, emotion-driven — fans celebrating, players in action
- Bold crops, dynamic framing
- Brand colors used as overlays or color-graded backgrounds

**Team/League Assets:**
- Official league photography where licensed
- Consistent aspect ratios: `1:1` (square), `4:3` (card), `16:9` (hero/banner)

**Image Treatments:**
- `object-fit: cover` on all container-bound images
- Lazy loading on all images below the fold
- Responsive `srcset` for all product imagery

---

### 3.5 Accessibility

- **WCAG 2.1 AA** compliance minimum across all surfaces
- Color contrast ratio: `4.5:1` for body text, `3:1` for large text and UI components
- Focus ring: `2px solid` using `color.interactive.secondary` with `2px offset`
- All interactive elements keyboard navigable
- ARIA labels on all icon-only buttons and image carousels
- Screen reader support for live sport scores (ARIA live regions)

---

## 4. Atomic Design System

Fanatics uses **Brad Frost's Atomic Design methodology** as the structural backbone. Components are organized into five levels of increasing complexity.

```
Atoms → Molecules → Organisms → Templates → Pages
```

---

### 4.1 Atoms

The smallest indivisible UI units. Atoms do not contain other components.

#### Buttons

| Variant | Background | Text | Border | Usage |
|---|---|---|---|---|
| Primary | `color.brand.red` | `color.neutral.0` | None | Main CTAs: "Add to Cart", "Buy Now" |
| Secondary | Transparent | `color.brand.navy` | `2px navy` | Supporting actions |
| Ghost | Transparent | `color.neutral.600` | `1px neutral.200` | Low-emphasis actions |
| Naked/Link | Transparent | `color.brand.navy` | None | Inline links needing tap target |
| Destructive | `color.feedback.error` | `color.neutral.0` | None | Remove, delete actions |
| Disabled | `color.neutral.200` | `color.neutral.400` | None | All variants, disabled state |

**Button Sizes:**

| Size | Height | Padding (H) | Font Token | Usage |
|---|---|---|---|---|
| Large | `52px` | `24px` | `text.label.lg` | Hero CTAs |
| Regular | `44px` | `20px` | `text.label.md` | Default actions |
| Small | `36px` | `16px` | `text.label.sm` | Supporting actions, table rows |
| XSmall | `28px` | `12px` | `text.label.sm` | Chips, tight layouts |

**Border radius:** `radius.md` (8px) default, `radius.pill` for loyalty/FanCash actions

#### Form Elements

**Text Input:**
- Height: `44px` (Regular), `36px` (Small)
- Border: `1px solid color.border.default` → `2px solid color.brand.navy` (focus)
- Background: `color.background.surface`
- Padding: `space.3` vertical, `space.4` horizontal
- Border radius: `radius.md`
- Error state: border `color.feedback.error`, helper text below

**Checkbox:**
- Size: `20×20px`
- Checked fill: `color.brand.navy`
- Unchecked border: `color.border.strong`
- Indeterminate: dash icon, `color.brand.navy`

**Radio Button:**
- Size: `20×20px` circle
- Selected: `color.brand.navy` dot inside border

**Toggle/Switch:**
- Width: `48px`, Height: `28px`
- Off: `color.neutral.300`
- On: `color.brand.navy` (or `color.brand.red` for high-priority settings)
- Thumb: `color.neutral.0`, `radius.circle`

**Select / Dropdown:**
- Same sizing as text input
- Chevron icon right-aligned
- Options list: `elevation.medium`, `radius.md`

#### Tags & Badges

| Type | Background | Text | Usage |
|---|---|---|---|
| Sale | `color.brand.red` | `color.neutral.0` | Price reduction callout |
| New | `color.brand.navy` | `color.neutral.0` | New arrivals |
| Hot / Trending | `#FF6B00` (orange) | `color.neutral.0` | High-demand items |
| In Stock | `color.feedback.success` | `color.neutral.0` | Availability |
| Low Stock | `color.feedback.warning` | `color.neutral.900` | Urgency |
| Out of Stock | `color.neutral.300` | `color.neutral.600` | Unavailable |
| League/Sport | Team color | `color.neutral.0` | Contextual team/sport label |

- Border radius: `radius.sm` (4px)
- Font: `text.label.sm`
- Padding: `4px 8px`

#### Typography Elements

- `<h1>` → `text.heading.xl`, `color.text.primary`
- `<h2>` → `text.heading.lg`, `color.text.primary`
- `<h3>` → `text.heading.md`, `color.text.primary`
- `<p>` → `text.body.md`, `color.text.secondary`
- `<a>` → `color.text.link`, underline on hover
- `<caption>` → `text.body.xs`, `color.text.secondary`
- Price → `text.price.md`, `color.text.primary`, bold
- Sale price → `text.price.md`, `color.brand.red`, bold; original in `text.price.strike` with line-through

#### Icons

- Standard: 24×24px
- Small: 16×16px
- Large: 32×32px
- Color inherits from parent (`currentColor`) by default

#### Avatar

- Sizes: 24px, 32px, 40px, 48px, 64px
- Shape: `radius.circle`
- Fallback: initials on `color.brand.navy` background

#### Divider

- Horizontal: `1px solid color.border.default`, full width
- Vertical: `1px solid color.border.default`, full height of container
- With label: centered label text in `text.body.xs`, `color.text.secondary`

---

### 4.2 Molecules

Groups of atoms working together as a functional unit.

#### Product Card

The core commerce unit. Used across PLPs, search results, recommendations, and carousels.

**Anatomy:**
1. **Image container** — `aspect-ratio: 1/1` or `3/4`, `radius.md` top corners, grey background
2. **Badge overlay** — top-left corner: Sale, New, Hot badges (atoms)
3. **Wishlist button** — top-right corner: heart icon, ghost/naked button
4. **Product image** — `object-fit: contain` on white/grey background
5. **Color swatch row** — up to 5 swatches (circle, 20px), overflow `+N` count
6. **Brand/League label** — `text.body.xs`, `color.text.secondary`
7. **Product name** — `text.body.sm` or `text.heading.xs`, 2-line clamp
8. **Star rating** — 5-star row + review count in `text.body.xs`
9. **Price block** — current price + optional strikethrough original price

**States:** Default, Hover (slight `elevation.medium`, translate -2px), Loading (skeleton), Out of Stock (image overlay + muted colors)

#### Search Bar

- Full-width input with search icon left, clear button right
- Autosuggest dropdown: `elevation.medium`
- Suggestions: Sport > Team > Player > Product categories
- Recent searches section header

#### Navigation Item

- Horizontal: text label + optional chevron, hover state = `color.brand.red` underline
- Vertical (mobile): full-width, border-bottom divider, right chevron
- Active: `color.brand.red` left border (desktop sidebar) or underline (top nav)

#### Price Block

- Sale: Red current price + strikethrough original (grey, smaller)
- Regular: Single price in standard `color.text.primary`
- Includes: Optional "as low as" for multi-size pricing

#### Rating Row

- 5 star icons (filled `color.brand.red`, empty `color.neutral.200`)
- Count: `(1,234)` in `text.body.xs`, `color.text.secondary`

#### Size Selector

- Buttons (chip style): `radius.sm`, `border.width.thin`
- States: Default, Hover, Selected (navy fill + white text), Sold Out (strikethrough)
- Show size guide link below

#### Quantity Stepper

- Minus icon | number display | Plus icon
- Height: `44px`, border: `color.border.default`
- Min value: 1, Max: enforced by inventory

#### FanCash / Loyalty Pill

- Pill shape: `radius.pill`
- Background: gradient navy-to-navy-light or brand red
- Icon: wallet or F-icon
- Text: "$X.XX FanCash" in `text.label.sm`, white

#### Breadcrumb

- Separator: `/` or `>` in `color.neutral.300`
- Links: `color.text.link`, `text.body.sm`
- Current page: `color.text.primary`, no link, `font-weight: 500`

#### Alert / Banner

| Type | Background | Border Left | Icon |
|---|---|---|---|
| Success | `#D4EDDA` | `color.feedback.success` | Check |
| Warning | `#FFF3CD` | `color.feedback.warning` | Alert |
| Error | `#F8D7DA` | `color.feedback.error` | X |
| Info | `#D1ECF1` | `color.feedback.info` | Info |

#### Tab Bar

- Full-width on mobile, intrinsic-width on desktop
- Active tab: bottom border `2px color.brand.red`
- Inactive: `color.text.secondary`
- Font: `text.label.md`

---

### 4.3 Organisms

Complex UI sections composed of multiple molecules and atoms.

#### Global Header

**Desktop layout (left → right):**
1. Fanatics wordmark logo (linked to homepage)
2. Primary navigation links (Sport > Team hierarchy, CMS-driven)
3. Search bar (center, expands on focus)
4. Account icon | FanCash balance | Wishlist icon | Cart icon (item count badge)

**Mobile layout:**
1. Hamburger menu (left)
2. Logo (center)
3. Search icon | Cart icon (right)

**Behavior:**
- Sticky on scroll past 64px
- Transparent → white/navy on scroll
- Mega menu on hover (desktop): sport/team hierarchical navigation

#### Mega Menu / Navigation Drawer

- Triggered by hover (desktop) or tap (mobile)
- CMS-configured: supports "All Leagues", "Primary Leagues with Drilldown Teams", "All Gender/Age Groups" preset modes
- Team grid: sorted by league popularity/recency
- Featured spotlight: editorial image + CTA
- Recently viewed teams (personalized)

#### Product Listing Page (PLP) Header

- Sport/Team hero banner: full-bleed, team colors, team logo, category title
- Quick filters: inline chip row (Size, Color, Price, Sort)
- Result count + sort dropdown (right aligned)
- Active filters: dismissible chip row

#### Filter Sidebar (Desktop)

- Fixed left column (240px–280px)
- Sections: Category, Size, Color, Price Range, Brand, Rating
- Each section: accordion, collapsible
- Multi-select checkboxes
- "Clear All" / "Apply" actions (mobile sheet version)

#### Product Detail Page (PDP) Main Section

**Left:** Image gallery
  - Main image (large, zoomable)
  - Thumbnail row: up to 6 images + video thumbnail
  - Image pagination dots (mobile)

**Right:** Product info stack
  1. Brand name (`text.body.sm`, secondary color)
  2. Product name (`text.heading.lg`)
  3. Rating row
  4. Price block
  5. Color selector (swatches with label)
  6. Size selector (chips) + Size guide link
  7. Quantity stepper
  8. Add to Cart (Primary button, full-width)
  9. Add to Wishlist (Ghost button)
  10. FanCash earning callout
  11. Shipping estimate + Returns policy (expandable)

#### Shopping Cart Drawer

- Right-side slide-in panel (400px wide on desktop)
- Overlay on mobile (full-screen)
- Cart items: product thumbnail (64px) + name + variant + qty stepper + price + remove
- Order summary: subtotal, estimated shipping, savings, FanCash applied
- Primary CTA: "Proceed to Checkout"
- Upsell: "Complete the Look" or "Fans Also Bought" horizontal scroll

#### Score / Live Game Card

- Team logo (left) + Score + Team logo (right)
- Game status: Pre-game (tip-off time), Live (quarter/inning + clock), Final
- Sport-specific stats: down & distance (NFL), inning/outs (MLB)
- CTA: "Shop [Team] Gear" or live betting odds (if Betting & Gaming context)

#### "For You" Feed Module

- Personalized content stream driven by FanGraph data
- Module types: Score card, Trending product card, News headline, Betting line card, Collectibles drop alert
- Infinite scroll with session-aware refresh
- Explicit feedback: "More like this" / "Hide this" per card

#### Footer

- Full-width, dark background (`color.background.inverse`)
- Column layout (4 columns desktop, 2 mobile, 1 stacked mobile):
  - Company: About, Careers, Press, Investor Relations
  - Help: Contact, Returns, Shipping, Size Charts
  - Sports: Quick links to major league PLPs
  - Social: Icon links to all platforms
- Bottom bar: Copyright, Privacy Policy, Terms, Accessibility Statement
- Logo (white version)

---

### 4.4 Templates

Page-level structural skeletons — the layout without real content.

#### T-01: Homepage Template

```
[Global Header]
[Hero Banner — Full bleed, 50vw–70vw height]
[Featured Sport/Team Section — Horizontal scroll]
[Trending Products — 4-col grid]
[For You Feed — Personalized stream]
[Promo Banner — Full-width editorial]
[New Arrivals — 4-col grid]
[League/Sport Hub Links — Icon grid]
[Footer]
```

#### T-02: Product Listing Page (PLP) Template

```
[Global Header]
[Sport/Team Hero Banner]
[Breadcrumb]
[Page Title + Result Count]
[Quick Filter Chips]
[Content: Filter Sidebar (25%) | Product Grid (75%)]
[Pagination / Load More]
[SEO Content Block]
[Footer]
```

#### T-03: Product Detail Page (PDP) Template

```
[Global Header]
[Breadcrumb]
[Main PDP Section: Image Gallery | Product Info]
[Product Description + Details — Accordion tabs]
[Size & Fit Guide — Inline or modal]
[Reviews Section]
[Complete the Look — Horizontal carousel]
[Customers Also Bought — 4-col grid]
[Footer]
```

#### T-04: Checkout Template

```
[Minimal Header — Logo only, no nav]
[Progress Indicator — Step 1: Cart → 2: Shipping → 3: Payment → 4: Review]
[Form Section (60%)] | [Order Summary Sidebar (40%)]
[Trust signals: SSL, Return Policy, FanCash]
[Minimal Footer — Trust links only]
```

#### T-05: Team Hub Template

```
[Global Header]
[Team Hero — Full-bleed, team colors, logo, team name]
[Shop Categories — Icon + label horizontal scroll]
[Featured Player Jerseys — Horizontal scroll]
[Score/Schedule Widget]
[Team News Feed]
[Trending Team Gear — 4-col grid]
[Footer]
```

#### T-06: Collectibles / Card Shop Template

```
[Global Header]
[Collectibles Nav — Set/Series/Sport hierarchy]
[Featured Drop Hero]
[Active Auctions — Card grid with countdown timer]
[My Collection CTA]
[Trending Cards — Grid]
[Footer]
```

#### T-07: Account / Profile Template

```
[Global Header]
[Account Nav Sidebar — Orders, Wishlist, FanCash, Settings, Loyalty]
[Main Content Area — Contextual by selected nav item]
[Footer]
```

---

### 4.5 Pages

Fully realized, content-populated instances of templates.

| Page | Template | Key Personalization |
|---|---|---|
| Homepage | T-01 | Favorite team hero, FanGraph-powered feed |
| NFL PLP | T-02 | League colors, team filter, quarterback filter |
| Cowboys Jersey PDP | T-03 | Team colors, name+number customization tool |
| Checkout | T-04 | Pre-filled for returning users, FanCash applied |
| Cowboys Hub | T-05 | Team palette override, live schedule |
| Topps 2024 Chrome | T-06 | Set-specific imagery, rarity tiers |
| My Account | T-07 | Order history, personalized recommendations |

---

## 5. Sub-Brand Strategy

Fanatics manages a complex brand architecture across 300+ licensed partners and sub-brands.

### Brand Hierarchy

```
Fanatics (Parent Brand)
├── Fanatics Commerce
│   └── "A Fanatics Experience" partner mark
├── Fanatics Collectibles
│   └── Topps brand
├── Fanatics Betting & Gaming
└── Mitchell & Ness (retro apparel)
```

### Partner Mark — "A Fanatics Experience"

Used when co-branding with official league/team partners. Strict guidelines:
- Appears as secondary mark beneath league/team logo
- Consistent sizing: never larger than the partner logo
- White or navy version only
- Maintains minimum clear space equal to `space.4` on all sides

### Team Color Overrides

When rendering team-specific pages, the token system applies a **contextual team theme** on top of the base system:

```json
{
  "color.team.primary": "[TEAM_PRIMARY_HEX]",
  "color.team.secondary": "[TEAM_SECONDARY_HEX]",
  "color.team.text-on-primary": "[#FFF or #000 based on contrast]"
}
```

This is used for: hero banners, filter chips on team PLPs, "Active team" indicators in navigation.

---

## 6. Platform Contexts

### 6.1 Fanatics Commerce (Web & App)

- **Primary audience:** Sports fans, gift buyers, licensed apparel consumers
- **Key patterns:** Product discovery, team browsing, personalization (name+number)
- **UI tone:** Energetic, fan-first, sports-authentic
- **Key flows:** Browse → Filter → PDP → Customize → Cart → Checkout → Order tracking

### 6.2 Fanatics Collectibles

- **Primary audience:** Card collectors, memorabilia enthusiasts, investors
- **Key patterns:** Card grids, auction interfaces, collection management, pack breaks
- **UI tone:** Premium, community-driven, authenticity-focused
- **Key flows:** Browse sets → Card detail → Bid/Buy → Collection → Trade

### 6.3 Fanatics Betting & Gaming

- **Primary audience:** Sports bettors, daily fantasy players
- **Key patterns:** Odds display, live betting, bet slip, game tracking
- **UI tone:** High-energy, data-dense, time-sensitive
- **Key flows:** Sport → Game → Market selection → Bet slip → Confirm → Track

### 6.4 Mobile App

- **Core experience:** Personalized "For You" feed
- **Navigation:** Bottom tab bar (Home/Feed, Scores, Shop, Bet, Profile)
- **Loyalty:** FanCash + FanChallenges woven throughout
- **Live moments:** Push notifications for score events, flash sales, drop alerts

---

## 7. Design Principles

These principles guide all design decisions across Fanatics platforms:

### 1. Fan at the Center
Every design decision is evaluated through the lens of the fan. The system serves 100M+ fans with wildly different loyalties — personalization is not a feature, it's the foundation.

### 2. Live Sports Require Live Design
Sports happen in real-time. The design system must support urgency, countdown states, live score overlays, and flash-sale states without breaking visual consistency.

### 3. Scale Without Drift
With 300+ licensed partners, the design must absorb team colors, logos, and partner brand requirements without losing the Fanatics identity. Token-based theming is the mechanism that enables this.

### 4. Commerce is Emotional
Fans don't buy jerseys — they buy belonging. Product presentation must balance e-commerce best practices with the emotional weight of team loyalty.

### 5. One System, Five Products
Commerce, Collectibles, Betting, Live Events, and App are distinct experiences that must feel like one brand. Shared tokens and atomic components are what makes this possible.

### 6. Accessibility is Non-Negotiable
Sports fans are everyone. WCAG 2.1 AA is the floor, not the ceiling.

---

## 8. Token Naming Conventions

All design tokens follow a structured naming convention for consistency between Figma Variables and code:

```
[category].[context].[property].[variant].[state]
```

**Examples:**
- `color.interactive.primary.default`
- `color.text.secondary`
- `space.4`
- `text.heading.lg`
- `elevation.medium`
- `border.width.thin`
- `radius.md`
- `duration.normal`

**Token Tiers:**
1. **Global tokens** — Raw values (`#E53D2E`, `16px`, `200ms`)
2. **Alias tokens** — Semantic names mapped to globals (`color.interactive.primary → color.brand.red`)
3. **Component tokens** — Component-specific aliases (`button.background.primary → color.interactive.primary`)

---

## 9. Implementation Notes

### Tech Stack

- **Frontend:** React + TypeScript
- **Styling:** CSS Modules or CSS-in-JS (token-aligned)
- **Data:** GraphQL (GQL) via Apollo or similar
- **CMS:** Headless CMS for component configuration (navigation, editorial, promos)
- **Testing:** Jest, React Testing Library, Cypress
- **Performance:** WCAG compliance, Core Web Vitals targets, lazy loading
- **State:** Redux / MobX / Recoil

### Figma Variable Mapping to CSS

```css
/* Global */
--color-brand-red: #E53D2E;
--color-brand-navy: #09203F;

/* Alias */
--color-interactive-primary: var(--color-brand-red);
--color-background-page: var(--color-neutral-50);
--space-4: 16px;
--text-body-md-size: 16px;
--text-body-md-line-height: 24px;
--radius-md: 8px;
--elevation-medium: 0 4px 12px rgba(0,0,0,0.12);
--duration-normal: 200ms;
--easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
```

### Component Configuration (CMS-Driven)

Navigation and key layout components are configured via CMS and deployed through the web tier. Preset navigation modes include:
- `ALL_LEAGUES` — Full league tree
- `PRIMARY_LEAGUES_WITH_DRILLDOWN_TEAMS` — Top leagues with expandable team sub-menus
- `ALL_GENDER_AGE_GROUPS_FEATURED_SORT` — Audience-segmented navigation

### Personalization Layer (FanGraph)

The `FanGraph` first-party data layer connects:
- Team affiliation (from onboarding or purchase history)
- Player loyalty signals
- Browsing and purchase behavior
- Cross-platform engagement (Commerce + Collectibles + Betting)

All "For You" feed modules and recommended product surfaces are powered by FanGraph.

### Quality Standards

- All components must pass WCAG 2.1 AA before shipping
- Spec-lock tests capture token/spacing values for CI regression checking
- All intentional deviations from Figma spec are documented with written justification
- Every component has a Storybook story for each meaningful variant

---

*Last updated: June 2026*
*Sources: Fanatics brand research, public design system case studies, Marc Lu Design (Fanatics rebrand documentation), SGX Studio (Fanatics App UX), Fanatics Tech Blog, BrandColorCode.com*
