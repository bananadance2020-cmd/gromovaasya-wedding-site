# Hero Section — Mockup Specification

**Project:** gromovaasya-wedding-site  
**Version:** 1.0.0  
**Date:** 2026-05-17  
**Phase:** MVP Concept Design

---

## 1. OVERVIEW

Hero — первый экран сайта. За 3 секунды пользователь должен понять: **что это**, **для кого**, и **что делать дальше**.

**Цель Hero:** Эмоциональный хук + навигация к каталогу.  
**Тон:** Элегантный, воздушный, свадебный. НЕ продажный, НЕ кричащий.

---

## 2. COMPOSITION

### Layout Structure

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  [Background: soft photo / gradient / pattern]     │
│                                                     │
│            [Decorative: Great Vibes word]           │
│                                                     │
│              H1: Wedding invitation                 │
│                  headline text                      │
│                                                     │
│            Body: 1-line value proposition           │
│                                                     │
│           [CTA Primary]  [CTA Secondary]           │
│                                                     │
│              [Trust badges / scroll hint]            │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Layer Stack (bottom → top)

| Layer | Content | Z-index |
|-------|---------|---------|
| L1 | Background image / gradient / pattern | `z-base` |
| L2 | Overlay gradient (semi-transparent) | `z-above` |
| L3 | Decorative text (Great Vibes, large, low-opacity) | `z-above` |
| L4 | Main heading (Cormorant Garamond H1) | `z-above` |
| L5 | Body text (Inter body L) | `z-above` |
| L6 | CTA buttons (primary + secondary) | `z-above` |
| L7 | Trust badges / scroll indicator | `z-above` |

### Vertical Alignment

- **Content block:** centered vertically and horizontally
- **Padding top:** 20% of viewport height (min 80px, max 160px)
- **Padding bottom:** 15% of viewport height (min 60px, max 120px)
- **Min-height:** `100svh` (small viewport height) — hero занимает весь экран на мобильных

---

## 3. BACKGROUND TREATMENT

### Option A: Gradient (MVP default)

**Primary background:** Soft warm gradient

```css
background: linear-gradient(
  160deg,
  var(--wed-ivory-50) 0%,
  var(--wed-tiffany-50) 40%,
  var(--wed-ivory-100) 70%,
  var(--wed-gold-50) 100%
);
```

**Overlay pattern (optional):** Subtle dot/line pattern at 3% opacity

```css
background-image:
  radial-gradient(circle at 20% 80%, rgba(126, 205, 192, 0.08) 0%, transparent 50%),
  radial-gradient(circle at 80% 20%, rgba(201, 169, 110, 0.06) 0%, transparent 50%),
  linear-gradient(160deg, var(--wed-ivory-50) 0%, var(--wed-tiffany-50) 50%, var(--wed-ivory-100) 100%);
```

### Option B: Photo Background (Phase 2)

- **Image:** Soft-focus wedding detail (конверт приглашения, цветы, кольца)
- **Overlay gradient:** `linear-gradient(180deg, rgba(253,251,249,0.85) 0%, rgba(253,251,249,0.7) 50%, rgba(253,251,249,0.9) 100%)`
- **Image treatment:** `filter: blur(1px) saturate(0.8)` — слегка размыто и приглушено
- **Object-fit:** cover; **Object-position:** center 30%

### Decorative Elements

- **Great Vibes word:** Large decorative text positioned behind/above main heading
  - Content: «Wedding» или «Love»
  - Size: `--wed-font-size-script-lg` (56px desktop, 36px mobile)
  - Color: `tiffany-100` или `gold-100`
  - Opacity: 0.4–0.5
  - Position: absolute, top 15%, right 5% (desktop) / centered (mobile)
  - **НЕ кириллица** — Great Vibes не поддерживает русский

- **Thin gold line:** Decorative horizontal line under heading
  - Width: 60px (mobile) / 80px (desktop)
  - Height: 1.5px
  - Color: `gold-300`
  - Margin: `space-4` below heading

---

## 4. TEXT PLACEMENT

### Content Hierarchy

