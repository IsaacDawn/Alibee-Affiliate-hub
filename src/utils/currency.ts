// Currency utility functions
import { CURRENCIES } from '../constants';
import type { Currency } from '../types';

export function formatPrice(price: number, currencyCode: string): string {
  const currency = CURRENCIES[currencyCode as keyof typeof CURRENCIES];
  if (!currency) {
    return `${price.toFixed(2)} ${currencyCode}`;
  }

  // Format based on currency
  const formattedPrice = price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return `${currency.symbol}${formattedPrice}`;
}

export function convertCurrency(
  amount: number, 
  fromCurrency: string, 
  toCurrency: string,
  exchangeRates?: Record<string, number>
): number {
  if (fromCurrency === toCurrency) {
    return amount;
  }

  if (!exchangeRates) {
    // Fallback to 1:1 conversion if no rates provided
    return amount;
  }

  const fromRate = exchangeRates[fromCurrency] || 1;
  const toRate = exchangeRates[toCurrency] || 1;

  return (amount / fromRate) * toRate;
}

export function getCurrencySymbol(currencyCode: string): string {
  const currency = CURRENCIES[currencyCode as keyof typeof CURRENCIES];
  return currency?.symbol || currencyCode;
}

export function getCurrencyName(currencyCode: string): string {
  const currency = CURRENCIES[currencyCode as keyof typeof CURRENCIES];
  return currency?.name || currencyCode;
}

export function getAllCurrencies(): Currency[] {
  return Object.values(CURRENCIES);
}

export function isValidCurrency(currencyCode: string): boolean {
  return currencyCode in CURRENCIES;
}

// Exchange rates (updated regularly in a real app)
const EXCHANGE_RATES: Record<string, number> = {
  USD: 1.0,
  EUR: 0.85,
  ILS: 3.65,
  GBP: 0.73,
  JPY: 110.0,
  CAD: 1.25,
  AUD: 1.35,
  CHF: 0.92,
  CNY: 6.45,
  INR: 75.0,
  KRW: 1200.0,
  BRL: 5.2,
  MXN: 20.0,
  RUB: 75.0,
  TRY: 8.5,
  ZAR: 15.0,
  SEK: 8.5,
  NOK: 8.8,
  DKK: 6.3,
  PLN: 3.9,
  CZK: 21.5,
  HUF: 300.0,
  AED: 3.67,
  SAR: 3.75,
  EGP: 15.7,
  THB: 33.0,
  VND: 23000.0,
  IDR: 14000.0
};

// Convert amount from one currency to another
export function convert(amount: number, fromCurrency: string, toCurrency: string): number {
  if (fromCurrency === toCurrency) {
    return amount;
  }

  const fromRate = EXCHANGE_RATES[fromCurrency] || 1.0;
  const toRate = EXCHANGE_RATES[toCurrency] || 1.0;
  
  // Convert from source currency to target currency
  return (amount / fromRate) * toRate;
}

// Legacy function for backward compatibility
export function convertFromUSD(amount: number, currency: Currency): number {
  return convert(amount, 'USD', currency.code);
}

// Get real-time exchange rates from API (optional enhancement)
export async function getRealTimeExchangeRates(): Promise<Record<string, number> | null> {
  try {
    // Using a free exchange rate API
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    if (response.ok) {
      const data = await response.json();
      return data.rates;
    }
  } catch (error) {
    console.warn('Failed to fetch real-time exchange rates, using static rates:', error);
  }
  return null;
}

// Convert with real-time rates if available
export async function convertWithRealTimeRates(amount: number, fromCurrency: string, toCurrency: string): Promise<number> {
  try {
    const realRates = await getRealTimeExchangeRates();
    if (realRates && realRates[toCurrency]) {
      return amount * realRates[toCurrency];
    }
  } catch (error) {
    console.warn('Using static exchange rates:', error);
  }
  
  // Fallback to static rates
  return convert(amount, fromCurrency, toCurrency);
}
