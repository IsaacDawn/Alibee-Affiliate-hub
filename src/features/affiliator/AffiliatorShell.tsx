import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SettingsDrawer } from "./SettingsDrawer";
import { LazyProductCard } from "./LazyProductCard";
import { InfiniteScroll } from "./InfiniteScroll";
// import { SystemStatus } from "./SystemStatus";
// import { StatsCard } from "./StatsCard";
// import { UnifiedSearchFilters } from "./UnifiedSearchFilters";
import { useProducts } from "../../hooks/useProducts";
import type { Currency, Filters } from "../../types";

// Types are now imported from types/index.ts

interface AffiliatorShellProps {
  currency: Currency;
}

// Helper function to get category name by ID (unused)
// const _getCategoryNameById = (categoryId: string): string => {
//   const categories = [
//     { id: "", name: "All Categories" },
//     { id: "100001", name: "Electronics" },
//     { id: "100002", name: "Watches & Jewelry" },
//     { id: "100003", name: "Phone Accessories" },
//     { id: "100004", name: "Home & Garden" },
//     { id: "100005", name: "Beauty & Health" },
//     { id: "100006", name: "Sports & Outdoors" },
//     { id: "100007", name: "Automotive" },
//     { id: "100008", name: "Toys & Games" },
//     { id: "100009", name: "Fashion" },
//     { id: "100010", name: "Tools & Hardware" },
//   ];
//   
//   const category = categories.find(cat => cat.id === categoryId);
//   return category ? category.name : "";
// };

