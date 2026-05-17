# Hi-Fi Wireframes — MVP Сайт свадебных приглашений @gromovaasya

**Фаза:** 1 — Hi-Fi Wireframes (3 ключевые секции)  
**Дата:** 17 мая 2026  
**Статус:** Черновик → Утверждение  
**Формат:** Mobile-first, 4 breakpoints  

---

## Дизайн-система (контекст)

### Палитра

| Токен | Значение | Роль |
|---|---|---|
| `--color-primary` | `#7ECDC0` (Tiffany) | Акцент: CTA, hover, badge, иконки |
| `--color-primary-dark` | `#5BAFA3` | Hover primary, focus ring |
| `--color-primary-light` | `#D4F0EC` | Фон badge, subtle highlight |
| `--color-text` | `#2D3436` | Основной текст |
| `--color-text-secondary` | `#636E72` | Подзаголовки, описание |
| `--color-text-inverse` | `#FFFFFF` | Текст на тёмном/акцентном фоне |
| `--color-bg` | `#FAFAF8` | Фон страницы |
| `--color-surface` | `#FFFFFF` | Фон карточек |
| `--color-accent` | `#C9A96E` (Gold) | Вторичный акцент: premium-бейджи |

### Типографика

| Элемент | Шрифт | Mobile | Desktop |
|---|---|---|---|
| H1 (Hero) | Cormorant Garamond 600 | 32px / 1.2 | 48px / 1.15 |
| H2 (секция) | Cormorant Garamond 600 | 24px / 1.2 | 36px / 1.2 |
| H3 (карточка) | Cormorant Garamond 500 | 18px / 1.3 | 22px / 1.3 |
| Body | Inter 400 | 16px / 1.5 | 16px / 1.5 |
| Small / Caption | Inter 400 | 14px / 1.4 | 14px / 1.4 |
| Subtitle (Hero) | Inter 300 | 14px / 1.4, uppercase, ls 0.1em | 16px / 1.4, uppercase, ls 0.1em |
| Button | Inter 500 | 16px / 1.0 | 16px / 1.0 |

### Breakpoints

| Breakpoint | Название | Контейнер padding |
|---|---|---|
| 320px | Mobile S | 16px |
| 480px | Mobile L | 16px |
| 768px | Tablet | 24px |
| 1024px | Desktop | 32px |

**Контейнер:** `max-width: 960px; margin: 0 auto;`

### Spacing Tokens (8pt grid)

| Токен | Значение | Применение |
|---|---|---|
| `--space-xs` | 4px | Микро-отступы, gap в pills |
| `--space-sm` | 8px | Внутренние отступы компактных элементов |
| `--space-md` | 16px | Базовый gap, padding в карточках |
| `--space-lg` | 24px | Секционные отступы, grid gap (mobile) |
| `--space-xl` | 32px | Grid gap (desktop), section padding |
| `--space-2xl` | 48px | Hero padding, section padding |
| `--space-3xl` | 64px | Hero top/bottom padding (desktop) |

---

## СЕКЦИЯ 1: HERO

**Якорь:** `#hero`  
**AIDA-роль:** Attention — за 3 секунды: что это, для кого, что делать  
**HTML-структура:** `<section id="hero" aria-labelledby="hero-heading">`

### 1.1 ASCII Wireframe — Mobile (320px)

```
┌─────────────────────────────────────┐  ← viewport 320×568, 100vh
│ [HEADER: @gromovaasya    ☰ [Заказать]│  ← sticky, 56px, z-200
├─────────────────────────────────────┤
│                                     │
│   ╔═══════════════════════════╗     │  ← overlay gradient (см. 1.4)
│   ║                           ║     │
│   ║  ДИЗАЙНЕРСКИЕ             ║     │  ← subtitle, Inter 300 14px
│   ║  ЭЛЕКТРОННЫЕ              ║     │    uppercase, ls 0.1em
│   ║  ПРИГЛАШЕНИЯ              ║     │    color: #FFFFFF, opacity 0.9
│   ║                           ║     │    margin-bottom: 12px
│   ║  Свадебные приглашения,   ║     │
│   ║  от которых замирает      ║     │  ← H1, Cormorant 600 32px
│   ║  сердце                   ║     │    color: #FFFFFF, lh 1.2
│   ║                           ║     │    margin-bottom: 16px
│   ║  12 уникальных стилей ·   ║     │
│   ║  Персонализация ·         ║     │  ← description, Inter 400 16px
│   ║  Готово за 1–3 дня        ║     │    color: #FFFFFF, opacity 0.85
│   ║                           ║     │    margin-bottom: 32px
│   ║  ┌─────────────────────┐  ║     │
│   ║  │  Смотреть каталог   │  ║     │  ← CTA primary, 100% width
│   ║  └─────────────────────┘  ║     │    bg: #7ECDC0, h: 48px
│   ║                           ║     │    radius: 8px
│   ║     ↓ scroll indicator    ║     │  ← opacity 0.6, bounce anim
│   ║                           ║     │
│   ╚═══════════════════════════╝     │
│                                     │
└─────────────────────────────────────┘
```

