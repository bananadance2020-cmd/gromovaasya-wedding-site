# Icon System Specification

**Project:** gromovaasya-wedding-site  
**Version:** 1.0.0  
**Date:** 2026-05-17  
**Phase:** MVP Concept Design

---

## 1. OVERVIEW

**8 SVG-иконок** для MVP сайта свадебных приглашений. Единый line-стиль, консистентная толщина штриха, оптимизированы для retina-дисплеев.

---

## 2. GLOBAL SPECIFICATIONS

| Property | Value |
|----------|-------|
| **Style** | Line (outline, не filled) |
| **ViewBox** | `0 0 24 24` |
| **Grid** | 24×24px |
| **Stroke width** | 1.5px |
| **Stroke color** | `currentColor` (inherit from parent) |
| **Fill** | `none` |
| **Stroke linecap** | `round` |
| **Stroke linejoin** | `round` |
| **Safe area** | 2px padding inside viewBox (content within 2–22px) |
| **Format** | Inline SVG (no external files) |
| **Optimization** | SVGO: remove dimensions, collapse groups, round to 2 decimals |

### Default CSS

```css
.wed-icon {
  width: 24px;
  height: 24px;
  display: inline-block;
  flex-shrink: 0;
  stroke: currentColor;
  fill: none;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  vertical-align: middle;
}

.wed-icon--sm { width: 16px; height: 16px; stroke-width: 1.5; }
.wed-icon--lg { width: 32px; height: 32px; stroke-width: 1.25; }
.wed-icon--xl { width: 48px; height: 48px; stroke-width: 1; }
```

---

## 3. ICON DEFINITIONS

### 3.1 unique — «Уникальный»

**Purpose:** Преимущества — «Каждое приглашение уникально»  
**Concept:** Звезда / sparkle — символ уникальности  
**Metaphor:** Четырёхконечная звезда (sparkle) — иконка «особенного»

```
     *
    /|\
   / | \
  *--+--*
   \ | /
    \|/
     *
```

**SVG Path (24×24):**
```svg
<svg viewBox="0 0 24 24" class="wed-icon">
  <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5Z"/>
  <path d="M19 15L19.75 17.25L22 18L19.75 18.75L19 21L18.25 18.75L16 18L18.25 17.25Z"/>
</svg>
```

**Usage context:**
- Color: `gold-500` (accent)
- Size: 24px (advantages section), 16px (inline)
- Section: «Почему мы» — блок преимуществ

---

### 3.2 speed — «Быстро»

**Purpose:** Преимущества — «Готово за 5 минут»  
**Concept:** Молния (lightning bolt) — скорость, мгновенность  
**Metaphor:** Z-образная молния, динамичная

```
    /|
   / |
  /__|
  |  /
  | /
  |/
```

**SVG Path (24×24):**
```svg
<svg viewBox="0 0 24 24" class="wed-icon">
  <path d="M13 2L4 14H12L11 22L20 10H12L13 2Z"/>
</svg>
```

**Usage context:**
- Color: `tiffany-500`
- Size: 24px (advantages), 16px (hero trust badges)
- Section: Hero trust badge «за 5 минут», преимущества

---

### 3.3 price — «Цена»

**Purpose:** Преимущества — «Доступные цены» / ценники  
**Concept:** Тег (price tag) — классический символ цены  
**Metaphor:** Тег с отверстием

```
  ┌──────┐
 ╱│  ◉   │
╱ │      │
└─┴──────┘
```

**SVG Path (24×24):**
```svg
<svg viewBox="0 0 24 24" class="wed-icon">
  <path d="M20.59 13.41L13.42 20.58C13.04 20.96 12.53 21.17 12 21.17C11.47 21.17 10.96 20.96 10.58 20.58L2 12V3H11L20.59 12.59C20.97 12.97 20.97 13.59 20.59 13.41Z"/>
  <circle cx="7" cy="7" r="1.5"/>
</svg>
```

**Usage context:**
- Color: `tiffany-500`
- Size: 24px (advantages), 16px (hero trust badges)
- Section: Hero trust badge «от 2 000₽», преимущества, прайс

---

### 3.4 support — «Поддержка»

**Purpose:** Преимущества — «Помощь на каждом шаге»  
**Concept:** Сердце + чат-баббл — забота + поддержка  
**Metaphor:** Chat bubble с сердцем внутри

