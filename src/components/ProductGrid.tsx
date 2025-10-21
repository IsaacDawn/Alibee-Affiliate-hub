import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ProductCardNew } from './ProductCardNew';
import type { Product } from '../types';
import { useTranslation } from '../utils/dictionary';

// Styled Components
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0;
  gap: 0;
  width: 100%;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 18px;
  padding: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  font-weight: 500;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff6b6b;
  font-size: 18px;
  text-align: center;
  padding: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  font-weight: 500;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #ffffff;
  text-align: center;
  padding: 40px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

const EmptyStateTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  color: #fff;
`;

const EmptyStateText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  max-width: 400px;
`;

const ProductWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  padding: 60px 0 60px 0;
  box-sizing: border-box;
`;

interface ProductGridProps {
  products: Product[];
  loading: boolean;
  loadingMore: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
  onLike?: (productId: string) => void;
  onShare?: (product: Product) => void;
  onBuy?: (product: Product) => void;
  onTitleChange?: (productId: string, newTitle: string) => void;
  isLiked?: (productId: string) => boolean;
  error?: string | null;
  showDebug?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  loading,
  loadingMore,
  hasMore,
  onLoadMore,
  onLike,
  onShare,
  onBuy,
  onTitleChange,
  isLiked,
  error,
  showDebug = false
}) => {
  const { t } = useTranslation();
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (!hasMore || loadingMore || products.length === 0) {
      return;
    }

    // Get the main scroll container
    const mainContent = document.querySelector('[data-scroll-container]') as HTMLElement;
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          onLoadMore();
        }
      },
      {
        root: mainContent, // Use main content as scroll container
        rootMargin: '200px', // Start loading when 200px before reaching the last product
        threshold: 0.1
      }
    );

    // Wait for DOM to be ready, then observe the last 2 products
    const observeLastProducts = () => {
      const lastProducts = document.querySelectorAll('[data-product-index]');
      if (lastProducts.length >= 2) {
        const lastTwoProducts = Array.from(lastProducts).slice(-2);
        
        lastTwoProducts.forEach(product => {
          if (observerRef.current) {
            observerRef.current.observe(product);
          }
        });
      }
    };

    // Try immediately and also after a short delay
    observeLastProducts();
    setTimeout(observeLastProducts, 100);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasMore, loadingMore, onLoadMore, products.length]);

  // Handle product visibility (for debugging)
  const handleProductVisibility = (index: number) => {
    // Auto loading is now handled by IntersectionObserver
  };

  if (loading || (products.length === 0 && !error)) {
    return (
      <LoadingContainer>
        <div className="loading">⏳</div>
        <span style={{ marginLeft: '10px' }}>{t('loadingProducts')}</span>
      </LoadingContainer>
    );
  }

  if (error && products.length === 0) {
    return (
      <ErrorContainer>
        <div>
          <h3>Error loading products</h3>
          <p>{error}</p>
        </div>
      </ErrorContainer>
    );
  }

  if (products.length === 0 && !loading && !error) {
    return (
      <EmptyState>
        <EmptyStateTitle>No products found</EmptyStateTitle>
        <EmptyStateText>
          Try changing filters or searching for new products to discover more
        </EmptyStateText>
      </EmptyState>
    );
  }

  return (
    <ProductContainer>
      {products.map((product, index) => (
        <ProductWrapper
          key={`${product.id}-${index}`}
          data-product-index={index + 1}
          data-product-id={product.id}
          onMouseEnter={() => {
            handleProductVisibility(index);
          }}
          className="fade-in"
        >
          <ProductCardNew
            product={{
              ...product,
              onTitleChange: onTitleChange
            }}
            onLike={onLike}
            onShare={onShare}
            onBuy={onBuy}
            isLiked={isLiked?.(product.id)}
            showDebug={showDebug}
          />
        </ProductWrapper>
      ))}
      
      {loadingMore && (
        <LoadingContainer>
          <div className="loading">⏳</div>
          <span style={{ marginLeft: '10px' }}>{t('loading')}</span>
        </LoadingContainer>
      )}
      
    </ProductContainer>
  );
};

export default ProductGrid;
export { ProductGrid };