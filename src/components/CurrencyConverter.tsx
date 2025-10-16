import React, { useState } from 'react';
import { useCurrency } from '../hooks/useCurrency';
import { useCurrencyConversion } from '../hooks/useCurrencyConversion';
import { useCurrencyDetection } from '../hooks/useCurrencyDetection';

interface CurrencyConverterProps {
  price: number;
  originalCurrency?: string;
  productTitle?: string;
  className?: string;
}

export const CurrencyConverter: React.FC<CurrencyConverterProps> = ({
  price,
  originalCurrency = 'USD',
  productTitle = '',
  className = ''
}) => {
  const { currentCurrency } = useCurrency();
  const { convertPriceSync, isConverting } = useCurrencyConversion();
  const { detectCurrency } = useCurrencyDetection();
  
  const [convertedPrice, setConvertedPrice] = useState<number | null>(null);
  const [detectedCurrency, setDetectedCurrency] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    const performConversion = async () => {
      if (!currentCurrency || !price) {
        setConvertedPrice(null);
        return;
      }

      setIsLoading(true);

      try {
        // Detect currency from product title if available
        let fromCurrency = originalCurrency;
        if (productTitle) {
          const detected = await detectCurrency(productTitle);
          if (detected) {
            fromCurrency = detected;
            setDetectedCurrency(detected);
          }
        }

        // Convert price
        const converted = await convertPriceSync(price, fromCurrency);
        setConvertedPrice(converted);
      } catch (error) {
        console.error('Currency conversion failed:', error);
        setConvertedPrice(null);
      } finally {
        setIsLoading(false);
      }
    };

    performConversion();
  }, [price, originalCurrency, productTitle, currentCurrency, convertPriceSync, detectCurrency]);

  const formatPrice = (price: number, currency: string) => {
    try {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
      }).format(price);
    } catch (error) {
      return `${currency} ${price.toFixed(2)}`;
    }
  };

  if (isLoading || isConverting) {
    return (
      <div className={`text-sm text-gray-500 ${className}`}>
        Converting...
      </div>
    );
  }

  if (convertedPrice !== null && currentCurrency) {
    return (
      <div className={className}>
        <div className="text-xl font-bold text-green-600">
          {formatPrice(convertedPrice, currentCurrency.code)}
        </div>
        {detectedCurrency && detectedCurrency !== currentCurrency.code && (
          <div className="text-xs text-gray-500 mt-1">
            From {detectedCurrency} • {formatPrice(price, originalCurrency)}
          </div>
        )}
      </div>
    );
  }

  // Fallback to original price
  return (
    <div className={className}>
      <div className="text-xl font-bold">
        {formatPrice(price, originalCurrency)}
      </div>
    </div>
  );
};
