import { businesses } from "../data/businesses.js";

/**
 * Get all sample businesses
 */
export function getAllBusinesses() {
  return businesses;
}

/**
 * Get a single business by its unique slug
 * @param {string} slug
 */
export function getBusinessBySlug(slug) {
  if (!slug) return null;
  const normalizedSlug = String(slug).toLowerCase().trim();
  return businesses.find((b) => b.slug.toLowerCase() === normalizedSlug) || null;
}

/**
 * Get all businesses under a specific category slug
 * @param {string} categorySlug
 */
export function getBusinessesByCategory(categorySlug) {
  if (!categorySlug) return [];
  const normalizedCategory = String(categorySlug).toLowerCase().trim();
  return businesses.filter(
    (b) =>
      b.categorySlug.toLowerCase() === normalizedCategory ||
      b.category.toLowerCase().replace(/[^a-z0-9]+/g, "-") === normalizedCategory
  );
}

/**
 * Search businesses by text query and optional city filter
 * Supports searching by:
 * - Business name
 * - Category & categorySlug
 * - City (supports "All India" for pan-India search)
 * - Service keywords & description
 * - Address
 * @param {string} query
 * @param {string} city
 */
export function searchBusinesses(query = "", city = "") {
  const cleanQuery = typeof query === "string" ? query.trim().toLowerCase() : "";
  const cleanCity = typeof city === "string" ? city.trim().toLowerCase() : "";

  // If city is "all india" or "all", treat as no city filter
  const effectiveCity = cleanCity === "all india" || cleanCity === "all" ? "" : cleanCity;

  return businesses.filter((b) => {
    // City filter
    const matchesCity = !effectiveCity || b.city.toLowerCase().includes(effectiveCity);
    if (!matchesCity) return false;

    // If no query string, only city filter applies
    if (!cleanQuery) return true;

    // Composite searchable string
    const searchableText = `${b.name} ${b.category} ${b.categorySlug} ${b.description} ${b.address} ${b.city}`.toLowerCase();

    // Direct substring match
    if (searchableText.includes(cleanQuery)) {
      return true;
    }

    // Multi-token match: every word in the query must be found in the searchable text
    const queryTokens = cleanQuery.split(/[\s,+/&]+/).filter(Boolean);
    if (queryTokens.length > 1) {
      return queryTokens.every((token) => searchableText.includes(token));
    }

    return false;
  });
}