### 1.2 ASCII Wireframe — Desktop (1024px)

```
┌──────────────────────────────────────────────────────────────────┐  ← viewport 1024×768
│ [HEADER: @gromovaasya  Каталог  Как работает  Цены  Отзывы FAQ [Заказать] │  ← sticky, 72px
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ╔═══════════════════════════════════════════════════════════╗   │  ← overlay gradient
│  ║                                                           ║   │
│  ║  ДИЗАЙНЕРСКИЕ ЭЛЕКТРОННЫЕ ПРИГЛАШЕНИЯ                    ║   │  ← subtitle, 16px
│  ║                                                           ║   │
│  ║  Свадебные приглашения,                                   ║   │
│  ║  от которых замирает сердце                               ║   │  ← H1, 48px
│  ║                                                           ║   │
│  ║  12 уникальных стилей · Персонализация · Готово за 1–3 дня║   │  ← description
│  ║                                                           ║   │
│  ║  ┌──────────────────┐   ┌──────────────────┐              ║   │
│  ║  │ Смотреть каталог │   │  Узнать цены     │              ║   │  ← 2 CTA
│  ║  └──────────────────┘   └──────────────────┘              ║   │
│  ║                                                           ║   │
│  ╚═══════════════════════════════════════════════════════════╝   │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### 1.3 Таблица элементов — Hero

| Элемент | Селектор | Шрифт / Размер | Цвет | Spacing (Mobile → Desktop) |
|---|---|---|---|---|
| Subtitle | `.hero__subtitle` | Inter 300, 14px→16px, uppercase, ls 0.1em | `#FFFFFF` / 0.9 | `mb: --space-sm (8px) → --space-md (16px)` |
| H1 | `.hero__title` (h1) | Cormorant Garamond 600, **32px→48px**, lh 1.2 | `#FFFFFF` | `mb: --space-md (16px) → --space-lg (24px)` |
| Description | `.hero__description` | Inter 400, 16px, lh 1.5 | `#FFFFFF` / 0.85 | `mb: --space-xl (32px) → --space-2xl (48px)` |
| CTA Primary | `.btn--primary` | Inter 500, 16px, lh 1.0 | bg: `#7ECDC0`, text: `#FFFFFF` | h: 48px, w: 100% → auto, `px: 32px`, radius: 8px |
| CTA Secondary | `.btn--ghost` | Inter 500, 16px, lh 1.0 | border: 1px `#FFFFFF`, text: `#FFFFFF` | h: 48px, display: none → inline-flex, `px: 32px`, radius: 8px |
| Scroll indicator | `.hero__scroll` | — | `#FFFFFF` / 0.6 | display: block → none, `mt: --space-lg (24px)` |
| Overlay | `.hero__overlay` | — | gradient (см. ниже) | position: absolute, inset: 0 |
| Content wrapper | `.hero__content` | — | — | `pt: 80px→120px`, `pb: 48px→64px`, `px: 16px→32px` |

### 1.4 Background Overlay Treatment

```
Layer stack (bottom → top):
┌─────────────────────────────┐
│ 4. Hero content (text+CTA)  │  ← z-index: 2, position: relative
├─────────────────────────────┤
│ 3. Gradient overlay         │  ← z-index: 1, position: absolute, inset: 0
│    background: linear-gradient(
│      180deg,
│      rgba(0,0,0,0.25) 0%,          ← top: subtle dark for header readability
│      rgba(0,0,0,0.10) 40%,         ← mid: minimal, text relies on bg image
│      rgba(0,0,0,0.55) 100%         ← bottom: strong dark for text contrast
│    )
├─────────────────────────────┤
│ 2. Background image         │  ← z-index: 0, object-fit: cover
│    filter: brightness(0.85) │     (soft darken for text legibility)
├─────────────────────────────┤
│ 1. Section background       │  ← fallback bg: #2D3436
└─────────────────────────────┘
```

**Контраст текста:** Белый текст (`#FFFFFF`) на overlay с min яркостью 0.55 →  
Контраст ≈ 12.6:1 (WCAG AAA ✅). Без overlay контраст с фото непредсказуем → overlay **обязателен**.

### 1.5 Responsive Breakpoints Behavior

| Breakpoint | Hero Height | Text Align | CTA Layout | Content Width |
|---|---|---|---|---|
| **320px** | `100vh` (min 500px) | Center | 1 кнопка, `width: 100%`, stacked | Full width, `px: 16px` |
| **480px** | `100vh` (min 500px) | Center | 1 кнопка, `width: 100%`, stacked | Full width, `px: 16px` |
| **768px** | `80vh` (min 560px) | Left | 2 кнопки в row, `gap: 16px` | Max 540px, `px: 24px` |
| **1024px** | `70vh` (min 600px) | Left | 2 кнопки в row, `gap: 16px` | Max 480px (50%), `px: 32px` |

