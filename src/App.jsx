import { FaraliProductProvider } from './context/FaraliProductContext';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BrandStory from './components/BrandStory';
import FaraliBanner from './components/FaraliBanner';
import ProductShowcase from './components/ProductShowcase';
import ProductBenefits from './components/ProductBenefits';
import ProductDetailsAccordion from './components/ProductDetailsAccordion';
import HowToEnjoy from './components/HowToEnjoy';
import FastingGuidesSection from './components/FastingGuidesSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <FaraliProductProvider>
      <div className="min-h-screen flex flex-col bg-[#FFF8E9] text-[#3B2418]">
        {/* 1. Announcement Bar with Target SEO Keywords */}
        <AnnouncementBar text="AUTHENTIC GUJARATI FARALI CHIVDA | KELA FARALI CHIVDA TIKHA & MEETHA | 100% SATVIK UPVAS SNACK | BHAGVAT PRASADAM" />

        {/* 2. Sticky Header & Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          {/* 3. Hero Section with 2-Product Switcher (Tikha & Meetha) */}
          <HeroSection />

          {/* 4. Brand Story Section ("The Sacred Heritage of Gujarat's Kela Farali Chivda") */}
          <BrandStory />

          {/* 5. Why Choose Bhagvat Prasadam Kela Farali Chivda? (4 Benefits Cards) */}
          <ProductBenefits />

          {/* 6. Farali Heritage Promotional Banner */}
          <FaraliBanner />

          {/* 7. Product Showcase Section (Interactive Gallery & Weight Packs) */}
          <ProductShowcase />

          {/* 8. Product Details Section (Facts, Specifications & Nutrition) */}
          <ProductDetailsAccordion />

          {/* 9. How to Enjoy Section (4 Lifestyle Culinary Rituals) */}
          <HowToEnjoy />

          {/* 10. Fasting Knowledge & Vrat Guides (Educational SEO Articles) */}
          <FastingGuidesSection />

          {/* 11. Frequently Asked Questions (FAQ Accordion) */}
          <FAQSection />

          {/* 11. Dedicated Contact Section */}
          <ContactSection />
        </main>

        {/* 13. Professional Footer */}
        <Footer />
      </div>
    </FaraliProductProvider>
  );
}