```
[Great Vibes decorative]       ← script-md, tiffany-100, opacity 0.4
                                margin-bottom: space-2

H1: Свадебные приглашения      ← Cormorant Garamond H1, neutral-900, 600
   онлайн за 5 минут            line-height: tight, letter-spacing: tighter
                                margin-bottom: space-4

Body: 12 готовых шаблонов.     ← Inter body L, neutral-700, 400
      Выберите, настройте,      line-height: relaxed
      отправьте гостям.         max-width: 480px (desktop) / 100% (mobile)
                                margin-bottom: space-8

[CTA Primary] [CTA Secondary]  ← see CTA section below
                                margin-bottom: space-10

[Trust badges]                 ← see Trust section below
```

### Text Alignment

| Breakpoint | Heading | Body | CTA |
|------------|---------|------|-----|
| 320px | center | center | center (stacked) |
| 480px | center | center | center (inline) |
| 768px | center | center | center (inline) |
| 1024px | center | center | center (inline) |

### Max Widths

- **Heading:** no max-width, но ≤ 2 строки
- **Body text:** max-width 480px (центрирован) — для комфортной длины строки
- **CTA block:** max-width 400px

---

## 5. CTA SPECIFICATION

### Primary CTA — «Смотреть шаблоны»

| Property | Value |
|----------|-------|
| Text | «Смотреть шаблоны» |
| Background | `tiffany-500` |
| Text color | `#FFFFFF` |
| Font | Inter 500, 15px, letter-spacing 0.04em |
| Padding | 14px 32px (vertical × horizontal) |
| Border-radius | `radius-md` (8px) |
| Shadow (default) | none |
| Shadow (hover) | `shadow-tiffany` |
| Transform (hover) | translateY(-2px) |
| Transition | `transition-card` |
| Min-width | 200px |
| Icon | → arrow (right), 18px, margin-left 8px |

### Secondary CTA — «Как это работает»

| Property | Value |
|----------|-------|
| Text | «Как это работает» |
| Background | transparent |
| Border | 1.5px solid `tiffany-500` |
| Text color | `tiffany-700` |
| Font | Inter 500, 15px, letter-spacing 0.04em |
| Padding | 13px 28px (account for border) |
| Border-radius | `radius-md` (8px) |
| Hover background | `tiffany-50` |
| Hover text color | `tiffany-900` |
| Transition | `transition-all` |

### CTA Layout

| Breakpoint | Layout |
|------------|--------|
| 320px | Stacked vertical, gap `space-3`, full width |
| 480px | Inline horizontal, gap `space-4`, auto width |
| 768px | Inline horizontal, gap `space-4`, auto width |
| 1024px | Inline horizontal, gap `space-5`, auto width |

---

## 6. TRUST BADGES / SOCIAL PROOF

Position: Below CTA, centered.

### Layout

```
[Icon] 12 шаблонов    [Icon] от 2 000₽    [Icon] за 5 минут
```

| Property | Value |
|----------|-------|
| Items | 3 badges |
| Icon | 16px, `tiffany-500`, stroke 1.5 |
| Text | Inter body S, 14px, `neutral-500` |
| Layout | Flex row, gap `space-6` (desktop) / `space-4` (mobile) |
| Container | padding `space-4`, margin-top `space-10` |

### Badge Content

1. **📋 12 шаблонов** — иконка filter
2. **💰 от 2 000 ₽** — иконка price
3. **⚡ за 5 минут** — иконка speed

---

## 7. SCROLL INDICATOR

| Property | Value |
|----------|-------|
| Type | Animated chevron down (↓) |
| Position | Bottom center, 24px from edge |
| Size | 24px icon |
| Color | `tiffany-500`, opacity 0.6 |
| Animation | `bounce` subtle: translateY 6px, 2s loop |
| Hidden | On scroll (after 10% viewport) |
| Display | Only when hero height ≥ 90svh |

---

## 8. RESPONSIVE BEHAVIOR

### 320px — Mobile Baseline

```
┌──────────────────────┐
│                      │
│   [Padding: 16px]    │
│                      │
│   Great Vibes: 36px  │
│   (centered, subtle) │
│                      │
│   H1: 32px           │
│   (2 lines max)      │
│                      │
│   Gold line: 60px    │
│                      │
│   Body: 15px         │
│   (3 lines)          │
│                      │
│   [CTA Primary]     │  ← full width, stacked
│   [CTA Secondary]   │  ← full width, stacked
│                      │
│   Trust: 3 col       │  ← icons above text
│   (may wrap)         │
│                      │
│   Scroll ↓           │
│                      │
└──────────────────────┘
```