export function AffiliatorShell({ currency }: AffiliatorShellProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    q: "",
    categoryId: "",
    sort: "volume_desc",
  });
  const [_statsRefreshTrigger, _setStatsRefreshTrigger] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  

  // Use custom hooks for data management
  const {
    items,
    loading,
    error: err,
    hasMore,
    loadMore,
    handleSave,
    savedProductsCount: _savedProductsCount,
    setQ: _setQ,
    setFilters: setProductsFilters,
    clearProducts,
  } = useProducts(filters);

  // Back to top functionality
  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Show/hide back to top button based on scroll position
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop;
      setShowBackToTop(scrollTop > 200);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle filter changes
  const handleFiltersChange = (newFilters: Filters) => {
    const isNewSearch = newFilters.q !== filters.q;
    
    // Immediately clear products when starting a new search
    if (isNewSearch && newFilters.q) {
      console.log(`🔍 New search initiated: "${newFilters.q}" - clearing existing products`);
      clearProducts();
    }
    
    setFilters(newFilters);
    setProductsFilters(newFilters);
    
    // Scroll to top when performing a new search
    if (isNewSearch && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Scroll to top when search results are loaded (only on new search, not on load more)
  useEffect(() => {
    if (filters.q && items.length > 0 && scrollContainerRef.current) {
      // Only scroll to top if this is the first page of results (page 1)
      // This prevents scrolling to top when loading more products
      const isFirstPage = items.length <= 5; // Assuming page size is 5
      if (isFirstPage) {
        // Small delay to ensure the DOM is updated
        setTimeout(() => {
          if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    }
  }, [filters.q]); // Only depend on filters.q, not items.length

  // Remove useStats hook since SystemStatus and StatsCard handle their own data

  // Remove the manual fetch trigger since useProducts hook handles it automatically

  return (
    <div className="h-full relative">
      {/* TikTok-style Search Button */}
      <div className="absolute left-4 top-4 z-30">
        <button 
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-black/20 backdrop-blur-sm border border-white/20 text-white hover:bg-black/40"
          onClick={() => setOpen(true)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </div>

      {/* Current Search Display */}
      {filters.q && (
        <div className="absolute left-20 top-4 z-30">
          <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm">
            <span className="text-gray-300">Searching:</span> <span className="font-medium">"{filters.q}"</span>
            <button 
              onClick={() => {
                handleFiltersChange({ ...filters, q: "" });
                // Scroll to top when clearing search
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }
              }}
              className="ml-2 text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Settings Drawer (Search Modal) */}
      <SettingsDrawer
        open={open}
        onClose={() => setOpen(false)}
        value={filters}
        onChange={handleFiltersChange}
        currency={currency}
      />

      {/* TikTok-style Vertical Product Container with Infinite Scroll */}
      <div 
        ref={scrollContainerRef}
        className="h-full overflow-y-auto scroll-snap-type-y-mandatory relative"
      >
        <InfiniteScroll
          hasMore={hasMore}
          loading={loading}
          onLoadMore={loadMore}
          itemCount={items.length}
        >
          {/* Loading State */}
          {loading && items.length === 0 && (
            <div className="h-screen flex flex-col items-center justify-center">
              <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mb-4"></div>
              <div className="text-white font-medium text-lg">
                {filters.q ? `Searching for "${filters.q}"...` : t('loadingProducts')}
              </div>
              <div className="text-gray-400 text-sm mt-2">
                {filters.q ? "Finding the best products for you" : "Loading amazing products"}
              </div>
            </div>
          )}

          {/* Error State */}
          {err && (
            <div className="h-screen flex flex-col items-center justify-center px-6">
              <div className="text-6xl mb-4">⚠️</div>
              <div className="text-red-400 font-medium text-lg">{t('errorOccurred')}</div>
              <div className="text-red-300 text-sm mt-1">{err}</div>
            </div>
          )}

          {/* Search Results Header */}
          {filters.q && (
            <div className="h-screen flex flex-col items-center justify-center px-6">
              <div className="text-6xl mb-4">🔍</div>
              <div className="text-white font-bold text-xl mb-2">Search Results</div>
              <div className="text-gray-300 text-lg mb-4">"{filters.q}"</div>
              <div className="text-gray-400 text-sm">Found {items.length} products</div>
            </div>
          )}

          {/* Empty State */}
          {!loading && !err && items.length === 0 && !filters.q && (
            <div className="h-screen flex flex-col items-center justify-center px-6">
              <div className="text-6xl mb-4">🔍</div>
              <div className="text-white font-bold text-xl mb-2">{t('noProductsFound')}</div>
              <div className="text-gray-400 text-sm">Try different keywords or filters</div>
            </div>
          )}

          {/* No Search Results */}
          {!loading && !err && items.length === 0 && filters.q && (
            <div className="h-screen flex flex-col items-center justify-center px-6">
              <div className="text-6xl mb-4">😔</div>
              <div className="text-white font-bold text-xl mb-2">No products found</div>
              <div className="text-gray-300 text-lg mb-4">for "{filters.q}"</div>
              <div className="text-gray-400 text-sm">Try different keywords or check spelling</div>
            </div>
          )}

          {/* TikTok-style Product Cards */}
          {items.map((it, index) => (
            <div key={`${it.product_id}-${index}`} className="h-screen scroll-snap-align-start">
              <LazyProductCard
                item={it}
                currency={currency}
                index={index}
                onSave={(newSavedState) => handleSave(it.product_id, newSavedState)}
              />
            </div>
          ))}

          {/* Loading More Indicator */}
          {loading && items.length > 0 && (
            <div className="h-screen flex items-center justify-center">
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span className="font-medium">Loading more products...</span>
              </div>
            </div>
          )}

          {/* End of Results */}
          {!hasMore && items.length > 0 && (
            <div className="h-screen flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">🎉</div>
                <div className="text-white font-medium">You've reached the end!</div>
              </div>
            </div>
          )}
        </InfiniteScroll>
      </div>

      {/* Custom Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50
            bg-gradient-to-r from-emerald-500 to-emerald-600
            hover:from-emerald-600 hover:to-emerald-700
            active:from-emerald-700 active:to-emerald-800
            text-white rounded-full
            w-12 h-12 md:w-14 md:h-14
            flex items-center justify-center
            shadow-lg hover:shadow-2xl
            transition-all duration-300 ease-in-out
            transform hover:scale-110 active:scale-95
            border-2 border-white/30
            backdrop-blur-sm
            group
            touch-manipulation
            animate-fade-in
          "
          aria-label="Back to top of page"
          title="Back to top of page"
        >
          {/* Arrow up icon with animation */}
          <svg 
            className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:-translate-y-0.5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
          
          {/* Pulse effect */}
          <div className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      )}
    </div>
  );
}
