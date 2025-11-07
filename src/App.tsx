import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useStats } from './hooks/useStats';
import { useTheme } from './hooks/useTheme';
import { useCurrency } from './hooks/useCurrency';
import { useSearchParams } from './hooks/useSearchParams';
import { useLikeStatus } from './hooks/useLikeStatus';
import { useProductCards } from './hooks/useProductCards';
import { useTranslation, LanguageProvider } from './utils/dictionary';
import type { Product } from './types';
import HeaderBar from './components/HeaderBar';
import AdvancedSearchModal from './components/AdvancedSearchModal';
import ComprehensiveSearchPage from './components/ComprehensiveSearchPage';
import { SearchManager } from './components/SearchManager';
import { CurrencyDebugPanel } from './components/CurrencyDebugPanel';
import { ApiTestPanel } from './components/ApiTestPanel';
import { StarRatingTest } from './components/StarRatingTest';
import { BackToTop } from './components/BackToTopButton';
import { currencyLogger } from './utils/currencyLogger';
import api, { likeProduct as apiLikeProduct, unlikeProduct as apiUnlikeProduct } from './services/api';

// Styled Components
const AppContainer = styled.div<{ $isRTL?: boolean }>`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, #FF4081, #9333EA);
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  direction: ${props => props.$isRTL ? 'rtl' : 'ltr'};
`;

const MainContent = styled.div`
  height: 100vh;
  overflow-y: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

const StatusBar = styled.div`
  position: fixed;
  bottom: 16px;
  left: 16px;
  z-index: 40;
  font-size: 12px;
  color: #ffffff;
  font-family: 'Courier New', monospace;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

