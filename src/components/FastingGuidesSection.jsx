import { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { useFaraliProduct } from '../context/FaraliProductContext';
import { FASTING_GUIDES } from '../data/fastingGuides';

export default function FastingGuidesSection() {
  const [activeGuide, setActiveGuide] = useState(null);
  const { setActiveFaraliKey } = useFaraliProduct();

  const handleSelectFlavor = (flavorKey) => {
    setActiveFaraliKey(flavorKey);
    setActiveGuide(null);
    const target = document.getElementById('product-showcase');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="vrat-guides" className="py-8 sm:py-12 bg-[#FFF8E9] border-t border-[#E8DCC8] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A323]/15 text-[#8B4513] text-xs font-bold uppercase tracking-wider mb-2.5">
            <BookOpen className="w-3.5 h-3.5 text-[#E5A323]" />
            <span>Fasting Knowledge &amp; Vrat Guides</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#3B2418] tracking-tight leading-tight">
            The Sacred Science of <br />
            <span className="text-[#F28C28]">Gujarati Farali Chevda</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#7A5F4F] mt-2 leading-relaxed">
            In-depth guides on Ekadashi &amp; Navratri fasting rules, Sendha Namak Ayurvedic benefits, and why raw banana namkeen is the ultimate Satvik snack.
          </p>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {FASTING_GUIDES.map((guide) => (
            <article
              key={guide.id}
              className="bg-white rounded-2xl sm:rounded-3xl border border-[#E8DCC8] p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-[#E5A323] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#FFF3DF] text-[#8B4513] font-bold text-[11px] border border-[#E8DCC8]">
                    {guide.category}
                  </span>
                  <span className="flex items-center gap-1 text-[#7A5F4F] text-[11px]">
                    <Clock className="w-3 h-3 text-[#A8681E]" />
                    {guide.readTime}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="font-display font-black text-lg sm:text-xl text-[#3B2418] group-hover:text-[#F28C28] transition-colors leading-snug mb-2.5">
                  {guide.title}
                </h3>

                {/* Article Summary */}
                <p className="text-xs sm:text-sm text-[#7A5F4F] leading-relaxed mb-4">
                  {guide.summary}
                </p>

                {/* Quick Highlights Bullet List */}
                <div className="space-y-1.5 mb-5 pb-4 border-b border-[#E8DCC8]/60 text-xs text-[#5A3B2B]">
                  {guide.keyTakeaways.slice(0, 2).map((point, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button to Open Full Guide Modal */}
              <button
                type="button"
                onClick={() => setActiveGuide(guide)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#FFF8E9] hover:bg-[#E5A323] text-[#3B2418] font-bold text-xs uppercase tracking-wider transition-all border border-[#E8DCC8] hover:border-[#E5A323] flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Read Complete Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </article>
          ))}
        </div>

        {/* Global Internal Linking Strip to Product Varieties */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#FFF3DF] border border-[#E8DCC8] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-display font-black text-sm sm:text-base text-[#3B2418]">
              Ready for Sacred Fasting (Upvas)? Handcrafted in Nilkanthdham Poicha
            </h4>
            <p className="text-xs text-[#7A5F4F] mt-0.5">
              Available in fiery Tikha (Spicy) &amp; balanced Meetha (Sweet &amp; Savory) with pure Sendha Namak.
            </p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => handleSelectFlavor('tikha')}
              className="py-2 px-3.5 rounded-xl bg-[#B83220] hover:bg-[#D83A2E] text-white text-xs font-bold tracking-wide uppercase transition-all shadow-xs cursor-pointer"
            >
              Order Tikha
            </button>
            <button
              type="button"
              onClick={() => handleSelectFlavor('meetha')}
              className="py-2 px-3.5 rounded-xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white text-xs font-bold tracking-wide uppercase transition-all shadow-xs cursor-pointer"
            >
              Order Meetha
            </button>
          </div>
        </div>

      </div>

      {/* Reader Modal for Complete Educational Content */}
      {activeGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-[#FFF8E9] rounded-3xl border border-[#E8DCC8] shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-5 sm:p-8 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveGuide(null)}
              aria-label="Close article"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white border border-[#E8DCC8] text-[#3B2418] hover:bg-[#E5A323] hover:text-white transition-colors cursor-pointer shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-10 mb-5">
              <span className="px-3 py-1 rounded-full bg-[#E5A323]/20 text-[#8B4513] font-bold text-xs uppercase tracking-wider inline-block mb-2">
                {activeGuide.category}
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#3B2418] leading-tight mb-2">
                {activeGuide.title}
              </h2>
              <div className="flex items-center gap-3 text-xs text-[#7A5F4F]">
                <span>By {activeGuide.author}</span>
                <span>•</span>
                <span>{activeGuide.readTime}</span>
              </div>
            </div>

            {/* Highlights Box */}
            <div className="p-4 rounded-2xl bg-white border border-[#E8DCC8] mb-6">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#A8681E] mb-2">
                Key Fasting Takeaways:
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#3B2418]">
                {activeGuide.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Sections */}
            <div className="space-y-5 text-sm sm:text-base text-[#3B2418]/90 leading-relaxed mb-8">
              {activeGuide.content.map((sec, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h3 className="font-display font-black text-base sm:text-lg text-[#8B4513]">
                    {sec.heading}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A3B2B] leading-relaxed">
                    {sec.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer Direct CTA Links */}
            <div className="p-5 rounded-2xl bg-white border border-[#E8DCC8] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-display font-bold text-sm text-[#3B2418]">
                  Taste the Divine Purity of Poicha Farali Chivda
                </h4>
                <p className="text-xs text-[#7A5F4F] mt-0.5">
                  Freshly packed with 100% Sendha Namak &amp; zero palm oil.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleSelectFlavor('tikha')}
                  className="py-2.5 px-4 rounded-xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  View Tikha Pack
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectFlavor('meetha')}
                  className="py-2.5 px-4 rounded-xl bg-[#8B4513] hover:bg-[#4A2612] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  View Meetha Pack
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

