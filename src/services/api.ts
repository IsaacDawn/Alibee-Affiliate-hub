import axios from 'axios';

// For local development, use localhost. For production, use environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8080';

// Log the API base URL being used
console.log(`🌐 [API CONFIG] API_BASE_URL: ${API_BASE_URL}`);
console.log(`🌐 [API CONFIG] VITE_API_BASE_URL from env: ${import.meta.env.VITE_API_BASE_URL || 'not set'}`);

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // Increased from 10s to 30s
  headers: {
    'Content-Type': 'application/json',
  },
  // Ensure proper JSON parsing - don't transform response automatically
  transformResponse: [(data) => {
    // If data is a string, parse it
    if (typeof data === 'string') {
      try {
        return JSON.parse(data);
      } catch (e) {
        console.error('Error parsing JSON response:', e);
        return data;
      }
    }
    // If data is already an object, return it as is
    return data;
  }],
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    const fullUrl = (response.config.baseURL || '') + (response.config.url || '');
    console.log(`API Response: ${response.status} ${fullUrl}`);
    
    // Debug: Check if is_saved_in_db exists in response for comprehensive search
    if (response.config.url && response.config.url.includes('/api/search/comprehensive') && response.data && response.data.items) {
      const items = response.data.items;
      if (items.length > 0) {
        const firstItem = items[0];
        const hasIsSavedInDb = 'is_saved_in_db' in firstItem;
        
        // Also check raw response text if available
        const rawResponseText = response.request?.responseText || '';
        const hasIsSavedInDbInRaw = rawResponseText.includes('is_saved_in_db');
        
        console.log(`🔍 [API INTERCEPTOR] First product in response:`, {
          product_id: firstItem.product_id,
          has_is_saved_in_db: hasIsSavedInDb,
          is_saved_in_db: firstItem.is_saved_in_db,
          product_category: firstItem.product_category,
          custom_title: firstItem.custom_title,
          all_keys: Object.keys(firstItem).slice(0, 20),
          has_is_saved_in_db_in_raw_response: hasIsSavedInDbInRaw,
          raw_response_sample: rawResponseText.substring(0, 500)
        });
        
        // If is_saved_in_db exists in raw response but not in parsed data, log warning
        if (hasIsSavedInDbInRaw && !hasIsSavedInDb) {
          console.warn(`⚠️ [API INTERCEPTOR] is_saved_in_db exists in raw response but not in parsed data!`);
        }
      }
    }
    
    return response;
  },
  (error) => {
    console.error('API Response Error:', error);
    return Promise.reject(error);
  }
);

// Like/Unlike API functions
export const likeProduct = async (productData: {
  product_id: string;
  product_title: string;
  promotion_link: string;
  product_category?: string;
  custom_title?: string;
  has_video?: boolean;
}) => {
  const response = await api.post('/api/like', productData);
  return response.data;
};

export const unlikeProduct = async (productId: string) => {
  const response = await api.delete(`/api/like/${productId}`);
  return response.data;
};

export const getLikeStatus = async (productId: string) => {
  const response = await api.get(`/api/like/${productId}/status`);
  return response.data;
};

export const getBatchLikeStatus = async (productIds: string[]) => {
  const response = await api.post('/api/likes/batch-status', productIds);
  return response.data;
};

export const getLikedProductsCount = async () => {
  const response = await api.get('/api/likes/count');
  return response.data;
};

// Custom Titles API functions
export const getCustomTitle = async (productId: string) => {
  const response = await api.get(`/api/products/${productId}/custom-title`);
  return response.data;
};

export const updateCustomTitle = async (productId: string, customTitle: string) => {
  const response = await api.put(`/api/products/${productId}/custom-title?custom_title=${encodeURIComponent(customTitle)}`);
  return response.data;
};

export const deleteCustomTitle = async (productId: string) => {
  const response = await api.delete(`/api/products/${productId}/custom-title`);
  return response.data;
};

export const getBatchCustomTitles = async (productIds: string[]) => {
  const response = await api.post('/api/products/batch/custom-titles', productIds);
  return response.data;
};

// Dictionary/Translations API functions
export const getTranslations = async () => {
  const response = await api.get('/api/translations');
  return response.data;
};

export const getTranslationsByLanguage = async (language: string) => {
  const response = await api.get(`/api/translations/${language}`);
  return response.data;
};

// Currency conversion API functions
export const convertCurrency = async (price: number, fromCurrency: string, toCurrency: string) => {
  const response = await api.post('/api/currency/convert', {
    price,
    from_currency: fromCurrency,
    to_currency: toCurrency
  });
  return response.data;
};

export const detectCurrency = async (text: string) => {
  const response = await api.post('/api/currency/detect', { text });
  return response.data;
};

export const getCurrencyRates = async () => {
  const response = await api.get('/api/currency/rates');
  return response.data;
};

// Product by ID API function
export const getProductById = async (productId: string) => {
  const response = await api.get(`/api/product/${productId}`);
  return response.data;
};

export default api;
