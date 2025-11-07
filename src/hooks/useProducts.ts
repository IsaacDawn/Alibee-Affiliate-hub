import { useState, useEffect, useCallback, useRef } from 'react';
import api, { getProductById } from '../services/api';
import type { Product } from '../types';
import type { SearchParams } from './useSearchParams';

// Function to map API response to frontend Product interface (for /api/products)
const mapApiProductToProduct = (apiProduct: any): Product => {
  // Extract images array from various possible fields
  // Handle both array format and object format with "string" key
  // Priority: product_small_image_urls > images_link > images
  let images = [];
  if (apiProduct.product_small_image_urls) {
    if (Array.isArray(apiProduct.product_small_image_urls)) {
      images = apiProduct.product_small_image_urls;
    } else if (apiProduct.product_small_image_urls.string && Array.isArray(apiProduct.product_small_image_urls.string)) {
      images = apiProduct.product_small_image_urls.string;
    }
  } else if (apiProduct.images_link) {
    if (Array.isArray(apiProduct.images_link)) {
      images = apiProduct.images_link;
    } else if (apiProduct.images_link.string && Array.isArray(apiProduct.images_link.string)) {
      images = apiProduct.images_link.string;
    }
  } else if (apiProduct.images) {
    if (Array.isArray(apiProduct.images)) {
      images = apiProduct.images;
    }
  }
  
  
  // Extract video link if available
  const video = apiProduct.video_link || apiProduct.video || null;
  
  const mappedProduct = {
    id: apiProduct.product_id?.toString() || '',
    // If custom_title exists in database, use it instead of product_title
    title: apiProduct.custom_title || apiProduct.product_title || '',
    price: apiProduct.sale_price || 0,
    originalPrice: apiProduct.original_price || undefined,
    currency: apiProduct.sale_price_currency || apiProduct.original_currency || 'USD',
    originalCurrency: apiProduct.original_currency || apiProduct.sale_price_currency || 'USD',
    originalPriceCurrency: apiProduct.original_price_currency || apiProduct.original_price_currency,
    // Target currency fields (converted prices)
    priceTarget: apiProduct.sale_price_target || undefined,
    originalPriceTarget: apiProduct.original_price_target || undefined,
    currencyTarget: apiProduct.sale_price_currency_target || undefined,
    originalCurrencyTarget: apiProduct.original_price_currency_target || undefined,
    image: apiProduct.product_main_image_url || '',
    images: Array.isArray(images) ? images.filter(img => img && img.trim() !== '') : [],
    video: video && video.trim() !== '' ? video : undefined,
    rating: apiProduct.rating_weighted || 0,
    reviewCount: apiProduct.lastest_volume || 0,
    url: apiProduct.promotion_link || apiProduct.product_detail_url || '',
    category: apiProduct.product_category || apiProduct.first_level_category_name || '',
    discount: apiProduct.discount_percentage || 0,
    commissionRate: apiProduct.commission_rate || 0,
    salesVolume: apiProduct.lastest_volume || 0,
    productId: apiProduct.product_id?.toString() || '',
    productDetailUrl: apiProduct.product_detail_url || '',
    discountPercentage: apiProduct.discount_percentage || 0,
    productScoreStars: apiProduct.product_score_stars || 0,
    firstLevelCategoryName: apiProduct.first_level_category_name || '',
    secondLevelCategoryName: apiProduct.second_level_category_name || '',
    // productCategory from JSON (final value - already overridden by backend if product exists in DB)
    // This is the final product_category value that should be used for normalization
    productCategory: apiProduct.product_category || '',
    customTitle: apiProduct.custom_title || undefined,
    // If product is saved in database (is_saved_in_db flag), use product_category as savedProductCategory
    // The product_category at this point is already from database (overridden by backend)
    savedProductCategory: (apiProduct.is_saved_in_db === true || apiProduct.is_saved_in_db === "true") ? (apiProduct.product_category || undefined) : undefined,
    // Flag to indicate if product is saved in database
    isSavedInDb: apiProduct.is_saved_in_db === true || apiProduct.is_saved_in_db === "true" || false
  };
  
  
  return mappedProduct;
};

