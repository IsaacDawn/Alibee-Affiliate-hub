import React, { useState, useEffect } from 'react';
import type { Product } from '../types';
import { ImageCarousel } from './ImageCarousel';
import { EditableTitle } from './EditableTitle';
import { useCurrencyConversion } from '../hooks/useCurrencyConversion';
import { useCurrencyDetection } from '../hooks/useCurrencyDetection';
import { useCurrency } from '../hooks/useCurrency';
import { currencyLogger } from '../utils/currencyLogger';
// import { useLanguage } from '../hooks/useLanguage'; // Removed

interface ProductCardProps {
  product: Product;
  onLike?: (productId: string) => void;
  onShare?: (product: Product) => void;
  onBuy?: (product: Product) => void;
  onTitleEdit?: (productId: string, newTitle: string) => void;
  isLiked?: boolean;
  editedTitle?: string;
  convertedPrice?: number;
  displayPrice?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onLike,
  onShare,
  onBuy,
  onTitleEdit,
  isLiked = false,
  editedTitle,
  convertedPrice: propConvertedPrice,
  displayPrice: propDisplayPrice
}) => {
  const [liked, setLiked] = useState(isLiked);
  const [convertedPrice, setConvertedPrice] = useState<number | null>(null);
  const [detectedCurrency, setDetectedCurrency] = useState<string | null>(null);
  const [isPriceConverting, setIsPriceConverting] = useState(false);
  
  const { currentCurrency } = useCurrency();
  const { convertPriceSync } = useCurrencyConversion();
  const { detectCurrency } = useCurrencyDetection();
  // const { t } = useLanguage(); // Removed

  // Create images array for carousel
  // Filter out duplicate main image from additional images
  const additionalImages = product.images ? product.images.filter(img => img !== product.image) : [];
  const carouselImages = [product.image, ...additionalImages];

  // Currency conversion effect
  useEffect(() => {
    const performCurrencyConversion = async () => {
      currencyLogger.info('ProductCard', 'Currency conversion effect triggered', {
        productId: product.id,
        productPrice: product.price,
        productTitle: product.title,
        currentCurrency: currentCurrency?.code,
        hasCurrentCurrency: !!currentCurrency
      });

      if (!product.price || !currentCurrency) {
        currencyLogger.warn('ProductCard', 'Missing price or currency, skipping conversion', {
          productId: product.id,
          hasPrice: !!product.price,
          hasCurrentCurrency: !!currentCurrency
        });
        setConvertedPrice(null);
        setDetectedCurrency(null);
        return;
      }

      setIsPriceConverting(true);

      try {
        // First, try to detect currency from product title
        currencyLogger.info('ProductCard', 'Detecting currency from product title', {
          productId: product.id,
          title: product.title
        });
        
        const detected = await detectCurrency(product.title);
        setDetectedCurrency(detected);
        
        currencyLogger.info('ProductCard', 'Currency detection result', {
          productId: product.id,
          detectedCurrency: detected
        });

        // Use detected currency or default to USD
        const fromCurrency = detected || 'USD';
        
        currencyLogger.info('ProductCard', 'Starting price conversion', {
          productId: product.id,
          originalPrice: product.price,
          fromCurrency,
          toCurrency: currentCurrency.code
        });
        
        // Convert price
        const converted = await convertPriceSync(product.price, fromCurrency);
        setConvertedPrice(converted);
        
        currencyLogger.info('ProductCard', 'Price conversion completed', {
          productId: product.id,
          originalPrice: product.price,
          convertedPrice: converted,
          fromCurrency,
          toCurrency: currentCurrency.code
        });
      } catch (error) {
        currencyLogger.error('ProductCard', 'Currency conversion failed', {
          productId: product.id,
          error: error,
          productPrice: product.price,
          currentCurrency: currentCurrency?.code
        });
        console.error('Currency conversion failed:', error);
        setConvertedPrice(null);
      } finally {
        setIsPriceConverting(false);
      }
    };

    performCurrencyConversion();
  }, [product.price, product.title, currentCurrency, convertPriceSync, detectCurrency]);
  
  

  const handleLike = () => {
    setLiked(!liked);
    onLike?.(product.id);
  };

  const handleShare = () => {
    onShare?.(product);
  };

  const handleBuy = () => {
    onBuy?.(product);
  };

  const formatPrice = (price: number, currency: string) => {
    try {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
      }).format(price);
    } catch (error) {
      return `${currency} ${price.toFixed(2)}`;
    }
  };

  const getDisplayPrice = () => {
    // Use prop display price if available
    if (propDisplayPrice) {
      return propDisplayPrice;
    }

    if (isPriceConverting) {
      return 'Converting...';
    }

    // Use prop converted price if available
    if (propConvertedPrice !== undefined && currentCurrency) {
      return formatPrice(propConvertedPrice, currentCurrency.code);
    }

    // Use local converted price
    if (convertedPrice !== null && currentCurrency) {
      return formatPrice(convertedPrice, currentCurrency.code);
    }

    // Fallback to original price
    return formatPrice(product.price, 'USD');
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="text-yellow-400">★</span>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span key={i} className="text-yellow-400">☆</span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-400">☆</span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="bg-white/20 backdrop-blur-xl rounded-3xl overflow-visible border border-white/30 shadow-2xl hover:shadow-2xl hover:shadow-purple-500/30 hover:border-purple-400/50 transition-all duration-700 transform hover:scale-[1.05] hover:-translate-y-2 group h-full flex flex-col relative">
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-orange-500/10 transition-all duration-700 z-10 pointer-events-none"></div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-20 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
      </div>

      <div className="relative overflow-visible">
        <div className="w-full aspect-square md:h-64 lg:h-48 xl:h-56 group-hover:scale-110 transition-transform duration-700 relative">
          <ImageCarousel
            images={carouselImages}
            alt={product.title}
            className="w-full h-full"
            autoPlay={true}
            autoPlayInterval={4000}
            showDots={true}
            showArrows={true}
            video={product.video}
            onLike={handleLike}
            isLiked={liked}
            onBuy={handleBuy}
            isBuyable={true}
          />
        </div>

      </div>

      {/* Content */}
      <div className="p-4 md:p-6 flex-1 flex flex-col">
        <div className="mb-4 flex-1">
          {onTitleEdit ? (
            <EditableTitle
              title={editedTitle && editedTitle.trim() !== '' ? editedTitle : product.title}
              onSave={(newTitle) => onTitleEdit(product.id, newTitle)}
              className="w-full bg-transparent text-slate-900 text-base md:text-base leading-relaxed font-semibold"
              maxLength={120}
            />
          ) : (
            <h3 className="w-full bg-transparent text-slate-900 text-base md:text-base resize-none focus:outline-none placeholder-slate-500 leading-relaxed font-semibold">
              {editedTitle && editedTitle.trim() !== '' ? editedTitle : product.title}
            </h3>
          )}
        </div>

        {/* Product Information Grid */}
        <div className="space-y-3 mb-4">
          {/* Product ID */}
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-600 font-medium">Product ID:</span>
            <span className="text-xs text-gray-800 font-mono">{product.productId}</span>
          </div>

          {/* Price Information */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600 font-medium">Price:</span>
              <div className="text-right">
                <div className="text-lg font-bold text-green-600">
                  {product.priceTarget ? formatPrice(product.priceTarget, product.currencyTarget || 'USD') : getDisplayPrice()}
                </div>
                {product.priceTarget && (
                  <div className="text-xs text-gray-500">
                    {formatPrice(product.price, product.currency)}
                  </div>
                )}
              </div>
            </div>

            {/* Original Price */}
            {product.originalPriceTarget && (
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600 font-medium">Original Price:</span>
                <div className="text-right">
                  <div className="text-sm text-gray-400 line-through">
                    {formatPrice(product.originalPriceTarget, product.originalCurrencyTarget || 'USD')}
                  </div>
                  {product.originalPrice && (
                    <div className="text-xs text-gray-500">
                      {formatPrice(product.originalPrice, product.originalPriceCurrency || product.currency)}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Discount */}
          {product.discountPercentage && product.discountPercentage > 0 && (
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600 font-medium">Discount:</span>
              <span className="text-sm font-bold text-red-500">
                {product.discountPercentage.toFixed(1)}%
              </span>
            </div>
          )}

          {/* Categories */}
          <div className="space-y-1">
            {product.firstLevelCategoryName && (
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600 font-medium">1st Category:</span>
                <span className="text-xs text-gray-800 text-right max-w-[60%]">
                  {product.firstLevelCategoryName}
                </span>
              </div>
            )}
            {product.secondLevelCategoryName && (
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600 font-medium">2nd Category:</span>
                <span className="text-xs text-gray-800 text-right max-w-[60%]">
                  {product.secondLevelCategoryName}
                </span>
              </div>
            )}
          </div>

          {/* Commission */}
          {product.commissionRate && (
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600 font-medium">Commission:</span>
              <span className="text-xs text-blue-600 font-semibold">
                {product.commissionRate}%
              </span>
            </div>
          )}

          {/* Rating and Volume */}
          <div className="space-y-1">
            {product.productScoreStars && product.productScoreStars > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600 font-medium">Rating:</span>
                <div className="flex items-center gap-1">
                  <div className="flex items-center">
                    {renderStars(product.productScoreStars)}
                  </div>
                  <span className="text-xs text-slate-600">
                    {product.productScoreStars.toFixed(1)}
                  </span>
                </div>
              </div>
            )}
            {product.salesVolume && product.salesVolume > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600 font-medium">Volume:</span>
                <span className="text-xs text-gray-800">
                  {product.salesVolume.toLocaleString()}
                </span>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};