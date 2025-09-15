import { useState, useRef, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import type { Currency } from "../../types";

interface LazyProductCardProps {
  item: any;
  currency: Currency;
  onSave?: (saved: boolean) => void;
  index: number;
}

export function LazyProductCard({ 
  item, 
  currency, 
  onSave, 
  index 
}: LazyProductCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          // Disconnect observer after first load
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the card is visible
        rootMargin: "100px", // Start loading 100px before the card comes into view for better UX
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasLoaded]);

  return (
    <div 
      ref={cardRef}
      className="animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {isVisible ? (
        <ProductCard
          item={item}
          currency={currency}
          onSave={onSave}
        />
      ) : (
        // Skeleton placeholder while loading
        <div className="bg-white/20 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/30 shadow-2xl h-full flex flex-col">
          {/* Image skeleton */}
          <div className="relative overflow-hidden">
            <div className="w-full h-48 md:h-64 lg:h-48 xl:h-56 bg-gradient-to-r from-slate-200/50 to-slate-300/50 animate-pulse"></div>
            {/* Badge skeletons */}
            <div className="absolute top-3 left-3 flex gap-2">
              <div className="bg-slate-300/80 backdrop-blur-sm px-2 py-1 rounded-full w-12 h-6 animate-pulse"></div>
              <div className="bg-slate-300/80 backdrop-blur-sm px-2 py-1 rounded-full w-12 h-6 animate-pulse"></div>
            </div>
            {/* Save button skeleton */}
            <div className="absolute top-3 right-3">
              <div className="p-2 md:p-3 rounded-full bg-slate-300/80 w-10 h-10 animate-pulse"></div>
            </div>
          </div>

          {/* Content skeleton */}
          <div className="p-4 md:p-6 flex-1 flex flex-col">
            {/* Title skeleton */}
            <div className="mb-4 flex-1">
              <div className="w-full h-4 bg-slate-300/50 rounded animate-pulse mb-2"></div>
              <div className="w-3/4 h-4 bg-slate-300/50 rounded animate-pulse"></div>
            </div>

            {/* Price skeleton */}
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <div>
                <div className="w-20 h-6 bg-slate-300/50 rounded animate-pulse mb-1"></div>
                <div className="w-16 h-3 bg-slate-300/30 rounded animate-pulse"></div>
              </div>
            </div>

            {/* Button skeleton */}
            <div className="border-t border-white/10 pt-4 mt-auto">
              <div className="w-full h-12 bg-slate-300/50 rounded-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