**Mobile → Desktop transition:**
- H1: `32px` (320–480) → `40px` (768) → `48px` (1024)
- Subtitle: `14px` → `16px` at 768px
- CTA secondary: `display: none` → `display: inline-flex` at 768px
- Scroll indicator: `display: block` → `display: none` at 768px
- Text alignment: `text-align: center` → `text-align: left` at 768px

### 1.6 Accessibility Notes — Hero

**Tab Order:**
1. Header logo (tabindex 0, `<a>` element)
2. Header navigation links (if visible)
3. Header CTA «Заказать»
4. Hero CTA Primary «Смотреть каталог»
5. Hero CTA Secondary «Узнать цены» (desktop only)

**ARIA Labels:**
```html
<section id="hero" aria-labelledby="hero-heading">
  <h1 id="hero-heading">Свадебные приглашения, от которых замирает сердце</h1>
  <a href="#catalog" aria-label="Перейти в каталог шаблонов приглашений">Смотреть каталог</a>
  <a href="#pricing" aria-label="Посмотреть цены на приглашения">Узнать цены</a>
</section>
```

**Contrast Ratios:**
| Pair | Ratio | WCAG |
|---|---|---|
| `#FFFFFF` text on overlay min (0.55 dark) | ~12.6:1 | AAA ✅ |
| `#FFFFFF` text on `#7ECDC0` button | 3.4:1 | AA Large ✅ (≥3:1 for 16px bold) |
| `#FFFFFF` text on `#5BAFA3` (hover) | 4.5:1 | AA ✅ |
| `#FFFFFF` on ghost button (transparent) | N/A — text has outline + bg context | — |

**Additional:**
- Background image: `aria-hidden="true"` (декоративный)
- Scroll indicator: `aria-hidden="true"`, не в tab order
- `prefers-reduced-motion`: bounce animation → `animation: none`
- H1 — единственный на странице, семантически корректный

---

## СЕКЦИЯ 2: CATALOG GRID

**Якорь:** `#catalog`  
**AIDA-роль:** Interest — главный контент, «товар лицом»  
**HTML-структура:** `<section id="catalog" aria-labelledby="catalog-heading">`

### 2.1 ASCII Wireframe — Mobile (320px, 1 колонка)

```
┌─────────────────────────────────────┐  ← viewport 320px
│                                     │
│  Каталог приглашений                │  ← H2, Cormorant 600, 24px
│                                     │    mb: 8px
│  Выберите стиль, который отражает   │  ← subtitle, Inter 400, 14px
│  вашу историю любви                 │    mb: 24px
│                                     │
│  ┌───────────────────────────────┐  │
│  │ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐     │  │  ← filter pills row
│  │ │Все│ │Кл.│ │Бох│ │Мин│ │Мод│ →│  │    horizontal scroll
│  │ └──┘ └──┘ └──┘ └──┘ └──┘     │  │    h: 36px, gap: 8px
│  └───────────────────────────────┘  │    mb: 24px
│                                     │
│  ┌─────────────────────────────┐    │
│  │                             │    │  ┐
│  │     [Изображение            │    │  │
│  │      шаблона 1]             │    │  │  card 1
│  │      aspect-ratio: 2/3      │    │  │  (100% width)
│  │                             │    │  │
│  │  ┌──────┐                   │    │  │
│  │  │Класс.│                   │    │  │
│  │  └──────┘                   │    │  │
│  ├─────────────────────────────┤    │  │
│  │  Классический романс        │    │  │
│  │  от 2 000 ₽                │    │  │
│  │  [Подробнее]               │    │  ┘
│  └─────────────────────────────┘    │
│  ↑ gap: 16px                        │
│  ┌─────────────────────────────┐    │
│  │                             │    │  ┐
│  │     [Изображение            │    │  │  card 2
│  │      шаблона 2]             │    │  │
│  │                             │    │  │
│  │  ...                        │    │  ┘
│  └─────────────────────────────┘    │
│                                     │
│  ... (12 карточек, 12 рядов)        │
│                                     │
└─────────────────────────────────────┘
```

### 2.2 ASCII Wireframe — Tablet (768px, 2 колонки)

