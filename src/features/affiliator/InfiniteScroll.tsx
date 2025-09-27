import { useEffect, useRef, useCallback } from "react";

interface InfiniteScrollProps {
  hasMore: boolean;
  loading: boolean;
  onLoadMore: () => void;
  children: React.ReactNode;
  itemCount: number; // Total number of items currently loaded
  searchQuery?: string; // Optional search query to enable/disable infinite scroll
}

export function InfiniteScroll({ 
  hasMore, 
  loading, 
  onLoadMore, 
  children,
  itemCount,
  searchQuery
}: InfiniteScrollProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [target] = entries;
    // Only trigger load more if we have a search query
    if (target.isIntersecting && hasMore && !loading && searchQuery && searchQuery.trim()) {
      onLoadMore();
    }
  }, [hasMore, loading, onLoadMore, searchQuery]);

  useEffect(() => {
    const element = loadMoreRef.current;
    if (!element) return;

    observerRef.current = new IntersectionObserver(handleObserver, {
      threshold: 0.1,
      rootMargin: "1000px", // Start loading when the trigger is 1000px away (approximately 1 screen height)
    });

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleObserver]);

  // Position the trigger element based on item count
  // Show trigger when we have at least 2 items, have a search query, and have more items to load
  const shouldShowTrigger = itemCount >= 2 && hasMore && searchQuery && searchQuery.trim();
  const triggerPosition = shouldShowTrigger ? Math.max(0, itemCount - 2) : itemCount;

  return (
    <div>
      {children}
      
      {/* Invisible trigger element positioned to trigger when 1 card remains */}
      {shouldShowTrigger && (
        <div 
          ref={loadMoreRef}
          className="h-4 w-full"
          aria-hidden="true"
          style={{ 
            position: 'absolute',
            top: `${triggerPosition * 100}vh`,
            left: 0,
            right: 0
          }}
        />
      )}
    </div>
  );
}
