import { useState, useRef, useEffect } from "react";
import { CURRENCIES } from "../constants";
import type { Currency } from "../types";

interface CurrencySelectorProps {
  currentCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  isMobile?: boolean;
}

export function CurrencySelector({
  currentCurrency,
  onCurrencyChange,
  isMobile: _isMobile = false,
}: CurrencySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentCurrencyInfo = currentCurrency;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-1.5 py-1 rounded-md transition-all duration-300 hover:bg-white/20 hover:scale-105 bg-black/20 backdrop-blur-sm border border-white/20 text-white"
      >
        <span className="text-xs">{currentCurrencyInfo.flag}</span>
        <span className="text-xs font-medium">{currentCurrencyInfo.symbol}</span>
        <span className="text-xs text-gray-300">{currentCurrency.code}</span>
        <svg
          className={`w-2.5 h-2.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-36 bg-gray-800/95 backdrop-blur-xl border border-gray-600/50 rounded-md shadow-2xl z-50 overflow-hidden">
          <div className="py-1">
            {Object.entries(CURRENCIES).map(([code, info]) => (
              <button
                key={code}
                onClick={() => {
                  onCurrencyChange(info);
                  setIsOpen(false);
                }}
                className={`w-full px-2 py-1.5 text-left transition-all duration-300 flex items-center gap-1.5 text-xs ${
                  currentCurrency.code === code
                    ? "bg-blue-500/20 text-blue-400 font-medium"
                    : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                }`}
              >
                <span className="text-xs">{info.flag}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-medium">{info.symbol}</span>
                    <span className="text-xs text-gray-400">{code}</span>
                  </div>
                </div>
                {currentCurrency.code === code && (
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
