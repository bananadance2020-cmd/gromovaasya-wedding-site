# Catalog Card — Mockup Specification

**Project:** gromovaasya-wedding-site  
**Version:** 1.0.0  
**Date:** 2026-05-17  
**Phase:** MVP Concept Design (12 templates)

---

## 1. OVERVIEW

Карточка каталога — основной элемент сайта. Пользователь выбирает шаблон приглашения, и карточка должна за 2 секунды ответить: **как выглядит**, **сколько стоит**, **хочу ли я это**.

**Референс:** maryinvite.ru — карточки с превью приглашения, ценой и hover-эффектом.

---

## 2. CARD LAYOUT

### Visual Structure

```
┌────────────────────────────────────┐
│                                    │
│                                    │
│        [Template Preview]          │
│          Aspect 3:4                │
│          border-radius: 12px 12px  │
│                                    │
│                                    │
│  [Badge]                           │
├────────────────────────────────────┤
│                                    │
│  Style Tag       Price             │
│                                    │
│  Template Title                    │
│  (max 2 lines)                     │
│                                    │
│  [CTA: Подробнее →]               │
│                                    │
└────────────────────────────────────┘
```

### Layer Order (bottom → top)

| Layer | Content | Z-index |
|-------|---------|---------|
| L1 | Card background (`ivory-50`) | `z-base` |
| L2 | Image container (overflow: hidden) | `z-base` |
| L3 | Image (`object-fit: cover`) | `z-base` |
| L4 | Badge (absolute, top-left of image) | `z-above` |
| L5 | Content area (below image) | `z-base` |
| L6 | Hover overlay (semi-transparent) | `z-above` (on hover) |

---

## 3. DIMENSIONS

### Card Container

