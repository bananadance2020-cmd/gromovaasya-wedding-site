/* Модалка карточки шаблона */
(function() {
  'use strict';

  const modal = document.getElementById('template-modal');
  if (!modal) return;

  const overlay = modal.querySelector('.modal__overlay');
  const closeBtn = modal.querySelector('.modal__close');
  const title = document.getElementById('modal-title');
  const image = document.getElementById('modal-image');
  const desc = document.getElementById('modal-description');
  const cta = modal.querySelector('.modal__cta');

  let lastFocused = null;

  function openModal(templateId) {
    const t = (typeof CATALOG_TEMPLATES !== 'undefined')
      ? CATALOG_TEMPLATES.find(x => x.id === templateId)
      : null;
    if (!t) return;

    lastFocused = document.activeElement;
    title.textContent = t.title;
    image.src = t.image;
    image.alt = t.title;
    desc.textContent = t.description;
    cta.href = '#cta-footer';
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    closeBtn.focus();

    // Trap focus
    modal.addEventListener('keydown', trapFocus);
  }

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    modal.removeEventListener('keydown', trapFocus);
    if (lastFocused) lastFocused.focus();
  }

  function trapFocus(e) {
    if (e.key !== 'Tab') return;
    const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  // Event delegation: card overlay buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-modal]');
    if (btn) {
      openModal(btn.dataset.modal);
      return;
    }
    if (e.target === overlay || e.target === closeBtn) {
      closeModal();
    }
  });

  // Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display !== 'none') {
      closeModal();
    }
  });

  // CTA in modal: close + scroll to form
  if (cta) {
    cta.addEventListener('click', () => {
      closeModal();
    });
  }
})();