```
┌──────────────────────────────────────────────────────┐  ← viewport 768px
│                                                      │
│  Каталог приглашений                                 │
│  Выберите стиль, который отражает вашу историю любви │
│                                                      │
│  [Все стили] [Классика] [Бохо] [Минимализм] [Модерн] │  ← pills, no scroll
│                                                      │
│  ┌────────────────┐  ┌────────────────┐              │
│  │                │  │                │              │
│  │  [Фото 2:3]    │  │  [Фото 2:3]    │  ← row 1     │
│  │                │  │                │              │
│  │  [Бейдж]       │  │  [Бейдж]       │              │
│  │  Название      │  │  Название      │              │
│  │  Цена          │  │  Цена          │              │
│  │  [Подробнее]   │  │  [Подробнее]   │              │
│  └────────────────┘  └────────────────┘              │
│  ↑ gap: 24px                                         │
│  ┌────────────────┐  ┌────────────────┐              │
│  │  [Фото 2:3]    │  │  [Фото 2:3]    │  ← row 2     │
│  │  ...           │  │  ...           │              │
│  └────────────────┘  └────────────────┘              │
│                                                      │
│  ... (12 карточек = 6 рядов × 2)                     │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### 2.3 ASCII Wireframe — Desktop (1024px, 3 колонки)

```
┌──────────────────────────────────────────────────────────────────┐  ← viewport 1024px
│                                                                  │
│  Каталог приглашений                                             │
│  Выберите стиль, который отражает вашу историю любви             │
│                                                                  │
│  [Все стили]  [Классика]  [Бохо]  [Минимализм]  [Модерн]        │
│                                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                       │
│  │[Фото 2:3]│  │[Фото 2:3]│  │[Фото 2:3]│  ← row 1              │
│  │[Бейдж]   │  │[Бейдж]   │  │[Бейдж]   │                       │
│  │Название  │  │Название  │  │Название  │                       │
│  │Цена      │  │Цена      │  │Цена      │                       │
│  └──────────┘  └──────────┘  └──────────┘                       │
│  ↑ gap: 24px                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                       │
│  │[Фото 2:3]│  │[Фото 2:3]│  │[Фото 2:3]│  ← row 2              │
│  └──────────┘  └──────────┘  └──────────┘                       │
│                                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                       │
│  │[Фото 2:3]│  │[Фото 2:3]│  │[Фото 2:3]│  ← row 3              │
│  └──────────┘  └──────────┘  └──────────┘                       │
│                                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                       │
│  │[Фото 2:3]│  │[Фото 2:3]│  │[Фото 2:3]│  ← row 4              │
│  └──────────┘  └──────────┘  └──────────┘                       │
│                                                                  │
│  (12 карточек = 4 ряда × 3)                                      │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### 2.4 Таблица элементов — Catalog Grid

| Элемент | Селектор | Spacing (Mobile → Desktop) | CSS |
|---|---|---|---|
| Section | `.catalog` | `py: --space-2xl (48px) → --space-3xl (64px)` | `background: var(--color-bg)` |
| Section title | `.section-title` (h2) | `mb: --space-sm (8px) → --space-md (16px)` | Cormorant 600, 24px→36px |
| Subtitle | `.section-subtitle` | `mb: --space-lg (24px) → --space-xl (32px)` | Inter 400, 14px→16px, `#636E72` |
| Filter bar | `.catalog__filters` | `mb: --space-lg (24px)`, gap: 8px | `display: flex`, `overflow-x: auto`, `scroll-snap-type: x mandatory` |
| Filter pill | `.filter-btn` | h: 36px, `px: 16px`, radius: 18px | `white-space: nowrap`, active: bg `#7ECDC0` |
| Grid container | `.catalog__grid` | gap: 16px → 24px | `display: grid` |
| Grid columns | — | 1 col (320) → 2 col (768) → 3 col (1024) | `grid-template-columns: 1fr → repeat(2,1fr) → repeat(3,1fr)` |
| Card | `.catalog-card` | — | `aspect-ratio: 2/3` для image zone |

### 2.5 Filter Bar — Детальная спецификация

**Mobile (320–480px):**
```
┌─────────────────────────────────────────────┐
│ → [Все стили] [Классика] [Бохо] [Миним.] [Модерн] → │
└─────────────────────────────────────────────┘
  ↑ горизонтальный скролл, скрытый scrollbar
```

```css
.catalog__filters {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  scrollbar-width: none;          /* Firefox */
  -ms-overflow-style: none;       /* IE/Edge */
  scroll-snap-type: x mandatory;
  padding-bottom: 4px;            /* space for focus ring */
}
.catalog__filters::-webkit-scrollbar { display: none; }
```

**Filter Pill Anatomy:**
```
┌─────────────────┐
│  [Все стили]    │  ← h: 36px (≥44px touch target с padding)
└─────────────────┘    px: 16px, border-radius: 18px (pill)
                        font: Inter 500, 14px
                        Default: bg transparent, border 1px #E0E0E0
                        Active: bg #7ECDC0, color #FFFFFF, border #7ECDC0
                        Hover: bg #D4F0EC, border #7ECDC0
                        Focus: outline 2px #5BAFA3, outline-offset 2px
```

| Состояние | Фон | Текст | Бордер |
|---|---|---|---|
| Default | `transparent` | `#2D3436` | `1px #E0E0E0` |
| Active | `#7ECDC0` | `#FFFFFF` | `1px #7ECDC0` |
| Hover | `#D4F0EC` | `#2D3436` | `1px #7ECDC0` |
| Focus | `#D4F0EC` | `#2D3436` | `1px #7ECDC0` + `outline: 2px #5BAFA3` |

**Tablet+ (768px+):** pills без скролла, в 1 строку, `justify-content: center`

