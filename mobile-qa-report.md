# Mobile QA Report — Фаза 3: Mobile Polish

**Проект:** gromovaasya-wedding-site  
**Дата:** 2026-05-17  
**Viewport:** 320px / 480px  

---

## 🔍 Найденные проблемы

### Критические

| # | Проблема | Элемент | Статус |
|---|----------|---------|--------|
| 1 | Горизонтальный скролл не предотвращён на уровне `html` | `html` | ✅ Исправлено |
| 2 | `.hero__title` font-size 40px (fs-3xl) — потенциальный overflow на 320px | `.hero__title` | ✅ Исправлено |
| 3 | Нет `word-break: break-word` для длинных заголовков | `.hero__title` | ✅ Исправлено |
| 4 | `.catalog__filters` — `flex-wrap: wrap` конфликтует с `overflow-x: auto`, фильтры переносились на 2-3 строки вместо горизонтального скролла | `.catalog__filters` | ✅ Исправлено |

### Улучшения

| # | Проблема | Элемент | Статус |
|---|----------|---------|--------|
| 5 | Hero min-height 80vh + padding 64px = слишком много контента на 320px (напр. iPhone SE: 568px viewport) | `.hero` | ✅ Исправлено |
| 6 | FAB кнопка 56×56px слишком большая для 320px, перекрывает контент | `.fab` | ✅ Исправлено |
| 7 | Нет safe-area-inset для устройств с вырезами (iPhone 14+) | `.container`, `.fab` | ✅ Исправлено |

### Уже было правильно (✅ PASS)

| # | Проверка | Результат |
|---|----------|-----------|
| a | Pricing grid: 1 колонка на mobile (default `grid-template-columns: 1fr`) | ✅ OK |
| b | Steps (how-it-works): 1 колонка на mobile | ✅ OK |
| c | Benefits (why-us): 1 колонка на mobile | ✅ OK |
| d | Header: бургер-меню работает, nav скрыт по умолчанию (`display: none`), JS toggle корректен | ✅ OK |
| e | Form: input поля `width: 100%`, ограничены контейнером | ✅ OK |
| f | `.card__overlay`: hover только на десктопе через `@media (hover: hover)` | ✅ OK |
| g | `.catalog__filters`: `-webkit-overflow-scrolling: touch` уже был | ✅ OK |
| h | Trust-bar: 2 колонки на mobile — адекватно для 320px | ✅ OK |
| i | Catalog grid: 1 колонка на mobile, 2 колонки от 480px | ✅ OK |

---

## 🛠 Что исправлено

### 1. `css/reset.css`
```css
html {
  overflow-x: hidden;  /* ← добавлено */
}
```

### 2. `css/main.css` — Hero title (320px)
- Размер шрифта заголовка уменьшен с `fs-3xl` (40px) до `fs-2xl` (32px) на mobile
- С 480px возвращается `fs-3xl`
- Добавлены `word-break: break-word` и `overflow-wrap: break-word`

```css
.hero__title {
  font-size: var(--fs-2xl);  /* 32px вместо 40px */
  word-break: break-word;
  overflow-wrap: break-word;
}

@media (min-width: 480px) {
  .hero__title {
    font-size: var(--fs-3xl);
  }
}
```

### 3. `css/main.css` — Hero min-height (320px)
- На mobile: `min-height: 70vh`, `padding: var(--space-2xl) 0`
- С 480px: `min-height: 80vh`, `padding: var(--space-3xl) 0`

### 4. `css/main.css` — Catalog filters horizontal scroll
- Mobile: `flex-wrap: nowrap` + `justify-content: flex-start` → горизонтальный скролл
- Desktop (768px+): `flex-wrap: wrap` + `justify-content: center` → как было

```css
.catalog__filters {
  flex-wrap: nowrap;          /* ← было wrap */
  justify-content: flex-start; /* ← было center */
}

@media (min-width: 768px) {
  .catalog__filters {
    justify-content: center;
    flex-wrap: wrap;
    overflow-x: visible;
  }
}
```

### 5. `css/main.css` — FAB кнопка на 320px
- Уменьшена с 56×56px до 48×48px на экранах < 480px
- Смещение уменьшено с 32px до 16px от краёв
- Добавлены `safe-area-inset` для устройств с вырезами

### 6. `css/main.css` — Container safe-area-inset
```css
.container {
  padding-left: max(var(--container-padding), env(safe-area-inset-left, 0px));
  padding-right: max(var(--container-padding), env(safe-area-inset-right, 0px));
}
```

---

## 📋 Рекомендации для 320px

### Высокий приоритет
1. **Тестировать на реальных устройствах** — особенно iPhone SE (320×568) и Galaxy Fold (280px в сложенном виде)
2. **Проверить meta viewport** — убедиться что `<meta name="viewport" content="width=device-width, initial-scale=1.0">` присутствует (✅ уже есть)
3. **Тестировать формы** — при фокусе на input виртуальная клавиатура не должна перекрывать поле отправки

### Средний приоритет
4. **Добавить `padding-bottom` к footer** для компенсации FAB на 320px — сейчас FAB может перекрывать ссылки в футере
5. **Проверить карточки каталога** — на 320px одна колонка, но aspect-ratio 2/3 делает карточку высокой (~420px). Убедиться что это не мешает скроллу
6. **Модалка на 320px** — `.modal__content` имеет `max-width: 500px` и `padding: var(--space-xl)` (32px). На 320px это оставляет 256px для контента — проверить что достаточно

### Низкий приоритет
7. **Рассмотреть уменьшение логотипа** в header на 320px — "Анастасия Громова" при fs-lg (20px) + бургер может быть тесно
8. **Добавить `scroll-padding-top`** для sticky header, чтобы якорные ссылки не прятались под хедером:
   ```css
   html {
     scroll-padding-top: 80px; /* высота header */
   }
   ```
9. **Тестировать landscape mode** на 320px устройствах (568×320) — hero при 70vh = 224px высоты, может быть слишком мало

---

## 📊 Breakpoint summary

| Breakpoint | Что меняется |
|------------|-------------|
| **< 480px** (mobile) | 1 колонка везде, hero 70vh, title 32px, filters горизонтальный скролл, FAB 48px |
| **480px+** | Catalog grid 2 колонки, hero 80vh, title 40px, form__row 2 колонки |
| **768px+** | Catalog grid 3 колонки, pricing 3 колонки, steps 4 колонки, benefits 4 колонки, trust-bar 4 колонки, бургер скрыт, nav видим, filters wrap |
| **1024px+** | (нет специфических правил, используется 768px+ стили) |
