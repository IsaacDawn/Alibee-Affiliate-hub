import { useState, useCallback } from 'react';
import api from '../services/api';

interface CurrencyDetectionResult {
  detected_currency: string;
  detected_price: number;
  confidence: string;
  detection_method: string;
}

interface CurrencyDetectionHook {
  detectCurrency: (text: string) => Promise<string | null>;
  isDetecting: boolean;
  detectionError: string | null;
}

export const useCurrencyDetection = (): CurrencyDetectionHook => {
  const [isDetecting, setIsDetecting] = useState(false);
  const [detectionError, setDetectionError] = useState<string | null>(null);

  const detectCurrency = useCallback(async (text: string): Promise<string | null> => {
    if (!text || text.trim().length === 0) {
      return null;
    }

    setIsDetecting(true);
    setDetectionError(null);

    try {
      const response = await api.post<CurrencyDetectionResult>('/api/currency/detect', {
        text: text
      });

      return response.data.detected_currency;
    } catch (error) {
      console.error('Currency detection error:', error);
      setDetectionError('Failed to detect currency');
      return null;
    } finally {
      setIsDetecting(false);
    }
  }, []);

  return {
    detectCurrency,
    isDetecting,
    detectionError
  };
};
