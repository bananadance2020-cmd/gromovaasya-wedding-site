# 💌 gromovaasya — Свадебные приглашения

> MVP сайт-витрина электронных свадебных приглашений  
> **Заказчик:** @gromovaasya (Telegram)  
> **Статус:** Фаза 0 завершена ✅ | Фаза 1 — старт  
> **Дата старта:** 17 мая 2026

---

## 📋 Проект

Сайт-витрина для продажи дизайнерских электронных свадебных приглашений. Конверсионный лендинг с каталогом 12 шаблонов, формой заказа и интеграцией с Telegram.

### Ключевые параметры
| Параметр | Значение |
|----------|----------|
| Шаблонов MVP | 12 (ещё 13 → V2 backlog) |
| Палитра | Tiffany `#7ECDC0` + бежевый + золото |
| Цены | База 2000₽ · Полный 3200₽ · Премиум 4000₽ |
| Аддоны | +150₽/шт (8 позиций) |
| Референс | maryinvite.ru |
| Деплой | GitHub Pages + CI/CD |
| Формы | Formspree.io |

---

## 🗂️ Структура проекта

```
gromovaasya-wedding-site/
├── index.html              # Главная страница (10 секций)
├── css/                    # 3-5 CSS файлов
│   ├── tokens.css          # Custom properties (цвета, шрифты, тени)
│   ├── reset.css           # Reset + base
│   └── main.css            # Все компоненты + секции + responsive
├── js/                     # 5-6 JS модулей
│   ├── main.js             # Entry point
│   ├── catalog-filter.js   # Фильтры каталога
│   ├── carousel.js         # Карусель отзывов
│   ├── modal.js            # Модалка карточки
│   ├── accordion.js        # FAQ аккордеон
│   └── form-validation.js  # Валидация формы
├── assets/
│   ├── images/
│   │   ├── catalog/        # 12 мокапов (WebP 400×600, 3/4 ракурс)
│   │   ├── testimonials/   # 4 скриншота отзывов
│   │   └── about/          # Фото Анастасии
│   ├── icons/              # 8 SVG иконок (line style)
│   ├── decorations/        # Разделители + паттерны SVG
│   ├── logo/               # Wordmark + favicon
│   └── brand/              # CSS tokens
├── content-gromova.json    # Маркетинг: ЦА, копирайтинг, SEO
├── ux-sitemap-wireframes.md # UX: sitemap, flows, wireframes
├── MASTER_PLAN_B.md        # Мастер-план проекта
└── README.md               # Этот файл
```

---

## 📊 Фазы проекта

| Фаза | Дни | Статус | Описание |
|------|-----|--------|----------|
| **0** | 1-2 | ✅ Готово | Kick-off: ЦА, копирайтинг, sitemap, wireframes |
| **1** | 3-6 | ⬜ Старт | Концепт: brand guidelines, hero, карточка, иконки |
| **2** | 7-14 | ⬜ | Продакшн: 12 мокапов, OG-image, CSS-токены |
| **3** | 15-24 | ⬜ | Вёрстка: HTML/CSS/JS, 10 секций |
| **4** | 25-28 | ⬜ | QA + деплой: тестирование, фиксы, запуск |

---

## 🎨 Дизайн-система

### Палитра (Tiffany Edition)
```css
:root {
  --color-primary: #7ECDC0;
  --color-primary-light: #D4F0EC;
  --color-primary-dark: #5BAFA3;
  --color-secondary: #F5EDE3;
  --color-accent: #C9A96E;
  --color-text: #2D3436;
  --color-text-secondary: #636E72;
  --color-bg: #FAFAF8;
}
```

### Типографика
- **Заголовки:** Cormorant Garamond (Google Fonts)
- **Body:** Inter (Google Fonts)
- **Декоративный:** Great Vibes (имена пар)

### Breakpoints
- 320px (base, mobile-first)
- 480px (large phones)
- 768px (tablet)
- 1024px (desktop)

---

## 🎯 Целевая аудитория

1. **Настя, 24** — первая свадьба, хочет «идеально», Instagram-зависимая
2. **Елена, 31** — осознанный выбор, контроль качества, делегирует
3. **Ирина Викторовна, 55** — мама невесты, хочет «как у людей», бюджет

---

## 📈 KPI MVP

| Метрика | Target |
|---------|--------|
| Конверсия (визит → заявка) | 3-5% |
| Bounce rate | < 40% |
| Лидов/мес | 20-30 |
| Lighthouse Performance | 88+ |
| Lighthouse Accessibility | 90+ |
| Lighthouse SEO | 100 |
