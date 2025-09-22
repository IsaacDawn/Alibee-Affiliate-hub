import React, { useState, useEffect } from 'react';
import type { Currency } from '../../types';

interface PriceRangeFilterProps {
  currency: Currency;
  minPrice?: number;
  maxPrice?: number;
  onPriceRangeChange: (minPrice: number | undefined, maxPrice: number | undefined) => void;
  className?: string;
}

export const PriceRangeFilter: React.FC<PriceRangeFilterProps> = ({
  currency,
  minPrice,
  maxPrice,
  onPriceRangeChange,
  className = ""
}) => {
  const [localMinPrice, setLocalMinPrice] = useState<string>(minPrice?.toString() || '');
  const [localMaxPrice, setLocalMaxPrice] = useState<string>(maxPrice?.toString() || '');

  // Update local state when props change
  useEffect(() => {
    setLocalMinPrice(minPrice?.toString() || '');
    setLocalMaxPrice(maxPrice?.toString() || '');
  }, [minPrice, maxPrice]);

  const handleMinPriceChange = (value: string) => {
    setLocalMinPrice(value);
    const numValue = value === '' ? undefined : parseFloat(value);
    onPriceRangeChange(numValue, maxPrice);
  };

  const handleMaxPriceChange = (value: string) => {
    setLocalMaxPrice(value);
    const numValue = value === '' ? undefined : parseFloat(value);
    onPriceRangeChange(minPrice, numValue);
  };

  const clearFilters = () => {
    setLocalMinPrice('');
    setLocalMaxPrice('');
    onPriceRangeChange(undefined, undefined);
  };

  const hasActiveFilters = minPrice !== undefined || maxPrice !== undefined;

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-4 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-gray-900">
          Price Range ({currency.symbol})
        </h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-xs text-emerald-600 hover:text-emerald-700 font-medium"
          >
            Clear
          </button>
        )}
      </div>

      <div className="space-y-3">
        {/* Minimum Price */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Minimum Price
          </label>
          <div className="relative">
            <input
              type="number"
              value={localMinPrice}
              onChange={(e) => handleMinPriceChange(e.target.value)}
              placeholder="0"
              min="0"
              step="0.01"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 text-sm">{currency.symbol}</span>
            </div>
          </div>
        </div>

        {/* Maximum Price */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Maximum Price
          </label>
          <div className="relative">
            <input
              type="number"
              value={localMaxPrice}
              onChange={(e) => handleMaxPriceChange(e.target.value)}
              placeholder="No limit"
              min="0"
              step="0.01"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 text-sm">{currency.symbol}</span>
            </div>
          </div>
        </div>

        {/* Price Range Display */}
        {hasActiveFilters && (
          <div className="pt-2 border-t border-gray-100">
            <div className="text-xs text-gray-600">
              <span className="font-medium">Active Filter:</span>
              <div className="mt-1">
                {minPrice !== undefined && (
                  <span className="inline-block bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs mr-1">
                    From {currency.symbol}{minPrice}
                  </span>
                )}
                {maxPrice !== undefined && (
                  <span className="inline-block bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs">
                    To {currency.symbol}{maxPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Quick Price Ranges */}
        <div className="pt-2 border-t border-gray-100">
          <div className="text-xs font-medium text-gray-700 mb-2">Quick Ranges:</div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setLocalMinPrice('0');
                setLocalMaxPrice('50');
                onPriceRangeChange(0, 50);
              }}
              className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors"
            >
              {currency.symbol}0 - {currency.symbol}50
            </button>
            <button
              onClick={() => {
                setLocalMinPrice('50');
                setLocalMaxPrice('100');
                onPriceRangeChange(50, 100);
              }}
              className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors"
            >
              {currency.symbol}50 - {currency.symbol}100
            </button>
            <button
              onClick={() => {
                setLocalMinPrice('100');
                setLocalMaxPrice('200');
                onPriceRangeChange(100, 200);
              }}
              className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors"
            >
              {currency.symbol}100 - {currency.symbol}200
            </button>
            <button
              onClick={() => {
                setLocalMinPrice('200');
                setLocalMaxPrice('');
                onPriceRangeChange(200, undefined);
              }}
              className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors"
            >
              {currency.symbol}200+
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
