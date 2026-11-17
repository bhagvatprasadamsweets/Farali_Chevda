import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, ExternalLink, ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import { useFaraliProduct } from '../context/FaraliProductContext';
import logo from '../assets/images/Logo.png';
import footerBanner from '../assets/images/farali2productsfooter.png';

export default function Footer() {
  const { products, keys } = useFaraliProduct();

  // Mobile Dropdown states: Collapsed by default on mobile to save vertical space
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  const [helpdeskOpen, setHelpdeskOpen] = useState(false);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      const headerOffset = 75;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <footer className="w-full bg-[#FFF8E9] text-[#3B2418] pt-8 sm:pt-12 pb-0 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Symmetrical Balanced 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-6 sm:pb-8 text-left">
            
            {/* Column 1: Brand Info */}
            <div className="space-y-3.5">
              <div>
                <a
                  href="#hero"
                  onClick={(e) => scrollTo(e, 'hero')}
                  className="inline-flex items-center group cursor-pointer focus:outline-none"
                  title="Bhagvat Prasadam Farali Chivda Collection"
                >
                  <img
                    src={logo}
                    alt="Bhagvat Prasadam Official Logo - Authentic Satvik Gujarati Farali Chivda & Namkeen"
                    className="h-14 sm:h-16 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-[#7A5F4F] leading-relaxed">
                Bhagvat Prasadam brings the sacred culinary heritage of authentic Gujarati Farali Chivda (Kela Farali Chivda Tikha &amp; Meetha) and Nilkanthdham Poicha farsan-making into devotional homes across India.
              </p>

              <p className="text-xs sm:text-sm font-bold text-[#A8681E] font-display tracking-wide">
                100% Upvas Friendly • Sendha Namak • Zero Palm Oil
              </p>
            </div>

            {/* Column 2: 2 Farali Products */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-sm tracking-wide text-[#9C6219]">
                Our Farali Collection
              </h4>
              <ul className="space-y-2 text-xs text-[#5A3B2B] font-medium">
                {keys.map((k) => (
                  <li key={k}>
                    <a
                      href={products[k].buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#F28C28] transition-colors flex items-center justify-between group"
                    >
                      <span className="font-bold">{products[k].title} ({products[k].titleGujarati})</span>
                      <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <a
                  href="https://www.bhagvatprasadam.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-bold text-xs shadow-sm hover:shadow-md transition-all group"
                  title="Visit Bhagvat Prasadam Official Online Store"
                >
                  <span>Visit Official Store</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              {/* Laptop & PC (lg+): Clean Static Column (No Dropdown) */}
              <div className="hidden lg:block space-y-3">
                <h4 className="font-display font-bold text-sm tracking-wide text-[#9C6219]">
                  Quick Links
                </h4>
                <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-[#5A3B2B] font-medium pt-1">
                  <li>
                    <a href="#hero" onClick={(e) => scrollTo(e, 'hero')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#details" onClick={(e) => scrollTo(e, 'details')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                      Details
                    </a>
                  </li>
                  <li>
                    <a href="#story" onClick={(e) => scrollTo(e, 'story')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="#how-to-enjoy" onClick={(e) => scrollTo(e, 'how-to-enjoy')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                      How to Enjoy
                    </a>
                  </li>
                  <li>
                    <a href="#vrat-guides" onClick={(e) => scrollTo(e, 'vrat-guides')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                      Vrat Guides
                    </a>
                  </li>
                  <li>
                    <a href="#why-us" onClick={(e) => scrollTo(e, 'why-us')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                      Why Farali
                    </a>
                  </li>
                  <li>
                    <a href="#faq" onClick={(e) => scrollTo(e, 'faq')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#product-showcase" onClick={(e) => scrollTo(e, 'product-showcase')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                      Showcase
                    </a>
                  </li>
                  <li>
                    <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Mobile (<lg): Collapsible Dropdown Accordion */}
              <div className="lg:hidden rounded-2xl border border-[#E8DCC8]/80 bg-white/60 p-3 transition-colors">
                <button
                  type="button"
                  onClick={() => setQuickLinksOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                  aria-expanded={quickLinksOpen}
                  title="Toggle Quick Links"
                >
                  <h4 className="font-display font-bold text-sm tracking-wide text-[#9C6219] group-hover:text-[#F28C28] transition-colors flex items-center gap-2">
                    <span>Quick Links</span>
                  </h4>
                  <span className="p-1 rounded-lg bg-[#E8DCC8]/50 group-hover:bg-[#E5A323]/25 transition-colors">
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-[#9C6219] group-hover:text-[#F28C28] transition-transform duration-300 ${
                        quickLinksOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {quickLinksOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-[#5A3B2B] font-medium pt-3">
                        <li>
                          <a href="#hero" onClick={(e) => scrollTo(e, 'hero')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="#details" onClick={(e) => scrollTo(e, 'details')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                            Details
                          </a>
                        </li>
                        <li>
                          <a href="#story" onClick={(e) => scrollTo(e, 'story')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                            Our Story
                          </a>
                        </li>
                        <li>
                          <a href="#how-to-enjoy" onClick={(e) => scrollTo(e, 'how-to-enjoy')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                            How to Enjoy
                          </a>
                        </li>
                        <li>
                          <a href="#vrat-guides" onClick={(e) => scrollTo(e, 'vrat-guides')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                            Vrat Guides
                          </a>
                        </li>
                        <li>
                          <a href="#why-us" onClick={(e) => scrollTo(e, 'why-us')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                            Why Farali
                          </a>
                        </li>
                        <li>
                          <a href="#faq" onClick={(e) => scrollTo(e, 'faq')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                            FAQ
                          </a>
                        </li>
                        <li>
                          <a href="#product-showcase" onClick={(e) => scrollTo(e, 'product-showcase')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                            Showcase
                          </a>
                        </li>
                        <li>
                          <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Column 4: Contact Info / Helpdesk */}
            <div>
              {/* Laptop & PC (lg+): Clean Static Column (No Dropdown) */}
              <div className="hidden lg:block space-y-3">
                <h4 className="font-display font-bold text-sm tracking-wide text-[#9C6219]">
                  Poicha Helpdesk
                </h4>
                <div className="space-y-2.5 text-xs text-[#5A3B2B] pt-1">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#A8681E] shrink-0" />
                    <a href="tel:+918850011652" className="hover:text-[#F28C28] transition-colors font-medium">
                      +91 88500 11652
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#A8681E] shrink-0" />
                    <a href="mailto:bprasadam@sgrs.org" className="hover:text-[#F28C28] transition-colors">
                      bprasadam@sgrs.org
                    </a>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#A8681E] shrink-0 mt-0.5" />
                    <span>
                      At Nilkanthdham, Poicha, Rajpipla Road, Dist. Narmada, Gujarat 393145, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile (<lg): Collapsible Dropdown Accordion */}
              <div className="lg:hidden rounded-2xl border border-[#E8DCC8]/80 bg-white/60 p-3 transition-colors">
                <button
                  type="button"
                  onClick={() => setHelpdeskOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                  aria-expanded={helpdeskOpen}
                  title="Toggle Poicha Helpdesk"
                >
                  <h4 className="font-display font-bold text-sm tracking-wide text-[#9C6219] group-hover:text-[#F28C28] transition-colors flex items-center gap-2">
                    <span>Poicha Helpdesk</span>
                  </h4>
                  <span className="p-1 rounded-lg bg-[#E8DCC8]/50 group-hover:bg-[#E5A323]/25 transition-colors">
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-[#9C6219] group-hover:text-[#F28C28] transition-transform duration-300 ${
                        helpdeskOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {helpdeskOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-2.5 text-xs text-[#5A3B2B] pt-3">
                        <div className="flex items-center gap-2.5">
                          <Phone className="w-4 h-4 text-[#A8681E] shrink-0" />
                          <a href="tel:+918850011652" className="hover:text-[#F28C28] transition-colors font-medium">
                            +91 88500 11652
                          </a>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Mail className="w-4 h-4 text-[#A8681E] shrink-0" />
                          <a href="mailto:bprasadam@sgrs.org" className="hover:text-[#F28C28] transition-colors">
                            bprasadam@sgrs.org
                          </a>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <MapPin className="w-4 h-4 text-[#A8681E] shrink-0 mt-0.5" />
                          <span>
                            At Nilkanthdham, Poicha, Rajpipla Road, Dist. Narmada, Gujarat 393145, India
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>

        {/* Full-Screen Edge-to-Edge 2-Product Heritage Illustration Banner */}
        <div className="w-full bg-[#FFF8E9] overflow-hidden leading-none select-none pointer-events-none mt-4 sm:mt-6">
          <img
            src={footerBanner}
            alt="Bhagvat Prasadam Authentic Kela Farali Chivda Collection Banner - Tikha Chevdo & Mitho Chevdo Upvas Namkeen"
            className="w-full h-auto block select-none pointer-events-none opacity-95 hover:opacity-100 transition-opacity duration-300"
            loading="lazy"
          />
        </div>

        {/* Separate Clean Bottom Copyright Strip with Thin Light-Gold Top Border */}
        <div className="w-full border-t border-[#E8DCC8]/80 bg-[#FFF8E9] py-4 sm:py-5 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto flex items-center justify-center text-center">
            <p className="text-xs sm:text-sm text-[#7A5F4F] font-normal tracking-wide">
              © 2026 <strong className="text-[#3B2418] font-bold">bhagvatprasad</strong>. All Rights Reserved. Powered by <a href="https://megascale.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#F28C28] transition-colors font-medium">Megascale</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Real Floating WhatsApp Contact Widget (Bottom-Right) */}
      <a
        href="https://wa.me/918850011652?text=Hello%20Bhagvat%20Prasadam,%20I%20would%20like%20to%20inquire%20about%20Kela%20Farali%20Chivda"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.5)] hover:shadow-[0_14px_35px_rgba(37,211,102,0.7)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ring-4 ring-white/90 group"
        title="Chat with us on WhatsApp (+91 88500 11652)"
      >
        {/* Animated Green Online Status Ping */}
        <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#128C7E] border-2 border-white"></span>
        </span>

        {/* WhatsApp Official Icon */}
        <WhatsAppIcon className="w-8 h-8 sm:w-9 sm:h-9 fill-white" />

        {/* Desktop Hover Label */}
        <span className="hidden sm:group-hover:inline-block absolute right-full mr-3.5 px-3 py-1.5 rounded-xl bg-[#3B2418] text-white text-xs font-bold whitespace-nowrap shadow-xl pointer-events-none transition-all">
          Chat on WhatsApp
        </span>
      </a>
    </>
  );
}
