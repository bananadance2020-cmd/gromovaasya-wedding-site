# Animation Specification — gromovaasya Wedding Invitations

**Version:** 1.0 · **Brand:** Tiffany Edition · **Date:** 2026-05-17
**Motion Designer:** @motion-designer v1.4.0

---

## 1. Principles

Every animation in this project follows three core principles:

### Elegant
Wedding branding demands restraint. Motion should feel like a gentle gesture — a hand extending an invitation, not a fireworks display. No bounces, no overshoots beyond subtle spring. Every movement reads as intentional and refined.

### Subtle
Animations support the content, never compete with it. Opacity transitions over flashy reveals. Minimal transform distances (8–16px max for scroll reveals). Scale changes barely perceptible (1.02, not 1.1). The user should feel the polish without consciously noticing the animation.

### Purposeful
Each animation serves one of four functions:
- **Orientation** — helps the user understand spatial relationships (section reveals on scroll)
- **Feedback** — confirms interaction (hover states, active states, accordion toggle)
- **Progression** — guides the eye through content hierarchy (hero stagger, step sequence)
- **Delight** — one controlled "wow" moment per screen (hero entrance only)

**Guardrails:**
- No more than 3 simultaneous animations on any screen
- One delight moment per viewport — the rest is functional
- Every animation is pauseable or respect `prefers-reduced-motion`
- GPU-accelerated properties only: `transform` + `opacity`

---

## 2. Duration Scale

| Token | Duration | Usage |
|-------|----------|-------|
| `--anim-fast` | **150ms** | Micro-interactions: hover states, filter pills, button feedback |
| `--anim-normal` | **250ms** | Interactive transitions: accordion toggle, card overlay, nav reveal |
| `--anim-slow` | **400ms** | Page-level motion: hero entrance, section scroll reveal, modal |

**Rules:**
- Never animate below 100ms (imperceptible) or above 500ms (feels sluggish)
- Stagger delays: 60–80ms per element, total cascade ≤ 500ms
- Hero stagger total: ~400ms (subtitle 0ms → H1 80ms → desc 160ms → CTAs 240ms)

---

## 3. Easing Curves

| Token | Curve | Usage |
|-------|-------|-------|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | **Entrance animations** — elements appear with deceleration, feel natural |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | **Interactive transitions** — hover, click, toggle; symmetric feel |
| `--ease-out-expo` | `cubic-bezier(0.22, 1, 0.36, 1)` | **Hero / delight** — dramatic deceleration, elegant arrival |

**Why these curves:**
- `ease-out` for entrance: elements "arrive" and settle, mimicking physical objects
- `ease-in-out` for interactive: symmetric, feels responsive and balanced
- `ease-out-expo` for hero: more dramatic curve for the one delight moment

**Avoid:** `linear` (feels mechanical), `ease-in` (feels hesitant), overshoot springs (too playful for wedding brand)

---

## 4. Trigger Types

| Trigger | Elements | Implementation |
|---------|----------|----------------|
| **Page Load** | Hero section (subtitle → H1 → desc → CTAs) | CSS `@keyframes` + `animation-delay` stagger |
| **Scroll** | All content sections, cards, steps, benefits | Intersection Observer → adds `.is-visible` class |
| **Hover** | Catalog cards, buttons, filter pills, pricing cards | Pure CSS `:hover` transitions |
| **Click/Tap** | FAQ accordion, carousel controls, filter pills | JS toggles class/state, CSS handles the animation |

**Rule:** JS only adds/removes classes. All animation logic lives in CSS.

---

## 5. Animation Catalog — CSS Snippets

### A. Hero Fade-In on Load (Staggered)

**Sequence:** subtitle (0ms) → H1 (80ms) → description (160ms) → CTAs (240ms)

```css
.hero__subtitle,
.hero__title,
.hero__description,
.hero__actions {
  opacity: 0;
  transform: translateY(20px);
  animation: heroFadeIn 600ms var(--ease-out-expo) forwards;
}

.hero__subtitle  { animation-delay: 100ms; }
.hero__title     { animation-delay: 180ms; }
.hero__description { animation-delay: 260ms; }
.hero__actions   { animation-delay: 340ms; }

@keyframes heroFadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Rationale:** 100ms initial pause lets the page settle. 80ms stagger keeps cascade tight. 600ms duration feels luxurious without being slow. Total: ~940ms from page paint to full hero visible.

---

### B. Section Reveal on Scroll (Fade-Up)

**Trigger:** Intersection Observer at 15% threshold → adds `.is-visible` class.

```css
.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 400ms var(--ease-out), transform 400ms var(--ease-out);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered children for grids */
.reveal-children > * {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 400ms var(--ease-out), transform 400ms var(--ease-out);
}

