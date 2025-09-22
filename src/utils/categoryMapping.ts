// AliExpress Category ID to Name Mapping (Real AliExpress Categories)
export const categoryMapping: Record<string, string> = {
  // Electronics & Technology
  "44": "Cell Phones & Telecommunications",
  "1501": "Phones & Telecommunications", 
  "1420": "Computer & Office",
  "1511": "Consumer Electronics",
  "3": "Electronics",
  "13": "Home Appliances",
  "1525": "Security & Protection",
  
  // Fashion & Beauty
  "15": "Women's Clothing",
  "1": "Men's Clothing",
  "1504": "Shoes",
  "1503": "Jewelry & Accessories",
  "1502": "Bags & Luggage",
  "1509": "Health & Beauty",
  
  // Home & Garden
  "1421": "Tools & Home Improvement",
  
  // Computer & Office (Laptops should be here)
  "7": "Computer & Office",
  
  // Sports & Outdoors
  "36": "Sports & Entertainment",
  
  // Automotive
  "1524": "Automobiles & Motorcycles",
  
  // Toys & Hobbies
  "21": "Toys & Hobbies",
  
  // Baby & Kids
  "66": "Mother & Kids",
  
  // Musical Instruments
  "1526": "Musical Instruments",
  
  // Default fallback
  "unknown": "Other"
};

/**
 * Get category name from category ID
 * @param categoryId - The category ID from AliExpress
 * @returns The human-readable category name
 */
export function getCategoryName(categoryId: string | number | null | undefined): string {
  if (!categoryId) {
    return "Unknown Category";
  }
  
  const id = String(categoryId);
  return categoryMapping[id] || `Category ${id}`;
}

/**
 * Get category emoji based on category name
 * @param categoryName - The category name
 * @returns Appropriate emoji for the category
 */
export function getCategoryEmoji(categoryName: string): string {
  const emojiMap: Record<string, string> = {
    // Electronics & Technology
    "Cell Phones & Telecommunications": "📱",
    "Phones & Telecommunications": "📱",
    "Computer & Office": "💻",
    "Consumer Electronics": "📺",
    "Electronics": "⚡",
    "Home Appliances": "🏠",
    "Security & Protection": "🔒",
    
    // Fashion & Beauty
    "Women's Clothing": "👗",
    "Men's Clothing": "👔",
    "Shoes": "👟",
    "Jewelry & Accessories": "💍",
    "Bags & Luggage": "👜",
    "Health & Beauty": "💄",
    
    // Home & Garden
    "Tools & Home Improvement": "🔨",
    
    // Computer & Office (duplicate removed)
    
    // Sports & Outdoors
    "Sports & Entertainment": "⚽",
    
    // Automotive
    "Automobiles & Motorcycles": "🚗",
    
    // Toys & Hobbies
    "Toys & Hobbies": "🧸",
    
    // Baby & Kids
    "Mother & Kids": "👶",
    
    // Musical Instruments
    "Musical Instruments": "🎸"
  };
  
  return emojiMap[categoryName] || "🏷️";
}