| Property | Value |
|----------|-------|
| Width | 100% (responsive grid) |
| Min-width | 260px |
| Max-width | 320px |
| Background | `ivory-50` (#FDFBF9) |
| Border-radius | `radius-lg` (12px) |
| Box-shadow (default) | `shadow-sm` |
| Box-shadow (hover) | `shadow-md` |
| Border | none (shadow only) |
| Overflow | hidden |
| Transition | `transition-card` |
| Cursor | pointer |

### Image Container

| Property | Value |
|----------|-------|
| Aspect-ratio | **3 / 4** (portrait — как приглашение) |
| Width | 100% |
| Overflow | hidden |
| Border-radius | 12px 12px 0 0 (top only) |
| Background (placeholder) | `ivory-100` (#F5EDE3) |

### Image

| Property | Value |
|----------|-------|
| Object-fit | cover |
| Object-position | center top |
| Width | 100% |
| Height | 100% |
| Transition | `transition-transform` (300ms ease-out) |
| Hover | scale(1.05) — subtle zoom |

### Content Area

| Property | Value |
|----------|-------|
| Padding | `space-4` (16px) all sides |
| Background | `ivory-50` |
| Display | flex, column |
| Gap | `space-2` (8px) between rows |

---

## 4. CONTENT ELEMENTS

### Badge (optional)

Position: Absolute, top-left corner of image area.

**Variant: «Хит»**

| Property | Value |
|----------|-------|
| Text | «ХИТ» |
| Background | `gold-500` (#C9A96E) |
| Text color | `#FFFFFF` |
| Font | Inter 600, 11px, UPPERCASE |
| Letter-spacing | 0.08em |
| Padding | 4px 10px |
| Border-radius | `radius-sm` (4px) |
| Shadow | `shadow-gold` |
| Position | top: 12px, left: 12px |
| Z-index | `z-above` |

**Variant: «Новинка»**

| Property | Value |
|----------|-------|
| Text | «НОВИНКА» |
| Background | `tiffany-500` (#7ECDC0) |
| Text color | `#FFFFFF` |
| Font | Inter 600, 11px, UPPERCASE |
| Letter-spacing | 0.08em |
| Padding | 4px 10px |
| Border-radius | `radius-sm` (4px) |
| Position | top: 12px, left: 12px |

**Variant: «Premium» (для 4000₽)**

| Property | Value |
|----------|-------|
| Text | «PREMIUM» |
| Background | `neutral-900` (#1A1816) |
| Text color | `gold-500` (#C9A96E) |
| Font | Inter 600, 11px, UPPERCASE |
| Letter-spacing | 0.1em |
| Padding | 4px 10px |
| Border-radius | `radius-sm` (4px) |
| Position | top: 12px, left: 12px |

**Правило:** Максимум 1 бейдж на карточку. Если шаблон и «Хит» и «Новинка» — приоритет «Хит».

### Style Tag (Category)

| Property | Value |
|----------|-------|
| Text | «Классика», «Минимализм», «Бохо» и т.д. |
| Color | `neutral-500` |
| Font | Inter 400, 12px (caption) |
| Letter-spacing | 0.02em |
| Position | First line of content area, left-aligned |
| Inline | Да, на одной строке с ценой |

### Price

| Property | Value |
|----------|-------|
| Text | «2 000 ₽», «3 200 ₽», «4 000 ₽» |
| Color | `tiffany-700` (#4A9E91) |
| Font | Inter 500, 18px |
| Letter-spacing | normal |
| Position | First line of content area, right-aligned |
| Old price (if discount) | `neutral-400`, 13px, `line-through`, margin-right 6px |

**Price Tiers:**

| Tier | Price | Visual treatment |
|------|-------|------------------|
| Basic | 2 000 ₽ | Default styling |
| Standard | 3 200 ₽ | Default styling |
| Premium | 4 000 ₽ | Default styling + «PREMIUM» badge |

### Title

| Property | Value |
|----------|-------|
| Text | Название шаблона, e.g. «Нежная классика» |
| Color | `neutral-900` (#1A1816) |
| Font | Cormorant Garamond 600, 22px (H4) |
| Line-height | 1.25 |
| Max lines | 2 (ellipsis overflow) |
| Margin | `space-1` (4px) below |
| Hover color | `tiffany-700` (transition: fast) |

### CTA Link

| Property | Value |
|----------|-------|
| Text | «Подробнее →» |
| Color | `tiffany-500` |
| Font | Inter 500, 14px |
| Letter-spacing | 0.02em |
| Icon | Arrow right, 14px, inline |
| Hover color | `tiffany-700` |
| Hover icon | translateX(3px) |
| Margin-top | `space-2` (8px) |
| Display | inline-flex, align-items: center, gap 4px |

---

## 5. HOVER STATE

### Complete Card Hover

| Property | Default | Hover |
|----------|---------|-------|
| Box-shadow | `shadow-sm` | `shadow-md` |
| Transform | none | translateY(-4px) |
| Transition | — | `transition-card` (250ms ease-out) |

### Image Hover

| Property | Default | Hover |
|----------|---------|-------|
| Transform | scale(1) | scale(1.05) |
| Transition | — | 300ms ease-out |

### Title Hover

| Property | Default | Hover |
|----------|---------|-------|
| Color | `neutral-900` | `tiffany-700` |

### CTA Hover

| Property | Default | Hover |
|----------|---------|-------|
| Color | `tiffany-500` | `tiffany-700` |
| Arrow icon | → | → (translateX 3px) |

### Hover Accessibility

- **Touch devices:** Hover state triggered on tap (first tap = hover, second tap = navigate)
- **Keyboard:** `:focus-visible` triggers same visual as hover + `outline: var(--wed-focus-ring)`
- **Reduced motion:** Transform disabled, shadow only

---

## 6. SKELETON / LOADING STATE

Before image loads:

| Element | Skeleton |
|---------|----------|
| Image area | `ivory-100` background + shimmer animation |
| Title | `neutral-100` bar, 70% width, shimmer |
| Price | `neutral-100` bar, 40% width, shimmer |
| CTA | `neutral-100` bar, 50% width, shimmer |

**Shimmer animation:**
```css
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
background: linear-gradient(90deg, 
  var(--wed-ivory-100) 25%, 
  var(--wed-neutral-100) 50%, 
  var(--wed-ivory-100) 75%
);
background-size: 200% 100%;
animation: shimmer 1.5s infinite;
```

---

## 7. RESPONSIVE BEHAVIOR

### Grid Layout

| Breakpoint | Columns | Gap | Card max-width |
|------------|---------|-----|----------------|
| 320px | 1 | 16px | 100% |
| 480px | 2 | 16px | none (flex: 1) |
| 768px | 2 | 24px | 320px |
| 1024px | 3 | 24px | 320px |

### Card-Scale Adjustments

| Element | 320px | 480px | 768px | 1024px |
|---------|-------|-------|-------|--------|
| Title font | 20px | 20px | 22px | 22px |
| Price font | 16px | 16px | 18px | 18px |
| Content padding | 12px | 14px | 16px | 16px |
| Badge font | 10px | 10px | 11px | 11px |
| Image height | ~320px | ~280px | ~300px | ~300px |

### Mobile-Specific (320px)

- Card: full width, single column
- CTA: «Подробнее» (без стрелки для экономии места)
- Style tag: может скрываться под цену при нехватке места
- Badge: размер уменьшен на 1px

---

## 8. EMPTY / ERROR STATES

### No Image Available

| Property | Value |
|----------|-------|
| Background | `ivory-100` |
| Content | Centered icon (24px, `neutral-300`) + «Скоро» |
| Icon | image-off style, stroke 1.5 |

### Loading Error

| Property | Value |
|----------|-------|
| Background | `ivory-100` |
| Content | Icon + «Не загрузилось» + retry link |
| Retry link | `tiffany-500`, underline on hover |

---

## 9. FILTER / TAG STATES

When card is shown in filtered view (by style):

| Property | Value |
|----------|-------|
| Active filter match | Normal card |
| Non-matching (if shown dimmed) | Opacity 0.4, grayscale 30% |
| Filter chip on card | Style tag highlighted: background `tiffany-50`, text `tiffany-700`, radius-sm |

---

## 10. ACCESSIBILITY

- **Card as link:** Entire card is `<a>` element (progressive enhancement: `<a>` wraps card)
- **ARIA:** `aria-label="Шаблон приглашения: [название], [цена] рублей"`
- **Image:** `alt="Шаблон свадебного приглашения — [название]"`
- **Focus:** Visible focus ring on card: `outline: var(--wed-focus-ring); outline-offset: 2px`
- **Price:** `<span class="sr-only">[число] рублей</span>` для скринридеров
- **Badge:** `aria-hidden="true"` (декоративный)

---

## 11. DO / DON'T — CARD SPECIFIC

**✅ DO:**
- Aspect ratio 3:4 — как реальное приглашение
- Один бейдж на карточку
- Hover = shadow + translateY (не менять layout)
- Цена справа, категория слева — сканирование Z-паттерном
- Название Cormorant Garamond — единообразие с заголовками

**❌ DON'T:**
- ❌ Больше 2 строк в названии → ellipsis
- ❌ Тень + border одновременно → шум
- ❌ Hover меняет размеры карточки → layout shift
- ❌ Цена без знака ₽ → неоднозначность
- ❌ Картинка без object-fit: cover → искажение
- ❌ Бейдж с кириллицей в Great Vibes → не поддерживается

---

*Card Mockup Spec v1.0 — frozen for MVP development.*
