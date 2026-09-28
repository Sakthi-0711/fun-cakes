import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Navigation, Calendar, Check, Sparkles } from 'lucide-react';
import { BAKERY_INFO } from '../../data/productsData';

export default function BoutiqueExperience() {
  const [tastingBooked, setTastingBooked] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [occasionType, setOccasionType] = useState('Wedding 3-Tier Tasting');

  const handleBookTasting = (e) => {
    e.preventDefault();
    if (!guestName || !guestPhone) return;
    
    const msg = `Hello Fun Cakes Atelier! 🍰 I would like to book a *Private Tasting & Cake Consultation Session*.\n\nName: ${guestName}\nPhone: ${guestPhone}\nOccasion: ${occasionType}`;
    const url = `https://wa.me/${BAKERY_INFO.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setTastingBooked(true);
  };

  return (
    <section id="boutique" className="py-20 lg:py-28 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-50 border border-gold-300 text-gold-700 text-[10px] font-bold uppercase tracking-widest-luxury mb-4">
            <MapPin className="w-3.5 h-3.5 text-gold-500" />
            <span>The Atelier Boutique</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-light text-espresso-700">
            Step Into Our Patisserie Salon
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-espresso-400 font-light max-w-xl mx-auto leading-relaxed">
            Experience the aroma of freshly baked French pastry, sample seasonal cake sponges, and consult directly with our cake designers.
          </p>
        </div>

        {/* Content Box */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Location & Contact Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Primary Details Card */}
            <div className="bg-white p-7 sm:p-9 rounded-[2rem] border border-cream-200 shadow-luxury-sm flex flex-col gap-6">
              
              {/* Address Row */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cream-50 text-gold-700 flex items-center justify-center shrink-0 border border-gold-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-gold-700 tracking-widest-luxury">Boutique & Studio Address</div>
                  <h3 className="font-display font-medium text-lg sm:text-xl text-espresso-700 mt-1">
                    {BAKERY_INFO.address}
                  </h3>
                  <p className="text-xs text-espresso-400 font-light mt-0.5">{BAKERY_INFO.landmark}</p>
                </div>
              </div>

              {/* Hours Row */}
              <div className="flex items-start gap-4 pt-5 border-t border-cream-100">
                <div className="w-12 h-12 rounded-2xl bg-cream-50 text-espresso-600 flex items-center justify-center shrink-0 border border-cream-200">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] uppercase font-bold text-espresso-400 tracking-wider">Operating Schedule</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-semibold">
                      ● Open Today
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-xs text-espresso-600 font-light">
                    <div><strong>Monday – Friday:</strong> {BAKERY_INFO.hours.weekdays}</div>
                    <div><strong>Saturday – Sunday:</strong> {BAKERY_INFO.hours.weekends}</div>
                  </div>
                </div>
              </div>

              {/* Direct Quick Contact Buttons */}
              <div className="pt-5 border-t border-cream-100 flex flex-wrap gap-3">
                <a
                  href={`tel:${BAKERY_INFO.phone}`}
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-espresso-700 hover:bg-espresso-800 text-cream-50 font-semibold text-xs uppercase tracking-luxury transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>Call Atelier</span>
                </a>

                <a
                  href={`https://wa.me/${BAKERY_INFO.whatsapp}?text=Hello%20Fun%20Cakes!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-luxury transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Instant WhatsApp</span>
                </a>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-cream-50 hover:bg-cream-100 text-espresso-700 font-semibold text-xs border border-cream-200 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-gold-600" />
                  <span>Directions</span>
                </a>
              </div>

            </div>

            {/* Delivery Radius Card */}
            <div className="p-5 rounded-2xl bg-cream-50 border border-gold-200/80 flex items-center gap-3 text-xs text-espresso-600">
              <Sparkles className="w-4 h-4 text-gold-600 shrink-0" />
              <div className="font-light">
                <strong className="font-semibold text-espresso-700">Dedicated Chilled Delivery:</strong> {BAKERY_INFO.deliveryRadius}
              </div>
            </div>

          </div>

          {/* Right: Private Tasting Appointment Scheduler */}
          <div className="lg:col-span-5 bg-espresso-700 text-cream-100 p-8 sm:p-9 rounded-[2rem] shadow-luxury-xl flex flex-col justify-between border border-gold-500/30">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-espresso-600 text-gold-300 text-[10px] font-bold uppercase tracking-wider mb-4">
                <Calendar className="w-3 h-3 text-gold-400" />
                <span>By Private Appointment</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-normal text-cream-50">
                Book a Private Tasting
              </h3>
              <p className="text-xs text-cream-200 font-light mt-2 leading-relaxed">
                Planning a wedding or celebration over 50 guests? Reserve a 30-minute private consultation to sample 4 custom sponge and ganache pairings.
              </p>

              {tastingBooked ? (
                <div className="mt-8 p-6 rounded-2xl bg-espresso-600/90 border border-gold-400/80 text-center animate-fadeIn">
                  <div className="w-10 h-10 rounded-full bg-gold-500 text-espresso-800 flex items-center justify-center mx-auto mb-2">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-medium text-lg text-cream-50">Appointment Request Received</h4>
                  <p className="text-xs text-cream-200 font-light mt-1">
                    Our atelier coordinator will reach out via WhatsApp shortly to confirm your date.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookTasting} className="mt-6 flex flex-col gap-3.5">
                  <div>
                    <label className="block text-[9.5px] font-bold uppercase tracking-wider text-gold-300 mb-1">
                      Guest Name(s)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya & Arjun"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-espresso-800 border border-espresso-600 focus:border-gold-400 text-xs text-cream-100 placeholder:text-espresso-400 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[9.5px] font-bold uppercase tracking-wider text-gold-300 mb-1">
                      WhatsApp Contact Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-espresso-800 border border-espresso-600 focus:border-gold-400 text-xs text-cream-100 placeholder:text-espresso-400 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[9.5px] font-bold uppercase tracking-wider text-gold-300 mb-1">
                      Celebration Focus
                    </label>
                    <select
                      value={occasionType}
                      onChange={(e) => setOccasionType(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-espresso-800 border border-espresso-600 focus:border-gold-400 text-xs text-cream-100 outline-none"
                    >
                      <option value="Wedding 3-Tier Tasting">Wedding 3-Tier Tasting</option>
                      <option value="Milestone Birthday Showstopper">Milestone Birthday Showstopper</option>
                      <option value="Corporate / Event Dessert Bar">Corporate / Event Dessert Bar</option>
                      <option value="General Artisan Sampling">General Artisan Sampling</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full py-3 rounded-full bg-gold-500 hover:bg-gold-600 text-espresso-900 font-bold text-xs uppercase tracking-luxury shadow-xs transition-all"
                  >
                    Request Consultation Slot
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-espresso-600/80 text-[10.5px] text-cream-300 font-light text-center">
              Complimentary for confections exceeding 3.0 kg
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
