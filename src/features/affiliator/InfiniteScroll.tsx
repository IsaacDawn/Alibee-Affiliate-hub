import { useEffect, useRef, useCallback } from "react";

interface InfiniteScrollProps {
  hasMore: boolean;
  loading: boolean;
  onLoadMore: () => void;
  children: React.ReactNode;
}

export function InfiniteScroll({ 
  hasMore, 
  loading, 
  onLoadMore, 
  children 
}: InfiniteScrollProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [target] = entries;
    if (target.isIntersecting && hasMore && !loading) {
      onLoadMore();
    }
  }, [hasMore, loading, onLoadMore]);

  useEffect(() => {
    const element = loadMoreRef.current;
    if (!element) return;

    observerRef.current = new IntersectionObserver(handleObserver, {
      threshold: 0.1,
      rootMargin: "200px", // Start loading 200px before reaching the bottom for better UX
    });

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleObserver]);

  return (
    <div>
      {children}
      
      {/* Invisible trigger element for infinite scroll */}
      <div 
        ref={loadMoreRef}
        className="h-4 w-full"
        aria-hidden="true"
      />
    </div>
  );
}