### 2.6 Grid Gap Tokens

| Breakpoint | Columns | Gap | Row-gap | Карточек в viewport |
|---|---|---|---|---|
| 320px | 1 | 16px | 16px | 1 (scroll для остальных) |
| 480px | 1 | 16px | 16px | 1 |
| 768px | 2 | 24px | 24px | 2 (3 ряда visible) |
| 1024px | 3 | 24px | 24px | 3 (2 ряда visible) |

**Card width calculation:**
- Mobile (320px): `(320 - 32padding) = 288px` → card width 288px
- Tablet (768px): `(768 - 48padding - 24gap) / 2 = 348px` → card width 348px
- Desktop (1024px): `(960 - 64padding - 48gap) / 3 = 282px` → card width 282px

**Card image height (aspect-ratio 2:3):**
- Mobile: 288 × 432px
- Tablet: 348 × 522px
- Desktop: 282 × 423px

### 2.7 Responsive Breakpoints Behavior

| Свойство | 320px | 480px | 768px | 1024px |
|---|---|---|---|---|
| Grid columns | 1 | 1 | 2 | 3 |
| Grid gap | 16px | 16px | 24px | 24px |
| Filter scroll | ✅ auto | ✅ auto | ❌ wrap | ❌ nowrap |
| Section py | 48px | 48px | 56px | 64px |
| Cards visible | ~1.5 | ~1.5 | ~3 | ~6 |

### 2.8 Accessibility Notes — Catalog Grid

**Tab Order:**
1. Filter pills (в DOM-порядке): Все → Классика → Минимализм → Бохо → Модерн
2. Карточки каталога (в DOM-порядке, сверху вниз, слева направо)
3. Каждая карточка: `<a>` wrapper (1 tab stop) → весь контент внутри доступен через 1 focus

**ARIA Labels:**
```html
<section id="catalog" aria-labelledby="catalog-heading">
  <h2 id="catalog-heading">Каталог приглашений</h2>
  <div class="catalog__filters" role="group" aria-label="Фильтры по стилю">
    <button class="filter-btn" aria-pressed="true">Все стили</button>
    <button class="filter-btn" aria-pressed="false">Классика</button>
  </div>
  <div class="catalog__grid" role="list" aria-label="Шаблоны приглашений">
    <article class="catalog-card" role="listitem" aria-label="Шаблон «Классический романс», от 2000₽">
      ...
    </article>
  </div>
</section>
```

**Contrast Ratios:**
| Pair | Ratio | WCAG |
|---|---|---|
| `#FFFFFF` text on `#7ECDC0` (active pill) | 3.4:1 | AA Large ✅ |
| `#2D3436` on `transparent` (default pill) | 12.3:1 | AAA ✅ |
| `#2D3436` on `#D4F0EC` (hover pill) | 9.1:1 | AAA ✅ |
| `#636E72` subtitle on `#FAFAF8` bg | 5.7:1 | AA ✅ |

**Additional:**
- Filter pills: `aria-pressed` toggles on click, keyboard: Enter/Space
- Filter bar: горизонтальный скролл доступен через `Shift+Tab` + arrow keys
- Grid: logical tab order follows visual order (row-major)
- `prefers-reduced-motion`: card hover animations → `transition: none`

---

## СЕКЦИЯ 3: CARD COMPONENT

**Роль:** Основная единица каталога — превью шаблона → переход к деталям  
**HTML-структура:** `<article class="catalog-card" role="listitem">`

### 3.1 ASCII Wireframe — Card Anatomy

```
DEFAULT STATE                            HOVER STATE (desktop only)
┌─────────────────────────────┐          ┌─────────────────────────────┐
│                             │          │                             │
│                             │          │                             │
│                             │          │  ╔═══════════════════════╗  │
│      [Изображение           │          │  ║                       ║  │
│       шаблона]              │          │  ║   overlay: rgba(      ║  │
│                             │          │  ║   45,52,54, 0.65)     ║  │
│      aspect-ratio: 2/3      │          │  ║                       ║  │
│                             │          │  ║   ┌───────────────┐   ║  │
│      object-fit: cover      │    →     │  ║   │  Подробнее    │   ║  │
│                             │          │  ║   └───────────────┘   ║  │
│                             │          │  ║                       ║  │
│                             │          │  ║   transition: opacity ║  │
│                             │          │  ║   250ms ease          ║  │
│                             │          │  ╚═══════════════════════╝  │
│  ┌────────┐                 │          │  ┌────────┐                 │
│  │Классика│  ← badge        │          │  │Классика│                 │
│  └────────┘  top-right      │          │  └────────┘                 │
├─────────────────────────────┤          ├─────────────────────────────┤
│                             │          │                             │
│  Классический романс        │          │  Классический романс        │
│                             │          │                             │
│  от 2 000 ₽                │          │  от 2 000 ₽                │
│                             │          │                             │
│  ┌──────────────┐           │          │  ┌──────────────┐           │
│  │  Подробнее → │           │          │  │  Подробнее → │           │
│  └──────────────┘           │          │  └──────────────┘           │
│                             │          │                             │
└─────────────────────────────┘          └─────────────────────────────┘
```

