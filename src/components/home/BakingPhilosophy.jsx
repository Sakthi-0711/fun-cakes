import React from 'react';
import { Sparkles, Award } from 'lucide-react';

export default function BakingPhilosophy() {
  const ingredients = [
    { title: '70% Belgian Couverture', desc: 'Directly sourced from sustainable cocoa roasters for velvety mouthfeel and deep aromatics.' },
    { title: 'Normandy Churned Butter', desc: 'High butterfat churned cream providing extraordinarily delicate crumb and golden crusts.' },
    { title: 'Tahitian Bourbon Vanilla', desc: 'Whole cured vanilla pods infused for 24 hours into whipped mascarpone creams.' },
    { title: 'Pure Honest Confectionery', desc: 'Zero preservatives, artificial stabilisers, or synthetic fats. Only clean, unadulterated baking.' }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Chef & Craft Story Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-luxury-xl border border-gold-300/80 bg-cream-100">
              <img
                src="https://images.unsplash.com/photo-1556911073-38141963c9e0?q=80&w=800&auto=format&fit=crop"
                alt="Pastry chef decorating artisan cake"
                className="w-full h-[420px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-cream-200 shadow-luxury-md text-xs">
                <div className="font-display font-medium text-base text-espresso-700">Small-Batch Atelier Philosophy</div>
                <p className="text-espresso-400 font-light text-[11px] mt-0.5">
                  Every layer is baked fresh within hours of delivery, never pre-frozen.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Craft Narrative & Ingredients */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-50 border border-gold-300 text-gold-700 text-[10px] font-bold uppercase tracking-widest-luxury mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>Culinary Heritage</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-light text-espresso-700 leading-tight">
              Where French Patisserie Meets Celebration Artistry
            </h2>

            <p className="mt-5 text-xs sm:text-sm text-espresso-400 font-light leading-relaxed">
              At <strong>Fun Cakes</strong>, we treat cakes not as commodities, but as edible sculpture. A centerpiece marks a milestone in your family's life. We honor that privilege with authentic European technique, slow reductions, and the world’s finest raw ingredients.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {ingredients.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-cream-200 shadow-2xs">
                  <div className="flex items-center gap-2.5 font-display font-medium text-lg text-espresso-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-espresso-400 font-light mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
