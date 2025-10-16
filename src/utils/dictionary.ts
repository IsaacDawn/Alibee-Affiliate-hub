// Multi-language Dictionary for Alibee Affiliate Hub
// Supports: English (EN), Hebrew (HE), Arabic (AR)

import React from 'react';

export type LanguageCode = 'EN' | 'HE' | 'AR';

export interface Dictionary {
  // Product Properties
  category: string;
  id: string;
  price: string;
  originalPrice: string;
  currencyType: string;
  discount: string;
  commission: string;
  salesVolume: string;
  rating: string;
  
  // Loading Page
  refreshing: string;
  loadingProducts: string;
  
  // Search Page
  search: string;
  advancedSearch: string;
  searchProducts: string;
  productName: string;
  productId: string;
  priceRange: string;
  minPrice: string;
  maxPrice: string;
  sortBy: string;
  sortOrder: string;
  ascending: string;
  descending: string;
  priceAsc: string;
  priceDesc: string;
  discountAsc: string;
  discountDesc: string;
  volumeAsc: string;
  volumeDesc: string;
  ratingAsc: string;
  ratingDesc: string;
  onlyWithVideo: string;
  categoryFilter: string;
  allCategories: string;
  electronics: string;
  luggage: string;
  sport: string;
  furniture: string;
  homeGarden: string;
  jewelry: string;
  babyMaternity: string;
  searchButton: string;
  clearFilters: string;
  reset: string;
  apply: string;
  cancel: string;
  
  // Common Actions
  like: string;
  unlike: string;
  share: string;
  buy: string;
  edit: string;
  save: string;
  delete: string;
  close: string;
  back: string;
  next: string;
  previous: string;
  
  // Status Messages
  loading: string;
  error: string;
  success: string;
  noResults: string;
  tryAgain: string;
  connectionError: string;
  
  // Navigation
  home: string;
  products: string;
  favorites: string;
  settings: string;
  help: string;
  about: string;
}

