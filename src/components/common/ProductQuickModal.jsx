import React, { useState } from 'react';
import { X, Star, MessageCircle, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Badge from './Badge';
import { BAKERY_INFO } from '../../data/productsData';

export default function ProductQuickModal({ product, onClose }) {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.gallery ? product.gallery[0] : product.image);
  const [selectedWeight, setSelectedWeight] = useState(
    product.weights ? product.weights.find(w => w.default) || product.weights[0] : null
  );
  const [customEggless, setCustomEggless] = useState(product.isEggless);
  const [customMessage, setCustomMessage] = useState('');

  const currentPrice = selectedWeight ? selectedWeight.price : product.price;

  const handleWhatsAppOrder = () => {
    const weightText = selectedWeight ? ` • Size: ${selectedWeight.label}` : '';
    const egglessText = customEggless ? ' • 100% Eggless' : ' • Traditional Bake';
    const msgNote = customMessage.trim() ? ` • Custom Inscription on Cake: "${customMessage}"` : '';

    const messageText = `Hello Fun Cakes Atelier! 🍰✨ I would like to place an order for:\n\n*${product.name}*\n${weightText}${egglessText}${msgNote}\nEstimated Price: $${currentPrice.toFixed(2)}\n\nPlease advise on slot availability for pickup or delivery!`;
    
    const url = `https://wa.me/${BAKERY_INFO.whatsapp}?text=${encodeURIComponent(messageText)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-espresso-900/60 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-luxury-xl border border-gold-300/80 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-espresso-600 flex items-center justify-center transition-colors shadow-xs border border-cream-200"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-[85vh] overflow-y-auto">
          {/* Left Column: Image Gallery */}
          <div className="md:col-span-6 bg-[#FAF7F2] p-6 sm:p-8 flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-luxury-md border border-cream-200">
              <img
                src={activeImage}
                alt={product.name}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop';
                }}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />
              <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5">
                {product.isChefSpecial && <Badge type="chef-special" />}
                {product.isEggless && <Badge type="eggless" />}
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex gap-2.5 mt-4 overflow-x-auto pb-1">
                {product.gallery.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                      activeImage === img ? 'border-gold-500 shadow-xs scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Atelier Guarantee Card */}
            <div className="mt-4 p-3.5 rounded-xl bg-white border border-gold-200/80 flex items-center gap-3 text-xs text-espresso-600">
              <ShieldCheck className="w-5 h-5 text-gold-600 shrink-0" />
              <div className="font-light text-[11.5px]">
                <strong className="font-semibold text-espresso-700">Artisan Freshness Pledge:</strong> Baked fresh on the day of delivery with pure dairy & Valrhona couverture.
              </div>
            </div>
          </div>

          {/* Right Column: Cake Details & Customizer */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-white">
            <div>
              {/* Rating & Reviews */}
              <div className="flex items-center gap-2 text-xs mb-2">
                <div className="flex items-center gap-1 text-gold-500">
                  <Star className="w-3.5 h-3.5 fill-gold-500" />
                  <span className="font-semibold text-espresso-700 text-xs">{product.rating}</span>
                </div>
                <span className="text-espresso-200">•</span>
                <span className="text-espresso-400 font-light text-[11px]">{product.reviewsCount} verified reviews</span>
              </div>

              {/* Title & Tagline */}
              <h2 className="font-display text-2xl sm:text-3xl font-normal text-espresso-700 leading-snug">
                {product.name}
              </h2>
              <p className="text-xs text-espresso-400 font-light mt-2 leading-relaxed">
                {product.tagline}
              </p>

              {/* Advance notice notice */}
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-50 border border-cream-200 text-[10.5px] font-normal text-espresso-500">
                <Clock className="w-3 h-3 text-gold-600" />
                <span>Notice: 4 Hours Advance Baking Window</span>
              </div>

              {/* Size / Weight Selector */}
              {product.weights && product.weights.length > 0 && (
                <div className="mt-5">
                  <label className="block text-[10px] font-bold uppercase tracking-widest-luxury text-gold-700 mb-2">
                    Select Portion & Tier:
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {product.weights.map((w, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedWeight(w)}
                        className={`flex items-center justify-between p-3 rounded-xl border text-xs transition-all ${
                          selectedWeight?.label === w.label
                            ? 'border-gold-500 bg-gold-50/70 text-espresso-700 font-semibold'
                            : 'border-cream-200 hover:border-cream-300 text-espresso-400 bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                            selectedWeight?.label === w.label ? 'border-gold-500 bg-gold-500' : 'border-cream-300'
                          }`}>
                            {selectedWeight?.label === w.label && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                          </span>
                          <span>{w.label}</span>
                        </div>
                        <span className="font-display text-base font-normal text-espresso-700">${w.price.toFixed(2)}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Custom Cake Inscription */}
              <div className="mt-4">
                <label className="block text-[10px] font-bold uppercase tracking-widest-luxury text-gold-700 mb-1.5">
                  Custom Piped Calligraphy Plaque (Optional):
                </label>
                <input
                  type="text"
                  placeholder="e.g. Happy 25th Anniversary Sarah & Mark! ✨"
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  maxLength={40}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-cream-200 focus:border-gold-500 focus:outline-none text-xs text-espresso-700 placeholder:text-espresso-300 bg-cream-50/40"
                />
                <div className="text-[10px] text-espresso-300 mt-1 flex justify-between font-light">
                  <span>Piped on dark or white Belgian chocolate plaque</span>
                  <span>{customMessage.length}/40</span>
                </div>
              </div>

              {/* Ingredients & Care Details */}
              <div className="mt-4 p-3.5 rounded-xl bg-cream-50/70 border border-cream-200 text-xs">
                <div className="font-semibold text-espresso-700 mb-1 text-[11px]">Key Gourmet Ingredients:</div>
                <p className="text-espresso-400 font-light text-[11px] leading-relaxed">
                  {product.ingredients ? product.ingredients.join(' • ') : 'Belgian Chocolate, Cream, Madagascar Vanilla'}
                </p>
                {product.careTips && (
                  <div className="mt-2 text-[10.5px] text-sage-600 flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                    <span>{product.careTips}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Actions & WhatsApp Ordering */}
            <div className="mt-6 pt-4 border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-[9.5px] text-espresso-300 uppercase font-semibold tracking-wider">Total Estimate</div>
                <div className="font-display text-3xl font-normal text-espresso-700">
                  ${currentPrice.toFixed(2)}
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleWhatsAppOrder}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-semibold text-xs uppercase tracking-luxury shadow-luxury-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order via WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
