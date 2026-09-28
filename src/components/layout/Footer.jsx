import React, { useState } from 'react';
import { Sparkles, Heart, Phone, Mail, MapPin, Send, ShieldCheck, Check } from 'lucide-react';
import Logo from '../common/Logo';
import { BAKERY_INFO } from '../../data/productsData';

export default function Footer({ onNavigate, onOpenCustomBuilder }) {
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [subscribedSuccess, setSubscribedSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (subscribedEmail) {
      setSubscribedSuccess(true);
      setSubscribedEmail('');
    }
  };

  return (
    <footer className="bg-cocoa-700 text-cream-200 border-t border-gold-600/30">
      
      {/* Top Banner: Celebration Reminder / Club */}
      <div className="border-b border-cocoa-600/60 py-10 px-4 sm:px-6 lg:px-8 bg-cocoa-800/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Fun Cakes Celebration Club</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-cream-50">
              Never Miss a Sweet Milestone
            </h3>
            <p className="text-xs text-cream-300 mt-1 max-w-xl">
              Subscribe for seasonal flavor launches, secret menu previews, and exclusive birthday month privileges.
            </p>
          </div>

          <div className="w-full md:w-auto">
            {subscribedSuccess ? (
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-900/60 border border-emerald-500/60 text-emerald-300 text-xs font-semibold">
                <Check className="w-4 h-4" />
                <span>Welcome to the Sweet Club! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-md w-full">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={subscribedEmail}
                  onChange={(e) => setSubscribedEmail(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-cocoa-900 border border-cocoa-600 focus:border-gold-400 text-xs text-cream-100 placeholder:text-cocoa-400 outline-none w-full sm:w-64"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-cocoa-900 font-bold text-xs shadow-xs transition-colors shrink-0"
                >
                  Join Club
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Logo variant="horizontal" light={true} size="default" />
            <p className="text-xs text-cream-300 leading-relaxed max-w-sm mt-2">
              Bespoke artisan cakes and gourmet French patisserie baked daily in small batches with 100% pure butter and Belgian couverture chocolate.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-cocoa-600 hover:bg-gold-500 hover:text-cocoa-900 text-cream-200 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-cocoa-600 hover:bg-gold-500 hover:text-cocoa-900 text-cream-200 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a 
                href={`https://wa.me/${BAKERY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cocoa-600 hover:bg-emerald-600 text-cream-200 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Signature Menus */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-sm text-gold-400 uppercase tracking-wider mb-4">
              Cakes & Menus
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-cream-300">
              <li>
                <button onClick={() => onNavigate('signature-cakes')} className="hover:text-gold-300 transition-colors">
                  Signature Birthday Cakes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('chocolate-luxe')} className="hover:text-gold-300 transition-colors">
                  Belgian Chocolate Truffle Gateaux
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cheesecakes')} className="hover:text-gold-300 transition-colors">
                  San Sebastián Basque Cheesecakes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('eggless')} className="hover:text-gold-300 transition-colors">
                  100% Eggless Gourmet Collection
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('desserts')} className="hover:text-gold-300 transition-colors">
                  French Macaron Boxes & Jars
                </button>
              </li>
            </ul>
          </div>

          {/* Celebrations & Bespoke */}
          <div className="lg:col-span-2">
            <h4 className="font-serif font-bold text-sm text-gold-400 uppercase tracking-wider mb-4">
              Celebrations
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-cream-300">
              <li>
                <button onClick={onOpenCustomBuilder} className="hover:text-gold-300 transition-colors font-semibold text-gold-300">
                  ✦ Custom Cake Studio
                </button>
              </li>
              <li><a href="#celebrations" className="hover:text-gold-300 transition-colors">Wedding Tiered Cakes</a></li>
              <li><a href="#celebrations" className="hover:text-gold-300 transition-colors">Milestone Anniversaries</a></li>
              <li><a href="#celebrations" className="hover:text-gold-300 transition-colors">Baby Showers & Reveals</a></li>
              <li><a href="#boutique" className="hover:text-gold-300 transition-colors">Cake Tasting Appointments</a></li>
            </ul>
          </div>

          {/* Boutique Visit Info */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-sm text-gold-400 uppercase tracking-wider mb-4">
              Boutique Location
            </h4>
            <div className="flex flex-col gap-3 text-xs text-cream-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{BAKERY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${BAKERY_INFO.phone}`} className="hover:text-gold-300">{BAKERY_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${BAKERY_INFO.email}`} className="hover:text-gold-300">{BAKERY_INFO.email}</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="mt-12 pt-8 border-t border-cocoa-600/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>{BAKERY_INFO.hygienePledge}</span>
          </div>

          <div>
            © {new Date().getFullYear()} FUN CAKES Patisserie. Crafted with love for celebrations.
          </div>
        </div>

      </div>
    </footer>
  );
}
