/* Каталог: рендер + фильтрация */
(function() {
  'use strict';

  const grid = document.getElementById('catalog-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!grid) return;

  function renderCards(templates) {
    grid.innerHTML = templates.map(t => `
      <article class="card reveal" data-style="${t.style}" data-id="${t.id}" role="listitem" tabindex="0" aria-label="${t.title}, ${t.price}">
        <img class="card__image" src="${t.image}" alt="${t.title}" loading="lazy">
        <span class="card__badge">${getStyleLabel(t.style)}</span>
        <div class="card__body">
          <h3 class="card__title">${t.title}</h3>
          <p class="card__price">${t.price}</p>
        </div>
        <div class="card__overlay">
          <button class="btn" data-modal="${t.id}">Подробнее</button>
        </div>
      </article>
    `).join('');

    // Re-init scroll reveal for new elements
    if (typeof applyStagger === 'function') {
      applyStagger('.catalog__grid');
    }
  }

  function getStyleLabel(style) {
    const labels = { classic: 'Классика', minimal: 'Минимализм', boho: 'Бохо', modern: 'Модерн' };
    return labels[style] || style;
  }

  function filterCards(style) {
    const cards = grid.querySelectorAll('.card');
    cards.forEach(card => {
      const match = style === 'all' || card.dataset.style === style;
      card.style.display = match ? '' : 'none';
    });
  }

  // Render initial
  if (typeof CATALOG_TEMPLATES !== 'undefined') {
    renderCards(CATALOG_TEMPLATES);
  }

  // Filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('filter-btn--active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('filter-btn--active');
      btn.setAttribute('aria-pressed', 'true');
      filterCards(btn.dataset.filter);
    });
  });

  // Keyboard: Enter on card opens modal
  grid.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.classList.contains('card')) {
      e.target.querySelector('.card__overlay .btn')?.click();
    }
  });
})();
