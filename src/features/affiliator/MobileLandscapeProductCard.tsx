import { useState, useEffect } from "react";
import { convert, formatPrice } from "../../utils/currency";
import { exchangeRateService } from "../../services/exchangeRate";
import type { Currency } from "../../types";
import { ImageCarousel } from "./ImageCarousel";
import { API_ENDPOINTS } from "../../constants";
import { HeartIcon, StarIcon } from "../../icons";
import { getFinalRating, formatRatingDisplay } from "../../utils/ratingDebug";

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

export function MobileLandscapeProductCard({
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
  const priceConverted = convert(priceUSD, 'USD', currency.code);
  const formattedPrice = convertedPrice !== null 
    ? exchangeRateService.formatPrice(convertedPrice, currency.code)
    : formatPrice(priceConverted, currency.code);

  const originalPriceUSD = Number(item.original_price || 0);
  const originalPriceConverted =
    originalPriceUSD > 0 ? convert(originalPriceUSD, 'USD', currency.code) : 0;
  const formattedOriginalPrice = displayOriginalPrice > 0
    ? (convertedOriginalPrice !== null 
        ? exchangeRateService.formatPrice(convertedOriginalPrice, currency.code)
        : formatPrice(originalPriceConverted, currency.code))
    : null;

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

  return (
    <div className="relative bg-gradient-to-l from-purple-600 to-pink-600 overflow-hidden mt-8">
      {/* Mobile Landscape Layout - Side by Side (similar to desktop) */}
      <div className="relative flex flex-row">

        {/* Left Side - Product Images (30% width, top-left aligned, square aspect ratio) */}
        <div className="w-1/3 flex items-center justify-center p-1">
          <div className="w-full flex items-center justify-center">
            <div className="w-full aspect-square flex items-center justify-center">
              <ImageCarousel
                images={[
                  ...extractImageUrls(item.images_link),
                  ...extractImageUrls(item.product_small_image_urls)
                ]}
                mainImage={item.product_main_image_url}
                videoUrl={item.product_video_url}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Product Information (70% width) */}
        <div className="w-2/3 flex flex-col text-white pr-1 pb-1 pl-1 pt-4">
          {/* Title and Properties Section */}
          <div className="space-y-0.5">
            {/* Title Section */}
            <div className="space-y-0.5">
              {isEditingTitle ? (
                <div className="relative">
                  <input
                    type="text"
                    className="w-full bg-transparent border-2 border-white border-dashed text-white text-xs font-bold outline-none px-1 py-1 rounded leading-tight"
                    style={{ textShadow: '2px 2px 4px black' }}
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    onKeyDown={handleTitleKeyDown}
                    onBlur={handleTitleSave}
                    autoFocus
                    placeholder="Product title..."
                  />
                  <div className="flex space-x-1 mt-1">
                    <button
                      onClick={handleTitleSave}
                      className="px-1 py-1 bg-green-500 hover:bg-green-600 text-white text-xs rounded transition-colors"
                    >
                      ✓ Save
                    </button>
                    <button
                      onClick={handleTitleCancel}
                      className="px-1 py-1 bg-gray-500 hover:bg-gray-600 text-white text-xs rounded transition-colors"
                    >
                      ✗ Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <h1 
                  className="text-white text-xs font-bold cursor-pointer hover:bg-white/10 px-1 py-1 rounded transition-colors leading-tight" 
                  style={{ textShadow: '2px 2px 4px black' }}
                  onClick={handleTitleClick}
                  title="Click to edit title"
                >
                  {title}
                </h1>
              )}
            </div>

            {/* Price Section */}
            <div className="flex items-center space-x-1">
              <p className="text-sm font-semibold text-green-400">
                {formattedPrice}
              </p>
              {formattedOriginalPrice && (
                <span className="text-xs text-gray-300 line-through">
                  {formattedOriginalPrice}
                </span>
              )}
            </div>

            {/* Rating Section */}
            <div className="flex items-center" style={{ color: '#a3e4d7' }}>
              {(() => {
                const finalRating = getFinalRating(item);
                const hasValidRating = finalRating !== null && finalRating > 0;
                
                if (hasValidRating) {
                  return (
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => {
                          const isFullStar = star <= finalRating;
                          const isHalfStar = star > finalRating && star - finalRating < 1;
                          
                          return (
                            <div key={star} className="relative">
                              <StarIcon 
                                className="w-3 h-3 sm:w-4 sm:h-4" 
                                filled={isFullStar} 
                                halfFilled={isHalfStar}
                              />
                            </div>
                          );
                        })}
                      </div>
                      <span className="text-xs text-gray-300 font-medium">
                        {formatRatingDisplay(finalRating)}
                      </span>
                      <span className="text-xs text-gray-400">
                        ({item.lastest_volume ? formatSalesVolume(Number(item.lastest_volume)) : '0'} reviews)
                      </span>
                    </div>
                  );
                } else {
                  return (
                    <div className="flex items-center space-x-1">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div key={star} className="relative">
                            <StarIcon 
                              className="w-3 h-3 sm:w-4 sm:h-4 opacity-30" 
                              filled={false} 
                              halfFilled={false}
                            />
                          </div>
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">
                        No Rating Available
                      </span>
                    </div>
                  );
                }
              })()}
            </div>

            {/* Description */}
            <p className="text-gray-300 text-xs leading-tight">
              {item.product_description || "Premium quality product with excellent features."}
            </p>

            {/* Product Details Grid */}
            <div className="grid grid-cols-2 gap-1 text-xs text-gray-300">
              <div className="flex items-center space-x-1">
                <span className="text-cyan-400">🆔</span>
                <span>ID: {item.product_id}</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <span className="text-orange-400">💱</span>
                <span>Original: {item.original_currency || item.sale_price_currency || 'CNY'}</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <span className="text-green-400">📦</span>
                <span>{item.lastest_volume ? formatSalesVolume(Number(item.lastest_volume)) : "0"} bought</span>
              </div>
              
              {item.commission_rate && (
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400">💰</span>
                  <span>{item.commission_rate}% commission</span>
                </div>
              )}

              {item.discount && item.discount > 0 && (
                <div className="flex items-center space-x-1">
                  <span className="text-red-400">🏷️</span>
                  <span>{item.discount}% off</span>
                </div>
              )}

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
            </div>

          </div>
          
          {/* Bottom Section - Heart and Buy Buttons */}
          <div className="flex items-center justify-between py-1">
            {/* Heart Button */}
            <button
              disabled={saving || isSearchInterfaceOpen}
              onClick={toggleSave}
              className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                saved
                  ? "text-red-500 bg-white/20"
                  : "text-white bg-white/10 hover:bg-white/20"
              } ${isSearchInterfaceOpen ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <HeartIcon className="w-3 h-3" filled={saved} />
            </button>
            
            {/* Buy Button */}
            <button 
              className={`bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold transition-all duration-300 transform hover:scale-105 shadow-lg ${isSearchInterfaceOpen ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={() => window.open(item.promotion_link || '#', '_blank')}
              disabled={isSearchInterfaceOpen}
              title="Buy This Product"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
