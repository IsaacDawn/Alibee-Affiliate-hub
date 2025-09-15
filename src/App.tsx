import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n, { LANGS, dirFor } from './i18n';
import { AffiliatorShell } from './features/affiliator/AffiliatorShell';
import { LanguageSelector } from './components/LanguageSelector';
import { CurrencySelector } from './components/CurrencySelector';
import { CURRENCIES } from './constants';
import type { Currency } from './types';

export default function App() {
  const { t } = useTranslation();
  const [currency, setCurrency] = useState<Currency>(CURRENCIES.USD);
  

  const setLang = (lng: keyof typeof LANGS) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = dirFor(lng);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-emerald-100 to-orange-100 text-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-300/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Responsive Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-2xl animate-slide-in-left">
        {/* Mobile Header */}
        <div className="md:hidden px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/Logo.png" 
                    alt="Alibee Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl md:text-xl font-bold bg-gradient-to-r from-emerald-600 to-orange-600 bg-clip-text text-transparent">
                  Alibee
                </h1>
                <p className="text-sm md:text-xs text-slate-600">{t('affiliateHub')}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CurrencySelector
                currentCurrency={currency}
                onCurrencyChange={setCurrency}
                isMobile={true}
              />
              <LanguageSelector
                currentLang={i18n.language}
                onLanguageChange={(lang) => setLang(lang as any)}
                isMobile={true}
              />
              <button className="p-2.5 hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-105">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:block max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/Logo.png" 
                    alt="Alibee Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-3 border-white animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-orange-600 bg-clip-text text-transparent">
                  Alibee Affiliate Hub
                </h1>
                <p className="text-sm text-slate-600">{t('discoverShare')}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <CurrencySelector
                currentCurrency={currency}
                onCurrencyChange={setCurrency}
                isMobile={false}
              />
              <LanguageSelector
                currentLang={i18n.language}
                onLanguageChange={(lang) => setLang(lang as any)}
                isMobile={false}
              />
              <button className="p-3 hover:bg-white/10 rounded-2xl transition-all duration-300 hover:scale-105">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content with Responsive Styling */}
      <main className="pt-16 md:pt-20 pb-8 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
        <div className="relative z-10">
          <AffiliatorShell currency={currency} />
        </div>
      </main>


    </div>
  );
}
