import React from 'react';

interface ChevronDownIconProps {
  className?: string;
  isOpen?: boolean;
}

export const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({ 
  className = "w-2.5 h-2.5", 
  isOpen = false 
}) => {
  return (
    <svg
      className={`${className} transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path 
        fillRule="evenodd" 
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
        clipRule="evenodd" 
      />
    </svg>
  );
};
