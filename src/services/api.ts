// API service layer for all backend communications
import { API_ENDPOINTS } from '../constants';
import type { 
  Product, 
  Stats, 
  SystemStatus, 
  PaginatedResponse, 
  SaveProductRequest,
  ApiResponse 
} from '../types';

class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string = API_ENDPOINTS.BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };

    const response = await fetch(url, { ...defaultOptions, ...options });
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // Health and system status
  async getHealth(): Promise<SystemStatus> {
    return this.request<SystemStatus>(API_ENDPOINTS.HEALTH);
  }

  async getStats(): Promise<Stats> {
    return this.request<Stats>(API_ENDPOINTS.STATS);
  }

  // Product operations
  // async searchProducts(params: {
  //   q?: string;
  //   categoryId?: string;
  //   hasVideo?: boolean;
  //   sort?: string;
  //   page?: number;
  //   pageSize?: number;
  // }): Promise<PaginatedResponse<Product>> {
  //   const searchParams = new URLSearchParams();
    
  //   Object.entries(params).forEach(([key, value]) => {
  //     if (value !== undefined && value !== null && value !== '') {
  //       searchParams.append(key, String(value));
  //     }
  //   });

  //   return this.request<PaginatedResponse<Product>>(
  //     `${API_ENDPOINTS.SEARCH}?${searchParams.toString()}`
  //   );
  // }

  async getDemoProducts(): Promise<PaginatedResponse<Product>> {
    return this.request<PaginatedResponse<Product>>(API_ENDPOINTS.DEMO);
  }

  async getSavedProducts(params: {
    q?: string;
    categoryId?: string;
    hasVideo?: boolean;
    sort?: string;
    page?: number;
    pageSize?: number;
  }): Promise<PaginatedResponse<Product>> {
    const searchParams = new URLSearchParams();
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        searchParams.append(key, String(value));
      }
    });

    return this.request<PaginatedResponse<Product>>(
      `${API_ENDPOINTS.PRODUCTS}?${searchParams.toString()}`
    );
  }

  // Save/unsave operations
  async saveProduct(product: SaveProductRequest): Promise<ApiResponse<any>> {
    return this.request<ApiResponse<any>>(API_ENDPOINTS.SAVE_PRODUCT, {
      method: 'POST',
      body: JSON.stringify(product),
    });
  }

  async unsaveProduct(productId: string): Promise<ApiResponse<any>> {
    return this.request<ApiResponse<any>>(
      `${API_ENDPOINTS.UNSAVE_PRODUCT}/${productId}`,
      {
        method: 'DELETE',
      }
    );
  }

  // New save/unsave endpoints for simple backend
  async saveProductSimple(productData: any): Promise<ApiResponse<any>> {
    return this.request<ApiResponse<any>>('/save', {
      method: 'POST',
      body: JSON.stringify(productData),
    });
  }

  async unsaveProductSimple(productId: string): Promise<ApiResponse<any>> {
    return this.request<ApiResponse<any>>('/unsave', {
      method: 'POST',
      body: JSON.stringify({ product_id: productId }),
    });
  }
}

// Export singleton instance
export const apiService = new ApiService();
export default apiService;
