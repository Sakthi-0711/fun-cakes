import React from 'react';

export default function Logo({ 
  variant = 'horizontal', 
  size = 'default', 
  light = false, 
  className = '', 
  showTagline = true 
}) {
  // Height sizing classes for the image
  const sizeClasses = {
    small: 'h-10 md:h-11',
    default: 'h-14 md:h-16',
    large: 'h-24 md:h-28',
    hero: 'h-32 md:h-36',
  }[size] || 'h-14 md:h-16';

  return (
    <div className={`group inline-flex items-center select-none cursor-pointer transition-transform duration-300 hover:scale-[1.02] ${className}`}>
      {light ? (
        <div className="relative p-2 rounded-2xl bg-white/95 backdrop-blur-md shadow-luxury-md border border-gold-400/40 inline-block">
          <img
            src="/logo.png"
            alt="Fun Cakes - Cakes • Desserts • Celebrations"
            className={`${sizeClasses} w-auto object-contain transition-all duration-300`}
          />
        </div>
      ) : (
        <img
          src="/logo.png"
          alt="Fun Cakes - Cakes • Desserts • Celebrations"
          className={`${sizeClasses} w-auto object-contain drop-shadow-[0_2px_8px_rgba(62,39,30,0.06)]`}
        />
      )}
    </div>
  );
}
