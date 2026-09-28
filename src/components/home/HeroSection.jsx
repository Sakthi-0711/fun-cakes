import React from 'react';
import { Sparkles, ArrowRight, ArrowUpRight, Star, Heart, CheckCircle2 } from 'lucide-react';

export default function HeroSection({ onOpenMenu, onOpenCustomBuilder }) {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28 bg-[#FAF7F2]">
      
      {/* Delicate Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold-200/25 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-blush-100/30 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Brand Story */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Curation Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gold-300/80 shadow-luxury-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse"></span>
              <span className="font-sans uppercase text-[10px] font-bold tracking-widest-luxury text-gold-700">
                Haute Patisserie & Cake Atelier
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-light text-espresso-700 leading-[1.08] tracking-tight">
              Artisanal Celebrations, <br />
              <span className="font-serif italic font-normal text-gold-600">Baked into Pure Artistry.</span>
            </h1>

            {/* Editorial Subhead */}
            <p className="mt-6 text-sm sm:text-base text-espresso-400 max-w-xl leading-relaxed font-sans font-light">
              From grand multi-tiered wedding centerpieces to intimate celebration gateaux — each confection is meticulously handcrafted with pure French butter, Valrhona couverture chocolate, and fragrant Madagascar vanilla.
            </p>

            {/* Luxury Action CTAs */}
            <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-semibold text-xs uppercase tracking-luxury shadow-luxury-md hover:shadow-gold-subtle transition-all duration-300 transform hover:-translate-y-0.5 active:scale-98 animate-shimmer"
              >
                <span>Explore Cake Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenCustomBuilder}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-cream-25 text-espresso-700 font-semibold text-xs uppercase tracking-luxury border border-cream-300 hover:border-gold-400 shadow-luxury-sm transition-all duration-300 transform hover:-translate-y-0.5 active:scale-98"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                <span>Bespoke Studio</span>
              </button>
            </div>

            {/* Editorial Heritage Metrics */}
            <div className="mt-14 pt-8 border-t border-cream-200 grid grid-cols-3 gap-6 sm:gap-10 w-full max-w-lg">
              <div>
                <div className="font-display text-3xl sm:text-4xl font-normal text-espresso-700">
                  4.9 <span className="text-gold-500 text-xl font-sans">★</span>
                </div>
                <div className="text-[11px] uppercase tracking-wider text-espresso-300 mt-1">
                  500+ Verified Reviews
                </div>
              </div>

              <div>
                <div className="font-display text-3xl sm:text-4xl font-normal text-espresso-700">
                  100%
                </div>
                <div className="text-[11px] uppercase tracking-wider text-espresso-300 mt-1">
                  Pure Dairy Butter
                </div>
              </div>

              <div>
                <div className="font-display text-3xl sm:text-4xl font-normal text-espresso-700">
                  5,000+
                </div>
                <div className="text-[11px] uppercase tracking-wider text-espresso-300 mt-1">
                  Celebrations Baked
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Layered Editorial Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Subtle Golden Frame */}
              <div className="relative rounded-[2rem] p-3 bg-white/70 backdrop-blur-md border border-gold-200/80 shadow-luxury-xl">
                
                {/* Main Image */}
                <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/5] bg-cream-100 group">
                  <img
                    src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1000&auto=format&fit=crop"
                    alt="Artisanal Champagne Rose Cake"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop';
                    }}
                    className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  />

                  {/* Soft Cinematic Shadow Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/80 via-espresso-900/20 to-transparent"></div>

                  {/* Editorial Overlay Caption */}
                  <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                    <span className="inline-block px-3 py-0.5 rounded-full bg-gold-500/90 backdrop-blur-md text-white text-[9.5px] font-bold uppercase tracking-widest mb-2">
                      Atelier Signature No. 02
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-normal text-cream-50 leading-tight">
                      Champagne Rose & Wild Raspberry
                    </h3>
                    <p className="text-xs text-cream-100/90 font-light mt-1.5 line-clamp-2">
                      Soaked sponge with French pink champagne, organic raspberry confit, and hand-gilded 24K edible gold leaf.
                    </p>
                  </div>
                </div>

              </div>

              {/* Floating Luxury Detail Badge: Dietary Craft */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-luxury-lg border border-cream-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-sage-50 border border-sage-200 flex items-center justify-center text-sage-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-espresso-700">100% Eggless Selection</div>
                  <div className="text-[10px] text-espresso-300">Available across signature cakes</div>
                </div>
              </div>

              {/* Floating Luxury Detail Badge: Fresh Bake Schedule */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-luxury-xl border border-gold-300/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold-100 border border-gold-300 flex items-center justify-center text-gold-600">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-espresso-700">Small-Batch Daily Bake</div>
                  <div className="text-[10px] text-gold-700 font-medium">Baking commences at 6:00 AM</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
