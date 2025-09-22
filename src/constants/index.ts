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

export const BASE_URL =
import.meta.env.VITE_API_BASE_URL ||
  (['localhost','127.0.0.1'].includes(window.location.hostname)
    ? 'http://127.0.0.1:8080'
    : 'https://alibee-affiliate-api.onrender.com');

// const API_PREFIX       = import.meta.env.VITE_API_PREFIX        || '';        // e.g. '/api'
// const HEALTH_PATH      = import.meta.env.VITE_API_HEALTH_PATH   || '/health';
// const STATS_PATH       = import.meta.env.VITE_API_STATS_PATH    || '/stats';
// const PRODUCTS_PATH    = import.meta.env.VITE_API_PRODUCTS_PATH || '/products';
// // const SAVE_PATH        = import.meta.env.VITE_API_SAVE_PATH      || '/save';
// // const UNSAVE_PATH      = import.meta.env.VITE_API_UNSAVE_PATH    || '/unsave';
// // const DEMO_PATH        = import.meta.env.VITE_API_DEMO_PATH      || '/demo';


const API_PREFIX       = import.meta.env.VITE_API_PREFIX        || '';
const HEALTH_PATH      = import.meta.env.VITE_API_HEALTH_PATH   || '/health';
const STATS_PATH       = import.meta.env.VITE_API_STATS_PATH    || '/stats';
const PRODUCTS_PATH    = import.meta.env.VITE_API_PRODUCTS_PATH || '/search'; // Default set to /search
const SAVE_PATH        = import.meta.env.VITE_API_SAVE_PATH     || '/save';
const UNSAVE_PATH      = import.meta.env.VITE_API_UNSAVE_PATH   || '/unsave';
const DEMO_PATH        = import.meta.env.VITE_API_DEMO_PATH     || '/demo';
const join = (b:string,p:string)=>`${b.replace(/\/+$/,'')}/${p.replace(/^\/+/,'')}`;
const withPrefix = (p: string) => (API_PREFIX ? join(API_PREFIX, p) : p);

export const API_ENDPOINTS = {
  BASE_URL,
  HEALTH:        join(BASE_URL, withPrefix(HEALTH_PATH)),
  STATS:         join(BASE_URL, withPrefix(STATS_PATH)),
  PRODUCTS:      join(BASE_URL, withPrefix(PRODUCTS_PATH)),
  SAVE_PRODUCT:  join(BASE_URL, withPrefix(SAVE_PATH)),
  UPDATE_PRODUCT: join(BASE_URL, withPrefix(SAVE_PATH)),
  CHECK_PRODUCT_EXISTS: join(BASE_URL, withPrefix('/check')),
  GET_PRODUCT_INFO: join(BASE_URL, withPrefix('/info')),
  UNSAVE_PRODUCT:join(BASE_URL, withPrefix(UNSAVE_PATH)),
  DEMO:          join(BASE_URL, withPrefix(DEMO_PATH)),
  DAILY_PRODUCTS: join(BASE_URL, withPrefix('/daily-products')),
  UPDATE_DESCRIPTION: join(BASE_URL, withPrefix('/update-description')),

  // For compatibility/readability
  SEARCH:        join(BASE_URL, withPrefix(PRODUCTS_PATH)),
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
