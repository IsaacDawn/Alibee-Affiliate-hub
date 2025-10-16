/**
 * Currency Conversion Logger
 * Use this to debug currency conversion issues
 */

interface LogEntry {
  timestamp: string;
  level: 'INFO' | 'WARN' | 'ERROR' | 'DEBUG';
  component: string;
  message: string;
  data?: any;
}

class CurrencyLogger {
  private logs: LogEntry[] = [];
  private maxLogs = 100;
  private storageKey = 'currency-debug-logs';

  log(level: LogEntry['level'], component: string, message: string, data?: any) {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      component,
      message,
      data
    };
    
    this.logs.unshift(entry);
    
    // Keep only the last maxLogs entries
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(0, this.maxLogs);
    }
    
    // Save to localStorage for persistence across page refreshes
    this.saveToStorage();
    
    // Also log to console for immediate debugging
    const consoleMethod = level === 'ERROR' ? 'error' : 
                         level === 'WARN' ? 'warn' : 
                         level === 'DEBUG' ? 'log' : 'info';
    
    console[consoleMethod](`[${level}] ${component}: ${message}`, data || '');
  }

  info(component: string, message: string, data?: any) {
    this.log('INFO', component, message, data);
  }

  warn(component: string, message: string, data?: any) {
    this.log('WARN', component, message, data);
  }

  error(component: string, message: string, data?: any) {
    this.log('ERROR', component, message, data);
  }

  debug(component: string, message: string, data?: any) {
    this.log('DEBUG', component, message, data);
  }

  getLogs(): LogEntry[] {
    return [...this.logs];
  }

  getLogsAsString(): string {
    return this.logs.map(log => 
      `[${log.timestamp}] ${log.level} ${log.component}: ${log.message}${log.data ? ' | Data: ' + JSON.stringify(log.data, null, 2) : ''}`
    ).join('\n');
  }

  clearLogs() {
    this.logs = [];
    this.saveToStorage();
  }

  private saveToStorage() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.logs));
    } catch (error) {
      console.warn('Failed to save logs to localStorage:', error);
    }
  }

  private loadFromStorage() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        this.logs = JSON.parse(stored);
      }
    } catch (error) {
      console.warn('Failed to load logs from localStorage:', error);
      this.logs = [];
    }
  }

  // Initialize by loading from storage
  initialize() {
    this.loadFromStorage();
  }

  // Method to copy logs to clipboard
  async copyLogsToClipboard(): Promise<boolean> {
    try {
      const logsText = this.getLogsAsString();
      await navigator.clipboard.writeText(logsText);
      this.info('CurrencyLogger', 'Logs copied to clipboard successfully');
      return true;
    } catch (error) {
      this.error('CurrencyLogger', 'Failed to copy logs to clipboard', error);
      return false;
    }
  }
}

// Create global instance
export const currencyLogger = new CurrencyLogger();

// Make it available globally for debugging
(window as any).currencyLogger = currencyLogger;

// Helper function to get current currency state
export const logCurrentCurrencyState = () => {
  const currentCurrency = localStorage.getItem('preferred-currency');
  currencyLogger.info('CurrencyState', 'Current currency from localStorage', { currentCurrency });
  
  // Log all currency-related data
  const currencyData = {
    localStorage: currentCurrency,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    url: window.location.href
  };
  
  currencyLogger.info('CurrencyState', 'Complete currency state', currencyData);
};

// Helper function to test currency conversion
export const testCurrencyConversion = async (price: number, fromCurrency: string, toCurrency: string) => {
  currencyLogger.info('CurrencyTest', `Testing conversion: ${price} ${fromCurrency} -> ${toCurrency}`);
  
  try {
    const response = await fetch('/api/currency/convert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price,
        from_currency: fromCurrency,
        to_currency: toCurrency
      })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const result = await response.json();
    currencyLogger.info('CurrencyTest', 'Conversion successful', result);
    return result;
  } catch (error) {
    currencyLogger.error('CurrencyTest', 'Conversion failed', error);
    throw error;
  }
};

// Helper function to get all logs as a formatted string for copying
export const getCurrencyLogsForCopy = (): string => {
  const logs = currencyLogger.getLogs();
  const header = `
=== CURRENCY CONVERSION DEBUG LOGS ===
Generated: ${new Date().toISOString()}
URL: ${window.location.href}
User Agent: ${navigator.userAgent}
Current Currency: ${localStorage.getItem('preferred-currency') || 'Not set'}

=== LOGS ===
`;
  
  const logText = logs.map(log => 
    `[${log.timestamp}] ${log.level} ${log.component}: ${log.message}${log.data ? '\nData: ' + JSON.stringify(log.data, null, 2) : ''}`
  ).join('\n\n');
  
  return header + logText + '\n\n=== END OF LOGS ===';
};

// Make helper functions available globally
(window as any).logCurrentCurrencyState = logCurrentCurrencyState;
(window as any).testCurrencyConversion = testCurrencyConversion;
(window as any).getCurrencyLogsForCopy = getCurrencyLogsForCopy;
