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

export function LanguageSelector({ currentLang, onLanguageChange, isMobile: _isMobile = false }: LanguageSelectorProps) {
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
        className="flex items-center gap-1 px-1.5 py-1 rounded-md transition-all duration-300 hover:bg-white/20 hover:scale-105 bg-black/20 backdrop-blur-sm border border-white/20 text-white"
      >
        <span className="text-xs">🌍</span>
        <span className="text-xs font-medium">
          {currentLanguageName}
        </span>
        <svg 
          className={`w-2.5 h-2.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-32 bg-gray-800/95 backdrop-blur-xl border border-gray-600/50 rounded-md shadow-2xl z-50 overflow-hidden">
          <div className="py-1">
            {Object.entries(LANGS).map(([code, name]) => (
              <button
                key={code}
                onClick={() => {
                  onLanguageChange(code);
                  setIsOpen(false);
                }}
                className={`w-full px-2 py-1.5 text-left transition-all duration-300 flex items-center gap-1.5 text-xs ${
                  currentLang === code
                    ? "bg-blue-500/20 text-blue-400 font-medium"
                    : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                }`}
                style={{ direction: code === 'he' || code === 'ar' ? 'rtl' : 'ltr' }}
              >
                <span className="text-xs">🌍</span>
                <span className="text-xs flex-1">{name}</span>
                {currentLang === code && (
                  <svg className="w-2.5 h-2.5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
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
