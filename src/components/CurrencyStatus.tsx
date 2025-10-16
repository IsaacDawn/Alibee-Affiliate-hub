import React from 'react';
import { useCurrency } from '../hooks/useCurrency';

interface CurrencyStatusProps {
  className?: string;
}

export const CurrencyStatus: React.FC<CurrencyStatusProps> = ({ className = '' }) => {
  const { currentCurrency } = useCurrency();

  if (!currentCurrency) {
    return null;
  }

  return (
    <div className={`flex items-center gap-2 text-sm text-gray-600 ${className}`}>
      <span className="text-lg">{currentCurrency.flag}</span>
      <span className="font-medium">{currentCurrency.code}</span>
      <span className="text-gray-400">•</span>
      <span className="text-xs">{currentCurrency.name}</span>
    </div>
  );
};
