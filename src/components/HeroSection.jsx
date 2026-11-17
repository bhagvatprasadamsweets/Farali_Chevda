import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ShoppingBag, RotateCw, ArrowRight } from 'lucide-react';
import { useFaraliProduct } from '../context/FaraliProductContext';
import HeroBackgroundAnimation from './HeroBackgroundAnimation';
import HeroOrbitalAnimation from './HeroOrbitalAnimation';
import defaultBowl from '../assets/images/tikha2.webp';
import defaultPack from '../assets/images/tikha1.webp';

export default function HeroSection() {
  const { activeProduct, activeFaraliKey, setActiveFaraliKey, products, keys } = useFaraliProduct();
  const [viewMode, setViewMode] = useState('bowl'); // 'bowl' | 'pack'
  const [prevFaraliKey, setPrevFaraliKey] = useState(activeFaraliKey);

  // Synchronously reset selection during render when active product key changes (React 19 pattern)
  if (prevFaraliKey !== activeFaraliKey) {
    setPrevFaraliKey(activeFaraliKey);
    setViewMode('bowl');
  }

  const selectedVariant = activeProduct.variants[0];
  
  // Hero images: Authentic Prepared Bowl vs Sealed Retail Pouch
  const currentBowlImage = activeProduct.heroBowlImage || activeProduct.images[1]?.url || defaultBowl;
  const currentPackImage = activeProduct.heroPackImage || activeProduct.images[0]?.url || defaultPack;

  const isBowlView = viewMode === 'bowl';
  const displayedMainImage = isBowlView ? currentBowlImage : currentPackImage;
  const displayedThumbImage = isBowlView ? currentPackImage : currentBowlImage;

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === 'bowl' ? 'pack' : 'bowl'));
  };

  return (
    <section
      id="hero"
      className="relative pt-4 pb-6 sm:pt-6 sm:pb-8 bg-[#FFF8E9] overflow-hidden scroll-mt-20"
    >
      {/* Fully Responsive Multi-Layer Background Animation */}
      <HeroBackgroundAnimation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT COLUMN: Title, Subtitle, Description, Variety Selector & CTAs (Left Aligned) */}
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-7 flex flex-col justify-center items-start text-left"
          >

            {/* Main SEO H1 Heading */}
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#4A2612] leading-[1.1] mb-2 text-left">
              Authentic Gujarati Farali Chevda – Kela Chivda Online
            </h1>

            {/* Active Product Flavor & Subtitle */}
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#8B4513] tracking-wide mb-1 text-left">
              {activeProduct.title}
            </h2>
            <p className="font-display font-medium text-base sm:text-xl text-[#C49A58] tracking-wide mb-1 text-left">
              {activeProduct.subtitle}
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#A8681E] mb-3 text-left">
              {activeProduct.titleGujarati} • {activeProduct.titleHindi}
            </p>

            {/* Description Paragraph (Left Aligned) */}
            <p className="text-sm sm:text-base text-[#5A3B2B]/90 leading-relaxed max-w-xl mb-5 text-left">
              {activeProduct.description}
            </p>

            {/* FARALI CHIVDA VARIETY SELECTOR (PROPER CLEAN SQUARES WITHOUT TEXT - LEFT ALIGNED) */}
            <div className="mb-5 flex flex-col items-start text-left">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="text-xs font-black uppercase tracking-wider text-[#4A2612]">
                  Select Farali Flavor:
                </span>
                <span className="text-xs font-extrabold text-[#8B4513] bg-[#FFF3DF] px-2.5 py-0.5 rounded-full border border-[#E8DCC8]">
                  {activeProduct.flavor}
                </span>
              </div>
              
              <div className="flex items-center justify-start gap-3 sm:gap-4">
                {keys.map((k) => {
                  const prod = products[k];
                  const isSelected = activeFaraliKey === k;
                  const thumbImage = prod.heroBowlImage || prod.heroPackImage;
                  return (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setActiveFaraliKey(k)}
                      title={`${prod.title} (${prod.titleGujarati})`}
                      className={`w-18 h-18 sm:w-20 sm:h-20 lg:w-22 lg:h-22 rounded-2xl p-1 sm:p-1.5 transition-all duration-300 cursor-pointer focus:outline-none overflow-hidden ${
                        isSelected
                          ? 'border-2 border-[#8B4513] shadow-md scale-105 ring-2 ring-[#8B4513]/20 bg-white'
                          : 'border border-[#E8DCC8] opacity-75 hover:opacity-100 hover:border-[#8B4513]/50 hover:scale-102 bg-white/70'
                      }`}
                    >
                      <img
                        src={thumbImage}
                        alt={`${prod.title} (${prod.titleGujarati}) - Authentic Satvik Gujarati Farali Chivda`}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Promotional Free Shipping Badges */}
            <div className="flex flex-wrap items-center justify-start gap-2 mb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF3DF] border border-[#E5A323]/35 text-xs font-semibold text-[#8B4513] shadow-2xs">
                <span className="text-[#E5A323] font-bold">✓</span>
                <span>Free Shipping above ₹999</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF3DF] border border-[#E5A323]/35 text-xs font-semibold text-[#8B4513] shadow-2xs">
                <span className="text-[#E5A323] font-bold">✓</span>
                <span>First Order: Free Shipping above ₹599</span>
              </div>
            </div>

            {/* Pricing Tag & CTAs (Left Aligned) */}
            <div className="flex flex-wrap items-center justify-start gap-3 mb-6 w-full">
              <a
                href={selectedVariant.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 sm:py-3.5 sm:px-7 rounded-2xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-black text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer text-center"
              >
                <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="whitespace-nowrap">Buy Now</span>
                <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-75 shrink-0 hidden sm:inline" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                title="Inquire about this product"
                className="py-3 px-5 sm:py-3.5 sm:px-6 rounded-2xl bg-[#4A2612] hover:bg-[#341A0B] text-white font-black text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer text-center"
              >
                <span className="whitespace-nowrap">Inquiry Now</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              </a>
            </div>

            {/* Quick Guarantees (Left Aligned) */}
            <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-4 text-xs text-[#7A5F4F] pt-1">
              <span>✓ 100% Upvas Fasting Purity</span>
              <span>✓ Pure Rock Salt (Sendha Namak)</span>
              <span>✓ Freshly Dispatched</span>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: Product Presentation with Orbital Background Animation & Floating Thumbnail */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative my-6 sm:my-10 lg:my-0 py-4 sm:py-6 w-full"
          >
            {/* Concentric Dashed Orbital Animation */}
            <HeroOrbitalAnimation />

            {/* Main Product Showcase Card with Gentle Levitation & Overlapping Floating Thumbnail */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-20 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[390px]"
            >
              {/* Main Card Frame with White Border */}
              <div className="rounded-2xl sm:rounded-3xl p-1 sm:p-1.5 bg-white border border-white/80 shadow-[0_20px_50px_-15px_rgba(74,38,18,0.2)] relative">
                
                {/* Main Image Container */}
                <div className="relative aspect-square w-full rounded-xl sm:rounded-2xl overflow-hidden group bg-[#FFF8E9]">
                  <a
                    href={selectedVariant.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Click to Buy ${activeProduct.title} on Bhagvat Prasadam`}
                    className="block w-full h-full cursor-pointer relative"
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={displayedMainImage}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        src={displayedMainImage}
                        alt={
                          isBowlView
                            ? `Authentic Bhagvat Prasadam ${activeProduct.title} served in a traditional bowl with roasted peanuts and raisins`
                            : `Bhagvat Prasadam ${activeProduct.title} premium sealed freshness pouch pack`
                        }
                        className={`w-full h-full transform group-hover:scale-105 transition-transform duration-700 ${
                          isBowlView ? 'object-cover' : 'object-contain p-4 drop-shadow-md'
                        }`}
                        loading="eager"
                        fetchPriority="high"
                      />
                    </AnimatePresence>

                    {/* View Label Badge */}
                    <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider uppercase text-[#3B2418] shadow-xs">
                      {isBowlView ? 'Served Bowl View' : 'Sealed Pouch View'}
                    </div>
                  </a>
                </div>

                {/* Overlapping Floating Thumbnail Card - Clicks to swap Bowl vs Pack view */}
                <motion.button
                  type="button"
                  onClick={toggleViewMode}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  title={isBowlView ? "Click to switch to Sealed Packshot View" : "Click to switch to Authentic Served Bowl View"}
                  className="absolute -bottom-3 -left-3 sm:bottom-4 sm:-left-5 z-30 w-16 h-16 sm:w-22 sm:h-22 rounded-xl sm:rounded-2xl p-0.5 sm:p-1 bg-white border border-white shadow-xl overflow-hidden cursor-pointer group text-left focus:outline-none"
                >
                  <div className="w-full h-full rounded-lg sm:rounded-xl overflow-hidden relative bg-[#FFF8E9]">
                    <img
                      src={displayedThumbImage}
                      alt={
                        isBowlView
                          ? `Bhagvat Prasadam ${activeProduct.title} sealed packaging pouch view`
                          : `Bhagvat Prasadam ${activeProduct.title} crunchy fasting snack in serving bowl`
                      }
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Interactive Swap Hint Overlay */}
                    <div className="absolute inset-0 bg-[#4A2612]/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-1">
                      <RotateCw className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFF8E9] animate-spin" />
                      <span className="text-[8px] font-black uppercase tracking-wider mt-0.5">Swap</span>
                    </div>
                  </div>
                </motion.button>

              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