```
  ┌─────────┐
  │   ♡     │
  │         │
  └────┐    │
       └────┘
```

**SVG Path (24×24):**
```svg
<svg viewBox="0 0 24 24" class="wed-icon">
  <path d="M21 11.5C21 16.75 16.75 21 11.5 21C10.13 21 8.83 20.68 7.67 20.1L3 21L3.9 16.33C3.32 15.17 3 13.87 3 12.5C3 7.25 7.25 3 12.5 3C17.75 3 21 7.25 21 11.5Z"/>
  <path d="M14.5 9.5C14.5 9.5 13.5 8.5 12.5 8.5C11.5 8.5 10.5 9.5 10.5 10.5C10.5 12.5 12.5 13.5 12.5 13.5C12.5 13.5 14.5 12.5 14.5 10.5C14.5 9.5 14.5 9.5 14.5 9.5Z"/>
</svg>
```

**Usage context:**
- Color: `tiffany-500`
- Size: 24px (advantages section)
- Section: «Почему мы» — блок преимуществ

---

### 3.5 filter — «Фильтр»

**Purpose:** Каталог — фильтр по стилям  
**Concept:** Воронка (funnel) — классический фильтр  
**Metaphor:** Funnel с горизонтальными линиями

```
  ┌──────────┐
  │ ──────── │
  │  ──────  │
  │   ────   │
  └───┐  ┌───┘
      │  │
      └──┘
```

**SVG Path (24×24):**
```svg
<svg viewBox="0 0 24 24" class="wed-icon">
  <path d="M4 6H20"/>
  <path d="M7 12H17"/>
  <path d="M10 18H14"/>
</svg>
```

**Usage context:**
- Color: `neutral-500` (default), `tiffany-500` (active)
- Size: 20px (filter bar), 16px (hero trust badges)
- Section: Hero trust badge «12 шаблонов», каталог filter bar

---

### 3.6 heart — «Избранное»

**Purpose:** Избранное / «Нравится» на карточке  
**Concept:** Контурное сердце  
**Metaphor:** Классическое сердце, line style

```
    ♡♡   ♡♡
  ♡♡♡♡♡♡♡♡♡
  ♡♡♡♡♡♡♡♡♡
    ♡♡♡♡♡♡♡
      ♡♡♡♡♡
        ♡♡♡
          ♡
```

**SVG Path (24×24):**
```svg
<svg viewBox="0 0 24 24" class="wed-icon">
  <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61Z"/>
</svg>
```

**Usage context:**
- Color (default): `neutral-300`
- Color (active/filled): `tiffany-500` with `fill: currentColor`
- Size: 20px (card overlay), 24px (UI)
- Section: Карточка каталога (избранное, future feature)
- **Variant — filled:** Добавить `fill="currentColor"` для активного состояния

---

### 3.7 telegram — «Telegram»

**Purpose:** Контакт / заказать через Telegram  
**Concept:** Бумажный самолётик (Telegram style)  
**Metaphor:** Paper plane — узнаваемый символ Telegram

```
         /|
        / |
  _____/  |
  \       |
   \______|
```

**SVG Path (24×24):**
```svg
<svg viewBox="0 0 24 24" class="wed-icon">
  <path d="M21.2 4.4L2.4 11.5C2.1 11.6 2.1 11.9 2.4 12L7 13.5L17.6 6.8C17.7 6.7 17.8 6.8 17.7 6.9L9.2 14.5H9.1L9 14.6V14.5L8.8 18.1C8.8 18.3 9 18.4 9.1 18.3L11.4 16.1L15.9 19.4C16.7 19.8 17.2 19.5 17.3 18.6L21.3 5.6C21.4 5.2 21.5 4.3 21.2 4.4Z"/>
</svg>
```

**Usage context:**
- Color: `tiffany-500` (site style) или `#26A5E4` (brand Telegram)
- Size: 24px (footer, contact section), 20px (inline)
- Section: Footer, «Связаться с нами», floating contact button
- **Note:** При использовании как brand icon — цвет `#26A5E4` (official Telegram blue)

---

### 3.8 arrow — «Стрелка»

