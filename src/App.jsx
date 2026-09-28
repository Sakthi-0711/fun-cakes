import React, { useState } from 'react';
import TopAnnouncement from './components/layout/TopAnnouncement';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import OccasionSelector from './components/home/OccasionSelector';
import ProductShowcase from './components/home/ProductShowcase';
import CustomCakeBuilder from './components/home/CustomCakeBuilder';
import WhyChooseUs from './components/home/WhyChooseUs';
import CelebrationGallery from './components/home/CelebrationGallery';
import BakingPhilosophy from './components/home/BakingPhilosophy';
import BoutiqueExperience from './components/home/BoutiqueExperience';
import ProductQuickModal from './components/common/ProductQuickModal';
import WhatsAppFloatingBtn from './components/common/WhatsAppFloatingBtn';
import { X } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeOccasionFilter, setActiveOccasionFilter] = useState(null);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCustomBuilderModalOpen, setIsCustomBuilderModalOpen] = useState(false);

  const handleNavigateToMenu = (categoryId) => {
    setSelectedCategory(categoryId || 'all');
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectOccasion = (occasionId) => {
    setActiveOccasionFilter(occasionId);
    setSelectedCategory('all');
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearOccasionFilter = () => {
    setActiveOccasionFilter(null);
  };

  const handleOpenCustomStudio = () => {
    const studioEl = document.getElementById('custom-studio');
    if (studioEl) {
      studioEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsCustomBuilderModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-100 selection:bg-gold-500 selection:text-white">
      {/* Top Announcement Bar */}
      <TopAnnouncement />

      {/* Main Glassmorphic Sticky Header */}
      <Navbar
        onNavigate={handleNavigateToMenu}
        onOpenCustomBuilder={handleOpenCustomStudio}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenMenu={() => handleNavigateToMenu('all')}
          onOpenCustomBuilder={handleOpenCustomStudio}
        />

        {/* 2. Celebration Occasion Selector */}
        <OccasionSelector
          activeOccasion={activeOccasionFilter}
          onSelectOccasion={handleSelectOccasion}
          onOpenCustomBuilder={handleOpenCustomStudio}
        />

        {/* 3. Artisan Product Catalog & Showcase */}
        <ProductShowcase
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          activeOccasionFilter={activeOccasionFilter}
          onClearOccasionFilter={handleClearOccasionFilter}
          onQuickView={(prod) => setQuickViewProduct(prod)}
        />

        {/* 4. Interactive Bespoke Custom Cake Studio */}
        <CustomCakeBuilder />

        {/* 5. Brand Craft & Value Pillars */}
        <WhyChooseUs />

        {/* 6. Real Celebrations Wall & Reviews */}
        <CelebrationGallery />

        {/* 7. Baking Philosophy & Gourmet Ingredients */}
        <BakingPhilosophy />

        {/* 8. Visit Boutique, Hours & Tasting Appointments */}
        <BoutiqueExperience />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigateToMenu}
        onOpenCustomBuilder={handleOpenCustomStudio}
      />

      {/* Interactive Product Quick View Modal */}
      {quickViewProduct && (
        <ProductQuickModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}

      {/* Custom Cake Builder Standalone Modal if requested */}
      {isCustomBuilderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cocoa-900/60 backdrop-blur-md overflow-y-auto animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden my-auto shadow-warm-xl border border-gold-300">
            <button
              onClick={() => setIsCustomBuilderModalOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-cream-100 hover:bg-cream-200 text-cocoa-500 flex items-center justify-center transition-colors"
              aria-label="Close custom cake studio"
            >
              <X className="w-5 h-5" />
            </button>
            <CustomCakeBuilder
              isOpenInModal={true}
              onCloseModal={() => setIsCustomBuilderModalOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Sticky Floating WhatsApp Concierge */}
      <WhatsAppFloatingBtn />
    </div>
  );
}
