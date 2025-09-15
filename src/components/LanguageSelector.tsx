import { useState, useRef, useEffect } from "react";

const LANGS = {
  en: "English",
  he: "עברית",
  ar: "العربية",
};

interface LanguageSelectorProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
  isMobile?: boolean;
}

export function LanguageSelector({ currentLang, onLanguageChange, isMobile = false }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentLanguageName = LANGS[currentLang as keyof typeof LANGS] || "English";

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-3 md:px-3 md:py-2 rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 ${
          isMobile 
            ? "bg-slate-100/80 text-slate-700" 
            : "bg-slate-100/80 text-slate-700"
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">🌍</span>
          <span className={`font-medium ${isMobile ? "text-sm" : "text-sm"}`}>
            {currentLanguageName}
          </span>
        </div>
        <svg 
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white/90 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl z-50 overflow-hidden animate-scale-in">
          <div className="py-2">
            {Object.entries(LANGS).map(([code, name]) => (
              <button
                key={code}
                onClick={() => {
                  onLanguageChange(code);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-4 md:py-3 text-left transition-all duration-300 flex items-center gap-3 text-base md:text-sm ${
                  currentLang === code
                    ? "bg-gradient-to-r from-emerald-500/20 to-orange-500/20 text-slate-900 font-medium"
                    : "text-slate-700 hover:bg-white/20 hover:text-slate-900"
                }`}
                style={{ direction: code === 'he' || code === 'ar' ? 'rtl' : 'ltr' }}
              >
                <span className="text-lg">🌍</span>
                <span className="text-sm flex-1">{name}</span>
                {currentLang === code && (
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