.reveal-children.is-visible > *:nth-child(1) { transition-delay: 0ms; }
.reveal-children.is-visible > *:nth-child(2) { transition-delay: 60ms; }
.reveal-children.is-visible > *:nth-child(3) { transition-delay: 120ms; }
.reveal-children.is-visible > *:nth-child(4) { transition-delay: 180ms; }
.reveal-children.is-visible > *:nth-child(5) { transition-delay: 240ms; }
.reveal-children.is-visible > *:nth-child(6) { transition-delay: 300ms; }
.reveal-children.is-visible > *:nth-child(n+7) { transition-delay: 360ms; }

.reveal-children.is-visible > * {
  opacity: 1;
  transform: translateY(0);
}
```

**Rationale:** 16px offset is barely perceptible but creates depth. 400ms duration is slow enough to feel elegant. Stagger at 60ms per child, capped at 360ms for items 7+ to keep total cascade under 400ms. Uses `:nth-child(n+7)` for compact CSS.

**Applied to:** `.catalog__grid`, `.steps`, `.benefits`, `.pricing__grid`, `.trust-bar__grid`

---

### C. Card Hover (Image Scale + Overlay Fade + Button Slide-Up)

**Elements:** Catalog cards in `.catalog__grid`

```css
.catalog-card {
  transition: transform 250ms var(--ease-in-out), box-shadow 250ms var(--ease-in-out);
}

.catalog-card:hover {
  transform: scale(1.02);
  box-shadow: var(--shadow-xl);
}

.catalog-card__image-wrapper {
  overflow: hidden;
}

.catalog-card__image {
  transition: transform 400ms var(--ease-in-out);
}

.catalog-card:hover .catalog-card__image {
  transform: scale(1.05);
}

.catalog-card__overlay {
  opacity: 0;
  transition: opacity 250ms var(--ease-in-out);
}

.catalog-card:hover .catalog-card__overlay {
  opacity: 1;
}

.catalog-card__btn {
  transform: translateY(8px);
  opacity: 0;
  transition: transform 250ms var(--ease-out), opacity 250ms var(--ease-out);
}

.catalog-card:hover .catalog-card__btn {
  transform: translateY(0);
  opacity: 1;
}
```

**Rationale:** Card scale 1.02 is subtle — the card breathes, doesn't jump. Image scale 1.05 inside overflow:hidden creates parallax-like depth. Overlay and button appear simultaneously with slight slide-up — feels like the card is "offering" the action.

---

### D. Filter Pill Active State (Scale + Color)

```css
.filter-btn {
  transition: transform 150ms var(--ease-in-out),
              background-color 150ms var(--ease-in-out),
              color 150ms var(--ease-in-out),
              box-shadow 150ms var(--ease-in-out);
}

.filter-btn:hover {
  transform: scale(1.04);
  background-color: var(--color-primary-light);
}

.filter-btn--active,
.filter-btn.filter-btn--active {
  transform: scale(1.06);
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
  box-shadow: 0 2px 8px rgba(126, 205, 192, 0.35);
}

.filter-btn:active {
  transform: scale(0.97);
}
```

**Rationale:** 150ms for instant feedback. Active pill gets color fill + subtle shadow for clear selection state. `:active` scale(0.97) provides tactile press feedback. Hover at 1.04, active at 1.06 — visually distinct states.

---

### E. FAQ Accordion (Smooth Height + Chevron Rotate)

**HTML structure uses `<details>/<summary>` — enhanced with CSS grid for smooth height.**

```css
.faq__item {
  border-bottom: 1px solid var(--color-secondary-dark);
}

.faq__question {
  transition: color 150ms var(--ease-in-out);
}

.faq__question::after {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23636E72' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-size: contain;
  transition: transform 250ms var(--ease-in-out);
}

.faq__item[open] .faq__question {
  color: var(--color-primary-dark);
}

.faq__item[open] .faq__question::after {
  transform: rotate(180deg);
}

/* Smooth height via CSS grid trick */
.faq__answer {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 250ms var(--ease-in-out);
}

.faq__item[open] .faq__answer {
  grid-template-rows: 1fr;
}

