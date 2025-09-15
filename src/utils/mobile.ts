// Mobile utility functions
// This file provides helper functions for mobile-specific logic

import { MOBILE_CLASSES } from '../constants/mobile';

// Check if device is mobile
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768; // md breakpoint
};

// Get responsive class based on device type
export const getResponsiveClass = (mobileClass: string, desktopClass: string): string => {
  return isMobile() ? mobileClass : desktopClass;
};

// Get mobile-optimized button classes
export const getMobileButtonClass = (size: 'small' | 'medium' | 'large' = 'medium'): string => {
  return MOBILE_CLASSES.button[size];
};

// Get mobile-optimized input classes
export const getMobileInputClass = (size: 'small' | 'medium' | 'large' = 'medium'): string => {
  return MOBILE_CLASSES.input[size];
};

// Get mobile-optimized text classes
export const getMobileTextClass = (size: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge' = 'medium'): string => {
  return MOBILE_CLASSES.text[size];
};

// Get mobile-optimized container classes
export const getMobileContainerClass = (size: 'small' | 'medium' | 'large' = 'medium'): string => {
  return MOBILE_CLASSES.container[size];
};

// Mobile-specific component props
export interface MobileProps {
  isMobile?: boolean;
  mobileSize?: 'small' | 'medium' | 'large';
}

// Get component classes based on mobile props
export const getComponentClasses = (props: MobileProps, baseClasses: string = ''): string => {
  const { isMobile: isMobileProp, mobileSize = 'medium' } = props;
  const isMobileDevice = isMobileProp ?? isMobile();
  
  if (isMobileDevice) {
    return `${baseClasses} ${getMobileButtonClass(mobileSize)}`;
  }
  
  return baseClasses;
};

// Mobile breakpoints
export const MOBILE_BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Check if current screen size matches breakpoint
export const isBreakpoint = (breakpoint: keyof typeof MOBILE_BREAKPOINTS): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= MOBILE_BREAKPOINTS[breakpoint];
};

// Get current breakpoint
export const getCurrentBreakpoint = (): keyof typeof MOBILE_BREAKPOINTS => {
  if (typeof window === 'undefined') return 'md';
  
  const width = window.innerWidth;
  
  if (width >= MOBILE_BREAKPOINTS['2xl']) return '2xl';
  if (width >= MOBILE_BREAKPOINTS.xl) return 'xl';
  if (width >= MOBILE_BREAKPOINTS.lg) return 'lg';
  if (width >= MOBILE_BREAKPOINTS.md) return 'md';
  return 'sm';
};
