import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const LANGS = { en: 'English', he: 'עברית', ar: 'العربية' } as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: { translation: {
      // Header
      affiliateHub: 'Affiliate Hub',
      discoverShare: 'Discover & Share Amazing Products',
      
      // Search & Filters
      filters: 'Filters',
      search: 'Search',
      hot: 'Hot',
      saved: 'Saved',
      advanced: 'Advanced',
      clear: 'Clear',
      searchKeywords: 'Search Keywords',
      category: 'Category',
      sortBy: 'Sort By',
      onlyVideo: 'Only products with video',
      popularSearches: 'Popular Searches',
      searching: 'Searching...',
      searchProducts: 'Search for products, brands, or keywords...',
      
      // Categories
      allCategories: 'All Categories',
      electronics: 'Electronics',
      watchesJewelry: 'Watches & Jewelry',
      phoneAccessories: 'Phone Accessories',
      homeGarden: 'Home & Garden',
      beautyHealth: 'Beauty & Health',
      sportsOutdoors: 'Sports & Outdoors',
      automotive: 'Automotive',
      toysGames: 'Toys & Games',
      fashion: 'Fashion',
      toolsHardware: 'Tools & Hardware',
      
      // Sort Options
      bestSelling: 'Best Selling',
      bestDiscount: 'Best Discount',
      highestRating: 'Highest Rating',
      
      // Product Card
      productTitle: 'Product title...',
      volume: 'Volume',
      rating: 'Rating',
      affiliateLink: 'Affiliate Link',
      copy: 'Copy',
      generateLink: 'Generate Link',
      generating: 'Generating...',
      productSaved: 'Product Saved',
      savedOn: 'Saved on',
      
      // Status
      loadingProducts: 'Loading products...',
      pleaseWait: 'Please wait',
      noProductsFound: 'No products found',
      noSavedProducts: 'No saved products yet. Start exploring!',
      tryDifferentKeywords: 'Try different keywords or filters',
      loadMoreProducts: 'Load More Products',
      loadingMore: 'Loading more...',
      errorOccurred: 'Error occurred',
      
      // Navigation
      home: 'Home',
      favorites: 'Favorites',
      profile: 'Profile'
    }},
    he: { translation: {
      // Header
      affiliateHub: 'מרכז שותפים',
      discoverShare: 'גלה ושתף מוצרים מדהימים',
      
      // Search & Filters
      filters: 'סינון',
      search: 'חיפוש',
      hot: 'חם',
      saved: 'נשמר',
      advanced: 'מתקדם',
      clear: 'נקה',
      searchKeywords: 'מילות חיפוש',
      category: 'קטגוריה',
      sortBy: 'מיון לפי',
      onlyVideo: 'רק מוצרים עם וידאו',
      popularSearches: 'חיפושים פופולריים',
      searching: 'מחפש...',
      searchProducts: 'חפש מוצרים, מותגים או מילות מפתח...',
      
      // Categories
      allCategories: 'כל הקטגוריות',
      electronics: 'אלקטרוניקה',
      watchesJewelry: 'שעונים ותכשיטים',
      phoneAccessories: 'אביזרי טלפון',
      homeGarden: 'בית וגינה',
      beautyHealth: 'יופי ובריאות',
      sportsOutdoors: 'ספורט וטבע',
      automotive: 'רכב',
      toysGames: 'צעצועים ומשחקים',
      fashion: 'אופנה',
      toolsHardware: 'כלים וחומרה',
      
      // Sort Options
      bestSelling: 'הנמכר ביותר',
      bestDiscount: 'הנחה הטובה ביותר',
      highestRating: 'דירוג הגבוה ביותר',
      
      // Product Card
      productTitle: 'כותרת המוצר...',
      volume: 'נפח',
      rating: 'דירוג',
      affiliateLink: 'קישור שותף',
      copy: 'העתק',
      generateLink: 'צור קישור',
      generating: 'יוצר...',
      productSaved: 'מוצר נשמר',
      savedOn: 'נשמר ב',
      
      // Status
      loadingProducts: 'טוען מוצרים...',
      pleaseWait: 'אנא המתן',
      noProductsFound: 'לא נמצאו מוצרים',
      noSavedProducts: 'אין מוצרים שמורים עדיין. התחל לחקור!',
      tryDifferentKeywords: 'נסה מילות מפתח או מסננים שונים',
      loadMoreProducts: 'טען עוד מוצרים',
      loadingMore: 'טוען עוד...',
      errorOccurred: 'אירעה שגיאה',
      
      // Navigation
      home: 'בית',
      favorites: 'מועדפים',
      profile: 'פרופיל'
    }},
    ar: { translation: {
      // Header
      affiliateHub: 'مركز الشركاء',
      discoverShare: 'اكتشف وشارك منتجات مذهلة',
      
      // Search & Filters
      filters: 'تصفية',
      search: 'بحث',
      hot: 'شائع',
      saved: 'محفوظ',
      advanced: 'متقدم',
      clear: 'مسح',
      searchKeywords: 'كلمات البحث',
      category: 'الفئة',
      sortBy: 'ترتيب حسب',
      onlyVideo: 'المنتجات مع فيديو فقط',
      popularSearches: 'البحث الشائع',
      searching: 'جاري البحث...',
      searchProducts: 'ابحث عن المنتجات أو العلامات التجارية أو الكلمات المفتاحية...',
      
      // Categories
      allCategories: 'جميع الفئات',
      electronics: 'الإلكترونيات',
      watchesJewelry: 'الساعات والمجوهرات',
      phoneAccessories: 'إكسسوارات الهاتف',
      homeGarden: 'المنزل والحديقة',
      beautyHealth: 'الجمال والصحة',
      sportsOutdoors: 'الرياضة والهواء الطلق',
      automotive: 'السيارات',
      toysGames: 'الألعاب والألعاب',
      fashion: 'الموضة',
      toolsHardware: 'الأدوات والعتاد',
      
      // Sort Options
      bestSelling: 'الأكثر مبيعاً',
      bestDiscount: 'أفضل خصم',
      highestRating: 'أعلى تقييم',
      
      // Product Card
      productTitle: 'عنوان المنتج...',
      volume: 'الحجم',
      rating: 'التقييم',
      affiliateLink: 'رابط الشراكة',
      copy: 'نسخ',
      generateLink: 'إنشاء رابط',
      generating: 'جاري الإنشاء...',
      productSaved: 'تم حفظ المنتج',
      savedOn: 'محفوظ في',
      
      // Status
      loadingProducts: 'جاري تحميل المنتجات...',
      pleaseWait: 'يرجى الانتظار',
      noProductsFound: 'لم يتم العثور على منتجات',
      noSavedProducts: 'لا توجد منتجات محفوظة بعد. ابدأ الاستكشاف!',
      tryDifferentKeywords: 'جرب كلمات مفتاحية أو مرشحات مختلفة',
      loadMoreProducts: 'تحميل المزيد من المنتجات',
      loadingMore: 'جاري التحميل...',
      errorOccurred: 'حدث خطأ',
      
      // Navigation
      home: 'الرئيسية',
      favorites: 'المفضلة',
      profile: 'الملف الشخصي'
    }},
  },
});

export function dirFor(lng: string) {
  return lng === 'he' || lng === 'ar' ? 'rtl' : 'ltr';
}

export default i18n;
