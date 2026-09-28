import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';
import { BAKERY_INFO } from '../../data/productsData';

export default function WhatsAppFloatingBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const [quickQuery, setQuickQuery] = useState('');

  const quickPrompts = [
    '🎂 Enquire about custom birthday cake',
    '✨ Check same-day delivery availability',
    '🌿 View 100% eggless options',
    '📍 Boutique location & opening hours'
  ];

  const handleSend = (text) => {
    const msg = text || quickQuery || 'Hello Fun Cakes! I would like to enquire about your cakes.';
    const url = `https://wa.me/${BAKERY_INFO.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Quick Chat Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-warm-xl border border-gold-300/80 overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-cocoa-700 p-4 text-cream-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gold-500 text-cocoa-800 flex items-center justify-center font-bold text-sm">
                  FC
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-400 ring-2 ring-cocoa-700"></span>
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-cream-50">Fun Cakes Concierge</h4>
                <p className="text-[10px] text-gold-300">Online • Typically replies in 5 mins</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-cocoa-600 text-cream-200"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-cream-50/60 max-h-72 overflow-y-auto">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-cream-200 text-xs text-cocoa-600 shadow-xs mb-3">
              👋 <strong>Welcome to Fun Cakes!</strong> How can our master bakers make your celebration sweeter today?
            </div>

            <div className="text-[11px] font-semibold text-cocoa-400 uppercase tracking-wider mb-2">
              Quick Questions:
            </div>

            <div className="flex flex-col gap-1.5">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="text-left text-xs p-2.5 rounded-xl bg-white hover:bg-gold-50 border border-cream-200 hover:border-gold-300 text-cocoa-600 transition-all shadow-2xs"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white border-t border-cream-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your custom message..."
              value={quickQuery}
              onChange={(e) => setQuickQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-3 py-2 text-xs rounded-xl bg-cream-50 border border-cream-300 focus:border-gold-500 focus:outline-none text-cocoa-700"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 rounded-xl bg-gold-500 hover:bg-gold-600 text-white shadow-sm transition-all"
              aria-label="Send WhatsApp message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-warm-lg hover:shadow-gold-glow transition-all duration-300 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-white" />
        <span className="font-semibold text-xs tracking-wide">
          {isOpen ? 'Close Concierge' : 'Chat with Bakery'}
        </span>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping absolute -top-0.5 -right-0.5"></span>
      </button>
    </div>
  );
}
