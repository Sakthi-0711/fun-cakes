import React, { useState } from 'react';
import { 
  Sparkles, Check, ArrowRight, ArrowLeft, MessageCircle, 
  Heart, Cake, PartyPopper, Award, Palette, CheckCircle2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CUSTOM_BUILDER_OPTIONS } from '../../data/occasionsData';
import { BAKERY_INFO } from '../../data/productsData';

export default function CustomCakeBuilder({ isOpenInModal = false, onCloseModal }) {
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [selectedOccasion, setSelectedOccasion] = useState(CUSTOM_BUILDER_OPTIONS.occasions[0]);
  const [selectedTier, setSelectedTier] = useState(CUSTOM_BUILDER_OPTIONS.tierSizes[1]);
  const [selectedFlavor, setSelectedFlavor] = useState(CUSTOM_BUILDER_OPTIONS.flavorProfiles[0]);
  const [selectedDietary, setSelectedDietary] = useState(CUSTOM_BUILDER_OPTIONS.dietaryPreferences[0]);
  const [selectedTopper, setSelectedTopper] = useState(CUSTOM_BUILDER_OPTIONS.toppers[0]);
  const [customTheme, setCustomTheme] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [colorPalette, setColorPalette] = useState('Champagne Gold & Warm Cream');
  const [deliveryDate, setDeliveryDate] = useState('');

  // Live Price Calculation
  const calculatedPrice = (
    selectedTier.basePrice + 
    selectedFlavor.priceAdd + 
    selectedTopper.price
  );

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Safe fallback
      }
      setCurrentStep(5); // Blueprint Dispatch Step
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSendToWhatsApp = () => {
    const formattedDate = deliveryDate ? `\n📅 Target Date: ${deliveryDate}` : '';
    const message = 
      `*🎂 BESPOKE CAKE BLUEPRINT — FUN CAKES ATELIER*\n\n` +
      `✨ *Occasion:* ${selectedOccasion.label}\n` +
      `🍰 *Tier / Size:* ${selectedTier.name} (${selectedTier.serves})\n` +
      `🍫 *Flavor Profile:* ${selectedFlavor.name}\n` +
      `🌿 *Dietary Choice:* ${selectedDietary.name}\n` +
      `👑 *Cake Topper:* ${selectedTopper.name}\n` +
      `🎨 *Color Palette:* ${colorPalette}\n` +
      (customTheme ? `🎨 *Theme Notes:* ${customTheme}\n` : '') +
      (customMessage ? `💌 *Custom Inscription:* "${customMessage}"\n` : '') +
      `${formattedDate}\n` +
      `💰 *Estimated Blueprint Price:* $${calculatedPrice.toFixed(2)}\n\n` +
      `Please let me know if this slot is available and advise on next steps!`;

    const url = `https://wa.me/${BAKERY_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const colorPalettes = [
    'Champagne Gold & Warm Linen',
    'Petal Rose & Soft Blush',
    'Sage Leaf & Botanical White',
    'Dark Cocoa & 24K Gold Leaf',
    'Pastel Lilac & Pearl Glaze',
    'Custom Theme (Described in notes)'
  ];

  return (
    <section id="custom-studio" className={`py-20 lg:py-28 ${isOpenInModal ? 'p-4 sm:p-8' : 'bg-[#FFFDF9]'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-50 border border-gold-300 text-gold-700 text-[10px] font-bold uppercase tracking-widest-luxury mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>The Bespoke Atelier</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-light text-espresso-700">
            Design Your Bespoke Showstopper
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-espresso-400 font-light max-w-lg mx-auto leading-relaxed">
            Select your tier architecture, gourmet sponge pairings, hand-painted color palettes, and custom inscriptions with live price estimation.
          </p>
        </div>

        {/* Studio Box Card */}
        <div className="mt-12 bg-white rounded-[2rem] shadow-luxury-xl border border-gold-200/80 overflow-hidden">
          
          {/* Progress Indicator Bar */}
          <div className="bg-cream-50/70 p-4 sm:p-6 border-b border-cream-200">
            <div className="grid grid-cols-4 gap-2 text-center text-xs font-semibold">
              {[
                { step: 1, label: '1. Occasion' },
                { step: 2, label: '2. Tier & Size' },
                { step: 3, label: '3. Flavor & Diet' },
                { step: 4, label: '4. Theme & Message' },
              ].map((item) => (
                <div 
                  key={item.step}
                  onClick={() => currentStep > item.step && setCurrentStep(item.step)}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-2 py-2 px-2 rounded-xl transition-all ${
                    currentStep === item.step
                      ? 'bg-espresso-700 text-cream-50 shadow-xs font-semibold'
                      : currentStep > item.step
                      ? 'bg-gold-100/70 text-gold-700 cursor-pointer'
                      : 'text-espresso-300 opacity-60'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold ${
                    currentStep > item.step ? 'bg-gold-500 text-white' : 'bg-cream-200 text-espresso-600'
                  }`}>
                    {currentStep > item.step ? '✓' : item.step}
                  </span>
                  <span className="hidden md:inline text-[11px] uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step Content Area */}
          <div className="p-6 sm:p-10 min-h-[380px]">
            
            {/* STEP 1: Occasion */}
            {currentStep === 1 && (
              <div className="animate-fadeIn">
                <h3 className="font-display text-2xl font-normal text-espresso-700 mb-1">
                  What milestone are we crafting this confection for?
                </h3>
                <p className="text-xs text-espresso-400 font-light mb-6">
                  Our master decorators will adapt the height, florals, and mood accordingly.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {CUSTOM_BUILDER_OPTIONS.occasions.map((occ) => {
                    const isSelected = selectedOccasion.id === occ.id;
                    return (
                      <button
                        key={occ.id}
                        onClick={() => setSelectedOccasion(occ)}
                        className={`flex items-center gap-3.5 p-4 rounded-2xl border text-left transition-all ${
                          isSelected
                            ? 'border-gold-500 bg-gold-50/60 text-espresso-700 shadow-luxury-sm ring-1 ring-gold-400'
                            : 'border-cream-200 hover:border-gold-300/80 bg-white text-espresso-500'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-gold-500 text-white' : 'bg-cream-50 text-espresso-300 border border-cream-200'
                        }`}>
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs sm:text-sm text-espresso-700">{occ.label}</div>
                          <div className="text-[10.5px] text-espresso-300">Bespoke Styling</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: Tier & Size */}
            {currentStep === 2 && (
              <div className="animate-fadeIn">
                <h3 className="font-display text-2xl font-normal text-espresso-700 mb-1">
                  Select Cake Architecture & Servings
                </h3>
                <p className="text-xs text-espresso-400 font-light mb-6">
                  All multi-tier confections include food-grade internal dowels for secure presentation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {CUSTOM_BUILDER_OPTIONS.tierSizes.map((tier) => {
                    const isSelected = selectedTier.id === tier.id;
                    return (
                      <button
                        key={tier.id}
                        onClick={() => setSelectedTier(tier)}
                        className={`p-5 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                          isSelected
                            ? 'border-gold-500 bg-gold-50/60 text-espresso-700 shadow-luxury-sm ring-1 ring-gold-400'
                            : 'border-cream-200 hover:border-gold-300/80 bg-white text-espresso-500'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-xs sm:text-sm text-espresso-700">{tier.name}</span>
                            <span className="font-display text-xl font-normal text-gold-700">${tier.basePrice.toFixed(2)}</span>
                          </div>
                          <p className="text-xs text-espresso-400 font-light mt-1">{tier.desc}</p>
                        </div>
                        <div className="mt-4 inline-flex items-center gap-1.5 text-[10.5px] font-semibold text-gold-700 bg-gold-100/60 px-3 py-1 rounded-md w-fit">
                          <span>Guest Portion: {tier.serves}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 3: Flavor & Dietary */}
            {currentStep === 3 && (
              <div className="animate-fadeIn">
                <h3 className="font-display text-2xl font-normal text-espresso-700 mb-1">
                  Gourmet Sponge & Dietary Preparation
                </h3>
                <p className="text-xs text-espresso-400 font-light mb-6">
                  Handcrafted with Callebaut chocolate, fresh fruit purees, and pure dairy infusions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Flavor Selection */}
                  <div className="md:col-span-7">
                    <label className="block text-[10px] font-bold uppercase tracking-widest-luxury text-gold-700 mb-3">
                      Sponge & Ganache Pairing:
                    </label>
                    <div className="flex flex-col gap-2">
                      {CUSTOM_BUILDER_OPTIONS.flavorProfiles.map((flavor) => {
                        const isSelected = selectedFlavor.id === flavor.id;
                        return (
                          <button
                            key={flavor.id}
                            onClick={() => setSelectedFlavor(flavor)}
                            className={`flex items-center justify-between p-3.5 rounded-xl border text-left text-xs transition-all ${
                              isSelected
                                ? 'border-gold-500 bg-gold-50/70 text-espresso-700 font-semibold'
                                : 'border-cream-200 hover:border-gold-300/80 bg-white text-espresso-400'
                            }`}
                          >
                            <span>{flavor.name}</span>
                            <span className="font-display text-sm font-normal text-espresso-700">
                              {flavor.priceAdd > 0 ? `+$${flavor.priceAdd.toFixed(2)}` : 'Included'}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Dietary Preference Selection */}
                  <div className="md:col-span-5">
                    <label className="block text-[10px] font-bold uppercase tracking-widest-luxury text-gold-700 mb-3">
                      Dietary Standard:
                    </label>
                    <div className="flex flex-col gap-2">
                      {CUSTOM_BUILDER_OPTIONS.dietaryPreferences.map((diet) => {
                        const isSelected = selectedDietary.id === diet.id;
                        return (
                          <button
                            key={diet.id}
                            onClick={() => setSelectedDietary(diet)}
                            className={`p-3.5 rounded-xl border text-left text-xs transition-all ${
                              isSelected
                                ? 'border-sage-400 bg-sage-50 text-sage-800 font-semibold'
                                : 'border-cream-200 hover:border-cream-300 bg-white text-espresso-400'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                                isSelected ? 'border-sage-400 bg-sage-400' : 'border-cream-300'
                              }`}>
                                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                              </span>
                              <span>{diet.name}</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: Design Theme, Message & Toppers */}
            {currentStep === 4 && (
              <div className="animate-fadeIn">
                <h3 className="font-display text-2xl font-normal text-espresso-700 mb-1">
                  Artistic Finish, Color Theme & Inscription
                </h3>
                <p className="text-xs text-espresso-400 font-light mb-6">
                  Piped calligraphy on chocolate plaques, botanical crowns, and signature toppers.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left: Inscription & Color Theme */}
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest-luxury text-gold-700 mb-1.5">
                        Piped Calligraphy Plaque:
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Happy 30th Birthday David! ✨"
                        value={customMessage}
                        onChange={(e) => setCustomMessage(e.target.value)}
                        maxLength={50}
                        className="w-full px-4 py-2.5 rounded-xl border border-cream-200 focus:border-gold-500 focus:outline-none text-xs text-espresso-700 bg-cream-50/40"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest-luxury text-gold-700 mb-1.5">
                        Color Palette Vibe:
                      </label>
                      <select
                        value={colorPalette}
                        onChange={(e) => setColorPalette(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-cream-200 focus:border-gold-500 focus:outline-none text-xs text-espresso-700 bg-white"
                      >
                        {colorPalettes.map((pal, i) => (
                          <option key={i} value={pal}>{pal}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest-luxury text-gold-700 mb-1.5">
                        Specific Theme / Stylistic Details:
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Minimalist French lambeth piping with soft gold accents, pastel pink roses..."
                        value={customTheme}
                        onChange={(e) => setCustomTheme(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-cream-200 focus:border-gold-500 focus:outline-none text-xs text-espresso-700 bg-cream-50/40 resize-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* Right: Topper Selection */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest-luxury text-gold-700 mb-1.5">
                      Signature Topper / Garnish:
                    </label>
                    <div className="flex flex-col gap-2">
                      {CUSTOM_BUILDER_OPTIONS.toppers.map((topper) => {
                        const isSelected = selectedTopper.id === topper.id;
                        return (
                          <button
                            key={topper.id}
                            onClick={() => setSelectedTopper(topper)}
                            className={`flex items-center justify-between p-3.5 rounded-xl border text-xs transition-all ${
                              isSelected
                                ? 'border-gold-500 bg-gold-50/70 text-espresso-700 font-semibold'
                                : 'border-cream-200 hover:border-gold-300/80 bg-white text-espresso-400'
                            }`}
                          >
                            <span>{topper.name}</span>
                            <span className="font-display text-sm font-normal text-espresso-700">
                              {topper.price > 0 ? `+$${topper.price.toFixed(2)}` : 'Complimentary'}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: Final Blueprint & WhatsApp Dispatch */}
            {currentStep === 5 && (
              <div className="animate-fadeIn">
                <div className="text-center max-w-lg mx-auto mb-8">
                  <div className="w-14 h-14 rounded-full bg-gold-100 border border-gold-300 text-gold-600 flex items-center justify-center mx-auto mb-3">
                    <PartyPopper className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-3xl font-normal text-espresso-700">
                    Bespoke Blueprint Assembled
                  </h3>
                  <p className="text-xs text-espresso-400 font-light mt-1">
                    Your design blueprint has been estimated. Share this directly with our head pastry chef on WhatsApp for date reservation.
                  </p>
                </div>

                {/* Blueprint Card Summary */}
                <div className="bg-cream-50/80 p-7 rounded-2xl border border-gold-300/80 max-w-xl mx-auto text-xs text-espresso-600 shadow-luxury-sm">
                  <div className="grid grid-cols-2 gap-4 pb-5 border-b border-cream-200">
                    <div>
                      <span className="text-[9.5px] uppercase font-bold tracking-wider text-espresso-300 block">Occasion</span>
                      <span className="font-semibold text-espresso-700">{selectedOccasion.label}</span>
                    </div>
                    <div>
                      <span className="text-[9.5px] uppercase font-bold tracking-wider text-espresso-300 block">Architecture</span>
                      <span className="font-semibold text-espresso-700">{selectedTier.name} ({selectedTier.serves})</span>
                    </div>
                    <div>
                      <span className="text-[9.5px] uppercase font-bold tracking-wider text-espresso-300 block">Flavor Profile</span>
                      <span className="font-semibold text-espresso-700">{selectedFlavor.name}</span>
                    </div>
                    <div>
                      <span className="text-[9.5px] uppercase font-bold tracking-wider text-espresso-300 block">Dietary Standard</span>
                      <span className="font-semibold text-sage-600">{selectedDietary.name}</span>
                    </div>
                    <div>
                      <span className="text-[9.5px] uppercase font-bold tracking-wider text-espresso-300 block">Topper / Accent</span>
                      <span className="font-semibold text-espresso-700">{selectedTopper.name}</span>
                    </div>
                    <div>
                      <span className="text-[9.5px] uppercase font-bold tracking-wider text-espresso-300 block">Color Palette</span>
                      <span className="font-semibold text-espresso-700">{colorPalette}</span>
                    </div>
                  </div>

                  {customMessage && (
                    <div className="mt-4 pt-2">
                      <span className="text-[9.5px] uppercase font-bold tracking-wider text-espresso-300 block">Inscription Plaque</span>
                      <span className="italic font-display text-base text-espresso-700">"{customMessage}"</span>
                    </div>
                  )}

                  <div className="mt-5 pt-4 border-t border-cream-200 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-espresso-400">Estimated Total:</span>
                    <span className="font-display text-3xl font-normal text-gold-700">${calculatedPrice.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-5 py-2 text-xs text-espresso-400 hover:text-espresso-700 font-semibold"
                  >
                    Adjust Selections
                  </button>
                  <button
                    onClick={handleSendToWhatsApp}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-luxury shadow-luxury-md transition-all active:scale-98"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Blueprint to WhatsApp</span>
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Bar with Estimated Price & Navigation Controls */}
          {currentStep <= 4 && (
            <div className="bg-cream-50/60 px-6 py-4 border-t border-cream-200 flex items-center justify-between">
              
              {/* Estimated Price Badge */}
              <div className="flex items-center gap-2">
                <div className="text-[9.5px] text-espresso-300 uppercase font-bold tracking-wider hidden sm:block">Live Estimate:</div>
                <div className="font-display text-2xl font-normal text-espresso-700">
                  ${calculatedPrice.toFixed(2)}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-3">
                {currentStep > 1 && (
                  <button
                    onClick={handlePrevStep}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-cream-200 text-xs font-semibold text-espresso-500 hover:bg-cream-50"
                  >
                    <ArrowLeft className="w-3 h-3" />
                    <span>Back</span>
                  </button>
                )}

                <button
                  onClick={handleNextStep}
                  className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-gold-500 hover:bg-gold-600 text-white text-xs font-semibold uppercase tracking-luxury shadow-xs transition-all"
                >
                  <span>{currentStep === 4 ? 'Review Blueprint' : 'Next Step'}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
