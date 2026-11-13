/**
 * Sanan Relief — Storefront Commerce Controller
 * Handles: Swiper Carousel, Quick View Modal, Live Cart Drawer Simulation
 */

(function () {
  'use strict';

  // 1. INITIALIZE PRODUCT CAROUSEL (SWIPER) WITH 3-COLUMN LAYOUT & TABS
  function initProductCarousel() {
    if (typeof Swiper === 'undefined') return;

    const swiperInstances = [];

    // Initialize all product swipers (one per tab)
    document.querySelectorAll('.product-swiper').forEach((el) => {
      const parentPane = el.closest('.bestseller-tab-pane');
      const swiper = new Swiper(el, {
        slidesPerView: 1.2,
        spaceBetween: 10,
        autoHeight: false,
        grabCursor: true,
        navigation: {
          nextEl: el.querySelector('.swiper-button-next'),
          prevEl: el.querySelector('.swiper-button-prev'),
        },
        scrollbar: {
          el: el.querySelector('.product-scrollbar') || parentPane?.querySelector('.product-scrollbar'),
          draggable: true,
          hide: false,
        },
        pagination: {
          el: el.querySelector('.swiper-pagination'),
          clickable: true,
        },
        breakpoints: {
          480: {
            slidesPerView: 1.4,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.8,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 2.4,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 14,
          },
          1280: {
            slidesPerView: 4, // 1 vertical banner + 3 product cards side-by-side!
            spaceBetween: 14,
          },
        },
      });

      if (parentPane) {
        parentPane._swiper = swiper;
      }
      swiperInstances.push(swiper);
    });

    // Custom Header Nav Buttons (Next / Prev) controlling active tab's Swiper
    document.querySelectorAll('.swiper-prev-custom').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const activePane = document.querySelector('.bestseller-tab-pane.active') || document.querySelector('.bestseller-tab-pane');
        if (activePane && activePane._swiper) {
          activePane._swiper.slidePrev();
        }
      });
    });

    document.querySelectorAll('.swiper-next-custom').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const activePane = document.querySelector('.bestseller-tab-pane.active') || document.querySelector('.bestseller-tab-pane');
        if (activePane && activePane._swiper) {
          activePane._swiper.slideNext();
        }
      });
    });

    // Tab Switching Controller
    const tabBtns = document.querySelectorAll('.bestseller-tab-btn');
    const tabPanes = document.querySelectorAll('.bestseller-tab-pane');

    tabBtns.forEach((btn) => {
      btn.addEventListener('click', function () {
        const targetId = this.dataset.tab;
        tabBtns.forEach((b) => b.classList.remove('active'));
        tabPanes.forEach((p) => p.classList.remove('active'));

        this.classList.add('active');
        const targetPane = document.getElementById(targetId);
        if (targetPane) {
          targetPane.classList.add('active');
          if (targetPane._swiper) {
            targetPane._swiper.update();
            targetPane._swiper.slideTo(0, 0);
          }
        }

        // Switch matching vertical banner
        const bannerId = 'banner-' + targetId.replace('tab-', '');
        document.querySelectorAll('.bestseller-vertical-banner').forEach((b) => b.classList.remove('active'));
        const matchingBanner = document.getElementById(bannerId);
        if (matchingBanner) {
          matchingBanner.classList.add('active');
        }
      });
    });
  }

  // 2. QUICK VIEW MODAL CONTROLLER
  function initQuickView() {
    const modalOverlay = document.getElementById('quickViewModal');
    if (!modalOverlay) return;

    // Open Quick View
    document.querySelectorAll('.btn-quick-view, .product-quickview-pill').forEach((btn) => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        // Works for both wrapper pattern and old direct pattern
        const card = this.closest('.product-card') || this.closest('.product-card-wrapper')?.querySelector('.product-card');
        const title = card?.querySelector('.product-title')?.textContent.trim() || 'Relief Formula';
        const price = card?.querySelector('.product-price')?.textContent.trim() || '₹1,499';
        const vendor = card?.querySelector('.product-vendor')?.textContent.trim() || 'Sanan Relief';
        const imgSrc = card?.querySelector('.product-media-art, .product-media-img')?.getAttribute('src') || '../assets/product-vijaya-oil.svg';

        // Populate modal
        modalOverlay.querySelector('.modal-title').textContent = title;
        modalOverlay.querySelector('.modal-price').textContent = price;
        modalOverlay.querySelector('.modal-vendor').textContent = vendor;
        modalOverlay.querySelector('.modal-img').setAttribute('src', imgSrc);

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    // Close on X or backdrop
    modalOverlay.querySelectorAll('.modal-close-btn, .modal-close-trigger').forEach((el) => {
      el.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // 3. CART DRAWER CONTROLLER
  function initCartDrawer() {
    const cartOverlay = document.getElementById('cartDrawerOverlay');
    if (!cartOverlay) return;

    // Open Cart Triggers
    document.querySelectorAll('.cart-drawer-trigger').forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    // Close Cart
    cartOverlay.querySelectorAll('.cart-drawer-close').forEach((closeBtn) => {
      closeBtn.addEventListener('click', () => {
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    cartOverlay.addEventListener('click', (e) => {
      if (e.target === cartOverlay) {
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Add to cart interaction
    document.querySelectorAll('.btn-add-to-cart, .btn-shopping-bag, .benefit-cart-btn, .product-external-cart-btn').forEach((btn) => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const originalContent = this.innerHTML;
        const isCompactBtn = this.classList.contains('notch-action-btn') || this.classList.contains('btn-shopping-bag') || this.classList.contains('benefit-cart-btn') || this.classList.contains('product-external-cart-btn');
        
        this.innerHTML = isCompactBtn ? '✓' : 'Adding...';
        this.disabled = true;

        setTimeout(() => {
          if (!isCompactBtn) {
            this.innerHTML = '✓ Added!';
          }
          
          // Update cart badge count
          document.querySelectorAll('.badge-count').forEach((badge) => {
            const current = parseInt(badge.textContent, 10) || 0;
            badge.textContent = current + 1;
          });

          // Open cart drawer
          cartOverlay.classList.add('active');
          document.body.style.overflow = 'hidden';

          setTimeout(() => {
            this.innerHTML = originalContent;
            this.disabled = false;
          }, 1200);
        }, 350);
      });
    });

    // Wishlist toggle
    document.querySelectorAll('.product-wishlist-btn, .product-wishlist-pill').forEach((btn) => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.toggle('active');
      });
    });
  }

  // 4. TESTIMONIALS & STORY CONTROLLER
  function initTestimonials() {
    // Swiper for testimonials
    if (typeof Swiper !== 'undefined' && document.querySelector('.testimonials-swiper')) {
      new Swiper('.testimonials-swiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        grabCursor: true,
        navigation: {
          nextEl: '.testimonials-next',
          prevEl: '.testimonials-prev',
        },
        pagination: {
          el: '.testimonials-pagination',
          clickable: true,
          bulletClass: 'testimonials-dot',
          bulletActiveClass: 'active',
        },
      });
    }

    // Story customer video card rotation
    const stories = [
      {
        name: 'Rhea Sharma',
        location: 'Gurugram',
        quote: 'Natural care that fits my daily routine.',
        img: '../assets/placeholder-story-video.svg',
      },
      {
        name: 'Siddharth M.',
        location: 'Mumbai',
        quote: 'Clear labeling & noticeable daily calming effects.',
        img: '../assets/placeholder-story-video.svg',
      },
      {
        name: 'Ananya P.',
        location: 'Bengaluru',
        quote: 'The cleanest herbal formula I have tried.',
        img: '../assets/placeholder-story-video.svg',
      },
    ];

    let currentStoryIdx = 0;
    const storyCard = document.querySelector('.story-card');
    if (storyCard) {
      const nameEl = storyCard.querySelector('.story-author-name');
      const locEl = storyCard.querySelector('.story-author-location');
      const quoteEl = storyCard.querySelector('.story-quote-bubble span');
      const segs = storyCard.querySelectorAll('.story-progress-seg');

      function updateStory(idx) {
        currentStoryIdx = (idx + stories.length) % stories.length;
        const s = stories[currentStoryIdx];
        if (nameEl) nameEl.textContent = s.name;
        if (locEl) locEl.textContent = s.location;
        if (quoteEl) quoteEl.textContent = s.quote;
        segs.forEach((seg, i) => {
          seg.classList.toggle('active', i === currentStoryIdx);
        });
      }

      storyCard.querySelector('.story-prev-btn')?.addEventListener('click', (e) => {
        e.stopPropagation();
        updateStory(currentStoryIdx - 1);
      });

      storyCard.querySelector('.story-next-btn')?.addEventListener('click', (e) => {
        e.stopPropagation();
        updateStory(currentStoryIdx + 1);
      });
    }

    // Story Video Modal
    const videoModal = document.getElementById('storyVideoModal');
    if (videoModal) {
      document.querySelectorAll('.story-play-btn, .story-card').forEach((trigger) => {
        trigger.addEventListener('click', function (e) {
          if (e.target.closest('.story-nav-btn')) return;
          e.preventDefault();
          videoModal.classList.add('active');
          document.body.style.overflow = 'hidden';
        });
      });

      videoModal.querySelectorAll('.video-modal-close').forEach((closeBtn) => {
        closeBtn.addEventListener('click', () => {
          videoModal.classList.remove('active');
          document.body.style.overflow = '';
        });
      });

      videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
          videoModal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }
  }

  // 5. BLOG CAROUSEL CONTROLLER
  function initBlogCarousel() {
    if (typeof Swiper !== 'undefined' && document.querySelector('.blog-swiper')) {
      new Swiper('.blog-swiper', {
        slidesPerView: 1,
        spaceBetween: 12,
        grabCursor: true,
        navigation: {
          nextEl: '.blog-next',
          prevEl: '.blog-prev',
        },
        breakpoints: {
          640: {
            slidesPerView: 1.5,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 14,
          },
        },
      });
    }
  }

  // 6. FULL-WIDTH CINEMATIC CENTER-FOCUSED CAROUSEL CONTROLLER
  function initCinematicCarousel() {
    const el = document.querySelector('.cinematic-swiper');
    if (!el || typeof Swiper === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    new Swiper(el, {
      slidesPerView: 'auto',
      centeredSlides: true,
      centeredSlidesBounds: false,
      loop: true,
      loopedSlides: 6,
      spaceBetween: 0,
      observer: true,
      observeParents: true,
      resizeObserver: true,
      grabCursor: true,
      speed: prefersReducedMotion ? 0 : 800,
      roundLengths: true,
      autoplay: prefersReducedMotion ? false : {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        320: {
          spaceBetween: 0,
        },
        768: {
          spaceBetween: 0,
        },
        1024: {
          spaceBetween: 0,
        },
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      on: {
        init: function () {
          updateCinematicZIndex(this);
        },
        slideChangeTransitionStart: function () {
          updateCinematicZIndex(this);
        },
      },
    });

    function updateCinematicZIndex(swiperInstance) {
      if (!swiperInstance || !swiperInstance.slides) return;
      swiperInstance.slides.forEach((slide) => {
        if (slide.classList.contains('swiper-slide-active')) {
          slide.style.zIndex = '10';
        } else {
          slide.style.zIndex = '1';
        }
      });
    }
  }

  // 7. ALL PRODUCTS CAROUSEL WITH ULTRA-THIN SCROLLBAR INDICATOR
  function initAllProductsCarousel() {
    const el = document.querySelector('.all-products-swiper');
    if (!el || typeof Swiper === 'undefined') return;

    new Swiper(el, {
      slidesPerView: 1.2,
      spaceBetween: 14,
      grabCursor: true,
      scrollbar: {
        el: el.parentElement.querySelector('.all-products-scrollbar'),
        draggable: true,
        hide: false,
      },
      navigation: {
        nextEl: '.all-products-next-btn',
        prevEl: '.all-products-prev-btn',
      },
      breakpoints: {
        480: {
          slidesPerView: 1.5,
          spaceBetween: 14,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 18,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 18,
        },
      },
    });
  }

  // 8. WHY SANAN FULL-WIDTH PARALLAX CONTROLLER
  function initWhySananParallax() {
    const section = document.querySelector('.why-sanan-section');
    const bgLayer = document.querySelector('.why-sanan-bg-layer');
    if (!section || !bgLayer) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = section.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top <= windowHeight && rect.bottom >= 0) {
            const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
            const translateY = (progress - 0.5) * 80;
            bgLayer.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // 9. DOCTOR'S TRUSTED CHOICE — FULL-WIDTH PARALLAX & ENDORSEMENT CARDS SLIDER
  function initDoctorParallaxSlider() {
    // A. Parallax scroll effect on background layer and decorative botanical motif
    const section = document.querySelector('.doctor-parallax-section');
    const bgLayer = document.querySelector('.doctor-parallax-bg');
    const flower = document.querySelector('.doctor-parallax-botanical-accent');

    if (section && bgLayer && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      let ticking = false;
      function onScroll() {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top <= windowHeight && rect.bottom >= 0) {
              const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
              const translateY = (progress - 0.5) * 90;
              bgLayer.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0)`;
              if (flower) {
                const flowerY = (progress - 0.5) * -45;
                const flowerRot = (progress - 0.5) * 18;
                flower.style.transform = `translate(-50%, calc(-50% + ${flowerY.toFixed(1)}px)) rotate(${flowerRot.toFixed(1)}deg)`;
              }
            }
            ticking = false;
          });
          ticking = true;
        }
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    // B. Swiper slider with destination-style controls (nav arrows + progress line + counter)
    const swiperEl = document.querySelector('.doctor-cards-swiper');
    if (!swiperEl || typeof Swiper === 'undefined') return;

    const fillBar = swiperEl.querySelector('.doctor-cards-progress-fill');
    const counterEl = swiperEl.querySelector('.doctor-cards-counter');

    const swiperInstance = new Swiper(swiperEl, {
      slidesPerView: 1.25,
      spaceBetween: 16,
      grabCursor: true,
      navigation: {
        nextEl: swiperEl.querySelector('.doctor-cards-next'),
        prevEl: swiperEl.querySelector('.doctor-cards-prev'),
      },
      breakpoints: {
        640: {
          slidesPerView: 2.1,
          spaceBetween: 18,
        },
        1080: {
          slidesPerView: 2.6,
          spaceBetween: 22,
        },
        1380: {
          slidesPerView: 3.2,
          spaceBetween: 24,
        },
      },
      on: {
        init: function () {
          updateProgress(this);
        },
        slideChange: function () {
          updateProgress(this);
        },
      },
    });

    function updateProgress(s) {
      if (!s) return;
      const total = s.slides.length || 5;
      const current = (s.realIndex || 0) + 1;
      if (fillBar) {
        const pct = Math.min(100, Math.max(18, (current / total) * 100));
        fillBar.style.width = `${pct}%`;
      }
      if (counterEl) {
        counterEl.textContent = current < 10 ? `0${current}` : `${current}`;
      }
    }
  }

  // 10. LEGAL POLICIES HORIZONTAL SUBNAV CONTROLLER
  function initLegalTabs() {
    const subnavLinks = document.querySelectorAll('.legal-subnav-link');
    const panes = document.querySelectorAll('.legal-policy-pane');
    if (!subnavLinks.length || !panes.length) return;

    subnavLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const policy = link.getAttribute('data-policy');
        if (!policy) return;
        const targetPane = document.getElementById(`pane-${policy}`);
        if (!targetPane) return;

        e.preventDefault();
        subnavLinks.forEach((l) => l.classList.remove('active'));
        panes.forEach((p) => p.classList.remove('active'));

        link.classList.add('active');
        targetPane.classList.add('active');

        // Smooth scroll to top of card if scrolled down
        const card = document.querySelector('.legal-card');
        if (card) {
          const rect = card.getBoundingClientRect();
          if (rect.top < 80) {
            window.scrollTo({
              top: window.scrollY + rect.top - 140,
              behavior: 'smooth',
            });
          }
        }
      });
    });

    // Check hash on load
    if (window.location.hash) {
      const hashPolicy = window.location.hash.replace('#', '');
      const matchLink = document.querySelector(`.legal-subnav-link[data-policy="${hashPolicy}"]`);
      if (matchLink) matchLink.click();
    }
  }

  // 11. FAQ HUB ACCORDION & SEARCH CONTROLLER
  function initFaqHub() {
    const section = document.querySelector('.faq-page-section');
    if (!section) return;

    // A. Accordion Toggle
    const qButtons = section.querySelectorAll('.faq-question-btn');
    qButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        const pane = btn.nextElementSibling;

        // Close other open accordions in the same group
        const group = btn.closest('.faq-group-block') || section;
        group.querySelectorAll('.faq-question-btn').forEach((otherBtn) => {
          if (otherBtn !== btn) {
            otherBtn.setAttribute('aria-expanded', 'false');
            if (otherBtn.nextElementSibling) {
              otherBtn.nextElementSibling.style.maxHeight = null;
            }
          }
        });

        btn.setAttribute('aria-expanded', !expanded);
        if (!expanded && pane) {
          pane.style.maxHeight = pane.scrollHeight + 'px';
        } else if (pane) {
          pane.style.maxHeight = null;
        }
      });
    });

    // B. Category Filter via Sticky Sidebar
    const catButtons = section.querySelectorAll('.faq-cat-btn');
    const groups = section.querySelectorAll('.faq-group-block');

    catButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        catButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-category');

        groups.forEach((group) => {
          if (cat === 'all' || group.getAttribute('data-category') === cat) {
            group.style.display = 'block';
          } else {
            group.style.display = 'none';
          }
        });
      });
    });

    // C. Live Search Filter
    const searchInput = document.getElementById('FaqSearchInput');
    const clearBtn = document.getElementById('FaqSearchClear');
    const noResults = section.querySelector('.faq-no-results');

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        if (clearBtn) clearBtn.style.display = query ? 'flex' : 'none';

        let totalVisible = 0;
        const allItems = section.querySelectorAll('.faq-accordion-item');

        allItems.forEach((item) => {
          const text = item.textContent.toLowerCase();
          if (!query || text.includes(query)) {
            item.style.display = 'block';
            totalVisible++;
          } else {
            item.style.display = 'none';
          }
        });

        // Hide empty group headers
        groups.forEach((g) => {
          const visibleInGroup = g.querySelectorAll('.faq-accordion-item:not([style*="display: none"])');
          g.style.display = visibleInGroup.length > 0 ? 'block' : 'none';
        });

        if (noResults) {
          noResults.style.display = totalVisible === 0 ? 'block' : 'none';
        }
      });

      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          searchInput.value = '';
          searchInput.dispatchEvent(new Event('input'));
          searchInput.focus();
        });
      }
    }
  }

  // 12. BLOG HUB CATEGORY & SEARCH CONTROLLER
  function initBlogHub() {
    const section = document.querySelector('.blog-hub-section');
    if (!section) return;

    const tabButtons = section.querySelectorAll('.blog-tab-btn');
    const cards = section.querySelectorAll('.blog-grid-card');
    const featuredCard = section.querySelector('.blog-featured-card');
    const searchInput = document.getElementById('BlogSearchInput');

    function applyFilter() {
      const activeTab = section.querySelector('.blog-tab-btn.active');
      const cat = activeTab ? activeTab.getAttribute('data-category') : 'all';
      const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

      cards.forEach((card) => {
        const cardCat = card.getAttribute('data-category');
        const cardText = card.textContent.toLowerCase();
        const matchesCat = cat === 'all' || cardCat === cat;
        const matchesQuery = !query || cardText.includes(query);

        if (matchesCat && matchesQuery) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });

      if (featuredCard) {
        const featCat = featuredCard.getAttribute('data-category');
        const featText = featuredCard.textContent.toLowerCase();
        const matchesCat = cat === 'all' || featCat === cat;
        const matchesQuery = !query || featText.includes(query);
        featuredCard.style.display = matchesCat && matchesQuery ? 'grid' : 'none';
      }
    }

    tabButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        tabButtons.forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        applyFilter();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', applyFilter);
    }
  }

  // 13. GLASSMORPHIC HEADER SCROLL STICKY CONTROLLER
  function initGlassHeader() {
    const glassHeader = document.getElementById('SananGlassHeader') || document.querySelector('.sanan-floating-header');
    const headerWrapper = document.getElementById('SananHeaderWrapper');
    if (!glassHeader && !headerWrapper) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        glassHeader?.classList.add('is-sticky');
        headerWrapper?.classList.add('is-sticky');
      } else {
        glassHeader?.classList.remove('is-sticky');
        headerWrapper?.classList.remove('is-sticky');
      }
    }, { passive: true });

    // Category Switcher (Wellness vs Medicinal)
    const catButtons = document.querySelectorAll('.sanan-cat-btn');
    catButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        catButtons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
      });
    });

    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById('SananMobileNavToggle') || document.querySelector('.sanan-mobile-toggle');
    const navLinks = document.querySelector('.sanan-nav-links');
    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-open');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initProductCarousel();
    initQuickView();
    initCartDrawer();
    initTestimonials();
    initBlogCarousel();
    initCinematicCarousel();
    initAllProductsCarousel();
    initWhySananParallax();
    initDoctorParallaxSlider();
    initLegalTabs();
    initFaqHub();
    initBlogHub();
    initGlassHeader();
  });
})();

