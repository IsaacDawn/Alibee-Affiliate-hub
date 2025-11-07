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

  /* Normal state - unliked */
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: scale(1.1);
  }

  /* Liked state */
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

const CategoryLabel = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 6px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const CategoryDropdown = styled.select`
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  padding: 6px 10px;
  color: white;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(5px);
  outline: none;
  width: 100%;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    border-color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
  }

  option {
    background: #1a1a1a;
    color: white;
    padding: 6px;
  }
`;

const CategoryContainer = styled.div`
  margin-top: 8px;
`;

interface ProductCardNewProps {
  product: Product;
  onLike?: (productId: string, selectedCategory?: string) => void;
  onShare?: (product: Product) => void;
  onBuy?: (product: Product) => void;
  onCategoryChange?: (productId: string, newCategory: string) => void;
  isLiked?: boolean;
  selectedCategory?: string;
  showDebug?: boolean;
  cardIndex?: number; // Index of this card in the grid
  totalCards?: number; // Total number of cards
}

const ProductCardNew: React.FC<ProductCardNewProps> = ({
  product,
  onLike,
  onShare,
  onBuy,
  onCategoryChange,
  isLiked = false,
  selectedCategory = 'other',
  showDebug = false,
  cardIndex = 0,
  totalCards = 0
}) => {
  const { t, currentLanguage } = useTranslation();
  
  // Local state for the current displayed title
  const [currentTitle, setCurrentTitle] = useState(product.customTitle || product.title || 'Product Title');
  
  // Available categories
  const categories = [
    { value: 'other', label: 'Other' },
    { value: 'fashion', label: 'Fashion' },
    { value: 'shoes', label: 'Shoes' },
    { value: 'jewelery', label: 'Jewelery' },
    { value: 'car accessories', label: 'Car Accessories' },
    { value: 'cellphone', label: 'Cellphone' }
  ];
  
  // Function to normalize product_category from JSON to match dropdown values
  const normalizeCategory = (category: string | undefined | null): string => {
    if (!category) return 'other';
    
    const normalized = category.toLowerCase().trim();
    const dropdownValues = categories.map(cat => cat.value);
    
    // Exact match (case-insensitive)
    if (dropdownValues.includes(normalized)) {
      return normalized;
    }
    
    // Partial match with keywords
    if (normalized.includes('fashion') || normalized.includes('clothing') || normalized.includes('apparel')) {
      return 'fashion';
    }
    if (normalized.includes('shoe') || normalized.includes('footwear')) {
      return 'shoes';
    }
    if (normalized.includes('jewel') || normalized.includes('jewelry')) {
      return 'jewelery';
    }
    if (normalized.includes('car') || normalized.includes('automotive') || normalized.includes('vehicle')) {
      return 'car accessories';
    }
    if (normalized.includes('phone') || normalized.includes('mobile') || normalized.includes('cell') || normalized.includes('smartphone')) {
      return 'cellphone';
    }
    
    // No match found, return 'other'
    return 'other';
  };
  
  // Calculate initial category: savedProductCategory > normalized productCategory (final value from JSON) > selectedCategory > other
  const getInitialCategory = (): string => {
    // Priority 1: If product is saved in database, use savedProductCategory (from database)
    if (product.savedProductCategory) {
      return product.savedProductCategory;
    }
    // Priority 2: Use productCategory from JSON (this is the final value - either from database or API)
    // Normalize it to match dropdown values
    if (product.productCategory) {
      return normalizeCategory(product.productCategory);
    }
    // Priority 3: Use selectedCategory from props
    if (selectedCategory) {
      return selectedCategory;
    }
    // Default: other
    return 'other';
  };
  
  // Local state for selected category
  const [localCategory, setLocalCategory] = useState<string>(getInitialCategory());
  
  // Track if category was manually changed by user
  const categoryManuallyChangedRef = useRef<boolean>(false);
  
  // Update local category when product data changes
  // productCategory in JSON is the final value (overridden by database if product exists in DB)
  useEffect(() => {
    // If user manually changed the category, don't override it
    if (categoryManuallyChangedRef.current) {
      return;
    }
    
    // Priority: selectedCategory (from productCategories state) > savedProductCategory > normalized productCategory (final from JSON) > other
    let newCategory = 'other';
    
    // Priority 1: If selectedCategory is provided (from productCategories state), use it
    // This is the most recent user selection, even if product is not liked yet
    if (selectedCategory && selectedCategory !== 'other') {
      newCategory = selectedCategory;
    }
    // Priority 2: If product is saved in database, use savedProductCategory
    else if (product.savedProductCategory) {
      newCategory = product.savedProductCategory;
    } 
    // Priority 3: Use productCategory from JSON (final value - already overridden by backend if in DB)
    // Normalize it to match dropdown values
    else if (product.productCategory) {
      const normalized = normalizeCategory(product.productCategory);
      newCategory = normalized;
    }
    
    setLocalCategory(newCategory);
  }, [selectedCategory, product.savedProductCategory, product.productCategory, product.id]);
  
  // Reset manual change flag when product changes
  useEffect(() => {
    categoryManuallyChangedRef.current = false;
  }, [product.id]);
  
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
  const [isActiveCard, setIsActiveCard] = useState(false); // Whether this is the active/current card
  const [showVideo, setShowVideo] = useState(hasVideo); // Start with video if available
  const [nextImageLoading, setNextImageLoading] = useState(false);
  const [additionalImagesLoaded, setAdditionalImagesLoaded] = useState(false);
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

  // Optimized image loading: Only load main image initially, additional images only for active card
  useEffect(() => {
    if (uniqueImages.length === 0) return;

    // Always load main image (first image) when card becomes visible (via IntersectionObserver)
    if (isInViewport) {
      const mainImage = uniqueImages[0];
      if (mainImage && !preloadedImages.has(mainImage)) {
        preloadImage(mainImage).catch(() => {
          // Silently handle preload errors
        });
      }
    }
  }, [uniqueImages, isInViewport, preloadedImages]);

  // Load additional images only for active card
  useEffect(() => {
    if (isActiveCard && !additionalImagesLoaded && uniqueImages.length > 1) {
      setAdditionalImagesLoaded(true);
      // Small delay to ensure main image is loaded first
      setTimeout(() => {
        // Load additional images with delay
        uniqueImages.slice(1).forEach((url, index) => {
          if (!preloadedImages.has(url)) {
            setTimeout(() => {
              preloadImage(url).catch(() => {
                // Silently handle preload errors
              });
            }, (index + 1) * 300); // 300ms delay between each image
          }
        });
      }, 200); // 200ms delay before starting to load additional images
    }
  }, [isActiveCard, additionalImagesLoaded, uniqueImages, preloadedImages]);

  // Preload main image of next card when current card becomes active
  useEffect(() => {
    if (isActiveCard && cardIndex >= 0 && cardIndex < totalCards - 1) {
      // Find next card element
      const nextCardElement = document.querySelector(`[data-product-index="${cardIndex + 2}"]`);
      if (nextCardElement) {
        // Get the next card's product data from the DOM or find it in the products array
        // For now, we'll rely on the next card's own IntersectionObserver to load its main image
        // But we can trigger it earlier by observing the next card
        const nextCardObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Next card is approaching viewport, its own component will handle loading
                // This observer just ensures we're watching for it
                nextCardObserver.disconnect();
              }
            });
          },
          {
            threshold: 0.1,
            rootMargin: '300px' // Start watching when 300px away (earlier than default)
          }
        );
        nextCardObserver.observe(nextCardElement);
        return () => nextCardObserver.disconnect();
      }
    }
  }, [isActiveCard, cardIndex, totalCards]);

  // Navigation functions
  const goToPreviousImage = async () => {
    if (hasVideo && showVideo) {
      // If showing video, switch to last image
      setShowVideo(false);
      const targetIndex = uniqueImages.length - 1;
      const targetImageUrl = uniqueImages[targetIndex];
      
      if (!preloadedImages.has(targetImageUrl)) {
        setNextImageLoading(true);
        try {
          await preloadImage(targetImageUrl);
        } catch (error) {
          // Continue even if preload fails
        } finally {
          setNextImageLoading(false);
        }
      }
      setCurrentImageIndex(targetIndex);
    } else if (currentImageIndex > 0) {
      // Navigate to previous image
      const targetIndex = currentImageIndex - 1;
      const targetImageUrl = uniqueImages[targetIndex];
      
      if (!preloadedImages.has(targetImageUrl)) {
        setNextImageLoading(true);
        try {
          await preloadImage(targetImageUrl);
        } catch (error) {
          // Continue even if preload fails
        } finally {
          setNextImageLoading(false);
        }
      }
      setCurrentImageIndex(targetIndex);
    } else if (hasVideo) {
      // If on first image and product has video, switch to video
      setShowVideo(true);
    } else if (uniqueImages.length > 1) {
      // Loop to last image
      const targetIndex = uniqueImages.length - 1;
      const targetImageUrl = uniqueImages[targetIndex];
      
      if (!preloadedImages.has(targetImageUrl)) {
        setNextImageLoading(true);
        try {
          await preloadImage(targetImageUrl);
        } catch (error) {
          // Continue even if preload fails
        } finally {
          setNextImageLoading(false);
        }
      }
      setCurrentImageIndex(targetIndex);
    }
  };

  const goToNextImage = async () => {
    if (hasVideo && !showVideo && currentImageIndex === uniqueImages.length - 1) {
      // If on last image and product has video, switch to video
      setShowVideo(true);
    } else if (currentImageIndex < uniqueImages.length - 1) {
      // Navigate to next image
      const targetIndex = currentImageIndex + 1;
      const targetImageUrl = uniqueImages[targetIndex];
      
      if (!preloadedImages.has(targetImageUrl)) {
        setNextImageLoading(true);
        try {
          await preloadImage(targetImageUrl);
        } catch (error) {
          // Continue even if preload fails
        } finally {
          setNextImageLoading(false);
        }
      }
      setCurrentImageIndex(targetIndex);
    } else if (hasVideo && showVideo) {
      // If showing video, switch to first image
      setShowVideo(false);
      const targetIndex = 0;
      const targetImageUrl = uniqueImages[targetIndex];
      
      if (!preloadedImages.has(targetImageUrl)) {
        setNextImageLoading(true);
        try {
          await preloadImage(targetImageUrl);
        } catch (error) {
          // Continue even if preload fails
        } finally {
          setNextImageLoading(false);
        }
      }
      setCurrentImageIndex(targetIndex);
    } else if (uniqueImages.length > 1) {
      // Loop to first image
      const targetIndex = 0;
      const targetImageUrl = uniqueImages[targetIndex];
      
      if (!preloadedImages.has(targetImageUrl)) {
        setNextImageLoading(true);
        try {
          await preloadImage(targetImageUrl);
        } catch (error) {
          // Continue even if preload fails
        } finally {
          setNextImageLoading(false);
        }
      }
      setCurrentImageIndex(targetIndex);
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

  // Intersection Observer for detecting active card and video autoplay
  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting;
          const intersectionRatio = entry.intersectionRatio;
          
          setIsInViewport(isVisible);
          
          // Card is considered active if it's more than 50% visible in viewport center
          const isActive = isVisible && intersectionRatio >= 0.5;
          setIsActiveCard(isActive);
          
          // Pause/play video based on visibility
          if (hasVideo && videoRef.current && showVideo) {
            if (isVisible) {
              videoRef.current.play().catch(console.error);
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      {
        threshold: [0, 0.3, 0.5, 0.7, 1.0], // Multiple thresholds for better detection
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

    const interval = setInterval(async () => {
      // Only auto-rotate images for products without video
      if (imageLoaded && !nextImageLoading) {
        const nextIndex = (currentImageIndex + 1) % uniqueImages.length;
        const nextImageUrl = uniqueImages[nextIndex];
        
        // Check if next image is already preloaded
        if (preloadedImages.has(nextImageUrl)) {
          setCurrentImageIndex(nextIndex);
        } else {
          // Preload next image before switching
          setNextImageLoading(true);
          try {
            await preloadImage(nextImageUrl);
            setCurrentImageIndex(nextIndex);
          } catch (error) {
            // If preload fails, still switch to avoid getting stuck
            setCurrentImageIndex(nextIndex);
          } finally {
            setNextImageLoading(false);
          }
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [uniqueImages.length, imageLoaded, currentImageIndex, hasVideo, preloadedImages, nextImageLoading]);

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

    // Always display 5 stars
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        // Full stars (filled)
        stars.push(<Star key={i} $filled>★</Star>);
      } else if (i === fullStars && hasHalfStar) {
        // Half star (filled)
        stars.push(<Star key={i} $filled>★</Star>);
      } else {
        // Empty stars
        stars.push(<Star key={i}>☆</Star>);
      }
    }
    return stars;
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onLike) {
      // Pass the currently selected category when liking
      onLike(product.id, localCategory);
    }
  };
  
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.stopPropagation();
    const newCategory = e.target.value;
    setLocalCategory(newCategory);
    
    // Mark that category was manually changed by user
    categoryManuallyChangedRef.current = true;
    
    // Always update category in state (even if not liked yet)
    // This ensures that when user likes the product, the selected category is preserved
    if (onCategoryChange) {
      onCategoryChange(product.id, newCategory);
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
        
        {/* Category Dropdown */}
        <CategoryContainer>
          <CategoryLabel>Custom Category</CategoryLabel>
          <CategoryDropdown
            value={localCategory}
            onChange={handleCategoryChange}
            onClick={(e) => e.stopPropagation()}
          >
            {categories.map(cat => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </CategoryDropdown>
        </CategoryContainer>
        
        {/* Category - under title */}
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
        
        
        {/* Properties in two columns */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '8px',
          marginBottom: '8px'
        }}>
          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* ID */}
            <MultiLangPropertyBox $currentLang={currentLanguage} style={{ color: '#fbbf24' }}>
              <span className="lang-en">ID: {product.id}</span>
              <span className="lang-he">מזהה: {product.id}</span>
              <span className="lang-ar">المعرف: {product.id}</span>
            </MultiLangPropertyBox>

            {/* Price */}
            <MultiLangPropertyBox $currentLang={currentLanguage} style={{ color: '#ffffff' }}>
              <span className="lang-en">Price: {formatPrice(product.priceTarget || product.price || 0, product.currencyTarget || product.currency)}</span>
              <span className="lang-he">מחיר: {formatPrice(product.priceTarget || product.price || 0, product.currencyTarget || product.currency)}</span>
              <span className="lang-ar">السعر: {formatPrice(product.priceTarget || product.price || 0, product.currencyTarget || product.currency)}</span>
            </MultiLangPropertyBox>

            {/* Original Price */}
            {(product.originalPriceTarget || product.originalPrice) && (
              <MultiLangPropertyBox $currentLang={currentLanguage} style={{ color: '#ff6b6b', textDecoration: 'line-through' }}>
                <span className="lang-en">Original Price: {formatPrice(product.originalPriceTarget || product.originalPrice || 0, product.currencyTarget || product.currency)}</span>
                <span className="lang-he">מחיר מקורי: {formatPrice(product.originalPriceTarget || product.originalPrice || 0, product.currencyTarget || product.currency)}</span>
                <span className="lang-ar">السعر الأصلي: {formatPrice(product.originalPriceTarget || product.originalPrice || 0, product.currencyTarget || product.currency)}</span>
              </MultiLangPropertyBox>
            )}

            {/* Currency Type */}
            <MultiLangPropertyBox $currentLang={currentLanguage} style={{ color: '#60a5fa' }}>
              <span className="lang-en">Currency Type: {product.currencyTarget || product.currency}</span>
              <span className="lang-he">סוג מטבע: {product.currencyTarget || product.currency}</span>
              <span className="lang-ar">نوع العملة: {product.currencyTarget || product.currency}</span>
            </MultiLangPropertyBox>
          </div>

          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* Discount */}
            <MultiLangPropertyBox $currentLang={currentLanguage} style={{ color: '#fbbf24' }}>
              <span className="lang-en">Discount: {(product.discount || product.discountPercentage || 0).toFixed(1)}%</span>
              <span className="lang-he">הנחה: {(product.discount || product.discountPercentage || 0).toFixed(1)}%</span>
              <span className="lang-ar">الخصم: {(product.discount || product.discountPercentage || 0).toFixed(1)}%</span>
            </MultiLangPropertyBox>

            {/* Commission */}
            <MultiLangPropertyBox $currentLang={currentLanguage} style={{ color: '#fb7185' }}>
              <span className="lang-en">Commission: {product.commissionRate || 0}%</span>
              <span className="lang-he">עמלה: {product.commissionRate || 0}%</span>
              <span className="lang-ar">العمولة: {product.commissionRate || 0}%</span>
            </MultiLangPropertyBox>

            {/* Sales Volume */}
            <MultiLangPropertyBox $currentLang={currentLanguage} style={{ color: '#34d399' }}>
              <span className="lang-en">Sales Volume: {(product.volume || product.salesVolume || 0).toLocaleString()}</span>
              <span className="lang-he">נפח מכירות: {(product.volume || product.salesVolume || 0).toLocaleString()}</span>
              <span className="lang-ar">حجم المبيعات: {(product.volume || product.salesVolume || 0).toLocaleString()}</span>
            </MultiLangPropertyBox>

            {/* User Rating */}
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