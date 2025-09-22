import { API_ENDPOINTS } from '../constants';

export interface ExchangeRates {
  [currency: string]: number;
}

export interface ExchangeRatesResponse {
  status: string;
  message: string;
  base_currency: string;
  rates: ExchangeRates;
  supported_currencies: string[];
  timestamp: number;
  source: string;
}

export interface CurrencyConversionResponse {
  status: string;
  message: string;
  original_amount: number;
  from_currency: string;
  to_currency: string;
  converted_amount: number;
  timestamp: number;
}

class ExchangeRateService {
  private cache: Map<string, { data: ExchangeRates; timestamp: number }> = new Map();
  private cacheDuration = 3600000; // 1 hour in milliseconds

  /**
   * Get current exchange rates
   */
  async getExchangeRates(baseCurrency: string = 'USD'): Promise<ExchangeRatesResponse> {
    const cacheKey = `rates_${baseCurrency}`;
    const cached = this.cache.get(cacheKey);
    
    // Check if cache is still valid
    if (cached && Date.now() - cached.timestamp < this.cacheDuration) {
      return {
        status: 'success',
        message: 'Exchange rates retrieved from cache',
        base_currency: baseCurrency,
        rates: cached.data,
        supported_currencies: ['USD', 'EUR', 'ILS'],
        timestamp: cached.timestamp / 1000,
        source: 'cache'
      };
    }

    try {
      const url = `${API_ENDPOINTS.BASE_URL}/exchange-rates?base_currency=${baseCurrency}`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      
      
      // Handle response format from our backend: {"base":"CNY","rates":{"USD":0.14,...}}
      const rates = data.rates || data;
      
      // Cache the response
      this.cache.set(cacheKey, {
        data: rates,
        timestamp: Date.now()
      });
      
      // Return in expected format
      const result = {
        status: 'success',
        message: 'Exchange rates retrieved successfully',
        base_currency: baseCurrency,
        rates: rates,
        supported_currencies: Object.keys(rates),
        timestamp: Date.now() / 1000,
        source: 'api'
      };
      
      return result;
    } catch (error) {
      
      // Return cached data if available, even if expired
      if (cached) {
        return {
          status: 'success',
          message: 'Exchange rates retrieved from expired cache',
          base_currency: baseCurrency,
          rates: cached.data,
          supported_currencies: ['USD', 'EUR', 'ILS'],
          timestamp: cached.timestamp / 1000,
          source: 'expired_cache'
        };
      }
      
      throw error;
    }
  }

  /**
   * Convert amount from one currency to another
   */
  async convertCurrency(
    amount: number, 
    fromCurrency: string, 
    toCurrency: string
  ): Promise<CurrencyConversionResponse> {
    try {
      const response = await fetch(`${API_ENDPOINTS.BASE_URL}/convert-currency?amount=${amount}&from_currency=${fromCurrency}&to_currency=${toCurrency}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data: CurrencyConversionResponse = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Convert amount using cached exchange rates
   */
  async convertCurrencyCached(
    amount: number, 
    fromCurrency: string, 
    toCurrency: string
  ): Promise<number> {
    if (fromCurrency === toCurrency) {
      return amount;
    }

    try {
      const ratesResponse = await this.getExchangeRates(fromCurrency);
      const rates = ratesResponse?.rates;
      
      
      // Check if rates exists and is an object
      if (rates && typeof rates === 'object' && toCurrency in rates) {
        const convertedAmount = amount * rates[toCurrency];
        return convertedAmount;
      }
      
      // If direct conversion not available, try USD as intermediate
      if (fromCurrency !== 'USD' && toCurrency !== 'USD') {
        const usdRates = await this.getExchangeRates('USD');
        const usdRatesData = usdRates?.rates;
        if (usdRatesData && typeof usdRatesData === 'object' && 
            fromCurrency in usdRatesData && toCurrency in usdRatesData) {
          const usdAmount = amount / usdRatesData[fromCurrency];
          return usdAmount * usdRatesData[toCurrency];
        }
      }
      
      return amount;
    } catch (error) {
      return amount;
    }
  }

  /**
   * Format price with currency symbol
   */
  formatPrice(amount: number, currency: string): string {
    const symbols: { [key: string]: string } = {
      'USD': '$',
      'EUR': '€',
      'ILS': '₪'
    };
    
    const symbol = symbols[currency] || currency;
    return `${symbol}${amount.toFixed(2)}`;
  }

  /**
   * Clear cache
   */
  clearCache(): void {
    this.cache.clear();
  }

  /**
   * Get supported currencies
   */
  getSupportedCurrencies(): string[] {
    return ['USD', 'EUR', 'ILS'];
  }
}

export const exchangeRateService = new ExchangeRateService();
