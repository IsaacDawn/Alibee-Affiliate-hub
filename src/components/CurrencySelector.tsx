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
  isMobile = false,
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
        className={`flex items-center gap-2 ${isMobile ? 'px-4 py-3 rounded-lg text-sm' : 'px-4 py-2 rounded-xl text-sm'} bg-slate-100/80 hover:bg-white/20 transition-all duration-300 font-medium text-slate-700 backdrop-blur-sm hover:text-slate-900`}
      >
        <span className="text-lg">{currentCurrencyInfo.flag}</span>
        <span>{currentCurrencyInfo.symbol}</span>
        <span className="text-sm md:text-xs text-slate-500">{currentCurrency.code}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-white/90 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl z-50 overflow-hidden animate-scale-in">
          <div className="py-2">
            {Object.entries(CURRENCIES).map(([code, info]) => (
              <button
                key={code}
                onClick={() => {
                  onCurrencyChange(info);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-4 md:py-3 text-left transition-all duration-300 flex items-center gap-3 text-base md:text-sm ${
                  currentCurrency.code === code
                    ? "bg-gradient-to-r from-emerald-500/20 to-orange-500/20 text-slate-900 font-medium"
                    : "text-slate-700 hover:bg-white/20 hover:text-slate-900"
                }`}
              >
                <span className="text-lg">{info.flag}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{info.symbol}</span>
                    <span className="text-sm text-slate-600">{code}</span>
                  </div>
                  <div className="text-xs text-slate-500">{info.name}</div>
                </div>
                {currentCurrency.code === code && (
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
