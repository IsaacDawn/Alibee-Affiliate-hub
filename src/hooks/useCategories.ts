// Custom hook for managing categories data
import { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import type { Category } from '../types';

interface UseCategoriesResult {
  categories: Category[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useCategories(): UseCategoriesResult {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await apiService.fetchCategories();
      
      if (response.categories && Array.isArray(response.categories)) {
        setCategories(response.categories);
      } else {
        throw new Error(response.message || 'Failed to fetch categories');
      }
    } catch (err) {
      // Failed to fetch categories
      setError(err instanceof Error ? err.message : 'Unknown error');
      
      // Fallback to static categories if API fails
      const fallbackCategories: Category[] = [
        { id: "", name: "All Categories", name_fa: "All Categories" },
        { id: "3", name: "Electronics", name_fa: "Electronics" },
        { id: "1501", name: "Phones & Telecommunications", name_fa: "Phones & Telecommunications" },
        { id: "1420", name: "Computer & Office", name_fa: "Computer & Office" },
        { id: "1511", name: "Consumer Electronics", name_fa: "Consumer Electronics" },
        { id: "7", name: "Home & Garden", name_fa: "Home & Garden" },
        { id: "1503", name: "Jewelry & Accessories", name_fa: "Jewelry & Accessories" },
        { id: "36", name: "Sports & Entertainment", name_fa: "Sports & Entertainment" },
        { id: "1524", name: "Automobiles & Motorcycles", name_fa: "Automobiles & Motorcycles" },
        { id: "21", name: "Toys & Hobbies", name_fa: "Toys & Hobbies" },
        { id: "1509", name: "Health & Beauty", name_fa: "Health & Beauty" },
        { id: "15", name: "Women's Clothing", name_fa: "Women's Clothing" },
        { id: "1", name: "Men's Clothing", name_fa: "Men's Clothing" },
        { id: "1504", name: "Shoes", name_fa: "Shoes" },
        { id: "1502", name: "Bags & Luggage", name_fa: "Bags & Luggage" },
        { id: "1421", name: "Tools & Home Improvement", name_fa: "Tools & Home Improvement" },
        { id: "66", name: "Mother & Kids", name_fa: "Mother & Kids" },
        { id: "1525", name: "Security & Protection", name_fa: "Security & Protection" },
        { id: "44", name: "Lights & Lighting", name_fa: "Lights & Lighting" },
        { id: "13", name: "Home Appliances", name_fa: "Home Appliances" },
        { id: "1526", name: "Musical Instruments", name_fa: "Musical Instruments" },
      ];
      setCategories(fallbackCategories);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
    loading,
    error,
    refetch: fetchCategories,
  };
}
