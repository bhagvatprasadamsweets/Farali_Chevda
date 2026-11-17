import { useState } from 'react';
import { BookOpen, Sparkles, Clock, ArrowRight, X, ShieldCheck, Leaf, Heart, CheckCircle2, ExternalLink } from 'lucide-react';
import { useFaraliProduct } from '../context/FaraliProductContext';

export const FASTING_GUIDES = [
  {
    id: 'ekadashi-navratri-vrat-guide',
    slug: 'ekadashi-navratri-fasting-rules-farali-chevda',
    category: 'Vrat Rituals & Purity',
    readTime: '4 min read',
    title: 'The Complete Ekadashi & Navratri Fasting Guide: Why Kela Farali Chevda is 100% Satvik',
    summary:
      'Understanding sacred Hindu fasting (Upvas) guidelines: why cereal grains are prohibited, how raw banana batons provide pure fasting energy, and why 100% Sendha Namak is non-negotiable.',
    publishDate: '2026-11-17',
    author: 'Bhagvat Prasadam Heritage Kitchen',
    content: [
      {
        heading: 'The Sacred Principle of Upvas: Why Grains (Ann) Are Excluded',
        text: 'In Vedic tradition, Upvas literally translates to "sitting near the divine." During holy observances such as Ekadashi, Navratri, Shravan, and Mahashivratri, the digestive system is consciously given a restorative break. Cereal grains such as wheat, rice, barley, and grain-derived flours like besan (gram flour) and maida are strictly avoided because they are considered heavy (Tamasic/Rajasic) and grain-based. Fasting guidelines permit only Satvik root produce, fresh fruits, nuts, and select non-cereal flours.'
      },
      {
        heading: 'Why Raw Bananas (Kela) are Sacred in Fasting Culture',
        text: 'Raw cooking bananas (Kaccha Kela) are botanical fruits, not grains. In traditional Gujarati and Kathiyawadi temples, raw banana batons have been revered for centuries as the premier Upvas ingredient. They are naturally dense in potassium, essential vitamins, and prebiotic resistant starch. When slow-fried in pure sunflower oil and seasoned with Sindhav rock salt, raw bananas offer a wholesome, satisfying crunch that sustains energy levels throughout day-long devotional fasts without causing sluggishness.'
      },
      {
        heading: 'Sendha Namak: The Divine Mineral Salt',
        text: 'Common table salt undergoes extensive industrial chemical processing, bleaching, and anti-caking additives. In contrast, pure Sendha Namak (Sindhav Rock Salt) is hand-mined from pristine subterranean mineral beds. It contains up to 84 essential trace minerals, balances bodily electrolytes during fasting, and is strictly prescribed by Ayurveda as the only pure salt fit for temple prasad offerings.'
      },
      {
        heading: 'Bhagvat Prasadam 100% Satvik Purity Guarantee',
        text: 'Handcrafted in the sacred atmosphere of Nilkanthdham Poicha, Gujarat, our Kela Farali Chevda contains zero onion, zero garlic, zero palm oil, and zero grain contamination. We use dedicated, hygienic cooking lines that process only Upvas ingredients, ensuring true spiritual peace of mind for every devotee.'
      }
    ],
    keyTakeaways: [
      'Zero grain flours (zero besan, zero maida, zero wheat, zero cornflour)',
      '100% pure Sendha Namak (Sindhav Rock Salt) with natural trace minerals',
      'Slow-fried in pure refined sunflower oil — never palm oil or vanaspati',
      'Handcrafted under strict Satvik standards in Nilkanthdham Poicha, Gujarat'
    ]
  },
  {
    id: 'sendha-namak-benefits-fasting',
    slug: 'sendha-namak-rock-salt-benefits-hindu-fasting',
    category: 'Ayurvedic Nutrition',
    readTime: '3 min read',
    title: 'Sendha Namak vs Regular Salt: Why Rock Salt Matters for Authentic Upvas Namkeen',
    summary:
      'A deep dive into the mineral richness of Sendha Namak (Sindhav Salt): cooling digestive properties, electrolyte hydration, and why it is the only salt permitted in Vedic fasting.',
    publishDate: '2026-11-17',
    author: 'Dr. V. Shastri, Ayurvedic Food Specialist',
    content: [
      {
        heading: 'What is Sendha Namak (Sindhav Salt)?',
        text: 'Sendha Namak, clinically classified as halite or Himalayan rock salt, is crystallized potassium chloride and sodium chloride infused with natural trace elements including magnesium, sulfur, iron, and calcium. Unlike sea salt derived from ocean evaporation, rock salt is mined from ancient mineral deposits untouched by modern industrial pollutants.'
      },
      {
        heading: 'Digestive & Metabolic Harmony During Fasting',
        text: 'Ayurveda categorizes Sendha Namak as "Sheet Veerya" (cooling in potency) and "Laghu" (light on digestion). During fasting, when one refrains from regular meals, standard acidic table salt can trigger heartburn and dehydration. Sendha Namak naturally alkalizes the stomach, stimulates Agni (digestive fire) gently, and prevents the nausea and dizziness commonly experienced during intense fasts.'
      },
      {
        heading: 'Electrolyte Balance for Active Fasting',
        text: 'Fasting leads to rapid water loss and mineral depletion. The synergistic minerals in Sendha Namak help intracellular fluid retention and muscle function. Paired with roasted peanuts and potassium-rich raw bananas in our Farali Chevda, it provides immediate cellular nourishment and prevents post-fast exhaustion.'
      }
    ],
    keyTakeaways: [
      'Rich in 84 natural trace minerals that nourish cell health',
      'Cooling digestive potency that eliminates acid reflux during fasts',
      'Maintains cellular electrolyte balance and prevents dehydration',
      'The only authentic salt sanctioned by Hindu Shastras for Upvas'
    ]
  },
  {
    id: 'raw-banana-vs-potato-chevdo',
    slug: 'raw-banana-kela-farali-chivda-vs-potato-aloo-chevdo',
    category: 'Culinary Comparison',
    readTime: '4 min read',
    title: 'Why Raw Banana (Kela) Farali Chivda is Superior to Traditional Potato (Aloo) Chevdo',
    summary:
      'Comparing raw banana batons with potato crisps: lower oil absorption, stable glycemic index, gut-friendly resistant starch, and longer lasting crunch.',
    publishDate: '2026-11-17',
    author: 'Chef Arvind Patel, Poicha Kitchen Master',
    content: [
      {
        heading: 'The Starch Dilemma: Simple vs Resistant Starch',
        text: 'While traditional potato (Aloo) chevdo is popular, potatoes are composed of high-glycemic rapidly digestible starches. Eating fried potato crisps during a fast often spikes blood sugar quickly, followed by an abrupt sugar crash that triggers hunger pangs. In contrast, green raw bananas are loaded with resistant starch, which behaves like dietary fiber. It is fermented slowly by beneficial gut bacteria, releasing steady, sustained energy over 4 to 6 hours.'
      },
      {
        heading: 'Significantly Lower Oil Absorption',
        text: 'Raw banana cell walls are dense and firm. When cut into slender batons and fried at controlled artisan temperatures, raw bananas create an immediate crispy outer barrier that prevents deep oil penetration. Tests demonstrate that banana batons absorb up to 25% less oil than thinly grated potatoes, resulting in a namkeen that feels light on the palate and leaves zero greasy residue on your fingers.'
      },
      {
        heading: 'Timeless Gujarati Flavor Harmony: Peanuts & Golden Raisins',
        text: 'The natural earthy flavor of raw banana provides the ideal canvas for Gujarat’s famous sweet-and-savory seasoning. In our Meetha variety, subtle crystalline sugar balances fiery Sendha Namak; in our Tikha variety, black pepper and roasted cumin create a bold, invigorating crunch. Plump golden raisins (kismis) and roasted peanuts complete the perfect textural symphony.'
      }
    ],
    keyTakeaways: [
      'High resistant starch provides sustained stamina without energy crashes',
      'Absorbs 25% less cooking oil than grated potato chips',
      'Retains crispness for 45+ days in high-barrier foil pouches',
      'Balanced with crunchy roasted peanuts and plump golden raisins'
    ]
  }
];

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

