/* Main entry: бургер, smooth scroll, header shadow */
(function() {
  'use strict';

  // --- Burger menu ---
  const burger = document.querySelector('.header__burger');
  const nav = document.getElementById('header-nav');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', isOpen);
    });

    // Close on nav link click
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Header shadow on scroll ---
  const header = document.querySelector('.header');
  if (header) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          header.style.boxShadow = window.scrollY > 10
            ? 'var(--shadow-md)'
            : 'none';
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // --- Smooth scroll for anchor links (fallback for Safari) ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
})();
