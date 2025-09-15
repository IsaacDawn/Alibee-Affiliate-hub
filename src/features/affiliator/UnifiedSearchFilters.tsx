import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

type Filters = {
  q: string;
  categoryId: string;
  hasVideo: boolean;
  sort: "volume_desc" | "discount_desc" | "rating_desc";
};

interface UnifiedSearchFiltersProps {
  onSearch: (query: string) => void;
  onFiltersChange: (filters: Filters) => void;
  filters: Filters;
  loading?: boolean;
}

const getCategories = (t: any) => [
  { id: "", name: t('allCategories') },
  { id: "100001", name: t('electronics') },
  { id: "100002", name: t('watchesJewelry') },
  { id: "100003", name: t('phoneAccessories') },
  { id: "100004", name: t('homeGarden') },
  { id: "100005", name: t('beautyHealth') },
  { id: "100006", name: t('sportsOutdoors') },
  { id: "100007", name: t('automotive') },
  { id: "100008", name: t('toysGames') },
  { id: "100009", name: t('fashion') },
  { id: "100010", name: t('toolsHardware') },
];

const POPULAR_SEARCHES = [
  "phone", "laptop", "smart watch", "headphones", 
  "sports shoes", "bag", "watch", "glasses",
  "electronics", "fashion", "home", "beauty"
];

export function UnifiedSearchFilters({ 
  onSearch, 
  onFiltersChange,
  filters,
  loading = false 
}: UnifiedSearchFiltersProps) {
  const { t } = useTranslation();
  const [query, setQuery] = useState(filters.q);
  // Removed showAdvanced state - filters are always visible now

  // Sync query state with filters.q
  useEffect(() => {
    setQuery(filters.q);
  }, [filters.q]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      onFiltersChange({ ...filters, q: query.trim() });
    }
  };

  const handleQuickSearch = (searchTerm: string) => {
    setQuery(searchTerm);
    onSearch(searchTerm);
    onFiltersChange({ ...filters, q: searchTerm });
  };

  // Removed clearAllFilters function - no longer needed

  return (
    <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-4 md:p-6 mb-6 mx-2 md:mx-4 border border-white/40 shadow-2xl">
      {/* Header - Removed Search Mode Tabs */}
      <div className="mb-6">
        <h2 className="text-3xl md:text-2xl font-bold text-slate-900 mb-2">🔍 {t('search')}</h2>
        <p className="text-lg md:text-base text-slate-600">{t('searchProducts')}</p>
      </div>

      {/* Main Search Bar */}
      <div className="mb-6">
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('searchProducts')}
              className="w-full pl-12 pr-4 py-5 md:py-4 bg-white/30 backdrop-blur-sm text-slate-900 border border-white/40 rounded-2xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400/50 placeholder-slate-500 transition-all duration-300 text-xl md:text-lg"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="absolute inset-y-0 right-0 pr-4 flex items-center"
            >
              <div className="px-6 py-3 md:py-2 bg-gradient-to-r from-emerald-500 to-orange-500 text-white rounded-xl hover:from-emerald-600 hover:to-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 font-medium text-lg md:text-base">
                {loading ? t('searching') : t('search')}
              </div>
            </button>
          </div>
        </form>
      </div>

      {/* Popular Searches */}
      <div className="mb-6">
        <div className="text-base md:text-sm font-medium text-slate-700 mb-3">🔥 {t('popularSearches')}</div>
        <div className="flex flex-wrap gap-2">
          {POPULAR_SEARCHES.map((search, index) => (
            <button
              key={index}
              onClick={() => handleQuickSearch(search)}
              className="px-4 py-2 md:py-1.5 text-sm md:text-xs bg-white/20 backdrop-blur-sm text-slate-700 rounded-full hover:bg-white/30 hover:text-slate-900 transition-all transform hover:scale-105 border border-white/30"
              disabled={loading}
            >
              {search}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Options - Always Visible */}
      <div className="border-t border-white/20 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-base md:text-sm font-medium text-slate-700 mb-2">
                📂 {t('category')}
              </label>
              <select
                className="w-full bg-white/30 backdrop-blur-sm border border-white/40 text-slate-900 p-4 md:p-3 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400/50 transition-all duration-300 text-base md:text-sm"
                value={filters.categoryId}
                onChange={(e) => onFiltersChange({ ...filters, categoryId: e.target.value })}
                disabled={loading}
              >
                {getCategories(t).map(cat => (
                  <option key={cat.id} value={cat.id} className="bg-slate-800 text-white">{cat.name}</option>
                ))}
              </select>
            </div>

            {/* Sort Filter */}
            <div>
              <label className="block text-base md:text-sm font-medium text-slate-700 mb-2">
                📊 {t('sortBy')}
              </label>
              <select
                className="w-full bg-white/30 backdrop-blur-sm border border-white/40 text-slate-900 p-4 md:p-3 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400/50 transition-all duration-300 text-base md:text-sm"
                value={filters.sort}
                onChange={(e) => onFiltersChange({ ...filters, sort: e.target.value as Filters["sort"] })}
                disabled={loading}
              >
                <option value="volume_desc" className="bg-slate-800 text-white">📈 {t('bestSelling')}</option>
                <option value="discount_desc" className="bg-slate-800 text-white">💰 {t('bestDiscount')}</option>
                <option value="rating_desc" className="bg-slate-800 text-white">⭐ {t('highestRating')}</option>
              </select>
            </div>

            {/* Video Filter */}
            <div className="flex items-end">
              <div className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="hasVideo"
                    checked={filters.hasVideo}
                    onChange={(e) => onFiltersChange({ ...filters, hasVideo: e.target.checked })}
                    className="w-5 h-5 text-emerald-600 focus:ring-emerald-500 border-white/20 rounded bg-white/10"
                    disabled={loading}
                  />
                  <label htmlFor="hasVideo" className="text-sm font-medium text-slate-900 flex items-center gap-2">
                    <span className="text-lg">🎥</span>
                    {t('onlyVideo')}
                  </label>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
