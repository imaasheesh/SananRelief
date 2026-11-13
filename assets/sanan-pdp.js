/*
 * ============================================================
 * SANAN RELIEF — PRODUCT DETAIL PAGE (PDP) INTERACTIONS
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', function () {
  initProductGallery();
  initDescriptionToggle();
  initPackAndFlavourSelectors();
  initPotencyAccordion();
  initRxRadioOptions();
  initStepper();
  initCartActions();
  initAnchorNav();
  initStickyNavDock();
  initDossierAccordions();
  initFaqAccordions();
  initReviewsPagination();
  initWriteReviewModal();
  initFloatingBar();
});

/* 1. Large Images & Thumbnails Switcher */
function initProductGallery() {
  const thumbCards = document.querySelectorAll('.sanan-pdp-thumb-card, .sanan-pdp-vthumb-btn');
  const stageImg = document.querySelector('.sanan-pdp-stage-img');
  if (!thumbCards.length || !stageImg) return;

  thumbCards.forEach(card => {
    card.addEventListener('click', function () {
      thumbCards.forEach(c => c.classList.remove('is-active'));
      this.classList.add('is-active');

      const fullSrc = this.getAttribute('data-full-img');
      const altText = this.getAttribute('data-alt') || 'Sanan Relief Formulation';

      if (fullSrc) {
        stageImg.style.opacity = '0';
        stageImg.style.transform = 'scale(0.97)';
        setTimeout(() => {
          stageImg.src = fullSrc;
          stageImg.alt = altText;
          stageImg.style.opacity = '1';
          stageImg.style.transform = 'scale(1)';
        }, 150);
      }
    });
  });
}

/* 1b. 2-Line Description Sliding Read More Toggle */
function initDescriptionToggle() {
  const btn = document.querySelector('.sanan-pdp-readmore-btn');
  const wrapper = document.querySelector('.sanan-pdp-desc-wrapper');
  if (!btn || !wrapper) return;

  btn.addEventListener('click', function () {
    const isExpanded = wrapper.classList.toggle('is-expanded');
    const label = btn.querySelector('.sanan-pdp-readmore-text');
    if (label) {
      label.textContent = isExpanded ? 'Read less' : 'Read more';
    }
    btn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
  });
}

/* 2. Pack Size & Flavour Selector */
function initPackAndFlavourSelectors() {
  const packPills = document.querySelectorAll('.sanan-pdp-pack-pill');
  const flavourPills = document.querySelectorAll('.sanan-pdp-flavour-pill');
  const priceEl = document.querySelector('.sanan-pdp-main-price');
  const strikeEl = document.querySelector('.sanan-pdp-strike-price');
  const packLabel = document.querySelector('.sanan-pdp-pack-label strong');
  const flavourLabel = document.querySelector('.sanan-pdp-flavour-label strong');

  packPills.forEach(pill => {
    pill.addEventListener('click', function () {
      packPills.forEach(p => p.classList.remove('is-active'));
      this.classList.add('is-active');

      const price = this.getAttribute('data-price');
      const compare = this.getAttribute('data-compare');
      const pack = this.getAttribute('data-pack');

      if (price && priceEl) priceEl.textContent = price;
      if (compare && strikeEl) strikeEl.textContent = compare;
      if (pack && packLabel) packLabel.textContent = pack;
    });
  });

  flavourPills.forEach(pill => {
    pill.addEventListener('click', function () {
      flavourPills.forEach(p => p.classList.remove('is-active'));
      this.classList.add('is-active');

      const flavour = this.getAttribute('data-flavour');
      if (flavour && flavourLabel) flavourLabel.textContent = flavour;
    });
  });
}

/* 3. Potency & Dosage Breakdown Accordion */
function initPotencyAccordion() {
  const trigger = document.querySelector('.sanan-pdp-potency-trigger');
  const box = document.querySelector('.sanan-pdp-potency-box');

  trigger?.addEventListener('click', () => {
    box?.classList.toggle('is-open');
    trigger.classList.toggle('is-open');
  });
}

