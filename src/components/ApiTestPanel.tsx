import React, { useState } from 'react';
import { useCurrency } from '../hooks/useCurrency';
import { useSearchParams } from '../hooks/useSearchParams';
import api from '../services/api';

interface ApiTestPanelProps {
  isVisible?: boolean;
}

export const ApiTestPanel: React.FC<ApiTestPanelProps> = ({ isVisible = false }) => {
  const [testResults, setTestResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { currentCurrency } = useCurrency();
  const { searchParams } = useSearchParams();

  const addTestResult = (test: string, result: any, error?: any) => {
    setTestResults(prev => [{
      id: Date.now(),
      test,
      result,
      error,
      timestamp: new Date().toISOString()
    }, ...prev.slice(0, 9)]); // Keep only last 10 results
  };

  const testComprehensiveSearch = async () => {
    setIsLoading(true);
    try {
      const response = await api.get('/api/search/comprehensive', {
        params: {
          q: 'shoes',
          page: 1,
          pageSize: 10,
          target_currency: currentCurrency?.code || 'USD',
          min_price: 10,
          max_price: 100,
          sort_by: 'volume_desc',
          only_with_video: 0,
          category: 'Electronics'
        }
      });
      
      addTestResult('Comprehensive Search', {
        success: response.data.success,
        itemsCount: response.data.items?.length || 0,
        queryType: response.data.query_type,
        hasMore: response.data.hasMore,
        currencyConversion: response.data.currency_conversion
      });
    } catch (error) {
      addTestResult('Comprehensive Search', null, error);
    } finally {
      setIsLoading(false);
    }
  };

  const testCurrencyConversion = async () => {
    setIsLoading(true);
    try {
      const response = await api.post('/api/currency/convert', {
        price: 100,
        from_currency: 'USD',
        to_currency: currentCurrency?.code || 'EUR'
      });
      
      addTestResult('Currency Conversion', response.data);
    } catch (error) {
      addTestResult('Currency Conversion', null, error);
    } finally {
      setIsLoading(false);
    }
  };

  const testCurrentSearchParams = () => {
    addTestResult('Current Search Params', {
      searchParams,
      currentCurrency: currentCurrency?.code,
      timestamp: new Date().toISOString()
    });
  };

  const clearResults = () => {
    setTestResults([]);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/90 text-white p-4 rounded-lg max-w-md max-h-96 overflow-hidden border border-purple-400/30">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-purple-300">API Test Panel</h3>
        <button
          onClick={clearResults}
          className="text-xs bg-red-500 px-2 py-1 rounded hover:bg-red-600"
        >
          Clear
        </button>
      </div>

      <div className="space-y-2 mb-3">
        <button
          onClick={testComprehensiveSearch}
          disabled={isLoading}
          className="w-full text-xs bg-blue-500 px-2 py-1 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {isLoading ? 'Testing...' : 'Test Comprehensive Search'}
        </button>
        
        <button
          onClick={testCurrencyConversion}
          disabled={isLoading}
          className="w-full text-xs bg-green-500 px-2 py-1 rounded hover:bg-green-600 disabled:opacity-50"
        >
          {isLoading ? 'Testing...' : 'Test Currency Conversion'}
        </button>
        
        <button
          onClick={testCurrentSearchParams}
          className="w-full text-xs bg-purple-500 px-2 py-1 rounded hover:bg-purple-600"
        >
          Show Current Params
        </button>
      </div>

      <div className="max-h-48 overflow-y-auto space-y-2">
        {testResults.map((result) => (
          <div key={result.id} className="border-b border-gray-600 pb-2 text-xs">
            <div className="font-semibold text-cyan-300">{result.test}</div>
            <div className="text-gray-400 text-xs">{result.timestamp}</div>
            {result.error ? (
              <div className="text-red-400">
                Error: {result.error.message || JSON.stringify(result.error)}
              </div>
            ) : (
              <div className="text-gray-300">
                <pre className="whitespace-pre-wrap text-xs">
                  {JSON.stringify(result.result, null, 2)}
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Global function to show/hide test panel
(window as any).showApiTest = (show: boolean = true) => {
  const event = new CustomEvent('toggleApiTest', { detail: { show } });
  window.dispatchEvent(event);
};
