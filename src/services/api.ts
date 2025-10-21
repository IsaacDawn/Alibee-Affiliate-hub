import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://alibee-affiliatehub-api.onrender.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // Increased from 10s to 30s
  headers: {
    'Content-Type': 'application/json',
  },
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
    console.log(`API Response: ${response.status} ${response.config.url}`);
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
