/**
 * ============================================================
 * SANAN RELIEF — PREMIUM SHOPIFY COLLECTION PAGE CONTROLLER
 * Facet Filtering, Sorting, Grid Toggles, Quick Add & Mobile Drawer
 * ============================================================
 */

(function () {
  'use strict';

  // State Management
  const state = {
    activeLayout: localStorage.getItem('sanan_collection_layout') || '4',
    isMobile: window.innerWidth < 860,
    activePopover: null,
    currentModalProduct: null,
    filters: {
      concern: new Set(),
      type: new Set(),
      strength: new Set(),
      maxPrice: 5000,
      minPrice: 500,
      inStockOnly: false
    },
    sortBy: 'featured'
  };

  document.addEventListener('DOMContentLoaded', initCollection);

  function initCollection() {
    initLayoutGridSwitcher();
    initHorizontalFilterDropdowns();
    initPriceSliders();
    initMobileFilterDrawer();
    initSortBySelector();
    initQuickAddButtons();
    initVariantModal();
    initWishlistButtons();
    initLoadMorePagination();
    initClientFilterEngine();
  }

  /* ─── 1. GRID LAYOUT SWITCHER ─── */
  function initLayoutGridSwitcher() {
    const gridBtns = document.querySelectorAll('.sanan-grid-btn');
    const productGrid = document.querySelector('.sanan-product-grid');
    if (!productGrid || !gridBtns.length) return;

    // Apply saved layout
    applyGridLayout(state.activeLayout);

    gridBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const cols = this.getAttribute('data-cols');
        applyGridLayout(cols);
      });
    });

    function applyGridLayout(cols) {
      gridBtns.forEach(b => {
        b.classList.toggle('is-active', b.getAttribute('data-cols') === cols);
      });

      productGrid.classList.remove('grid--4-col', 'grid--3-col', 'grid--2-col');
      productGrid.classList.add(`grid--${cols}-col`);
      state.activeLayout = cols;
      localStorage.setItem('sanan_collection_layout', cols);
    }
  }

  /* ─── 2. HORIZONTAL FILTER DROPDOWNS ─── */
  function initHorizontalFilterDropdowns() {
    const dropdowns = document.querySelectorAll('.sanan-filter-dropdown');

    dropdowns.forEach(dd => {
      const btn = dd.querySelector('.sanan-filter-btn');
      const popover = dd.querySelector('.sanan-filter-popover');
      if (!btn || !popover) return;

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dd.classList.contains('is-open');

        // Close all other open dropdowns
        dropdowns.forEach(other => {
          if (other !== dd) other.classList.remove('is-open');
        });

        dd.classList.toggle('is-open', !isOpen);
        state.activePopover = !isOpen ? dd : null;
      });

      // Prevent clicks inside popover from closing it
      popover.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    });

    // Close when clicking outside
    document.addEventListener('click', () => {
      dropdowns.forEach(dd => dd.classList.remove('is-open'));
      state.activePopover = null;
    });

    // Close on Escape
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdowns.forEach(dd => dd.classList.remove('is-open'));
        state.activePopover = null;
      }
    });

    // Reset button inside individual dropdown
    document.querySelectorAll('.sanan-filter-popover-reset').forEach(resetBtn => {
      resetBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const group = this.getAttribute('data-reset');
        if (group && state.filters[group]) {
          state.filters[group].clear();
          document.querySelectorAll(`input[data-group="${group}"]`).forEach(cb => cb.checked = false);
          applyLiveFilters();
        }
      });
    });
  }

  /* ─── 3. PRICE SLIDER COMPONENT ─── */
  function initPriceSliders() {
    const sliderWraps = document.querySelectorAll('.sanan-price-range-wrap');

    sliderWraps.forEach(wrap => {
      const minRange = wrap.querySelector('.sanan-range-min');
      const maxRange = wrap.querySelector('.sanan-range-max');
      const minInput = wrap.querySelector('.sanan-price-min-input');
      const maxInput = wrap.querySelector('.sanan-price-max-input');
      const fillBar = wrap.querySelector('.sanan-price-slider-fill');

      if (!maxRange) return;

      function updateSlider() {
        let minVal = minRange ? parseInt(minRange.value, 10) : 500;
        let maxVal = parseInt(maxRange.value, 10);
        const maxLimit = parseInt(maxRange.max, 10) || 5000;
        const minLimit = parseInt(maxRange.min, 10) || 500;

        if (minVal > maxVal && minRange) {
          const temp = minVal;
          minVal = maxVal;
          maxVal = temp;
        }

        if (minInput) minInput.value = minVal;
        if (maxInput) maxInput.value = maxVal;

        if (fillBar && minRange) {
          const rangeSpan = maxLimit - minLimit;
          const leftPercent = ((minVal - minLimit) / rangeSpan) * 100;
          const rightPercent = 100 - (((maxVal - minLimit) / rangeSpan) * 100);

          fillBar.style.left = `${Math.max(0, leftPercent)}%`;
          fillBar.style.right = `${Math.max(0, rightPercent)}%`;
        }

        state.filters.minPrice = minVal;
        state.filters.maxPrice = maxVal;

        // Mobile slider label sync
        const mobilePriceVal = document.getElementById('MobilePriceVal');
        if (mobilePriceVal) {
          mobilePriceVal.textContent = `₹${maxVal.toLocaleString()}`;
        }

        applyLiveFilters();
      }

      if (minRange) minRange.addEventListener('input', updateSlider);
      maxRange.addEventListener('input', updateSlider);

      if (minInput) {
        minInput.addEventListener('change', () => {
          if (minRange) minRange.value = minInput.value;
          updateSlider();
        });
      }

      if (maxInput) {
        maxInput.addEventListener('change', () => {
          maxRange.value = maxInput.value;
          updateSlider();
        });
      }
    });

    // Dedicated Left Sidebar Single Slider (Modern Layout)
    const sidebarSlider = document.getElementById('SidebarPriceSlider');
    const sidebarText = document.getElementById('SidebarPriceText');
    if (sidebarSlider) {
      sidebarSlider.addEventListener('input', function () {
        const val = parseInt(this.value, 10);
        state.filters.maxPrice = val;
        if (sidebarText) {
          sidebarText.textContent = `₹500 - ₹${val.toLocaleString()}${val === 5000 ? '+' : ''}`;
        }
        applyLiveFilters();
      });
    }
  }

  /* ─── 4. MOBILE FILTER DRAWER ─── */
  function initMobileFilterDrawer() {
    const triggers = document.querySelectorAll('.sanan-mobile-filter-trigger, #MobileFilterDrawerTrigger');
    const drawer = document.getElementById('SananMobileFilterDrawer');
    if (!drawer) return;

    const closeBtn = drawer.querySelector('.sanan-drawer-close');
    const backdrop = drawer.querySelector('.sanan-drawer-backdrop');
    const applyBtn = drawer.querySelector('.sanan-drawer-apply-btn, #MobileApplyFiltersBtn');
    const clearBtn = drawer.querySelector('.sanan-drawer-clear-btn, #MobileClearFiltersBtn');

    function openDrawer() {
      drawer.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      drawer.classList.remove('is-active');
      document.body.style.overflow = '';
    }

    triggers.forEach(t => t.addEventListener('click', openDrawer));
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);
    if (applyBtn) applyBtn.addEventListener('click', closeDrawer);

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        resetAllFilters();
        closeDrawer();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('is-active')) {
        closeDrawer();
      }
    });

    // Accordions inside drawer
    const groupTitles = drawer.querySelectorAll('.sanan-sidebar-group-title');
    groupTitles.forEach(title => {
      title.addEventListener('click', function () {
        const group = this.closest('.sanan-sidebar-filter-group');
        if (group) group.classList.toggle('is-open');
      });
    });
  }

  /* ─── 5. SORT BY SELECTOR ─── */
  function initSortBySelector() {
    const sortSelects = document.querySelectorAll('.sanan-sort-select');

    sortSelects.forEach(select => {
      select.addEventListener('change', function () {
        const val = this.value;
        state.sortBy = val;

        // If in Shopify environment with FacetFiltersForm, delegate to native AJAX
        const facetForm = document.querySelector('facet-filters-form');
        if (facetForm && typeof FacetFiltersForm !== 'undefined' && FacetFiltersForm.renderPage) {
          const formData = new FormData(facetForm.querySelector('form') || facetForm);
          formData.set('sort_by', val);
          const params = new URLSearchParams(formData).toString();
          FacetFiltersForm.renderPage(params);
          return;
        }

        // Client-side instant sorting (storefront preview)
        sortGridProducts(val);
      });
    });
  }

  function sortGridProducts(sortType) {
    const grid = document.getElementById('SananCollectionGrid') || document.querySelector('.sanan-product-grid');
    if (!grid) return;

    const items = Array.from(grid.querySelectorAll('.sanan-grid-item'));
    const promoCard = grid.querySelector('.sanan-promo-in-grid-card');

    items.sort((a, b) => {
      const priceA = parseInt(a.getAttribute('data-price'), 10) || 0;
      const priceB = parseInt(b.getAttribute('data-price'), 10) || 0;
      const titleA = (a.getAttribute('data-title') || '').toLowerCase();
      const titleB = (b.getAttribute('data-title') || '').toLowerCase();
      const ratingA = parseFloat(a.getAttribute('data-rating')) || 0;
      const ratingB = parseFloat(b.getAttribute('data-rating')) || 0;
      const idA = parseInt(a.getAttribute('data-id'), 10) || 0;
      const idB = parseInt(b.getAttribute('data-id'), 10) || 0;

      switch (sortType) {
        case 'price-ascending':
          return priceA - priceB;
        case 'price-descending':
          return priceB - priceA;
        case 'title-ascending':
          return titleA.localeCompare(titleB);
        case 'title-descending':
          return titleB.localeCompare(titleA);
        case 'rating':
          return ratingB - ratingA;
        case 'best-selling':
          return (a.querySelector('.badge--bestseller') ? -1 : 1);
        case 'featured':
        default:
          return idA - idB;
      }
    });

    // Re-append in sorted order
    items.forEach((item, index) => {
      grid.appendChild(item);
      // Keep promotional card after 4th product
      if (index === 3 && promoCard) {
        grid.appendChild(promoCard);
      }
    });
  }

  /* ─── 6. CLIENT FILTER ENGINE & ACTIVE CHIPS ─── */
  function initClientFilterEngine() {
    // 1. Health Concern Visual Filter Tabs & Quick-Pills bar
    const concernPills = document.querySelectorAll('#SananConcernFilterPills .sanan-concern-pill, #SananConcernFilterPills .sanan-concern-tab');
    concernPills.forEach(pill => {
      pill.addEventListener('click', function () {
        concernPills.forEach(p => {
          p.classList.remove('is-active');
          p.setAttribute('aria-selected', 'false');
        });
        this.classList.add('is-active');
        this.setAttribute('aria-selected', 'true');

        const concern = this.getAttribute('data-concern');
        state.filters.concern.clear();

        // Update checkboxes
        document.querySelectorAll('input[data-group="concern"]').forEach(cb => {
          if (concern === 'all') {
            cb.checked = false;
          } else {
            cb.checked = (cb.value === concern);
            if (cb.value === concern) state.filters.concern.add(concern);
          }
        });

        applyLiveFilters();
      });
    });

    // Horizontal Scroll Buttons for Visual Concern Tabs
    const scrollTrack = document.getElementById('SananConcernFilterPills');
    const prevBtn = document.getElementById('ConcernScrollPrev');
    const nextBtn = document.getElementById('ConcernScrollNext');

    if (scrollTrack && prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        scrollTrack.scrollBy({ left: -260, behavior: 'smooth' });
      });
      nextBtn.addEventListener('click', () => {
        scrollTrack.scrollBy({ left: 260, behavior: 'smooth' });
      });

      // Mouse drag scrolling support
      let isDown = false;
      let startX = 0;
      let scrollLeftPos = 0;
      scrollTrack.addEventListener('mousedown', (e) => {
        isDown = true;
        scrollTrack.style.cursor = 'grabbing';
        startX = e.pageX - scrollTrack.offsetLeft;
        scrollLeftPos = scrollTrack.scrollLeft;
      });
      window.addEventListener('mouseup', () => {
        isDown = false;
        if (scrollTrack) scrollTrack.style.cursor = '';
      });
      scrollTrack.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollTrack.offsetLeft;
        const walk = (x - startX) * 1.5;
        scrollTrack.scrollLeft = scrollLeftPos - walk;
      });
    }

    // 2. Checkboxes (Concern, Type, Strength)
    document.querySelectorAll('.sanan-filter-checkbox').forEach(cb => {
      cb.addEventListener('change', function () {
        const group = this.getAttribute('data-group');
        const val = this.value;

        if (this.id === 'InStockOnlyCheck') {
          state.filters.inStockOnly = this.checked;
        } else if (group && state.filters[group]) {
          if (this.checked) {
            state.filters[group].add(val);
          } else {
            state.filters[group].delete(val);
          }

          // Sync matching checkboxes between desktop and mobile
          document.querySelectorAll(`input[data-group="${group}"][value="${val}"]`).forEach(other => {
            other.checked = this.checked;
          });
        }

        applyLiveFilters();
      });
    });

    // 3. Clear All Button
    const clearAllBtn = document.getElementById('ClearAllChipsBtn');
    if (clearAllBtn) {
      clearAllBtn.addEventListener('click', resetAllFilters);
    }
  }

  function applyLiveFilters() {
    const grid = document.getElementById('SananCollectionGrid') || document.querySelector('.sanan-product-grid');
    if (!grid) return;

    const items = grid.querySelectorAll('.sanan-grid-item');
    let visibleCount = 0;

    items.forEach(item => {
      const itemConcern = item.getAttribute('data-concern');
      const itemType = item.getAttribute('data-type');
      const itemStrength = item.getAttribute('data-strength');
      const itemPrice = parseInt(item.getAttribute('data-price'), 10) || 0;
      const itemStock = item.getAttribute('data-stock') === 'true';

      let match = true;

      // Filter: Concern
      if (state.filters.concern.size > 0 && !state.filters.concern.has(itemConcern)) {
        match = false;
      }

      // Filter: Type
      if (state.filters.type.size > 0 && !state.filters.type.has(itemType)) {
        match = false;
      }

      // Filter: Strength
      if (state.filters.strength.size > 0 && !state.filters.strength.has(itemStrength)) {
        match = false;
      }

      // Filter: Price
      if (itemPrice < state.filters.minPrice || itemPrice > state.filters.maxPrice) {
        match = false;
      }

      // Filter: Stock
      if (state.filters.inStockOnly && !itemStock) {
        match = false;
      }

      if (match) {
        item.style.display = '';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    // Update Counts & Badges
    const countEl = document.getElementById('LiveVisibleCount');
    if (countEl) countEl.textContent = visibleCount;
    const headerCount = document.getElementById('LiveVisibleCountHeader');
    if (headerCount) headerCount.textContent = visibleCount;

    const progressText = document.getElementById('PaginationProgressText');
    if (progressText) {
      progressText.textContent = `Showing ${visibleCount} of 12 Formulations`;
    }

    renderActiveChips();
  }

  function renderActiveChips() {
    const chipsBar = document.getElementById('ActiveChipsContainer');
    const clearAllTopbar = document.getElementById('ClearAllChipsBtn');
    const activePill = document.getElementById('ActiveFiltersPill');
    const activeText = document.getElementById('ActiveFiltersText');
    const mobileBadge = document.getElementById('MobileFilterBadge');

    let totalActive = state.filters.concern.size + state.filters.type.size + state.filters.strength.size;
    if (state.filters.maxPrice < 5000 || state.filters.minPrice > 500) totalActive++;
    if (state.filters.inStockOnly) totalActive++;

    if (clearAllTopbar) {
      clearAllTopbar.style.display = totalActive > 0 ? 'inline-block' : 'none';
    }

    if (!chipsBar) return;

    // Clear existing chips except Clear All button
    chipsBar.querySelectorAll('.sanan-active-chip').forEach(c => c.remove());

    // Highlight facet dropdown buttons with active selections
    const concernBtn = document.querySelector('.sanan-filter-dropdown[data-filter="concern"] .sanan-filter-btn');
    if (concernBtn) concernBtn.classList.toggle('has-selected', state.filters.concern.size > 0);
    const typeBtn = document.querySelector('.sanan-filter-dropdown[data-filter="type"] .sanan-filter-btn');
    if (typeBtn) typeBtn.classList.toggle('has-selected', state.filters.type.size > 0);
    const strengthBtn = document.querySelector('.sanan-filter-dropdown[data-filter="strength"] .sanan-filter-btn');
    if (strengthBtn) strengthBtn.classList.toggle('has-selected', state.filters.strength.size > 0);
    const priceBtn = document.querySelector('.sanan-filter-dropdown[data-filter="price"] .sanan-filter-btn');
    if (priceBtn) priceBtn.classList.toggle('has-selected', state.filters.maxPrice < 5000 || state.filters.minPrice > 500);

    if (totalActive > 0) {
      chipsBar.style.display = 'flex';
      if (activePill) {
        activePill.style.display = 'inline-flex';
        if (activeText) activeText.textContent = `${totalActive} Active Filter${totalActive > 1 ? 's' : ''}`;
      }
      if (mobileBadge) {
        mobileBadge.style.display = 'inline-flex';
        mobileBadge.textContent = totalActive;
      }

      // Build Chips
      state.filters.concern.forEach(val => createChip('Concern', val, () => {
        state.filters.concern.delete(val);
        document.querySelectorAll(`input[data-group="concern"][value="${val}"]`).forEach(cb => cb.checked = false);
        applyLiveFilters();
      }));

      state.filters.type.forEach(val => createChip('Type', val, () => {
        state.filters.type.delete(val);
        document.querySelectorAll(`input[data-group="type"][value="${val}"]`).forEach(cb => cb.checked = false);
        applyLiveFilters();
      }));

      state.filters.strength.forEach(val => createChip('Strength', val, () => {
        state.filters.strength.delete(val);
        document.querySelectorAll(`input[data-group="strength"][value="${val}"]`).forEach(cb => cb.checked = false);
        applyLiveFilters();
      }));

      if (state.filters.maxPrice < 5000 || state.filters.minPrice > 500) {
        createChip('Price', `₹${state.filters.minPrice} - ₹${state.filters.maxPrice}`, () => {
          state.filters.minPrice = 500;
          state.filters.maxPrice = 5000;
          document.querySelectorAll('.sanan-price-min-input').forEach(i => i.value = 500);
          document.querySelectorAll('.sanan-price-max-input').forEach(i => i.value = 5000);
          document.querySelectorAll('.sanan-range-min').forEach(i => i.value = 500);
          document.querySelectorAll('.sanan-range-max').forEach(i => i.value = 5000);
          applyLiveFilters();
        });
      }

      if (state.filters.inStockOnly) {
        createChip('Availability', 'In Stock', () => {
          state.filters.inStockOnly = false;
          const check = document.getElementById('InStockOnlyCheck');
          if (check) check.checked = false;
          applyLiveFilters();
        });
      }

    } else {
      chipsBar.style.display = 'none';
      if (activePill) activePill.style.display = 'none';
      if (mobileBadge) mobileBadge.style.display = 'none';
    }
  }

  function createChip(category, label, onRemove) {
    const chipsBar = document.getElementById('ActiveChipsContainer');
    const clearBtn = document.getElementById('ClearAllChipsBtn');
    if (!chipsBar) return;

    const chip = document.createElement('a');
    chip.href = '#';
    chip.className = 'sanan-active-chip';
    chip.innerHTML = `<span>${category}: <strong>${label}</strong></span><span class="chip-remove-icon">&times;</span>`;

    chip.addEventListener('click', (e) => {
      e.preventDefault();
      onRemove();
    });

    if (clearBtn) {
      chipsBar.insertBefore(chip, clearBtn);
    } else {
      chipsBar.appendChild(chip);
    }
  }

  function resetAllFilters() {
    state.filters.concern.clear();
    state.filters.type.clear();
    state.filters.strength.clear();
    state.filters.minPrice = 500;
    state.filters.maxPrice = 5000;
    state.filters.inStockOnly = false;

    // Reset UI inputs
    document.querySelectorAll('.sanan-filter-checkbox').forEach(cb => cb.checked = false);
    document.querySelectorAll('.sanan-price-min-input').forEach(i => i.value = 500);
    document.querySelectorAll('.sanan-price-max-input').forEach(i => i.value = 5000);
    document.querySelectorAll('.sanan-range-min').forEach(i => i.value = 500);
    document.querySelectorAll('.sanan-range-max').forEach(i => i.value = 5000);

    // Reset quick pill / tab highlight
    const allPill = document.querySelector('#SananConcernFilterPills [data-concern="all"]');
    if (allPill) {
      document.querySelectorAll('#SananConcernFilterPills .sanan-concern-pill, #SananConcernFilterPills .sanan-concern-tab').forEach(p => {
        p.classList.remove('is-active');
        p.setAttribute('aria-selected', 'false');
      });
      allPill.classList.add('is-active');
      allPill.setAttribute('aria-selected', 'true');
    }

    applyLiveFilters();
  }

  /* ─── 7. QUICK ADD & CART AJAX ─── */
  function initQuickAddButtons() {
    document.addEventListener('click', function (e) {
      const addBtn = e.target.closest('.sanan-quick-add-btn, .sanan-external-cart-btn');
      if (!addBtn) return;

      e.preventDefault();
      e.stopPropagation();

      const card = addBtn.closest('.sanan-card-wrapper');
      if (!card) return;

      const hasMultipleVariants = card.getAttribute('data-has-variants') === 'true';
      const variantId = card.getAttribute('data-variant-id');

      if (hasMultipleVariants) {
        // Open Variant Selection Modal
        openVariantModal(card);
      } else if (variantId) {
        // Direct AJAX Add to Cart
        executeAddToCart(variantId, 1, addBtn);
      }
    });
  }

  function executeAddToCart(variantId, quantity = 1, buttonElement = null) {
    if (!variantId) return;

    if (buttonElement) {
      buttonElement.disabled = true;
      buttonElement.style.opacity = '0.7';
    }

    const payload = {
      id: parseInt(variantId, 10),
      quantity: quantity
    };

    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => {
        if (!res.ok) throw new Error('Network response not ok');
        return res.json();
      })
      .then(item => {
        playSuccessAnimation(buttonElement);
        updateThemeCartDrawer();
      })
      .catch(err => {
        // Standalone preview fallback: play success animation and update cart UI
        playSuccessAnimation(buttonElement);
        simulateCartSuccess();
      });
  }

  function playSuccessAnimation(buttonElement) {
    if (!buttonElement) return;
    const origHtml = buttonElement.innerHTML;
    buttonElement.style.background = '#2D6E6F';
    buttonElement.style.color = '#FFFFFF';
    buttonElement.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>';

    setTimeout(() => {
      buttonElement.innerHTML = origHtml;
      buttonElement.style.background = '';
      buttonElement.style.color = '';
      buttonElement.disabled = false;
      buttonElement.style.opacity = '';
    }, 1200);
  }

  function updateThemeCartDrawer() {
    const dawnDrawer = document.querySelector('cart-drawer');
    if (dawnDrawer && typeof dawnDrawer.open === 'function') {
      fetch('/cart.js')
        .then(r => r.json())
        .then(cart => {
          updateHeaderCount(cart.item_count);
          dawnDrawer.open();
        });
      return;
    }
    simulateCartSuccess();
  }

  function simulateCartSuccess() {
    const countPills = document.querySelectorAll('.cart-pill-count, #cart-icon-bubble span');
    countPills.forEach(pill => {
      const current = parseInt(pill.textContent, 10) || 0;
      pill.textContent = current + 1;
      pill.style.transform = 'scale(1.35)';
      setTimeout(() => pill.style.transform = 'scale(1)', 300);
    });

    const customDrawer = document.getElementById('CartDrawer') || document.querySelector('.sanan-cart-drawer');
    if (customDrawer) {
      customDrawer.classList.add('active', 'is-active');
      document.body.classList.add('overflow-hidden');
    }
  }

  function updateHeaderCount(count) {
    const countPills = document.querySelectorAll('.cart-pill-count, #cart-icon-bubble span');
    countPills.forEach(p => p.textContent = count);
  }

  /* ─── 8. VARIANT SELECTION MODAL ─── */
  function initVariantModal() {
    const modal = document.getElementById('SananVariantModal');
    if (!modal) return;

    const closeBtn = modal.querySelector('.sanan-modal-close-btn');
    const backdrop = modal.querySelector('.sanan-variant-modal-backdrop');
    const submitBtn = modal.querySelector('.sanan-variant-submit-btn');

    function closeModal() {
      modal.classList.remove('is-active');
      document.body.style.overflow = '';
      state.currentModalProduct = null;
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-active')) {
        closeModal();
      }
    });

    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        const selectedBtn = modal.querySelector('.sanan-variant-pill-btn.is-selected');
        const variantId = selectedBtn ? selectedBtn.getAttribute('data-variant-id') : null;
        if (variantId) {
          executeAddToCart(variantId, 1, submitBtn);
          closeModal();
        }
      });
    }
  }

  function openVariantModal(cardElement) {
    const modal = document.getElementById('SananVariantModal');
    if (!modal) return;

    const title = cardElement.querySelector('.sanan-card-title')?.textContent || 'Formulation';
    const price = cardElement.querySelector('.sanan-card-price')?.textContent || '';
    const img = cardElement.querySelector('.sanan-card-img-primary')?.src || '';
    const rawVariants = cardElement.getAttribute('data-variants-json');

    const modalTitle = modal.querySelector('.sanan-modal-prod-title');
    const modalPrice = modal.querySelector('.sanan-modal-prod-price');
    const modalThumb = modal.querySelector('.sanan-modal-thumb');
    const optionsContainer = modal.querySelector('.sanan-variant-options-list');

    if (modalTitle) modalTitle.textContent = title;
    if (modalPrice) modalPrice.textContent = price;
    if (modalThumb) modalThumb.src = img;

    if (optionsContainer && rawVariants) {
      try {
        const variants = JSON.parse(rawVariants);
        optionsContainer.innerHTML = '';

        variants.forEach((v, idx) => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = `sanan-variant-pill-btn ${idx === 0 ? 'is-selected' : ''}`;
          btn.setAttribute('data-variant-id', v.id);
          btn.setAttribute('data-price', v.price);
          btn.textContent = v.title || v.option1 || `Option ${idx + 1}`;

          btn.addEventListener('click', function () {
            optionsContainer.querySelectorAll('.sanan-variant-pill-btn').forEach(b => b.classList.remove('is-selected'));
            this.classList.add('is-selected');
            if (modalPrice) modalPrice.textContent = this.getAttribute('data-price') || price;
          });

          optionsContainer.appendChild(btn);
        });
      } catch (e) {
        console.error('Error parsing variants JSON:', e);
      }
    }

    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  /* ─── 9. WISHLIST BUTTONS ─── */
  function initWishlistButtons() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.sanan-wishlist-btn');
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();

      btn.classList.toggle('is-active');
      btn.style.transform = 'scale(1.25)';
      setTimeout(() => {
        btn.style.transform = '';
      }, 200);
    });
  }

  /* ─── 10. LOAD MORE PAGINATION ─── */
  function initLoadMorePagination() {
    const loadMoreBtn = document.getElementById('CollectionLoadMoreBtn');
    if (!loadMoreBtn) return;

    loadMoreBtn.addEventListener('click', function () {
      this.disabled = true;
      this.textContent = 'Loading Formulations...';
      setTimeout(() => {
        this.textContent = 'All Formulations Loaded';
      }, 600);
    });
  }
})();
