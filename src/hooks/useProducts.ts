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
  error?: unknown;
};

// ✅ امضای سازگار: می‌پذیرد useProducts(filters) یا useProducts(q, pageSize)
function useProducts(arg1?: any, arg2?: any) {
  // استخراج q و pageSize از ورودی‌های مختلف
  let initialQ = "";
  let initialPageSize = 20;

  if (typeof arg1 === "string" || arg1 == null) {
    initialQ = (arg1 as string) || "";
    initialPageSize = Number(arg2 ?? 20) || 20;
  } else {
    const f = arg1 || {};
    initialQ = f.q ?? f.query ?? "";
    initialPageSize = Number(f.pageSize ?? f.limit ?? 20) || 20;
  }

  const [q, setQ] = useState<string>(initialQ);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(initialPageSize);

  const [items, setItems] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [savedProductsCount, setSavedProductsCount] = useState<number>(0);

  // آمار اولیه (اختیاری)
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(API_ENDPOINTS.STATS);
        if (res.ok) {
          const s: StatsResp = await res.json();
          const toNum = (v: any) => (v == null ? 0 : Number(v) || 0);
          setSavedProductsCount(toNum(s.saved_products ?? s.savedCount));
        }
      } catch {
        /* ignore */
      }
    })();
  }, []);

  // هسته‌ی fetch محصولات
  const _fetchProducts = useCallback(
    async (nextPage: number, replace: boolean) => {
      setLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams({
          ...(q ? { q } : {}),
          page: String(nextPage || 1),
          pageSize: String(pageSize || 20),
        });
        const res = await fetch(`${API_ENDPOINTS.SEARCH}?${params.toString()}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data: ProductsResp = await res.json();
        const newItems = Array.isArray(data.items) ? data.items : [];
        setHasMore(Boolean(data.hasMore));
        setItems((prev) => (replace ? newItems : [...prev, ...newItems]));
      } catch (e: any) {
        setError(e?.message || "Failed to fetch");
      } finally {
        setLoading(false);
      }
    },
    [q, pageSize]
  );

  // ✅ overload سازگار:
  // - fetchProducts()                → صفحه 1، replace=true
  // - fetchProducts(true)            → replace=true روی صفحه‌ی فعلی
  // - fetchProducts(2)               → صفحه 2، replace=true
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

  // ✅ loadMore قبلی حفظ
  const loadMore = useCallback(async () => {
    const next = page + 1;
    await _fetchProducts(next, false);
    setPage(next);
  }, [page, _fetchProducts]);

  // ✅ سازگار با دو شکل فراخوانی:
  // - handleSave(saved)
  // - handleSave(productId, saved)
  function handleSave(saved: boolean): void;
  function handleSave(productId: string | number, saved: boolean): void;
  function handleSave(a: any, b?: any) {
    const savedFlag = typeof a === "boolean" ? a : Boolean(b);
    setSavedProductsCount((c) => Math.max(0, c + (savedFlag ? 1 : -1)));
  }

  // وقتی q یا pageSize عوض شد، از صفحه 1 دوباره بیار
  useEffect(() => {
    setPage(1);
    _fetchProducts(1, true);
  }, [q, pageSize, _fetchProducts]);

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

      // setters
      setQ,
      setPageSize,
      setSavedProductsCount,

      // actions
      fetchProducts, // (overloaded)
      loadMore,
      handleSave, // (overloaded)
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
      fetchProducts,
      loadMore,
      handleSave,
    ]
  );
}

export { useProducts };
export default useProducts;
