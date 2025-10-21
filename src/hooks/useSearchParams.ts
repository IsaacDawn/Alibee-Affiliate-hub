import { useState, useEffect, useCallback } from 'react';
import type { SearchParams as BaseSearchParams } from '../types';

// Extended SearchParams that allows any string for sortBy and includes target_currency
export interface SearchParams extends Omit<BaseSearchParams, 'sortBy'> {
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  target_currency?: string;
}

const STORAGE_KEY = 'alibee_search_params';

const defaultSearchParams: SearchParams = {
  query: 'general',
  page: 1,
  limit: 150,
  hasVideo: undefined,
  minPrice: 0,
  maxPrice: 150000,
  sortBy: 'price_acs',
  sortOrder: 'desc',
  category: undefined,
  target_currency: 'USD',
};

export const useSearchParams = () => {
  const [searchParams, setSearchParamsState] = useState<SearchParams>(defaultSearchParams);

  // Load search params from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsedParams = JSON.parse(saved);
        // Merge with defaults to ensure all properties exist
        const mergedParams = { ...defaultSearchParams, ...parsedParams };
        setSearchParamsState(mergedParams);
        console.log('📱 [SEARCH PARAMS] Loaded from localStorage:', mergedParams);
      }
    } catch (error) {
      console.error('Error loading search params from localStorage:', error);
    }
  }, []);

  // Save search params to localStorage whenever they change
  const setSearchParams = useCallback((newParams: SearchParams | ((prev: SearchParams) => SearchParams)) => {
    setSearchParamsState(prev => {
      const updated = typeof newParams === 'function' ? newParams(prev) : newParams;
      
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (error) {
        console.error('Error saving search params to localStorage:', error);
      }
      
      return updated;
    });
  }, []);

  // Clear search params (useful for reset functionality)
  const clearSearchParams = useCallback(() => {
    setSearchParamsState(defaultSearchParams);
    try {
      localStorage.removeItem(STORAGE_KEY);
      console.log('🗑️ [SEARCH PARAMS] Cleared from localStorage');
    } catch (error) {
      console.error('Error clearing search params from localStorage:', error);
    }
  }, []);

  return {
    searchParams,
    setSearchParams,
    clearSearchParams,
  };
};
