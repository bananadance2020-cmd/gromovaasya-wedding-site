# 🎨→💻 Handoff Package: Фаза 2 → Фаза 3

> **Проект:** gromovaasya — Свадебные приглашения  
> **Статус:** Дизайн завершён ✅ | Готов к вёрстке  
> **Дата:** 17 мая 2026  
> **Контакт заказчика:** @gromovaasya (Telegram)

---

## 📦 Что передано

### Каталог мокапов (12 SVG, 4 стиля × 3)

| Файл | Стиль | Размер | Описание |
|------|-------|--------|----------|
| `classic-elegance.svg` | Классика | 5.5 KB | Золотые акценты, каллиграфия Great Vibes, орнаментальная рамка |
| `minimal-white.svg` | Минимализм | 3.4 KB | Белый фон, тонкая серая рамка, Cormorant + Inter, максимум воздуха |
| `boho-garden.svg` | Бохо | 6.1 KB | Ботанические элементы (эвкалипт, листья), зелёные тона |
| `modern-geometry.svg` | Модерн | 4.6 KB | Геометрические блоки, контрастный чёрный блок, tiffany + gold |
| `vintage-romance.svg` | Классика | 7.1 KB | Состаренный фон, двойная рамка, викторианские уголки |
| `minimal-line.svg` | Минимализм | 2.5 KB | Ультра-минимализм: 2 линии + имена + дата |
| `boho-dream.svg` | Бохо | 8.0 KB | Макраме, ловец снов, перья, терракотовые тона |
| `modern-art.svg` | Модерн | 6.2 KB | Абстрактные мазки, живописные формы, галерейный стиль |
| `royal-gold.svg` | Классика | 8.0 KB | Тёмный фон, золотая фольга, корона, тиснение |
| `minimal-scandi.svg` | Минимализм | 5.9 KB | Светлый фон, веточка ели, натуральные оттенки |
| `boho-rustic.svg` | Бохо | 8.1 KB | Крафт-текстура, полевые цветы, бечёвка |
| `modern-luxury.svg` | Модерн | 7.5 KB | Мрамор, хром-градиенты, геометрия, чёрно-белый |

**Общее для всех мокапов:**
- `viewBox="0 0 400 600"`
- Phone mockup silhouette с notch и home indicator
- Лёгкая перспектива (rotate -0.5°…-1.5°)
- Drop shadow filter
- Текст: «Анна & Дмитрий», «15 августа 2026»

### Графические активы

| Файл | Размер | Назначение |
|------|--------|------------|
| `og-image-1200x630.svg` | 7.2 KB | Превью для Telegram/WhatsApp/соцсетей |
| `favicon.svg` | 1.2 KB | Favicon 32×32, буква «А» + сердце |
| `wordmark.svg` | 0.9 KB | Логотип-текст «Анастасия Громова» |
| `review-1.svg` → `review-4.svg` | 3.2-3.4 KB | Placeholder аватары отзывов (ЕК, МС, АП, ДВ) |

### Иконки (8 SVG, line style, 24×24, stroke 1.5)

| Файл | Описание |
|------|----------|
| `icon-unique.svg` | Палитра + кисть (уникальный дизайн) |
| `icon-speed.svg` | Часы + молния (быстро) |
| `icon-price.svg` | Ценник с ₽ (честная цена) |
| `icon-support.svg` | Чат + сердце (поддержка) |
| `icon-filter.svg` | Воронка-фильтр |
| `icon-heart.svg` | Сердце |
| `icon-telegram.svg` | Бумажный самолётик |
| `icon-arrow.svg` | Стрелка вниз |

### Декоративные элементы

| Файл | Размер | Описание |
|------|--------|----------|
| `divider-floral.svg` | 200×20 | Вьющаяся лоза с листьями и бутонами |
| `divider-dots.svg` | 120×12 | 5 точек + 4 акцентных |
| `pattern-botanical.svg` | 100×100 | Ботанический паттерн (tileable) |
| `pattern-geometric.svg` | 100×100 | Ромбовая сетка с диагоналями |

---

## 🎨 Палитра (из `css/tokens.css`)

```
Tiffany:  #7ECDC0 (500), #A0E2D6 (300), #4A9E91 (700), #2D6B62 (900)
Gold:     #C9A96E (500), #DCC59A (300)
Ivory:    #FDFBF9 (50), #F5EDE3 (100)
Neutral:  #C5C0B6 (300), #9A958C (500), #1A1816 (900)
```

