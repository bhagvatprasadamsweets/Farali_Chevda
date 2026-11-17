import { useEffect } from 'react';
import { useFaraliProduct } from '../context/FaraliProductContext';
import { SEO_CONFIG } from './seoConfig';
import { FASTING_GUIDES } from '../data/fastingGuides';

/**
 * Generates the complete Schema.org JSON-LD Graph for Farali Chevda website.
 * Complies strictly with Google Search Central guidelines:
 * - Real product data & verified prices (₹85 - ₹425)
 * - Tikha verified rating: 4.50 with 50 reviews (from live screenshot)
 * - Meetha unverified rating omitted to prevent Schema penalties
 * - Offer URLs anchored to https://farali-chevda.megascale.co.in
 * - Real editorial organization author for articles
 */
function buildSchemaGraph(activeFaraliKey) {
  const domain = SEO_CONFIG.domain;

  const websiteSchema = {
    '@type': 'WebSite',
    '@id': `${domain}/#website`,
    url: `${domain}/`,
    name: 'Authentic Gujarati Farali Chevda | Bhagvat Prasadam',
    alternateName: [
      'Farali Chevda Online',
      'Kela Farali Chivda',
      'Gujarati Farali Snacks',
      'Satvik Upvas Namkeen Poicha'
    ],
    description: SEO_CONFIG.siteDescriptionDefault,
    inLanguage: SEO_CONFIG.locale,
    publisher: {
      '@id': `${domain}/#organization`
    }
  };

  const organizationSchema = {
    '@type': ['Organization', 'Store'],
    '@id': `${domain}/#organization`,
    name: SEO_CONFIG.business.name,
    url: SEO_CONFIG.business.url,
    logo: {
      '@type': 'ImageObject',
      url: `${domain}/images/Logo.png`,
      width: 512,
      height: 512,
      caption: 'Bhagvat Prasadam Farali Chevda Authentic Emblem'
    },
    telephone: SEO_CONFIG.business.telephone,
    email: SEO_CONFIG.business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SEO_CONFIG.business.streetAddress,
      addressLocality: SEO_CONFIG.business.addressLocality,
      addressRegion: SEO_CONFIG.business.addressRegion,
      postalCode: SEO_CONFIG.business.postalCode,
      addressCountry: SEO_CONFIG.business.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SEO_CONFIG.business.geo.latitude,
      longitude: SEO_CONFIG.business.geo.longitude
    },
    priceRange: '₹85 to ₹425',
    currenciesAccepted: 'INR',
    paymentAccepted: 'UPI, Credit Card, Debit Card, Net Banking, Cash on Delivery',
    sameAs: [
      'https://www.bhagvatprasadam.com/',
      'https://www.bhagvatprasadam.com/products/kela-farali-chivda-tikha-spicy-banana-namkeen-snack',
      'https://www.bhagvatprasadam.com/products/kela-farali-chivda-meetha-sweet-gujarati-namkeen-snack'
    ]
  };

  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    '@id': `${domain}/#breadcrumbs`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${domain}/`
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Gujarati Farali Snacks',
        item: `${domain}/#product-showcase`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: activeFaraliKey === 'meetha' ? 'Kela Farali Chivda Meetha' : 'Kela Farali Chivda Tikha',
        item: `${domain}/?flavor=${activeFaraliKey}`
      }
    ]
  };

  const tikhaProductSchema = {
    '@type': 'Product',
    '@id': `${domain}/#product-tikha`,
    name: 'Kela Farali Chivda Tikha (Spicy Banana Farali Chevdo)',
    alternateName: [
      'Farali Chevda Tikha',
      'Spicy Banana Namkeen Farali Chivda',
      'તીખો કેળા ફરાળી ચેવડો',
      'केला फराली चिवड़ा तीखा'
    ],
    image: [
      `${domain}/images/tikha1.webp`,
      `${domain}/images/tikha2.webp`,
      `${domain}/images/tikha3.webp`,
      `${domain}/images/tikha4.webp`
    ],
    description:
      'Authentic spicy Gujarati fasting snack handcrafted from crisp raw banana batons, crunchy roasted peanuts, golden raisins, and pure Sendha Namak (rock salt). 100% Upvas and Ekadashi friendly.',
    sku: 'BP-FARALI-TIKHA',
    mpn: '8609258963093',
    category: 'Food > Snacks > Namkeen > Farali Chivda',
    brand: {
      '@type': 'Brand',
      name: SEO_CONFIG.siteName
    },
    // Genuine aggregate rating verified from live product screenshot: 4.50 rating from 50 reviews
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.50',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1'
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '85.00',
      highPrice: '425.00',
      offerCount: '4',
      offers: [
        {
          '@type': 'Offer',
          name: '1kg Festive Mega Pack',
          url: `${domain}/?flavor=tikha#variants`,
          price: '425.00',
          priceCurrency: 'INR',
          priceValidUntil: '2027-12-31',
          itemCondition: 'https://schema.org/NewCondition',
          availability: 'https://schema.org/InStock',
          sku: 'Tikho Banana Farali Chevdo 1000 GM.',
          seller: {
            '@type': 'Organization',
            name: SEO_CONFIG.siteName
          }
        },
        {
          '@type': 'Offer',
          name: '800gm Family Value Pack',
          url: `${domain}/?flavor=tikha#variants`,
          price: '340.00',
          priceCurrency: 'INR',
          priceValidUntil: '2027-12-31',
          itemCondition: 'https://schema.org/NewCondition',
          availability: 'https://schema.org/InStock',
          sku: 'Tikho Banana Farali Chevdo 800 GM.',
          seller: {
            '@type': 'Organization',
            name: SEO_CONFIG.siteName
          }
        },
        {
          '@type': 'Offer',
          name: '400gm Most Popular Pouch',
          url: `${domain}/?flavor=tikha#variants`,
          price: '170.00',
          priceCurrency: 'INR',
          priceValidUntil: '2027-12-31',
          itemCondition: 'https://schema.org/NewCondition',
          availability: 'https://schema.org/InStock',
          sku: 'Tikho Banana Farali Chevdo 400 GM.',
          seller: {
            '@type': 'Organization',
            name: SEO_CONFIG.siteName
          }
        },
        {
          '@type': 'Offer',
          name: '200gm Trial Pack',
          url: `${domain}/?flavor=tikha#variants`,
          price: '85.00',
          priceCurrency: 'INR',
          priceValidUntil: '2027-12-31',
          itemCondition: 'https://schema.org/NewCondition',
          availability: 'https://schema.org/InStock',
          sku: 'Tikho Banana Farali Chevdo 200 GM.',
          seller: {
            '@type': 'Organization',
            name: SEO_CONFIG.siteName
          }
        }
      ]
    }
  };

  const meethaProductSchema = {
    '@type': 'Product',
    '@id': `${domain}/#product-meetha`,
    name: 'Kela Farali Chivda Meetha (Sweet & Savory Banana Farali Chevdo)',
    alternateName: [
      'Farali Chevda Meetha',
      'Sweet Banana Namkeen Farali Chivda',
      'મીઠો કેળા ફરાળી ચેવડો',
      'केला फराली चिवड़ा मीठा'
    ],
    image: [
      `${domain}/images/meetha1.webp`,
      `${domain}/images/meetha2.webp`,
      `${domain}/images/meetha3.webp`,
      `${domain}/images/meetha4.webp`
    ],
    description:
      'Authentic sweet-and-savory Gujarati fasting snack handcrafted with crisp raw banana sticks, roasted peanuts, golden raisins, pure Sendha Namak, and subtle crystalline cane sugar sweetness. 100% Upvas friendly.',
    sku: 'BP-FARALI-MEETHA',
    mpn: '8609259323541',
    category: 'Food > Snacks > Namkeen > Farali Chivda',
    brand: {
      '@type': 'Brand',
      name: SEO_CONFIG.siteName
    },
    // Note: aggregateRating omitted intentionally as Meetha reviews are not verified in API, complying with Google rich results guidelines
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '85.00',
      highPrice: '425.00',
      offerCount: '4',
      offers: [
        {
          '@type': 'Offer',
          name: '1kg Festive Mega Pack',
          url: `${domain}/?flavor=meetha#variants`,
          price: '425.00',
          priceCurrency: 'INR',
          priceValidUntil: '2027-12-31',
          itemCondition: 'https://schema.org/NewCondition',
          availability: 'https://schema.org/InStock',
          sku: 'Mitho Banana Farali Chevdo 1000 GM.',
          seller: {
            '@type': 'Organization',
            name: SEO_CONFIG.siteName
          }
        },
        {
          '@type': 'Offer',
          name: '800gm Family Value Pack',
          url: `${domain}/?flavor=meetha#variants`,
          price: '340.00',
          priceCurrency: 'INR',
          priceValidUntil: '2027-12-31',
          itemCondition: 'https://schema.org/NewCondition',
          availability: 'https://schema.org/InStock',
          sku: 'Mitho Banana Farali Chevdo 800 GM.',
          seller: {
            '@type': 'Organization',
            name: SEO_CONFIG.siteName
          }
        },
        {
          '@type': 'Offer',
          name: '400gm Most Popular Pouch',
          url: `${domain}/?flavor=meetha#variants`,
          price: '170.00',
          priceCurrency: 'INR',
          priceValidUntil: '2027-12-31',
          itemCondition: 'https://schema.org/NewCondition',
          availability: 'https://schema.org/InStock',
          sku: 'Mitho Banana Farali Chevdo 400 GM.',
          seller: {
            '@type': 'Organization',
            name: SEO_CONFIG.siteName
          }
        },
        {
          '@type': 'Offer',
          name: '200gm Trial Pack',
          url: `${domain}/?flavor=meetha#variants`,
          price: '85.00',
          priceCurrency: 'INR',
          priceValidUntil: '2027-12-31',
          itemCondition: 'https://schema.org/NewCondition',
          availability: 'https://schema.org/InStock',
          sku: 'Mitho Banana Farali Chevdo 200 GM.',
          seller: {
            '@type': 'Organization',
            name: SEO_CONFIG.siteName
          }
        }
      ]
    }
  };

  const itemListSchema = {
    '@type': 'ItemList',
    '@id': `${domain}/#collection`,
    name: 'Bhagvat Prasadam Authentic Farali Chevda Duo Collection',
    description: 'Featured 100% Satvik Upvas Farali Namkeen handcrafted in Nilkanthdham Poicha, Gujarat.',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        url: `${domain}/#product-tikha`,
        name: 'Kela Farali Chivda Tikha'
      },
      {
        '@type': 'ListItem',
        position: 2,
        url: `${domain}/#product-meetha`,
        name: 'Kela Farali Chivda Meetha'
      }
    ]
  };

  const faqSchema = {
    '@type': 'FAQPage',
    '@id': `${domain}/#faq`,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Kela Farali Chivda and what is the difference between Tikha and Meetha?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kela Farali Chivda is an authentic Gujarati fasting (upvas) namkeen handcrafted from crisp raw banana batons, crunchy roasted peanuts, and golden raisins. The Tikha variety is boldly seasoned with Sendha Namak (rock salt), red chili, black pepper, and roasted cumin for a fiery, savory crunch. The Meetha variety is delicately seasoned with pure crystalline cane sugar and Sendha Namak for a timeless Gujarati sweet-and-savory crunch with sweet plump raisins.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is Bhagvat Prasadam Kela Farali Chivda suitable for Ekadashi and Navratri fasting (Upvas)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, 100%! It is crafted strictly adhering to sacred Satvik fasting guidelines. We use 100% pure Sendha Namak (Sindhav rock salt) instead of regular table salt, and absolutely no grain flours (zero besan, zero wheat, zero cornflour), zero onion, and zero garlic. It is 100% pure vegetarian, Satvik, and ideal for Ekadashi, Navratri, Shravan, Mahashivratri, and Janmashtami vrat.'
        }
      },
      {
        '@type': 'Question',
        name: 'What pack sizes and prices are available for both products?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Both Tikha and Meetha varieties are available in 4 convenient packaging sizes: 1kg Festive Mega Pack at ₹425 (MRP ₹550, 23% savings), 800gm Family Value Pack at ₹340 (MRP ₹440), 400gm Most Popular Pouch at ₹170 (MRP ₹221), and 200gm Trial Pack at ₹85 (MRP ₹110). The 1kg pack provides the best value for families and celebrations.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the shelf life and how should it be stored?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our Kela Farali Chivda has a verified 45-day shelf life from the date of packing. Each pouch is made of heavy food-grade multi-layer barrier foil with a resealable zipper. Store in a cool, dry place away from direct sunlight, and simply press the zipper firmly shut after opening to maintain peak crispness.'
        }
      },
      {
        '@type': 'Question',
        name: 'What cooking oil is used to fry the banana sticks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We slow-fry our raw banana sticks in pure refined sunflower oil. We never use palm oil, cottonseed oil, or vanaspati dalda. This ensures the chivda remains light on the stomach, non-greasy, and pleasantly aromatic.'
        }
      },
      {
        '@type': 'Question',
        name: 'How fast is nationwide delivery across India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Orders are freshly packed and dispatched within 24 hours from Gujarat. Express courier partners deliver across major Indian cities and nationwide within 2 to 4 business days in protective, tamper-evident packaging.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I order in bulk for festivals, temples, or corporate gifting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We regularly fulfill bulk orders for temple prasad, corporate festive hampers, Diwali gifts, and community fasts. You can select higher quantities directly on our official store or contact our dedicated Gujarat support desk for customized orders.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the difference between Farali Chevda and Farali Chivda?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Farali Chevda (ફરાળી ચેવડો) is the authentic regional Gujarati and Kathiyawadi spelling, whereas Farali Chivda is commonly used across Maharashtra and northern India. Both terms describe the exact same revered Satvik fasting namkeen made from crisp raw banana batons, roasted peanuts, golden raisins, and pure Sendha Namak.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is Bhagvat Prasadam Kela Farali Chevda 100% gluten-free and grain-free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, 100%! Our Kela Farali Chevda contains zero wheat, zero besan (chickpea flour), zero maida, zero corn starch, and zero cereal grains. Handcrafted exclusively with raw green bananas, peanuts, raisins, and Sindhav rock salt in dedicated Satvik lines, it is naturally gluten-free, grain-free, onion-free, and garlic-free.'
        }
      },
      {
        '@type': 'Question',
        name: 'How can I buy Farali Chevda online with direct doorstep delivery across India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can choose between fiery Tikha (Spicy) or balanced Meetha (Sweet & Savory) and pick your preferred packaging size (200g, 400g, 800g, 1kg) directly on this website. Orders are fulfilled securely via Bhagvat Prasadam with 24-hour dispatch and express door delivery in 2 to 4 business days across India.'
        }
      }
    ]
  };

  const articleSchemas = FASTING_GUIDES.map((guide) => ({
    '@type': 'Article',
    '@id': `${domain}/#article-${guide.id}`,
    headline: guide.title,
    description: guide.summary,
    author: {
      '@type': 'Organization',
      name: guide.author
    },
    publisher: {
      '@type': 'Organization',
      name: SEO_CONFIG.siteName
    },
    datePublished: guide.publishDate,
    dateModified: guide.publishDate,
    mainEntityOfPage: `${domain}/#vrat-guides`
  }));

  return {
    '@context': 'https://schema.org',
    '@graph': [
      websiteSchema,
      organizationSchema,
      breadcrumbSchema,
      tikhaProductSchema,
      meethaProductSchema,
      itemListSchema,
      faqSchema,
      ...articleSchemas
    ]
  };
}

export default function JsonLd() {
  const { activeFaraliKey } = useFaraliProduct();

  useEffect(() => {
    const graphData = buildSchemaGraph(activeFaraliKey);
    let scriptTag = document.getElementById('dynamic-jsonld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'dynamic-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(graphData);
  }, [activeFaraliKey]);

  return null;
}
