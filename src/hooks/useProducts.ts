// src/hooks/useProducts.ts
import { useCallback, useEffect, useMemo, useState } from "react";
import { API_ENDPOINTS } from "../constants";
import { enhanceSearchQuery } from "../utils/searchEnhancer";

type Product = any;

type ProductsResp = {
  items?: Product[];
  hasMore?: boolean;
  total?: number;
  error?: unknown;
};

type StatsResp = {
  saved_products?: number | string;
  savedCount?: number | string;
  savedProducts?: number | string;
  error?: unknown;
};

// ✅ Compatible signature: accepts useProducts(filters) or useProducts(q, pageSize)
function useProducts(arg1?: any, arg2?: any) {
  // Extract q and pageSize from different inputs
  let initialQ = "";
  let initialPageSize = 5; // 5 products per lazy load for better performance

  if (typeof arg1 === "string" || arg1 == null) {
    initialQ = (arg1 as string) || "";
    initialPageSize = Number(arg2 ?? 5) || 5;
  } else {
    const f = arg1 || {};
    initialQ = f.q ?? f.query ?? "";
    initialPageSize = Number(f.pageSize ?? f.limit ?? 5) || 5;
  }

  const [q, setQ] = useState<string>(initialQ);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(initialPageSize);
  const [filters, setFilters] = useState<any>(arg1 && typeof arg1 === "object" ? arg1 : {});

  const [items, setItems] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [savedProductsCount, setSavedProductsCount] = useState<number>(0);

  // Initial stats (optional)
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(API_ENDPOINTS.STATS);
        if (res.ok) {
          const s: StatsResp = await res.json();
          const toNum = (v: any) => (v == null ? 0 : Number(v) || 0);
          setSavedProductsCount(toNum(s.saved_products ?? s.savedCount ?? s.savedProducts));
        }
      } catch {
        /* ignore */
      }
    })();
  }, []);

  // Core product fetching
  const _fetchProducts = useCallback(
    async (nextPage: number, replace: boolean) => {
      setLoading(true);
      setError(null);
      try {
        // Use search endpoint for all requests
        const endpoint = API_ENDPOINTS.SEARCH;
        const params = new URLSearchParams({
          page: String(nextPage || 1),
          pageSize: String(pageSize || 5),
        });
        
        // Add search query if provided, otherwise use diverse keywords for homepage
        if (q) {
          // Enhance search query with synonyms and related terms
          const enhancedQuery = enhanceSearchQuery(q);
          params.append("q", enhancedQuery);
        } else if (!filters || !filters.categoryId || filters.categoryId === "") {
          // Homepage - use diverse keywords (excluding automotive to avoid car-only results)
          const diverseKeywords = [
            'phone smartphone mobile',
            'laptop computer notebook', 
            'fashion clothing dress',
            'shoes sneakers boots',
            'home garden furniture',
            'beauty cosmetics skincare',
            'sports fitness gym',
            'toys games children',
            'jewelry watch accessories',
            'camera photography',
            'tablet ipad android',
            'kitchen cooking utensils',
            'electronics gadgets tech',
            'health wellness supplements',
            'books stationery office'
          ];
          const randomKeyword = diverseKeywords[Math.floor(Math.random() * diverseKeywords.length)];
          params.append("q", randomKeyword);
        }
        
        // Add additional filters if they exist
        if (filters) {
          if (filters.categoryId) params.append("categoryId", filters.categoryId);
          if (filters.sort) params.append("sort", filters.sort);
          if (filters.minPrice !== undefined && filters.minPrice !== null) {
            params.append("minPrice", String(filters.minPrice));
          }
          if (filters.maxPrice !== undefined && filters.maxPrice !== null) {
            params.append("maxPrice", String(filters.maxPrice));
          }
        }
        
        const res = await fetch(`${endpoint}?${params.toString()}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data: ProductsResp = await res.json();
        const newItems = Array.isArray(data.items) ? data.items : [];
        
        setHasMore(Boolean(data.hasMore));
        setItems((prev) => {
          if (replace) {
            return newItems;
          } else {
            // Remove duplicate products based on product_id
            const existingIds = new Set(prev.map(item => item.product_id));
            const uniqueNewItems = newItems.filter(item => !existingIds.has(item.product_id));
            return [...prev, ...uniqueNewItems];
          }
        });
      } catch (e: any) {
        setError(e?.message || "Failed to fetch");
      } finally {
        setLoading(false);
      }
    },
    [q, pageSize, filters]
  );

  // ✅ Compatible overload:
  // - fetchProducts()                → page 1, replace=true
  // - fetchProducts(true)            → replace=true on current page
  // - fetchProducts(2)               → page 2, replace=true
  function fetchProducts(): Promise<void>;
  function fetchProducts(replace: boolean): Promise<void>;
  function fetchProducts(page: number): Promise<void>;
  function fetchProducts(arg?: number | boolean): Promise<void> {
    if (typeof arg === "boolean") return _fetchProducts(page, arg);
    if (typeof arg === "number") {
      setPage(arg);
      return _fetchProducts(arg, true);
    }
    setPage(1);
    return _fetchProducts(1, true);
  }

  // Function to immediately clear all products (useful for new searches)
  const clearProducts = useCallback(() => {
    console.log("🧹 Clearing all products for new search");
    setItems([]);
    setPage(1);
    setHasMore(false);
    setError(null);
  }, []);

  // ✅ Keep previous loadMore
  const loadMore = useCallback(async () => {
    const next = page + 1;
    setPage(next);  // First update the page
    await _fetchProducts(next, false);
  }, [page, _fetchProducts]);

  // ✅ Compatible with two call forms:
  // - handleSave(saved)
  // - handleSave(productId, saved)
  function handleSave(saved: boolean): void;
  function handleSave(productId: string | number, saved: boolean): void;
  function handleSave(a: any, b?: any) {
    const savedFlag = typeof a === "boolean" ? a : Boolean(b);
    setSavedProductsCount((c) => Math.max(0, c + (savedFlag ? 1 : -1)));
  }

  // When q, pageSize or filters change, fetch from page 1 again
  useEffect(() => {
    // Immediately clear existing products when starting a new search
    setItems([]);
    setPage(1);
    setHasMore(false);
    _fetchProducts(1, true);
  }, [q, pageSize, filters, _fetchProducts]);

  return useMemo(
    () => ({
      // state
      items,
      hasMore,
      loading,
      error,
      page,
      pageSize,
      q,
      savedProductsCount,
      filters,

      // setters
      setQ,
      setPageSize,
      setSavedProductsCount,
      setFilters,

      // actions
      fetchProducts, // (overloaded)
      loadMore,
      handleSave, // (overloaded)
      clearProducts,
    }),
    [
      items,
      hasMore,
      loading,
      error,
      page,
      pageSize,
      q,
      savedProductsCount,
      filters,
      setFilters,
      fetchProducts,
      loadMore,
      handleSave,
      clearProducts,
    ]
  );
}

export { useProducts };
export default useProducts;
