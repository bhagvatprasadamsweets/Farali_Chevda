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
      const headerOffset = 115;
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

        {/* Footer Mobile App Promotion Bar (Matching Exact Footer Background) */}
        <div className="w-full border-t border-[#E8DCC8] bg-[#FFF8E9] py-1.5 sm:py-2 px-3 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 sm:gap-2.5 text-center">
            {/* Desktop Typography */}
            <span className="hidden sm:inline text-xs font-semibold text-[#3B2418]">
              Install <strong className="font-bold text-[#3B2418]">Bhagvat Prasadam</strong> App &amp; Get{' '}
              <span className="font-bold text-[#B83220]">2% Extra Discount</span> on App!
            </span>
            <span className="hidden sm:inline text-xs font-medium text-[#7A5F4F]">
              Available on:
            </span>

            {/* Mobile Typography (Compact so both buttons fit on 1 single line on 360px screens) */}
            <span className="sm:hidden text-[11px] font-semibold text-[#3B2418]">
              Install App &amp; Get <span className="font-bold text-[#B83220]">2% Off:</span>
            </span>

            {/* Play Store & App Store Pill Badges */}
            <div className="inline-flex items-center gap-1 sm:gap-1.5 shrink-0">
              <a
                href="https://play.google.com/store/apps/details?id=in.sellonapp.bhagvatprasadam&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on Google Play Store (opens in new tab)"
                className="bg-black hover:bg-neutral-800 text-white rounded-full inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-semibold shadow-xs transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186A2.296 2.296 0 0 1 3 20.575V3.425c0-.623.226-1.196.609-1.611z" fill="#00E676" />
                  <path d="M17.207 8.586L5.05 1.57A2.28 2.28 0 0 0 3.61 1.814l10.184 10.185 3.413-3.413z" fill="#FFD600" />
                  <path d="M3.61 22.186c.427.351.983.473 1.44.244l12.157-7.016-3.414-3.414L3.61 22.186z" fill="#FF3D00" />
                  <path d="M21.577 11.127l-4.37-2.541-3.414 3.414 3.414 3.414 4.37-2.541a1.004 1.004 0 0 0 0-1.746z" fill="#00B0FF" />
                </svg>
                <span>Play Store</span>
              </a>

              <a
                href="https://apps.apple.com/in/app/bhagvat-prasadam/id6751397354"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on Apple App Store (opens in new tab)"
                className="bg-black hover:bg-neutral-800 text-white rounded-full inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-semibold shadow-xs transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current shrink-0" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.59-7.7-11.72-13.97-6.3-9.5-11.11-20.4-14.42-32.69-3.32-12.28-4.97-23.77-4.97-34.46 0-15.01 3.8-27.42 11.41-37.22 7.61-9.79 17.06-14.78 28.36-14.97 4.58 0 9.8 1.15 15.66 3.44 5.86 2.3 9.79 3.52 11.79 3.67 1.63 0 5.73-1.32 12.31-3.95 6.58-2.63 12.1-3.79 16.57-3.48 12.28.98 22.19 5.48 29.74 13.51-10.76 6.52-16.03 15.54-15.82 27.05.22 8.91 3.59 16.41 10.11 22.5 6.53 6.09 14.13 9.78 22.82 11.09-2.07 6.3-4.57 12.72-7.51 19.27zM119.22 33.15c0-7.39 2.66-14.34 7.99-20.86 5.33-6.52 11.96-10.65 19.89-12.29.22 1.3.33 2.45.33 3.44 0 7.39-2.82 14.4-8.47 21.03-5.65 6.63-12.39 10.6-20.21 11.89-.11-1.08-.16-2.16-.16-3.21z" />
                </svg>
                <span>App Store</span>
              </a>
            </div>
          </div>
        </div>

        {/* Separate Clean Bottom Copyright Strip with Thin Light-Gold Top Border */}
        <div className="w-full border-t border-[#E8DCC8]/80 bg-[#FFF8E9] py-3 sm:py-3.5 px-4 sm:px-6 lg:px-8 relative z-10">
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
