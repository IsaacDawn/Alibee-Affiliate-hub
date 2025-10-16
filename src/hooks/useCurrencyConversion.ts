import { useState, useCallback } from 'react';
import { useCurrency } from './useCurrency';
import api from '../services/api';
import { currencyLogger } from '../utils/currencyLogger';

interface CurrencyConversionResult {
  original_price: number;
  converted_price: number;
  from_currency: string;
  to_currency: string;
  exchange_rate: number;
  conversion_date: string;
}

interface CurrencyConversionHook {
  convertPrice: (price: number, fromCurrency: string) => Promise<number | null>;
  convertPriceSync: (price: number, fromCurrency: string, toCurrency?: string) => Promise<number | null>;
  isConverting: boolean;
  conversionError: string | null;
}

export const useCurrencyConversion = (): CurrencyConversionHook => {
  const { currentCurrency } = useCurrency();
  const [isConverting, setIsConverting] = useState(false);
  const [conversionError, setConversionError] = useState<string | null>(null);

  const convertPrice = useCallback(async (
    price: number, 
    fromCurrency: string
  ): Promise<number | null> => {
    currencyLogger.info('useCurrencyConversion', 'convertPrice called', {
      price,
      fromCurrency,
      currentCurrency: currentCurrency?.code,
      hasCurrentCurrency: !!currentCurrency
    });

    if (!currentCurrency || !price || price <= 0) {
      currencyLogger.warn('useCurrencyConversion', 'Invalid parameters for conversion', {
        price,
        fromCurrency,
        currentCurrency: currentCurrency?.code
      });
      return null;
    }

    // اگر ارز مبدأ و مقصد یکسان باشد، قیمت اصلی را برگردان
    if (fromCurrency === currentCurrency.code) {
      currencyLogger.info('useCurrencyConversion', 'Same currency, returning original price', {
        fromCurrency,
        toCurrency: currentCurrency.code,
        price
      });
      return price;
    }

    setIsConverting(true);
    setConversionError(null);

    try {
      currencyLogger.info('useCurrencyConversion', 'Starting API call for conversion', {
        price,
        from_currency: fromCurrency,
        to_currency: currentCurrency.code
      });

      // Backend automatically uses USD base conversion strategy:
      // 1. Try direct conversion first
      // 2. If not available, convert to USD first, then to target currency
      // 3. If USD conversion fails, try other major currencies as intermediates
      const response = await api.post<CurrencyConversionResult>('/api/currency/convert', {
        price: price,
        from_currency: fromCurrency,
        to_currency: currentCurrency.code
      });

      currencyLogger.info('useCurrencyConversion', 'API response received', {
        original_price: response.data.original_price,
        converted_price: response.data.converted_price,
        from_currency: response.data.from_currency,
        to_currency: response.data.to_currency,
        exchange_rate: response.data.exchange_rate
      });

      return response.data.converted_price;
    } catch (error) {
      currencyLogger.error('useCurrencyConversion', 'Currency conversion API error', {
        error: error,
        price,
        fromCurrency,
        toCurrency: currentCurrency.code
      });
      console.error('Currency conversion error:', error);
      setConversionError('Failed to convert currency');
      return null;
    } finally {
      setIsConverting(false);
    }
  }, [currentCurrency]);

  const convertPriceSync = useCallback(async (
    price: number, 
    fromCurrency: string,
    toCurrency?: string
  ): Promise<number | null> => {
    const targetCurrency = toCurrency || currentCurrency?.code;
    
    if (!targetCurrency || !price || price <= 0) {
      return null;
    }

    // اگر ارز مبدأ و مقصد یکسان باشد، قیمت اصلی را برگردان
    if (fromCurrency === targetCurrency) {
      return price;
    }

    try {
      const response = await api.post<CurrencyConversionResult>('/api/currency/convert', {
        price: price,
        from_currency: fromCurrency,
        to_currency: targetCurrency
      });

      return response.data.converted_price;
    } catch (error) {
      console.error('Currency conversion error:', error);
      return null;
    }
  }, [currentCurrency]);

  return {
    convertPrice,
    convertPriceSync,
    isConverting,
    conversionError
  };
};
