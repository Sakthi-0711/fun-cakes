export const CELEBRATION_OCCASIONS = [
  {
    id: 'birthday',
    title: 'Birthdays',
    subtitle: 'From milestone 1st birthdays to grand 50th jubilees',
    badge: 'Most Popular',
    image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=800&auto=format&fit=crop',
    recommendedProductIds: ['fc-01', 'fc-06', 'fc-10', 'fc-04'],
    accentColor: 'gold'
  },
  {
    id: 'wedding',
    title: 'Weddings & Engagements',
    subtitle: 'Romantic multi-tiered showstoppers with edible gold & floristry',
    badge: 'Bespoke Design',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=800&auto=format&fit=crop',
    recommendedProductIds: ['fc-02', 'fc-03', 'fc-08'],
    accentColor: 'blush'
  },
  {
    id: 'anniversary',
    title: 'Anniversaries',
    subtitle: 'Celebrate everlasting love with delicate artisan flavors',
    badge: 'Couple Favorites',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=800&auto=format&fit=crop',
    recommendedProductIds: ['fc-03', 'fc-02', 'fc-01'],
    accentColor: 'gold'
  },
  {
    id: 'baby-shower',
    title: 'Baby Showers & Gender Reveals',
    subtitle: 'Sweet pastel aesthetics with hidden interior cream surprises',
    badge: 'Delicate & Cute',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop',
    recommendedProductIds: ['fc-04', 'fc-08', 'fc-12'],
    accentColor: 'sage'
  },
  {
    id: 'party-desserts',
    title: 'Party Dessert Tables & Hampers',
    subtitle: 'Macaron towers, brownie boxes, and assorted dessert jars',
    badge: 'Crowd Pleasers',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=800&auto=format&fit=crop',
    recommendedProductIds: ['fc-08', 'fc-09', 'fc-11', 'fc-05'],
    accentColor: 'cocoa'
  }
];

export const CUSTOM_BUILDER_OPTIONS = {
  occasions: [
    { id: 'birthday', label: 'Birthday Celebration', icon: 'Cake' },
    { id: 'anniversary', label: 'Anniversary & Romance', icon: 'Heart' },
    { id: 'wedding', label: 'Wedding & Engagement', icon: 'Sparkles' },
    { id: 'baby_shower', label: 'Baby Shower & Reveal', icon: 'Baby' },
    { id: 'graduation', label: 'Graduation & Achievement', icon: 'Award' },
    { id: 'festival', label: 'Festival / Other Occasion', icon: 'PartyPopper' }
  ],
  tierSizes: [
    { id: 'bento', name: 'Bento Mini Cake (350g)', serves: '1 - 2 Pax', basePrice: 15.00, desc: 'Cute Korean lunchbox style' },
    { id: 'standard_1kg', name: 'Single Tier Classic (1.0 kg)', serves: '6 - 8 Pax', basePrice: 32.00, desc: 'Perfect for intimate family gatherings' },
    { id: 'grand_1_5kg', name: 'Single Tier Grand (1.5 kg)', serves: '10 - 14 Pax', basePrice: 48.00, desc: 'Tall double-height cake with rich piping' },
    { id: 'tiered_2kg', name: 'Two-Tier Celebration (2.0 kg)', serves: '18 - 22 Pax', basePrice: 75.00, desc: 'Stunning tiered presentation with dowels' },
    { id: 'royal_3kg', name: 'Three-Tier Masterpiece (3.5 kg+)', serves: '30+ Pax', basePrice: 130.00, desc: 'Showstopper for grand weddings & receptions' }
  ],
  flavorProfiles: [
    { id: 'belgian_truffle', name: 'Belgian Dark Truffle (70% Callebaut)', egglessAvailable: true, priceAdd: 0 },
    { id: 'champagne_rose', name: 'Champagne Rose & Wild Raspberry', egglessAvailable: false, priceAdd: 5.00 },
    { id: 'pistachio_saffron', name: 'Royal Pistachio & Saffron Mousse', egglessAvailable: true, priceAdd: 6.00 },
    { id: 'hazelnut_praline', name: 'Roasted Hazelnut Ferrero Crunch', egglessAvailable: true, priceAdd: 4.00 },
    { id: 'tahitian_vanilla', name: 'Aged Tahitian Vanilla & Mascarpone', egglessAvailable: true, priceAdd: 0 },
    { id: 'red_velvet', name: 'Crimson Red Velvet & Cream Cheese', egglessAvailable: true, priceAdd: 2.00 },
    { id: 'mango_fraisier', name: 'Seasonal Alphonso Mango Custard', egglessAvailable: true, priceAdd: 4.00 }
  ],
  toppers: [
    { id: 'gold_heart', name: 'Signature Gold Heart Acrylic Topper', price: 4.00 },
    { id: 'custom_name_wooden', name: 'Custom Name Laser Cut Topper', price: 6.00 },
    { id: 'edible_fresh_flowers', name: 'Organic Fresh Rose & Floral Crown', price: 8.00 },
    { id: 'sparkler_candles', name: 'Metallic Champagne Sparkler Candles (Pack of 3)', price: 3.00 },
    { id: 'macaron_garnish', name: 'French Macaron Crown (4 Pcs)', price: 7.00 },
    { id: 'none', name: 'Clean Minimalist (No Topper)', price: 0 }
  ],
  dietaryPreferences: [
    { id: 'eggless', name: '100% Eggless (Pure Vegetarian)' },
    { id: 'contains_egg', name: 'Standard Traditional Bake' },
    { id: 'less_sweet', name: 'Low Sugar / Mild Sweetness' },
    { id: 'nut_free', name: 'Strictly Nut-Free Prep' }
  ]
};
