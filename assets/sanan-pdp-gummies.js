/*
 * ============================================================
 * SANAN RELIEF — RECREATIONAL GUMMIES REACTIVE FLAVOUR ENGINE
 * Instant Client-Side Content & Character Theming Without Page Reload
 * ============================================================
 */

const GUMMY_FLAVOURS = {
  'black-currant': {
    id: 'black-currant',
    name: 'Black Currant',
    doseMg: '400mg',
    characterTitle: 'Midnight Zen & Deep Rest',
    characterSub: 'Indica Leaning • Nocturnal Bliss',
    tagline: 'Deep Berry Calm • Unwind the Mind & Drift into Rest',
    headline: 'Uplift Gummies 500mg – Blackcurrant Vatis for Chronic Pain & Deep Rest',
    themeColor: '#7858A6',
    themeDark: '#3B0764',
    themeLight: '#F3E8FF',
    themeAccent: '#C084FC',
    themeGlow: 'rgba(120, 88, 166, 0.35)',
    themeGradient: 'linear-gradient(135deg, #7858A6 0%, #4C1D95 100%)',
    price: 'Rs. 2,599.00',
    comparePrice: 'Rs. 2,999.00',
    savePct: 'Save 13%',
    heroImg: '../assets/gummy-blackcurrant-hero.svg',
    gallery: [
      { src: '../assets/gummy-blackcurrant-hero.svg', label: 'Main Pack', alt: 'Blackcurrant Uplift Gummies' },
      { src: '../assets/editorial-banner-gummies.png', label: 'Juicy Texture', alt: 'Gummy texture' },
      { src: '../assets/gummy-blackcurrant-detail.svg', label: '400mg Potency', alt: 'Potency breakdown' },
      { src: '../assets/promo-banner-gummies-2x.jpg', label: 'Evening Vibe', alt: 'Evening ritual' }
    ],
    vibeMeter: {
      relaxation: 95,
      bodyEase: 92,
      euphoria: 70,
      energy: 25,
      chillScore: '9.8 / 10'
    },
    tasting: {
      phase1: 'Juicy dark wild currant with sweet-tart notes',
      phase2: 'Warm tension release creeping down the neck & shoulders',
      phase3: 'Heavy eyelids, deep quiet mind, pure restful sleep',
      terpenes: 'Myrcene, Linalool, Beta-Caryophyllene'
    },
    stats: {
      totalVijaya: '4000 mg',
      totalActives: '4000 mg',
      perGummyVijaya: '400 mg',
      perGummyActives: '400 mg',
      potencyBadge: 'EXTRA POTENCY'
    }
  },
  'mango': {
    id: 'mango',
    name: 'Mango',
    doseMg: '315mg',
    characterTitle: 'Sunburst Euphoria & Joy',
    characterSub: 'Hybrid Balanced • Golden Afternoon Glow',
    tagline: 'Tropical Sunshine • Uplifting Smiles & Mind Ease',
    headline: 'Uplift Gummies 500mg – Alphonso Mango for Elevated Mood & Euphoria',
    themeColor: '#D97706',
    themeDark: '#78350F',
    themeLight: '#FEF3C7',
    themeAccent: '#FDE68A',
    themeGlow: 'rgba(245, 158, 11, 0.35)',
    themeGradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    price: 'Rs. 2,499.00',
    comparePrice: 'Rs. 2,899.00',
    savePct: 'Save 14%',
    heroImg: '../assets/gummy-mango-hero.svg',
    gallery: [
      { src: '../assets/gummy-mango-hero.svg', label: 'Main Pack', alt: 'Mango Uplift Gummies' },
      { src: '../assets/editorial-banner-gummy-vatis.png', label: 'Juicy Core', alt: 'Mango Gummy Bite' },
      { src: '../assets/gummy-mango-detail.svg', label: '315mg Active', alt: 'Mango Potency' },
      { src: '../assets/promo-banner-gummies.jpg', label: 'Daytime Bliss', alt: 'Social Bliss' }
    ],
    vibeMeter: {
      relaxation: 75,
      bodyEase: 80,
      euphoria: 96,
      energy: 72,
      chillScore: '9.3 / 10'
    },
    tasting: {
      phase1: 'Sun-ripened Alphonso mango pulp, juicy & fragrant',
      phase2: 'Waves of golden laughter, creative optimism & lightness',
      phase3: 'Gentle melting body buzz without midday slump',
      terpenes: 'Limonene, Terpinolene, Beta-Caryophyllene'
    },
    stats: {
      totalVijaya: '3150 mg',
      totalActives: '3150 mg',
      perGummyVijaya: '315 mg',
      perGummyActives: '315 mg',
      potencyBadge: 'DAYTIME EUPHORIA'
    }
  },
  'cola': {
    id: 'cola',
    name: 'Cola',
    doseMg: '350mg',
    characterTitle: 'Retro Fizz & Social Chill',
    characterSub: 'Indica-Dominant • Effortless Body Ease',
    tagline: 'Vintage Effervescence • Full-Body Unwind & Good Vibes',
    headline: 'Uplift Gummies 500mg – Spiced Botanical Cola for Body Relief & Chill',
    themeColor: '#92400E',
    themeDark: '#451A03',
    themeLight: '#FDF2E9',
    themeAccent: '#FBBF24',
    themeGlow: 'rgba(180, 83, 9, 0.35)',
    themeGradient: 'linear-gradient(135deg, #B45309 0%, #78350F 100%)',
    price: 'Rs. 2,549.00',
    comparePrice: 'Rs. 2,999.00',
    savePct: 'Save 15%',
    heroImg: '../assets/gummy-cola-hero.svg',
    gallery: [
      { src: '../assets/gummy-cola-hero.svg', label: 'Main Pack', alt: 'Cola Uplift Gummies' },
      { src: '../assets/editorial-banner-gummies.png', label: 'Fizzy Spice', alt: 'Cola bite' },
      { src: '../assets/gummy-cola-detail.svg', label: '350mg Active', alt: 'Cola Potency' },
      { src: '../assets/promo-banner-gummies-2x.jpg', label: 'Hangout Mood', alt: 'Chill evening' }
    ],
    vibeMeter: {
      relaxation: 88,
      bodyEase: 94,
      euphoria: 82,
      energy: 40,
      chillScore: '9.4 / 10'
    },
    tasting: {
      phase1: 'Fizzy spiced cola note with cinnamon and vanilla hints',
      phase2: 'Total physical decompression, sore muscles letting go',
      phase3: 'Deep couch comfort, listening to vinyl records, total peace',
      terpenes: 'Humulene, Pinene, Beta-Caryophyllene'
    },
    stats: {
      totalVijaya: '3500 mg',
      totalActives: '3500 mg',
      perGummyVijaya: '350 mg',
      perGummyActives: '350 mg',
      potencyBadge: 'PHYSICAL DECOMPRESSION'
    }
  },
  'raw-mango': {
    id: 'raw-mango',
    name: 'Raw Mango',
    doseMg: '350mg',
    characterTitle: 'Kaccha Aam Rush & Tangy Spark',
    characterSub: 'Sativa Leaning • Crisp Sensory Spark',
    tagline: 'Bold Zesty Tang • Awakens Senses & Sparks Conversation',
    headline: 'Uplift Gummies 500mg – Raw Mango (Kairi) for Sensory Awakening & Focus',
    themeColor: '#65A30D',
    themeDark: '#365314',
    themeLight: '#ECFCCB',
    themeAccent: '#BEF264',
    themeGlow: 'rgba(101, 163, 13, 0.35)',
    themeGradient: 'linear-gradient(135deg, #84CC16 0%, #4D7C0F 100%)',
    price: 'Rs. 2,549.00',
    comparePrice: 'Rs. 2,999.00',
    savePct: 'Save 15%',
    heroImg: '../assets/gummy-rawmango-hero.svg',
    gallery: [
      { src: '../assets/gummy-rawmango-hero.svg', label: 'Main Pack', alt: 'Raw Mango Uplift Gummies' },
      { src: '../assets/editorial-banner-gummy-vatis.png', label: 'Zesty Tang', alt: 'Raw Mango bite' },
      { src: '../assets/gummy-rawmango-detail.svg', label: '350mg Spark', alt: 'Raw Mango Potency' },
      { src: '../assets/promo-banner-gummies.jpg', label: 'Vibrant Vibe', alt: 'Sunny park vibe' }
    ],
    vibeMeter: {
      relaxation: 65,
      bodyEase: 70,
      euphoria: 92,
      energy: 88,
      chillScore: '9.0 / 10'
    },
    tasting: {
      phase1: 'Mouth-puckering green mango with authentic masala salt zing',
      phase2: 'Crisp mental clarity, sensory colours popping, vibrant focus',
      phase3: 'Sustained good mood with zero midday fatigue',
      terpenes: 'Terpinolene, Ocimene, Limonene'
    },
    stats: {
      totalVijaya: '3500 mg',
      totalActives: '3500 mg',
      perGummyVijaya: '350 mg',
      perGummyActives: '350 mg',
      potencyBadge: 'SENSORY AWAKENING'
    }
  },
  'citrus-lemon': {
    id: 'citrus-lemon',
    name: 'Citrus/Sour Lemon',
    doseMg: '200mg',
    characterTitle: 'Solar Surge & Flow State',
    characterSub: 'Micro-Dose Sativa • Pure Daytime Energy',
    tagline: 'Electric Lemon Spark • Clean Flow, Creativity & Functional Calm',
    headline: 'Uplift Gummies 500mg – Sour Lemon Drop for Clean Focus & Daytime Flow',
    themeColor: '#EAB308',
    themeDark: '#854D0E',
    themeLight: '#FEF9C3',
    themeAccent: '#FEF08A',
    themeGlow: 'rgba(234, 179, 8, 0.35)',
    themeGradient: 'linear-gradient(135deg, #FACC15 0%, #CA8A04 100%)',
    price: 'Rs. 2,399.00',
    comparePrice: 'Rs. 2,799.00',
    savePct: 'Save 14%',
    heroImg: '../assets/gummy-citrus-hero.svg',
    gallery: [
      { src: '../assets/gummy-citrus-hero.svg', label: 'Main Pack', alt: 'Sour Lemon Uplift Gummies' },
      { src: '../assets/editorial-banner-gummies.png', label: 'Neon Citrus', alt: 'Citrus bite' },
      { src: '../assets/gummy-citrus-detail.svg', label: '200mg Flow', alt: 'Citrus Potency' },
      { src: '../assets/promo-banner-gummies-2x.jpg', label: 'Creative Studio', alt: 'Flow state' }
    ],
    vibeMeter: {
      relaxation: 60,
      bodyEase: 65,
      euphoria: 89,
      energy: 96,
      chillScore: '8.9 / 10'
    },
    tasting: {
      phase1: 'Electric lemon candy sourness bursting into herbal sweetness',
      phase2: 'Immediate brain fog lifting, locked-in focus, music sounds richer',
      phase3: 'Smooth gentle taper with zero jitter or anxiety',
      terpenes: 'Citral, Valencene, Pinene'
    },
    stats: {
      totalVijaya: '2000 mg',
      totalActives: '2000 mg',
      perGummyVijaya: '200 mg',
      perGummyActives: '200 mg',
      potencyBadge: 'DAYTIME FLOW STATE'
    }
  }
};

