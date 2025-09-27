import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SettingsDrawer } from "./SettingsDrawer";
import { LazyProductCard } from "./LazyProductCard";
import { InfiniteScroll } from "./InfiniteScroll";
import { useProducts } from "../../hooks/useProducts";
import type { Currency, Filters } from "../../types";

// Types are now imported from types/index.ts

// Simple Search Component
interface SimpleSearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  onKeywordSelect?: (keyword: string) => void;
}

function SimpleSearch({ onSearch, placeholder = "Search products...", onKeywordSelect }: SimpleSearchProps) {
  const { i18n } = useTranslation();
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  const handleKeywordClick = (keyword: string) => {
    setQuery(''); // Clear search field
    onKeywordSelect?.(keyword); // Trigger search with keyword
  };

  const popularKeywords = [
    'random', 'luggage', 'bag', 'shoes', 'toys', 'furniture', 
    'home and garden', 'baby and maternity', 'jewelry', 'watch', 
    'accessories', 'sport', 'entertainment'
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          {/* Search Icon - Position based on language direction */}
          <svg 
            className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 ${
              i18n.language === 'ar' || i18n.language === 'fa' ? 'right-3' : 'left-3'
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className={`w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white bg-gray-800 placeholder-gray-400 ${
              i18n.language === 'ar' || i18n.language === 'fa' 
                ? 'pr-10 pl-10' 
                : 'pl-10 pr-10'
            }`}
            dir={i18n.language === 'ar' || i18n.language === 'fa' ? 'rtl' : 'ltr'}
          />
          
          {/* Clear Button - Position based on language direction */}
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 ${
                i18n.language === 'ar' || i18n.language === 'fa' ? 'left-3' : 'right-3'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          )}
        </div>
        <button
          type="submit"
          className="mt-2 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </form>

      {/* Popular Keywords */}
      <div className="mt-4">
        <div className="text-white text-sm mb-2 opacity-75">Popular Searches:</div>
        <div className="flex flex-wrap gap-2">
          {popularKeywords.map((keyword) => (
            <button
              key={keyword}
              onClick={() => handleKeywordClick(keyword)}
              className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-full transition-colors border border-gray-600 hover:border-gray-500"
            >
              {keyword}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

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
    sort: "volume_desc",
  });
  const [_statsRefreshTrigger, _setStatsRefreshTrigger] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Track if this is a new search to scroll to top
  const [isNewSearch, setIsNewSearch] = useState(false);
  
  // Track if search interface is visible
  const [showSearchInterface, setShowSearchInterface] = useState(false);
  
  // Track if initial search has been performed
  const [hasPerformedInitialSearch, setHasPerformedInitialSearch] = useState(false);
  

  // Use custom hooks for data management
  const {
    items,
    loading,
    isLoadingMore,
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

  // Scroll to top only when new search results are loaded
  useEffect(() => {
    if (isNewSearch && items.length > 0 && scrollContainerRef.current) {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }, 100);
      // Reset the flag after scrolling
      setIsNewSearch(false);
    }
  }, [isNewSearch, items.length]);


  // Handle filter changes
  const handleFiltersChange = (newFilters: Filters) => {
    const isNewSearchQuery = newFilters.q !== filters.q;
    
    // Immediately clear products when starting a new search
    if (isNewSearchQuery && newFilters.q) {
      clearProducts();
      setIsNewSearch(true); // Mark as new search for scroll to top
    }
    
    setFilters(newFilters);
    setProductsFilters(newFilters);
  };


  // Remove useStats hook since SystemStatus and StatsCard handle their own data

  // Remove the manual fetch trigger since useProducts hook handles it automatically

  // Perform initial search with a popular keyword when page loads for the first time
  useEffect(() => {
    if (!hasPerformedInitialSearch && items.length === 0 && !loading) {
      const popularKeywords = [
        'random', 'luggage', 'bag', 'shoes', 'toys', 'furniture', 
        'home and garden', 'baby and maternity', 'jewelry', 'watch', 
        'accessories', 'sport', 'entertainment'
      ];
      
      // Select a random popular keyword for initial search
      const randomKeyword = popularKeywords[Math.floor(Math.random() * popularKeywords.length)];
      
      // Perform the initial search
      const newFilters = { ...filters, q: randomKeyword };
      setFilters(newFilters);
      setProductsFilters(newFilters);
      setIsNewSearch(true);
      setHasPerformedInitialSearch(true);
    }
  }, [hasPerformedInitialSearch, items.length, loading, filters, setFilters, setProductsFilters]);

  return (
    <div className="h-full relative">
      {/* Search Button - Always visible */}
      {!showSearchInterface && (
        <div className="absolute top-4 left-4 z-30">
          <button
            onClick={() => setShowSearchInterface(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
      )}

      {/* Dark Background Overlay */}
      {showSearchInterface && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-20"
          onClick={() => setShowSearchInterface(false)}
        />
      )}

      {/* Search Interface - Only visible when showSearchInterface is true */}
      {showSearchInterface && (
        <div className="absolute top-4 left-4 right-4 z-30">
          <div className="relative">
            {/* Close button */}
            <button
              onClick={() => setShowSearchInterface(false)}
              className="absolute -top-2 -right-2 z-40 bg-gray-700 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            <SimpleSearch 
              onSearch={(query) => {
                const newFilters = { ...filters, q: query };
                setFilters(newFilters);
                setProductsFilters(newFilters);
                setIsNewSearch(true); // Mark as new search for scroll to top
                setShowSearchInterface(false); // Auto-close after search
              }}
              onKeywordSelect={(keyword) => {
                const newFilters = { ...filters, q: keyword };
                setFilters(newFilters);
                setProductsFilters(newFilters);
                setIsNewSearch(true); // Mark as new search for scroll to top
                setShowSearchInterface(false); // Auto-close after search
              }}
              placeholder="Search products..."
            />
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
        className="h-full overflow-y-auto scroll-snap-type-y-mandatory relative pt-20 md:pt-20"
      >
        <InfiniteScroll
          hasMore={hasMore}
          loading={loading}
          onLoadMore={loadMore}
          itemCount={items.length}
          searchQuery={filters.q}
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
                isSearchInterfaceOpen={showSearchInterface}
              />
            </div>
          ))}

          {/* Loading More Indicator */}
          {isLoadingMore && items.length > 0 && (
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
          disabled={showSearchInterface}
          className={`
            fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50
            text-white rounded-full
            w-12 h-12 md:w-14 md:h-14
            flex items-center justify-center
            shadow-lg
            transition-all duration-300 ease-in-out
            border-2 border-white/30
            backdrop-blur-sm
            group
            touch-manipulation
            animate-fade-in
            ${showSearchInterface 
              ? 'bg-gray-500 cursor-not-allowed opacity-50' 
              : 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 active:from-emerald-700 active:to-emerald-800 hover:shadow-2xl transform hover:scale-110 active:scale-95'
            }
          `}
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
