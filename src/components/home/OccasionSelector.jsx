import React from 'react';
import { Sparkles, ArrowUpRight, Heart, Gift } from 'lucide-react';
import { CELEBRATION_OCCASIONS } from '../../data/occasionsData';

export default function OccasionSelector({ activeOccasion, onSelectOccasion, onOpenCustomBuilder }) {
  return (
    <section id="celebrations" className="py-20 lg:py-28 bg-[#FFFDF9] border-y border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-50 border border-gold-300/80 text-gold-700 text-[10px] font-bold uppercase tracking-widest-luxury mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>Celebration Lookbook</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-light text-espresso-700 leading-tight">
            Curated Confections for Every Milestone
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-espresso-400 font-light max-w-xl mx-auto leading-relaxed">
            Whether welcoming a newborn, celebrating half a century of love, or saying 'I do', our pastry artists craft centerpieces tailored to your celebration's ambiance.
          </p>
        </div>

        {/* Occasion Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CELEBRATION_OCCASIONS.map((occasion) => {
            const isSelected = activeOccasion === occasion.id;
            return (
              <div
                key={occasion.id}
                onClick={() => onSelectOccasion(occasion.id)}
                className={`group relative rounded-[1.75rem] overflow-hidden cursor-pointer transition-all duration-500 border ${
                  isSelected 
                    ? 'border-gold-500 shadow-luxury-xl ring-1 ring-gold-400 -translate-y-1' 
                    : 'border-cream-200 shadow-luxury-sm hover:shadow-luxury-lg hover:border-gold-400/60 hover:-translate-y-1'
                } bg-white`}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-cream-100">
                  <img
                    src={occasion.image}
                    alt={occasion.title}
                    className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/85 via-espresso-900/30 to-transparent"></div>

                  {/* Occasion Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-espresso-700 text-[10px] font-bold uppercase tracking-wider shadow-xs">
                    {occasion.badge}
                  </span>

                  {/* Bottom Text */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display text-2xl font-normal text-cream-50 group-hover:text-gold-300 transition-colors">
                      {occasion.title}
                    </h3>
                    <p className="text-xs text-cream-100/80 font-light mt-1 line-clamp-2">
                      {occasion.subtitle}
                    </p>
                  </div>
                </div>

                {/* Bottom Card Bar */}
                <div className="p-4 px-5 flex items-center justify-between bg-white text-xs font-semibold text-espresso-500 border-t border-cream-100">
                  <span className="font-sans uppercase text-[10.5px] tracking-wider text-espresso-400 group-hover:text-gold-700 transition-colors">
                    {isSelected ? '✓ Filter Applied' : 'Explore Occasion Cakes'}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isSelected ? 'bg-gold-500 text-white' : 'bg-cream-50 text-espresso-400 group-hover:bg-gold-500 group-hover:text-white'
                  }`}>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Bespoke Studio Lookbook Card */}
          <div 
            onClick={onOpenCustomBuilder}
            className="group relative rounded-[1.75rem] overflow-hidden cursor-pointer border border-gold-300 bg-gradient-to-br from-cream-50 via-[#FFFDF9] to-gold-100/40 p-8 flex flex-col justify-between shadow-luxury-sm hover:shadow-luxury-xl hover:border-gold-500 transition-all duration-500 hover:-translate-y-1"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gold-500 text-white flex items-center justify-center shadow-luxury-sm mb-5">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest-luxury text-gold-700">Have a unique vision?</span>
              <h3 className="font-display text-2xl sm:text-3xl font-normal text-espresso-700 mt-2 leading-tight">
                Commission a Bespoke Showstopper
              </h3>
              <p className="text-xs text-espresso-400 font-light mt-3 leading-relaxed">
                Choose custom tiers, distinct flavors for each level, hand-sculpted sugar flowers, and personalized color palettes in our 4-step atelier.
              </p>
            </div>

            <div className="mt-8">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-espresso-700 hover:bg-espresso-800 text-cream-50 text-xs font-semibold uppercase tracking-luxury shadow-xs transition-colors">
                <span>Enter Bespoke Studio</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
