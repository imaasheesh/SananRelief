# Sanan Relief — Shopify Theme Development Tasks & Progress Tracker

> **Theme:** Sanan Relief Luxury Ayurvedic & Clinical Vijaya Storefront  
> **Platform:** Shopify Online Store 2.0 (JSON Templates + Liquid Sections + Scoped Modular CSS/JS)  
> **Updated:** November 2026  
> **Overall Progress:** 25 Completed | 4 Base Ready | 1 Remaining (30 Pages Total — 96% Ready)

---

## Quick Navigation
- [Sprint 1: Customer Account Suite (Remaining)](#sprint-1-customer-account-pages-suite-remaining)
- [Sprint 2: Checkout & Order Flow (Remaining)](#sprint-2-checkout--order-flow-remaining)
- [Sprint 3: Core Store Pages Polish (In Progress)](#sprint-3-core-store-pages-polish-in-progress)
- [Sprint 4: Content & Utility Pages (In Progress)](#sprint-4-content--utility-pages-in-progress)
- [Completed Theme Pages & Components](#completed-theme-pages--components)

---

## Sprint 1: Customer Account Pages Suite (Remaining)

### Task 1.1: Customer Login Page
* **Template:** `templates/customers/login.json`
* **Section:** `sections/main-login.liquid`
* **CSS:** `assets/sanan-customer.css`
* **Preview:** `preview/login.html`
- [ ] Create `templates/customers/login.json` template definition
- [ ] Build `sections/main-login.liquid` with luxury frosted glass card layout (`background: rgba(255, 255, 255, 0.92); border-radius: 24px;`)
- [ ] Implement floating label input fields for Email and Password with inline validation
- [ ] Build interactive toggle for "Forgot your password?" recovery form
- [ ] Add "New to Sanan Relief? Create an account" link and Ayush patient support hotline
- [ ] Add return redirection support (`return_to` parameter)
- [ ] Generate interactive preview in `preview/login.html`

### Task 1.2: Customer Registration Page
* **Template:** `templates/customers/register.json`
* **Section:** `sections/main-register.liquid`
* **Preview:** `preview/register.html`
- [ ] Create `templates/customers/register.json`
- [ ] Build `sections/main-register.liquid` with fields: First Name, Last Name, Email, Phone, Password
- [ ] Add Ayush Medical Disclaimer checkbox: *"I confirm I am 18+ and understand that Vijaya formulations require an Ayush prescription (free consultation provided)"*
- [ ] Add live password strength meter and validation rules
- [ ] Add marketing newsletter opt-in checkbox
- [ ] Link to Privacy Policy and Terms & Conditions

### Task 1.3: Customer Account Dashboard
* **Template:** `templates/customers/account.json`
* **Section:** `sections/main-account.liquid`
* **Preview:** `preview/account.html`
- [ ] Create `templates/customers/account.json`
- [ ] Build `sections/main-account.liquid` with personalized welcome header: *"Welcome back, [Name] — Ayurvedic Wellness Journey"*
- [ ] Build patient stats counter bar: Total Orders, Active Prescriptions, Loyalty Points
- [ ] Build **Prescription Vault Card**: display valid Ayush doctor prescriptions with expiry status & "Upload New Prescription" button
- [ ] Build **Recent Orders Table**: last 5 orders with order ID, date, fulfillment status badge, order total, and "View Order" / "Reorder" action buttons
- [ ] Build **Default Address Summary Card** with direct "Manage Addresses" shortcut
- [ ] Build **Ayush Doctor Consultation Banner**: one-click WhatsApp appointment booking

### Task 1.4: Order Detail & History Page
* **Template:** `templates/customers/order.json`
* **Section:** `sections/main-order.liquid`
* **Preview:** `preview/order.html`
- [ ] Create `templates/customers/order.json`
- [ ] Build `sections/main-order.liquid` with order header (Order ID `#SR-XXXXX`, date, financial pill `Paid`, fulfillment status `In Transit`)
- [ ] Build **Interactive 4-Step Fulfillment Tracker**:
  1. Order Placed
  2. Prescription Verified & Packed
  3. Dispatched / In Transit (Carrier name + live AWB tracking link: Shiprocket / Delhivery)
  4. Out for Delivery & Delivered
- [ ] Build itemized product receipt: thumbnail image, formulation title, volume variant, SKU, quantity, unit price, total
- [ ] Build financial summary: Subtotal, discount code applied, GST tax, shipping, grand total
- [ ] Build shipping and billing address cards with phone number
- [ ] Add printable branded GST invoice generator button

### Task 1.5: Address Management Page
* **Template:** `templates/customers/addresses.json`
* **Section:** `sections/main-addresses.liquid`
* **Preview:** `preview/addresses.html`
- [ ] Create `templates/customers/addresses.json`
- [ ] Build `sections/main-addresses.liquid` with 2-column saved address cards with "Default" badge
- [ ] Build "Add New Address" modal drawer with full field validation
- [ ] Build "Edit Address" modal drawer with pre-filled inputs
- [ ] Add "Delete Address" modal with safety confirmation
- [ ] Add "Set as default address" checkbox and action handler

### Task 1.6: Password Reset & Account Activation
* **Templates:** `templates/customers/reset_password.json`, `templates/customers/activate_account.json`
* **Sections:** `sections/main-reset-password.liquid`, `sections/main-activate-account.liquid`
- [ ] Create token-based password reset template and section
- [ ] Create customer account invitation activation template and section

---

## Sprint 2: Checkout & Order Flow (Completed)

### Task 2.1: Theme Checkout Branding Schema
* **File:** `config/settings_schema.json`
- [x] Add `checkout` branding configuration category in `settings_schema.json`:
  - **Logo:** Sanan Relief apothecary emblem (upload & width configuration)
  - **Colors:** Primary brand teal (`#2D6E6F`), Dark teal buttons (`#1A3D3E`), Warm background (`#F7FBFB`), White card surface (`#FFFFFF`)
  - **Typography:** Headings set to `Playfair Display`, body set to `Plus Jakarta Sans`
  - **Border Radius:** Pill radius (24px) for action buttons and form inputs
  - **AYUSH Compliance:** Schedule E-1 prescription mandate banner & 18+ age declaration gate

### Task 2.2: Thank You Page Experience (Post-Purchase)
* **Shopify Engine:** Post-Purchase Extension / Thank You Page Blocks
* **Preview:** `preview/thank-you.html` & `assets/sanan-thank-you.css`
- [x] Build celebratory order confirmation hero with animated green checkmark
- [x] Display order confirmation number, customer email, and delivery window (3–5 business days)
- [x] Build **Ayush Doctor Consultation Scheduling Card**: free 15-minute dosage onboarding consultation with an Ayurvedic physician
- [x] Build **Prescription Review Status Notice**: "Approved" vs "Under Medical Review"
- [x] Build **WhatsApp Order Updates Opt-In**: one-click button to receive real-time delivery alerts
- [x] Build itemized product receipt with discreet packaging notice

### Task 2.3: Standalone Guest Track Order Page
* **Template:** `templates/page.track-order.json`
* **Section:** `sections/main-track-order.liquid`
* **Preview:** `preview/track-order.html` & `assets/sanan-track-order.css`
- [x] Create `templates/page.track-order.json` and `sections/main-track-order.liquid`
- [x] Build guest tracking lookup form: Order Number (`#SR-XXXXX`) + Email address or Mobile phone
- [x] Build real-time courier tracking card showing carrier name, AWB tracking number, current location, and estimated delivery date
- [x] Add tracking FAQ accordion: delivery timelines, discreet packaging, address updates

---

## Sprint 3: Core Store Pages Polish (In Progress)

### Task 3.1: Dedicated Product Detail Page
* **Template:** `templates/product.json`
* **Section:** `sections/main-product.liquid`
* **CSS/JS:** `assets/sanan-pdp.css`, `assets/sanan-pdp.js`
* **Preview:** `preview/product.html`
- [x] Assemble standalone `preview/product.html` showcasing the full product page experience
- [x] **Large Images & Visible Thumbnails Section (Cannazo-style Architecture)**: Full-width featured hero stage box + purple Zen State marquee ticker ribbon + 3-column grid of 8 large visible image cards with active teal border and dynamic stage switching
- [x] **Sticky Buy Box Alignment**: Stays locked in view beside the multi-image gallery with real-time Pack Size pills (`10`, `20`, `40` Gummies), Flavour selector with colored dots (`Mango`, `Black Currant`, `Cola`, `Raw Mango`, `Citrus`), and interactive Potency & Dosage Breakdown accordion (Total per pack & Per gummy)
- [x] **Sticky Floating Bottom Cart Bar (Reference Architecture)**: Automatically triggers via IntersectionObserver once the page is scrolled past the main buy box "Add to Cart" button. Features product thumbnail, formulation title, price (`Rs. 2,599.00`), pack size dropdown selector, pill quantity stepper (`- 1 +`), pill "Add To Cart" button, and circular scroll-to-top floating button (`^`)
- [x] **Strict Header Clearance (175px top padding)** ensuring content begins completely below floating header
- [x] Pricing, discount badge (`Save 13%`), and key highlights checkmarks
- [x] Clinical description with psychoactive advisory, terpene/taste profile badges, and hydrophobic moisture notice
- [x] Interactive Ayush Prescription Required module with radio toggle and dynamic file upload dropzone
- [x] Ayush regulatory compliance consent checkboxes
- [x] Quantity stepper, AJAX Add to Basket, Buy Now, and Wishlist heart button
- [x] Live social proof viewer count (`24 People viewing right now!`)
- [x] Chief Ayurvedic Physician advice callout (`Dr. Harshal Sawarkar`) and WhatsApp chat card
- [x] Full-width Marquee Zen State ribbon
- [x] 4-Step Order Fulfillment workflow sequence
- [x] **Amazon A+ Hero Brand Story Banner**: WHO-GMP, NABL HPLC, CTRI Human Trial & Schedule E-1 compliance
- [x] **Amazon A+ Clinical Comparison Matrix**: side-by-side benchmark vs conventional NSAIDs and generic CBD isolate
- [x] **Amazon A+ 4 Visual Feature Story Cards**: Supercritical CO₂, Bioavailability, Citrus Pectin, Medical Oversight
- [x] **Amazon A+ Interactive Tabbed Technical Dossier**: Clinical Overview, Pharmacokinetics, Ingredients, Lab COA, Safety
- [x] **Amazon A+ Customer Reviews Dashboard**: 4.9/5 rating, 5-bar distribution, concern filter chips, verified patient reviews
- [x] **Reference Customer Reviews Architecture (Qurist-style)**: 3-column summary bar with rating score, 5-star teal progress distribution bars, solid black pill "Write a review" button with interactive submission modal, verified patient badges, review dates, light gray brand reply cards (`>> Sanan Relief replied:`), inline "Read more" toggles, and seamless client pagination (`1  2  3  ›  »`)
- [x] 4-Card Scientific Dossier infographics (Cannabinoid report, Dosage protocol, Terpenes, Targets)
- [x] 7 Technical specifications accordions (What makes special, Composition, Benefits, Dosage, Lab Reports, Shipping, Safety)
- [x] 8 Frequently Asked Questions (FAQ) accordions with medically verified answers
- [x] **"You Might Also Like" Related Formulations**: 4-column responsive grid styled with the signature storefront product cards (frosted translucent glass body, bottom-right organic scoop notch, floating circular external action button in `#EFE8DE`, wishlist heart button, vertical quick-view pill, botanical ingredient overlay chips, star ratings, and compare price with "Save ₹..." badge)

### Task 3.2: Standalone Cart Page
* **Template:** `templates/cart.json`
* **Sections:** `sections/main-cart-items.liquid`, `sections/main-cart-footer.liquid`
- [ ] Style standalone full-page cart to match slide-out cart drawer design
- [ ] Tier discount progress bar & free shipping threshold indicator
- [ ] Order notes and Ayush prescription upload input on cart page

### Task 3.3: All Collections Page
* **Template:** `templates/list-collections.json`
* **Section:** `sections/main-list-collections.liquid`
- [ ] Apply Sanan frosted glass cards with squircle thumbnail images for all collections
- [ ] Subcategory filter pills and responsive pagination

### Task 3.4: Dedicated Search Results Page
* **Template:** `templates/search.json`
* **Section:** `sections/main-search.liquid`
- [ ] Style full search page with instant facet filtering (Health Concern, Formulation Type, Price)
- [ ] Connect predictive search input in header directly to search page

---

## Sprint 4: Content & Utility Pages (In Progress)

### Task 4.1: About Us / Heritage Page
* **Template:** `templates/page.about.json`
* **Section:** `sections/sanan-about.liquid`
- [ ] Assemble dedicated `templates/page.about.json` from existing story sections
- [ ] 40-year formulation heritage timeline (1985 to present)
- [ ] WHO-GMP extraction facility and Ayurvedic doctors team profile

### Task 4.2: 404 Error Page
* **Template:** `templates/404.json`
* **Section:** `sections/main-404.liquid`
- [ ] Polish friendly Ayurvedic botanical messaging: *"This remedy has wandered"*
- [ ] Add search bar and "Return to Apothecary" button

### Task 4.3: Password / Coming Soon Page
* **Template:** `templates/password.json`
- [ ] Style email capture form and store launch countdown timer

### Task 4.4: Gift Card Page
* **Template:** `templates/gift_card.liquid`
- [ ] Style printable gift card voucher with QR code and balance code

---

## Completed Theme Pages & Components

- [x] **Homepage (`templates/index.json` / `preview/storefront.html`):**
  - Translucent frosted floating glass header (75% width, curved bottom)
  - Full-screen 100vh hero banner with background video/image
  - Organic notched product cards with external circular floating cart button
  - Parallax canvas, clinical studies counter, cinematic carousel, footer
- [x] **Collection Page (`templates/collection.json` / `preview/collection.html`):**
  - 450px full-width hero image from top of page with header overlay
  - Clean minimalist breadcrumbs (`Home / Shop / All Formulations`)
  - Minimalist topbar with `FILTERS`, quick facet pills, and custom sort dropdown
  - Fixed & sticky left filter sidebar (`position: sticky; top: 95px;`) with auto-scroll and subtle custom scrollbar
  - 12 signature frosted glass product cards with organic corner notch, floating circular cart button (`#EFE8DE`), botanical ingredients overlay, and savings badges
  - Quick-add variant selection modal, mobile filter drawer, responsive 3-col/2-col grid
- [x] **Slide-Out AJAX Cart Drawer (`snippets/cart-drawer.liquid`):**
  - Slide-out animation, free shipping threshold bar, tier discount, upsells, quantity steppers
- [x] **Blog Listing Page (`templates/blog.json` / `preview/blog.html`):**
  - Clinical editorial grid, reading time, author tags, category filters
- [x] **Blog Article Page (`templates/article.json` / `preview/article.html`):**
  - Editorial hero, scientific citations, table of contents, product recommendation callouts
- [x] **Contact & Consultation Page (`templates/page.contact.json` / `preview/contact.html`):**
  - Interactive WhatsApp doctor booking, prescription upload drag-and-drop form
- [x] **FAQ Page (`templates/page.faq.json` / `preview/faq.html`):**
  - Searchable accordion tabs for prescriptions, dosage, and Vijaya legality
- [x] **Shipping & Delivery Policy (`templates/page.legal.json` / `preview/legal.html`):**
  - Discreet delivery timelines and state compliance rules
- [x] **Return & Refund Policy (`templates/page.legal.json` / `preview/legal.html`):**
  - Ayush prescription medicine return and replacement policies
- [x] **Privacy Policy (`templates/page.legal.json` / `preview/legal.html`):**
  - Medical data and Indian IT Act compliance terms
- [x] **Terms & Conditions (`templates/page.legal.json` / `preview/legal.html`):**
  - 18+ statutory age declaration and doctor consultation terms
- [x] **Wishlist Component:**
  - Heart toggle button on every product card with LocalStorage persistence

