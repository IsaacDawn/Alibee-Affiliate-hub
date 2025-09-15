type Props = {
    open: boolean;
    onClose: () => void;
    value: {
      q: string;
      categoryId: string;
      hasVideo: boolean;
      sort: "volume_desc" | "discount_desc" | "rating_desc";
    };
    onChange: (v: Props["value"]) => void;
  };

  const CATEGORIES = [
    { id: "", name: "All Categories" },
    { id: "100001", name: "Electronics" },
    { id: "100002", name: "Watches & Jewelry" },
    { id: "100003", name: "Phone Accessories" },
    { id: "100004", name: "Home & Garden" },
    { id: "100005", name: "Beauty & Health" },
    { id: "100006", name: "Sports & Outdoors" },
    { id: "100007", name: "Automotive" },
    { id: "100008", name: "Toys & Games" },
    { id: "100009", name: "Fashion" },
    { id: "100010", name: "Tools & Hardware" },
  ];
  
  export function SettingsDrawer({ open, onClose, value, onChange }: Props) {
    if (!open) return null;
  
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" onClick={onClose}>
      <div
        className="absolute left-0 top-0 h-full w-full sm:w-96 md:w-[400px] lg:w-[450px] bg-white/30 backdrop-blur-xl border-r border-white/40 p-6 space-y-6 shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Filters"
      >
        <div className="flex items-center justify-between border-b border-white/20 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">🔍</span>
            </div>
            <h3 className="font-bold text-2xl md:text-xl text-slate-900">Filters</h3>
          </div>
          <button 
            onClick={onClose} 
            aria-label="Close"
            className="p-3 md:p-2 hover:bg-white/20 rounded-xl text-slate-900 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
  
        <div className="space-y-6">
          <div>
            <label className="block text-base md:text-sm font-medium text-slate-700 mb-3">
              🔍 Search Keywords
            </label>
            <input
              placeholder="Product name, brand or keywords..."
              className="w-full bg-white/30 backdrop-blur-sm border border-white/40 text-slate-900 p-5 md:p-4 rounded-2xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400/50 placeholder-slate-500 transition-all duration-300 text-lg md:text-base"
              value={value.q}
              onChange={(e) => onChange({ ...value, q: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-base md:text-sm font-medium text-slate-700 mb-3">
              📂 Category
            </label>
            <select
              className="w-full bg-white/30 backdrop-blur-sm border border-white/40 text-slate-900 p-5 md:p-4 rounded-2xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400/50 transition-all duration-300 text-lg md:text-base"
              value={value.categoryId}
              onChange={(e) => onChange({ ...value, categoryId: e.target.value })}
            >
              {CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.id} className="bg-gray-800">{cat.name}</option>
              ))}
            </select>
          </div>
  
          <div>
            <label className="block text-base md:text-sm font-medium text-slate-700 mb-3">
              📊 Sort By
            </label>
            <select
              className="w-full bg-white/30 backdrop-blur-sm border border-white/40 text-slate-900 p-5 md:p-4 rounded-2xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400/50 transition-all duration-300 text-lg md:text-base"
              value={value.sort}
              onChange={(e) =>
                onChange({
                  ...value,
                  sort: e.target.value as Props["value"]["sort"],
                })
              }
            >
              <option value="volume_desc" className="bg-gray-800">📈 Best Selling</option>
              <option value="discount_desc" className="bg-gray-800">💰 Best Discount</option>
              <option value="rating_desc" className="bg-gray-800">⭐ Highest Rating</option>
            </select>
          </div>
  
          <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <input
              type="checkbox"
              id="hasVideo"
              checked={value.hasVideo}
              onChange={(e) => onChange({ ...value, hasVideo: e.target.checked })}
              className="w-6 h-6 md:w-5 md:h-5 text-purple-600 focus:ring-purple-500 border-white/20 rounded bg-white/10"
            />
            <label htmlFor="hasVideo" className="text-base md:text-sm font-medium text-slate-900 flex items-center gap-2">
              <span className="text-lg">🎥</span>
              Only products with video
            </label>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6">
          <button
            onClick={() => onChange({
              q: "",
              categoryId: "",
              hasVideo: false,
              sort: "volume_desc"
            })}
            className="w-full px-6 py-5 md:py-4 text-slate-900 border border-white/40 rounded-2xl hover:bg-white/20 transition-all duration-300 font-medium backdrop-blur-sm text-lg md:text-base"
          >
            <span className="flex items-center justify-center gap-2">
              <span>🔄</span>
              <span>Clear All Filters</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
  }
  