**Key adjustments:**
- Hero min-height: 100svh
- Container padding: 16px
- H1: 32px, line-height 1.1
- Body: 15px
- CTA: stacked, full width
- Trust badges: may wrap to 2 lines
- Decorative Great Vibes: 36px, opacity 0.3
- No scroll indicator if content overflows

### 480px — Large Phone

```
┌──────────────────────────┐
│                          │
│   [Padding: 20px]        │
│                          │
│     Great Vibes: 40px    │
│                          │
│     H1: 36px             │
│                          │
│     Gold line: 70px      │
│                          │
│     Body: 16px           │
│                          │
│     [CTA]  [CTA]         │  ← inline
│                          │
│     Trust: 3 inline      │
│                          │
│     Scroll ↓             │
│                          │
└──────────────────────────┘
```

**Key adjustments:**
- Container padding: 20px
- H1: 36px
- CTA: inline (auto width)
- Trust badges: single row
- Decorative: 40px

### 768px — Tablet

```
┌──────────────────────────────────┐
│                                  │
│   [Padding: 32px]                │
│                                  │
│         Great Vibes: 48px        │
│         (offset right)           │
│                                  │
│         H1: 42px                 │
│         (centered)               │
│                                  │
│         Gold line: 80px          │
│                                  │
│         Body: 16px               │
│         max-width: 480px         │
│                                  │
│         [CTA Primary] [CTA Sec]  │
│                                  │
│         Trust: 3 inline          │
│                                  │
│         Scroll ↓                 │
│                                  │
└──────────────────────────────────┘
```

**Key adjustments:**
- Container padding: 32px
- H1: 42px
- Body max-width: 480px
- Decorative: 48px, positioned right
- Trust badges: comfortable single row
- Scroll indicator visible

### 1024px — Desktop

```
┌──────────────────────────────────────────────┐
│                                              │
│   [Padding: 40px, max-width: 960px]         │
│                                              │
│            Great Vibes: 56px                 │
│            (decorative, offset)              │
│                                              │
│              H1: 48px                        │
│                                              │
│              Gold line: 80px                 │
│                                              │
│              Body: 18px                      │
│              max-width: 480px                │
│                                              │
│              [CTA Primary] [CTA Secondary]   │
│                                              │
│              Trust: 3 inline, gap 24px       │
│                                              │
│              Scroll ↓                        │
│                                              │
└──────────────────────────────────────────────┘
```

**Key adjustments:**
- Container padding: 40px
- Max-width: 960px (centered)
- H1: 48px
- Body: 18px (body L)
- Decorative: 56px, absolute position right
- All elements centered in container
- Scroll indicator visible

---

## 9. ACCESSIBILITY

- **Contrast:** All text on gradient/ivory background ≥ 4.5:1 (verified)
- **Focus states:** CTA buttons have `focus-ring: var(--wed-focus-ring)`
- **Reduced motion:** Scroll indicator hidden, CTA transforms disabled
- **Semantic HTML:** `<section>`, `<h1>`, `<p>`, `<a>` for CTAs
- **Alt text:** Background image is decorative → `aria-hidden="true"`
- **Landmark:** Hero section has `aria-label="Главный экран"`

---

## 10. PERFORMANCE

- **No hero image in MVP** — pure CSS gradient → 0kb
- **Font loading:** `font-display: swap` for all Google Fonts
- **Critical CSS:** Hero styles inlined in `<style>` tag
- **Lazy load:** Everything below hero loaded after first paint

---

## 11. ANIMATION SPEC (Phase 2 / Optional)

| Element | Animation | Duration | Delay | Easing |
|---------|-----------|----------|-------|--------|
| Decorative text | fadeIn + translateY(-10px) | 800ms | 0ms | ease-out |
| H1 heading | fadeIn + translateY(-10px) | 600ms | 200ms | ease-out |
| Body text | fadeIn + translateY(-10px) | 600ms | 400ms | ease-out |
| CTA buttons | fadeIn + translateY(-10px) | 500ms | 600ms | ease-out |
| Trust badges | fadeIn | 400ms | 800ms | ease-out |
| Scroll indicator | fadeIn | 300ms | 1000ms | ease-out |

**Implementation:** CSS `@keyframes` only. No JS animation library for MVP.

---

*Hero Mockup Spec v1.0 — frozen for MVP development.*
