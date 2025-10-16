import React, { useState } from 'react';
import { Search, X, Check } from 'lucide-react';
// import { useLanguage } from '../hooks/useLanguage'; // Removed

interface AdvancedSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (searchData: {
    productQuery: string;
    categoryQuery: string;
    hasVideo: boolean;
    minPrice?: number;
    maxPrice?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) => void;
  searchCategories: string[];
  currentSearchQuery?: string;
  currentHasVideo?: boolean;
  currentCategory?: string;
  currentMinPrice?: number;
  currentMaxPrice?: number;
  currentSortBy?: string;
  currentSortOrder?: 'asc' | 'desc';
}

const AdvancedSearchModal: React.FC<AdvancedSearchModalProps> = ({
  isOpen,
  onClose,
  onSearch,
  searchCategories,
  currentSearchQuery = '',
  currentHasVideo = false,
  currentCategory = '',
  currentMinPrice = 0,
  currentMaxPrice = 1000000,
  currentSortBy = '',
  currentSortOrder = 'desc'
}) => {
  const [productQuery, setProductQuery] = useState(currentSearchQuery);
  const [hasVideo, setHasVideo] = useState(currentHasVideo);
  const [categoryQuery, setCategoryQuery] = useState(currentCategory);
  const [minPrice, setMinPrice] = useState(currentMinPrice);
  const [maxPrice, setMaxPrice] = useState(currentMaxPrice);
  const [sortBy, setSortBy] = useState(currentSortBy);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>(currentSortOrder);
  // const { t } = useLanguage(); // Removed

  // Update local state when props change
  React.useEffect(() => {
    setProductQuery(currentSearchQuery);
  }, [currentSearchQuery]);

  React.useEffect(() => {
    setHasVideo(currentHasVideo);
  }, [currentHasVideo]);

  React.useEffect(() => {
    setCategoryQuery(currentCategory);
  }, [currentCategory]);

  React.useEffect(() => {
    setMinPrice(currentMinPrice);
  }, [currentMinPrice]);

  React.useEffect(() => {
    setMaxPrice(currentMaxPrice);
  }, [currentMaxPrice]);

  React.useEffect(() => {
    setSortBy(currentSortBy);
  }, [currentSortBy]);

  React.useEffect(() => {
    setSortOrder(currentSortOrder);
  }, [currentSortOrder]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      productQuery: productQuery.trim(),
      categoryQuery: categoryQuery.trim(),
      hasVideo,
      minPrice: minPrice || 0,
      maxPrice: maxPrice || 1000000,
      sortBy: sortBy || undefined,
      sortOrder: sortOrder
    });
    onClose();
  };

  const handleCategoryButtonClick = (category: string) => {
    setProductQuery(category);
  };

  const handleClearAll = () => {
    setProductQuery('');
    setCategoryQuery('');
    setHasVideo(false);
    setMinPrice(0);
    setMaxPrice(1000000);
    setSortBy('');
    setSortOrder('desc');
  };


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-gradient-to-br from-purple-900/40 via-pink-900/40 to-indigo-900/40 backdrop-blur-xl rounded-2xl p-6 max-w-3xl w-full mx-4 border border-purple-400/30 shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Advanced Search</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-pink-300 transition-colors p-1 rounded-full hover:bg-pink-500/20"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Section 1: Product Name/ID Search */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-purple-300">
              Search by Product Name or ID
            </h3>
            <div className="relative">
              <input
                type="text"
                value={productQuery}
                onChange={(e) => setProductQuery(e.target.value)}
                placeholder="Product name or ID (e.g., 1005009716975587)"
                className="w-full bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-lg text-white placeholder-purple-200 px-3 py-2 pl-10 rounded-full border border-purple-400/40 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-60 focus:border-purple-400 transition-all duration-300 text-sm shadow-lg"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-300" />
            </div>
            
            {/* Category Quick Buttons */}
            <div>
              <h4 className="text-xs font-medium text-cyan-300 mb-2">Quick Categories:</h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { key: 'all', text: 'All' },
                  { key: 'electronic', text: 'Electronic' },
                  { key: 'luggage', text: 'Luggage' },
                  { key: 'sport', text: 'Sport' },
                  { key: 'furniture', text: 'Furniture' },
                  { key: 'homeGarden', text: 'Home & Garden' },
                  { key: 'jewelry', text: 'Jewelry' },
                  { key: 'baby', text: 'Baby' }
                ].map((category) => (
                  <button
                    key={category.key}
                    type="button"
                    onClick={() => handleCategoryButtonClick(category.text)}
                    className={`px-2 py-1 rounded-lg border transition-all duration-300 hover:scale-105 text-xs shadow-md ${
                      productQuery === category.text
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-cyan-400 shadow-cyan-500/25'
                        : 'bg-gradient-to-r from-cyan-800/30 to-blue-800/30 hover:from-cyan-700/40 hover:to-blue-700/40 text-cyan-200 border-cyan-400/40 hover:border-cyan-400/60'
                    }`}
                  >
                    {category.text}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-yellow-300">
              Price Range
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-yellow-200 mb-1">Min Price</label>
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value) || 0)}
                  placeholder="0"
                  min="0"
                  className="w-full bg-gradient-to-r from-yellow-800/30 to-orange-800/30 backdrop-blur-lg text-white placeholder-yellow-200 px-3 py-2 rounded-full border border-yellow-400/40 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-60 focus:border-yellow-400 transition-all duration-300 text-sm shadow-lg"
                />
              </div>
              <div>
                <label className="block text-xs text-yellow-200 mb-1">Max Price</label>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value) || 1000000)}
                  placeholder="1000000"
                  min="0"
                  className="w-full bg-gradient-to-r from-yellow-800/30 to-orange-800/30 backdrop-blur-lg text-white placeholder-yellow-200 px-3 py-2 rounded-full border border-yellow-400/40 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-60 focus:border-yellow-400 transition-all duration-300 text-sm shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Sort Options */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-indigo-300">
              Sort Options
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-indigo-200 mb-1">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-gradient-to-r from-indigo-800/30 to-purple-800/30 backdrop-blur-lg text-white px-3 py-2 rounded-full border border-indigo-400/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-60 focus:border-indigo-400 transition-all duration-300 text-sm shadow-lg"
                >
                  <option value="">Default (Volume)</option>
                  <option value="price">Price</option>
                  <option value="rating">Rating</option>
                  <option value="discount">Discount</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-indigo-200 mb-1">Order</label>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
                  className="w-full bg-gradient-to-r from-indigo-800/30 to-purple-800/30 backdrop-blur-lg text-white px-3 py-2 rounded-full border border-indigo-400/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-60 focus:border-indigo-400 transition-all duration-300 text-sm shadow-lg"
                >
                  <option value="desc">Descending</option>
                  <option value="asc">Ascending</option>
                </select>
              </div>
            </div>
          </div>

          {/* Video Filter */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-emerald-300">
              Video Filter
            </h3>
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => setHasVideo(!hasVideo)}
                className={`relative w-10 h-5 rounded-full transition-all duration-300 shadow-lg ${
                  hasVideo ? 'bg-gradient-to-r from-emerald-500 to-green-500' : 'bg-gradient-to-r from-gray-600 to-gray-500'
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 shadow-md ${
                    hasVideo ? 'transform translate-x-5' : ''
                  }`}
                />
              </button>
              <span className="text-emerald-200 font-medium text-sm">
                Only products with video
              </span>
              {hasVideo && (
                <Check className="w-4 h-4 text-emerald-400" />
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center pt-4 border-t border-purple-400/30">
            <button
              type="button"
              onClick={handleClearAll}
              className="px-4 py-2 bg-gradient-to-r from-orange-800/40 to-red-800/40 hover:from-orange-700/50 hover:to-red-700/50 text-orange-200 rounded-full border border-orange-400/40 hover:border-orange-400/60 transition-all duration-300 text-sm shadow-lg"
            >
Clear All
            </button>
            
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gradient-to-r from-gray-700/40 to-gray-600/40 hover:from-gray-600/50 hover:to-gray-500/50 text-gray-200 rounded-full border border-gray-400/40 hover:border-gray-400/60 transition-all duration-300 text-sm shadow-lg"
              >
Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm shadow-lg shadow-purple-500/25"
              >
Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdvancedSearchModal;
