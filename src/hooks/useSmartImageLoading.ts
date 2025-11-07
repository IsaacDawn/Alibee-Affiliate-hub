import { useState, useEffect, useRef, useCallback } from 'react';

interface ImageCache {
  [url: string]: {
    loaded: boolean;
    loading: boolean;
    element: HTMLImageElement | null;
    abortController: AbortController | null;
  };
}

interface UseSmartImageLoadingProps {
  images: string[];
  isVisible: boolean;
  onVisibilityChange?: (visible: boolean) => void;
  loadOnlyFirst?: boolean; // Only load first image initially
  isActive?: boolean; // Whether this card is the active/current card
}

export const useSmartImageLoading = ({ 
  images, 
  isVisible, 
  onVisibilityChange,
  loadOnlyFirst = false,
  isActive = false
}: UseSmartImageLoadingProps) => {
  const [imageCache, setImageCache] = useState<ImageCache>({});
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [loadingImages, setLoadingImages] = useState<Set<string>>(new Set());
  const visibilityRef = useRef(isVisible);
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);
  const imageElementsRef = useRef<Map<string, HTMLImageElement>>(new Map());

  // Update visibility ref when isVisible changes
  useEffect(() => {
    visibilityRef.current = isVisible;
    onVisibilityChange?.(isVisible);
  }, [isVisible, onVisibilityChange]);

  // Initialize image cache
  useEffect(() => {
    setImageCache(prevCache => {
      const newCache = { ...prevCache };
      images.forEach(url => {
        if (!newCache[url]) {
          newCache[url] = {
            loaded: false,
            loading: false,
            element: null,
            abortController: null
          };
        }
      });
      return newCache;
    });
  }, [images]);

  // Load a single image with cancellation support
  const loadImage = useCallback((url: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      // Check if already loaded
      if (imageCache[url]?.loaded) {
        resolve(url);
        return;
      }

      // Check if already loading
      if (imageCache[url]?.loading) {
        // Wait for existing load to complete
        const checkLoaded = () => {
          if (imageCache[url]?.loaded) {
            resolve(url);
          } else if (!imageCache[url]?.loading) {
            reject(new Error('Image loading was cancelled'));
          } else {
            setTimeout(checkLoaded, 100);
          }
        };
        checkLoaded();
        return;
      }

      // Create abort controller for cancellation
      const abortController = new AbortController();
      
      // Update cache to mark as loading
      setImageCache(prev => ({
        ...prev,
        [url]: {
          ...prev[url],
          loading: true,
          abortController
        }
      }));

      setLoadingImages(prev => new Set([...prev, url]));

      const img = new Image();
      imageElementsRef.current.set(url, img);

      const cleanup = () => {
        setImageCache(prev => ({
          ...prev,
          [url]: {
            ...prev[url],
            loading: false,
            abortController: null
          }
        }));
        setLoadingImages(prev => {
          const newSet = new Set(prev);
          newSet.delete(url);
          return newSet;
        });
        imageElementsRef.current.delete(url);
      };

      img.onload = () => {
        if (!abortController.signal.aborted) {
          setImageCache(prev => ({
            ...prev,
            [url]: {
              ...prev[url],
              loaded: true,
              loading: false,
              element: img,
              abortController: null
            }
          }));
          setLoadedImages(prev => new Set([...prev, url]));
          cleanup();
          resolve(url);
        }
      };

      img.onerror = () => {
        if (!abortController.signal.aborted) {
          cleanup();
          reject(new Error(`Failed to load image: ${url}`));
        }
      };

      // Check if component is still visible before starting load
      if (!visibilityRef.current) {
        abortController.abort();
        cleanup();
        reject(new Error('Component not visible, load cancelled'));
        return;
      }

      img.src = url;
    });
  }, [imageCache]);

  // Load images when component becomes visible
  useEffect(() => {
    if (isVisible && images.length > 0) {
      // Always load first image immediately when visible
      if (images[0] && !imageCache[images[0]]?.loaded && !imageCache[images[0]]?.loading) {
        loadImage(images[0]).catch(() => {
          // Silently handle image load errors
        });
      }

      // Only load additional images if:
      // 1. loadOnlyFirst is false (legacy behavior), OR
      // 2. This is the active card (user is viewing it)
      if (!loadOnlyFirst || isActive) {
        // Load remaining images with delay to prioritize first image
        images.slice(1).forEach((url, index) => {
          if (!imageCache[url]?.loaded && !imageCache[url]?.loading) {
            setTimeout(() => {
              if (visibilityRef.current) {
                loadImage(url).catch(() => {
                  // Silently handle image load errors
                });
              }
            }, (index + 1) * 300); // 300ms delay between each image (increased for better performance)
          }
        });
      }
    }
  }, [isVisible, images, loadImage, imageCache, loadOnlyFirst, isActive]);

  // Cancel loading when component becomes invisible
  useEffect(() => {
    if (!isVisible) {
      // Cancel all ongoing image loads
      Object.entries(imageCache).forEach(([url, cache]) => {
        if (cache.loading && cache.abortController) {
          cache.abortController.abort();
        }
      });

      // Clear loading state
      setLoadingImages(new Set());
    }
  }, [isVisible, imageCache]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Cancel all ongoing loads
      Object.entries(imageCache).forEach(([url, cache]) => {
        if (cache.loading && cache.abortController) {
          cache.abortController.abort();
        }
      });
      
      // Clear image elements
      imageElementsRef.current.clear();
    };
  }, []);

  // Clean up cached images when they're no longer needed
  const cleanupCache = useCallback((urlsToKeep: string[]) => {
    setImageCache(prev => {
      const newCache: ImageCache = {};
      urlsToKeep.forEach(url => {
        if (prev[url]) {
          newCache[url] = prev[url];
        }
      });
      
      // Cancel loading for removed images
      Object.entries(prev).forEach(([url, cache]) => {
        if (!urlsToKeep.includes(url) && cache.loading && cache.abortController) {
          cache.abortController.abort();
        }
      });
      
      return newCache;
    });

    setLoadedImages(prev => {
      const newSet = new Set<string>();
      urlsToKeep.forEach(url => {
        if (prev.has(url)) {
          newSet.add(url);
        }
      });
      return newSet;
    });

    setLoadingImages(prev => {
      const newSet = new Set<string>();
      urlsToKeep.forEach(url => {
        if (prev.has(url)) {
          newSet.add(url);
        }
      });
      return newSet;
    });
  }, []);

  // Auto-cleanup when images array changes
  useEffect(() => {
    // Clean up cache for images that are no longer in the current images array
    const currentUrls = new Set(images);
    const cachedUrls = Object.keys(imageCache);
    const urlsToRemove = cachedUrls.filter(url => !currentUrls.has(url));
    
    if (urlsToRemove.length > 0) {
      cleanupCache(images);
    }
  }, [images, imageCache, cleanupCache]);

  // Function to manually load additional images (for active card)
  const loadAdditionalImages = useCallback(() => {
    if (images.length > 1) {
      images.slice(1).forEach((url, index) => {
        if (!imageCache[url]?.loaded && !imageCache[url]?.loading) {
          setTimeout(() => {
            if (visibilityRef.current) {
              loadImage(url).catch(() => {
                // Silently handle image load errors
              });
            }
          }, index * 300); // 300ms delay between each image
        }
      });
    }
  }, [images, imageCache, loadImage]);

  return {
    loadedImages,
    loadingImages,
    imageCache,
    loadImage,
    loadAdditionalImages, // New function to load additional images
    cleanupCache,
    isImageLoaded: (url: string) => imageCache[url]?.loaded || false,
    isImageLoading: (url: string) => imageCache[url]?.loading || false
  };
};
