import { useState, useEffect } from "react";
import { convert, formatPrice } from "../../utils/currency";
import type { Currency } from "../../types";
import { ImageCarousel } from "./ImageCarousel";
import { API_ENDPOINTS } from "../../constants";
import { HeartIcon, StarIcon } from "../../icons";
import { debugRatingData, getFinalRating, formatRatingDisplay } from "../../utils/ratingDebug";

// Helper function to format sales volume
function formatSalesVolume(volume: number): string {
  if (volume >= 1000000) {
    return `${(volume / 1000000).toFixed(1)}M`;
  } else if (volume >= 1000) {
    return `${(volume / 1000).toFixed(1)}K`;
  } else {
    return volume.toString();
  }
}

// Helper function to extract image URLs from API response
function extractImageUrls(imageData: any): string[] {
  if (Array.isArray(imageData)) {
    return imageData;
  }
  if (imageData && imageData.string && Array.isArray(imageData.string)) {
    return imageData.string;
  }
  return [];
}

export function MobilePortraitProductCard({
  item,
  currency,
  onSave,
  isSearchInterfaceOpen = false,
}: {
  item: any;
  currency: Currency;
  onSave?: (saved: boolean) => void;
  isSearchInterfaceOpen?: boolean;
}) {
  const [title, setTitle] = useState<string>(item.custom_title ?? item.title ?? item.product_title ?? "");
  const [originalTitle, setOriginalTitle] = useState<string>(item.custom_title ?? item.title ?? item.product_title ?? "");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState<boolean>(!!item.saved_at);
  const [_savedAt, setSavedAt] = useState<string | null>(
    item.saved_at ? String(item.saved_at) : null
  );

  const productId = String(item.product_id ?? "");

  // Helper function to check if product is already saved
  const checkProductExists = async (productId: string): Promise<boolean> => {
    try {
      const res = await fetch(`${API_ENDPOINTS.CHECK_PRODUCT_EXISTS}/${encodeURIComponent(productId)}`, {
        method: "GET",
      });
      const data = await res.json();
      return data?.exists || false;
    } catch (error) {
      console.error("Error checking product existence:", error);
      return false;
    }
  };

  // Helper function to prepare product data for saving
  const prepareProductData = () => {
    const originalTitle = item.product_title || item.title || "";
    const currentTitle = title || originalTitle;
    const hasCustomTitle = currentTitle !== originalTitle && currentTitle.trim() !== "";
    
    return {
      product_id: productId,
      product_title: originalTitle, // Always use original title as base
      promotion_link: item.promotion_link || "",
      product_category: item.product_category || 
                       item.first_level_category_name || 
                       item.second_level_category_name || 
                       item.first_level_category_id || 
                       "",
      custom_title: hasCustomTitle ? currentTitle : null, // Store custom title if different
      has_video: !!(item.product_video_url || item.video_link),
    };
  };

  const toggleSave = async () => {
    if (!productId) {
      return;
    }

    setSaving(true);
    try {
      if (saved) {
        // Remove from saved list
        const res = await fetch(
          `${API_ENDPOINTS.UNSAVE_PRODUCT}/${encodeURIComponent(productId)}`,
          {
            method: "DELETE",
          }
        );
        const data = await res.json();
        if (data?.success) {
          setSaved(false);
          setSavedAt(null);
          onSave?.(false);
        }
      } else {
        // Check if product already exists
        const exists = await checkProductExists(productId);
        
        if (exists) {
          // If product exists, remove it (dislike)
          const res = await fetch(
            `${API_ENDPOINTS.UNSAVE_PRODUCT}/${encodeURIComponent(productId)}`,
            {
              method: "DELETE",
            }
          );
          const data = await res.json();
          if (data?.success) {
            setSaved(false);
            setSavedAt(null);
            onSave?.(false);
          }
        } else {
          // Save new product (like)
          const payload = prepareProductData();
          
          const res = await fetch(API_ENDPOINTS.SAVE_PRODUCT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          
          const data = await res.json();
          if (data?.success) {
            setSaved(true);
            const nowISO = new Date().toISOString();
            setSavedAt(nowISO);
            onSave?.(true);
            
            // Update the original title to current title after successful save
            if (payload.custom_title) {
              setOriginalTitle(payload.custom_title);
            }
          }
        }
      }
    } catch (err) {
    } finally {
      setSaving(false);
    }
  };

  // Check product like status when card loads
  useEffect(() => {
    const checkProductLikeStatus = async () => {
      const currentProductId = String(item.product_id ?? "");
      if (!currentProductId) return;
      
      try {
        const exists = await checkProductExists(currentProductId);
        
        if (exists) {
          setSaved(true);
          // If product is liked, get the save date and custom title
          try {
            const res = await fetch(`${API_ENDPOINTS.GET_PRODUCT_INFO}/${encodeURIComponent(currentProductId)}`, {
              method: "GET",
            });
            const data = await res.json();
            
            if (data?.saved_at) {
              setSavedAt(data.saved_at);
            }
            if (data?.custom_title) {
              setTitle(data.custom_title);
              setOriginalTitle(data.custom_title);
            }
          } catch (error) {
            console.warn("Failed to get product info:", error);
          }
        } else {
          setSaved(false);
          setSavedAt(null);
        }
      } catch (error) {
        console.warn("Failed to check product status:", error);
      }
    };

    checkProductLikeStatus();
  }, [item.product_id]);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [editTitle, setEditTitle] = useState(title);

  // Format prices
  const convertedPrice = convert(item.sale_price, item.sale_price_currency || 'CNY', currency.code);
  const formattedPrice = formatPrice(convertedPrice, currency.code);
  
  const convertedOriginalPrice = item.original_price 
    ? convert(item.original_price, item.original_currency || item.sale_price_currency || 'CNY', currency.code)
    : null;
  const formattedOriginalPrice = convertedOriginalPrice 
    ? formatPrice(convertedOriginalPrice, currency.code)
    : null;

  const handleTitleClick = () => {
    setIsEditingTitle(true);
    setEditTitle(title);
  };

  const handleTitleSave = async () => {
    if (editTitle.trim() === "") {
      setEditTitle(title);
      setIsEditingTitle(false);
      return;
    }

    if (editTitle !== title) {
      setTitle(editTitle);
      
      // If title is different from original, save it to custom_title column
      if (editTitle !== originalTitle) {
        try {
          const payload = {
            product_id: String(item.product_id),
            custom_description: editTitle.trim(),
          };
          
          
          const response = await fetch(API_ENDPOINTS.UPDATE_DESCRIPTION, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
          
          if (response.ok) {
            setOriginalTitle(editTitle);
          } else {
            console.error('Failed to update title in database');
          }
        } catch (error) {
          console.error('Error updating title:', error);
        }
      }
    }
    
    setIsEditingTitle(false);
  };

  const handleTitleCancel = () => {
    setEditTitle(title);
    setIsEditingTitle(false);
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleTitleSave();
    } else if (e.key === 'Escape') {
      handleTitleCancel();
    }
  };

  return (
    <div className="relative bg-gradient-to-l from-purple-600 to-pink-600 overflow-hidden mt-8">
      {/* Mobile Portrait Layout */}
      <div className="mobile-product-container mobile-product-wrapper">
        {/* Heart Button - Bottom Left */}
        <div className="mobile-heart-button">
          <button
            disabled={saving || isSearchInterfaceOpen}
            onClick={toggleSave}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-black/20 backdrop-blur-sm border border-white/20 ${
              saved
                ? "text-red-500"
                : "text-white"
            } ${isSearchInterfaceOpen ? "opacity-50 cursor-not-allowed" : ""}`}
            style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))' }}
          >
            <HeartIcon className="w-6 h-6" filled={saved} />
          </button>
        </div>

        {/* Product Image Carousel */}
        <div className="w-full flex justify-center mb-4">
          <ImageCarousel
            images={[
              ...extractImageUrls(item.images_link),
              ...extractImageUrls(item.product_small_image_urls)
            ]}
            mainImage={item.product_main_image_url}
            videoUrl={item.product_video_url}
            className="mobile-product-image"
          />
        </div>

        {/* Product Info - Below Image */}
        <div className="mobile-text-container">
        <div className="mobile-text-spacing">
          {isEditingTitle ? (
            <div className="relative">
              <input
                type="text"
                className="w-full bg-transparent border-2 border-white border-dashed text-white mobile-title-text font-bold outline-none px-2 py-1 rounded"
                style={{ textShadow: '2px 2px 4px black' }}
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                onKeyDown={handleTitleKeyDown}
                onBlur={handleTitleSave}
                autoFocus
                placeholder="Product title..."
              />
              <div className="flex space-x-2 mt-2">
                <button
                  onClick={handleTitleSave}
                  className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-xs rounded transition-colors"
                >
                  ✓ Save
                </button>
                <button
                  onClick={handleTitleCancel}
                  className="px-3 py-1 bg-gray-500 hover:bg-gray-600 text-white text-xs rounded transition-colors"
                >
                  ✗ Cancel
                </button>
              </div>
            </div>
          ) : (
            <h2 
              className="text-white mobile-title-text font-bold cursor-pointer hover:bg-white/10 px-2 py-1 rounded transition-colors" 
              style={{ textShadow: '2px 2px 4px black' }}
              onClick={handleTitleClick}
              title="Click to edit title"
            >
              {title}
            </h2>
          )}
          <div className="flex items-center space-x-2">
            <p className="mobile-price-text font-semibold text-green-400">
              {formattedPrice}
            </p>
            {formattedOriginalPrice && (
              <span className="text-xs sm:text-sm text-gray-300 line-through">
                {formattedOriginalPrice}
              </span>
            )}
            <div className="flex items-center" style={{ color: '#a3e4d7' }}>
              {(() => {
                // Debug rating data
                debugRatingData(item);
                
                // Get final rating using our utility
                const finalRating = getFinalRating(item);
                const hasValidRating = finalRating !== null && finalRating > 0;
                
                if (hasValidRating) {
                  return (
                    <>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => {
                          const isFullStar = star <= finalRating;
                          const isHalfStar = star > finalRating && star - finalRating < 1;
                          
                          return (
                            <div key={star} className="relative">
                              <StarIcon 
                                className="w-4 h-4" 
                                filled={isFullStar} 
                                halfFilled={isHalfStar}
                              />
                            </div>
                          );
                        })}
                      </div>
                      <span className="text-xs text-gray-300 ml-2 font-medium">
                        {formatRatingDisplay(finalRating)}
                      </span>
                      <span className="text-xs text-gray-400 ml-1">
                        ({item.lastest_volume ? formatSalesVolume(Number(item.lastest_volume)) : '0'} reviews)
                      </span>
                    </>
                  );
                } else {
                  return (
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div key={star} className="relative">
                            <StarIcon 
                              className="w-4 h-4 opacity-30" 
                              filled={false} 
                              halfFilled={false}
                            />
                          </div>
                        ))}
                      </div>
                      <span className="text-xs text-gray-400 ml-2">
                        No Rating Available
                      </span>
                    </div>
                  );
                }
              })()}
            </div>
          </div>
          <p className="mobile-description-text text-gray-300" style={{ textShadow: '1px 1px 2px black' }}>
            {item.product_description || "Premium quality product with excellent features."}
          </p>
          
          {/* Enhanced Product Information - Demo Pattern */}
          <div className="mobile-product-details" style={{ textShadow: '1px 1px 2px black' }}>
            {/* Product ID */}
            <div className="flex items-center space-x-1">
              <span className="text-cyan-400">🆔</span>
              <span>ID: {item.product_id}</span>
            </div>
            
            {/* Original Currency */}
            <div className="flex items-center space-x-1">
              <span className="text-orange-400">💱</span>
              <span>Original: {item.original_currency || item.sale_price_currency || 'CNY'}</span>
            </div>
            
            {/* Enhanced Rating Display */}
            {(() => {
              const finalRating = getFinalRating(item);
              const productScore = item.product_score || item.evaluate_rate || item.rating_percent || item.positive_feedback_rate;
              return (finalRating && finalRating > 0) || productScore ? (
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400">⭐</span>
                  <span>
                    {finalRating ? formatRatingDisplay(finalRating) : (productScore || 'N/A')}
                  </span>
                </div>
              ) : null;
            })()}
            
            {/* Sales Volume - Enhanced */}
            <div className="flex items-center space-x-1">
              <span className="text-green-400">📦</span>
              <span>{item.lastest_volume ? formatSalesVolume(Number(item.lastest_volume)) : "0"} bought</span>
            </div>
            
            {/* Commission Rate - Enhanced */}
            {item.commission_rate && (
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400">💰</span>
                <span>{item.commission_rate}% commission</span>
              </div>
            )}
            
            {/* Discount - Enhanced */}
            {item.discount && item.discount > 0 && (
              <div className="flex items-center space-x-1">
                <span className="text-red-400">🏷️</span>
                <span>{item.discount}% off</span>
              </div>
            )}
            
            {/* Category - Enhanced */}
            {(item.product_category || item.first_level_category_name || item.second_level_category_name || item.first_level_category_id) && (
              <div className="flex items-center space-x-1">
                <span className="text-blue-400">
                  📦
                </span>
                <span>
                  {item.product_category || 
                   item.first_level_category_name || 
                   item.second_level_category_name || 
                   'Category'}
                </span>
              </div>
            )}
            
            {/* Product Score Stars */}
            {item.product_score_stars && item.product_score_stars > 0 && (
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400">🌟</span>
                <span>{item.product_score_stars.toFixed(1)}/5.0</span>
              </div>
            )}
            
            {/* Video Available */}
            {(item.product_video_url || item.video_link) && (
              <div className="flex items-center space-x-1">
                <span className="text-purple-400">🎥</span>
                <span>Video Available</span>
              </div>
            )}
            
            {/* Multiple Images Indicator */}
            {(() => {
              const totalImages = extractImageUrls(item.images_link).length + extractImageUrls(item.product_small_image_urls).length;
              
              return totalImages > 0 ? (
                <div className="flex items-center space-x-1">
                  <span className="text-pink-400">🖼️</span>
                  <span>{totalImages} images</span>
                </div>
              ) : null;
            })()}
          </div>
          
          {/* Enhanced Shop Information */}
          {(item.shop_title || item.shop_url) && (
            <div className="mt-2 text-xs text-gray-300" style={{ textShadow: '1px 1px 2px black' }}>
              <span className="text-purple-400">🏪</span>
              <span className="ml-1">
                {item.shop_title ? `Shop: ${item.shop_title}` : 'Shop Information Available'}
              </span>
              {item.shop_url && (
                <button 
                  onClick={() => window.open(item.shop_url, '_blank')}
                  disabled={isSearchInterfaceOpen}
                  className={`ml-2 text-blue-400 hover:text-blue-300 underline ${isSearchInterfaceOpen ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  Visit Shop
                </button>
              )}
            </div>
          )}
          
          
          <div className="mobile-buy-button">
            <button 
              onClick={() => window.open(item.promotion_link || '#', '_blank')}
              disabled={isSearchInterfaceOpen}
              className={isSearchInterfaceOpen ? "opacity-50 cursor-not-allowed" : ""}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}