export const translations: Record<LanguageCode, Dictionary> = {
  EN: {
    // Product Properties
    category: 'Category',
    id: 'ID',
    price: 'Price',
    originalPrice: 'Original Price',
    currencyType: 'Currency Type',
    discount: 'Discount',
    commission: 'Commission',
    salesVolume: 'Sales Volume',
    rating: 'Rating',
    
    // Loading Page
    refreshing: 'Refreshing',
    loadingProducts: 'Loading Products',
    
    // Search Page
    search: 'Search',
    advancedSearch: 'Advanced Search',
    searchProducts: 'Search Products',
    productName: 'Product Name',
    productId: 'Product ID',
    priceRange: 'Price Range',
    minPrice: 'Min Price',
    maxPrice: 'Max Price',
    sortBy: 'Sort By',
    sortOrder: 'Sort Order',
    ascending: 'Ascending',
    descending: 'Descending',
    priceAsc: 'Price (Low to High)',
    priceDesc: 'Price (High to Low)',
    discountAsc: 'Discount (Low to High)',
    discountDesc: 'Discount (High to Low)',
    volumeAsc: 'Sales Volume (Low to High)',
    volumeDesc: 'Sales Volume (High to Low)',
    ratingAsc: 'Rating (Low to High)',
    ratingDesc: 'Rating (High to Low)',
    onlyWithVideo: 'Only with Video',
    categoryFilter: 'Category Filter',
    allCategories: 'All Categories',
    electronics: 'Electronics',
    luggage: 'Luggage, Baggage and Shoes',
    sport: 'Sport and Entertainment',
    furniture: 'Furniture',
    homeGarden: 'Home and Garden',
    jewelry: 'Jewelry, Watches, Accessories',
    babyMaternity: 'Baby and Maternity',
    searchButton: 'Search',
    clearFilters: 'Clear Filters',
    reset: 'Reset',
    apply: 'Apply',
    cancel: 'Cancel',
    
    // Common Actions
    like: 'Like',
    unlike: 'Unlike',
    share: 'Share',
    buy: 'Buy',
    edit: 'Edit',
    save: 'Save',
    delete: 'Delete',
    close: 'Close',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    
    // Status Messages
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    noResults: 'No Results Found',
    tryAgain: 'Try Again',
    connectionError: 'Connection Error',
    
    // Navigation
    home: 'Home',
    products: 'Products',
    favorites: 'Favorites',
    settings: 'Settings',
    help: 'Help',
    about: 'About'
  },
  
  HE: {
    // Product Properties
    category: 'קטגוריה',
    id: 'מזהה',
    price: 'מחיר',
    originalPrice: 'מחיר מקורי',
    currencyType: 'סוג מטבע',
    discount: 'הנחה',
    commission: 'עמלה',
    salesVolume: 'נפח מכירות',
    rating: 'דירוג',
    
    // Loading Page
    refreshing: 'מרענן',
    loadingProducts: 'טוען מוצרים',
    
    // Search Page
    search: 'חיפוש',
    advancedSearch: 'חיפוש מתקדם',
    searchProducts: 'חיפוש מוצרים',
    productName: 'שם מוצר',
    productId: 'מזהה מוצר',
    priceRange: 'טווח מחירים',
    minPrice: 'מחיר מינימלי',
    maxPrice: 'מחיר מקסימלי',
    sortBy: 'מיון לפי',
    sortOrder: 'סדר מיון',
    ascending: 'עולה',
    descending: 'יורד',
    priceAsc: 'מחיר (נמוך לגבוה)',
    priceDesc: 'מחיר (גבוה לנמוך)',
    discountAsc: 'הנחה (נמוך לגבוה)',
    discountDesc: 'הנחה (גבוה לנמוך)',
    volumeAsc: 'נפח מכירות (נמוך לגבוה)',
    volumeDesc: 'נפח מכירות (גבוה לנמוך)',
    ratingAsc: 'דירוג (נמוך לגבוה)',
    ratingDesc: 'דירוג (גבוה לנמוך)',
    onlyWithVideo: 'רק עם וידאו',
    categoryFilter: 'מסנן קטגוריות',
    allCategories: 'כל הקטגוריות',
    electronics: 'אלקטרוניקה',
    luggage: 'מזוודות, תיקים ונעליים',
    sport: 'ספורט ובידור',
    furniture: 'רהיטים',
    homeGarden: 'בית וגינה',
    jewelry: 'תכשיטים, שעונים ואביזרים',
    babyMaternity: 'תינוקות ואמהות',
    searchButton: 'חיפוש',
    clearFilters: 'נקה מסננים',
    reset: 'איפוס',
    apply: 'החל',
    cancel: 'ביטול',
    
    // Common Actions
    like: 'אהבתי',
    unlike: 'לא אהבתי',
    share: 'שתף',
    buy: 'קנה',
    edit: 'ערוך',
    save: 'שמור',
    delete: 'מחק',
    close: 'סגור',
    back: 'חזור',
    next: 'הבא',
    previous: 'הקודם',
    
    // Status Messages
    loading: 'טוען...',
    error: 'שגיאה',
    success: 'הצלחה',
    noResults: 'לא נמצאו תוצאות',
    tryAgain: 'נסה שוב',
    connectionError: 'שגיאת חיבור',
    
    // Navigation
    home: 'בית',
    products: 'מוצרים',
    favorites: 'מועדפים',
    settings: 'הגדרות',
    help: 'עזרה',
    about: 'אודות'
  },
  
  AR: {
    // Product Properties
    category: 'الفئة',
    id: 'المعرف',
    price: 'السعر',
    originalPrice: 'السعر الأصلي',
    currencyType: 'نوع العملة',
    discount: 'الخصم',
    commission: 'العمولة',
    salesVolume: 'حجم المبيعات',
    rating: 'التقييم',
    
    // Loading Page
    refreshing: 'تحديث',
    loadingProducts: 'تحميل المنتجات',
    
    // Search Page
    search: 'بحث',
    advancedSearch: 'البحث المتقدم',
    searchProducts: 'البحث عن المنتجات',
    productName: 'اسم المنتج',
    productId: 'معرف المنتج',
    priceRange: 'نطاق السعر',
    minPrice: 'الحد الأدنى للسعر',
    maxPrice: 'الحد الأقصى للسعر',
    sortBy: 'ترتيب حسب',
    sortOrder: 'ترتيب',
    ascending: 'تصاعدي',
    descending: 'تنازلي',
    priceAsc: 'السعر (من الأقل للأعلى)',
    priceDesc: 'السعر (من الأعلى للأقل)',
    discountAsc: 'الخصم (من الأقل للأعلى)',
    discountDesc: 'الخصم (من الأعلى للأقل)',
    volumeAsc: 'حجم المبيعات (من الأقل للأعلى)',
    volumeDesc: 'حجم المبيعات (من الأعلى للأقل)',
    ratingAsc: 'التقييم (من الأقل للأعلى)',
    ratingDesc: 'التقييم (من الأعلى للأقل)',
    onlyWithVideo: 'فقط مع فيديو',
    categoryFilter: 'مرشح الفئة',
    allCategories: 'جميع الفئات',
    electronics: 'الإلكترونيات',
    luggage: 'الأمتعة والحقائب والأحذية',
    sport: 'الرياضة والترفيه',
    furniture: 'الأثاث',
    homeGarden: 'المنزل والحديقة',
    jewelry: 'المجوهرات والساعات والإكسسوارات',
    babyMaternity: 'الأطفال والأمومة',
    searchButton: 'بحث',
    clearFilters: 'مسح المرشحات',
    reset: 'إعادة تعيين',
    apply: 'تطبيق',
    cancel: 'إلغاء',
    
    // Common Actions
    like: 'أعجبني',
    unlike: 'لم يعجبني',
    share: 'مشاركة',
    buy: 'شراء',
    edit: 'تعديل',
    save: 'حفظ',
    delete: 'حذف',
    close: 'إغلاق',
    back: 'رجوع',
    next: 'التالي',
    previous: 'السابق',
    
    // Status Messages
    loading: 'جاري التحميل...',
    error: 'خطأ',
    success: 'نجح',
    noResults: 'لم يتم العثور على نتائج',
    tryAgain: 'حاول مرة أخرى',
    connectionError: 'خطأ في الاتصال',
    
    // Navigation
    home: 'الرئيسية',
    products: 'المنتجات',
    favorites: 'المفضلة',
    settings: 'الإعدادات',
    help: 'المساعدة',
    about: 'حول'
  }
};

