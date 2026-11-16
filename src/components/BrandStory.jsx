import { ShieldCheck, Heart, Check } from 'lucide-react';
import { useFaraliProduct } from '../context/FaraliProductContext';

export default function BrandStory() {
  const { activeProduct } = useFaraliProduct();

  // Selected flavor bowl image & pack image fallback
  const displayImage = activeProduct.heroBowlImage || activeProduct.heroPackImage;

  return (
    <section id="story" className="py-5 sm:py-7 bg-[#FFF8E9] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-[#3B2418] tracking-tight leading-[1.15]">
            The Sacred Fasting Tradition of <br className="hidden sm:inline" />
            <span className="text-[#F28C28]">Gujarat's Kela Farali Chivda</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#7A5F4F] mt-2 max-w-2xl mx-auto leading-relaxed">
            Handcrafted with devotion in Nilkanthdham Poicha with 100% pure Sendha Namak and zero palm oil.
          </p>
        </div>

        {/* Editorial 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* LEFT: Dynamic Selected Flavor Image */}
          <div className="lg:col-span-6 relative">
            <a
              href={activeProduct.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`Click to Buy ${activeProduct.title} on Bhagvat Prasadam`}
              className="relative rounded-3xl overflow-hidden shadow-xl border border-white/90 aspect-[4/3] w-full max-w-lg bg-white block group cursor-pointer mx-auto"
            >
              <img
                src={displayImage}
                alt={`Bhagvat Prasadam ${activeProduct.title} - Authentic Satvik Gujarati Fasting Snack Handcrafted at Nilkanthdham Poicha`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-xl bg-black/60 backdrop-blur-xs text-white text-xs font-bold tracking-wide">
                {activeProduct.flavor || activeProduct.title}
              </div>
            </a>
          </div>

          {/* RIGHT: Description & Supporting Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">

            <p className="text-sm sm:text-base text-[#3B2418]/85 leading-relaxed mb-3 font-normal">
              Whether observing holy <strong>Ekadashi, Navratri, Shravan, or Janmashtami vrat</strong>, or seeking a wholesome, crispy tea time snack, <strong>Kela Farali Chivda (કેળા ફરાળી ચેવડો)</strong> holds a cherished place in Indian households.
            </p>

            <p className="text-xs sm:text-sm text-[#3B2418]/70 leading-relaxed mb-5">
              Handcrafted in the sacred environs of <strong>Nilkanthdham Poicha, Gujarat</strong>, Bhagvat Prasadam master artisans carve fresh raw bananas into delicate batons, slow fry them to golden crispness in pure sunflower oil, and fold them with crunchy roasted peanuts, plump golden raisins, and pure rock salt (Sindhav Salt / Sendha Namak). We bring you this divine recipe in two beloved flavor profiles: fiery <strong>Tikha (Spicy)</strong> and balanced <strong>Meetha (Sweet &amp; Savory)</strong>.
            </p>

            {/* 2 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
              <div className="p-3.5 rounded-2xl bg-white/80 border border-[#E8DCC8] flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#2E7D32]/15 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#2E7D32]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-[#3B2418]">
                    100% Upvas &amp; Vrat Eligible
                  </h4>
                  <p className="text-[11px] text-[#7A5F4F] mt-0.5 leading-snug">
                    Pure Sendha Namak, zero grain starches, zero onion, zero garlic. Ideal for sacred fasting rituals.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/80 border border-[#E8DCC8] flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#F28C28]/15 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-[#F28C28]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-[#3B2418]">
                    Poicha Satvik Devotion
                  </h4>
                  <p className="text-[11px] text-[#7A5F4F] mt-0.5 leading-snug">
                    Prepared with love, pure vegetarian sanctity, zero palm oil, and zero artificial preservatives.
                  </p>
                </div>
              </div>
            </div>

            {/* Bullet List of Fasting Benefits */}
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-[#5A3B2B]">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#2E7D32]" />
                <span>Raw Banana Sticks</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#2E7D32]" />
                <span>Crunchy Roasted Peanuts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#2E7D32]" />
                <span>Plump Golden Raisins</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#2E7D32]" />
                <span>Stay Fresh Zipper Pack</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