let currentFlavourId = 'black-currant';

document.addEventListener('DOMContentLoaded', function () {
  initGummyFlavourEngine();
  initDescriptionToggle();
  initInPageStickyNav();
  initQuantityAndPackControls();
  initPackSelectors();
  initRxRadioOptions();
  initStepper();
  initCartActions();
  initTypeCardSelectors();
  initAnchorNav();
  initStickyNavDock();
  initPotencyAccordion();
  initReviewsPagination();
  initWriteReviewModal();
  initFloatingBar();
});

/* 1. Dynamic Flavour & Character Switching Engine (No Page Refresh) */
function initGummyFlavourEngine() {
  const flavorPills = document.querySelectorAll('.sanan-pdp-flavour-pill, .gummy-flavor-card');
  const characterCards = document.querySelectorAll('.character-card, .gummy-character-item');
  const switchBtns = document.querySelectorAll('.char-switch-btn');

  // Check URL hash if user linked directly (e.g. #flavor-mango)
  const hash = window.location.hash.replace('#flavor-', '');
  if (hash && GUMMY_FLAVOURS[hash]) {
    switchGummyFlavour(hash);
  } else {
    switchGummyFlavour('black-currant');
  }

  // Bind click handlers to Flavour Selector pills
  flavorPills.forEach(pill => {
    pill.addEventListener('click', function () {
      const fid = this.getAttribute('data-flavor-id');
      if (fid && GUMMY_FLAVOURS[fid]) {
        switchGummyFlavour(fid);
      }
    });
  });

  // Bind click handlers to Character Mosaic cards & buttons
  characterCards.forEach(card => {
    card.addEventListener('click', function (e) {
      if (e.target.tagName.toLowerCase() === 'button') return; // Handled by button
      const fid = this.getAttribute('data-flavor-id');
      if (fid && GUMMY_FLAVOURS[fid]) {
        switchGummyFlavour(fid);
        const heroEl = document.getElementById('sec-overview');
        if (heroEl) {
          heroEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  switchBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const fid = this.getAttribute('data-flavor-id');
      if (fid && GUMMY_FLAVOURS[fid]) {
        switchGummyFlavour(fid);
        const heroEl = document.getElementById('sec-overview');
        if (heroEl) {
          heroEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

function switchGummyFlavour(fid) {
  const data = GUMMY_FLAVOURS[fid];
  if (!data) return;

  currentFlavourId = fid;

  // 1. Update CSS Theme Custom Properties on root
  const root = document.documentElement;
  root.style.setProperty('--flavor-primary', data.themeColor);
  root.style.setProperty('--flavor-dark', data.themeDark);
  root.style.setProperty('--flavor-light', data.themeLight);
  root.style.setProperty('--flavor-accent', data.themeAccent);
  root.style.setProperty('--flavor-glow', data.themeGlow);
  root.style.setProperty('--flavor-gradient', data.themeGradient);

  // 2. Update active states on Flavour Pills
  document.querySelectorAll('.sanan-pdp-flavour-pill, .gummy-flavor-card').forEach(p => {
    p.classList.toggle('is-active', p.getAttribute('data-flavor-id') === fid);
  });

  // 3. Update active states on Character Mosaic cards & buttons
  document.querySelectorAll('.character-card, .gummy-character-item').forEach(c => {
    const isCurrent = c.getAttribute('data-flavor-id') === fid;
    c.classList.toggle('is-current', isCurrent);
    c.classList.toggle('is-active', isCurrent);
    const btn = c.querySelector('.char-switch-btn');
    if (btn) {
      if (isCurrent) {
        btn.textContent = 'Active Flavour ✓';
        btn.classList.add('is-active');
      } else {
        btn.textContent = 'Switch to ' + (GUMMY_FLAVOURS[c.getAttribute('data-flavor-id')]?.name || 'Flavour') + ' →';
        btn.classList.remove('is-active');
      }
    }
  });

  // 4. Update Stage Image with smooth crossfade
  const stageImg = document.getElementById('gummyMainStageImg') || document.querySelector('.sanan-pdp-stage-img');
  if (stageImg) {
    stageImg.style.opacity = '0';
    stageImg.style.transform = 'scale(0.96)';
    setTimeout(() => {
      stageImg.src = data.heroImg;
      stageImg.alt = data.headline;
      stageImg.style.opacity = '1';
      stageImg.style.transform = 'scale(1)';
    }, 150);
  }

  // 5. Update Thumbs Grid (Thumb 1 is main pack, Thumb 8 is detail)
  const thumb1 = document.querySelector('#gummyThumbsGrid .sanan-pdp-thumb-card:first-child');
  if (thumb1) {
    thumb1.setAttribute('data-full-img', data.heroImg);
    const img1 = thumb1.querySelector('img');
    if (img1) img1.src = data.heroImg;
  }
  const thumb8 = document.querySelector('#gummyThumbsGrid .sanan-pdp-thumb-card:last-child');
  if (thumb8) {
    thumb8.setAttribute('data-full-img', data.heroImg.replace('-hero.svg', '-detail.svg'));
    const img8 = thumb8.querySelector('img');
    if (img8) img8.src = data.heroImg.replace('-hero.svg', '-detail.svg');
  }

  // 6. Update Text Content
  const charBadge = document.getElementById('gummyCharacterBadge') || document.querySelector('.gummy-character-badge');
  if (charBadge) charBadge.textContent = data.characterTitle.toUpperCase();

  const productTitle = document.getElementById('gummyMainTitle') || document.querySelector('.sanan-pdp-product-title');
  if (productTitle) {
    productTitle.textContent = data.headline;
  }

  const selectedFlavourLabel = document.getElementById('gummySelectedFlavorLabel');
  if (selectedFlavourLabel) {
    selectedFlavourLabel.textContent = `${data.name} (${data.doseMg} Active Botanical Actives)`;
  }

  const subkicker = document.getElementById('gummySubkicker');
  if (subkicker) {
    subkicker.textContent = `New & Improved | Enhanced Potency | ${data.tasting.terpenes} Mix`;
  }

  const saveBadge = document.getElementById('gummySaveBadge');
  if (saveBadge) saveBadge.textContent = data.savePct;

  const mainPrice = document.getElementById('gummyMainPrice');
  if (mainPrice) mainPrice.textContent = data.price;

  const strikePrice = document.getElementById('gummyStrikePrice');
  if (strikePrice) strikePrice.textContent = data.comparePrice;

  // 7. Update Potency Breakdown Box
  const potencyBadge = document.getElementById('gummyPotencyBadge');
  if (potencyBadge) potencyBadge.textContent = data.name.toUpperCase();

  const packVijaya = document.getElementById('gummyPackVijaya');
  if (packVijaya) packVijaya.textContent = data.stats.totalVijaya;
  const packActive = document.getElementById('gummyPackActive');
  if (packActive) packActive.textContent = data.stats.totalActives;
  const perVijaya = document.getElementById('gummyPerVijaya');
  if (perVijaya) perVijaya.textContent = data.stats.perGummyVijaya;
  const perActive = document.getElementById('gummyPerActive');
  if (perActive) perActive.textContent = data.stats.perGummyActives;

  // 8. Update Terpenes & Taste Specs
  const terpenesVal = document.getElementById('gummyTerpenesVal');
  if (terpenesVal) terpenesVal.textContent = data.tasting.terpenes;

  const tasteVal = document.getElementById('gummyTasteVal');
  if (tasteVal) tasteVal.textContent = data.tasting.phase1;

  // 9. Update 3 Sensory Phases
  const phase1 = document.getElementById('gummyPhase1Desc');
  if (phase1) phase1.textContent = data.tasting.phase1 + ' ' + (data.tasting.terpenes ? 'Rich in ' + data.tasting.terpenes + '.' : '');
  const phase2 = document.getElementById('gummyPhase2Desc');
  if (phase2) phase2.textContent = data.tasting.phase2;
  const phase3 = document.getElementById('gummyPhase3Desc');
  if (phase3) phase3.textContent = data.tasting.phase3;

  // 10. Update Floating Bottom Cart Bar
  const floatThumb = document.getElementById('gummyFloatThumbImg');
  if (floatThumb) floatThumb.src = data.heroImg;

  const floatTitle = document.getElementById('gummyFloatTitle');
  if (floatTitle) floatTitle.textContent = `Uplift Gummies 500mg (${data.name})`;

  const floatPrice = document.getElementById('gummyFloatPrice');
  if (floatPrice) floatPrice.textContent = data.price;

  const floatStrike = document.getElementById('gummyFloatStrike');
  if (floatStrike) floatStrike.textContent = data.comparePrice;

  // 11. Silent URL Hash update without reload
  try {
    history.replaceState(null, '', '#flavor-' + fid);
  } catch (e) {}
}

/* 2. Description 2-Line Sliding Toggle */
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

/* 3. Pack Size Selector */
function initPackSelectors() {
  const packPills = document.querySelectorAll('.sanan-pdp-pack-pill');
  const packLabel = document.querySelector('.sanan-pdp-pack-label strong');

  packPills.forEach(pill => {
    pill.addEventListener('click', function () {
      packPills.forEach(p => p.classList.remove('is-active'));
      this.classList.add('is-active');

      const pack = this.getAttribute('data-pack');
      if (packLabel) packLabel.textContent = pack;

      const price = this.getAttribute('data-price');
      const compare = this.getAttribute('data-compare');
      const priceEl = document.querySelector('.sanan-pdp-main-price');
      const strikeEl = document.querySelector('.sanan-pdp-strike-price');

      if (price && priceEl) priceEl.textContent = price;
      if (compare && strikeEl) strikeEl.textContent = compare;

      // Sync floating bar
      const floatSelect = document.querySelector('.sanan-float-variant-select');
      if (floatSelect) floatSelect.value = pack;
      const floatPrice = document.querySelector('.sanan-float-price');
      const floatStrike = document.querySelector('.sanan-float-strike');
      if (price && floatPrice) floatPrice.textContent = price;
      if (compare && floatStrike) floatStrike.textContent = compare;
    });
  });
}

/* 4. Prescription Radio Selector */
function initRxRadioOptions() {
  const options = document.querySelectorAll('.sanan-rx-radio-option');
  const uploadDrop = document.querySelector('.sanan-rx-upload-drop');

  options.forEach(opt => {
    opt.addEventListener('click', function () {
      options.forEach(o => o.classList.remove('is-selected'));
      this.classList.add('is-selected');

      const radio = this.querySelector('input[type=\"radio\"]');
      if (radio) radio.checked = true;

      if (uploadDrop) {
        uploadDrop.style.display = this.id === 'RxOptionUpload' ? 'block' : 'none';
      }
    });
  });
}

/* 5. Stepper Quantity */
function initStepper() {
  const btnDec = document.querySelector('.sanan-pdp-step-btn.btn-dec');
  const btnInc = document.querySelector('.sanan-pdp-step-btn.btn-inc');
  const input = document.querySelector('.sanan-pdp-step-input');

  btnDec?.addEventListener('click', () => {
    let v = parseInt(input.value) || 1;
    if (v > 1) input.value = v - 1;
  });

  btnInc?.addEventListener('click', () => {
    let v = parseInt(input.value) || 1;
    if (v < 10) input.value = v + 1;
  });
}

/* 6. Cart Actions */
function initCartActions() {
  const cartBtns = document.querySelectorAll('.sanan-pdp-btn-cart, .sanan-float-cart-btn, .gummy-btn-cart');
  const consentCheckbox = document.getElementById('PatientConsent');
  const consentWrap = document.getElementById('PatientConsentWrap');
  const consentMsg = document.getElementById('ConsentValidationMsg');

  consentCheckbox?.addEventListener('change', () => {
    if (consentCheckbox.checked) {
      consentWrap?.classList.remove('has-error');
      if (consentMsg) consentMsg.style.display = 'none';
    }
  });

  cartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Patient consent check
      if (consentCheckbox && !consentCheckbox.checked) {
        if (consentWrap) consentWrap.classList.add('has-error');
        if (consentMsg) consentMsg.style.display = 'flex';
        consentWrap?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      btn.innerHTML = '<span>Added to Cart &check;</span>';
      btn.style.filter = 'brightness(115%)';
      setTimeout(() => {
        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg><span>Add To Cart</span>`;
        btn.style.filter = '';
      }, 1800);
    });
  });
}

function initTypeCardSelectors() {
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
}

/* 7. Potency Accordion */
function initPotencyAccordion() {
  const trigger = document.querySelector('.sanan-pdp-potency-trigger');
  const box = document.querySelector('.sanan-pdp-potency-box');
  trigger?.addEventListener('click', () => {
    box?.classList.toggle('is-open');
  });
}

/* 8. Zero-Gap Docking In-Page Sticky Nav */
function initStickyNavDock() {
  const navStrip = document.getElementById('SananPdpNavStrip') ||
                   document.getElementById('SananInPageNav') ||
                   document.querySelector('.sanan-pdp-nav-strip') ||
                   document.querySelector('.sanan-pdp-inpage-nav');
  const headerCard = document.querySelector('.sanan-header-card');
  if (!navStrip) return;

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

/* 9. Anchor Nav Smooth Scrolling */
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

          const headerCard = document.querySelector('.sanan-header-card');
          const hHeight = headerCard ? headerCard.offsetHeight : 102;
          const yOffset = -(hHeight + 70);
          const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    });
  });
}

/* 10. Reviews Pagination */
function initReviewsPagination() {
  const pageBtns = document.querySelectorAll('.qurist-page-num');
  const pages = document.querySelectorAll('.qurist-reviews-page');
  const prevBtn = document.querySelector('.qurist-page-btn.prev');
  const nextBtn = document.querySelector('.qurist-page-btn.next');

  if (!pageBtns.length || !pages.length) return;

  function showPage(num) {
    pages.forEach(p => p.classList.remove('is-active'));
    pageBtns.forEach(b => b.classList.remove('is-active'));

    const targetPage = document.querySelector(`.qurist-reviews-page[data-page=\"${num}\"]`);
    const targetBtn = document.querySelector(`.qurist-page-num[data-page=\"${num}\"]`);

    if (targetPage) targetPage.classList.add('is-active');
    if (targetBtn) targetBtn.classList.add('is-active');

    if (prevBtn) prevBtn.disabled = (num === 1);
    if (nextBtn) nextBtn.disabled = (num === pages.length);
  }

  pageBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const pageNum = parseInt(this.getAttribute('data-page')) || 1;
      showPage(pageNum);
    });
  });

  prevBtn?.addEventListener('click', () => {
    const activeBtn = document.querySelector('.qurist-page-num.is-active');
    const cur = parseInt(activeBtn?.getAttribute('data-page')) || 1;
    if (cur > 1) showPage(cur - 1);
  });

  nextBtn?.addEventListener('click', () => {
    const activeBtn = document.querySelector('.qurist-page-num.is-active');
    const cur = parseInt(activeBtn?.getAttribute('data-page')) || 1;
    if (cur < pages.length) showPage(cur + 1);
  });
}

/* 11. Write Review Modal */
function initWriteReviewModal() {
  const openBtn = document.querySelector('.qurist-btn-write-review');
  const modal = document.getElementById('QuristReviewModal');
  const closeBtn = document.querySelector('.qurist-modal-close');
  const form = document.querySelector('.qurist-modal-form');

  if (!openBtn || !modal) return;

  openBtn.addEventListener('click', () => modal.classList.add('is-open'));
  closeBtn?.addEventListener('click', () => modal.classList.remove('is-open'));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('is-open');
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your verified review has been submitted.');
    modal.classList.remove('is-open');
  });
}

/* 12. Floating Sticky Cart Bar & Bottom-Right Scroll-To-Top Button */
function initFloatingBar() {
  const wrapper = document.querySelector('.sanan-floating-bar-wrapper');
  const mainCartBtn = document.querySelector('.sanan-pdp-btn-cart');
  const scrolltopBtn = document.querySelector('.sanan-float-scrolltop-btn');

  if (!wrapper || !mainCartBtn) return;

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

  scrolltopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* 15. In-Page Sticky Nav Tray with Zero-Gap Docking to Header */
function initInPageStickyNav() {
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

    // When the top of nav reaches or passes header bottom
    if (navRect.top <= headerRect.bottom + 2) {
      nav.classList.add('is-docked');
    } else {
      nav.classList.remove('is-docked');
    }

    // Active Section Detection
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

  // Smooth scroll click
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        const offset = 140; // Accounts for docked header + inpage tray
        const top = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* 16. Stepper & Pack Size Controls */
function initQuantityAndPackControls() {
  // Steppers (both hero and floating bar)
  document.querySelectorAll('.sanan-pdp-stepper, .sanan-float-stepper').forEach(stepper => {
    const decBtn = stepper.querySelector('.btn-dec, .float-dec');
    const incBtn = stepper.querySelector('.btn-inc, .float-inc');
    const input = stepper.querySelector('.sanan-pdp-step-input, .sanan-float-step-input');
    if (!input) return;

    decBtn?.addEventListener('click', () => {
      let val = parseInt(input.value) || 1;
      if (val > 1) {
        input.value = val - 1;
        syncInputs(val - 1);
      }
    });

    incBtn?.addEventListener('click', () => {
      let val = parseInt(input.value) || 1;
      if (val < 10) {
        input.value = val + 1;
        syncInputs(val + 1);
      }
    });
  });

  function syncInputs(val) {
    document.querySelectorAll('.sanan-pdp-step-input, .sanan-float-step-input').forEach(inp => {
      inp.value = val;
    });
  }

  // Pack size pills
  const packPills = document.querySelectorAll('.sanan-pdp-pack-pill');
  const packLabel = document.getElementById('gummyPackSizeLabel');
  const mainPrice = document.getElementById('gummyMainPrice');
  const strikePrice = document.getElementById('gummyStrikePrice');
  const floatSelect = document.getElementById('gummyFloatVariantSelect');
  const floatPrice = document.getElementById('gummyFloatPrice');
  const floatStrike = document.getElementById('gummyFloatStrike');

  packPills.forEach(pill => {
    pill.addEventListener('click', function () {
      packPills.forEach(p => p.classList.remove('is-active'));
      this.classList.add('is-active');

      const pack = this.getAttribute('data-pack');
      const price = this.getAttribute('data-price');
      const compare = this.getAttribute('data-compare');

      if (packLabel) packLabel.textContent = pack;
      if (mainPrice && price) mainPrice.textContent = price;
      if (strikePrice && compare) strikePrice.textContent = compare;

      if (floatSelect && pack) floatSelect.value = pack;
      if (floatPrice && price) floatPrice.textContent = price;
      if (floatStrike && compare) floatStrike.textContent = compare;
    });
  });

  // Floating variant select change syncs with pack pills
  floatSelect?.addEventListener('change', function () {
    const opt = this.options[this.selectedIndex];
    const pack = this.value;
    const price = opt.getAttribute('data-price');
    const compare = opt.getAttribute('data-compare');

    packPills.forEach(pill => {
      if (pill.getAttribute('data-pack') === pack) {
        pill.click();
      }
    });

    if (floatPrice && price) floatPrice.textContent = price;
    if (floatStrike && compare) floatStrike.textContent = compare;
  });

  // Inline Left Scroll to Top button
  document.querySelectorAll('.sanan-float-scrolltop-left-btn, .sanan-float-scrolltop-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}