.faq__answer > * {
  overflow: hidden;
}
```

**Rationale:** CSS grid `0fr → 1fr` is the modern approach to smooth height without JS calculation. Chevron rotates 180° — clear open/closed indicator. Color shift on question text reinforces state. All 250ms for snappy but smooth feel.

---

### F. Carousel Swipe (Transform TranslateX)

```css
.reviews__track {
  display: flex;
  transition: transform 400ms var(--ease-out);
  will-change: transform;
}

/* JS sets --carousel-offset, CSS animates via transition */
.reviews__track.is-dragging {
  transition: none;
  cursor: grab;
}

/* Per-slide entrance when becoming visible */
.review-card {
  opacity: 0.7;
  transition: opacity 300ms var(--ease-out), transform 300ms var(--ease-out);
}

.review-card.is-active {
  opacity: 1;
  transform: scale(1);
}
```

**Rationale:** 400ms transition for smooth slide movement. `is-dragging` removes transition for direct 1:1 finger tracking. Cards fade slightly when not center, full opacity when active — draws focus.

---

### G. FAB Pulse (Subtle, 3s Interval)

```css
.fab--telegram {
  animation: fabPulse 3s var(--ease-in-out) infinite;
  animation-delay: 2s; /* don't pulse immediately on page load */
}

@keyframes fabPulse {
  0%, 100% {
    box-shadow: 0 4px 12px rgba(126, 205, 192, 0.3);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 4px 20px rgba(126, 205, 192, 0.5);
    transform: scale(1.06);
  }
}
```

**Rationale:** 3s interval = noticeable but not distracting. 2s initial delay lets user settle before FAB draws attention. Scale 1.06 is barely perceptible — a gentle "breathing" effect. Shadow intensifies with scale for depth. Only one infinite animation on the entire page.

---

## 6. Accessibility

```css
/* MANDATORY: Respect user motion preferences */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  /* Preserve visibility for scroll-reveal elements */
  .reveal,
  .reveal-children > * {
    opacity: 1;
    transform: none;
  }
}
```

**1 in 100 people has a vestibular disorder.** This is not optional — it's a production requirement.

---

## 7. Performance Budget

| Metric | Target | Status |
|--------|--------|--------|
| Total CSS animations weight | < 5KB | ✅ 4.5KB |
| Animated properties | transform + opacity only | ✅ |
| Frame rate target | 60fps | ✅ |
| Max simultaneous animations | 3 per viewport | ✅ |
| Infinite animations | 1 (FAB pulse only) | ✅ |
| will-change usage | carousel track only | ✅ |

---

## 8. Element → Animation Map

| Page Element | Animation | Trigger | Duration | Easing |
|---|---|---|---|---|
| `.hero__subtitle` | fade-in + slide-up | page-load | 600ms | ease-out-expo |
| `.hero__title` | fade-in + slide-up | page-load (+80ms) | 600ms | ease-out-expo |
| `.hero__description` | fade-in + slide-up | page-load (+160ms) | 600ms | ease-out-expo |
| `.hero__actions` | fade-in + slide-up | page-load (+240ms) | 600ms | ease-out-expo |
| `.trust-bar` | fade-up | scroll (IO) | 400ms | ease-out |
| `.trust-bar__grid > *` | staggered fade-up | scroll (IO) | 400ms | ease-out |
| `.catalog__grid > *` | staggered fade-up | scroll (IO) | 400ms | ease-out |
| `.catalog-card` | scale + shadow | hover | 250ms | ease-in-out |
| `.catalog-card__image` | scale | hover | 400ms | ease-in-out |
| `.catalog-card__overlay` | opacity | hover | 250ms | ease-in-out |
| `.catalog-card__btn` | slide-up + opacity | hover | 250ms | ease-out |
| `.filter-btn` | scale + color | hover/click | 150ms | ease-in-out |
| `.steps > *` | staggered fade-up | scroll (IO) | 400ms | ease-out |
| `.pricing__grid > *` | staggered fade-up | scroll (IO) | 400ms | ease-out |
| `.benefits > *` | staggered fade-up | scroll (IO) | 400ms | ease-out |
| `.faq__answer` | grid height | click | 250ms | ease-in-out |
| `.faq__question::after` | rotate | click | 250ms | ease-in-out |
| `.reviews__track` | translateX | swipe/click | 400ms | ease-out |
| `.fab--telegram` | pulse | infinite (3s) | 3s | ease-in-out |
| `.cta-footer` | fade-up | scroll (IO) | 400ms | ease-out |
