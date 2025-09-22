import React from 'react';
import { StarIcon } from '../icons/StarIcon';

interface StarRatingTestProps {
  rating: number;
  productTitle: string;
}

export const StarRatingTest: React.FC<StarRatingTestProps> = ({ rating, productTitle }) => {
  const renderStars = (rating: number) => {
    return [1, 2, 3, 4, 5].map((star) => {
      const isFullStar = star <= rating;
      const isHalfStar = star > rating && star - rating < 1;
      
      return (
        <div key={star} className="relative">
          <StarIcon 
            className="w-6 h-6" 
            filled={isFullStar} 
            halfFilled={isHalfStar}
          />
        </div>
      );
    });
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4">
      <h3 className="text-white font-bold mb-2">{productTitle}</h3>
      <div className="flex items-center space-x-2">
        <div className="flex">
          {renderStars(rating)}
        </div>
        <span className="text-white text-sm font-medium">
          {rating.toFixed(1)}/5.0
        </span>
        <span className="text-gray-400 text-sm">
          ({Math.floor(Math.random() * 1000)} reviews)
        </span>
      </div>
      <div className="text-gray-400 text-xs mt-1">
        Debug: rating={rating}, type={typeof rating}, isNaN={isNaN(rating)}
      </div>
    </div>
  );
};

export const StarRatingTestSuite: React.FC = () => {
  const testRatings = [
    { rating: 0, title: "No Rating" },
    { rating: 1.0, title: "1 Star" },
    { rating: 2.5, title: "2.5 Stars" },
    { rating: 3.7, title: "3.7 Stars" },
    { rating: 4.0, title: "4 Stars" },
    { rating: 4.5, title: "4.5 Stars" },
    { rating: 5.0, title: "5 Stars" },
  ];

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold text-white mb-6">Star Rating Test Suite</h1>
      {testRatings.map((test, index) => (
        <StarRatingTest 
          key={index}
          rating={test.rating} 
          productTitle={test.title}
        />
      ))}
    </div>
  );
};

