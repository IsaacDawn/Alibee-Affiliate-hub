// Application constants and configuration
export const CURRENCIES = {
  USD: { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
  EUR: { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
  ILS: { code: 'ILS', symbol: '₪', name: 'Israeli Shekel', flag: '🇮🇱' },
  GBP: { code: 'GBP', symbol: '£', name: 'British Pound', flag: '🇬🇧' },
  JPY: { code: 'JPY', symbol: '¥', name: 'Japanese Yen', flag: '🇯🇵' },
  CAD: { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', flag: '🇨🇦' },
  AUD: { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', flag: '🇦🇺' },
  CHF: { code: 'CHF', symbol: 'CHF', name: 'Swiss Franc', flag: '🇨🇭' },
  CNY: { code: 'CNY', symbol: '¥', name: 'Chinese Yuan', flag: '🇨🇳' },
  INR: { code: 'INR', symbol: '₹', name: 'Indian Rupee', flag: '🇮🇳' },
  KRW: { code: 'KRW', symbol: '₩', name: 'South Korean Won', flag: '🇰🇷' },
  BRL: { code: 'BRL', symbol: 'R$', name: 'Brazilian Real', flag: '🇧🇷' },
  MXN: { code: 'MXN', symbol: '$', name: 'Mexican Peso', flag: '🇲🇽' },
  RUB: { code: 'RUB', symbol: '₽', name: 'Russian Ruble', flag: '🇷🇺' },
  TRY: { code: 'TRY', symbol: '₺', name: 'Turkish Lira', flag: '🇹🇷' },
  ZAR: { code: 'ZAR', symbol: 'R', name: 'South African Rand', flag: '🇿🇦' },
  SEK: { code: 'SEK', symbol: 'kr', name: 'Swedish Krona', flag: '🇸🇪' },
  NOK: { code: 'NOK', symbol: 'kr', name: 'Norwegian Krone', flag: '🇳🇴' },
  DKK: { code: 'DKK', symbol: 'kr', name: 'Danish Krone', flag: '🇩🇰' },
  PLN: { code: 'PLN', symbol: 'zł', name: 'Polish Zloty', flag: '🇵🇱' },
  CZK: { code: 'CZK', symbol: 'Kč', name: 'Czech Koruna', flag: '🇨🇿' },
  HUF: { code: 'HUF', symbol: 'Ft', name: 'Hungarian Forint', flag: '🇭🇺' },
  AED: { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham', flag: '🇦🇪' },
  SAR: { code: 'SAR', symbol: '﷼', name: 'Saudi Riyal', flag: '🇸🇦' },
  EGP: { code: 'EGP', symbol: '£', name: 'Egyptian Pound', flag: '🇪🇬' },
  THB: { code: 'THB', symbol: '฿', name: 'Thai Baht', flag: '🇹🇭' },
  VND: { code: 'VND', symbol: '₫', name: 'Vietnamese Dong', flag: '🇻🇳' },
  IDR: { code: 'IDR', symbol: 'Rp', name: 'Indonesian Rupiah', flag: '🇮🇩' },
  MYR: { code: 'MYR', symbol: 'RM', name: 'Malaysian Ringgit', flag: '🇲🇾' },
  SGD: { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', flag: '🇸🇬' },
  PHP: { code: 'PHP', symbol: '₱', name: 'Philippine Peso', flag: '🇵🇭' },
  NZD: { code: 'NZD', symbol: 'NZ$', name: 'New Zealand Dollar', flag: '🇳🇿' },
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

// const API_PREFIX       = import.meta.env.VITE_API_PREFIX        || '';        // مثلا '/api'
// const HEALTH_PATH      = import.meta.env.VITE_API_HEALTH_PATH   || '/health';
// const STATS_PATH       = import.meta.env.VITE_API_STATS_PATH    || '/stats';
// const PRODUCTS_PATH    = import.meta.env.VITE_API_PRODUCTS_PATH || '/products';
// // const SAVE_PATH        = import.meta.env.VITE_API_SAVE_PATH      || '/save';
// // const UNSAVE_PATH      = import.meta.env.VITE_API_UNSAVE_PATH    || '/unsave';
// // const DEMO_PATH        = import.meta.env.VITE_API_DEMO_PATH      || '/demo';


const API_PREFIX       = import.meta.env.VITE_API_PREFIX        || '';
const HEALTH_PATH      = import.meta.env.VITE_API_HEALTH_PATH   || '/health';
const STATS_PATH       = import.meta.env.VITE_API_STATS_PATH    || '/stats';
const PRODUCTS_PATH    = import.meta.env.VITE_API_PRODUCTS_PATH || '/search'; // پیش‌فرض را /search گذاشتیم
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
  UNSAVE_PRODUCT:join(BASE_URL, withPrefix(UNSAVE_PATH)),
  DEMO:          join(BASE_URL, withPrefix(DEMO_PATH)),

  // برای سازگاری/خوانایی
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
