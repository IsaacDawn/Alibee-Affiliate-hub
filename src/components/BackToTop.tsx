import React, { useState, useEffect } from 'react';

interface BackToTopProps {
  threshold?: number; // Minimum scroll distance to show button
  className?: string;
}

export const BackToTop: React.FC<BackToTopProps> = ({ 
  threshold = 300, 
  className = "" 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [threshold]);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`
            fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50
            bg-gradient-to-r from-emerald-500 to-emerald-600
            hover:from-emerald-600 hover:to-emerald-700
            active:from-emerald-700 active:to-emerald-800
            text-white rounded-full
            w-12 h-12 md:w-14 md:h-14
            flex items-center justify-center
            shadow-lg hover:shadow-2xl
            transition-all duration-300 ease-in-out
            transform hover:scale-110 active:scale-95
            border-2 border-white/30
            backdrop-blur-sm
            group
            touch-manipulation
            ${className}
          `}
          aria-label="Back to top of page"
          title="Back to top of page"
        >
          {/* Arrow up icon with animation */}
          <svg 
            className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:-translate-y-0.5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
          
          {/* Pulse effect */}
          <div className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      )}
    </>
  );
};

export default BackToTop;
