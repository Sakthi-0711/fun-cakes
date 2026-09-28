import React from 'react';
import { Sparkles, MessageCircle, Clock } from 'lucide-react';
import { BAKERY_INFO } from '../../data/productsData';

export default function TopAnnouncement() {
  return (
    <aside aria-label="Bakery Announcements" className="bg-espresso-700 text-cream-100 text-[11px] py-2 px-4 border-b border-gold-600/20 font-light">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        
        {/* Left: Fresh Baking Guarantee Notice */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <Sparkles className="w-3 h-3 text-gold-400 shrink-0" />
          <span>
            <span className="font-semibold text-gold-300 uppercase tracking-wider text-[10px]">Atelier Guarantee:</span> Handcrafted Daily with French Butter & Valrhona Belgian Couverture
          </span>
        </div>

        {/* Right: Instant Contact & Opening Hours */}
        <div className="hidden md:flex items-center gap-6 text-cream-200">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-gold-400" />
            <span>Salon Hours: {BAKERY_INFO.hours.weekdays}</span>
          </div>
          <span className="text-gold-600/40">•</span>
          <a
            href={`https://wa.me/${BAKERY_INFO.whatsapp}?text=Hello%20Fun%20Cakes!%20I%20would%20like%20to%20enquire%20about%20a%20cake.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gold-300 hover:text-gold-200 transition-colors font-medium"
          >
            <MessageCircle className="w-3 h-3" />
            <span>WhatsApp Atelier: {BAKERY_INFO.phone}</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
