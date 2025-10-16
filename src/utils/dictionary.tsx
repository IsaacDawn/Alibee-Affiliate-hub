// Multi-language dictionary for Alibee Affiliate Hub
export interface Dictionary {
  // Product properties
  category: string;
  id: string;
  price: string;
  originalPrice: string;
  currencyType: string;
  discount: string;
  commission: string;
  salesVolume: string;
  userRating: string;
  
  // Loading page
  refreshing: string;
  loadingProducts: string;
  
  // Search page
  search: string;
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
  all: string;
  electronics: string;
  luggage: string;
  sport: string;
  furniture: string;
  homeGarden: string;
  jewelry: string;
  baby: string;
  searchButton: string;
  clearFilters: string;
  
  // Common
  loading: string;
  error: string;
  success: string;
  cancel: string;
  save: string;
  edit: string;
  delete: string;
  close: string;
  back: string;
  next: string;
  previous: string;
  total: string;
  items: string;
  page: string;
  of: string;
}

export const dictionary: Record<string, Dictionary> = {
  EN: {
    // Product properties
    category: 'Category',
    id: 'ID',
    price: 'Price',
    originalPrice: 'Original Price',
    currencyType: 'Currency Type',
    discount: 'Discount',
    commission: 'Commission',
    salesVolume: 'Sales Volume',
    userRating: 'User Rating',
    
    // Loading page
    refreshing: 'Refreshing',
    loadingProducts: 'Loading Products',
    
    // Search page
    search: 'Search',
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
    categoryFilter: 'Category',
    all: 'All',
    electronics: 'Electronics',
    luggage: 'Luggage, Baggage and Shoes',
    sport: 'Sport and Entertainment',
    furniture: 'Furniture',
    homeGarden: 'Home and Garden',
    jewelry: 'Jewelry, Watches, Accessories',
    baby: 'Baby and Maternity',
    searchButton: 'Search',
    clearFilters: 'Clear Filters',
    
    // Common
    loading: 'Loading',
    error: 'Error',
    success: 'Success',
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    close: 'Close',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    total: 'Total',
    items: 'Items',
    page: 'Page',
    of: 'of'
  },
  
  HE: {
    // Product properties
    category: 'קטגוריה',
    id: 'מזהה',
    price: 'מחיר',
    originalPrice: 'מחיר מקורי',
    currencyType: 'סוג מטבע',
    discount: 'הנחה',
    commission: 'עמלה',
    salesVolume: 'נפח מכירות',
    userRating: 'דירוג משתמשים',
    
    // Loading page
    refreshing: 'מרענן',
    loadingProducts: 'טוען מוצרים',
    
    // Search page
    search: 'חיפוש',
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
    categoryFilter: 'קטגוריה',
    all: 'הכל',
    electronics: 'אלקטרוניקה',
    luggage: 'מזוודות, תיקים ונעליים',
    sport: 'ספורט ובידור',
    furniture: 'רהיטים',
    homeGarden: 'בית וגן',
    jewelry: 'תכשיטים, שעונים, אביזרים',
    baby: 'תינוקות והריון',
    searchButton: 'חיפוש',
    clearFilters: 'נקה מסננים',
    
    // Common
    loading: 'טוען',
    error: 'שגיאה',
    success: 'הצלחה',
    cancel: 'ביטול',
    save: 'שמור',
    edit: 'ערוך',
    delete: 'מחק',
    close: 'סגור',
    back: 'חזור',
    next: 'הבא',
    previous: 'הקודם',
    total: 'סה"כ',
    items: 'פריטים',
    page: 'עמוד',
    of: 'מתוך'
  },
  
  AR: {
    // Product properties
    category: 'الفئة',
    id: 'المعرف',
    price: 'السعر',
    originalPrice: 'السعر الأصلي',
    currencyType: 'نوع العملة',
    discount: 'الخصم',
    commission: 'العمولة',
    salesVolume: 'حجم المبيعات',
    userRating: 'تقييم المستخدمين',
    
    // Loading page
    refreshing: 'جاري التحديث',
    loadingProducts: 'جاري تحميل المنتجات',
    
    // Search page
    search: 'البحث',
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
    categoryFilter: 'الفئة',
    all: 'الكل',
    electronics: 'الإلكترونيات',
    luggage: 'الأمتعة والحقائب والأحذية',
    sport: 'الرياضة والترفيه',
    furniture: 'الأثاث',
    homeGarden: 'المنزل والحديقة',
    jewelry: 'المجوهرات والساعات والإكسسوارات',
    baby: 'الأطفال والحمل',
    searchButton: 'بحث',
    clearFilters: 'مسح المرشحات',
    
    // Common
    loading: 'جاري التحميل',
    error: 'خطأ',
    success: 'نجح',
    cancel: 'إلغاء',
    save: 'حفظ',
    edit: 'تعديل',
    delete: 'حذف',
    close: 'إغلاق',
    back: 'رجوع',
    next: 'التالي',
    previous: 'السابق',
    total: 'المجموع',
    items: 'العناصر',
    page: 'الصفحة',
    of: 'من'
  }
};

// Language context and hook
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (languageCode: string) => void;
  t: (key: keyof Dictionary) => string;
  languages: Array<{ code: string; name: string }>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('EN');
  
  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'HE', name: 'עברית' },
    { code: 'AR', name: 'عربي' }
  ];

  const changeLanguage = (languageCode: string) => {
    setCurrentLanguage(languageCode);
    localStorage.setItem('selectedLanguage', languageCode);
  };

  const t = (key: keyof Dictionary): string => {
    return dictionary[currentLanguage]?.[key] || dictionary.EN[key] || key;
  };

  // Load saved language on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && dictionary[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      changeLanguage,
      t,
      languages
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
