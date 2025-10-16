import React, { useEffect, useState, useRef } from 'react';
import { ProductGrid } from './ProductGrid';
import { useProductCards } from '../hooks/useProductCards';
import { useSearchParams } from '../hooks/useSearchParams';
import { useCurrency } from '../hooks/useCurrency';
import type { Product } from '../types';

interface SearchManagerProps {
  onLike?: (productId: string) => void;
  onShare?: (product: Product) => void;
  onBuy?: (product: Product) => void;
  onTitleChange?: (productId: string, newTitle: string) => void;
  isLiked?: (productId: string) => boolean;
  likedProducts?: Set<string>;
  showDebug?: boolean;
  searchParams: any;
}

export const SearchManager: React.FC<SearchManagerProps> = ({
  onLike,
  onShare,
  onBuy,
  onTitleChange,
  isLiked,
  likedProducts = new Set(),
  showDebug = false,
  searchParams
}) => {
  const { currentCurrency } = useCurrency();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const startY = useRef<number>(0);
  const isPulling = useRef<boolean>(false);

  const {
    products,
    loading,
    loadingMore,
    error,
    hasMore,
    loadMoreProducts,
    clearProducts,
    fetchProducts
  } = useProductCards(searchParams);

  // Track which product is currently visible in viewport
  useEffect(() => {
    if (products.length === 0) return;

    const productElements = document.querySelectorAll('[data-product-index]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const productIndex = parseInt(entry.target.getAttribute('data-product-index') || '1');
            const productId = entry.target.getAttribute('data-product-id');
            setCurrentProductIndex(productIndex);
            console.log(`👀 [SCROLL TO PRODUCT] Product ${productIndex}: ID ${productId}`);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the product is visible
        rootMargin: '-20% 0px -20% 0px' // Only trigger when product is in center of viewport
      }
    );

    productElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [products]);

  // Pull to refresh functionality - only when on product 1
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      // Only allow pull-to-refresh if we're on product 1
      if (currentProductIndex === 1) {
        startY.current = e.touches[0].clientY;
        isPulling.current = true;
        console.log('🔄 [PULL TO REFRESH] Touch started on Product 1');
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isPulling.current || currentProductIndex !== 1) return;

      const currentY = e.touches[0].clientY;
      const distance = currentY - startY.current;

      // Only allow downward pull (positive distance)
      if (distance > 0) {
        e.preventDefault();
        setPullDistance(Math.min(distance, 100));
        console.log('🔄 [PULL TO REFRESH] Pulling distance:', distance);
      }
    };

    const handleTouchEnd = async () => {
      if (!isPulling.current || currentProductIndex !== 1) return;

      isPulling.current = false;
      
      console.log('🔄 [PULL TO REFRESH] Touch end - pullDistance:', pullDistance);
      
      if (pullDistance > 50) {
        setIsRefreshing(true);
        console.log('🔄 [PULL TO REFRESH] Refreshing from Product 1...');
        
        // Clear products and reload
        clearProducts();
        
        // Fetch new products
        try {
          await fetchProducts();
        } catch (error) {
          console.error('Error refreshing products:', error);
        }
        
        // Reset UI
        setTimeout(() => {
          setIsRefreshing(false);
          setPullDistance(0);
        }, 500);
      } else {
        setPullDistance(0);
      }
    };

    // Add event listeners
    const container = containerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleTouchStart, { passive: true });
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
      container.addEventListener('touchend', handleTouchEnd, { passive: true });

      return () => {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [currentProductIndex, pullDistance, clearProducts, fetchProducts]);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center bg-black bg-opacity-40 backdrop-blur-lg border border-white border-opacity-20 rounded-xl p-8 shadow-lg">
          <div className="text-red-400 text-6xl mb-4">⚠️</div>
          <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-lg">Error loading products</h3>
          <p className="text-white text-opacity-80 drop-shadow-lg">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="w-full relative"
      style={{
        transform: `translateY(${pullDistance}px)`,
        transition: isRefreshing ? 'none' : 'transform 0.3s ease-out'
      }}
    >
      {/* Pull to refresh indicator - only show when on product 1 */}
      {currentProductIndex === 1 && pullDistance > 0 && (
        <div 
          className="absolute top-0 left-0 right-0 flex items-center justify-center bg-blue-50 text-blue-600 py-4 z-10"
          style={{ 
            height: `${Math.min(pullDistance, 100)}px`,
            transform: `translateY(-${Math.min(pullDistance, 100)}px)`
          }}
        >
          {pullDistance > 50 ? (
            <div className="flex items-center gap-2">
              <div className="animate-spin w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full"></div>
              <span className="text-sm font-medium">Release to refresh</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full"></div>
              <span className="text-sm">Pull to refresh</span>
            </div>
          )}
        </div>
      )}

      {/* Loading indicator for refresh */}
      {isRefreshing && (
        <div className="absolute top-0 left-0 right-0 flex items-center justify-center bg-blue-50 text-blue-600 py-4 z-10">
          <div className="flex items-center gap-2">
            <div className="animate-spin w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full"></div>
            <span className="text-sm font-medium">Refreshing...</span>
          </div>
        </div>
      )}

      <ProductGrid
        products={products}
        loading={loading}
        loadingMore={loadingMore}
        hasMore={hasMore}
        onLoadMore={loadMoreProducts}
        onLike={onLike}
        onShare={onShare}
        onBuy={onBuy}
        onTitleChange={onTitleChange}
        isLiked={isLiked}
        showDebug={showDebug}
      />
    </div>
  );
};