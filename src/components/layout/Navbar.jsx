import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Sparkles, ChevronDown } from 'lucide-react';
import Logo from '../common/Logo';
import { BAKERY_INFO } from '../../data/productsData';

export default function Navbar({ onNavigate, onOpenCustomBuilder }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Signature Cakes', href: '#menu', category: 'signature-cakes' },
    { name: 'Artisan Desserts', href: '#menu', category: 'desserts' },
    { name: 'Celebrations', href: '#celebrations' },
    { name: 'Bespoke Studio', href: '#custom-studio', highlight: true },
    { name: 'Our Craft', href: '#craft' },
    { name: 'The Atelier', href: '#boutique' },
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (link.href === '#custom-studio') {
      onOpenCustomBuilder();
    } else {
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      if (link.category && onNavigate) {
        onNavigate(link.category);
      }
    }
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-luxury-sm border-b border-cream-200 py-3' 
        : 'bg-[#FAF7F2]/80 backdrop-blur-sm border-b border-cream-200/60 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Logo size={isScrolled ? 'default' : 'default'} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`px-3.5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  link.highlight
                    ? 'text-gold-700 bg-gold-100/80 hover:bg-gold-200/80 border border-gold-300/80 flex items-center gap-1.5'
                    : 'text-espresso-500 hover:text-gold-700 hover:bg-cream-100/60'
                }`}
              >
                {link.highlight && <Sparkles className="w-3 h-3 text-gold-600" />}
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Direct WhatsApp Action */}
            <a
              href={`https://wa.me/${BAKERY_INFO.whatsapp}?text=Hello%20Fun%20Cakes!%20I%20would%20like%20to%20order%20a%20cake.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-espresso-600 bg-white hover:bg-cream-50 border border-cream-200 shadow-xs transition-all active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 text-sage-400" />
              <span>Direct Chat</span>
            </a>

            {/* Custom Cake Studio Button */}
            <button
              onClick={onOpenCustomBuilder}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gold-500 hover:bg-gold-600 uppercase tracking-luxury shadow-xs hover:shadow-gold-subtle transition-all active:scale-95 animate-shimmer"
            >
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Commission Cake</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenCustomBuilder()}
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gold-500 text-white uppercase tracking-wider sm:hidden"
            >
              Studio
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-espresso-600 hover:bg-cream-100 border border-cream-200 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#FAF7F2]/98 border-b border-cream-200 shadow-luxury-xl backdrop-blur-lg animate-fadeIn p-6 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`flex items-center justify-between p-3.5 rounded-2xl text-xs font-semibold uppercase tracking-wider transition-all ${
                  link.highlight
                    ? 'bg-gold-100 text-gold-700 border border-gold-300'
                    : 'text-espresso-600 hover:bg-cream-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  {link.highlight && <Sparkles className="w-3.5 h-3.5 text-gold-600" />}
                  <span>{link.name}</span>
                </div>
                <ChevronDown className="w-4 h-4 -rotate-90 text-espresso-300" />
              </a>
            ))}

            <div className="mt-5 pt-5 border-t border-cream-200 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCustomBuilder();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-gold-500 text-white font-bold text-xs uppercase tracking-luxury shadow-luxury-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Bespoke Cake Studio</span>
              </button>

              <a
                href={`https://wa.me/${BAKERY_INFO.whatsapp}?text=Hello%20Fun%20Cakes!`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-white text-espresso-700 font-semibold text-xs border border-cream-200"
              >
                <MessageCircle className="w-4 h-4 text-sage-400" />
                <span>WhatsApp: {BAKERY_INFO.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
