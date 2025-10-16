import React, { useState, useEffect } from 'react';
import { useSmartImageLoading } from '../hooks/useSmartImageLoading';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
// import { useLanguage } from '../hooks/useLanguage'; // Removed

interface ImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  video?: string; // Optional video URL
  onLike?: () => void;
  isLiked?: boolean;
  onBuy?: () => void;
  isBuyable?: boolean;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  alt,
  className = '',
  autoPlay = true,
  autoPlayInterval = 3000,
  showDots = true,
  showArrows = true,
  video,
  onLike,
  isLiked = false,
  onBuy,
  isBuyable = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true); // Default to muted
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoWasPlaying, setVideoWasPlaying] = useState(false); // Track if video was playing before scroll
  const userInteractionTimeoutRef = React.useRef<number | null>(null);
  const lastInteractionTimeRef = React.useRef<number>(0);
  const autoPlayIntervalRef = React.useRef<number | null>(null);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  // Use intersection observer to detect when carousel is visible
  const [containerRef, isVisible, hasIntersected] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px', // Start loading when 50px away from viewport
    freezeOnceVisible: true // Keep loading state once visible
  });

  // const { t } = useLanguage(); // Removed


  // Use smart image loading
  const { loadedImages, loadingImages, isImageLoaded, isImageLoading } = useSmartImageLoading({
    images,
    isVisible: isVisible || hasIntersected,
    onVisibilityChange: () => {
      // Visibility change handled silently
    }
  });

  // Create media array (video first if available, then images)
  const mediaItems = React.useMemo(() => {
    const items = [...images];
    if (video) {
      items.unshift(video); // Add video as first item
    }
    return items;
  }, [images, video]);

  // Smart image loading is now handled by the useSmartImageLoading hook

  // Auto-play functionality - prioritize video, then cycle images
  useEffect(() => {
    // Always clear existing interval first
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }

    // Check if current media is video
    const currentMedia = mediaItems[currentIndex];
    const isCurrentVideo = video && currentMedia === video;

    // Only start auto-play for images if all conditions are met
    // Don't auto-cycle when video is playing or when not visible
    if (autoPlay && !isHovered && !isDragging && !isUserInteracting && mediaItems.length > 1 && !isCurrentVideo && isVisible) {
      autoPlayIntervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
        );
      }, autoPlayInterval);
    }

    // Cleanup function
    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
        autoPlayIntervalRef.current = null;
      }
    };
  }, [autoPlay, autoPlayInterval, isHovered, isDragging, isUserInteracting, mediaItems.length, currentIndex, video, mediaItems, isVisible]);

  // Helper function to reset user interaction
  const resetUserInteraction = () => {
    if (userInteractionTimeoutRef.current) {
      clearTimeout(userInteractionTimeoutRef.current);
    }
    userInteractionTimeoutRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 1000); // Reduced to 1000ms for better sync
  };

  // Video control functions

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    setVideoWasPlaying(true);
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
    setVideoWasPlaying(false);
  };

  const handleVideoEnded = () => {
    // When video ends, optionally cycle to next media if there are multiple items
    if (mediaItems.length > 1) {
      setCurrentIndex((prevIndex) => 
        prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Handle video visibility and state management
  useEffect(() => {
    if (videoRef.current && video) {
      const currentMedia = mediaItems[currentIndex];
      const isVideo = video && currentMedia === video;
      
      if (isVideo && isVisible) {
        // Video is visible - resume from previous state
        if (videoWasPlaying) {
          videoRef.current.play().catch((error) => {
            console.log('Video resume failed:', error);
          });
        }
        // Pause any existing auto-cycle interval when video is playing
        if (autoPlayIntervalRef.current) {
          clearInterval(autoPlayIntervalRef.current);
          autoPlayIntervalRef.current = null;
        }
      } else if (isVideo && !isVisible) {
        // Video is not visible - pause and remember state
        if (videoRef.current && !videoRef.current.paused) {
          setVideoWasPlaying(true);
          videoRef.current.pause();
        } else if (videoRef.current && videoRef.current.paused) {
          setVideoWasPlaying(false);
        }
      } else if (!isVideo && isVisible) {
        // Not a video - start auto-cycle if needed
        if (autoPlay && !isHovered && !isDragging && !isUserInteracting && mediaItems.length > 1) {
          if (!autoPlayIntervalRef.current) {
            autoPlayIntervalRef.current = setInterval(() => {
              setCurrentIndex((prevIndex) => 
                prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
              );
            }, autoPlayInterval);
          }
        }
      }
    }
  }, [isVisible, currentIndex, video, mediaItems, videoWasPlaying, autoPlay, isHovered, isDragging, isUserInteracting, autoPlayInterval]);

  // Initial video auto-play when first visible
  useEffect(() => {
    if (videoRef.current && isVisible && video && !videoWasPlaying) {
      const currentMedia = mediaItems[currentIndex];
      const isVideo = video && currentMedia === video;
      
      if (isVideo) {
        // Auto-play video when first visible (if it wasn't playing before)
        videoRef.current.play().catch((error) => {
          console.log('Video initial autoplay failed:', error);
          // This is expected in many browsers due to autoplay policies
        });
      }
    }
  }, [isVisible, currentIndex, video, mediaItems, videoWasPlaying]);

  // Cleanup timeouts and intervals
  useEffect(() => {
    return () => {
      if (userInteractionTimeoutRef.current) {
        clearTimeout(userInteractionTimeoutRef.current);
      }
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, []);

  const goToPrevious = () => {
    setIsUserInteracting(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
    resetUserInteraction();
  };

  const goToNext = () => {
    setIsUserInteracting(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
    );
    resetUserInteraction();
  };

  const goToSlide = (index: number) => {
    setIsUserInteracting(true);
    setCurrentIndex(index);
    resetUserInteraction();
  };

  // Touch event handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
    setIsUserInteracting(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && mediaItems.length > 1) {
      goToNext();
    }
    if (isRightSwipe && mediaItems.length > 1) {
      goToPrevious();
    }

    setIsDragging(false);
    resetUserInteraction();
  };

  // Mouse event handlers for desktop drag support
  const handleMouseDown = (e: React.MouseEvent) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
    setIsDragging(true);
    setIsUserInteracting(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setTouchEnd(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && mediaItems.length > 1) {
      goToNext();
    }
    if (isRightSwipe && mediaItems.length > 1) {
      goToPrevious();
    }

    setIsDragging(false);
    resetUserInteraction();
  };

  if (!mediaItems || mediaItems.length === 0) {
    return (
      <div className={`w-full aspect-square bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500">No Media</span>
      </div>
    );
  }


  if (mediaItems.length === 1) {
    const isVideo = video && mediaItems[0] === video;
    return (
      <div 
        ref={containerRef}
        className={`relative overflow-hidden ${className}`}
        dir="ltr"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ userSelect: 'none' }}
      >
        {isVideo ? (
          <video
            ref={videoRef}
            src={mediaItems[0]}
            className="w-full h-full object-cover"
            controls
            controlsList="nodownload"
            autoPlay
            muted={isVideoMuted}
            loop={mediaItems.length === 1} // Only loop if it's the only media item
            preload="metadata"
            poster={images[0] || undefined}
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
            onEnded={handleVideoEnded}
            playsInline
            style={{ zIndex: 10 }}
          />
        ) : (
          <>
            <img
              src={mediaItems[0]}
              alt={alt}
              className={`w-full h-full object-cover ${
                isImageLoaded(mediaItems[0]) ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-200`}
              draggable={false}
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/300x300/6366f1/ffffff?text=No+Image';
              }}
            />
            {/* Loading indicator */}
            {isImageLoading(mediaItems[0]) && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
              </div>
            )}
          </>
        )}


        {/* Like Button for single media */}
        {onLike && (
          <div className="absolute top-3 right-3 z-20" dir="ltr">
            <button
              onClick={onLike}
              className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-125 hover:shadow-xl active:scale-95 ${
                isLiked
                  ? "bg-red-500/90 text-white shadow-lg hover:shadow-red-500/30 hover:bg-red-600/90"
                  : "bg-white/20 text-white hover:bg-pink-500/90 hover:shadow-pink-500/30"
              }`}
              aria-live="polite"
              title={isLiked ? "Remove from liked" : "Like product"}
            >
              {isLiked ? "❤️" : "🤍"}
            </button>
          </div>
        )}

        {/* Buy Button for single media */}
        {onBuy && isBuyable && (
          <div className="absolute top-16 right-3 z-50" dir="ltr">
            <button
              onClick={onBuy}
              className="p-3 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-125 hover:shadow-xl active:scale-95 bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:shadow-orange-500/30 hover:from-orange-600 hover:to-red-600"
              aria-live="polite"
              title="Buy Now"
              style={{ filter: 'brightness(1.2) contrast(1.1)' }}
            >
              🛒
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden group ${className}`}
      dir="ltr"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ userSelect: 'none' }}
    >
      {/* Main Media Container */}
      <div className="relative w-full h-full">
        {(() => {
          const currentMedia = mediaItems[currentIndex];
          const isVideo = video && currentMedia === video;
          
          
          if (isVideo) {
            return (
              <video
                ref={videoRef}
                src={currentMedia}
                className="w-full h-full object-cover"
                controls
                controlsList="nodownload"
                autoPlay
                muted={isVideoMuted}
                loop={mediaItems.length === 1} // Only loop if it's the only media item
                preload="metadata"
                poster={images[0] || undefined}
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                onEnded={handleVideoEnded}
                playsInline
                style={{ zIndex: 10 }}
              />
            );
          } else {
            return (
              <>
                <img
                  src={currentMedia}
                  alt={`${alt} - ${isVideo ? 'Video' : 'Image'} ${currentIndex + 1}`}
                  className={`w-full h-full object-cover ${
                    isImageLoaded(currentMedia) ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-200`}
                  draggable={false}
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/300x300/6366f1/ffffff?text=No+Image';
                  }}
                />
                {/* Loading indicator */}
                {isImageLoading(currentMedia) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
                  </div>
                )}
              </>
            );
          }
        })()}
        
        {/* Gradient overlay - only show for images, not videos */}
        {(() => {
          const currentMedia = mediaItems[currentIndex];
          const isVideo = video && currentMedia === video;
          return !isVideo ? (
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          ) : null;
        })()}
        
        {/* Swipe indicator */}
        {isDragging && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {touchStart && touchEnd && touchStart - touchEnd > 0 ? '← Swipe Left' : 'Swipe Right →'}
            </div>
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      {showArrows && mediaItems.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 z-20"
            aria-label="Previous media"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 z-20"
            aria-label="Next media"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && mediaItems.length > 1 && (
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {mediaItems.map((_, index) => {
            const isVideo = video && mediaItems[index] === video;
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`${isVideo ? 'Go to video' : 'Go to image'} ${index + 1}`}
                title={isVideo ? 'Video' : 'Image'}
              />
            );
          })}
        </div>
      )}

      {/* Media Counter */}
      {mediaItems.length > 1 && (
        <div className="absolute top-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full z-20">
          {currentIndex + 1} / {mediaItems.length}
          {video && mediaItems[currentIndex] === video && (
            <span className="ml-1">🎥</span>
          )}
        </div>
      )}

      {/* Like Button */}
      {onLike && (
        <div className="absolute top-3 right-3 z-20" dir="ltr">
          <button
            onClick={onLike}
            className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-125 hover:shadow-xl active:scale-95 ${
              isLiked
                ? "bg-red-500/90 text-white shadow-lg hover:shadow-red-500/30 hover:bg-red-600/90"
                : "bg-white/20 text-white hover:bg-pink-500/90 hover:shadow-pink-500/30"
            }`}
            aria-live="polite"
            title={isLiked ? "Remove from liked" : "Like product"}
          >
            {isLiked ? "❤️" : "🤍"}
          </button>
        </div>
      )}

      {/* Buy Button */}
      {onBuy && isBuyable && (
        <div className="absolute top-16 right-3 z-50" dir="ltr">
          <button
            onClick={onBuy}
            className="p-3 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-125 hover:shadow-xl active:scale-95 bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:shadow-orange-500/30 hover:from-orange-600 hover:to-red-600"
            aria-live="polite"
            title="Buy Now"
            style={{ filter: 'brightness(1.2) contrast(1.1)' }}
          >
            🛒
          </button>
        </div>
      )}
      
    </div>
  );
};


