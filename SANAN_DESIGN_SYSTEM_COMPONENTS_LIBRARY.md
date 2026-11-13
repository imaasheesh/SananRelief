# Sanan Relief — Component Design System & Canvas Elements Architecture
**Theme:** Sanan Relief Luxury Ayurvedic & Clinical Vijaya Storefront  
**Source Inspiration:** [Canvas Multipurpose HTML5 Template](https://canvastemplate.com/) & Canvas Elements System  
**Design Standard:** Strict Design Token Compliance (`theme-tokens.css`), Frosted Glassmorphism, Organic Curves, Pinned Sticky Scrolling, and AYUSH Schedule E-1 Medical Ergonomics.  
**Date:** November 2026

---

## 1. Executive Overview

This master component library bridges the 62 interactive UI elements from the world-renowned Canvas multipurpose template into the specialized context of **Sanan Relief** — India's premier luxury clinical and recreational Vijaya wellness dispensary.

Every element is strictly mapped to our established design tokens:
- **Primary Color:** `--color-primary: #439798;` (Calming Himalayan Spruce Teal)
- **Secondary Color:** `--color-secondary: #1A4A4B;` (Deep Forest Evergreen)
- **Accent Color:** `--color-accent: #A92827;` (Ayurvedic Ruby Ochre)
- **Surface / Backgrounds:** `--color-background: #F7FBFB;`, Soft Cream `--color-cream: #FBF8F5;`, Frosted Glass `rgba(255, 255, 255, 0.85);` with `backdrop-filter: blur(16px);`
- **Typography:** Headings in `--font-heading: 'DM Serif Display', Georgia, serif;`, Body in `--font-body: 'DM Sans', sans-serif;`, Monospace tags in `'DM Mono', monospace;`
- **Geometry & Curves:** `--btn-radius-pill: 50px;` (Pills), `--card-radius-lg: 20px;` (Organic Notched Cards), Crisp Minimalist Selectors (`border-radius: 4px;`).

---

## 2. Complete Canvas Elements Directory (62 Elements) & Sanan Mapping

| # | Canvas Element | Canvas URL / File | Sanan Relief Component Name | Functional Role in Theme | Status |
| :-: | :--- | :--- | :--- | :--- | :-: |
| **1** | **Animations** | `animations.html` | `sanan-motion-fx` | Micro-interactions, hover card lift, glass shimmer, pulse badges | ✅ Live |
| **2** | **Buttons** | `buttons.html` | `btn-pill-primary`, `btn-pill-outline` | 54px/56px full pill buttons with gradients and focus rings | ✅ Live |
| **3** | **Carousel** | `carousel.html` | `sanan-cinematic-carousel` | Swiper.js touch-enabled carousels for lifestyle, products & reviews | ✅ Live |
| **4** | **Charts** | `charts.html` | `sanan-pharmacokinetics-chart` | Bioavailability & absorption curve comparison charts | 🟡 In Library |
| **5** | **Clients / Logos** | `clients.html` | `sanan-accreditations-strip` | NABL labs, WHO-GMP, AYUSH certification logos | ✅ Live |
| **6** | **Columns & Grids** | `columns-grids.html` | `sanan-container-grid` | 1240px/1280px responsive grids with 4/3/2/1 column toggle | ✅ Live |
| **7** | **Counters** | `counters.html` | `sanan-clinical-metrics` | Clinical statistics counters (e.g., `94% Pain Relief`, `89% Sleep`) | ✅ Live |
| **8** | **Read More** | `read-more.html` | `sanan-readmore-toggle` | 2-line sliding text clamp with animated expand/collapse toggle | ✅ Live |
| **9** | **Data Tables** | `component-datatable.html` | `sanan-specs-table` | Subcritical CO2 extraction comparison & batch CoA tables | ✅ Live |
| **10** | **Date & Time Pickers** | `component-datepicker.html` | `sanan-teleconsult-picker` | Ayurvedic doctor 1-on-1 video consultation booking schedule | 🟡 In Library |
| **11** | **Ticker** | `ticker.html` | `sanan-marquee-ticker` | Dual-direction marquee ribbons with leaf separators & promo codes | ✅ Live |
| **12** | **Cart Quantity** | `cart-quantity.html` | `cart-qty-stepper` | Pill-shaped `− 1 +` stepper with live subtotal calculation | ✅ Live |
| **13** | **Dividers** | `dividers.html` | `sanan-wave-divider` | Organic botanical curve separators and subtle 1.5px lines | ✅ Live |
| **14** | **Icon Boxes** | `featured-boxes.html` | `sanan-feature-card` | 3D botanical benefit cards with frosted backgrounds | ✅ Live |
| **15** | **Galleries** | `gallery.html` | `sanan-pdp-gallery-sticky` | Sticky vertical thumbnail strip + high-res product stage | ✅ Live |
| **16** | **Heading Styles** | `headings-dropcaps.html` | `sanan-typography-suite` | DM Serif Display with subtle letterspacing & kicker badges | ✅ Live |
| **17** | **Icon Lists** | `icon-lists.html` | `sanan-indication-list` | Botanical symptom relief bullet rows with checkmarks | ✅ Live |
| **18** | **Gradients** | `gradients.html` | `sanan-amber-glow-gradient` | Golden amber ambient visual banner & teal gradient buttons | ✅ Live |
| **19** | **Lightbox** | `lightbox.html` | `sanan-coa-lightbox` | High-res lab test CoA & prescription modal zoom viewer | 🟡 In Library |
| **20** | **Item Overlays** | `item-overlays.html` | `sanan-card-overlay` | Quick-add button reveals & flavor tasting notes on hover | ✅ Live |
| **21** | **File Uploads** | `component-uploads.html` | `sanan-rx-dropzone` | Drag-and-drop prescription vault upload for Schedule E-1 | ✅ Live |
| **22** | **Circle Stack** | `circle-stack.html` | `sanan-doctor-avatar-stack` | Overlapping clinician avatars with verified AYUSH badges | ✅ Live |
| **23** | **Video Facade** | `video-facade.html` | `sanan-video-facade` | High-performance lazy-loaded extraction & clinic video | 🟡 In Library |
| **24** | **Lists & Cards** | `lists-cards.html` | `sanan-product-card-notched` | 20px organic notched cards with external floating cart pill | ✅ Live |
| **25** | **Maps** | `maps.html` | `sanan-clinic-locator` | Authorized clinic and Ayurvedic pharmacy directory map | 🟡 In Library |
| **26** | **Media Embeds** | `media-embeds.html` | `sanan-audio-titration-guide`| Guided audio relaxation & doctor titration instructions | 🟡 In Library |
| **27** | **Modal Boxes** | `modal-popovers.html` | `sanan-quickview-modal` | Instant Ajax quick-add modal & prescription guidelines modal | ✅ Live |
| **28** | **Notifications** | `notifications.html` | `sanan-toast-notification` | Floating cart alert ("Added to Wellness Cart") & Rx reminders | ✅ Live |
| **29** | **Pagination** | `pagination-progress.html` | `sanan-catalog-pagination` | Numbered page buttons & infinite scroll triggers | ✅ Live |
| **30** | **Progress Bars** | `progress-skills.html` | `sanan-shipping-progress-bar`| Real-time free shipping & doctor consultation progress track | ✅ Live |
| **31** | **Shape Dividers** | `shape-dividers.html` | `sanan-organic-svg-dividers` | Smooth curved SVG transitions between contrast sections | ✅ Live |
| **32** | **Range Slider** | `component-range-slider.html`| `sanan-dosage-calculator` | Interactive body weight vs. droplet titration slider | 🟡 In Library |
| **33** | **Star Ratings** | `component-ratings.html` | `sanan-review-stars` | Golden 5-star ratings & customer review distribution bars | ✅ Live |
| **34** | **Cascading Images** | `cascading-images.html` | `sanan-lifestyle-cascade` | Overlapping Himalayan harvesting & apothecary editorial photos | ✅ Live |
| **35** | **Code Highlighter** | `code-highlighter.html` | `sanan-titration-protocol` | Formatted clinical droplet dosage charts and timing steps | ✅ Live |
| **36** | **Media Actions** | `media-actions.html` | `sanan-ambient-controls` | Ambient sound and autoplay controls for cinematic sections | 🟡 In Library |
| **37** | **Pricing Boxes** | `pricing.html` | `sanan-pack-selector-cards` | 20 / 40 / 60 count cards with save 15% / save 30% lime badges | ✅ Live |
| **38** | **Process Steps** | `process-steps.html` | `sanan-order-timeline-4step` | Confirmed › Packed › In Transit › Delivered visual tracking track | ✅ Live |
| **39** | **Promo Boxes** | `promo-boxes.html` | `sanan-coupon-promo-card` | Frosted coupon cards (`SANAN15`) with 1-click copy | ✅ Live |
| **40** | **Blockquotes** | `quotes-blockquotes.html` | `sanan-doctor-quote-block` | Editorial quotes with italicized serif and practitioner signoffs | ✅ Live |
| **41** | **Image Sliders** | `image-sliders.html` | `sanan-flavour-switcher-hero`| Multi-flavor stage image switcher without page reload | ✅ Live |
| **42** | **Sections & Banners** | `sections.html` | `sanan-golden-amber-banner` | Edge-to-edge golden amber visual statement banners | ✅ Live |
| **43** | **Social Icons** | `social-icons.html` | `sanan-social-share-pill` | Minimalist branded circular social buttons | ✅ Live |
| **44** | **Hover Animations** | `hover-animations.html` | `sanan-hover-card-elevate` | Elevation + translateY(-4px) + box-shadow glow transitions | ✅ Live |
| **45** | **Select Picker** | `component-select-picker.html`| `sanan-concern-filter-select`| Pill dropdowns for health concerns (Sleep, Pain, Stress, Gut) | ✅ Live |
| **46** | **Select Boxes** | `component-select-box.html` | `sanan-type-card-grid` | 3-column jar selector (`indica chill`, `hybrid vibes`, `sativa`) | ✅ Live |
| **47** | **AJAX Buttons** | `ajax-button.html` | `btn-ajax-add-cart` | Loading spinner transition into checkmark upon cart add | ✅ Live |
| **48** | **Conditional Forms** | `conditional.html` | `sanan-medical-intake-form` | Conditional prescription upload vs. free doctor teleconsult toggle | ✅ Live |
| **49** | **Preloaders** | `preloaders.html` | `sanan-botanical-spinner` | Rotating leaf emblem spinner during AJAX page transitions | ✅ Live |
| **50** | **Alert Boxes** | `style-boxes.html` | `sanan-ayush-rx-alert` | Amber/teal Schedule E-1 compliance advisory boxes | ✅ Live |
| **51** | **Styled Icons** | `styled-icons.html` | `sanan-botanical-svg-icons` | Custom SVG badges (Pipette, Herb, Microscope, Camphor, Dosha) | ✅ Live |
| **52** | **Tables** | `tables.html` | `sanan-clinical-data-table` | Clean borderless comparison tables with soft teal header | ✅ Live |
| **53** | **Tabs** | `tabs.html` | `sanan-segmented-tabs` | Pill-shaped frosted tab bars with active background slide | ✅ Live |
| **54** | **Testimonials** | `testimonials-twitter.html` | `sanan-patient-story-card` | Verified patient testimonials with photo, age, condition & quote | ✅ Live |
| **55** | **Thumbnails Slider** | `thumbnails-slider.html` | `sanan-gallery-thumbs-track` | Vertical thumbnail strip with active border indicator | ✅ Live |
| **56** | **Toggles & Accordions**| `toggles-accordions.html` | `sanan-faq-accordion-clean` | Clean transparent accordion with animated `+` / `−` transforms | ✅ Live |
| **57** | **Lazy Loading** | `lazy-loading.html` | `sanan-img-lazyload` | Native `loading="lazy"` with blur-up placeholder effects | ✅ Live |
| **58** | **Radios & Switches** | `component-radios-switches.html`| `sanan-prescription-toggle`| Radio toggle between "I have an Rx" vs. "Free Doctor Consult" | ✅ Live |
| **59** | **Flip Cards** | `flip-cards.html` | `sanan-herb-profile-card` | Flip reveal card showing Ayurvedic herb energetics on back | 🟡 In Library |
| **60** | **Mode Switcher** | `color-mode-switcher.html` | `sanan-wellness-switch` | In-header toggle between Wellness and Medicinal Dispensary | ✅ Live |
| **61** | **Custom Cursor** | `custom-cursor.html` | `sanan-luxury-dot-cursor` | Subtle smooth following cursor dot on desktop editorial pages | 🟡 In Library |
| **62** | **Image Compare** | `image-compare.html` | `sanan-potency-compare-slider`| Before & after split slider comparing cellular absorption | 🟡 In Library |

---

## 3. The 6 Master Component Groups for Sanan Relief

### Group 1: Navigation & Header Controls
1. **Frosted Glass Floating Header:** Borderless, 75% max-width, compliance bar on top row, logo centered, inline category switcher, pill nav island, cart count pill, doctor CTA.
2. **Full-Screen Viewport Mega Menus:** Direct full-width flyouts for *Science & Operations*, *Formulations by Concern*, *Doctor Directory*, and *Clinical Reports*.
3. **In-Page Sticky Navigation Strip:** Zero-gap docking below header upon scroll, border-radius transition from rectangle into `0 0 16px 16px` floating pill tray with 10% width reduction.
4. **Category Mode Switcher:** Segmented glass toggle between *Wellness Formulations* and *Prescription Medicinal*.

### Group 2: Product & Commercial Variant Selectors (Image 1 & 2 Standard)
1. **`select type:` Strain / Formulation Cards:** 3-column square cards with product tub visuals, centered titles, and active `2px solid #111111` solid outline.
2. **`select flavor:` Taste Profiles:** 52px full pill buttons (`border-radius: 9999px;`), white background, dark border on active, light gray on inactive.
3. **`select count:` Multi-Pack Cards:**
   - Overlapping lime-green save badge (`#84CC16`) at top border (`save 15%`, `save 30%`).
   - Bold pack count, active milligram dose.
   - Letterspaced monospace typewriter subtitle (`most popular`, `best value`).
4. **Sticky Product Gallery:** Vertical 8-thumbnail strip on the left with sticky viewport pinning (`position: sticky; top: calc(var(--sanan-header-dock-top) + 20px)`).
5. **Quantity Stepper & Instant Cart Pill:** Tactile rounded `− 1 +` stepper with debounce and AJAX cart update.
6. **Patient Legal & Prescription Consent Checkbox:** Schedule E-1 legal verification box directly above the Add to Cart CTA.

### Group 3: Clinical Presentation & Data Visualizations
1. **2-Column Ingredients Showcase:** Photorealistic application imagery on left, green pill badge (`POTENT BOTANICALS`), title, and 3 clinical active rows on right.
2. **4-Column Lifestyle Administration Rituals:** 4 photorealistic usage photos (*Sublingually*, *Direct drops*, *With a drink*, *Topically*).
3. **Clinical Experience Metrics:** 3 statistics cards (`94% Pain Relief`, `89% REM Sleep`, `91% Calmer Mind`) on soft warm cream background (`#FBF8F5`).
4. **Customer Results Photo Cards:** Real patient portraits with star ratings, quotes, age, and treated condition.
5. **Smart Usage Tips:** 5 circular icon steps across the page (*Start Low*, *Consistency*, *Healthy Fats*, *Track Dosage*, *Consult Doctors*).
6. **Scientific Pharmacokinetics Table:** Comparison of sublingual MCT drops vs. oral edibles vs. topicals.
7. **Transparent Clean FAQs:** Centered 880px max-width, no heavy background container, elegant `+` / `−` icon animation.

### Group 4: Customer Account & Medical Workflow
1. **4-Stage Visual Order Tracking Timeline:** Interactive track (*Confirmed › Packed › In Transit › Delivered*) with completed green checks and active truck icon.
2. **Ayurvedic Prescription Vault:** Active Rx cards with expiry countdown, signed PDF download, and drag-and-drop file upload dropzone.
3. **Saved Delivery Addresses Grid:** Frosted cards with "Default Delivery Address" pill, Edit/Delete actions, and "+ Add New Address" modal.
4. **Ayurvedic Health Profile:** Prakriti dosha balance meter (Vata/Pitta/Kapha percentages) and consultation notes.
5. **Physician Teleconsultation Booking Card:** Upcoming appointment details with direct 1-click video call launcher.

### Group 5: Forms & Inputs
1. **Frosted Search Input:** Large 64px rounded input with focus rings and popular trending search pills.
2. **Floating Summary Card:** Pinned sticky cart summary with tiered promo codes (`SANAN15`), GST taxes, and free shipping triggers.
3. **Mobile OTP / Email Login Switcher:** Seamless tab toggle between password authentication and instant SMS OTP verification.

### Group 6: Media & Visual Atmosphere
1. **Full-Width Golden Amber Brand Visual Banner:** Edge-to-edge warm radiant gradient with inspirational quote: *"Pure botanical relief, cultivated by nature, perfected by Ayurvedic science."*
2. **Dual-Marquee Ticker Ribbons:** Continuous loop ticker with leaf separators.
3. **Accredited Trust Strip:** High-contrast certification icons (*NABL Tested, Non-GMO, 100% Ayush Legal, Single-Origin*).

---

## 4. Design Token Reference (`assets/theme-tokens.css`)

```css
:root {
  /* Core Brand Colors */
  --color-primary: #439798;
  --color-primary-dark: #2D6E6F;
  --color-primary-soft: #E6F4F4;
  --color-secondary: #1A4A4B;
  --color-accent: #A92827;
  --color-lime-badge: #84CC16;
  
  /* Surfaces & Backgrounds */
  --color-background: #F7FBFB;
  --color-surface: #FFFFFF;
  --color-cream: #FBF8F5;
  --color-border: #D4E8E8;
  --color-border-subtle: #E5E7EB;

  /* Typography */
  --font-heading: 'DM Serif Display', Georgia, serif;
  --font-body: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'DM Mono', monospace, 'Courier New', monospace;

  /* Geometry & Curves */
  --btn-radius-pill: 50px;
  --card-radius-lg: 20px;
  --card-radius-md: 14px;
  --card-radius-sm: 8px;
  --card-radius-xs: 4px;

  /* Elevation & Shadows */
  --shadow-sm: 0 2px 6px rgba(26, 74, 75, 0.04);
  --shadow-md: 0 8px 24px rgba(26, 74, 75, 0.06);
  --shadow-lg: 0 16px 36px rgba(67, 151, 152, 0.12);
  --shadow-glow: 0 8px 24px rgba(67, 151, 152, 0.35);

  /* Transitions */
  --transition-smooth: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## 5. Next Steps for Implementation

1. **Build Centralized Component Showcase Page (`preview/showcase.html`):**
   - Provide a live, interactive UI playground demonstrating all component families on a single page.
2. **Component CSS & JS Modularization:**
   - Consolidate common element classes in `assets/components.css` and `assets/components.js`.
3. **Shopify OS 2.0 Snippets & Section Blocks:**
   - Package reusable elements into Shopify Liquid snippets (`snippets/component-*.liquid`) for drag-and-drop customization in the theme editor.

