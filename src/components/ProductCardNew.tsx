import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FiExternalLink, FiShare2, FiHeart, FiPlay, FiShoppingCart, FiEdit2 } from 'react-icons/fi';
import type { Product } from '../types';
import { ProductDataDebug } from './ProductDataDebug';
import { useTranslation } from '../utils/dictionary';

// Image cache to store loaded images
const imageCache = new Map<string, HTMLImageElement>();

// Function to clear cache when needed (optional)
export const clearImageCache = () => {
  imageCache.clear();
};

// Editable Title Component
const EditableTitle: React.FC<{
  value: string;
  onChange: (newValue: string) => void;
  style?: React.CSSProperties;
}> = ({ value, onChange, style }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setEditValue(value);
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleSave = () => {
    if (editValue.trim()) {
      onChange(editValue.trim());
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (isEditing) {
    return (
      <div style={{ position: 'relative', width: '100%' }}>
        <input
          ref={inputRef}
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          style={{
            ...style,
            background: 'rgba(0, 0, 0, 0.6)',
            border: '2px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '8px',
            padding: '8px 12px',
            color: '#fff',
            fontSize: '18px',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '100%',
            outline: 'none',
            boxSizing: 'border-box'
          }}
        />
      </div>
    );
  }

  return (
    <div 
      style={{ 
        ...style, 
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px'
      }}
      onClick={() => setIsEditing(true)}
      title="Click to edit title"
    >
      <span>{value}</span>
      <FiEdit2 
        size={14} 
        style={{ 
          opacity: 0.6,
          transition: 'opacity 0.2s ease'
        }}
      />
    </div>
  );
};

// Styled Components
const CardContainer = styled.div`
  background: transparent;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    max-width: 90%;
    margin: 0 20px;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    margin: 0 10px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 20px 20px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease, opacity 0.5s ease;

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 2;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ImageDots = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 10;
`;

const Dot = styled.div<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.$active ? '#ff0000' : 'rgba(255, 255, 255, 0.5)'};
  border: 1px solid #000;
  transition: background-color 0.3s ease;
  cursor: pointer;
`;

const NavigationButton = styled.button<{ $position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${props => props.$position}: 8px;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 20;
  opacity: 0.9;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  
  &:hover {
    background: rgba(0, 0, 0, 0.9);
    border-color: rgba(255, 255, 255, 0.6);
    opacity: 1;
    transform: translateY(-50%) scale(1.1);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.7);
  }
`;

const DiscountBadge = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  z-index: 2;
`;

const LikeButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 2;

  /* حالت عادی - آنلایک */
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: scale(1.1);
  }

  /* حالت لایک شده */
  &.liked {
    background: #ff6b6b;
    color: white;
    
    &:hover {
      background: #ff5252;
      transform: scale(1.1);
    }
  }
`;

const ContentContainer = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  justify-content: space-between;
`;

const ProductId = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 4px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
`;

const CurrentPrice = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  background: rgba(0, 0, 0, 0.4);
  padding: 4px 8px;
  border-radius: 6px;
  backdrop-filter: blur(5px);
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
`;

const Stars = styled.div`
  display: flex;
  gap: 1px;
`;

const Star = styled.span<{ $filled?: boolean }>`
  color: ${props => props.$filled ? '#fbbf24' : '#d1d5db'};
  font-size: 16px;
`;

// Simple Multi-language Property Component
const MultiLangPropertyBox = styled.div<{ $currentLang: string }>`
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 8px 12px;
  border-radius: 6px;
  backdrop-filter: blur(5px);
  text-align: center;
  color: #ffffff;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  
  /* Show only the current language */
  .lang-en { display: ${props => props.$currentLang === 'EN' ? 'inline' : 'none'}; }
  .lang-he { display: ${props => props.$currentLang === 'HE' ? 'inline' : 'none'}; }
  .lang-ar { display: ${props => props.$currentLang === 'AR' ? 'inline' : 'none'}; }
`;

// Dynamic Property Component
const PropertyBox = styled.div<{ $textLength: number }>`
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 8px 12px;
  border-radius: 6px;
  backdrop-filter: blur(5px);
  text-align: center;
  font-size: ${props => {
    // Dynamic font size based on text length
    if (props.$textLength > 15) return '10px';
    if (props.$textLength > 12) return '11px';
    return '12px';
  }};
  color: #ffffff;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RatingText = styled.span`
  font-size: 11px;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  background: rgba(0, 0, 0, 0.4);
  padding: 3px 6px;
  border-radius: 4px;
  backdrop-filter: blur(5px);
  font-weight: 500;
`;

const CategoryTag = styled.div`
  color: #ffffff;
  padding: 3px 8px;
  font-size: 10px;
  font-weight: 500;
  margin-bottom: 4px;
  display: inline-block;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const InternalId = styled.div`
  font-size: 12px;
  color: #ffffff;
  margin-bottom: 16px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  background: rgba(0, 0, 0, 0.4);
  padding: 4px 8px;
  border-radius: 6px;
  backdrop-filter: blur(5px);
  font-weight: 500;
`;

const BuyButton = styled.button`
  position: absolute;
  top: 60px;
  right: 12px;
  background: #ef4444;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #dc2626;
    transform: scale(1.05);
  }
`;

interface ProductCardNewProps {
  product: Product;
  onLike?: (productId: string) => void;
  onShare?: (product: Product) => void;
  onBuy?: (product: Product) => void;
  isLiked?: boolean;
  showDebug?: boolean;
}

const ProductCardNew: React.FC<ProductCardNewProps> = ({
  product,
  onLike,
  onShare,
  onBuy,
  isLiked = false,
  showDebug = false
}) => {
  const { t, currentLanguage } = useTranslation();
  
  // Local state for the current displayed title
  const [currentTitle, setCurrentTitle] = useState(product.customTitle || product.title || 'Product Title');
  
  // Update currentTitle when product changes
  useEffect(() => {
    setCurrentTitle(product.customTitle || product.title || 'Product Title');
  }, [product.customTitle, product.title]);
  
  // Debug logging removed for cleaner console output
  // Get all available images and remove duplicates
  const allImages = [
    product.image,
    ...(Array.isArray(product.images) ? product.images : [])
  ].filter(Boolean);

  // Remove duplicate images
  const uniqueImages = allImages.filter((image, index, array) => 
    array.indexOf(image) === index
  );

  // Check if product has video
  const hasVideo = product.video && product.video.trim() !== '';
  const videoUrl = hasVideo ? product.video : null;

  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());
  const [isInViewport, setIsInViewport] = useState(false);
  const [showVideo, setShowVideo] = useState(hasVideo); // Start with video if available
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Preload images function
  const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      // Check if image is already cached
      if (imageCache.has(src)) {
        resolve();
        return;
      }

      const img = new Image();
      img.onload = () => {
        imageCache.set(src, img);
        setPreloadedImages(prev => new Set([...prev, src]));
        resolve();
      };
      img.onerror = reject;
      img.src = src;
    });
  };

  // Preload all images when component mounts or images change
  useEffect(() => {
    const preloadAllImages = async () => {
      // First, preload the current image immediately
      if (uniqueImages[currentImageIndex]) {
        try {
          await preloadImage(uniqueImages[currentImageIndex]);
        } catch (error) {
          // Silently handle preload errors
        }
      }
      
      // Then preload the rest
      const preloadPromises = uniqueImages.map(src => preloadImage(src));
      try {
        await Promise.all(preloadPromises);
      } catch (error) {
        // Silently handle preload errors
      }
    };

    if (uniqueImages.length > 0) {
      preloadAllImages();
    }
  }, [uniqueImages.join(','), currentImageIndex]);

  // Navigation functions
  const goToPreviousImage = () => {
    if (hasVideo && showVideo) {
      // If showing video, switch to last image
      setShowVideo(false);
      setCurrentImageIndex(uniqueImages.length - 1);
    } else if (currentImageIndex > 0) {
      // Navigate to previous image
      setCurrentImageIndex(currentImageIndex - 1);
    } else if (hasVideo) {
      // If on first image and product has video, switch to video
      setShowVideo(true);
    } else if (uniqueImages.length > 1) {
      // Loop to last image
      setCurrentImageIndex(uniqueImages.length - 1);
    }
  };

  const goToNextImage = () => {
    if (hasVideo && !showVideo && currentImageIndex === uniqueImages.length - 1) {
      // If on last image and product has video, switch to video
      setShowVideo(true);
    } else if (currentImageIndex < uniqueImages.length - 1) {
      // Navigate to next image
      setCurrentImageIndex(currentImageIndex + 1);
    } else if (hasVideo && showVideo) {
      // If showing video, switch to first image
      setShowVideo(false);
      setCurrentImageIndex(0);
    } else if (uniqueImages.length > 1) {
      // Loop to first image
      setCurrentImageIndex(0);
    }
  };

  // Touch handling
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
      goToNextImage();
    } else if (isRightSwipe) {
      goToPreviousImage();
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPreviousImage();
    } else if (e.key === 'ArrowRight') {
      goToNextImage();
    }
  };



  // Reset loading state when image index changes
  useEffect(() => {
    const currentImageSrc = uniqueImages[currentImageIndex];
    if (currentImageSrc) {
      // If image is preloaded, set loaded immediately
      if (preloadedImages.has(currentImageSrc)) {
        setImageLoaded(true);
      } else {
        setImageLoaded(false);
      }
    }
  }, [currentImageIndex, preloadedImages, uniqueImages]);

  // Intersection Observer for video autoplay
  useEffect(() => {
    if (!hasVideo || !cardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting;
          setIsInViewport(isVisible);
          
          // Pause/play video based on visibility
          if (videoRef.current && showVideo) {
            if (isVisible) {
              videoRef.current.play().catch(console.error);
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the card is visible
        rootMargin: '0px 0px 0px 0px'
      }
    );

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, [hasVideo, showVideo]);

  // Auto-rotate images every 3 seconds, but only for products WITHOUT video
  useEffect(() => {
    if (uniqueImages.length <= 1 || hasVideo) return;

    const interval = setInterval(() => {
      // Only auto-rotate images for products without video
      if (imageLoaded) {
        const nextIndex = (currentImageIndex + 1) % uniqueImages.length;
        setCurrentImageIndex(nextIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [uniqueImages.length, imageLoaded, currentImageIndex, hasVideo]);

  const formatPrice = (price: number, currencyCode: string) => {
    const symbols: { [key: string]: string } = {
      'USD': '$',
      'EUR': '€',
      'ILS': '₪'
    };
    
    const symbol = symbols[currencyCode] || '$';
    return `${symbol}${parseFloat(price.toString()).toFixed(2)}`;
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // همیشه 5 ستاره نمایش می‌دهیم
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        // ستاره‌های کامل (پر)
        stars.push(<Star key={i} $filled>★</Star>);
      } else if (i === fullStars && hasHalfStar) {
        // ستاره نیمه (پر)
        stars.push(<Star key={i} $filled>★</Star>);
      } else {
        // ستاره‌های خالی
        stars.push(<Star key={i}>☆</Star>);
      }
    }
    return stars;
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onLike) {
      onLike(product.id);
    }
  };

  const handleViewProduct = () => {
    if (onBuy) {
      onBuy(product);
    }
  };

  const handleShare = () => {
    if (onShare) {
      onShare(product);
    }
  };

  const discountPercentage = (product.discount || product.discountPercentage) 
    ? Math.round(product.discount || product.discountPercentage || 0) 
    : null;

  return (
    <CardContainer className="fade-in">
      <ImageContainer
        ref={cardRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {hasVideo && showVideo ? (
          <video
            ref={videoRef}
            src={videoUrl!}
            muted
            loop
            playsInline
            controls
            controlsList="nodownload nofullscreen noremoteplayback"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        ) : product.image && (
          <>
            <ProductImage
              src={uniqueImages[currentImageIndex]}
              alt={product.title}
              onLoad={() => setImageLoaded(true)}
              style={{ opacity: imageLoaded ? 1 : 0 }}
            />
            {!imageLoaded && (
              <LoadingOverlay>
                <LoadingSpinner />
              </LoadingOverlay>
            )}
          </>
        )}

        {/* Navigation Buttons */}
        {(hasVideo || uniqueImages.length > 1) && (
          <>
            <NavigationButton
              $position="left"
              onClick={goToPreviousImage}
              aria-label="Previous"
              style={{ 
                opacity: 0.9,
                cursor: 'pointer'
              }}
            >
              ‹
            </NavigationButton>
            <NavigationButton
              $position="right"
              onClick={goToNextImage}
              aria-label="Next"
              style={{ 
                opacity: 0.9,
                cursor: 'pointer'
              }}
            >
              ›
            </NavigationButton>
          </>
        )}

        {discountPercentage && (
          <DiscountBadge>
            -{discountPercentage}%
          </DiscountBadge>
        )}

        <LikeButton 
          className={isLiked ? 'liked' : ''}
          onClick={handleLike}
        >
          <FiHeart fill={isLiked ? 'currentColor' : 'none'} />
        </LikeButton>

        <BuyButton onClick={handleViewProduct}>
          <FiShoppingCart />
        </BuyButton>
        
        {/* Carousel Dots */}
        {(uniqueImages.length > 1 || hasVideo) && (
          <ImageDots>
            {/* Video dot */}
            {hasVideo && (
              <Dot
                $active={!!showVideo}
                onClick={() => {
                  setShowVideo(true);
                }}
                style={{ backgroundColor: showVideo ? '#3b82f6' : '#6b7280' }}
              />
            )}
            {/* Image dots */}
            {uniqueImages.map((_, index) => (
              <Dot
                key={index}
                $active={index === currentImageIndex && !showVideo}
                onClick={() => {
                  setCurrentImageIndex(index);
                  setShowVideo(false);
                }}
              />
            ))}
          </ImageDots>
        )}
      </ImageContainer>

      <ContentContainer>
        <EditableTitle
          value={currentTitle}
          onChange={(newTitle) => {
            // Update local state immediately
            setCurrentTitle(newTitle);
            // Update the product title in parent component
            if (product.onTitleChange) {
              product.onTitleChange(product.id, newTitle);
            }
          }}
          style={{ 
            fontSize: '18px', 
            fontWeight: 'bold', 
            marginBottom: '10px', 
            color: '#fff',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            textAlign: 'center',
            width: '100%',
            padding: '8px',
            borderRadius: '6px',
            transition: 'all 0.2s ease'
          }}
        />
        
        {/* دسته‌بندی - زیر عنوان */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
          <MultiLangPropertyBox $currentLang={currentLanguage} style={{ 
            background: 'rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '6px',
            padding: '4px 12px',
            fontSize: '11px',
            textAlign: 'center',
            color: '#ffffff'
          }}>
            <span className="lang-en">Category: {product.firstLevelCategoryName || product.category || 'General'}</span>
            <span className="lang-he">קטגוריה: {product.firstLevelCategoryName || product.category || 'General'}</span>
            <span className="lang-ar">الفئة: {product.firstLevelCategoryName || product.category || 'General'}</span>
          </MultiLangPropertyBox>
        </div>
        
        
        {/* خصوصیات در دو ستون */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '8px',
          marginBottom: '8px'
        }}>
          {/* ستون چپ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* شناسه */}
            <MultiLangPropertyBox $currentLang={currentLanguage} style={{ color: '#fbbf24' }}>
              <span className="lang-en">ID: {product.id}</span>
              <span className="lang-he">מזהה: {product.id}</span>
              <span className="lang-ar">المعرف: {product.id}</span>
            </MultiLangPropertyBox>

            {/* قیمت */}
            <MultiLangPropertyBox $currentLang={currentLanguage} style={{ color: '#ffffff' }}>
              <span className="lang-en">Price: {formatPrice(product.priceTarget || product.price || 0, product.currencyTarget || product.currency)}</span>
              <span className="lang-he">מחיר: {formatPrice(product.priceTarget || product.price || 0, product.currencyTarget || product.currency)}</span>
              <span className="lang-ar">السعر: {formatPrice(product.priceTarget || product.price || 0, product.currencyTarget || product.currency)}</span>
            </MultiLangPropertyBox>

            {/* قیمت اصلی */}
            {(product.originalPriceTarget || product.originalPrice) && (
              <MultiLangPropertyBox $currentLang={currentLanguage} style={{ color: '#ff6b6b', textDecoration: 'line-through' }}>
                <span className="lang-en">Original Price: {formatPrice(product.originalPriceTarget || product.originalPrice || 0, product.currencyTarget || product.currency)}</span>
                <span className="lang-he">מחיר מקורי: {formatPrice(product.originalPriceTarget || product.originalPrice || 0, product.currencyTarget || product.currency)}</span>
                <span className="lang-ar">السعر الأصلي: {formatPrice(product.originalPriceTarget || product.originalPrice || 0, product.currencyTarget || product.currency)}</span>
              </MultiLangPropertyBox>
            )}

            {/* نوع ارز */}
            <MultiLangPropertyBox $currentLang={currentLanguage} style={{ color: '#60a5fa' }}>
              <span className="lang-en">Currency Type: {product.currencyTarget || product.currency}</span>
              <span className="lang-he">סוג מטבע: {product.currencyTarget || product.currency}</span>
              <span className="lang-ar">نوع العملة: {product.currencyTarget || product.currency}</span>
            </MultiLangPropertyBox>
          </div>

          {/* ستون راست */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* تخفیف */}
            <MultiLangPropertyBox $currentLang={currentLanguage} style={{ color: '#fbbf24' }}>
              <span className="lang-en">Discount: {(product.discount || product.discountPercentage || 0).toFixed(1)}%</span>
              <span className="lang-he">הנחה: {(product.discount || product.discountPercentage || 0).toFixed(1)}%</span>
              <span className="lang-ar">الخصم: {(product.discount || product.discountPercentage || 0).toFixed(1)}%</span>
            </MultiLangPropertyBox>

            {/* کمیسیون */}
            <MultiLangPropertyBox $currentLang={currentLanguage} style={{ color: '#fb7185' }}>
              <span className="lang-en">Commission: {product.commissionRate || 0}%</span>
              <span className="lang-he">עמלה: {product.commissionRate || 0}%</span>
              <span className="lang-ar">العمولة: {product.commissionRate || 0}%</span>
            </MultiLangPropertyBox>

            {/* تعداد فروش */}
            <MultiLangPropertyBox $currentLang={currentLanguage} style={{ color: '#34d399' }}>
              <span className="lang-en">Sales Volume: {(product.volume || product.salesVolume || 0).toLocaleString()}</span>
              <span className="lang-he">נפח מכירות: {(product.volume || product.salesVolume || 0).toLocaleString()}</span>
              <span className="lang-ar">حجم المبيعات: {(product.volume || product.salesVolume || 0).toLocaleString()}</span>
            </MultiLangPropertyBox>

            {/* امتیاز کاربری */}
            <MultiLangPropertyBox $currentLang={currentLanguage} style={{ color: '#a78bfa', gap: '6px', flexDirection: 'row', alignItems: 'center' }}>
              <span className="lang-en">Rating:</span>
              <span className="lang-he">דירוג:</span>
              <span className="lang-ar">التقييم:</span>
              <Stars>{renderStars(product.productScoreStars || product.scoreStars || product.rating || 0)}</Stars>
            </MultiLangPropertyBox>
          </div>
        </div>

      </ContentContainer>

      {/* Debug Panel */}
      {showDebug && (
        <ProductDataDebug 
          product={product} 
          isVisible={showDebug}
        />
      )}
    </CardContainer>
  );
};

export default ProductCardNew;
export { ProductCardNew };