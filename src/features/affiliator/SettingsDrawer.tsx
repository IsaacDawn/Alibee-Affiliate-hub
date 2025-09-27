import { useState, useEffect } from "react";
import { useCategories } from "../../hooks/useCategories";
// import { PriceRangeFilter } from "./PriceRangeFilter";

type Props = {
    open: boolean;
    onClose: () => void;
    value: {
      q: string;
      sort: "volume_desc" | "discount_desc" | "rating_desc";
      minPrice?: number;
      maxPrice?: number;
    };
    onChange: (v: Props["value"]) => void;
    currency: any;
  };
  
  export function SettingsDrawer({ open, onClose, value, onChange, currency: _currency }: Props) {
    const { } = useCategories();
    const [searchQuery, setSearchQuery] = useState("");
    const [searchHistory, setSearchHistory] = useState<string[]>([]);
    
    // Load search history from localStorage
    useEffect(() => {
      const saved = localStorage.getItem('searchHistory');
      if (saved) {
        try {
          setSearchHistory(JSON.parse(saved));
        } catch (e) {
          setSearchHistory([]);
        }
      }
    }, []);
    
    // Set search query when drawer opens
    useEffect(() => {
      if (open) {
        setSearchQuery(value.q || "");
      }
    }, [open, value.q]);
    
    const handleSearch = () => {
      if (searchQuery.trim()) {
        const trimmedQuery = searchQuery.trim();
        onChange({ ...value, q: trimmedQuery });
        
        // Add to search history
        const newHistory = [trimmedQuery, ...searchHistory.filter(h => h !== trimmedQuery)].slice(0, 10);
        setSearchHistory(newHistory);
        localStorage.setItem('searchHistory', JSON.stringify(newHistory));
        
        onClose(); // Close the drawer after search
      }
    };

    const handleQuickSearch = (searchTerm: string) => {
      setSearchQuery(searchTerm);
      onChange({ ...value, q: searchTerm });
      
      // Add to search history
      const newHistory = [searchTerm, ...searchHistory.filter(h => h !== searchTerm)].slice(0, 10);
      setSearchHistory(newHistory);
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
      
      onClose(); // Close drawer after selection
    };
    
    if (!open) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex items-center justify-center overflow-y-auto" onClick={onClose}>
      <div className="w-full max-w-lg p-6 space-y-6 text-white" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-white" onClick={onClose}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Search Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Search Products</label>
          <input 
            type="text" 
            placeholder="Type product name (e.g., hat, phone, laptop) or product ID (e.g., 1005001234567890)..." 
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
          
          
          {/* Product ID Search Indicator */}
          {searchQuery.trim().match(/^\d{10,}$/) && (
            <div className="text-xs text-blue-400 bg-blue-900/20 p-2 rounded border border-blue-500/30">
              <span className="text-blue-300">🔍 Product ID search detected:</span> {searchQuery.trim()}
            </div>
          )}
          
          <button 
            onClick={handleSearch}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
          >
            🔍 Search Products
          </button>
        </div>




        {/* Hot Products Button */}
        <button 
          className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-bold transition-all duration-300"
          onClick={() => {
            console.log(`🔍 Hot products search`);
            setSearchQuery("hot products");
            onChange({ ...value, q: "hot products" });
            
            // Add to search history
            const newHistory = ["hot products", ...searchHistory.filter(h => h !== "hot products")].slice(0, 10);
            setSearchHistory(newHistory);
            localStorage.setItem('searchHistory', JSON.stringify(newHistory));
            
            onClose(); // Close drawer after selection
          }}
        >
          🔥 Hot Products
        </button>

        {/* Search History */}
        {searchHistory.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Recent Searches</h3>
            <div className="flex flex-wrap gap-2">
              {searchHistory.slice(0, 5).map((term, index) => (
                <button 
                  key={index}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded-full text-sm transition-all duration-300"
                  onClick={() => handleQuickSearch(term)}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quick Search Suggestions */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold">Quick Search</h3>
          <div className="flex flex-wrap gap-2">
            {['phone', 'laptop', 'watch', 'shoes', 'bag', 'hat'].map((term) => (
              <button 
                key={term}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full text-sm transition-all duration-300"
                onClick={() => handleQuickSearch(term)}
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Product ID Search Examples */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold">Search by Product ID</h3>
          <div className="flex flex-wrap gap-2">
            {["1005001234567890", "1005001234567892", "1005001234567895"].map((productId) => (
              <button 
                key={productId}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-full text-sm transition-all duration-300 font-mono"
                onClick={() => handleQuickSearch(productId)}
              >
                {productId}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-400">
            Click any product ID above to search for that specific product
          </p>
        </div>
      </div>
    </div>
  );
  }
  
