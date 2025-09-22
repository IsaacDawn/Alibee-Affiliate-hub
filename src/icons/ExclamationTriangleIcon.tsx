import React from 'react';

interface ExclamationTriangleIconProps {
  className?: string;
}

export const ExclamationTriangleIcon: React.FC<ExclamationTriangleIconProps> = ({ 
  className = "mx-auto h-12 w-12 text-red-500" 
}) => {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" 
      />
    </svg>
  );
};
