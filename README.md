# FUN CAKES — Haute Patisserie & Bespoke Cake Atelier 🎂✨

> **Cakes • Desserts • Celebrations**  
> A premium, modern bakery brand experience and interactive portfolio website.

---

## 🌟 Overview & Highlights

**Fun Cakes** is an artisanal cake and dessert portfolio website designed for high-end boutique bakeries and celebration studios.

- 🎨 **Bespoke Brand Identity**: Custom vector logo mark featuring fine gold filigree, two-tier marble cake, delicate floral bouquet, and heart topper.
- 🍰 **Artisan Patisserie Menu**: Filterable catalog across *Signature Cakes, Chocolate Luxe, Fruit & Floral, Basque Cheesecakes, and 100% Eggless creations*.
- 💎 **Bespoke Cake Design Studio**: Interactive 4-step cake designer (Occasion → Tiers & Size → Flavor & Diet → Themes & Inscription) with live price estimation and one-click WhatsApp blueprint generator.
- 🥂 **Celebration Lookbook**: Curated showcase for Weddings, Milestone Birthdays, Anniversaries, and Baby Showers.
- 📱 **Direct WhatsApp Commerce Integration**: Pre-fills structured order messages with portion choices, customized plaque text, and flavor selections.
- 📍 **Local Boutique Experience**: Salon opening hours status, location directions, and private wedding cake tasting appointment scheduler.

---

## 🛠️ Technology Stack

- **Frontend**: [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with bespoke luxury color tokens (*Warm Linen, Polished Champagne Gold, Mocha Espresso*)
- **Typography**: *Cormorant Garamond*, *Playfair Display*, and *Plus Jakarta Sans* (Google Fonts)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Deployment Ready**: Zero server dependencies; deployable directly to Vercel, Netlify, or GitHub Pages.

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18.0.0 or later)
- npm (v9.0.0 or later)

### 2. Installation
```bash
# Clone repository
git clone <your-repository-url>
cd Funcakes

# Install dependencies
npm install
```

### 3. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
```bash
npm run build
npm run preview
```

---

## 📦 Project Structure

```
├── public/
│   ├── logo.png          # High-resolution official brand identity
│   └── favicon.png       # Retina favicon
├── src/
│   ├── components/
│   │   ├── common/       # Logo, Badges, ProductCard, QuickViewModal, WhatsAppConcierge
│   │   ├── home/         # Hero, Occasions, ProductShowcase, CustomBuilder, Philosophy, Boutique
│   │   └── layout/       # Navbar, TopAnnouncement, Footer
│   ├── data/             # Product catalog, categories, occasions & bakery metadata
│   ├── App.jsx           # Root layout and application state
│   ├── index.css         # Custom typography & luxury utility classes
│   └── main.jsx          # React DOM entry point
├── tailwind.config.js    # Luxury color tokens & typography configuration
└── vite.config.js        # Vite build configuration
```

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