// Function to map search API response to frontend Product interface (for /api/products/search)
const mapSearchProductToProduct = (searchProduct: any): Product => {
  // Extract images array from various possible fields
  // Handle both array format and object format with "string" key
  let images = [];
  if (searchProduct.images) {
    if (Array.isArray(searchProduct.images)) {
      images = searchProduct.images;
    } else if (searchProduct.images.string && Array.isArray(searchProduct.images.string)) {
      images = searchProduct.images.string;
    }
  } else if (searchProduct.images_link) {
    if (Array.isArray(searchProduct.images_link)) {
      images = searchProduct.images_link;
    } else if (searchProduct.images_link.string && Array.isArray(searchProduct.images_link.string)) {
      images = searchProduct.images_link.string;
    }
  } else if (searchProduct.product_small_image_urls) {
    if (Array.isArray(searchProduct.product_small_image_urls)) {
      images = searchProduct.product_small_image_urls;
    } else if (searchProduct.product_small_image_urls.string && Array.isArray(searchProduct.product_small_image_urls.string)) {
      images = searchProduct.product_small_image_urls.string;
    }
  }
  
  // Extract video link if available
  const video = searchProduct.video_link || searchProduct.video || null;
  
  return {
    id: searchProduct.id?.toString() || '',
    title: searchProduct.title || '',
    price: searchProduct.price || 0,
    originalPrice: searchProduct.originalPrice || undefined,
    currency: searchProduct.currency || 'USD',
    originalCurrency: searchProduct.originalCurrency || searchProduct.currency || 'USD',
    originalPriceCurrency: searchProduct.originalPriceCurrency || undefined,
    // Target currency fields (converted prices)
    priceTarget: searchProduct.priceTarget || searchProduct.sale_price_target || undefined,
    originalPriceTarget: searchProduct.originalPriceTarget || searchProduct.original_price_target || undefined,
    currencyTarget: searchProduct.currencyTarget || searchProduct.sale_price_currency_target || undefined,
    originalCurrencyTarget: searchProduct.originalCurrencyTarget || searchProduct.original_price_currency_target || undefined,
    image: searchProduct.image || '',
    images: Array.isArray(images) ? images.filter(img => img && img.trim() !== '') : [],
    video: video && video.trim() !== '' ? video : undefined,
    rating: searchProduct.rating || 0,
    reviewCount: searchProduct.reviewCount || 0,
    url: searchProduct.url || '',
    category: searchProduct.category || '',
    discount: searchProduct.discount || 0,
    commissionRate: searchProduct.commissionRate || 0,
    salesVolume: searchProduct.salesVolume || 0,
    productId: searchProduct.productId || searchProduct.id?.toString() || '',
    productDetailUrl: searchProduct.productDetailUrl || searchProduct.url || '',
    discountPercentage: searchProduct.discountPercentage || searchProduct.discount || 0,
    productScoreStars: searchProduct.productScoreStars || 0,
    firstLevelCategoryName: searchProduct.firstLevelCategoryName || '',
    secondLevelCategoryName: searchProduct.secondLevelCategoryName || '',
    productCategory: searchProduct.productCategory || searchProduct.category || '',
  };
};

// Function to check if search query is a product ID (numbers only)
const isProductId = (query: string): boolean => {
  if (!query || !query.trim()) return false;
  const trimmedQuery = query.trim();
  // Check if the query contains only numbers and is at least 10 digits long
  // Also ensure it's not too long (max 20 digits) to avoid false positives
  return /^\d{10,20}$/.test(trimmedQuery);
};