## 🔤 Типографика

| Роль | Шрифт | Подключение |
|------|-------|-------------|
| Заголовки | Cormorant Garamond (400, 600) | Google Fonts |
| Текст | Inter (300, 400, 500) | Google Fonts |
| Акцентный скрипт | Great Vibes | Google Fonts (локально) |

## 📱 Breakpoints

| Точка | Значение | Что меняется |
|-------|----------|--------------|
| Mobile | 320px | 1 колонка, hero center, 16px заголовки |
| Small | 480px | 2 колонки каталог, форма 2 колонки |
| Tablet | 768px | 3 колонки каталог, desktop nav, hero left-align |
| Desktop | 1024px | 4 колонки benefits/steps |

## 🏗️ Структура проекта

```
gromovaasya-wedding-site/
├── index.html          # Семантический скелет (10 секций)
├── css/
│   ├── reset.css       # Reset + base (1.9 KB)
│   ├── tokens.css      # Design tokens (2.9 KB)
│   ├── main.css        # Все компоненты + секции (20.8 KB)
│   └── animations.css  # 7 анимаций (4.7 KB)
├── js/
│   ├── main.js          # Бургер, scroll, header (1.6 KB)
│   ├── catalog-data.js  # 12 шаблонов JSON (3.6 KB)
│   ├── catalog-filter.js # Рендер + фильтрация (2.2 KB)
│   ├── carousel.js      # Отзывы scroll (0.8 KB)
│   ├── modal.js         # Template details (2.4 KB)
│   ├── accordion.js     # FAQ (0.5 KB)
│   ├── form-validation.js # Формы (2.2 KB)
│   └── animation-utils.js # Scroll reveal (2.1 KB)
├── assets/
│   ├── images/
│   │   ├── catalog/     # 12 SVG мокапов
│   │   ├── testimonials/ # 4 SVG placeholder
│   │   └── og-image-1200x630.svg
│   ├── icons/           # 8 SVG иконок
│   ├── decorations/     # 4 SVG декора
│   ├── logo/            # favicon + wordmark
│   └── brand/           # brand-guidelines, specs
└── README.md
```

---

## ✅ Чеклист приёмки для кодера

### Must-have (P0)
- [ ] Все 12 SVG мокапов подключены в каталоге
- [ ] Фильтрация по стилю (classic/minimal/boho/modern) работает
- [ ] Модалка открывается по клику на карточку
- [ ] Форма отправляется (Formspree или Telegram fallback)
- [ ] Бургер-меню работает на mobile
- [ ] Smooth scroll для якорных ссылок
- [ ] OG-image + favicon подключены в `<head>`
- [ ] `prefers-reduced-motion` отключает анимации

### Nice-to-have (P1)
- [ ] Scroll reveal анимации (IntersectionObserver)
- [ ] Карусель отзывов с кнопками ← →
- [ ] FAB-кнопка Telegram с pulse
- [ ] Sticky header с тенью при скролле
- [ ] Focus trap в модалке

### Performance gates
- [ ] CSS < 40 KB (текущий: 29.4 KB ✅)
- [ ] JS < 25 KB (текущий: 15.0 KB ✅)
- [ ] Lighthouse Performance ≥ 88
- [ ] Lighthouse Accessibility ≥ 90

---

## 🚀 Сборка и деплой

```bash
# 1. Открыть index.html в браузере (не нужен сервер)
open index.html

# 2. Проверить на mobile (Chrome DevTools → toggle device toolbar)

# 3. Lighthouse audit
# Chrome DevTools → Lighthouse → Mobile → Performance + Accessibility + SEO

# 4. Деплой на GitHub Pages
git add -A
git commit -m "Фаза 3: Вёрстка завершена"
git push origin main
# Settings → Pages → Deploy from main branch
```

---

## ⚠️ Важно

1. **SVG → WebP для продакшна:** SVG-мокапы — это заглушки. Для продакшна заменить на реальные фото приглашений в WebP 400×600px.
2. **Formspree endpoint:** Заменить `FORMSPREE_ENDPOINT` в `index.html` на реальный URL от Formspree.io.
3. **Яндекс.Метрика:** Добавить счётчик перед `</body>` с `defer: 3s` для performance.
4. **Great Vibes:** Подключить локально (`@font-face`) или заменить на Cormorant Garamond italic для скорости.

---

**Дизайн готов. Можно кодить.** 🎨→💻
