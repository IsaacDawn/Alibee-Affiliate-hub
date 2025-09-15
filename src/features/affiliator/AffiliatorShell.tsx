import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SettingsDrawer } from "./SettingsDrawer";
import { LazyProductCard } from "./LazyProductCard";
import { InfiniteScroll } from "./InfiniteScroll";
import { SystemStatus } from "./SystemStatus";
import { StatsCard } from "./StatsCard";
import { UnifiedSearchFilters } from "./UnifiedSearchFilters";
import { useProducts } from "../../hooks/useProducts";
import type { Currency, Filters } from "../../types";

// Types are now imported from types/index.ts

interface AffiliatorShellProps {
  currency: Currency;
}

export function AffiliatorShell({ currency }: AffiliatorShellProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    q: "",
    categoryId: "",
    hasVideo: false,
    sort: "volume_desc",
  });
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  

  // Use custom hooks for data management
  const {
    items,
    loading,
    error: err,
    hasMore,
    fetchProducts,
    loadMore,
    handleSave,
    savedProductsCount,
  } = useProducts(filters);

  // Remove useStats hook since SystemStatus and StatsCard handle their own data

  // Trigger fetch when filters or currency change
  useEffect(() => {
    // Skip auto-fetch on initial load
    if (isInitialLoad) {
      setIsInitialLoad(false);
      return;
    }
    
    // Only fetch if we have a search query
    if (filters.q.trim()) {
      fetchProducts(true);
    }
  }, [filters, currency, isInitialLoad]);

  return (
    <div className="max-w-full md:max-w-7xl mx-auto relative">

      {/* Main Content Area */}
      <div className="pt-24 md:pt-8 pb-8">

      <SettingsDrawer
        open={open}
        onClose={() => setOpen(false)}
        value={filters}
        onChange={setFilters}
      />

        {/* Unified Search & Filters */}
        <UnifiedSearchFilters
          onSearch={(query) => {
            setFilters(prev => ({ ...prev, q: query }));
          }}
          onFiltersChange={setFilters}
          filters={filters}
          loading={loading}
        />

        {/* Modern Status Cards */}
        <div className="px-2 md:px-6 mb-6">
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            <SystemStatus />
            <StatsCard savedProductsCount={savedProductsCount} />
          </div>
        </div>

        {/* Modern Loading State */}
        {loading && items.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-20 h-20 md:w-16 md:h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mb-4"></div>
            <div className="text-slate-700 font-medium text-lg md:text-base">{t('loadingProducts')}</div>
            <div className="text-slate-500 text-base md:text-sm mt-1">Please wait</div>
          </div>
        )}

        {/* Modern Error State */}
        {err && (
          <div className="mx-2 md:mx-6 mb-6 bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-2xl p-4 md:p-6 text-center">
            <div className="text-5xl md:text-4xl mb-3">⚠️</div>
            <div className="text-red-400 font-medium text-lg md:text-base">{t('errorOccurred')}</div>
            <div className="text-red-300 text-base md:text-sm mt-1">{err}</div>
          </div>
        )}

        {/* Modern Empty State */}
        {!loading && !err && items.length === 0 && (
          <div className="mx-2 md:mx-6 mb-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 text-center">
            <div className="text-4xl md:text-6xl mb-4">🔍</div>
            <div className="text-lg md:text-xl font-bold text-slate-900 mb-2">{t('noProductsFound')}</div>
            <div className="text-slate-600 text-sm md:text-base">
              Try different keywords or filters
            </div>
          </div>
        )}

        {/* Responsive Product Grid with Infinite Scroll */}
        <InfiniteScroll
          hasMore={hasMore}
          loading={loading}
          onLoadMore={loadMore}
        >
          <div className="px-2 md:px-6">
            {/* Mobile: Single Column */}
            <div className="md:hidden space-y-4">
              {items.map((it, index) => (
                <LazyProductCard
                  key={it.product_id}
                  item={it}
                  currency={currency}
                  index={index}
                  onSave={(newSavedState) => handleSave(it.product_id, newSavedState)}
                />
              ))}
            </div>

            {/* Desktop: Grid Layout */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((it, index) => (
                <LazyProductCard
                  key={it.product_id}
                  item={it}
                  currency={currency}
                  index={index}
                  onSave={(newSavedState) => handleSave(it.product_id, newSavedState)}
                />
              ))}
            </div>
          </div>

          {/* Loading More State */}
          {loading && items.length > 0 && (
            <div className="text-center mt-6 px-6">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3">
                <div className="w-5 h-5 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
                <span className="text-slate-700 font-medium">Loading more...</span>
              </div>
            </div>
          )}

          {/* End of Results */}
          {!hasMore && items.length > 0 && (
            <div className="text-center mt-8 px-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3">
                <span className="text-slate-600 text-sm">🎉 You've reached the end!</span>
              </div>
            </div>
          )}
        </InfiniteScroll>
      </div>
    </div>
  );
}