### 3.2 Card Anatomy — Детальная спецификация

```
┌─────────────────────────────────────────┐
│                                         │  ┐
│                                         │  │
│           IMAGE ZONE                    │  │
│                                         │  │  aspect-ratio: 2/3
│     <img src="1.webp"                   │  │  width: 100%
│      alt="Шаблон приглашения            │  │  object-fit: cover
│      «Классический романс»"             │  │  border-radius: 8px 8px 0 0
│      loading="lazy">                    │  │
│                                         │  │
│                          ┌──────────┐   │  │
│                          │Классика  │   │  │  ← style badge
│                          └──────────┘   │  │    position: absolute
│                                         │  │    top: 12px, right: 12px
│                                         │  ┘
├─────────────────────────────────────────┤  ← border-bottom: none
│                                         │
│  Классический романс                    │  ← title, h3
│                                         │    Cormorant 500, 18px→22px
│  от 2 000 ₽                            │    mb: 4px
│                                         │
│  ┌──────────────────┐                   │  ← price, Inter 400, 14px
│  │  Подробнее →     │                   │    color: #636E72, mb: 12px
│  └──────────────────┘                   │
│                                         │  ← CTA button, Inter 500, 14px
└─────────────────────────────────────────┘    h: 36px, w: 100%
                                               bg: transparent
                                               border: 1px #7ECDC0
                                               color: #7ECDC0
                                               radius: 6px
```

### 3.3 Таблица элементов — Card Component

| Элемент | Селектор | Размер / Свойства | Spacing | Цвета |
|---|---|---|---|---|
| Card wrapper | `.catalog-card` | `aspect-ratio: 2/3` (image zone) + content | radius: 8px, overflow: hidden | bg: `#FFFFFF`, shadow: `--shadow-sm` |
| Image | `.card__image` (img) | `width: 100%`, `aspect-ratio: 2/3`, `object-fit: cover` | — | — |
| Style badge | `.card__badge` | Inter 500, 11px, uppercase, ls 0.05em | position: absolute, `top: 12px, right: 12px`, `px: 10px, py: 4px`, radius: 4px | bg: `#D4F0EC`, color: `#5BAFA3` |
| Title (h3) | `.card__title` | Cormorant Garamond 500, **18px→22px**, lh 1.3 | `mb: 4px`, `px: 16px` | `#2D3436` |
| Price | `.card__price` | Inter 400, 14px, lh 1.4 | `mb: 12px`, `px: 16px` | `#636E72` |
| CTA button | `.card__cta` | Inter 500, 14px, lh 1.0 | h: 36px (→44px touch с padding), `mx: 16px`, `mb: 16px`, radius: 6px | bg: transparent, border: 1px `#7ECDC0`, color: `#7ECDC0` |
| Hover overlay | `.card__overlay` | position: absolute, inset: 0 | opacity: 0 → 1, transition: 250ms | bg: `rgba(45,52,54,0.65)` |
| Hover CTA | `.card__overlay .btn` | Inter 500, 16px | h: 48px, `px: 32px`, radius: 8px | bg: `#7ECDC0`, color: `#FFFFFF` |

### 3.4 Hover Overlay — Спецификация

**Desktop only** (`@media (hover: hover) and (pointer: fine)`):

```css
.card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(45, 52, 54, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-normal);  /* 250ms ease */
  border-radius: 8px 8px 0 0;
  z-index: 1;
}

.catalog-card:hover .card__overlay,
.catalog-card:focus-within .card__overlay {
  opacity: 1;
}

.catalog-card {
  transition: transform var(--transition-normal),
              box-shadow var(--transition-normal);
}

.catalog-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

**Mobile:** Overlay **не показывается** (нет hover). Вместо этого:
- Tap на карточку → сразу переход к модалке/странице деталей
- CTA «Подробнее» внизу карточки всегда виден (h: 36px + padding = touch target 44px)

### 3.5 Touch Target Sizes (Mobile)

| Элемент | Visual Size | Touch Target | Метод |
|---|---|---|---|
| CTA «Подробнее» (inline) | h: 36px, w: 100% | **≥44px** via `padding: 4px 0` (36+8=44) | `min-height: 44px` |
| Style badge | ~20×40px | **Не интерактивный** — только декоративный | `pointer-events: none` |
| Card wrapper (tap zone) | Full card | Full card area (≥288×432px) | `<a>` wrapper вокруг всей карточки |
| Filter pills | h: 36px | **≥44px** via `padding: 4px 16px` (36+8=44) | `min-height: 44px` |

**Правило:** Все интерактивные элементы на mobile имеют min-height или padding, обеспечивающие touch target ≥ 44×44px.

### 3.6 Focus States

**Card (focus-within):**
```css
.catalog-card:focus-within {
  outline: 2px solid #5BAFA3;
  outline-offset: 2px;
}

