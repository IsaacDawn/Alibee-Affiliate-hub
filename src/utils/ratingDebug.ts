// Utility for debugging rating data
export const debugRatingData = (_item: any) => {
  // Debug function - can be enabled for development
  // console.log('Rating Debug for Product:', { ... });
};

export const convertEvaluateRateToRating = (evaluateRate: string | number): number | null => {
  try {
    const rateStr = String(evaluateRate).replace('%', '').trim();
    const rateFloat = parseFloat(rateStr);
    if (!isNaN(rateFloat)) {
      return Math.round((rateFloat / 100) * 5 * 10) / 10; // Round to 1 decimal
    }
  } catch (error) {
    // Handle error silently
  }
  return null;
};

export const getFinalRating = (item: any): number | null => {
  // Try different rating fields in order of preference
  const ratingFields = [
    'rating_weighted',
    'rating', 
    'score',
    'average_rating',
    'product_score_stars'
  ];
  
  for (const field of ratingFields) {
    const value = item[field];
    if (value && !isNaN(Number(value)) && Number(value) > 0) {
      return Number(value);
    }
  }
  
  // Try evaluate_rate conversion
  if (item.evaluate_rate) {
    const converted = convertEvaluateRateToRating(item.evaluate_rate);
    if (converted) {
      return converted;
    }
  }
  
  // Try other percentage-based rating fields
  const percentageFields = [
    'rating_percent',
    'positive_feedback_rate',
    'avg_evaluation_rate',
    'avg_rating_percent',
    'product_score'
  ];
  
  for (const field of percentageFields) {
    if (item[field]) {
      const converted = convertEvaluateRateToRating(item[field]);
      if (converted) {
        return converted;
      }
    }
  }
  
  // No valid rating found - return null instead of default
  return null;
};


export const formatRatingDisplay = (rating: number | null): string => {
  if (rating === null || isNaN(rating)) {
    return 'No Rating';
  }
  return `${rating.toFixed(1)}/5.0`;
};

