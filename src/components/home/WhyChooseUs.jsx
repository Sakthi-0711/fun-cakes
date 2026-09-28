import React from 'react';
import { Sparkles, Heart, ShieldCheck, Truck, Award, Leaf } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Award,
      title: 'Valrhona & Callebaut Couverture',
      description: 'Zero artificial compounds or vegetable fats. We use strictly 100% pure cocoa butter couverture chocolate.'
    },
    {
      icon: Sparkles,
      title: 'Bespoke Architectural Styling',
      description: 'Each tier is customized to your color theme and floral aesthetic by master cake decorators.'
    },
    {
      icon: Leaf,
      title: 'Dedicated 100% Eggless Kitchen',
      description: 'Impeccable moisture and crumb structure crafted for vegetarian celebrations without compromise.'
    },
    {
      icon: Truck,
      title: 'Climate-Controlled Delivery',
      description: 'Chilled transit vans guarantee delicate sugar florals and ganache layers arrive in pristine condition.'
    }
  ];

  return (
    <section id="craft" className="py-20 lg:py-28 bg-[#FAF7F2] border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-50 border border-gold-300 text-gold-700 text-[10px] font-bold uppercase tracking-widest-luxury mb-4">
            <Heart className="w-3 h-3 text-gold-600 fill-current" />
            <span>The Atelier Standards</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-light text-espresso-700">
            Uncompromising Standards in Every Layer
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-espresso-400 font-light max-w-xl mx-auto leading-relaxed">
            We believe a centerpiece must taste even more extraordinary than it looks. We honor this commitment with European culinary discipline.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-7 rounded-[1.75rem] border border-cream-200 shadow-luxury-sm hover:shadow-luxury-lg hover:border-gold-300/80 transition-all duration-300 flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-2xl bg-cream-50 text-gold-600 flex items-center justify-center mb-5 border border-gold-200/60">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-normal text-espresso-700 mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-espresso-400 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