/* 4. Prescription Radio Option Selector */
function initRxRadioOptions() {
  const options = document.querySelectorAll('.sanan-rx-radio-option');
  const uploadDrop = document.querySelector('.sanan-rx-upload-drop');

  options.forEach(opt => {
    opt.addEventListener('click', function () {
      options.forEach(o => o.classList.remove('is-selected'));
      this.classList.add('is-selected');

      const radio = this.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;

      if (uploadDrop) {
        if (radio?.value === 'upload') {
          uploadDrop.style.display = 'block';
        } else {
          uploadDrop.style.display = 'none';
        }
      }
    });
  });
}

/* 4. Quantity Stepper */
function initStepper() {
  const dec = document.querySelector('.sanan-pdp-step-btn.btn-dec');
  const inc = document.querySelector('.sanan-pdp-step-btn.btn-inc');
  const input = document.querySelector('.sanan-pdp-step-input');
  if (!input) return;

  dec?.addEventListener('click', () => {
    let v = parseInt(input.value) || 1;
    if (v > 1) input.value = v - 1;
  });

  inc?.addEventListener('click', () => {
    let v = parseInt(input.value) || 1;
    input.value = v + 1;
  });
}

/* 5. Add to Cart & Buy Now Flow */
function initCartActions() {
  const cartBtn = document.querySelector('.sanan-pdp-btn-cart');
  const floatCartBtn = document.querySelector('.sanan-float-cart-btn');
  const directBtn = document.querySelector('.sanan-pdp-btn-direct');
  const consentCheckbox = document.getElementById('PatientConsent');
  const consentWrap = document.getElementById('PatientConsentWrap');
  const consentMsg = document.getElementById('ConsentValidationMsg');

  // Consent checkbox change listener
  consentCheckbox?.addEventListener('change', () => {
    if (consentCheckbox.checked) {
      consentWrap?.classList.remove('has-error');
      if (consentMsg) consentMsg.style.display = 'none';
    }
  });

  function handleAddToCart(btn) {
    // Check Patient Consent
    if (consentCheckbox && !consentCheckbox.checked) {
      if (consentWrap) consentWrap.classList.add('has-error');
      if (consentMsg) consentMsg.style.display = 'flex';
      consentWrap?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    if (!btn) return;
    const origHtml = btn.innerHTML;
    btn.innerHTML = `
      <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
      <span>Adding...</span>
    `;

    setTimeout(() => {
      btn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Added to Basket</span>
      `;

      // Trigger Cart Drawer
      const drawer = document.getElementById('CartDrawer') || document.querySelector('.cart-drawer');
      const overlay = document.getElementById('CartDrawerOverlay') || document.querySelector('.cart-drawer-overlay');
      if (drawer) {
        drawer.classList.add('active');
        overlay?.classList.add('active');
        document.body.classList.add('cart-drawer-open');
      }

      setTimeout(() => {
        btn.innerHTML = origHtml;
      }, 2000);
    }, 500);
  }

  cartBtn?.addEventListener('click', () => handleAddToCart(cartBtn));
  floatCartBtn?.addEventListener('click', () => handleAddToCart(floatCartBtn));



  directBtn?.addEventListener('click', () => {
    window.location.href = 'collection.html';
  });
}

/* 6. Sticky Pill Anchor Nav Smooth Scrolling */
function initAnchorNav() {
  const links = document.querySelectorAll('.sanan-pdp-nav-pill');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          links.forEach(l => l.classList.remove('is-active'));
          this.classList.add('is-active');

          const yOffset = -195; // Offset for floating header + sticky nav
          const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    });
  });
}

/* 6b. Sticky In-Page Nav Docking Interaction (Header Extension) */
function initStickyNavDock() {
  const navStrip = document.getElementById('SananPdpNavStrip') ||
                   document.getElementById('SananInPageNav') ||
                   document.querySelector('.sanan-pdp-nav-strip') ||
                   document.querySelector('.sanan-pdp-inpage-nav');
  const headerCard = document.querySelector('.sanan-header-card');
  if (!navStrip) return;

  // Insert lightweight tracking sentinel immediately before navStrip if not present
  let sentinel = document.getElementById('SananNavDockSentinel');
  if (!sentinel) {
    sentinel = document.createElement('div');
    sentinel.id = 'SananNavDockSentinel';
    sentinel.style.cssText = 'height: 1px; margin-top: -1px; pointer-events: none; visibility: hidden;';
    navStrip.parentNode.insertBefore(sentinel, navStrip);
  }

  function syncHeaderHeight() {
    if (!headerCard) return;
    const headerH = headerCard.offsetHeight || 102;
    document.documentElement.style.setProperty('--sanan-header-dock-top', `${headerH}px`);
  }

  function updateDock() {
    const headerH = (headerCard ? headerCard.offsetHeight : 102) || 102;
    const dockTop = headerH - 1; // Seamless -1px overlap with curved bottom edge

    document.documentElement.style.setProperty('--sanan-header-dock-top', `${headerH}px`);

    const sentinelTop = sentinel.getBoundingClientRect().top;
    if (sentinelTop <= headerH + 2) {
      navStrip.classList.add('is-docked');
      navStrip.style.top = `${dockTop}px`;
    } else {
      navStrip.classList.remove('is-docked');
      navStrip.style.top = '';
    }
  }

  syncHeaderHeight();
  window.addEventListener('scroll', updateDock, { passive: true });
  window.addEventListener('resize', () => {
    syncHeaderHeight();
    updateDock();
  }, { passive: true });
  updateDock();
}

/* 7. Dossier Accordions */
function initDossierAccordions() {
  const items = document.querySelectorAll('.sanan-pdp-dossier-item');
  items.forEach(item => {
    const trigger = item.querySelector('.sanan-pdp-dossier-trigger');
    trigger?.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      item.classList.toggle('is-open', !isOpen);
    });
  });
}

/* 8. FAQ Accordions */
function initFaqAccordions() {
  const items = document.querySelectorAll('.sanan-pdp-faq-item');
  items.forEach(item => {
    const trigger = item.querySelector('.sanan-pdp-faq-trigger');
    trigger?.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      item.classList.toggle('is-open', !isOpen);
    });
  });
}

/* 9. Reviews Stream Pagination & Read More */
function initReviewsPagination() {
  const pageBtns = document.querySelectorAll('.sanan-rev-page-btn');
  const reviewPages = document.querySelectorAll('.sanan-review-page');
  const readMoreLinks = document.querySelectorAll('.sanan-review-readmore');

  let currentPage = 1;
  const totalPages = reviewPages.length || 3;

  function goToPage(pageNum) {
    if (pageNum < 1 || pageNum > totalPages) return;
    currentPage = pageNum;

    reviewPages.forEach((page, idx) => {
      if (idx + 1 === currentPage) {
        page.classList.add('is-active');
      } else {
        page.classList.remove('is-active');
      }
    });

    pageBtns.forEach(btn => {
      const p = btn.getAttribute('data-page');
      if (p === String(currentPage)) {
        btn.classList.add('is-active');
      } else if (p !== 'next' && p !== 'last') {
        btn.classList.remove('is-active');
      }
    });

    // Smooth scroll to top of reviews stream if scrolled down
    const reviewsEl = document.getElementById('sec-reviews');
    if (reviewsEl) {
      const yOffset = -160;
      const y = reviewsEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  pageBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const target = this.getAttribute('data-page');
      if (target === 'next') {
        goToPage(Math.min(totalPages, currentPage + 1));
      } else if (target === 'last') {
        goToPage(totalPages);
      } else {
        const num = parseInt(target, 10);
        if (!isNaN(num)) goToPage(num);
      }
    });
  });

  // Read More toggles
  readMoreLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const parent = this.closest('.sanan-review-item');
      const hiddenSpan = parent?.querySelector('.sanan-review-more-text');
      if (hiddenSpan) {
        hiddenSpan.style.display = 'inline';
        this.style.display = 'none';
      }
    });
  });
}

/* 10. Write a Review Modal & Dynamic Review Submission */
function initWriteReviewModal() {
  const writeBtn = document.querySelector('.sanan-rev-write-btn');
  const modalBackdrop = document.getElementById('ReviewModalBackdrop');
  const modalClose = document.getElementById('ReviewModalClose');
  const form = document.getElementById('ReviewSubmitForm');
  const starBtns = document.querySelectorAll('.sanan-star-pick-btn');
  const starValInput = document.getElementById('RevStarVal');
  const starPickLabel = document.getElementById('StarPickLabel');
  const page1 = document.getElementById('rev-page-1');

  if (!writeBtn || !modalBackdrop) return;

  const starLabels = {
    1: '1.0 / 5.0 (Poor)',
    2: '2.0 / 5.0 (Fair)',
    3: '3.0 / 5.0 (Average)',
    4: '4.0 / 5.0 (Very Good)',
    5: '5.0 / 5.0 (Excellent)'
  };

  function openModal() {
    modalBackdrop.style.display = 'flex';
    requestAnimationFrame(() => {
      modalBackdrop.classList.add('is-open');
    });
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalBackdrop.classList.remove('is-open');
    setTimeout(() => {
      modalBackdrop.style.display = 'none';
      document.body.style.overflow = '';
    }, 250);
  }

  writeBtn.addEventListener('click', openModal);
  modalClose?.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  // Star Rating Selection
  starBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const val = parseInt(this.getAttribute('data-val'), 10);
      if (starValInput) starValInput.value = val;
      if (starPickLabel && starLabels[val]) starPickLabel.textContent = starLabels[val];

      starBtns.forEach(b => {
        const bVal = parseInt(b.getAttribute('data-val'), 10);
        if (bVal <= val) {
          b.classList.add('is-selected');
        } else {
          b.classList.remove('is-selected');
        }
      });
    });
  });

  // Handle Form Submission
  form?.addEventListener('submit', function (e) {
    e.preventDefault();
    const rating = parseInt(starValInput?.value || '5', 10);
    const author = document.getElementById('revAuthor')?.value.trim() || 'Verified Patient';
    const title = document.getElementById('revTitle')?.value.trim() || 'Exceptional Therapeutic Relief';
    const body = document.getElementById('revBody')?.value.trim() || '';

    const starsHtml = '★'.repeat(rating) + '☆'.repeat(5 - rating);

    // Create New Review Element
    const reviewEl = document.createElement('div');
    reviewEl.className = 'sanan-review-item';
    reviewEl.style.animation = 'fadeIn 0.4s ease';
    reviewEl.innerHTML = `
      <div class="sanan-review-top-meta">
        <div class="sanan-review-stars-gold">${starsHtml}</div>
        <div class="sanan-review-date">Just now</div>
      </div>
      <div class="sanan-review-author-wrap">
        <span class="sanan-review-author-name">${escapeHtml(author)}</span>
        <span class="sanan-review-verified-badge">Verified</span>
      </div>
      <h3 class="sanan-review-heading">${escapeHtml(title)}</h3>
      <p class="sanan-review-paragraph">${escapeHtml(body)}</p>
    `;

    if (page1) {
      page1.insertBefore(reviewEl, page1.firstChild);
    }

    closeModal();
    form.reset();

    // Reset stars to 5
    starBtns.forEach(b => b.classList.add('is-selected'));
    if (starValInput) starValInput.value = '5';
    if (starPickLabel) starPickLabel.textContent = '5.0 / 5.0 (Excellent)';

    // Show Toast
    showToast('✓ Thank you! Your verified review has been published.');

    // Smooth scroll to reviews
    const reviewsEl = document.getElementById('sec-reviews');
    if (reviewsEl) {
      const yOffset = -140;
      const y = reviewsEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'sanan-toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }
}

/* 11. Sticky Floating Bottom Cart Bar & Scroll-To-Top Interaction */
function initFloatingBar() {
  const wrapper = document.querySelector('.sanan-floating-bar-wrapper');
  const mainCartBtn = document.querySelector('.sanan-pdp-btn-cart');
  const scrolltopBtn = document.querySelector('.sanan-float-scrolltop-btn');
  const floatCartBtn = document.querySelector('.sanan-float-cart-btn');
  const floatVariantSelect = document.querySelector('.sanan-float-variant-select');
  const floatPriceEl = document.querySelector('.sanan-float-price');
  const floatStrikeEl = document.querySelector('.sanan-float-strike');
  const floatDec = document.querySelector('.sanan-float-step-btn.float-dec');
  const floatInc = document.querySelector('.sanan-float-step-btn.float-inc');
  const floatInput = document.querySelector('.sanan-float-step-input');
  const mainInput = document.querySelector('.sanan-pdp-step-input');

  if (!wrapper || !mainCartBtn) return;

  // Use IntersectionObserver on the main Add To Cart button
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Once the main cart button scrolls ABOVE the viewport (out of screen)
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          wrapper.classList.add('is-visible');
          scrolltopBtn?.classList.add('is-visible');
        } else {
          wrapper.classList.remove('is-visible');
        }
      });
    },
    { threshold: 0 }
  );

  observer.observe(mainCartBtn);

  // Scroll listener for immediate bar visibility & bottom-right scroll-to-top button
  function updateFloatingElements() {
    const rect = mainCartBtn.getBoundingClientRect();
    if (rect.bottom < 120) {
      wrapper.classList.add('is-visible');
    } else {
      wrapper.classList.remove('is-visible');
    }

    if (window.scrollY > 450) {
      scrolltopBtn?.classList.add('is-visible');
    } else {
      scrolltopBtn?.classList.remove('is-visible');
    }
  }

  window.addEventListener('scroll', updateFloatingElements, { passive: true });
  updateFloatingElements();

  // Variant selector change sync
  floatVariantSelect?.addEventListener('change', function () {
    const selected = this.options[this.selectedIndex];
    const price = selected.getAttribute('data-price');
    const compare = selected.getAttribute('data-compare');
    const pack = this.value;

    if (price && floatPriceEl) floatPriceEl.textContent = price;
    if (compare && floatStrikeEl) floatStrikeEl.textContent = compare;

    // Sync with main buy box pack pills
    const mainPills = document.querySelectorAll('.sanan-pdp-pack-pill');
    mainPills.forEach(pill => {
      if (pill.getAttribute('data-pack') === pack) {
        pill.click();
      }
    });
  });

  // Listen to main buy box pack pill clicks to update float bar
  const mainPills = document.querySelectorAll('.sanan-pdp-pack-pill');
  mainPills.forEach(pill => {
    pill.addEventListener('click', function () {
      const pack = this.getAttribute('data-pack');
      const price = this.getAttribute('data-price');
      const compare = this.getAttribute('data-compare');

      if (floatVariantSelect) floatVariantSelect.value = pack;
      if (price && floatPriceEl) floatPriceEl.textContent = price;
      if (compare && floatStrikeEl) floatStrikeEl.textContent = compare;
    });
  });

  // Stepper sync
  floatDec?.addEventListener('click', () => {
    let v = parseInt(floatInput.value) || 1;
    if (v > 1) {
      v--;
      floatInput.value = v;
      if (mainInput) mainInput.value = v;
    }
  });

  floatInc?.addEventListener('click', () => {
    let v = parseInt(floatInput.value) || 1;
    v++;
    floatInput.value = v;
    if (mainInput) mainInput.value = v;
  });

  // Add to Cart click on floating bar
  floatCartBtn?.addEventListener('click', () => {
    const origText = floatCartBtn.textContent;
    floatCartBtn.textContent = 'Adding...';
    setTimeout(() => {
      floatCartBtn.textContent = '✓ Added';
      showToast('✓ Added Uplift Gummies to your cart');
      setTimeout(() => {
        floatCartBtn.textContent = origText;
      }, 2000);
    }, 400);
  });

  // Scroll to Top
  scrolltopBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'sanan-toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }
}




/* In-Page Sticky Nav Tray with Zero-Gap Docking to Header */
function initPdpInPageStickyNav() {
  const nav = document.getElementById('SananInPageNav');
  const headerCard = document.querySelector('.sanan-header-card') || document.querySelector('.sanan-header-dock');
  if (!nav) return;

  const links = nav.querySelectorAll('.sanan-inpage-link');
  const sections = Array.from(links).map(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      return document.querySelector(href);
    }
    return null;
  }).filter(Boolean);

  function onScroll() {
    const headerRect = headerCard ? headerCard.getBoundingClientRect() : { bottom: 0 };
    const navRect = nav.getBoundingClientRect();

    if (navRect.top <= headerRect.bottom + 2) {
      nav.classList.add('is-docked');
    } else {
      nav.classList.remove('is-docked');
    }

    let activeIndex = 0;
    const scrollPos = window.scrollY + 180;
    sections.forEach((sec, idx) => {
      if (sec.offsetTop <= scrollPos) {
        activeIndex = idx;
      }
    });

    links.forEach((link, idx) => {
      link.classList.toggle('is-active', idx === activeIndex);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        const offset = 140;
        const top = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// Inline left scroll to top
document.querySelectorAll('.sanan-float-scrolltop-left-btn, .sanan-float-scrolltop-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

document.addEventListener("DOMContentLoaded", initPdpInPageStickyNav);

/* Variant Grid Selectors (Type Cards, Flavor Pills, Count Cards with Badges) */
function initVariantGridSelectors() {
  // 1. Select Type: (Indica Chill, Hybrid Vibes, Sativa Surge)
  const typeCards = document.querySelectorAll('.sanan-type-card');
  typeCards.forEach(card => {
    card.addEventListener('click', function () {
      typeCards.forEach(c => {
        c.classList.remove('is-active');
        c.setAttribute('aria-pressed', 'false');
      });
      this.classList.add('is-active');
      this.setAttribute('aria-pressed', 'true');
    });
  });

  // 2. Select Flavor: (Large Rounded Pill Buttons)
  const flavorPills = document.querySelectorAll('.sanan-flavor-pill-btn');
  flavorPills.forEach(pill => {
    pill.addEventListener('click', function () {
      flavorPills.forEach(p => {
        p.classList.remove('is-active');
        p.setAttribute('aria-pressed', 'false');
      });
      this.classList.add('is-active');
      this.setAttribute('aria-pressed', 'true');
    });
  });

  // 3. Select Count: (Pack Variations with Save Badges & Tags)
  const countCards = document.querySelectorAll('.sanan-count-card');
  const mainPrice = document.querySelector('.sanan-pdp-main-price');
  const strikePrice = document.querySelector('.sanan-pdp-strike-price');
  const floatPrice = document.querySelector('.sanan-float-price');
  const floatStrike = document.querySelector('.sanan-float-strike');
  const floatSelect = document.querySelector('.sanan-float-variant-select');

  countCards.forEach(card => {
    card.addEventListener('click', function () {
      countCards.forEach(c => {
        c.classList.remove('is-active');
        c.setAttribute('aria-pressed', 'false');
      });
      this.classList.add('is-active');
      this.setAttribute('aria-pressed', 'true');

      const count = this.getAttribute('data-count');
      const price = this.getAttribute('data-price');
      const compare = this.getAttribute('data-compare');

      if (mainPrice && price) mainPrice.textContent = price;
      if (strikePrice && compare) strikePrice.textContent = compare;
      if (floatPrice && price) floatPrice.textContent = price;
      if (floatStrike && compare) floatStrike.textContent = compare;
      if (floatSelect && count) {
        Array.from(floatSelect.options).forEach(opt => {
          if (opt.value.includes(count.split(' ')[0])) {
            floatSelect.value = opt.value;
          }
        });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", initVariantGridSelectors);

/* How Does It Work Accordion Toggle */
function initHowWorksAccordion() {
  const triggers = document.querySelectorAll('.how-works-trigger');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', function () {
      const item = this.closest('.how-works-item');
      if (!item) return;
      const isOpen = item.classList.toggle('is-open');
      this.setAttribute('aria-expanded', isOpen);
    });
  });
}

document.addEventListener("DOMContentLoaded", initHowWorksAccordion);