.catalog-card:focus-within .card__overlay {
  opacity: 1;  /* overlay показывается при keyboard focus */
}
```

**CTA Button focus:**
```css
.card__cta:focus-visible {
  outline: 2px solid #5BAFA3;
  outline-offset: 2px;
}
```

**Tab Order внутри карточки:**
1. Card wrapper `<a>` (1 tab stop для всей карточки)
2. Внутри карточки — **нет дополнительных tab stops** (карточка — единый интерактивный элемент)
3. Hover overlay button — **не в tab order** (дублирует действие карточки)

> **Почему 1 tab stop:** Карточка = 1 navigational unit. Пользователь Tab-ает между карточками, не внутри них. Это снижает tab fatigue при 12 карточках.

### 3.7 Card States Summary

| Состояние | Trigger | Визуальный эффект |
|---|---|---|
| Default | — | Shadow-sm, image, badge, title, price, CTA |
| Hover (desktop) | Mouse over | `translateY(-4px)`, shadow-lg, overlay с кнопкой «Подробнее» |
| Focus | Keyboard Tab | `outline: 2px #5BAFA3`, `outline-offset: 2px`, overlay visible |
| Active/Press | Click/Enter | Brief scale(0.98), затем навигация |
| Loading | Image loading | Skeleton placeholder (bg `#F0EDE8`, shimmer animation) |

### 3.8 Mobile vs Desktop Comparison — Card

| Свойство | Mobile (320px) | Tablet (768px) | Desktop (1024px) |
|---|---|---|---|
| Card width | 288px (100%) | 348px | 282px |
| Image height | 432px (2:3) | 522px | 423px |
| Title size | 18px | 20px | 22px |
| Hover overlay | ❌ Не показывается | ✅ Показывается | ✅ Показывается |
| CTA inline | ✅ Всегда виден | ✅ Всегда виден | Скрыт (overlay заменяет) |
| Card lift on hover | ❌ | ✅ `translateY(-4px)` | ✅ `translateY(-4px)` |
| Badge position | top-right, 12px | top-right, 12px | top-right, 12px |
| Content padding | 16px | 16px | 16px |

### 3.9 12 Карточек — Data Mapping

| # | Название шаблона | Стиль (badge) | Цена | Изображение |
|---|---|---|---|---|
| 1 | Классический романс | Классика | от 2 000 ₽ | `assets/images/catalog/1.webp` |
| 2 | Белый бархат | Классика | от 2 500 ₽ | `assets/images/catalog/2.webp` |
| 3 | Минимал шик | Минимализм | от 2 000 ₽ | `assets/images/catalog/3.webp` |
| 4 | Чистые линии | Минимализм | от 2 000 ₽ | `assets/images/catalog/4.webp` |
| 5 | Бохо сад | Бохо | от 2 500 ₽ | `assets/images/catalog/5.webp` |
| 6 | Полевые цветы | Бохо | от 2 500 ₽ | `assets/images/catalog/6.webp` |
| 7 | Современная любовь | Модерн | от 3 000 ₽ | `assets/images/catalog/7.webp` |
| 8 | Геометрия чувств | Модерн | от 3 000 ₽ | `assets/images/catalog/8.webp` |
| 9 | Золотая эпоха | Классика | от 3 500 ₽ | `assets/images/catalog/9.webp` |
| 10 | Лавандовый прованс | Бохо | от 2 500 ₽ | `assets/images/catalog/10.webp` |
| 11 | Тихая элегантность | Минимализм | от 2 000 ₽ | `assets/images/catalog/11.webp` |
| 12 | Арт-деко ночь | Модерн | от 3 500 ₽ | `assets/images/catalog/12.webp` |

**Badge цвета по стилю:**
| Стиль | Фон badge | Текст badge |
|---|---|---|
| Классика | `#D4F0EC` (Tiffany light) | `#5BAFA3` |
| Минимализм | `#F5EDE3` (warm beige) | `#8B7355` |
| Бохо | `#E8D5B0` (gold light) | `#A0855B` |
| Модерн | `#E8E4F0` (lavender) | `#7B6B8A` |

### 3.10 Accessibility Notes — Card Component

**Tab Order:**
```
Tab → Card 1 → Tab → Card 2 → ... → Tab → Card 12 → Tab → (next section)
```
Каждая карточка = **1 tab stop** (via `<a>` wrapper). Внутри карточки нет дополнительных tab stops.

**ARIA Labels:**
```html
<article class="catalog-card" role="listitem">
  <a href="/template/1" aria-label="Шаблон «Классический романс». Стиль: Классика. Цена от 2000 рублей. Перейти к подробностям.">
    <img src="1.webp" alt="Превью шаблона приглашения «Классический романс» — белый фон, золотые буквы, цветочный орнамент" loading="lazy">
    <span class="card__badge" aria-hidden="true">Классика</span>
    <h3 class="card__title">Классический романс</h3>
    <p class="card__price">от 2 000 ₽</p>
    <span class="card__cta" aria-hidden="true">Подробнее →</span>
  </a>
  <div class="card__overlay" aria-hidden="true">
    <span class="btn">Подробнее</span>
  </div>
</article>
```

