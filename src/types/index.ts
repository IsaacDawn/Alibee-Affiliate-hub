export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  currency: string;
  originalCurrency?: string;
  originalPriceCurrency?: string; // Backend field: original_price_currency
  // Target currency fields (converted prices)
  priceTarget?: number; // Backend field: sale_price_target
  originalPriceTarget?: number; // Backend field: original_price_target
  currencyTarget?: string; // Backend field: sale_price_currency_target
  originalCurrencyTarget?: string; // Backend field: original_price_currency_target
  image: string;
  images?: string[]; // Array of additional product images
  video?: string; // Product video URL
  rating: number;
  reviewCount: number;
  url: string;
  category?: string;
  discount?: number;
  commissionRate?: number;
  salesVolume?: number;
  volume?: number; // Backend field: lastest_volume
  productId?: string;
  productDetailUrl?: string;
  discountPercentage?: number;
  productScoreStars?: number;
  scoreStars?: number; // Backend field: product_score_stars
  firstLevelCategoryName?: string;
  secondLevelCategoryName?: string;
  productCategory?: string;
  customTitle?: string | null;
  savedProductCategory?: string | null;
  isSavedInDb?: boolean; // Flag to indicate if product is saved in database
  onTitleChange?: (productId: string, newTitle: string) => void;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface SearchParams {
  query: string;
  page?: number;
  limit?: number;
  minPrice?: number;
  maxPrice?: number;
  category?: string;
  sortBy?: 'price' | 'rating' | 'reviews' | 'newest';
  sortOrder?: 'asc' | 'desc';
  hasVideo?: boolean;
}

export interface Stats {
  totalProducts: number;
  totalCategories: number;
  lastUpdate: string;
}
