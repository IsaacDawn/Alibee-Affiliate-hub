import { useState, useEffect } from "react";
import type { Currency } from "../../types";
import { DesktopProductCard } from "./DesktopProductCard";
import { MobileLandscapeProductCard } from "./MobileLandscapeProductCard";
import { MobilePortraitProductCard } from "./MobilePortraitProductCard";

export function ProductCard({
  item,
  currency,
  onSave,
  isSearchInterfaceOpen = false,
}: {
  item: any;
  currency: Currency;
  onSave?: (saved: boolean) => void;
  isSearchInterfaceOpen?: boolean;
}) {
  const [layoutType, setLayoutType] = useState<'portrait' | 'landscape' | 'desktop'>('portrait');

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspectRatio = width / height;

      // Detect layout type based on aspect ratio
      if (width >= 1024) {
        // Desktop: width greater than 1024px
        setLayoutType('desktop');
      } else if (aspectRatio > 1.2) {
        // Landscape: width to height ratio greater than 1.2
        setLayoutType('landscape');
            } else {
        // Portrait: width to height ratio less than or equal to 1.2
        setLayoutType('portrait');
      }
    };

    // Initial execution
    updateLayout();

    // Listen to window size changes
    window.addEventListener('resize', updateLayout);
    window.addEventListener('orientationchange', updateLayout);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('resize', updateLayout);
      window.removeEventListener('orientationchange', updateLayout);
    };
  }, []);

  // Select appropriate component based on layout type
  const renderLayout = () => {
    switch (layoutType) {
      case 'desktop':
        return (
          <DesktopProductCard
            item={item}
            currency={currency}
            onSave={onSave}
            isSearchInterfaceOpen={isSearchInterfaceOpen}
          />
        );
      case 'landscape':
        return (
          <MobileLandscapeProductCard
            item={item}
            currency={currency}
            onSave={onSave}
            isSearchInterfaceOpen={isSearchInterfaceOpen}
          />
        );
      case 'portrait':
      default:
        return (
          <MobilePortraitProductCard
            item={item}
            currency={currency}
            onSave={onSave}
            isSearchInterfaceOpen={isSearchInterfaceOpen}
          />
        );
    }
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-l from-purple-600 to-pink-600 overflow-hidden">
      {renderLayout()}
    </div>
  );
}