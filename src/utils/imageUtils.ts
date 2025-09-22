// frontend/src/utils/imageUtils.ts

/**
 * Fallback image URLs for when product images fail to load
 */
export const FALLBACK_IMAGES = {
  electronics: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=400&fit=crop&crop=center",
  fashion: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop&crop=center",
  home: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
  sports: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
  beauty: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center",
  automotive: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=400&fit=crop&crop=center",
  toys: "https://images.unsplash.com/photo-1558060370-7e0b8b5b5b5b?w=400&h=400&fit=crop&crop=center",
  jewelry: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center",
  shoes: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
  computer: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=400&fit=crop&crop=center",
  musical: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=center",
  default: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=center"
};

/**
 * Get fallback image based on category ID
 */
export function getFallbackImage(categoryId?: string): string {
  if (!categoryId) return FALLBACK_IMAGES.default;
  
  const categoryMap: Record<string, keyof typeof FALLBACK_IMAGES> = {
    "100001": "electronics",
    "100002": "fashion", 
    "100003": "home",
    "100004": "sports",
    "100005": "beauty",
    "100006": "automotive",
    "100007": "toys",
    "100008": "jewelry",
    "100009": "shoes",
    "100010": "computer",
    "1421": "electronics",
    "1509": "fashion",
    "1525": "fashion",
    "1526": "musical"
  };
  
  const categoryKey = categoryMap[categoryId];
  return categoryKey ? FALLBACK_IMAGES[categoryKey] : FALLBACK_IMAGES.default;
}

/**
 * Handle image load error and return fallback
 */
export function handleImageError(
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackUrl: string
): void {
  const img = event.currentTarget;
  if (img.src !== fallbackUrl) {
    img.src = fallbackUrl;
  }
}

/**
 * Check if image URL is valid
 */
export function isValidImageUrl(url: string): boolean {
  if (!url) return false;
  
  // Check if it's a valid URL
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Get optimized image URL with proper dimensions
 */
export function getOptimizedImageUrl(url: string, width: number = 400, height: number = 400): string {
  if (!isValidImageUrl(url)) return getFallbackImage();
  
  // If it's an Unsplash URL, add optimization parameters
  if (url.includes('unsplash.com')) {
    const urlObj = new URL(url);
    urlObj.searchParams.set('w', width.toString());
    urlObj.searchParams.set('h', height.toString());
    urlObj.searchParams.set('fit', 'crop');
    urlObj.searchParams.set('crop', 'center');
    return urlObj.toString();
  }
  
  return url;
}
