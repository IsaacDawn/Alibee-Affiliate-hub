// Mobile-specific constants and configurations
// This file centralizes all mobile-related settings

export const MOBILE_CONFIG = {
  // Text sizes - 2x Larger Mobile
  text: {
    xs: 'text-sm',
    sm: 'text-base', 
    base: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl',
    '2xl': 'text-3xl',
    '3xl': 'text-4xl',
  },
  
  // Responsive text sizes - 2x Larger Mobile
  responsiveText: {
    xs: 'text-sm md:text-xs',
    sm: 'text-base md:text-xs',
    base: 'text-lg md:text-sm',
    lg: 'text-xl md:text-base',
    xl: 'text-2xl md:text-lg',
    '2xl': 'text-3xl md:text-xl',
    '3xl': 'text-4xl md:text-2xl',
  },
  
  // Padding - 2x Larger Mobile
  padding: {
    xs: 'p-4',
    sm: 'p-6',
    base: 'p-8',
    lg: 'p-10',
    xl: 'p-12',
  },
  
  // Responsive padding - 2x Larger Mobile
  responsivePadding: {
    xs: 'p-4 md:p-2',
    sm: 'p-6 md:p-2',
    base: 'p-8 md:p-3',
    lg: 'p-10 md:p-4',
    xl: 'p-12 md:p-4',
  },
  
  // Vertical padding - 2x Larger Mobile
  responsivePaddingY: {
    xs: 'py-4 md:py-2',
    sm: 'py-6 md:py-2',
    base: 'py-8 md:py-3',
    lg: 'py-10 md:py-4',
  },
  
  // Horizontal padding - 2x Larger Mobile
  responsivePaddingX: {
    xs: 'px-4 md:px-2',
    sm: 'px-6 md:px-2',
    base: 'px-8 md:px-3',
    lg: 'px-10 md:px-4',
    xl: 'px-12 md:px-4',
  },
  
  // Margins - 2x Larger Mobile
  responsiveMarginX: {
    xs: 'mx-4 md:mx-2',
    sm: 'mx-8 md:mx-4',
    lg: 'mx-12 md:mx-6',
  },
  
  // Spacing - 2x Larger Mobile
  responsiveGap: {
    xs: 'gap-4 md:gap-2',
    sm: 'gap-8 md:gap-4',
  },
  
  // Sizes - 2x Larger Mobile
  responsiveSize: {
    w16: 'w-32 md:w-16',
    w20: 'w-40 md:w-16',
    h16: 'h-32 md:h-16',
    h20: 'h-40 md:h-16',
  },
  
  // Aspect ratios
  responsiveAspect: {
    square: 'aspect-square md:h-64 lg:h-48 xl:h-56',
  },
} as const;

// Helper function to get mobile classes
export const getMobileClasses = (type: keyof typeof MOBILE_CONFIG, size: string) => {
  return MOBILE_CONFIG[type][size as keyof typeof MOBILE_CONFIG[typeof type]] || '';
};

// Common mobile class combinations
export const MOBILE_CLASSES = {
  // Button classes
  button: {
    small: `${MOBILE_CONFIG.responsivePaddingX.base} ${MOBILE_CONFIG.responsivePaddingY.sm} ${MOBILE_CONFIG.responsiveText.base}`,
    medium: `${MOBILE_CONFIG.responsivePaddingX.lg} ${MOBILE_CONFIG.responsivePaddingY.base} ${MOBILE_CONFIG.responsiveText.lg}`,
    large: `${MOBILE_CONFIG.responsivePaddingX.xl} ${MOBILE_CONFIG.responsivePaddingY.lg} ${MOBILE_CONFIG.responsiveText.xl}`,
  },
  
  // Input classes
  input: {
    small: `${MOBILE_CONFIG.responsivePadding.base} ${MOBILE_CONFIG.responsiveText.sm}`,
    medium: `${MOBILE_CONFIG.responsivePadding.lg} ${MOBILE_CONFIG.responsiveText.base}`,
    large: `${MOBILE_CONFIG.responsivePadding.xl} ${MOBILE_CONFIG.responsiveText.lg}`,
  },
  
  // Text classes
  text: {
    small: MOBILE_CONFIG.responsiveText.sm,
    medium: MOBILE_CONFIG.responsiveText.base,
    large: MOBILE_CONFIG.responsiveText.lg,
    xlarge: MOBILE_CONFIG.responsiveText.xl,
    xxlarge: MOBILE_CONFIG.responsiveText['2xl'],
    xxxlarge: MOBILE_CONFIG.responsiveText['3xl'],
  },
  
  // Container classes
  container: {
    small: `${MOBILE_CONFIG.responsiveMarginX.xs} ${MOBILE_CONFIG.responsivePadding.sm}`,
    medium: `${MOBILE_CONFIG.responsiveMarginX.sm} ${MOBILE_CONFIG.responsivePadding.base}`,
    large: `${MOBILE_CONFIG.responsiveMarginX.lg} ${MOBILE_CONFIG.responsivePadding.lg}`,
  },
} as const;
