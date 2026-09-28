import React from 'react';
import { Star, Heart, Camera } from 'lucide-react';
import { TESTIMONIALS } from '../../data/productsData';

export default function CelebrationGallery() {
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=600&auto=format&fit=crop',
      title: 'Romantic 3-Tier Garden Wedding',
      tag: 'Wedding'
    },
    {
      url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop',
      title: '25th Silver Jubilee Belgian Truffle',
      tag: 'Anniversary'
    },
    {
      url: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=600&auto=format&fit=crop',
      title: 'Pastel Dream 1st Birthday Centerpiece',
      tag: 'Birthday'
    },
    {
      url: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=600&auto=format&fit=crop',
      title: 'Artisan Macaron Dessert Spread',
      tag: 'Dessert Bar'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-50 border border-gold-300 text-gold-700 text-[10px] font-bold uppercase tracking-widest-luxury mb-4">
            <Heart className="w-3 h-3 text-gold-600 fill-current" />
            <span>Celebration Journal</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-light text-espresso-700">
            Real Moments, Cherished Memories
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-espresso-400 font-light max-w-xl mx-auto leading-relaxed">
            Read reflections from host families and event planners who trusted Fun Cakes for their milestone celebrations.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-[1.75rem] border border-cream-200 shadow-luxury-sm flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Occasion Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1 text-gold-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-700 bg-gold-50 border border-gold-200/80 px-2.5 py-0.5 rounded-full">
                    {review.occasion}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs text-espresso-500 leading-relaxed italic font-light">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Row */}
              <div className="mt-7 pt-4 border-t border-cream-100 flex items-center gap-3.5">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-gold-300/80"
                />
                <div>
                  <div className="font-display font-medium text-base text-espresso-700">{review.name}</div>
                  <div className="text-[10px] text-espresso-300 uppercase tracking-wider">{review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Celebration Visual Gallery Grid */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-7">
            <h3 className="font-display text-2xl font-normal text-espresso-700">
              Celebration Gallery
            </h3>
            <span className="text-xs text-espresso-400 font-light flex items-center gap-2">
              <Camera className="w-4 h-4 text-gold-600" />
              <span>Tag @funcakes.official</span>
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx} 
                className="group relative rounded-[1.25rem] overflow-hidden aspect-square border border-cream-200 bg-cream-100 shadow-luxury-sm"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-white">
                  <span className="text-[9.5px] uppercase font-bold tracking-widest text-gold-400">{img.tag}</span>
                  <div className="font-display text-sm font-normal leading-tight mt-0.5">{img.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
