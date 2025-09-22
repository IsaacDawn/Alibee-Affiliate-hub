import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n, { LANGS, dirFor } from './i18n';
import { AffiliatorShell } from './features/affiliator/AffiliatorShell';
import { LanguageSelector } from './components/LanguageSelector';
import { CurrencySelector } from './components/CurrencySelector';
// import { BackToTop } from './components/BackToTop';
import ErrorBoundary from './components/ErrorBoundary';
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
    <ErrorBoundary>
      <div className="h-screen bg-black text-white overflow-hidden">
        {/* TikTok-style Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800/50">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/Logo.png" 
                    alt="Alibee Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">
                  Alibee
                </h1>
                <p className="text-xs text-gray-400">{t('affiliateHub')}</p>
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
            </div>
          </div>
        </header>

        {/* Main Content - TikTok Style */}
        <main className="h-screen pt-16">
          <AffiliatorShell currency={currency} />
        </main>
      </div>
    </ErrorBoundary>
  );
}