// Language detection and management
export class LanguageManager {
  private static currentLanguage: LanguageCode = 'EN';
  
  static setLanguage(language: LanguageCode): void {
    this.currentLanguage = language;
    localStorage.setItem('alibee-language', language);
  }
  
  static getCurrentLanguage(): LanguageCode {
    const saved = localStorage.getItem('alibee-language') as LanguageCode;
    if (saved && ['EN', 'HE', 'AR'].includes(saved)) {
      this.currentLanguage = saved;
    }
    return this.currentLanguage;
  }
  
  static getTranslation(key: keyof Dictionary): string {
    return translations[this.currentLanguage][key];
  }
  
  static getAllTranslations(): Dictionary {
    return translations[this.currentLanguage];
  }
  
  static isRTL(): boolean {
    return ['HE', 'AR'].includes(this.currentLanguage);
  }
  
  static getTextDirection(): 'ltr' | 'rtl' {
    return this.isRTL() ? 'rtl' : 'ltr';
  }
}

// Language Context
const LanguageContext = React.createContext<{
  currentLanguage: LanguageCode;
  changeLanguage: (language: LanguageCode) => void;
  t: (key: keyof Dictionary) => string;
  isRTL: boolean;
  textDirection: 'ltr' | 'rtl';
  languages: Array<{ code: LanguageCode; name: string }>;
} | null>(null);

// Language Provider Component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = React.useState<LanguageCode>(
    LanguageManager.getCurrentLanguage()
  );
  
  const t = (key: keyof Dictionary): string => {
    return translations[currentLanguage][key];
  };
  
  const changeLanguage = (language: LanguageCode) => {
    LanguageManager.setLanguage(language);
    setCurrentLanguage(language);
  };
  
  const isRTL = LanguageManager.isRTL();
  const textDirection = LanguageManager.getTextDirection();
  
  const value = {
    currentLanguage,
    changeLanguage,
    t,
    isRTL,
    textDirection,
    languages: [
      { code: 'EN' as LanguageCode, name: 'English' },
      { code: 'HE' as LanguageCode, name: 'עברית' },
      { code: 'AR' as LanguageCode, name: 'عربي' }
    ]
  };
  
  return React.createElement(
    LanguageContext.Provider,
    { value },
    children
  );
};

// Hook for using translations in React components
export const useTranslation = () => {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};

