import { useState, useEffect } from 'react';
import { currencyLogger } from '../utils/currencyLogger';

export type Currency = 'USD' | 'EUR' | 'ILS';

export interface CurrencyConfig {
  code: Currency;
  name: string;
  symbol: string;
  flag: string;
}

export const currencies: CurrencyConfig[] = [
  { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
  { code: 'ILS', name: 'Israeli Shekel', symbol: '₪', flag: '🇮🇱' },
];

export const useCurrency = () => {
  const [currentCurrencyCode, setCurrentCurrencyCode] = useState<Currency>('USD');

  const changeCurrency = (currency: Currency) => {
    currencyLogger.info('useCurrency', 'Currency change requested', {
      from: currentCurrencyCode,
      to: currency
    });
    
    setCurrentCurrencyCode(currency);
    localStorage.setItem('preferred-currency', currency);
    
    currencyLogger.info('useCurrency', 'Currency changed and saved to localStorage', {
      newCurrency: currency,
      localStorageValue: localStorage.getItem('preferred-currency')
    });
  };

  useEffect(() => {
    // Load saved currency preference
    const savedCurrency = localStorage.getItem('preferred-currency') as Currency;
    
    currencyLogger.info('useCurrency', 'Loading currency from localStorage', {
      savedCurrency,
      isValidCurrency: savedCurrency && currencies.some(c => c.code === savedCurrency)
    });
    
    if (savedCurrency && currencies.some(c => c.code === savedCurrency)) {
      setCurrentCurrencyCode(savedCurrency);
      currencyLogger.info('useCurrency', 'Currency loaded from localStorage', {
        loadedCurrency: savedCurrency
      });
    } else {
      currencyLogger.info('useCurrency', 'Using default currency USD', {
        reason: !savedCurrency ? 'No saved currency' : 'Invalid saved currency'
      });
    }
  }, []);

  const formatPrice = (price: number, originalCurrency?: string) => {
    // If no original currency provided, use current currency
    const currency = originalCurrency || currentCurrencyCode;
    
    try {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
      }).format(price);
    } catch (error) {
      // Fallback to simple number formatting if currency is not supported
      const currencyConfig = currencies.find(c => c.code === currency);
      const symbol = currencyConfig?.symbol || currency;
      return `${symbol} ${price.toFixed(2)}`;
    }
  };

  // Get the full currency config object
  const currentCurrency = currencies.find(c => c.code === currentCurrencyCode) || currencies[0];

  return {
    currentCurrency,
    changeCurrency,
    formatPrice,
    currencies,
  };
};
