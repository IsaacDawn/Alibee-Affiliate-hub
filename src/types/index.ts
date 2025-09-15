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
  rating_weighted: number;
  first_level_category_id?: string;
  promotion_link: string;
  saved_at?: string;
  fetched_at?: string;
}

export interface Filters {
  q: string;
  categoryId: string;
  hasVideo: boolean;
  sort: "volume_desc" | "discount_desc" | "rating_desc";
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
  title: string;
  image_url: string;
  video_url?: string;
  sale_price: number;
  sale_price_currency: string;
  original_price?: number;
  original_price_currency?: string;
  volume: number;
  rating: number;
  category_id?: string;
  promotion_link: string;
}
