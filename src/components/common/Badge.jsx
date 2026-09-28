import React from 'react';
import { Sparkles, Award, Leaf } from 'lucide-react';

export default function Badge({ type, text, className = '' }) {
  if (type === 'eggless') {
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold bg-sage-50 text-sage-400 border border-sage-200/80 backdrop-blur-md ${className}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-sage-400"></span>
        {text || '100% Eggless'}
      </span>
    );
  }

  if (type === 'bestseller') {
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold bg-gold-100 text-gold-700 border border-gold-300/80 backdrop-blur-md ${className}`}>
        <Award className="w-3 h-3 text-gold-600" />
        {text || 'Boutique Favorite'}
      </span>
    );
  }

  if (type === 'chef-special') {
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold bg-cream-50 text-gold-700 border border-gold-400/70 shadow-xs backdrop-blur-md ${className}`}>
        <Sparkles className="w-3 h-3 text-gold-500" />
        {text || "Master Baker Signature"}
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold bg-cream-100 text-espresso-400 border border-cream-200 ${className}`}>
      {text}
    </span>
  );
}