export const useProducts = (params: SearchParams) => {
  const [allProducts, setAllProducts] = useState<Product[]>([]); // All fetched products
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]); // Currently displayed products
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [displayedCount, setDisplayedCount] = useState(5); // Number of products to display
  const loadingTimeoutRef = useRef<number | null>(null);
  const isLoadingMoreRef = useRef(false);
  const hasTriggeredLoadRef = useRef(false);

  // Fetch initial products (150 products) using comprehensive search with q=all
  const fetchInitialProducts = async () => {
    if (loading) return;
    
    setLoading(true);
    setError(null);
    setIsInitialLoad(true);
    
    // Clear existing products immediately when starting new initial load
    setAllProducts([]);
    setDisplayedProducts([]);
    
    // Reset loading states and triggers for new load
    hasTriggeredLoadRef.current = false;
    isLoadingMoreRef.current = false;
    setDisplayedCount(5);
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
      loadingTimeoutRef.current = null;
    }

    try {
      const response = await api.get('/api/search/comprehensive', {
        params: {
          q: 'all',
          page: 1,
          pageSize: 150,
          target_currency: params.target_currency || 'USD',
          min_price: 0,
          max_price: 150000,
          only_with_video: 0,
          use_api: 'true'
        },
      });

      const apiProducts = response.data.items || [];
      
      // Debug: Check if is_saved_in_db exists in any product
      const productsWithFlag = apiProducts.filter((p: any) => p.hasOwnProperty('is_saved_in_db'));
      console.log(`🔍 [DEBUG] Total products: ${apiProducts.length}, Products with is_saved_in_db flag: ${productsWithFlag.length}`);
      
      // Check if any products have is_saved_in_db flag
      const savedProducts = apiProducts.filter((p: any) => p.is_saved_in_db === true);
      if (savedProducts.length > 0) {
        console.log(`📦 ${savedProducts.length} products found in database:`);
        savedProducts.forEach((p: any) => {
          console.log(`   - Product ID: ${p.product_id} | Category: ${p.product_category || 'other'}`);
        });
      } else {
        console.log(`⚠️ No products with is_saved_in_db=true found. Checking first 3 products:`, apiProducts.slice(0, 3).map((p: any) => ({
          product_id: p.product_id,
          is_saved_in_db: p.is_saved_in_db,
          product_category: p.product_category,
          custom_title: p.custom_title
        })));
      }
      
      const newProducts = apiProducts.map(mapApiProductToProduct);
      
      // Store all products
      setAllProducts(newProducts);
      
      // Display only first 5 products initially
      const firstFiveProducts = newProducts.slice(0, 5);
      setDisplayedProducts(firstFiveProducts);
      setDisplayedCount(5);
      
      // Use the hasMore value from API response
      const apiHasMore = response.data.hasMore !== undefined ? response.data.hasMore : true;
      setHasMore(apiHasMore);
      setCurrentPage(1);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch initial products');
    } finally {
      setLoading(false);
      setIsInitialLoad(false);
    }
  };

  // Load more products from already fetched data (lazy loading)
  const fetchMoreProducts = async () => {
    if (loadingMore || isLoadingMoreRef.current) {
      return;
    }
    
    isLoadingMoreRef.current = true;
    setLoadingMore(true);
    setError(null);

    try {
      // Check if we have more products to display from already fetched data
      if (displayedCount < allProducts.length) {
        // Load 5 more products from already fetched data
        const nextDisplayCount = Math.min(displayedCount + 5, allProducts.length);
        const newDisplayedProducts = allProducts.slice(0, nextDisplayCount);
        setDisplayedProducts(newDisplayedProducts);
        setDisplayedCount(nextDisplayCount);
        
        // If we've displayed all fetched products, try to fetch more from API
        if (nextDisplayCount >= allProducts.length && hasMore) {
          await fetchMoreFromAPI();
        }
      } else if (hasMore) {
        // Fetch more products from API
        await fetchMoreFromAPI();
      } else {
        setHasMore(false);
      }
      
      setLoadingMore(false);
      isLoadingMoreRef.current = false;
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Failed to load more products');
      setLoadingMore(false);
      isLoadingMoreRef.current = false;
    }
  };

  // Fetch more products from API using comprehensive search
  const fetchMoreFromAPI = async () => {
    try {
      const nextPage = currentPage + 1;
      
      // Use comprehensive search endpoint for all cases
      const response = await api.get('/api/search/comprehensive', {
        params: {
          q: params.query || 'all',
          page: nextPage,
          pageSize: 150,
          target_currency: params.target_currency || 'USD',
          min_price: params.minPrice || 0,
          max_price: params.maxPrice || 150000,
          sort_by: params.sortBy || 'volume_desc',
          only_with_video: params.hasVideo ? 1 : 0,
          category: params.category || undefined,
          use_api: 'true'
        },
      });

      const apiProducts = response.data.items || [];
      const newProducts = apiProducts.map(mapApiProductToProduct);
      
      if (newProducts.length > 0) {
        setAllProducts(prev => {
          // Filter out duplicate products by ID
          const existingIds = new Set(prev.map(p => p.id));
          const uniqueNewProducts = newProducts.filter((p: Product) => !existingIds.has(p.id));
          return [...prev, ...uniqueNewProducts];
        });
        setCurrentPage(nextPage);
        
        // Use the hasMore value from API response
        const apiHasMore = response.data.hasMore !== undefined ? response.data.hasMore : true;
        setHasMore(apiHasMore);
        hasTriggeredLoadRef.current = false; // Reset trigger for next batch
      } else {
        setHasMore(false);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Failed to fetch more products');
      setLoadingMore(false);
      isLoadingMoreRef.current = false;
    }
  };

  // Search for a single product by ID using comprehensive search
  const searchProductById = async (productId: string) => {
    if (loading) return;
    
    setLoading(true);
    setError(null);
    setIsInitialLoad(false);
    
    // Clear existing products immediately when starting new search
    setAllProducts([]);
    setDisplayedProducts([]);
    
    // Reset loading states and triggers for new search
    hasTriggeredLoadRef.current = false;
    isLoadingMoreRef.current = false;
    setDisplayedCount(5);
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
      loadingTimeoutRef.current = null;
    }

    try {
      // Use comprehensive search endpoint with product ID
      const response = await api.get('/api/search/comprehensive', {
        params: {
          q: productId,
          page: 1,
          pageSize: 150,
          target_currency: params.target_currency || 'USD',
          min_price: 0,
          max_price: 150000,
          only_with_video: params.hasVideo ? 1 : 0,
          use_api: 'true'
        },
      });
      
      if (response.data.success && response.data.items && response.data.items.length > 0) {
        // Map the single product from the API response
        const apiProduct = response.data.items[0];
        const mappedProduct = mapApiProductToProduct(apiProduct);
        setAllProducts([mappedProduct]);
        setDisplayedProducts([mappedProduct]);
        setHasMore(false); // Single product, no more to load
        setCurrentPage(1);
      } else {
        // Product not found
        setAllProducts([]);
        setDisplayedProducts([]);
        setHasMore(false);
        setError(`Product with ID ${productId} not found`);
        setCurrentPage(1);
      }
    } catch (err: any) {
      setError(`Error searching product: ${err.response?.data?.error || err.message || 'Unknown error'}`);
      setAllProducts([]);
      setDisplayedProducts([]);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  // Search products (when user searches) using comprehensive search
  const searchProducts = async (searchParams: SearchParams) => {
    if (loading) return;
    
    // If query is 'all', use fetchInitialProducts instead
    if (searchParams.query === 'all') {
      await fetchInitialProducts();
      return;
    }
    
    setLoading(true);
    setError(null);
    setIsInitialLoad(false);
    
    // Clear existing products immediately when starting new search
    setAllProducts([]);
    setDisplayedProducts([]);
    
    // Reset loading states and triggers for new search
    hasTriggeredLoadRef.current = false;
    isLoadingMoreRef.current = false;
    setDisplayedCount(5);
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
      loadingTimeoutRef.current = null;
    }

    // Check if the search query is a product ID
    if (searchParams.query && isProductId(searchParams.query)) {
      await searchProductById(searchParams.query.trim());
      return;
    }

    try {
      // Use comprehensive search endpoint
      const response = await api.get('/api/search/comprehensive', {
        params: {
          q: searchParams.query || 'all',
          page: 1,
          pageSize: 150,
          target_currency: searchParams.target_currency || 'USD',
          min_price: searchParams.minPrice || 0,
          max_price: searchParams.maxPrice || 150000,
          sort_by: searchParams.sortBy || 'volume_desc',
          only_with_video: searchParams.hasVideo ? 1 : 0,
          category: searchParams.category || undefined,
          use_api: 'true'
        },
      });

      const apiProducts = response.data.items || [];
      
      // Debug: Check if is_saved_in_db exists in any product
      const productsWithFlag = apiProducts.filter((p: any) => p.hasOwnProperty('is_saved_in_db'));
      console.log(`🔍 [DEBUG] Total products: ${apiProducts.length}, Products with is_saved_in_db flag: ${productsWithFlag.length}`);
      
      // Check if any products have is_saved_in_db flag
      const savedProducts = apiProducts.filter((p: any) => p.is_saved_in_db === true);
      if (savedProducts.length > 0) {
        console.log(`📦 ${savedProducts.length} products found in database:`);
        savedProducts.forEach((p: any) => {
          console.log(`   - Product ID: ${p.product_id} | Category: ${p.product_category || 'other'}`);
        });
      } else {
        console.log(`⚠️ No products with is_saved_in_db=true found. Checking first 3 products:`, apiProducts.slice(0, 3).map((p: any) => ({
          product_id: p.product_id,
          is_saved_in_db: p.is_saved_in_db,
          product_category: p.product_category,
          custom_title: p.custom_title
        })));
      }
      
      const newProducts = apiProducts.map(mapApiProductToProduct);
      
      setAllProducts(newProducts);
      
      const firstFiveProducts = newProducts.slice(0, 5);
      setDisplayedProducts(firstFiveProducts); // Display only first 5
      setDisplayedCount(5);
      
      // Use the hasMore value from API response
      const apiHasMore = response.data.hasMore !== undefined ? response.data.hasMore : true;
      setHasMore(apiHasMore);
      setCurrentPage(1);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to search products');
    } finally {
      setLoading(false);
    }
  };

  // Search when params change (including initial load with q=all)
  useEffect(() => {
    if (params.query || params.category || params.minPrice || params.maxPrice || params.sortBy || params.sortOrder || params.hasVideo !== undefined) {
      searchProducts(params);
    }
  }, [params.query, params.category, params.minPrice, params.maxPrice, params.sortBy, params.sortOrder, params.hasVideo]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, []);

  // Lazy loading function
  const loadMore = useCallback(() => {
    if (!loadingMore && hasMore && !isInitialLoad) {
      fetchMoreProducts();
    }
  }, [loadingMore, hasMore, isInitialLoad]);

  // Check if user is approaching the end of displayed products to trigger loading more products
  const shouldLoadMore = useCallback((index: number) => {
    // Only trigger when user reaches the last 2 items to prevent premature loading
    const shouldTrigger = index >= displayedProducts.length - 2;
    
    if (shouldTrigger && (displayedCount < allProducts.length || hasMore) && !loadingMore && !isLoadingMoreRef.current && !hasTriggeredLoadRef.current) {
      hasTriggeredLoadRef.current = true;
      
      // Clear any existing timeout
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
      
      // Set a new timeout to prevent rapid calls
      loadingTimeoutRef.current = setTimeout(() => {
        fetchMoreProducts();
      }, 500); // Reduced to 500ms for better responsiveness
      
      return true;
    }
    return false;
  }, [displayedCount, allProducts.length, hasMore, loadingMore, fetchMoreProducts, displayedProducts.length]);

  // Removed automatic loading trigger - only load on user scroll

  return {
    products: displayedProducts, // Return only displayed products
    allProducts, // Also return all products for debugging
    loading,
    loadingMore,
    error,
    hasMore,
    loadMore,
    shouldLoadMore,
    displayedCount,
    totalFetched: allProducts.length,
    refetch: () => {
      if (params.query || params.category) {
        searchProducts(params);
      } else {
        fetchInitialProducts();
      }
    },
  };
};