**Purpose:** Навигация: «Подробнее →», «Назад ←», scroll, pagination  
**Concept:** Минималистичная стрелка вправо  
**Metaphor:** Chevron right — чистая навигация

```
      /|
     / |
    /  |
     \ |
      \|
```

**SVG Path (24×24):**
```svg
<svg viewBox="0 0 24 24" class="wed-icon">
  <path d="M5 12H19"/>
  <path d="M13 6L19 12L13 18"/>
</svg>
```

**Usage context:**
- Color: inherit (currentColor)
- Size: 14px (inline CTA), 16px (card link), 20px (pagination), 24px (navigation)
- Section: Универсальная — CTA, pagination, navigation, breadcrumbs
- **Variants:**
  - Left: `transform: scaleX(-1)` или `rotate(180)`
  - Up: `transform: rotate(-90deg)`
  - Down: `transform: rotate(90deg)`
  - Double: добавить второй chevron

---

## 4. USAGE MAP

| Иконка | Где используется | Размер | Цвет |
|--------|-----------------|--------|------|
| **unique** | Преимущества «Уникальный» | 24px | gold-500 |
| **speed** | Hero trust, преимущества | 16px / 24px | tiffany-500 |
| **price** | Hero trust, преимущества | 16px / 24px | tiffany-500 |
| **support** | Преимущества «Поддержка» | 24px | tiffany-500 |
| **filter** | Hero trust, каталог | 16px / 20px | tiffany-500 / neutral-500 |
| **heart** | Карточка (избранное) | 20px | neutral-300 → tiffany-500 |
| **telegram** | Footer, контакт, FAB | 20px / 24px | tiffany-500 / #26A5E4 |
| **arrow** | CTA, pagination, nav | 14–24px | inherit |

---

## 5. ICON CONTAINER

Когда иконка используется в UI-контексте (кнопка, бейдж, FAB):

| Property | Value |
|----------|-------|
| Container size | 40×40px (standard), 32×32px (compact), 48×48px (touch target) |
| Container radius | `radius-full` (circle) или `radius-md` (8px) |
| Icon alignment | Center (flex, align-items, justify-content) |
| Background | Transparent или `tiffany-50` |
| Hover background | `tiffany-100` |
| Min touch target | 44×44px (iOS guideline) |

### FAB (Floating Action Button) — Telegram

| Property | Value |
|----------|-------|
| Position | Fixed, bottom-right, 20px from edges |
| Size | 56×56px |
| Background | `tiffany-500` |
| Icon | telegram, 24px, white |
| Shadow | `shadow-lg` |
| Radius | `radius-full` |
| Hover | scale(1.05), `shadow-tiffany-lg` |
| Z-index | `z-fixed` |

---

## 6. OPTIMIZATION CHECKLIST

- [ ] viewBox `0 0 24 24` — все 8 иконок
- [ ] stroke-width 1.5px — консистентность
- [ ] stroke-linecap round — мягкие концы
- [ ] stroke-linejoin round — мягкие углы
- [ ] fill none — line style
- [ ] stroke currentColor — наследование цвета
- [ ] Нет `width`/`height` на SVG — контролируется CSS
- [ ] Paths оптимизированы (SVGO)
- [ ] Нет лишних групп `<g>`
- [ ] Координаты округлены до 2 знаков
- [ ] Safe area 2px соблюдена
- [ ] Тест на 16px — читаемость

---

## 7. IMPLEMENTATION PATTERN

### Inline SVG (recommended for MVP)

```html
<svg viewBox="0 0 24 24" class="wed-icon wed-icon--sm" aria-hidden="true">
  <path d="..."/>
</svg>
```

### Sprite (phase 2, при >15 иконок)

```html
<svg class="wed-icon wed-icon--sm" aria-hidden="true">
  <use href="#wed-icon-heart"/>
</svg>
```

### Accessibility

```html
<!-- Decorative icon (no meaning) -->
<svg class="wed-icon" aria-hidden="true">...</svg>

<!-- Icon with meaning -->
<svg class="wed-icon" role="img" aria-label="Избранное">...</svg>

<!-- Icon in button -->
<button aria-label="Добавить в избранное">
  <svg class="wed-icon" aria-hidden="true">...</svg>
</button>
```

---

*Icon Spec v1.0 — frozen for MVP development.*
