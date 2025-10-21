import { useState, useEffect, useCallback, useRef } from 'react';
import api from '../services/api';
import type { Product } from '../types';
import type { SearchParams } from './useSearchParams';

// Map API product to frontend Product type
// Helper function to remove duplicate products based on ID
const removeDuplicateProducts = (products: Product[]): Product[] => {
  const seen = new Set<string>();
  return products.filter(product => {
    if (seen.has(product.id)) {
      return false;
    }
    seen.add(product.id);
    return true;
  });
};

const mapApiProductToProduct = (apiProduct: any): Product => {

  // Extract images array from various possible fields
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

  const mappedProduct = {
    id: apiProduct.product_id?.toString() || '',
    title: apiProduct.product_title || '',
    price: apiProduct.sale_price || 0,
    originalPrice: apiProduct.original_price || undefined,
    currency: apiProduct.sale_price_currency || apiProduct.original_currency || 'USD',
    originalCurrency: apiProduct.original_currency || apiProduct.sale_price_currency || 'USD',
    originalPriceCurrency: apiProduct.original_price_currency || apiProduct.original_price_currency,
    // Target currency fields (converted prices) - این فیلدها مهم هستند!
    priceTarget: apiProduct.sale_price_target || undefined,
    originalPriceTarget: apiProduct.original_price_target || undefined,
    currencyTarget: apiProduct.sale_price_currency_target || undefined,
    originalCurrencyTarget: apiProduct.original_price_currency_target || undefined,
    image: apiProduct.product_main_image_url || '',
    images: Array.isArray(images) ? images.filter(img => img && img.trim() !== '') : [],
    video: apiProduct.video_link || apiProduct.video || undefined,
    rating: apiProduct.product_score_stars || apiProduct.rating_weighted || 0,
    reviewCount: apiProduct.review_count || apiProduct.latest_volume || 0,
    url: apiProduct.promotion_link || apiProduct.product_detail_url || '',
    category: apiProduct.product_category || apiProduct.first_level_category_name || '',
    discount: apiProduct.discount_percentage || 0,
    commissionRate: apiProduct.commission_rate || 0,
    salesVolume: apiProduct.latest_volume || 0,
    volume: apiProduct.latest_volume || 0,
    productId: apiProduct.product_id?.toString() || '',
    productDetailUrl: apiProduct.product_detail_url || '',
    discountPercentage: apiProduct.discount_percentage || 0,
    productScoreStars: apiProduct.product_score_stars || 0,
    scoreStars: apiProduct.product_score_stars || 0,
    firstLevelCategoryName: apiProduct.first_level_category_name || '',
    secondLevelCategoryName: apiProduct.second_level_category_name || '',
    productCategory: apiProduct.product_category || '',
    customTitle: apiProduct.custom_title || undefined
  };


  return mappedProduct;
};

