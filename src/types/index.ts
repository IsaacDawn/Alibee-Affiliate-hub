// Shared TypeScript types and interfaces
export interface Currency {
  code: string;
  symbol: string;
  name: string;
  flag: string;
}

export interface Product {
  product_id: string;
  product_title: string;
  product_main_image_url: string;
  product_video_url?: string;
  sale_price: number;
  sale_price_currency: string;
  original_price?: number;
  original_price_currency?: string;
  lastest_volume: number;
  rating_weighted: number | null;
  first_level_category_id?: string;
  promotion_link: string;
  saved_at?: string;
  fetched_at?: string;
  // Additional rating-related fields
  rating?: number | null;
  score?: number | null;
  average_rating?: number | null;
  evaluate_rate?: string | null;
  // Enhanced fields from demo pattern
  product_description?: string;
  discount?: number;
  commission_rate?: number;
  shop_title?: string;
  shop_url?: string;
  product_detail_url?: string;
  product_small_image_urls?: string[];
  first_level_category_name?: string;
  second_level_category_name?: string;
  rating_percent?: string;
  positive_feedback_rate?: string;
  avg_evaluation_rate?: string;
  avg_rating_percent?: string;
  product_score?: string;
  product_score_stars?: number;
  product_category?: string;
  images_link?: string[];
  video_link?: string;
  // Additional fields for enhanced display
  custom_title?: string;
  original_currency?: string;
}

export interface Filters {
  q: string;
  categoryId: string;
  sort: "volume_desc" | "discount_desc" | "rating_desc";
  minPrice?: number;
  maxPrice?: number;
}


export interface Stats {
  totalProducts: number;
  savedProducts: number;
  totalSearches: number;
}

export interface SystemStatus {
  db: string;
  message?: string;
  ali_client: string;
  ali_api_status?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface SaveProductRequest {
  product_id: string;
  product_title: string;
  promotion_link: string;
  product_category?: string;
  custom_title?: string;
  has_video?: boolean;
}

export interface Category {
  id: string;
  name: string;
  name_fa?: string;
}

export interface CategoriesResponse {
  categories: Category[];
  total: number;
  message: string;
}