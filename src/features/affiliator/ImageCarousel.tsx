import { useState, useEffect, useRef } from 'react';

interface ImageCarouselProps {
  images: string[];
  mainImage?: string;
  videoUrl?: string;
  className?: string;
  autoPlayDelay?: number;
  showControls?: boolean;
}

export function ImageCarousel({ 
  images, 
  mainImage, 
  videoUrl, 
  className = "w-[28rem] h-[28rem]",
  autoPlayDelay = 5000,
  showControls = true
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [loadingStates, setLoadingStates] = useState<boolean[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Combine main image and additional images with safety checks
  let allImages: string[] = [];
  let mediaItems: Array<{ type: 'video' | 'image'; url: string; poster?: string }> = [];

  try {
    allImages = [
      ...(mainImage && typeof mainImage === 'string' ? [mainImage] : []),
      ...(Array.isArray(images) ? images.filter(img => typeof img === 'string') : [])
    ].filter(Boolean);

    // If we have a video, add it as the first item
    mediaItems = [
      ...(videoUrl && typeof videoUrl === 'string' ? [{ type: 'video' as const, url: videoUrl, poster: mainImage }] : []),
      ...allImages.map(url => ({ type: 'image' as const, url }))
    ];
    
  } catch (error) {
    // Fallback to empty arrays if there's an error processing the data
    allImages = [];
    mediaItems = [];
    console.error('❌ Carousel Error:', error);
  }

  // Initialize loading states
  useEffect(() => {
    setLoadingStates(new Array(mediaItems.length).fill(true));
  }, [mediaItems.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Auto-play carousel (optional)
  useEffect(() => {
    if (mediaItems.length <= 1 || !autoPlay) return;
    
    const interval = setInterval(() => {
      if (!isVideoPlaying) {
        goToNext();
      }
    }, autoPlayDelay); // Change slide every specified seconds

    return () => clearInterval(interval);
  }, [currentIndex, isVideoPlaying, mediaItems.length, autoPlay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
        return;
      }
      
      if (mediaItems.length <= 1) return;
      
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mediaItems.length, isFullscreen]);

  if (mediaItems.length === 0) {
    return (
      <div className={`${className} bg-black rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden`}>
        <div className="text-white text-center">
          <div className="text-6xl mb-4">📷</div>
          <p>No images available</p>
        </div>
      </div>
    );
  }

  if (mediaItems.length === 1) {
    const item = mediaItems[0];
    return (
      <div className={`${className} bg-black rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden`}>
        {item.type === 'video' ? (
          <video
            className="w-full h-full object-cover rounded-2xl"
            src={item.url}
            poster={item.poster}
            controls
            preload="metadata"
            playsInline
            onPlay={() => setIsVideoPlaying(true)}
            onPause={() => setIsVideoPlaying(false)}
          />
        ) : (
          <div className="relative w-full h-full">
            {loadingStates[0] && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-2xl">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              </div>
            )}
            <img 
              src={item.url} 
              alt="Product" 
              className={`w-full h-full object-cover rounded-2xl transition-transform duration-300 ${
                isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
              onLoad={() => {
                setLoadingStates(prev => {
                  const newStates = [...prev];
                  newStates[0] = false;
                  return newStates;
                });
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/400x400/333333/ffffff?text=Image+Not+Available';
                setLoadingStates(prev => {
                  const newStates = [...prev];
                  newStates[0] = false;
                  return newStates;
                });
              }}
              loading="lazy"
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`${isFullscreen ? 'fixed inset-0 z-50 w-screen h-screen' : className} bg-black rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden group`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Product image carousel"
      tabIndex={0}
    >
      {/* Main Media Display */}
      <div className="w-full h-full relative">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={index !== currentIndex}
          >
            {item.type === 'video' ? (
              <video
                className="w-full h-full object-cover rounded-2xl"
                src={item.url}
                poster={item.poster}
                controls
                preload="metadata"
                playsInline
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
              />
            ) : (
              <div className="relative w-full h-full">
                {loadingStates[index] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-2xl">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                  </div>
                )}
                <img 
                  src={item.url} 
                  alt={`Product image ${index + 1}`} 
                  className={`w-full h-full object-cover rounded-2xl transition-transform duration-300 ${
                    isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                  onLoad={() => {
                    setLoadingStates(prev => {
                      const newStates = [...prev];
                      newStates[index] = false;
                      return newStates;
                    });
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x400/333333/ffffff?text=Image+Not+Available';
                    setLoadingStates(prev => {
                      const newStates = [...prev];
                      newStates[index] = false;
                      return newStates;
                    });
                  }}
                  loading="lazy"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {mediaItems.length > 1 && showControls && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {mediaItems.length > 1 && showControls && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {mediaItems.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}${item.type === 'video' ? ' (Video)' : ''}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      {mediaItems.length > 1 && showControls && (
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {mediaItems.length}
        </div>
      )}

      {/* Video Indicator */}
      {mediaItems[currentIndex]?.type === 'video' && (
        <div className="absolute top-4 left-4 bg-purple-500/80 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
          <span>🎥</span>
          <span>Video</span>
        </div>
      )}

      {/* Loading Indicator */}
      {loadingStates[currentIndex] && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      )}

      {/* Error State */}
      {mediaItems.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-2xl">
          <div className="text-white text-center">
            <div className="text-6xl mb-4">📷</div>
            <p>No images available</p>
          </div>
        </div>
      )}

      {/* Progress Bar */}
      {mediaItems.length > 1 && showControls && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
          <div 
            className="h-full bg-white transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / mediaItems.length) * 100}%` }}
          />
        </div>
      )}

      {/* Zoom Button (only for images) */}
      {mediaItems[currentIndex]?.type === 'image' && showControls && (
        <button
          onClick={() => setIsZoomed(!isZoomed)}
          className="absolute top-4 left-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label={isZoomed ? "Zoom out" : "Zoom in"}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isZoomed ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            )}
          </svg>
        </button>
      )}

      {/* Fullscreen Button */}
      {showControls && (
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="absolute top-4 left-16 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isFullscreen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            )}
          </svg>
        </button>
      )}

      {/* Auto-play Toggle Button */}
      {mediaItems.length > 1 && showControls && (
        <button
          onClick={() => setAutoPlay(!autoPlay)}
          className="absolute top-4 left-28 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label={autoPlay ? "Disable auto-play" : "Enable auto-play"}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {autoPlay ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6l4-3-4-3zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
            )}
          </svg>
        </button>
      )}
    </div>
  );
}