export const useProductCards = (searchParams: SearchParams) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true); // Start with loading true
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  
  // For lazy loading
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [displayedCount, setDisplayedCount] = useState(0);
  const isLoadingMoreRef = useRef(false);

  // Check if query is a product ID
  const isProductId = (query: string): boolean => {
    if (!query || query.trim() === '') return false;
    const trimmed = query.trim();
    return /^\d{10,20}$/.test(trimmed);
  };


  // Fetch products from API using comprehensive search
  const fetchProducts = useCallback(async () => {
    // Clear existing products before starting new search
    clearProducts();
    
    setLoading(true);
    setError(null);
    
    try {
      console.log('🌐 [API REQUEST] GET /api/search/comprehensive', {
        q: searchParams.query,
        page: 1,
        pageSize: 200,
        target_currency: searchParams.target_currency || 'USD',
        min_price: searchParams.minPrice || 0,
        max_price: searchParams.maxPrice || 150000,
        sort_by: searchParams.sortBy || 'volume_desc',
        only_with_video: searchParams.hasVideo ? 1 : 0,
        category: searchParams.category || undefined
      });

      // Use comprehensive search endpoint with all parameters
      const response = await api.get('/api/search/comprehensive', {
        params: {
          q: searchParams.query,
          page: 1,
          pageSize: 200, // Load first 200 products
          target_currency: searchParams.target_currency || 'USD',
          min_price: searchParams.minPrice || 0,
          max_price: searchParams.maxPrice || 150000,
          sort_by: searchParams.sortBy || 'price_acs',
          only_with_video: searchParams.hasVideo ? 1 : 0,
          category: searchParams.category || undefined
        }
      });

      console.log('📊 [TOTAL PRODUCTS] Total products in JSON response:', response.data.total || response.data.items?.length || 0);
      console.log('🔍 [DEBUG] Raw API response:', {
        success: response.data.success,
        total: response.data.total,
        hasMore: response.data.hasMore,
        itemsLength: response.data.items?.length,
        query: response.data.query,
        filters: response.data.filters
      });

      const apiProducts = response.data.items || [];
      console.log('🔍 [DEBUG] First 3 API products:', apiProducts.slice(0, 3).map((p: any) => ({
        id: p.product_id,
        title: p.product_title?.substring(0, 50) + '...',
        price: p.sale_price,
        currency: p.sale_price_currency
      })));
      
      const mappedProducts = apiProducts.map(mapApiProductToProduct);
      const newProducts = removeDuplicateProducts(mappedProducts);
      
      console.log('🔍 [DEBUG] First 3 mapped products:', newProducts.slice(0, 3).map((p: Product) => ({
        id: p.id,
        title: p.title?.substring(0, 50) + '...',
        price: p.price,
        currency: p.currency
      })));
      
      console.log('📊 [LOADING INFO] AllProducts length:', newProducts.length, 'Displayed:', 10, 'HasMore:', newProducts.length > 0);
      
      setAllProducts(newProducts);
      setDisplayedProducts(newProducts.slice(0, 10));
      setDisplayedCount(10);
      setProducts(newProducts.slice(0, 10));
      
      const apiHasMore = newProducts.length > 0; // Always true if we have products
      setHasMore(apiHasMore);
      setCurrentPage(1);

    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  }, [searchParams]);

  // Fetch product by ID
  const fetchProductById = useCallback(async (productId: string) => {
    // Clear existing products before starting new search
    clearProducts();
    
    setLoading(true);
    setError(null);
    
    try {
      console.log('🌐 [API REQUEST] GET /api/product/' + productId);
      const response = await api.get(`/api/product/${productId}`);

      const apiProducts = response.data.items || [];
      const mappedProducts = apiProducts.map(mapApiProductToProduct);
      const newProducts = removeDuplicateProducts(mappedProducts);
      
      setAllProducts(newProducts);
      setDisplayedProducts(newProducts);
      setDisplayedCount(newProducts.length);
      setProducts(newProducts);
      
      // Check if there are more products available
      const apiHasMore = newProducts.length > 0; // Always true if we have products
      setHasMore(apiHasMore);
      setCurrentPage(1);

    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Failed to fetch product');
    } finally {
      setLoading(false);
    }
  }, [searchParams]);

  // Load more products (lazy loading) - will be defined after fetchMoreFromAPI

  // Fetch more products from API using comprehensive search
  const fetchMoreFromAPI = useCallback(async () => {
    try {
      const nextPage = currentPage + 1;
      
      console.log('🌐 [API REQUEST] GET /api/search/comprehensive (page ' + nextPage + ')', {
        q: searchParams.query,
        page: nextPage,
        pageSize: 200,
        target_currency: searchParams.target_currency || 'USD',
        min_price: searchParams.minPrice || 0,
        max_price: searchParams.maxPrice || 150000,
        sort_by: searchParams.sortBy || 'volume_desc',
        only_with_video: searchParams.hasVideo ? 1 : 0,
        category: searchParams.category || undefined
      });
      
      const response = await api.get('/api/search/comprehensive', {
        params: {
          q: searchParams.query,
          page: nextPage,
          pageSize: 200, // Load 200 products per batch
          target_currency: searchParams.target_currency || 'USD',
          min_price: searchParams.minPrice || 0,
          max_price: searchParams.maxPrice || 150000,
          sort_by: searchParams.sortBy || 'price_acs',
          only_with_video: searchParams.hasVideo ? 1 : 0,
          category: searchParams.category || undefined
        }
      });

      console.log('📊 [TOTAL PRODUCTS] Total products in JSON response (page', nextPage, '):', response.data.total || response.data.items?.length || 0);

      const apiProducts = response.data.items || [];
      const mappedProducts = apiProducts.map(mapApiProductToProduct);
      const newProducts = removeDuplicateProducts(mappedProducts);
      
      setAllProducts(prev => removeDuplicateProducts([...prev, ...newProducts]));
      
      // Display only 5 more products from the new batch
      const currentDisplayedCount = displayedProducts.length;
      const nextBatch = newProducts.slice(0, 5);
      setDisplayedProducts(prev => removeDuplicateProducts([...prev, ...nextBatch]));
      setDisplayedCount(prev => prev + nextBatch.length);
      setProducts(prev => removeDuplicateProducts([...prev, ...nextBatch]));
      
      const apiHasMore = newProducts.length > 0; // Always true if we have products
      setHasMore(apiHasMore);
      setCurrentPage(nextPage);

      // Added new products (logging removed for cleaner console)

    } catch (err: any) {
      console.error('❌ [LOAD MORE ERROR]', err);
      setError(err.response?.data?.message || 'Failed to fetch more products');
    }
  }, [currentPage, searchParams, products.length]);


  // Trigger search when params change
  // Initial load on mount
  useEffect(() => {
    fetchProducts();
  }, []); // Run only once on mount

  // Load products when search params change
  useEffect(() => {
    if (searchParams.query && isProductId(searchParams.query)) {
      fetchProductById(searchParams.query);
    } else {
      fetchProducts();
    }
  }, [
    searchParams.query, 
    searchParams.target_currency, 
    searchParams.minPrice, 
    searchParams.maxPrice, 
    searchParams.sortBy, 
    searchParams.sortOrder, 
    searchParams.hasVideo, 
    searchParams.category, 
    fetchProducts, 
    fetchProductById
  ]);

  // Load more products (lazy loading)
  const loadMoreProducts = useCallback(async () => {
    if (loadingMore || isLoadingMoreRef.current) {
      return;
    }
    
    isLoadingMoreRef.current = true;
    setLoadingMore(true);

    try {
      // Check if we have more products in allProducts to display
      const currentDisplayedCount = products.length; // Use products.length instead of displayedProducts.length
      const totalAvailable = allProducts.length;
      
      console.log('🔄 [LOAD MORE] Current displayed:', currentDisplayedCount, 'Total available:', totalAvailable, 'HasMore:', hasMore);
      
      if (currentDisplayedCount < totalAvailable) {
        // Load 5 more products from allProducts
        const nextBatch = allProducts.slice(currentDisplayedCount, currentDisplayedCount + 5);
        setDisplayedProducts(prev => [...prev, ...nextBatch]);
        setDisplayedCount(prev => prev + nextBatch.length);
        setProducts(prev => [...prev, ...nextBatch]);
        
        // Check if we've displayed all available products
        if (currentDisplayedCount + 5 >= totalAvailable) {
          // Only fetch from API if hasMore is true and we have less than 200 products
          if (hasMore && totalAvailable < 200) {
            await fetchMoreFromAPI();
          } else {
            setHasMore(false);
          }
        }
      } else {
        // No more products in allProducts, fetch from API only if we have less than 200
        if (hasMore && totalAvailable < 200) {
          await fetchMoreFromAPI();
        } else {
          setHasMore(false);
        }
      }
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Failed to load more products');
    } finally {
      setLoadingMore(false);
      isLoadingMoreRef.current = false;
    }
  }, [loadingMore, displayedProducts.length, allProducts.length, hasMore, fetchMoreFromAPI]);

  // Clear products when search params change
  const clearProducts = useCallback(() => {
    setProducts([]);
    setAllProducts([]);
    setDisplayedProducts([]);
    setDisplayedCount(0);
    setHasMore(false);
    setCurrentPage(1);
    setLoading(true); // Keep loading true when clearing
    setLoadingMore(false);
    setError(null);
    isLoadingMoreRef.current = false;
  }, []);

  return {
    products,
    loading,
    loadingMore,
    error,
    hasMore,
    loadMoreProducts,
    clearProducts,
    fetchProducts,
    setProducts
  };
};