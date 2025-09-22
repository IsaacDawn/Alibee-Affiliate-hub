// frontend/src/utils/searchEnhancer.ts
/**
 * Simple search enhancement utility
 * Enhances search queries with related terms for better results
 */

// Product-specific search enhancements
const SEARCH_ENHANCEMENTS: Record<string, string> = {
  // Clothing & Accessories
  'hat': 'hat cap baseball cap beanie winter hat summer hat',
  'cap': 'cap hat baseball cap trucker cap snapback',
  'shirt': 'shirt t-shirt polo shirt dress shirt casual shirt',
  'dress': 'dress women dress summer dress party dress casual dress',
  'shoes': 'shoes sneakers boots sandals heels running shoes',
  'bag': 'bag handbag backpack purse tote bag shoulder bag',
  'watch': 'watch smartwatch wristwatch digital watch analog watch',
  'glasses': 'glasses sunglasses eyeglasses spectacles reading glasses',
  'jewelry': 'jewelry necklace bracelet ring earrings pendant chain',
  
  // Electronics
  'phone': 'phone smartphone mobile phone cell phone android iphone',
  'laptop': 'laptop notebook computer macbook gaming laptop ultrabook',
  'headphones': 'headphones earphones earbuds wireless headphones bluetooth headphones',
  'camera': 'camera digital camera action camera webcam security camera',
  'tablet': 'tablet ipad android tablet surface tablet',
  'speaker': 'speaker bluetooth speaker wireless speaker portable speaker',
  'charger': 'charger phone charger wireless charger car charger power bank',
  
  // Home & Garden
  'lamp': 'lamp table lamp floor lamp LED lamp desk lamp lighting',
  'chair': 'chair office chair dining chair gaming chair ergonomic chair',
  'table': 'table dining table coffee table desk table side table furniture',
  'bed': 'bed mattress bed frame bedroom furniture',
  'sofa': 'sofa couch sectional sofa loveseat furniture',
  
  // Beauty & Health
  'makeup': 'makeup cosmetics lipstick foundation eyeshadow mascara beauty',
  'skincare': 'skincare face cream moisturizer serum anti-aging beauty',
  'perfume': 'perfume cologne fragrance body spray',
  'hair': 'hair care shampoo conditioner hair dryer hair straightener',
  
  // Sports & Fitness
  'gym': 'gym fitness equipment weights dumbbells exercise workout',
  'yoga': 'yoga mat yoga block yoga strap meditation fitness',
  'running': 'running shoes running gear marathon fitness',
  'bike': 'bicycle bike cycling gear helmet',
  
  // Toys & Games
  'toy': 'toy children toy educational toy plush toy kids toy game',
  'game': 'board game card game puzzle video game entertainment',
  'puzzle': 'puzzle jigsaw puzzle brain teaser',
  
  // Automotive
  'car': 'car accessories automotive parts car care',
  'phone holder': 'phone holder car mount phone mount',
  
  // Persian terms
  'کلاه': 'hat cap beanie',
  'تلفن': 'phone smartphone mobile',
  'لپ تاپ': 'laptop notebook computer',
  'ساعت': 'watch smartwatch clock',
  'هدفون': 'headphones earphones earbuds',
  'کفش': 'shoes sneakers boots',
  'کیف': 'bag handbag backpack',
  'لباس': 'clothing dress shirt',
  'کامپیوتر': 'computer laptop PC',
  'دوربین': 'camera webcam security camera'
};

/**
 * Enhance search query with synonyms and related terms
 */
export function enhanceSearchQuery(query: string): string {
  if (!query || query.trim().length === 0) {
    return query;
  }

  const normalizedQuery = query.toLowerCase().trim();
  
  // Don't enhance product ID searches (numeric strings with 10+ digits)
  if (normalizedQuery.match(/^\d{10,}$/)) {
    console.log(`🔍 Product ID search detected, no enhancement: "${query}"`);
    return query;
  }
  
  // Check for exact matches
  if (SEARCH_ENHANCEMENTS[normalizedQuery]) {
    console.log(`🔍 Enhanced search: "${query}" -> "${SEARCH_ENHANCEMENTS[normalizedQuery]}"`);
    return SEARCH_ENHANCEMENTS[normalizedQuery];
  }

  // Check for partial matches
  for (const [key, enhancement] of Object.entries(SEARCH_ENHANCEMENTS)) {
    if (normalizedQuery.includes(key) || key.includes(normalizedQuery)) {
      console.log(`🔍 Partial match enhanced: "${query}" -> "${enhancement}"`);
      return enhancement;
    }
  }

  // Return original query if no enhancement found
  return query;
}

/**
 * Get popular search terms for quick access
 */
export function getPopularSearchTerms(): string[] {
  return [
    'phone', 'laptop', 'watch', 'headphones', 'shoes', 'bag',
    'hat', 'shirt', 'dress', 'camera', 'makeup', 'skincare',
    'gym', 'yoga', 'toy', 'game', 'lamp', 'chair', 'table'
  ];
}

/**
 * Get search suggestions based on query
 */
export function getSearchSuggestions(query: string): string[] {
  if (!query || query.trim().length < 2) {
    return [];
  }

  const normalizedQuery = query.toLowerCase().trim();
  const suggestions: string[] = [];

  // Find matching enhancements
  for (const [key] of Object.entries(SEARCH_ENHANCEMENTS)) {
    if (key.includes(normalizedQuery) || normalizedQuery.includes(key)) {
      suggestions.push(key);
    }
  }

  return suggestions.slice(0, 5); // Limit to 5 suggestions
}
