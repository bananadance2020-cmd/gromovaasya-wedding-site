# QA Report — gromovaasya Wedding Invitations
**Дата:** 17 мая 2026  
**Браузер:** Chromium (Hermes Browser)

## ✅ Passed

| Тест | Результат |
|------|-----------|
| 12 карточек каталога рендерятся | ✅ 12/12 visible |
| Фильтр «Бохо» → 3 карточки | ✅ 9 hidden, 3 visible |
| Фильтр «Все стили» → 12 карточек | ✅ reset works |
| Модалка: Бохо-сад | ✅ title, image (SVG), description |
| Карусель отзывов | ✅ 4 отзыва с аватарами |
| Прайсинг (3 тарифа) | ✅ Базовый 2000₽, Полный 3200₽, Премиум 4000₽ |
| FAB-кнопка | ✅ href=https://t.me/gromovaasya |
| JS ошибки | ✅ 0 errors |
| CSS вес | ✅ 29.4 KB / 40 KB лимит |
| JS вес | ✅ 15.0 KB / 25 KB лимит |

## ⚠️ Minor Issues

| Проблема | Приоритет |
|----------|-----------|
| Нет секции #about (Об авторе) | P3 — V2 |
| Нет <footer> (копирайт) | P3 — V2 |
| Модалка: .modal__body пуст при первом открытии | P2 — контент приходит из JS |

## Итого: MVP ✅ Ready for deploy
