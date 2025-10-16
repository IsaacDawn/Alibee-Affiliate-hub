import { useState, useEffect, useCallback } from 'react';
import { getLikeStatus, getBatchLikeStatus } from '../services/api';

interface UseLikeStatusReturn {
  likedProducts: Set<string>;
  isLoading: boolean;
  checkLikeStatus: (productId: string) => Promise<boolean>;
  checkBatchLikeStatus: (productIds: string[]) => Promise<void>;
  updateLikeStatus: (productId: string, isLiked: boolean) => void;
}

export const useLikeStatus = (): UseLikeStatusReturn => {
  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(false);

  // Check like status for a single product
  const checkLikeStatus = useCallback(async (productId: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      const response = await getLikeStatus(productId);
      
      if (response.success) {
        const isLiked = response.is_liked;
        
        // Update local state
        setLikedProducts(prev => {
          const newSet = new Set(prev);
          if (isLiked) {
            newSet.add(productId);
          } else {
            newSet.delete(productId);
          }
          return newSet;
        });
        
        return isLiked;
      }
      
      return false;
    } catch (error) {
      console.error('Error checking like status:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Check like status for multiple products
  const checkBatchLikeStatus = useCallback(async (productIds: string[]): Promise<void> => {
    if (productIds.length === 0) return;
    
    try {
      setIsLoading(true);
      const response = await getBatchLikeStatus(productIds);
      
      if (response.success && response.liked_products) {
        const newLikedSet = new Set<string>();
        
        Object.entries(response.liked_products).forEach(([productId, isLiked]) => {
          if (isLiked) {
            newLikedSet.add(productId);
          }
        });
        
        setLikedProducts(prev => {
          const updatedSet = new Set(prev);
          productIds.forEach(productId => {
            if (newLikedSet.has(productId)) {
              updatedSet.add(productId);
            } else {
              updatedSet.delete(productId);
            }
          });
          return updatedSet;
        });
      }
    } catch (error) {
      console.error('Error checking batch like status:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Update like status locally (for immediate UI feedback)
  const updateLikeStatus = useCallback((productId: string, isLiked: boolean) => {
    setLikedProducts(prev => {
      const newSet = new Set(prev);
      if (isLiked) {
        newSet.add(productId);
      } else {
        newSet.delete(productId);
      }
      return newSet;
    });
  }, []);

  return {
    likedProducts,
    isLoading,
    checkLikeStatus,
    checkBatchLikeStatus,
    updateLikeStatus
  };
};