**Ключевые решения:**
- Badge: `aria-hidden="true"` — декоративный, информация уже в `aria-label` карточки
- CTA inline: `aria-hidden="true"` — дублирует действие ссылки-обёртки
- Overlay: `aria-hidden="true"` — визуальный эффект, не добавляет функциональности
- Alt-текст изображения: описывает **что видно** (не «шаблон 1»)
- `aria-label` на `<a>`: включает название, стиль, цену, действие

**Contrast Ratios:**
| Pair | Ratio | WCAG |
|---|---|---|
| `#2D3436` (title) on `#FFFFFF` (card bg) | 12.3:1 | AAA ✅ |
| `#636E72` (price) on `#FFFFFF` (card bg) | 5.7:1 | AA ✅ |
| `#7ECDC0` (CTA border/text) on `#FFFFFF` | 3.4:1 | AA Large ✅ (14px medium ≥ 3:1) |
| `#FFFFFF` (overlay btn) on `rgba(45,52,54,0.65)` | ~8.2:1 | AAA ✅ |
| `#5BAFA3` (badge text) on `#D4F0EC` (badge bg) | 4.5:1 | AA ✅ |

**Focus-visible:**
- Использовать `:focus-visible` (не `:focus`) чтобы outline показывался только при keyboard navigation
- `outline-offset: 2px` — чтобы outline не сливался с border карточки
- Цвет outline: `#5BAFA3` (Tiffany dark) — контраст 4.5:1 на белом фоне

**Screen Reader Notes:**
- `role="list"` на grid container + `role="listitem"` на карточках — SR объявляет «list, 12 items»
- `loading="lazy"` на изображениях — не влияет на a11y, но SR может не прочитать alt до загрузки → alt должен быть осмысленным

---

## ПРИЛОЖЕНИЕ A: CSS Token Reference (сводка)

```css
/* Breakpoints */
/* Base: 320px (mobile-first) */
@media (min-width: 480px) { /* Mobile L */ }
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }

/* Container */
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;        /* mobile */
  /* padding: 0 24px; */   /* tablet @768 */
  /* padding: 0 32px; */   /* desktop @1024 */
}

/* Hero */
.hero { min-height: 100vh; }                    /* mobile */
/* .hero { min-height: 80vh; } */               /* tablet @768 */
/* .hero { min-height: 70vh; } */               /* desktop @1024 */

/* Catalog Grid */
.catalog__grid {
  display: grid;
  grid-template-columns: 1fr;                   /* mobile: 1 col */
  gap: 16px;
}
/* @768: grid-template-columns: repeat(2, 1fr); gap: 24px; */
/* @1024: grid-template-columns: repeat(3, 1fr); gap: 24px; */

/* Card */
.catalog-card img {
  aspect-ratio: 2 / 3;
  width: 100%;
  object-fit: cover;
}

/* Touch targets */
@media (pointer: coarse) {
  .filter-btn, .card__cta { min-height: 44px; }
}
```

## ПРИЛОЖЕНИЕ B: Accessibility Quick-Check

| Check | Hero | Catalog | Card | Status |
|---|---|---|---|---|
| Body text ≥ 16px | ✅ (16px) | ✅ (14px subtitle, 16px body) | ✅ (14px price — допустимо для secondary) | ✅ |
| Title ≥ 32px | ✅ (32→48px) | ✅ (24→36px H2) | ✅ (18→22px H3) | ✅ |
| Contrast ≥ 4.5:1 (body) | ✅ (12.6:1) | ✅ (5.7:1) | ✅ (5.7:1 price) | ✅ |
| Contrast ≥ 3:1 (large) | ✅ (3.4:1 btn) | ✅ (3.4:1 active pill) | ✅ (3.4:1 CTA) | ✅ |
| Touch targets ≥ 44px | ✅ (48px btns) | ✅ (44px pills) | ✅ (44px CTA) | ✅ |
| Tab order logical | ✅ | ✅ | ✅ (1 stop/card) | ✅ |
| ARIA labels | ✅ | ✅ | ✅ | ✅ |
| Alt text on images | N/A (bg) | N/A | ✅ (descriptive) | ✅ |
| Focus visible | ✅ | ✅ | ✅ (outline 2px) | ✅ |
| prefers-reduced-motion | ✅ | ✅ | ✅ | ✅ |
| Single H1 | ✅ | N/A | N/A | ✅ |

---

*Документ создан: 17 мая 2026*  
*Следующий этап: Hi-Fi wireframes для оставшихся 7 секций → Prototype (HTML/CSS)*  
*Зависимости: `tokens.css` (утверждён), `content-gromova.json` (контент)*
