// Application constants and configuration
export const CURRENCIES = {
  USD: { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
  EUR: { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
  ILS: { code: 'ILS', symbol: '₪', name: 'Israeli Shekel', flag: '🇮🇱' },
} as const;



export const SORT_OPTIONS = {
  volume_desc: 'volume_desc',
  discount_desc: 'discount_desc', 
  rating_desc: 'rating_desc',
} as const;

export const SEARCH_MODES = {
  saved: 'saved',
  aliexpress: 'aliexpress',
  hot: 'hot',
} as const;

// const isLocal =
//   typeof window !== "undefined" &&
//   (window.location.hostname === "localhost" ||
//     window.location.hostname === "127.0.0.1");

// BASE_URL will be defined below

// const API_PREFIX       = import.meta.env.VITE_API_PREFIX        || '';        // e.g. '/api'
// const HEALTH_PATH      = import.meta.env.VITE_API_HEALTH_PATH   || '/health';
// const STATS_PATH       = import.meta.env.VITE_API_STATS_PATH    || '/stats';
// const PRODUCTS_PATH    = import.meta.env.VITE_API_PRODUCTS_PATH || '/products';
// // const SAVE_PATH        = import.meta.env.VITE_API_SAVE_PATH      || '/save';
// // const UNSAVE_PATH      = import.meta.env.VITE_API_UNSAVE_PATH    || '/unsave';
// // const DEMO_PATH        = import.meta.env.VITE_API_DEMO_PATH      || '/demo';


// Dynamic API endpoints for both local and production
const getBaseUrl = () => {
  // Check if we're in development mode
  if (import.meta.env.DEV) {
    return 'http://127.0.0.1:8080';
  }
  
  // Check environment variable first
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }
  
  // Check if we're running locally
  if (typeof window !== 'undefined' && 
      (window.location.hostname === 'localhost' || 
       window.location.hostname === '127.0.0.1')) {
    return 'http://127.0.0.1:8080';
  }
  
  // Default to production
  return 'https://alibee-affiliate-api.onrender.com';
};

const BASE_URL = getBaseUrl();

// Helper function to get API path based on environment
const getApiPath = (endpoint: string) => {
  // In development, use /api prefix
  if (import.meta.env.DEV) {
    return `/api${endpoint}`;
  }
  
  // In production (Render.com), use direct paths without /api prefix
  return endpoint;
};

export const API_ENDPOINTS = {
  BASE_URL,
  HEALTH: `${BASE_URL}${getApiPath('/health')}`,
  STATS: `${BASE_URL}${getApiPath('/stats')}`,
  PRODUCTS: `${BASE_URL}${getApiPath('/products')}`,
  EXCHANGE: `${BASE_URL}${getApiPath('/exchange')}`,
  SAVE_PRODUCT: `${BASE_URL}${getApiPath('/save')}`,
  UPDATE_PRODUCT: `${BASE_URL}${getApiPath('/save')}`,
  CHECK_PRODUCT_EXISTS: `${BASE_URL}${getApiPath('/check')}`,
  GET_PRODUCT_INFO: `${BASE_URL}${getApiPath('/info')}`,
  UNSAVE_PRODUCT: `${BASE_URL}${getApiPath('/unsave')}`,
  DEMO: `${BASE_URL}${getApiPath('/demo')}`,
  DAILY_PRODUCTS: `${BASE_URL}${getApiPath('/daily-products')}`,
  UPDATE_DESCRIPTION: `${BASE_URL}${getApiPath('/update-description')}`,
  SEARCH: `${BASE_URL}${getApiPath('/search')}`,
};
export default API_ENDPOINTS;
export const DEFAULT_PAGE_SIZE = 20;
export const INFINITE_SCROLL_THRESHOLD = 0.1;
export const INFINITE_SCROLL_ROOT_MARGIN = '100px';
export const LAZY_LOAD_THRESHOLD = 0.1;
export const LAZY_LOAD_ROOT_MARGIN = '50px';

export const ANIMATION_DELAYS = {
  CARD_STAGGER: 100, // ms between card animations
  FADE_IN_DURATION: 300,
  SLIDE_IN_DURATION: 400,
} as const;

export const DEBOUNCE_DELAYS = {
  SEARCH: 300, // ms
  SAVE_OPERATION: 100, // ms
} as const;
