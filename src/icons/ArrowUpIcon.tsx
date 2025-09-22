import React from 'react';

interface ArrowUpIconProps {
  className?: string;
}

export const ArrowUpIcon: React.FC<ArrowUpIconProps> = ({ 
  className = "w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:-translate-y-0.5" 
}) => {
  return (
    <svg 
      className={className}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M5 10l7-7m0 0l7 7m-7-7v18" 
      />
    </svg>
  );
};
