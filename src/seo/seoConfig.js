/**
 * Centralized SEO Configuration for Farali Chevda website.
 * Domain: https://farali-chevda.megascale.co.in
 * Brand: Bhagvat Prasadam (Nilkanthdham Poicha, Gujarat, India)
 */

export const SEO_CONFIG = {
  domain: 'https://farali-chevda.megascale.co.in',
  siteName: 'Bhagvat Prasadam',
  siteTitleDefault: 'Authentic Gujarati Farali Chevda – Kela Chivda Online | Bhagvat Prasadam',
  siteDescriptionDefault:
    'Buy authentic Gujarati Kela Farali Chevda (Tikha & Meetha) online handcrafted by Bhagvat Prasadam in Nilkanthdham Poicha, Gujarat. 100% Satvik Upvas namkeen made with raw bananas, roasted peanuts, golden raisins, and Sendha Namak. Nationwide delivery.',
  ogImageDefault: 'https://farali-chevda.megascale.co.in/images/tikha1.webp',
  locale: 'en_IN',
  twitterHandle: '@bhagvatprasadam',

  business: {
    name: 'Bhagvat Prasadam',
    url: 'https://farali-chevda.megascale.co.in/',
    telephone: '+918850011652',
    email: 'bprasadam@sgrs.org',
    addressLocality: 'Poicha',
    addressRegion: 'Gujarat',
    postalCode: '393145',
    addressCountry: 'IN',
    streetAddress: 'At Nilkanthdham, Poicha, Rajpipla Road',
    geo: {
      latitude: 21.8497,
      longitude: 73.4975
    }
  },

  products: {
    tikha: {
      key: 'tikha',
      title: 'Kela Farali Chivda Tikha – Spicy Gujarati Fasting Namkeen | Bhagvat Prasadam',
      metaDescription:
        'Order spicy Kela Farali Chivda Tikha online. Handcrafted raw banana batons, crunchy roasted peanuts, and golden raisins seasoned with pure Sendha Namak and red chili. 100% Satvik fasting snack.',
      canonical: 'https://farali-chevda.megascale.co.in/?flavor=tikha',
      sku: 'BP-FARALI-TIKHA',
      ratingValue: '4.50',
      reviewCount: 50, // Verified from live product screenshot
      hasAggregateRating: true
    },
    meetha: {
      key: 'meetha',
      title: 'Kela Farali Chivda Meetha – Sweet & Savory Fasting Namkeen | Bhagvat Prasadam',
      metaDescription:
        'Order authentic Kela Farali Chivda Meetha online. Sweet and savory raw banana batons tossed with peanuts, raisins, Sendha Namak, and pure cane sugar crystals. 100% Satvik.',
      canonical: 'https://farali-chevda.megascale.co.in/?flavor=meetha',
      sku: 'BP-FARALI-MEETHA',
      ratingValue: null,
      reviewCount: null,
      hasAggregateRating: false // Omitted because unverified in API data to prevent Schema penalties
    }
  }
};

export default SEO_CONFIG;
