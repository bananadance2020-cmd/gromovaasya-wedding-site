/**
 * Animation Utilities — gromovaasya Wedding Invitations
 * CSS-first: JS only for triggers (scroll, stagger init)
 * Intersection Observer + throttle helpers
 */

/* ---- Throttle ---- */

/**
 * Limits fn execution to once per `limit` ms.
 * Use for scroll/resize handlers.
 */
function throttle(fn, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => { inThrottle = false; }, limit);
    }
  };
}

/* ---- Intersection Observer: Scroll Reveal ---- */

/**
 * Observe elements with `.reveal` or `.reveal-children` classes.
 * Adds `.is-visible` when element enters viewport.
 * Threshold: 15% of element visible.
 */
function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal, .reveal-children');
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  targets.forEach((el) => observer.observe(el));
}

/* ---- Stagger Animation Helper ---- */

/**
 * Apply staggered animation delays to children.
 * Used for dynamically rendered grids (e.g. catalog cards).
 *
 * @param {string} selector  CSS selector for parent container
 * @param {number} baseDelay Base delay in ms (default: 60)
 * @param {number} capDelay  Max total stagger in ms (default: 500)
 */
function applyStagger(selector, baseDelay, capDelay) {
  baseDelay = baseDelay || 60;
  capDelay = capDelay || 500;

  document.querySelectorAll(selector).forEach((container) => {
    const children = container.children;
    for (let i = 0; i < children.length; i++) {
      const delay = Math.min(i * baseDelay, capDelay);
      children[i].style.transitionDelay = delay + 'ms';
    }
  });
}

/* ---- Init on DOMContentLoaded ---- */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
});
