import { useState, useEffect } from "react";
import { convert, formatPrice } from "../../utils/currency";
import type { Currency } from "../../types";
import { ImageCarousel } from "./ImageCarousel";
import { API_ENDPOINTS } from "../../constants";

export function ProductCard({
  item,
  currency,
  onSave,
}: {
  item: any;
  currency: Currency;
  onSave?: (saved: boolean) => void;
}) {
  const [title, setTitle] = useState<string>(item.product_title ?? "");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState<boolean>(!!item.saved_at);
  const [savedAt, setSavedAt] = useState<string | null>(
    item.saved_at ? String(item.saved_at) : null
  );

  // همگام‌سازی وقتی props عوض می‌شود
  useEffect(() => {
    setSaved(!!item.saved_at);
    setSavedAt(item.saved_at ? String(item.saved_at) : null);
    setTitle(item.product_title ?? "");
  }, [item.saved_at, item.product_title]);

  const productId = String(item.product_id ?? "");

  const priceUSD = Number(item.sale_price || 0);
  const priceConverted = convert(priceUSD, currency);
  const formattedPrice = formatPrice(priceConverted, currency.code);

  const originalPriceUSD = Number(item.original_price || 0);
  const originalPriceConverted =
    originalPriceUSD > 0 ? convert(originalPriceUSD, currency) : 0;
  const formattedOriginalPrice =
    originalPriceUSD > 0
      ? formatPrice(originalPriceConverted, currency.code)
      : null;

  const toggleSave = async () => {
    if (!productId) {
      console.error("Missing product_id");
      return;
    }
    setSaving(true);
    try {
      if (saved) {
        // حذف از لیست ذخیره‌ها
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
          console.log("✅ Product unsaved successfully");
        } else {
          console.error("❌ Unsave failed:", data);
        }
      } else {
        // ذخیره‌سازی
        const payload = {
          product_id: productId,
          product_title: title ?? "",
          product_main_image_url: item.product_main_image_url || "",
          product_video_url: item.product_video_url || null,
          product_description: item.product_description || null,
          images_extra: item.images_extra || [],
          sale_price: item.sale_price ? Number(item.sale_price) : 0,
          sale_price_currency: item.sale_price_currency || "USD",
          original_price: item.original_price ? Number(item.original_price) : null,
          original_price_currency: item.original_price_currency || item.sale_price_currency || "USD",
          promotion_link: item.promotion_link || "",
          rating_weighted: item.rating_weighted ? Number(item.rating_weighted) : null,
          lastest_volume: item.lastest_volume ? Number(item.lastest_volume) : null,
        };

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
          console.log("✅ Product saved successfully");
        } else {
          console.error("❌ Save failed:", data);
        }
      }
    } catch (err) {
      console.error("Request failed:", err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-white/20 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/30 shadow-2xl hover:shadow-2xl hover:shadow-purple-500/30 hover:border-purple-400/50 transition-all duration-700 transform hover:scale-[1.05] hover:-translate-y-2 group h-full flex flex-col relative overflow-hidden">
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-orange-500/10 transition-all duration-700 z-10 pointer-events-none"></div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-20 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
      </div>

      <div className="relative overflow-hidden">
        {item.product_video_url ? (
          <div className="relative">
            <video
              className="w-full aspect-square md:h-64 lg:h-48 xl:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
              src={item.product_video_url}
              controls
              poster={item.product_main_image_url}
              preload="metadata"
              playsInline
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </div>
        ) : (
          <ImageCarousel
            images={item.images_extra || []}
            mainImage={item.product_main_image_url}
            alt={title}
          />
        )}

        {!item.product_video_url && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        )}

        {/* Save/Unsave */}
        <div className="absolute top-3 right-3">
          <button
            disabled={saving}
            onClick={toggleSave}
            className={`p-3 md:p-3 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-125 hover:shadow-xl active:scale-95 ${
              saved
                ? "bg-red-500/90 text-white shadow-lg hover:shadow-red-500/30 hover:bg-red-600/90"
                : "bg-white/20 text-white hover:bg-pink-500/90 hover:shadow-pink-500/30"
            }`}
            aria-live="polite"
            title={saved ? "Remove from saved" : "Save product"}
          >
            {saved ? "❤️" : saving ? "⏳" : "🤍"}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 flex-1 flex flex-col">
        <div className="mb-4 flex-1">
          <textarea
            className="w-full bg-transparent text-slate-900 text-base md:text-base resize-none focus:outline-none placeholder-slate-500 leading-relaxed font-semibold"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            rows={2}
            placeholder="Product title..."
          />

        {item.product_description && (
          <div className="mt-2 text-sm md:text-sm text-slate-600 leading-relaxed">
            {item.product_description}
          </div>
        )}
        </div>

        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="text-slate-900">
            <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              {formattedPrice}
              {formattedOriginalPrice && (
                <span className="text-sm md:text-sm text-gray-400 line-through ml-2">
                  {formattedOriginalPrice}
                </span>
              )}
            </div>
            <div className="text-xs text-slate-600 mt-1">
              Volume: {item.lastest_volume ?? "-"} • Rating:{" "}
              {item.rating_weighted ?? "-"}
            </div>
          </div>
        </div>

        {!saved && item.promotion_link && (
          <div className="border-t border-white/10 pt-4 mt-auto">
            <button
              onClick={toggleSave}
              disabled={saving}
              className="w-full px-4 py-3 md:py-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-xl hover:from-orange-600 hover:via-pink-600 hover:to-purple-600 disabled:opacity-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 active:scale-95 font-medium shadow-lg text-base md:text-sm"
            >
              {saving ? "⏳ Saving..." : "💾 Save Product"}
            </button>
          </div>
        )}

        {saved && (
          <div className="border-t border-white/10 pt-4 text-center mt-auto">
            <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm text-green-400 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium">
              ✅ Product Saved
            </div>
            <div className="text-xs text-slate-500 mt-2">
              Saved on:{" "}
              {savedAt
                ? new Date(savedAt).toLocaleDateString("en-US")
                : new Date().toLocaleDateString("en-US")}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
