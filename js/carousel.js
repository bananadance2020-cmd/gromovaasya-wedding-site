/* Карусель отзывов — touch scroll + кнопки */
(function() {
  'use strict';

  const track = document.getElementById('reviews-track');
  const btnPrev = document.querySelector('.reviews__btn--prev');
  const btnNext = document.querySelector('.reviews__btn--next');

  if (!track) return;

  function scrollByCard(direction) {
    const card = track.querySelector('.review-card');
    if (!card) return;
    const scrollAmount = card.offsetWidth + parseInt(getComputedStyle(track).gap) || 24;
    track.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }

  if (btnPrev) btnPrev.addEventListener('click', () => scrollByCard(-1));
  if (btnNext) btnNext.addEventListener('click', () => scrollByCard(1));
})();
