import React, { useState } from 'react';
import { Search, X, Loader2 } from 'lucide-react';
// import { useLanguage } from '../hooks/useLanguage'; // Removed

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  loading?: boolean;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder, 
  loading = false,
  className = ""
}) => {
  const [query, setQuery] = useState('');
  // const { t } = useLanguage(); // Removed

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

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          {loading ? (
            <Loader2 className="h-5 w-5 text-purple-400 animate-spin" />
          ) : (
            <Search className="h-5 w-5 text-gray-400" />
          )}
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder || "Search amazing products..."}
          className="search-bar block w-full pl-12 pr-12 py-4 rounded-2xl leading-5 text-white placeholder-gray-300 focus:outline-none text-lg font-medium"
          disabled={loading}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
          {query && !loading && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          )}
          {loading && (
            <div className="flex items-center space-x-2">
              <Loader2 className="h-4 w-4 text-purple-400 animate-spin" />
              <span className="text-sm text-gray-300">Searching...</span>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