// Inner App Component (uses useTranslation)
function AppContent() {
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);
  const [showComprehensiveSearch, setShowComprehensiveSearch] = useState(false);
  const [showCurrencyDebug, setShowCurrencyDebug] = useState(false);
  const [showApiTest, setShowApiTest] = useState(false);
  const [showProductDebug, setShowProductDebug] = useState(false);
  const [showStarTest, setShowStarTest] = useState(false);
  const [searchCategories] = useState([
    'Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Beauty', 'Automotive'
  ]);

  // Hooks
  const { stats } = useStats();
  const { currentTheme } = useTheme();
  const { currentCurrency } = useCurrency();
  const { searchParams, setSearchParams } = useSearchParams();
  const { likedProducts: oldLikedProducts, checkLikeStatus, checkBatchLikeStatus, updateLikeStatus } = useLikeStatus();
  const { products, loading, loadingMore, hasMore, setProducts } = useProductCards(searchParams);
  const { t, isRTL, textDirection } = useTranslation();
  
  // Separate state for liked products (independent of customTitle)
  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set());
  
  // State for selected categories per product (default: 'other')
  const [productCategories, setProductCategories] = useState<Map<string, string>>(new Map());

  // Track previous products length to detect new product loads (not title changes)
  const prevProductsLengthRef = useRef<number>(0);
  const prevProductIdsRef = useRef<Set<string>>(new Set());

  // Initialize liked products from products with customTitle
  // Only when new products are loaded, not when customTitle changes
  useEffect(() => {
    const currentProductIds = new Set(products.map(p => p.id));
    const productsLengthChanged = products.length !== prevProductsLengthRef.current;
    const productIdsChanged = 
      currentProductIds.size !== prevProductIdsRef.current.size ||
      Array.from(currentProductIds).some(id => !prevProductIdsRef.current.has(id));

    // Only update liked products if new products were loaded (not just title changes)
    if (productsLengthChanged || productIdsChanged) {
      const likedIds = new Set<string>();
      const categoriesMap = new Map<string, string>();
      
      products.forEach(product => {
        // If product is saved in database (isSavedInDb flag), it means it's liked
        // OR if product has customTitle from database, it means it's liked
        if (product.isSavedInDb === true || (product.customTitle != null && product.customTitle !== null && product.customTitle.trim() !== '')) {
          likedIds.add(product.id);
        }
        
        // If product has saved_product_category from database, use it
        // This means the product exists in database (even if custom_title is null)
        if (product.savedProductCategory) {
          categoriesMap.set(product.id, product.savedProductCategory);
        }
      });
      
      setLikedProducts(likedIds);
      // Update product categories from database
      setProductCategories(prev => {
        const newMap = new Map(prev);
        categoriesMap.forEach((category, productId) => {
          newMap.set(productId, category);
        });
        return newMap;
      });
      
      // Update refs
      prevProductsLengthRef.current = products.length;
      prevProductIdsRef.current = currentProductIds;
    }
  }, [products]);

  // Handle advanced search
  const handleAdvancedSearch = (searchData: {
    productQuery: string;
    categoryQuery: string;
    hasVideo: boolean;
    minPrice?: number;
    maxPrice?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) => {
    // Combine product query and category query
    const combinedQuery = [searchData.productQuery, searchData.categoryQuery]
      .filter(Boolean)
      .join(' ');
    
    // Map sortBy to backend format
    const mapSortBy = (sortBy?: string, sortOrder?: 'asc' | 'desc') => {
      if (!sortBy) return 'volume_desc';
      
      const order = sortOrder === 'asc' ? 'asc' : 'desc';
      switch (sortBy) {
        case 'price': return `price_${order}`;
        case 'rating': return `rating_${order}`;
        case 'discount': return `discount_${order}`;
        case 'newest': return `newest_${order}`;
        default: return 'volume_desc';
      }
    };
    
    
    setSearchParams(prev => ({
      ...prev,
      query: combinedQuery,
      category: searchData.categoryQuery || undefined,
      hasVideo: searchData.hasVideo || undefined,
      minPrice: searchData.minPrice || 0,
      maxPrice: searchData.maxPrice || 1000000,
      sortBy: mapSortBy(searchData.sortBy, searchData.sortOrder),
      sortOrder: searchData.sortOrder || 'desc',
      page: 1,
      target_currency: currentCurrency?.code || 'USD' // Ensure currency is included
    }));
    
    setShowSearchOverlay(false);
  };

  // Handle comprehensive search
  const handleComprehensiveSearch = (searchData: {
    query: string;
    minPrice: number;
    maxPrice: number;
    sortBy: string;
    onlyWithVideo: boolean;
    targetCurrency: string;
  }) => {
    
    // Parse sortBy to extract sortOrder
    const [sortType, sortOrder] = searchData.sortBy.split('_');
    const validSortOrder: 'asc' | 'desc' = (sortOrder === 'desc') ? 'desc' : 'asc';
    
    const newSearchParams = {
      query: searchData.query || 'all',
      hasVideo: searchData.onlyWithVideo || undefined,
      minPrice: searchData.minPrice,
      maxPrice: searchData.maxPrice,
      sortBy: searchData.sortBy,
      sortOrder: validSortOrder,
      page: 1,
      target_currency: currentCurrency?.code || searchData.targetCurrency
    };
    
    // Force update search params
    setSearchParams(newSearchParams);
    
    setShowComprehensiveSearch(false);
  };

  // Like/Unlike functions
  const likeProduct = async (productId: string, customTitle: string, selectedCategory: string = 'other') => {
    try {
      // Find the product to get all required data
      let product = products.find(p => p.id === productId);
      
      // If product not found in current products list, try to fetch it from API
      if (!product) {
        console.warn('⚠️ [LIKE] Product not found in current list, fetching from API:', productId);
        try {
          const response = await api.get(`/api/search/comprehensive`, {
            params: {
              q: productId,
              page: 1,
              pageSize: 1
            }
          });
          
          if (response.data.success && response.data.items && response.data.items.length > 0) {
            const apiProduct = response.data.items[0];
            product = {
              id: apiProduct.product_id?.toString() || productId,
              title: apiProduct.product_title || '',
              price: apiProduct.sale_price || 0,
              currency: apiProduct.sale_price_currency || 'USD',
              image: apiProduct.product_main_image_url || '',
              rating: apiProduct.product_score_stars || 0,
              reviewCount: apiProduct.lastest_volume || 0,
              productDetailUrl: apiProduct.product_detail_url || apiProduct.promotion_link || '',
              url: apiProduct.promotion_link || apiProduct.product_detail_url || '',
              video: apiProduct.video_link || apiProduct.product_video_url || undefined
            } as Product;
          }
        } catch (fetchError) {
          console.error('❌ [LIKE] Failed to fetch product from API:', fetchError);
        }
      }
      
      // If still no product found, use minimal data
      if (!product) {
        console.error('❌ [LIKE] Product not found and could not fetch from API:', productId);
        // Still try to save with minimal data
        const productData = {
          product_id: productId,
          product_title: customTitle || 'Product',
          promotion_link: '',
          product_category: selectedCategory || 'other',
          custom_title: customTitle ? customTitle : undefined,
          has_video: false
        };
        
        const response = await apiLikeProduct(productData);
        if (response && response.success) {
          setLikedProducts(prev => new Set(prev).add(productId));
          setProductCategories(prev => new Map(prev).set(productId, selectedCategory || 'other'));
          console.log('✅ [LIKE] Product liked successfully with minimal data:', productId);
        }
        return;
      }

      // Prepare product data for database
      // Use selected category instead of product.firstLevelCategoryName
      const productData = {
        product_id: product.id,
        product_title: product.title || customTitle || 'Product',
        promotion_link: product.productDetailUrl || product.url || '',
        product_category: selectedCategory || 'other', // Use selected category instead of JSON data
        custom_title: customTitle ? customTitle : undefined, // Custom title (modified or original) - convert null to undefined
        has_video: !!(product.video)
      };


      console.log('🌐 [API REQUEST] POST /api/like', productData);
      
      // Use api.ts service instead of direct fetch
      const response = await apiLikeProduct(productData);

      if (response && response.success) {
        // Update local state to reflect the liked status
        setProducts(prevProducts => 
          prevProducts.map(p => 
            p.id === productId 
              ? { ...p, customTitle: customTitle }
              : p
          )
        );
        // Add to liked products set
        setLikedProducts(prev => new Set(prev).add(productId));
        console.log('✅ [LIKE] Product liked successfully:', productId);
      } else {
        console.error('❌ [LIKE] Failed to save product:', response?.message || 'Unknown error');
      }
    } catch (error) {
      console.error('❌ [LIKE] Error saving product:', error);
    }
  };

  const unlikeProduct = async (productId: string) => {
    try {

      console.log('🌐 [API REQUEST] DELETE /api/like/' + productId);
      
      // Use api.ts service instead of direct fetch
      const response = await apiUnlikeProduct(productId);

      if (response && response.success) {
        // Update local state to reflect the unliked status
        setProducts(prevProducts => 
          prevProducts.map(p => 
            p.id === productId 
              ? { ...p, customTitle: null }
              : p
          )
        );
        // Remove from liked products set
        setLikedProducts(prev => {
          const newSet = new Set(prev);
          newSet.delete(productId);
          return newSet;
        });
        console.log('✅ [UNLIKE] Product unliked successfully:', productId);
      } else {
        console.error('❌ [UNLIKE] Failed to remove product:', response?.message || 'Unknown error');
      }
    } catch (error) {
      console.error('❌ [UNLIKE] Error removing product:', error);
    }
  };

  // Check if product is liked
  const isProductLiked = (productId: string) => {
    return likedProducts.has(productId);
  };

  // Handle like action
  const handleLike = async (productId: string, selectedCategory?: string) => {
    try {
      // Check if product is currently liked using our separate state
      const isCurrentlyLiked = likedProducts.has(productId);
      
      if (isCurrentlyLiked) {
        // Unlike: remove from liked products and set custom_title to null
        await unlikeProduct(productId);
        setLikedProducts(prev => {
          const newSet = new Set(prev);
          newSet.delete(productId);
          return newSet;
        });
        // Remove category from state
        setProductCategories(prev => {
          const newMap = new Map(prev);
          newMap.delete(productId);
          return newMap;
        });
        updateLikeStatus(productId, false);
      } else {
        // Like: add to liked products and set custom_title to current displayed title
        const product = products.find(p => p.id === productId);
        const currentDisplayedTitle = product?.customTitle || product?.title || 'Liked Product';
        // Use selected category or default to 'other'
        const category = selectedCategory || productCategories.get(productId) || 'other';
        await likeProduct(productId, currentDisplayedTitle, category);
        setLikedProducts(prev => new Set(prev).add(productId));
        // Save selected category
        setProductCategories(prev => new Map(prev).set(productId, category));
        updateLikeStatus(productId, true);
      }
    } catch (error) {
      console.error('Error toggling like status:', error);
    }
  };
  
  // Handle category change
  const handleCategoryChange = async (productId: string, newCategory: string) => {
    try {
      // Update category in state
      setProductCategories(prev => new Map(prev).set(productId, newCategory));
      
      // Check if product exists in database (either by isSavedInDb flag or by checking likedProducts)
      const product = products.find(p => p.id === productId);
      const isInDatabase = product?.isSavedInDb === true || likedProducts.has(productId);
      
      // If product exists in database, update category in database
      if (isInDatabase) {
        console.log(`🔄 [CATEGORY CHANGE] Updating category for product ${productId} in database: ${newCategory}`);
        
        // Get product data to update
        let productData;
        if (product) {
          productData = {
            product_id: product.id,
            product_title: product.title || '',
            promotion_link: product.productDetailUrl || product.url || '',
            product_category: newCategory,
            custom_title: product.customTitle || null,
            has_video: !!(product.video)
          };
        } else {
          // If product not in current list, fetch it from API
          try {
            const response = await api.get(`/api/search/comprehensive`, {
              params: {
                q: productId,
                page: 1,
                pageSize: 1
              }
            });
            
            if (response.data.success && response.data.items && response.data.items.length > 0) {
              const apiProduct = response.data.items[0];
              productData = {
                product_id: productId,
                product_title: apiProduct.product_title || '',
                promotion_link: apiProduct.product_detail_url || apiProduct.promotion_link || '',
                product_category: newCategory,
                custom_title: apiProduct.custom_title || null,
                has_video: !!(apiProduct.video_link || apiProduct.product_video_url)
              };
            }
          } catch (fetchError) {
            console.error('❌ [CATEGORY CHANGE] Failed to fetch product from API:', fetchError);
            // Still try to update with minimal data
            productData = {
              product_id: productId,
              product_title: 'Product',
              promotion_link: '',
              product_category: newCategory,
              custom_title: null,
              has_video: false
            };
          }
        }
        
        if (productData) {
          // Update product in database using likeProduct API (which does INSERT or UPDATE)
          const response = await apiLikeProduct(productData);
          if (response && response.success) {
            console.log(`✅ [CATEGORY CHANGE] Category updated successfully for product ${productId}`);
          } else {
            console.error('❌ [CATEGORY CHANGE] Failed to update category:', response?.message || 'Unknown error');
          }
        }
      } else {
        console.log(`ℹ️ [CATEGORY CHANGE] Product ${productId} not in database, category saved in state only`);
      }
    } catch (error) {
      console.error('❌ [CATEGORY CHANGE] Error updating category:', error);
    }
  };

  // Handle title change
  const handleTitleChange = async (productId: string, newTitle: string) => {
    try {
      // Update the product title in the local state only
      // Do not save to database automatically
      setProducts(prevProducts => 
        prevProducts.map(product => 
          product.id === productId 
            ? { ...product, customTitle: newTitle }
            : product
        )
      );
    } catch (error) {
      console.error('Error updating product title:', error);
    }
  };

  // Handle share action
  const handleShare = (product: Product) => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: `Check out this product: ${product.title}`,
        url: product.url
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(product.url);
    }
  };

  // Handle buy action
  const handleBuy = (product: Product) => {
    window.open(product.url, '_blank');
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        e.preventDefault();
        setShowCurrencyDebug(prev => !prev);
      }
      if (e.ctrlKey && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        setShowApiTest(prev => !prev);
      }
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setShowProductDebug(prev => !prev);
      }
      if (e.ctrlKey && e.shiftKey && e.key === 'S') {
        e.preventDefault();
        setShowStarTest(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Listen for custom events to toggle panels
  useEffect(() => {
    const handleToggleDebug = (e: CustomEvent) => {
      setShowCurrencyDebug(e.detail.show);
    };

    const handleToggleApiTest = (e: CustomEvent) => {
      setShowApiTest(e.detail.show);
    };

    window.addEventListener('toggleCurrencyDebug', handleToggleDebug as EventListener);
    window.addEventListener('toggleApiTest', handleToggleApiTest as EventListener);
    
    return () => {
      window.removeEventListener('toggleCurrencyDebug', handleToggleDebug as EventListener);
      window.removeEventListener('toggleApiTest', handleToggleApiTest as EventListener);
    };
  }, []);


  return (
    <AppContainer $isRTL={isRTL}>
      {/* Header Bar */}
      <HeaderBar 
        onSearchClick={() => setShowComprehensiveSearch(true)}
        onCurrencyChange={(currencyCode) => {
          setSearchParams(prev => ({
            ...prev,
            target_currency: currencyCode,
            page: 1 // Reset to first page when currency changes
          }));
        }}
        onLanguageChange={(languageCode) => {
          // TODO: Implement language change logic
        }}
      />
      
      {/* Main Content */}
      <MainContent data-scroll-container>
        {/* Search Manager - Handles all product display and search logic */}
        <SearchManager
          onLike={handleLike}
          onShare={handleShare}
          onBuy={handleBuy}
          onTitleChange={handleTitleChange}
          onCategoryChange={handleCategoryChange}
          isLiked={isProductLiked}
          likedProducts={likedProducts}
          productCategories={productCategories}
          showDebug={showProductDebug}
          searchParams={searchParams}
        />
      </MainContent>

      {/* Comprehensive Search Page */}
      <ComprehensiveSearchPage
        isOpen={showComprehensiveSearch}
        onClose={() => setShowComprehensiveSearch(false)}
        onSearch={handleComprehensiveSearch}
      />

      {/* Advanced Search Modal */}
      <AdvancedSearchModal
        isOpen={showSearchOverlay}
        onClose={() => setShowSearchOverlay(false)}
        onSearch={handleAdvancedSearch}
        searchCategories={searchCategories}
        currentSearchQuery={searchParams.query}
        currentHasVideo={searchParams.hasVideo}
        currentCategory={searchParams.category}
        currentMinPrice={searchParams.minPrice}
        currentMaxPrice={searchParams.maxPrice}
        currentSortBy={searchParams.sortBy}
        currentSortOrder={searchParams.sortOrder}
      />

      {/* Currency Debug Panel */}
      {showCurrencyDebug && (
        <CurrencyDebugPanel
          isVisible={showCurrencyDebug}
        />
      )}

      {/* API Test Panel */}
      {showApiTest && (
        <ApiTestPanel
          isVisible={showApiTest}
        />
      )}

      {/* Star Rating Test Panel */}
      {showStarTest && (
        <StarRatingTest
          isVisible={showStarTest}
        />
      )}

      {/* Status Bar - Bottom Left */}
        <StatusBar>
          <span>V2025.0.1.9.3</span>
        </StatusBar>

      {/* Back to Top Button - Bottom Right */}
      <BackToTop />
    </AppContainer>
  );
}

// Main App Component (provides LanguageProvider)
function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
