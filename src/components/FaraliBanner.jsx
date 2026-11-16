import { ExternalLink } from 'lucide-react';
import { useFaraliProduct } from '../context/FaraliProductContext';
import defaultBanner from '../assets/images/faralibanner.webp';

export default function FaraliBanner() {
  const { activeProduct, activeFaraliKey } = useFaraliProduct();

  const currentBanner = activeProduct.bannerImage || defaultBanner;

  const bannerLink = activeFaraliKey === 'meetha'
    ? 'https://www.bhagvatprasadam.com/products/kela-farali-chivda-meetha-sweet-gujarati-namkeen-snack?_pos=4&_psq=methi&_psid=b8545efca&_ss=e'
    : 'https://www.bhagvatprasadam.com/products/kela-farali-chivda-tikha-spicy-banana-namkeen-snack?variant=45431484252309';

  return (
    <section id="promo-banner" className="py-3 sm:py-5 bg-[#FFF8E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clickable Promotional Hero Banner Display */}
        <a
          href={bannerLink}
          target="_blank"
          rel="noopener noreferrer"
          title={`Click to Buy ${activeProduct.title} on Bhagvat Prasadam`}
          className="group relative block overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E8DCC8] hover:border-[#E5A323] shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
        >
          <div className="relative w-full aspect-[1920/800] overflow-hidden bg-[#FFF8E9]">
            <img
              src={currentBanner}
              alt={`${activeProduct.title} - Authentic Gujarati Farali Chivda Banner, 100% Satvik Upvas Namkeen | Bhagvat Prasadam`}
              className="w-full h-full object-cover transform group-hover:scale-[1.012] transition-transform duration-700"
              loading="lazy"
            />
          </div>

          {/* Subtle Warm Sheen Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Interactive Floating Buy Now Pill */}
          <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-xl bg-[#E5A323] group-hover:bg-[#F28C28] text-[#3B2418] group-hover:text-white font-black text-[11px] sm:text-xs md:text-sm uppercase tracking-wider shadow-lg transition-all transform group-hover:scale-105">
              <span>Buy Now</span>
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-85" />
            </span>
          </div>
        </a>

      </div>
    </section>
  );
}
