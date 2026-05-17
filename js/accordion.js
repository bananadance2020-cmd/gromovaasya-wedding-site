/* FAQ аккордеон — нативный <details> + плавная анимация */
(function() {
  'use strict';

  const items = document.querySelectorAll('.faq__item');
  items.forEach(item => {
    const question = item.querySelector('.faq__question');
    if (!question) return;

    // Нативный details уже работает, aria-expanded обновляем
    item.addEventListener('toggle', () => {
      question.setAttribute('aria-expanded', item.open);
    });
  });
})();
