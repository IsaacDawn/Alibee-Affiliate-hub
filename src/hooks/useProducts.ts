// src/hooks/useProducts.ts
import { useCallback, useEffect, useMemo, useState } from "react";
import { API_ENDPOINTS } from "../constants";

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
  let initialPageSize = 10; // 10 products per search for better initial results

  if (typeof arg1 === "string" || arg1 == null) {
    initialQ = (arg1 as string) || "";
    initialPageSize = Number(arg2 ?? 5) || 5;
  } else {
    const f = arg1 || {};
    initialQ = f.q ?? f.query ?? "";
    initialPageSize = Number(f.pageSize ?? f.limit ?? 5) || 5;
  }

  // All state declarations at the top
  const [q, setQ] = useState<string>(initialQ);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(initialPageSize);
  const [loadMorePageSize, setLoadMorePageSize] = useState<number>(5);
  const [filters, _setFilters] = useState<any>(arg1 && typeof arg1 === "object" ? arg1 : {});
  const [items, setItems] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [savedProductsCount, setSavedProductsCount] = useState<number>(0);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  // All useCallback declarations
  const setFilters = useCallback((newFilters: any) => {
    _setFilters(newFilters);
    if (newFilters && typeof newFilters === "object") {
      const newQ = newFilters.q ?? newFilters.query ?? "";
      setQ(newQ);
    }
  }, []);

  const clearProducts = useCallback(() => {
    setItems([]);
    setPage(1);
    setHasMore(false);
    setError(null);
  }, []);

  const _fetchProducts = useCallback(
    async (nextPage: number, replace: boolean) => {
      if (replace) {
        setLoading(true);
        setIsLoadingMore(false);
      } else {
        setIsLoadingMore(true);
        setLoading(false);
      }
      setError(null);
      
      try {
        const endpoint = (q && q.trim()) ? API_ENDPOINTS.SEARCH : API_ENDPOINTS.PRODUCTS;
        const currentPageSize = replace ? pageSize : loadMorePageSize;
        
        const params = new URLSearchParams({
          page: String(nextPage || 1),
          pageSize: String(currentPageSize),
        });
        
        if (q && q.trim()) {
          params.append("q", q);
          params.append("use_api", "true");
        }
        
        if (filters) {
          if (filters.sort) params.append("sort", filters.sort);
          if (filters.minPrice !== undefined && filters.minPrice !== null) {
            params.append("minPrice", String(filters.minPrice));
          }
          if (filters.maxPrice !== undefined && filters.maxPrice !== null) {
            params.append("maxPrice", String(filters.maxPrice));
          }
        }
        
        const url = `${endpoint}?${params.toString()}`;
        const res = await fetch(url);
        
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        
        const data: ProductsResp = await res.json();
        const newItems = Array.isArray(data.items) ? data.items : [];
        
        setHasMore(Boolean(data.hasMore));
        setItems((prev) => {
          if (replace) {
            return newItems;
          } else {
            const existingIds = new Set(prev.map(item => item.product_id));
            const uniqueNewItems = newItems.filter(item => !existingIds.has(item.product_id));
            return [...prev, ...uniqueNewItems];
          }
        });
      } catch (e: any) {
        setError(e?.message || "Failed to fetch");
      } finally {
        setLoading(false);
        setIsLoadingMore(false);
      }
    },
    [q, pageSize, loadMorePageSize, filters]
  );

  const loadMore = useCallback(async () => {
    // Only load more if we have a search query and not loading
    if (!q || !q.trim() || loading || isLoadingMore) {
      return;
    }
    
    const next = page + 1;
    setPage(next);
    await _fetchProducts(next, false);
  }, [page, _fetchProducts, q, loading, isLoadingMore]);

  const handleSave = useCallback((a: any, b?: any) => {
    const savedFlag = typeof a === "boolean" ? a : Boolean(b);
    setSavedProductsCount((c) => Math.max(0, c + (savedFlag ? 1 : -1)));
  }, []);

  // All useEffect declarations
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

  useEffect(() => {
    // Clear everything when search changes
    setItems([]);
    setPage(1);
    setHasMore(false);
    setError(null);
    setLoading(false);
    setIsLoadingMore(false);
    
    // Only fetch if we have a search query
    if (q && q.trim()) {
      _fetchProducts(1, true);
    }
  }, [q, pageSize, filters, _fetchProducts]);

  // Function overloads
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

  return useMemo(
    () => ({
      items,
      hasMore,
      loading,
      isLoadingMore,
      error,
      page,
      pageSize,
      loadMorePageSize,
      q,
      savedProductsCount,
      filters,
      setQ,
      setPageSize,
      setLoadMorePageSize,
      setSavedProductsCount,
      setFilters,
      fetchProducts,
      loadMore,
      handleSave,
      clearProducts,
    }),
    [
      items,
      hasMore,
      loading,
      isLoadingMore,
      error,
      page,
      pageSize,
      loadMorePageSize,
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
