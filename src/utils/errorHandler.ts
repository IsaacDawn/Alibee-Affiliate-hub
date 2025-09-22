// Global error handler for unhandled promise rejections and errors
export const setupGlobalErrorHandling = () => {
  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    const error = event.reason;
    
    // Filter out browser extension errors
    if (
      error?.message?.includes('wallet') ||
      error?.message?.includes('4001') ||
      error?.message?.includes('message channel closed') ||
      error?.message?.includes('must has at least one account') ||
      error?.code === 4001 ||
      error?.stack?.includes('inpage.js') ||
      error?.stack?.includes('extension')
    ) {
      // Browser extension error ignored
      event.preventDefault(); // Prevent the error from being logged to console
      return;
    }
    
    // Log other errors normally
    // console.error('Unhandled promise rejection:', error);
  });

  // Handle general errors
  window.addEventListener('error', (event) => {
    const error = event.error;
    
    // Filter out browser extension errors
    if (
      error?.message?.includes('wallet') ||
      error?.message?.includes('4001') ||
      error?.message?.includes('message channel closed') ||
      error?.message?.includes('must has at least one account') ||
      error?.code === 4001 ||
      error?.stack?.includes('inpage.js') ||
      error?.stack?.includes('extension')
    ) {
      // Browser extension error ignored
      event.preventDefault(); // Prevent the error from being logged to console
      return;
    }
    
    // Log other errors normally
    // console.error('Global error:', error);
  });
};

// Initialize error handling
setupGlobalErrorHandling();
