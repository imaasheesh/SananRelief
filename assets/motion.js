/**
 * Sanan Relief — Motion & Interaction Engine
 * GSAP + Native IntersectionObserver fallback
 * Handles: Scroll reveals, Entry/Exit animations, Parallax, Accordions, Tabs
 */

(function () {
  'use strict';

  // Check prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. ENTRY IN & EXIT OUT ANIMATIONS VIA OBSERVER / GSAP
  function initScrollAnimations() {
    if (prefersReducedMotion) {
      document.querySelectorAll('[data-animate]').forEach((el) => {
        el.classList.add('in-view');
      });
      return;
    }

    const animElements = document.querySelectorAll('[data-animate]');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              // Optional: unobserve once revealed
              // observer.unobserve(entry.target);
            } else if (entry.boundingClientRect.top > 0) {
              // Entry out animation when scrolling back up
              entry.target.classList.remove('in-view');
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      animElements.forEach((el) => observer.observe(el));
    } else {
      animElements.forEach((el) => el.classList.add('in-view'));
    }
  }

  // 2. PARALLAX EFFECT
  function initParallax() {
    if (prefersReducedMotion) return;

    const parallaxLayers = document.querySelectorAll('[data-parallax-speed]');
    if (!parallaxLayers.length) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;

          parallaxLayers.forEach((layer) => {
            const speed = parseFloat(layer.getAttribute('data-parallax-speed')) || 0.2;
            const parent = layer.closest('.parallax-container') || layer.parentElement;
            const rect = parent.getBoundingClientRect();

            // Only calculate if in viewport
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              const yPos = (rect.top - window.innerHeight / 2) * speed;
              layer.style.transform = `translate3d(0, ${yPos.toFixed(1)}px, 0)`;
            }
          });

          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // 3. ACCORDIONS HANDLER
  function initAccordions() {
    document.querySelectorAll('.accordion-trigger').forEach((trigger) => {
      trigger.addEventListener('click', function () {
        const item = this.closest('.accordion-item');
        const group = item.closest('.accordion-group');
        const isSingleExpand = group ? group.hasAttribute('data-single-expand') : false;

        if (isSingleExpand && !item.classList.contains('active')) {
          group.querySelectorAll('.accordion-item.active').forEach((activeItem) => {
            activeItem.classList.remove('active');
          });
        }

        item.classList.toggle('active');
      });
    });
  }

  // 4. TABS HANDLER
  function initTabs() {
    document.querySelectorAll('.tabs-container').forEach((container) => {
      const tabButtons = container.querySelectorAll('.tab-btn');
      const tabPanes = container.querySelectorAll('.tab-pane');

      tabButtons.forEach((btn) => {
        btn.addEventListener('click', function () {
          const targetId = this.getAttribute('data-tab');

          tabButtons.forEach((b) => b.classList.remove('active'));
          tabPanes.forEach((p) => p.classList.remove('active'));

          this.classList.add('active');
          const targetPane = container.querySelector(`#${targetId}`);
          if (targetPane) {
            targetPane.classList.add('active');
          }
        });
      });
    });
  }

  // Initialize on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initParallax();
    initAccordions();
    initTabs();
  });

  // Global exit animation helper (e.g. for page changes or drawers)
  window.triggerExitAnimation = function (element, callback) {
    if (!element) return;
    element.classList.add('exit-fade-out');
    setTimeout(() => {
      if (typeof callback === 'function') callback();
    }, 400);
  };
})();

