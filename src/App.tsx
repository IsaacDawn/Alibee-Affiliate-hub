import React, { useState, useEffect } from 'react';
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
import { likeProduct, unlikeProduct } from './services/api';

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

  // Initialize liked products from products with customTitle
  useEffect(() => {
    const likedIds = new Set<string>();
    products.forEach(product => {
      if (product.customTitle != null && product.customTitle !== null && product.customTitle.trim() !== '') {
        likedIds.add(product.id);
      }
    });
    setLikedProducts(likedIds);
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
  const likeProduct = async (productId: string, customTitle: string) => {
    try {
      // Find the product to get all required data
      const product = products.find(p => p.id === productId);
      if (!product) {
        console.error('❌ [LIKE] Product not found:', productId);
        return;
      }

      // Prepare product data for database
      const productData = {
        product_id: product.id,
        product_title: product.title,
        promotion_link: product.productDetailUrl || product.url,
        product_category: product.firstLevelCategoryName || product.category || 'General',
        custom_title: customTitle, // عنوان دلخواه (تغییر یافته یا اصلی)
        has_video: !!(product.video)
      };


      console.log('🌐 [API REQUEST] POST /api/save', productData);
      
      // API call to save product
      const response = await fetch('https://alibee-affiliate-api.onrender.com/api/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData)
      });

      if (response.ok) {
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
      } else {
        console.error('❌ [LIKE] Failed to save product:', response.statusText);
      }
    } catch (error) {
      console.error('❌ [LIKE] Error saving product:', error);
    }
  };

  const unlikeProduct = async (productId: string) => {
    try {

      console.log('🌐 [API REQUEST] DELETE /api/save/' + productId);
      
      // API call to remove product
      const response = await fetch(`https://alibee-affiliate-api.onrender.com/api/save/${productId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
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
      } else {
        console.error('❌ [UNLIKE] Failed to remove product:', response.statusText);
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
  const handleLike = async (productId: string) => {
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
        updateLikeStatus(productId, false);
      } else {
        // Like: add to liked products and set custom_title to current displayed title
        const product = products.find(p => p.id === productId);
        const currentDisplayedTitle = product?.customTitle || product?.title || 'Liked Product';
        await likeProduct(productId, currentDisplayedTitle);
        setLikedProducts(prev => new Set(prev).add(productId));
        updateLikeStatus(productId, true);
      }
    } catch (error) {
      console.error('Error toggling like status:', error);
    }
  };

  // Handle title change
  const handleTitleChange = async (productId: string, newTitle: string) => {
    try {
      // Update the product title in the local state
      setProducts(prevProducts => 
        prevProducts.map(product => 
          product.id === productId 
            ? { ...product, customTitle: newTitle }
            : product
        )
      );
      
      // Check if product is liked using our separate state
      const isLiked = likedProducts.has(productId);
      
      if (isLiked) {
        // If product is liked, update custom_title in database
        
        console.log('🌐 [API REQUEST] PUT /api/save/' + productId + '/title', { title: newTitle });
        
        const response = await fetch(`https://alibee-affiliate-api.onrender.com/api/save/${productId}/title`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title: newTitle })
        });

        if (response.ok) {
        } else {
          console.error('❌ [TITLE CHANGE] Failed to update product title in database:', response.statusText);
        }
      } else {
      }
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
          isLiked={isProductLiked}
          likedProducts={likedProducts}
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
        <span>V2025.0.1.8.6</span>
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
