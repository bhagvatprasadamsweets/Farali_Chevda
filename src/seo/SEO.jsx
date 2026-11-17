import { useEffect } from 'react';
import { useFaraliProduct } from '../context/FaraliProductContext';
import { SEO_CONFIG } from './seoConfig';
import { generateCanonical } from '../utils/generateCanonical';

/**
 * Helper to update or insert a <meta> element in document.head
 */
function setMetaTag(selector, attrName, attrValue, content) {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

/**
 * Helper to update or insert a <link rel="..."> element in document.head
 */
function setLinkTag(rel, href) {
  let link = document.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

/**
 * Dynamic SEO Component for Farali Chevda website.
 * Keeps page titles, meta descriptions, canonical URLs, Open Graph,
 * and Twitter Card metadata synchronized with user flavor selection.
 * Also cleans obsolete meta keywords and dispatches GA4/GTM view events.
 */
export default function SEO() {
  const { activeFaraliKey, activeProduct } = useFaraliProduct();

  useEffect(() => {
    // 1. Remove obsolete meta keywords tag per Phase 3 requirements
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) {
      keywordsMeta.remove();
    }

    // 2. Select SEO metadata based on active product flavor
    const productSeo = SEO_CONFIG.products[activeFaraliKey];
    const pageTitle = productSeo ? productSeo.title : SEO_CONFIG.siteTitleDefault;
    const metaDescription = productSeo ? productSeo.metaDescription : SEO_CONFIG.siteDescriptionDefault;
    const canonicalUrl = generateCanonical('/', { flavor: activeFaraliKey });

    // 3. Update Title & Primary Meta Description
    document.title = pageTitle;
    setMetaTag('meta[name="description"]', 'name', 'description', metaDescription);
    setMetaTag('meta[name="title"]', 'name', 'title', pageTitle);

    // 4. Update Canonical Link
    setLinkTag('canonical', canonicalUrl);

    // 5. Update Open Graph Meta Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', pageTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', metaDescription);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', SEO_CONFIG.siteName);
    setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', SEO_CONFIG.locale);

    // 6. Update Twitter Card Meta Tags
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', pageTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', metaDescription);

    // 7. Track Product / Flavor View via GA4 dataLayer (Avoids duplicate page_view)
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'view_item',
        ecommerce: {
          currency: 'INR',
          value: activeProduct?.variants?.[0]?.price || 425,
          items: [
            {
              item_id: activeProduct?.id || activeFaraliKey,
              item_name: activeProduct?.title || pageTitle,
              item_brand: SEO_CONFIG.siteName,
              item_category: 'Farali Namkeen',
              item_variant: activeProduct?.flavor,
              price: activeProduct?.variants?.[0]?.price || 425
            }
          ]
        }
      });
    }
  }, [activeFaraliKey, activeProduct]);

  return null;
}

