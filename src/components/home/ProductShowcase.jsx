import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Leaf, RotateCcw } from 'lucide-react';
import ProductCard from '../common/ProductCard';
import { CATEGORIES, PRODUCTS } from '../../data/productsData';

export default function ProductShowcase({ 
  selectedCategory, 
  onSelectCategory, 
  onQuickView, 
  activeOccasionFilter,
  onClearOccasionFilter 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyEggless, setOnlyEggless] = useState(false);
  const [sortBy, setSortBy] = useState('popular');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category check
      const matchesCategory = 
        selectedCategory === 'all' ||
        product.category === selectedCategory ||
        (product.subcategories && product.subcategories.includes(selectedCategory));

      // Occasion filter check if active
      const matchesOccasion = !activeOccasionFilter || (
        product.occasion && product.occasion.some(occ => 
          occ.toLowerCase().includes(activeOccasionFilter.replace('-', ' ').toLowerCase())
        )
      );

      // Eggless filter check
      const matchesEggless = !onlyEggless || product.isEggless;

      // Search query check
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.flavors && product.flavors.some(f => f.toLowerCase().includes(searchQuery.toLowerCase())));

      return matchesCategory && matchesOccasion && matchesEggless && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.isChefSpecial ? 1 : 0) - (a.isChefSpecial ? 1 : 0);
    });
  }, [selectedCategory, activeOccasionFilter, onlyEggless, searchQuery, sortBy]);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-cream-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-50 border border-gold-300 text-gold-700 text-[10px] font-bold uppercase tracking-widest-luxury mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>Baked Fresh To Order</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-light text-espresso-700">
              The Patisserie Collection
            </h2>
            <p className="text-xs sm:text-sm text-espresso-400 font-light mt-2 max-w-lg">
              Explore our signature celebration cakes, Basque cheesecakes, and French tea pastries.
            </p>
          </div>

          {/* Active Occasion Banner if filtered */}
          {activeOccasionFilter && (
            <div className="flex items-center gap-2.5 px-4 py-2 bg-white border border-gold-300/80 rounded-full text-xs text-espresso-700 shadow-luxury-sm">
              <span>Occasion filter: <strong className="capitalize text-gold-700">{activeOccasionFilter.replace('-', ' ')}</strong></span>
              <button
                onClick={onClearOccasionFilter}
                className="text-gold-700 hover:text-gold-900 font-bold underline ml-1 text-[11px]"
              >
                Reset
              </button>
            </div>
          )}
        </div>

        {/* Category Navigation Pills */}
        <div className="mt-8 flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-espresso-700 text-cream-50 shadow-luxury-sm'
                    : 'bg-white hover:bg-cream-100 text-espresso-400 border border-cream-200'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-3.5 px-4 rounded-2xl border border-cream-200 shadow-luxury-sm">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-espresso-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search flavor, cheesecake, truffle..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-cream-50/60 border border-cream-200 focus:border-gold-500 focus:bg-white focus:outline-none text-espresso-600 placeholder:text-espresso-300"
            />
          </div>

          {/* Toggles & Sorters */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
            {/* Eggless Only Toggle */}
            <button
              onClick={() => setOnlyEggless(!onlyEggless)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                onlyEggless
                  ? 'bg-sage-50 border-sage-300 text-sage-700'
                  : 'bg-white border-cream-200 text-espresso-400 hover:bg-cream-50'
              }`}
            >
              <Leaf className={`w-3.5 h-3.5 ${onlyEggless ? 'text-sage-400' : 'text-espresso-300'}`} />
              <span>100% Eggless Only</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs text-espresso-400">
              <span className="font-light hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort products by"
                className="px-3.5 py-2 rounded-xl bg-white border border-cream-200 text-xs font-semibold text-espresso-600 focus:border-gold-500 focus:outline-none cursor-pointer"
              >
                <option value="popular">Chef's Highlights</option>
                <option value="rating">Top Rated (★)</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="mt-12 text-center py-16 bg-white rounded-[2rem] border border-cream-200 p-8 shadow-luxury-sm">
            <div className="w-14 h-14 rounded-full bg-cream-50 flex items-center justify-center mx-auto text-espresso-300 mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-normal text-espresso-700">No confections found</h3>
            <p className="text-xs text-espresso-400 font-light mt-1 max-w-sm mx-auto">
              We couldn't find any cakes matching your current filter. Try searching for a different flavor or reset filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setOnlyEggless(false);
                onSelectCategory('all');
                if (onClearOccasionFilter) onClearOccasionFilter();
              }}
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-500 text-white text-xs font-semibold uppercase tracking-wider hover:bg-gold-600 transition-colors shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
