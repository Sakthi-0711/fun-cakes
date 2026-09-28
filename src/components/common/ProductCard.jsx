import React, { useState } from 'react';
import { Star, Eye, MessageCircle, Heart } from 'lucide-react';
import Badge from './Badge';
import { BAKERY_INFO } from '../../data/productsData';

export default function ProductCard({ product, onQuickView }) {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState(
    product.weights ? product.weights.find(w => w.default) || product.weights[0] : null
  );

  const currentPrice = selectedWeight ? selectedWeight.price : product.price;

  const handleWhatsAppOrder = (e) => {
    e.stopPropagation();
    const weightText = selectedWeight ? ` [Size: ${selectedWeight.label}]` : '';
    const message = `Hello Fun Cakes! 🍰 I would like to order / enquire about the *${product.name}*${weightText} priced at $${currentPrice.toFixed(2)}. Could you please let me know availability and delivery options?`;
    const url = `https://wa.me/${BAKERY_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div 
      onClick={() => onQuickView(product)}
      className="group relative flex flex-col bg-white rounded-[1.5rem] overflow-hidden border border-cream-200 hover:border-gold-300/80 shadow-luxury-sm hover:shadow-luxury-xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1"
    >
      {/* Product Image Container */}
      <div className="relative h-64 overflow-hidden bg-cream-100">
        <img 
          src={product.image} 
          alt={product.name}
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop';
          }}
          className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-106"
          loading="lazy"
        />

        {/* Top Floating Badges */}
        <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 z-10">
          {product.isChefSpecial && <Badge type="chef-special" />}
          {product.isEggless && <Badge type="eggless" />}
          {product.isBestSeller && !product.isChefSpecial && <Badge type="bestseller" />}
        </div>

        {/* Wishlist Heart Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className={`absolute top-3.5 right-3.5 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 z-10 ${
            isLiked 
              ? 'bg-blush-300 text-white shadow-xs' 
              : 'bg-white/85 text-espresso-400 hover:bg-white hover:text-blush-400'
          }`}
          aria-label="Save to favorites"
        >
          <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Hover Pill */}
        <div className="absolute inset-x-0 bottom-3.5 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 px-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-espresso-700/90 backdrop-blur-md text-white text-[11px] font-medium shadow-luxury-md hover:bg-espresso-700 transition-colors">
            <Eye className="w-3.5 h-3.5 text-gold-400" />
            Quick Preview
          </span>
        </div>

        {/* Delicate Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-5">
        {/* Rating & Portion Row */}
        <div className="flex items-center justify-between text-[11px] text-espresso-300 mb-1.5">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
            <span className="font-semibold text-espresso-600">{product.rating}</span>
            <span>({product.reviewsCount})</span>
          </div>
          <span className="text-espresso-400 font-normal">{product.servings}</span>
        </div>

        {/* Cake Title */}
        <h3 className="font-display font-medium text-xl text-espresso-700 group-hover:text-gold-700 transition-colors line-clamp-1 leading-snug">
          {product.name}
        </h3>

        {/* Tagline / Tasting Note */}
        <p className="text-xs text-espresso-400 font-light mt-1.5 line-clamp-2 leading-relaxed flex-1">
          {product.tagline}
        </p>

        {/* Weight / Portion Selector Pills */}
        {product.weights && product.weights.length > 1 && (
          <div className="mt-3.5 pt-2.5 border-t border-cream-100">
            <div className="flex flex-wrap gap-1.5">
              {product.weights.map((w, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedWeight(w);
                  }}
                  className={`text-[10.5px] px-2.5 py-0.5 rounded-md transition-all ${
                    selectedWeight?.label === w.label
                      ? 'bg-gold-500 text-white font-medium shadow-2xs'
                      : 'bg-cream-50 text-espresso-400 hover:bg-cream-100 border border-cream-200'
                  }`}
                >
                  {w.label.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Price & Order Row */}
        <div className="mt-4 pt-3 border-t border-cream-100 flex items-center justify-between gap-2">
          <div>
            <div className="text-[9.5px] text-espresso-300 uppercase font-semibold tracking-wider">Price</div>
            <div className="font-display text-2xl font-normal text-espresso-700">
              ${currentPrice.toFixed(2)}
            </div>
          </div>

          <button
            onClick={handleWhatsAppOrder}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gold-500 hover:bg-gold-600 text-white text-[11px] font-semibold uppercase tracking-wider shadow-xs hover:shadow-gold-subtle transition-all active:scale-95"
            title="Order via WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Order</span>
          </button>
        </div>
      </div>
    </div>
  );
}
