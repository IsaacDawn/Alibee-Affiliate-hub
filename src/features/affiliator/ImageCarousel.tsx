import { useState, useRef } from "react";

interface ImageCarouselProps {
  images: string[];
  mainImage: string;
  alt: string;
  className?: string;
}

export function ImageCarousel({ images, mainImage, alt, className = "" }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Combine main image with extra images, removing duplicates
  const allImages = [mainImage, ...(images || [])]
    .filter(Boolean)
    .filter((img, index, arr) => arr.indexOf(img) === index); // Remove duplicates



  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch handling for mobile swipe
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

  if (allImages.length === 0) {
    return (
      <div className={`w-full h-48 md:h-64 lg:h-48 xl:h-56 bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500">No image available</span>
      </div>
    );
  }

  if (allImages.length <= 1) {
    return (
      <img
        className={`w-full aspect-square md:h-64 lg:h-48 xl:h-56 object-cover group-hover:scale-110 transition-transform duration-700 ${className}`}
        src={allImages[0]}
        alt={alt}
      />
    );
  }

  return (
    <div 
      ref={carouselRef}
      className={`relative overflow-hidden carousel-group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main Image Display */}
      <img
        className="w-full aspect-square md:h-64 lg:h-48 xl:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
        src={allImages[currentIndex]}
        alt={`${alt} - Image ${currentIndex + 1}`}
      />

      {/* Navigation Arrows - Larger for mobile - Only show if more than 1 image */}
      {allImages.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 md:p-2 rounded-full transition-opacity duration-300 z-10"
            style={{ opacity: isHovered ? 1 : 0 }}
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 md:p-2 rounded-full transition-opacity duration-300 z-10"
            style={{ opacity: isHovered ? 1 : 0 }}
            aria-label="Next image"
          >
            <svg className="w-6 h-6 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator - Larger for mobile - Only show if more than 1 image */}
      {allImages.length > 1 && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-1 z-10">
          {allImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-white" 
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter - Larger for mobile - Only show if more than 1 image */}
      {allImages.length > 1 && (
        <div 
          className="absolute top-2 right-2 bg-black/50 text-white px-3 py-2 md:px-2 md:py-1 rounded-full text-sm md:text-xs transition-opacity duration-300 z-10"
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          {currentIndex + 1} / {allImages.length}
        </div>
      )}
    </div>
  );
}
