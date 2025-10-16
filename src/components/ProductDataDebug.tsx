import React, { useState } from 'react';
import type { Product } from '../types';

interface ProductDataDebugProps {
  product: Product;
  isVisible?: boolean;
}

export const ProductDataDebug: React.FC<ProductDataDebugProps> = ({ 
  product, 
  isVisible = false 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-black/90 text-white p-3 rounded-lg max-w-sm max-h-64 overflow-hidden border border-yellow-400/30">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-xs font-bold text-yellow-300">Product Data Debug</h4>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs bg-yellow-500 px-2 py-1 rounded hover:bg-yellow-600"
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </div>

      <div className="text-xs space-y-1">
        <div>ID: <span className="text-cyan-400">{product.id}</span></div>
        <div>Title: <span className="text-green-400 truncate block">{product.title}</span></div>
        <div>Price: <span className="text-blue-400">{product.price}</span></div>
        <div>Price Target: <span className="text-purple-400">{product.priceTarget || 'N/A'}</span></div>
        <div>Currency: <span className="text-orange-400">{product.currency}</span></div>
        <div>Currency Target: <span className="text-pink-400">{product.currencyTarget || 'N/A'}</span></div>
        <div>Original Price: <span className="text-red-400">{product.originalPrice || 'N/A'}</span></div>
        <div>Original Price Target: <span className="text-indigo-400">{product.originalPriceTarget || 'N/A'}</span></div>
        <div>Discount: <span className="text-yellow-400">{product.discount || product.discountPercentage || 'N/A'}</span></div>
        <div>Rating: <span className="text-emerald-400">{product.rating || product.productScoreStars || product.scoreStars || 'N/A'}</span></div>
        <div>Product Score Stars: <span className="text-emerald-300">{product.productScoreStars || 'N/A'}</span></div>
        <div>Volume: <span className="text-teal-400">{product.volume || product.salesVolume || 'N/A'}</span></div>
        <div>Latest Volume: <span className="text-teal-300">{product.volume || 'N/A'}</span></div>
        <div>Commission: <span className="text-rose-400">{product.commissionRate || 'N/A'}</span></div>
        <div>Category: <span className="text-lime-400 truncate block">{product.category || product.firstLevelCategoryName || 'N/A'}</span></div>
      </div>

      {isExpanded && (
        <div className="mt-2 max-h-32 overflow-y-auto">
          <div className="text-xs text-gray-300">
            <pre className="whitespace-pre-wrap">
              {JSON.stringify(product, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};
