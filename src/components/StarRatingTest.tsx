import React from 'react';

interface StarRatingTestProps {
  isVisible?: boolean;
}

export const StarRatingTest: React.FC<StarRatingTestProps> = ({ isVisible = false }) => {
  const testRatings = [0, 1, 2, 2.5, 3, 3.7, 4, 4.5, 5];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="text-yellow-400">★</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className="text-yellow-400">★</span>);
      } else {
        stars.push(<span key={i} className="text-gray-400">☆</span>);
      }
    }
    return stars;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-4 z-50 bg-black/90 text-white p-4 rounded-lg max-w-sm border border-yellow-400/30">
      <h4 className="text-sm font-bold text-yellow-300 mb-3">Star Rating Test</h4>
      
      <div className="space-y-2">
        {testRatings.map((rating) => (
          <div key={rating} className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {renderStars(rating)}
            </div>
            <span className="text-xs text-gray-300">({rating})</span>
          </div>
        ))}
      </div>
      
      <div className="mt-3 text-xs text-gray-400">
        <div>★ = Filled star</div>
        <div>☆ = Empty star</div>
      </div>
    </div>
  );
};
