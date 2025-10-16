import React, { useState, useEffect } from 'react';
import { currencyLogger, getCurrencyLogsForCopy, logCurrentCurrencyState, testCurrencyConversion } from '../utils/currencyLogger';
import { useCurrency } from '../hooks/useCurrency';

interface CurrencyDebugPanelProps {
  isVisible?: boolean;
}

export const CurrencyDebugPanel: React.FC<CurrencyDebugPanelProps> = ({ isVisible = false }) => {
  const [logs, setLogs] = useState<any[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const { currentCurrency } = useCurrency();

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setLogs(currencyLogger.getLogs());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const handleCopyLogs = async () => {
    const logsText = getCurrencyLogsForCopy();
    try {
      await navigator.clipboard.writeText(logsText);
      alert('Logs copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy logs:', error);
      alert('Failed to copy logs. Check console for details.');
    }
  };

  const handleTestConversion = async () => {
    try {
      const result = await testCurrencyConversion(100, 'USD', 'EUR');
      console.log('Test conversion result:', result);
    } catch (error) {
      console.error('Test conversion failed:', error);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black/80 text-white p-4 rounded-lg max-w-lg max-h-96 overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-bold">Currency Debug Panel</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs bg-blue-500 px-2 py-1 rounded"
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </div>

      <div className="text-xs space-y-1">
        <div>Current Currency: <span className="text-green-400">{currentCurrency?.code}</span></div>
        <div>LocalStorage: <span className="text-yellow-400">{localStorage.getItem('preferred-currency') || 'Not set'}</span></div>
        <div>Logs Count: <span className="text-blue-400">{logs.length}</span></div>
      </div>

      <div className="space-y-2 mt-2">
        {/* Row 1 */}
        <div className="flex flex-wrap gap-1">
        <button
          onClick={handleCopyLogs}
          className="text-xs bg-green-500 px-2 py-1 rounded hover:bg-green-600"
        >
          Copy Logs
        </button>
        <button
          onClick={logCurrentCurrencyState}
          className="text-xs bg-blue-500 px-2 py-1 rounded hover:bg-blue-600"
        >
          Log State
        </button>
        <button
          onClick={handleTestConversion}
          className="text-xs bg-purple-500 px-2 py-1 rounded hover:bg-purple-600"
        >
          Test API
        </button>
        <button
          onClick={() => window.location.reload()}
          className="text-xs bg-red-500 px-2 py-1 rounded hover:bg-red-600"
        >
          Refresh Page
        </button>
        </div>
        
        {/* Row 2 */}
        <div className="flex flex-wrap gap-1">
        <button
          onClick={() => {
            currencyLogger.clearLogs();
            setLogs([]);
          }}
          className="text-xs bg-orange-500 px-2 py-1 rounded hover:bg-orange-600"
        >
          Clear Logs
        </button>
        <button
          onClick={() => {
            if ((window as any).testAppCurrencyConversion) {
              (window as any).testAppCurrencyConversion();
            } else {
              console.log('testAppCurrencyConversion function not available');
            }
          }}
          className="text-xs bg-indigo-500 px-2 py-1 rounded hover:bg-indigo-600"
        >
          Test App Conversion
        </button>
        <button
          onClick={() => {
            if ((window as any).forceUIUpdate) {
              (window as any).forceUIUpdate();
            } else {
              console.log('forceUIUpdate function not available');
            }
          }}
          className="text-xs bg-teal-500 px-2 py-1 rounded hover:bg-teal-600"
        >
          Force UI Update
        </button>
        </div>
        
        {/* Row 3 */}
        <div className="flex flex-wrap gap-1">
        <button
          onClick={() => {
            if ((window as any).testDirectAPI) {
              (window as any).testDirectAPI();
            } else {
              console.log('testDirectAPI function not available');
            }
          }}
          className="text-xs bg-cyan-500 px-2 py-1 rounded hover:bg-cyan-600"
        >
          Test Direct API
        </button>
        <button
          onClick={() => {
            if ((window as any).testPriceDisplay) {
              (window as any).testPriceDisplay();
            } else {
              console.log('testPriceDisplay function not available');
            }
          }}
          className="text-xs bg-orange-500 px-2 py-1 rounded hover:bg-orange-600"
        >
          Test Price Display
        </button>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-2 max-h-48 overflow-y-auto">
          <div className="text-xs space-y-1">
            {logs.slice(0, 10).map((log, index) => (
              <div key={index} className="border-b border-gray-600 pb-1">
                <div className="text-gray-400">
                  [{log.timestamp}] {log.level} {log.component}
                </div>
                <div className="text-white">{log.message}</div>
                {log.data && (
                  <div className="text-gray-300 text-xs">
                    {JSON.stringify(log.data, null, 2)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Global function to show/hide debug panel
(window as any).showCurrencyDebug = (show: boolean = true) => {
  const event = new CustomEvent('toggleCurrencyDebug', { detail: { show } });
  window.dispatchEvent(event);
};
