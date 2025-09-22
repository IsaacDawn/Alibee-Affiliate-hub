import { useState, useEffect } from "react";
import { convert, formatPrice } from "../../utils/currency";
import { exchangeRateService } from "../../services/exchangeRate";
import type { Currency } from "../../types";
import { ImageCarousel } from "./ImageCarousel";
import { API_ENDPOINTS } from "../../constants";
import { HeartIcon, StarIcon } from "../../icons";
import { getCategoryName, getCategoryEmoji } from "../../utils/categoryMapping";
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

export function ProductCard({
  item,
  currency,
  onSave,
}: {
  item: any;
  currency: Currency;
  onSave?: (saved: boolean) => void;
}) {
  const [title, setTitle] = useState<string>(item.custom_title ?? item.title ?? item.product_title ?? "");
  const [_originalTitle, setOriginalTitle] = useState<string>(item.custom_title ?? item.title ?? item.product_title ?? "");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState<boolean>(!!item.saved_at);
  const [_savedAt, setSavedAt] = useState<string | null>(
    item.saved_at ? String(item.saved_at) : null
  );
  const [convertedPrice, setConvertedPrice] = useState<number | null>(null);
  const [convertedOriginalPrice, setConvertedOriginalPrice] = useState<number | null>(null);
  const [_updatingDescription, setUpdatingDescription] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [editTitle, setEditTitle] = useState<string>("");

  // Synchronize when props change
  useEffect(() => {
    setSaved(!!item.saved_at);
    setSavedAt(item.saved_at ? String(item.saved_at) : null);
    
    // Set initial title - prioritize custom_title if available
    const initialTitle = item.custom_title ?? item.title ?? item.product_title ?? "";
    setTitle(initialTitle);
    setOriginalTitle(initialTitle);
    
  }, [item.saved_at, item.product_title, item.title, item.custom_title, item.rating_weighted, item.product_id]);

  // Check product like status and load custom title when card loads
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
            
            // Load custom title if available
            if (data?.custom_title && data.custom_title.trim() !== "") {
              console.log(`Loading custom title for product ${currentProductId}:`, data.custom_title);
              setTitle(data.custom_title);
              setOriginalTitle(data.custom_title);
              // Update the item object to reflect the custom title
              item.custom_title = data.custom_title;
              item.title = data.custom_title;
            } else {
              console.log(`No custom title found for product ${currentProductId}`);
            }
          } catch (error) {
            setSavedAt(new Date().toISOString());
          }
        } else {
          setSaved(false);
          setSavedAt(null);
        }
      } catch (error) {
        // In case of error, use current state
        setSaved(!!item.saved_at);
      }
    };

    checkProductLikeStatus();
  }, [item.product_id]); // Only when product_id changes

  // Currency conversion effect
  useEffect(() => {
    let isMounted = true; // Prevent state updates if component unmounts
    
    const convertPrices = async () => {
      try {
        const itemCurrency = item.sale_price_currency || "USD";
        const targetCurrency = currency.code;
        
        
        if (itemCurrency === targetCurrency) {
          if (isMounted) {
            setConvertedPrice(parseFloat(item.sale_price || "0"));
            setConvertedOriginalPrice(parseFloat(item.original_price || "0"));
          }
          return;
        }

        const salePrice = parseFloat(item.sale_price || "0");
        const originalPrice = parseFloat(item.original_price || "0");

        // Convert both prices in parallel to avoid duplicate API calls
        const [convertedSalePrice, convertedOriginalPrice] = await Promise.all([
          salePrice > 0 ? exchangeRateService.convertCurrencyCached(salePrice, itemCurrency, targetCurrency) : 0,
          originalPrice > 0 ? exchangeRateService.convertCurrencyCached(originalPrice, itemCurrency, targetCurrency) : 0
        ]);

        if (isMounted) {
          if (salePrice > 0) {
            setConvertedPrice(convertedSalePrice);
          }
          
          if (originalPrice > 0) {
            setConvertedOriginalPrice(convertedOriginalPrice);
          }
        }
      } catch (error) {
        // Fallback to original prices
        if (isMounted) {
          setConvertedPrice(parseFloat(item.sale_price || "0"));
          setConvertedOriginalPrice(parseFloat(item.original_price || "0"));
        }
      }
    };

    convertPrices();
    
    return () => {
      isMounted = false; // Cleanup function
    };
  }, [item.sale_price, item.original_price, item.sale_price_currency, currency.code]);

  const productId = String(item.product_id ?? "");

  // Use converted prices if available, otherwise fallback to original logic
  const displayOriginalPrice = convertedOriginalPrice !== null ? convertedOriginalPrice : Number(item.original_price || 0);
  
  // Fallback to old conversion logic if new conversion failed
  const priceUSD = Number(item.sale_price || 0);
  const priceConverted = convert(priceUSD, currency);
  const formattedPrice = convertedPrice !== null 
    ? exchangeRateService.formatPrice(convertedPrice, currency.code)
    : formatPrice(priceConverted, currency.code);

  const originalPriceUSD = Number(item.original_price || 0);
  const originalPriceConverted =
    originalPriceUSD > 0 ? convert(originalPriceUSD, currency) : 0;
  const formattedOriginalPrice = displayOriginalPrice > 0
    ? (convertedOriginalPrice !== null 
        ? exchangeRateService.formatPrice(convertedOriginalPrice, currency.code)
        : formatPrice(originalPriceConverted, currency.code))
    : null;

  // const _updateDescription = async () => {
  //   if (!productId) {
  //     return;
  //   }
  //   
  //   setUpdatingDescription(true);
  //   try {
  //     // Update only the title using the update-description endpoint
  //     const res = await fetch(API_ENDPOINTS.UPDATE_DESCRIPTION, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         product_id: productId,
  //         custom_description: title,
  //       }),
  //     });
  //     
  //     const data = await res.json();
  //     if (data?.status === "success") {
  //       setOriginalTitle(title); // Update original title to current title
  //       // Update the item with new title
  //       item.title = title;
  //       // Keep the product saved state unchanged
  //       // setSaved remains true, setSavedAt remains unchanged
  //     }
  //   } catch (error) {
  //     // Handle error silently
  //   } finally {
  //     setUpdatingDescription(false);
  //   }
  // };

  // Handle title editing
  const handleTitleClick = () => {
    if (!isEditingTitle) {
      setEditTitle(title);
      setIsEditingTitle(true);
    }
  };

  const handleTitleSave = async () => {
    if (editTitle.trim() === "") {
      setEditTitle(title);
      setIsEditingTitle(false);
      return;
    }

    if (editTitle !== title) {
      setTitle(editTitle);
      
      // If product is saved, update the description
      if (saved) {
        setUpdatingDescription(true);
        try {
          const res = await fetch(API_ENDPOINTS.UPDATE_DESCRIPTION, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              product_id: productId,
              custom_description: editTitle,
            }),
          });
          
          const data = await res.json();
          if (data?.status === "success") {
            setOriginalTitle(editTitle);
            item.title = editTitle;
          }
        } catch (error) {
          // Handle error silently
        } finally {
          setUpdatingDescription(false);
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
    if (e.key === "Enter") {
      e.preventDefault();
      handleTitleSave();
    } else if (e.key === "Escape") {
      e.preventDefault();
      handleTitleCancel();
    }
  };

  // Helper function to check if product is already saved
  const checkProductExists = async (productId: string): Promise<boolean> => {
    try {
      const res = await fetch(`${API_ENDPOINTS.CHECK_PRODUCT_EXISTS}/${encodeURIComponent(productId)}`, {
        method: "GET",
      });
      const data = await res.json();
      return data?.exists || false;
    } catch (error) {
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
          
          // Debug: Log the payload to ensure custom_title is included
          console.log("Saving product with payload:", payload);

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


  return (
    <div className="h-screen relative flex items-start justify-center bg-gradient-to-br from-purple-600 to-pink-600 pt-32">
      {/* Product Image Carousel */}
      <ImageCarousel
        images={[
          ...extractImageUrls(item.images_link),
          ...extractImageUrls(item.product_small_image_urls)
        ]}
        mainImage={item.product_main_image_url}
        videoUrl={item.product_video_url}
        className="w-[28rem] h-[28rem]"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>

      {/* Right Side Actions */}
      <div className="absolute right-8 top-1/2 transform translate-y-8 flex flex-col space-y-4 z-10">
        {/* Like Button */}
        <button
          disabled={saving}
          onClick={toggleSave}
          className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
            saved
              ? "text-red-500"
              : "text-white"
          }`}
          style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))' }}
        >
          <HeartIcon className="w-9 h-9" filled={saved} />
        </button>

      </div>

      {/* Product Info Overlay */}
      <div className="absolute bottom-20 left-8 right-32 z-20">
        <div className="space-y-2">
          {isEditingTitle ? (
            <div className="relative">
              <input
                type="text"
                className="w-full bg-transparent border-2 border-white border-dashed text-white text-xl font-bold outline-none px-2 py-1 rounded"
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
              className="text-white text-xl font-bold cursor-pointer hover:bg-white/10 px-2 py-1 rounded transition-colors" 
              style={{ textShadow: '2px 2px 4px black' }}
              onClick={handleTitleClick}
              title="Click to edit title"
            >
              {title}
            </h2>
          )}
          <div className="flex items-center space-x-2">
            <p className="text-lg font-semibold text-green-400">
              {formattedPrice}
            </p>
            {formattedOriginalPrice && (
              <span className="text-sm text-gray-300 line-through">
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
          <p className="text-sm text-gray-300" style={{ textShadow: '1px 1px 2px black' }}>
            {item.product_description || "Premium quality product with excellent features."}
          </p>
          
          {/* Enhanced Product Information - Demo Pattern */}
          <div className="grid grid-cols-2 gap-2 mt-3 text-xs text-gray-300" style={{ textShadow: '1px 1px 2px black' }}>
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
                  {getCategoryEmoji(
                    item.product_category || 
                    item.first_level_category_name || 
                    item.second_level_category_name || 
                    getCategoryName(item.first_level_category_id)
                  )}
                </span>
                <span>
                  {item.product_category || 
                   item.first_level_category_name || 
                   item.second_level_category_name || 
                   getCategoryName(item.first_level_category_id)}
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
                  className="ml-2 text-blue-400 hover:text-blue-300 underline"
                >
                  Visit Shop
                </button>
              )}
            </div>
          )}
          
          
          <div className="flex items-center mt-4">
            <button 
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open(item.promotion_link || '#', '_blank')}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
