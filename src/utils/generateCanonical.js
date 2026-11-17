/**
 * Utility to generate normalized canonical URLs for Farali Chevda website.
 * Domain: https://farali-chevda.megascale.co.in
 */

const BASE_URL = 'https://farali-chevda.megascale.co.in';

/**
 * Generates an absolute, canonical URL adhering to technical SEO best practices.
 * - Enforces lowercase domain
 * - Removes unnecessary trailing slashes (except root)
 * - Keeps only authorized canonical query parameters (e.g. flavor)
 * - Excludes tracking query params (utm_*, gclid, fbclid, etc.)
 * 
 * @param {string} path - Optional pathname or hash
 * @param {Record<string, string|number>} [params] - Optional query parameters
 * @returns {string} Absolute canonical URL
 */
export function generateCanonical(path = '/', params = {}) {
  try {
    const cleanPath = path ? path.replace(/\/+$/, '') : '';
    const url = new URL(cleanPath ? `${BASE_URL}${cleanPath.startsWith('/') ? '' : '/'}${cleanPath}` : BASE_URL);

    // Whitelist only legitimate SEO query parameters
    const allowedParams = ['flavor'];
    Object.entries(params).forEach(([key, val]) => {
      if (allowedParams.includes(key) && val !== undefined && val !== null && val !== '') {
        url.searchParams.set(key, String(val).toLowerCase());
      }
    });

    // Clean root trailing slash convention
    let canonical = url.toString();
    if (canonical.endsWith('/') && canonical !== `${BASE_URL}/`) {
      canonical = canonical.slice(0, -1);
    }

    return canonical;
  } catch {
    return BASE_URL;
  }
}

export default generateCanonical;

