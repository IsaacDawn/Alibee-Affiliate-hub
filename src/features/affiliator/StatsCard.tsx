import { useEffect, useState } from "react";
import { API_ENDPOINTS } from "../../constants";

interface Stats {
  totalProducts: number;
  savedProducts: number;
  totalSearches: number;
  affiliateLinks: number;
}

interface StatsCardProps {
  savedProductsCount?: number;
  refreshTrigger?: number; // For triggering refresh
}

export function StatsCard({ savedProductsCount, refreshTrigger }: StatsCardProps) {
  const [baseStats, setBaseStats] = useState<Omit<Stats, 'savedProducts'> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.STATS);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        if (data.error) {
          // Stats API error
          // Set default stats on error
          setBaseStats({
            totalProducts: 0,
            totalSearches: 0,
            affiliateLinks: 0,
          });
          return;
        }
        
        const newBaseStats = {
          totalProducts: 0, // This would come from AliExpress API stats
          totalSearches: data.totalSearches || data.total_searches || 0,
          affiliateLinks: data.affiliate_links || 0,
        };
        
        setBaseStats(newBaseStats);
      } catch (error) {
        console.error("Failed to fetch stats:", error);
        // Set default stats on error
        setBaseStats({
          totalProducts: 0,
          totalSearches: 0,
          affiliateLinks: 0,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [refreshTrigger]); // Adding refreshTrigger to dependency array

  // Auto-refresh stats every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const fetchStats = async () => {
        try {
          const response = await fetch(API_ENDPOINTS.STATS);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          
          if (data.error) {
            console.error("Stats API error:", data.error);
            return;
          }
          
          const newBaseStats = {
            totalProducts: 0, // This would come from AliExpress API stats
            totalSearches: data.totalSearches || data.total_searches || 0,
            affiliateLinks: data.affiliate_links || 0,
          };
          
          setBaseStats(newBaseStats);
        } catch (error) {
          console.error("Failed to fetch stats:", error);
        }
      };
      
      fetchStats();
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  // Create final stats object with current savedProductsCount
  const stats: Stats | null = baseStats ? {
    ...baseStats,
    savedProducts: savedProductsCount ?? 0
  } : null;

  if (loading) {
    return (
      <div className="p-4 bg-white rounded-xl shadow">
        <div className="text-sm text-gray-500">Loading statistics...</div>
      </div>
    );
  }

  if (!stats) {
    return null;
  }

  const statItems = [
    {
      label: "Saved Products",
      value: stats.savedProducts,
      icon: "❤️",
      color: "text-pink-600"
    },
    {
      label: "Total Searches",
      value: stats.totalSearches,
      icon: "🔍",
      color: "text-blue-600"
    }
  ];

  return (
    <div className="p-2 md:p-3 bg-gray-900 rounded-xl border border-gray-700">
      <div className="text-sm md:text-xs font-medium text-white mb-2">📊 Stats</div>
      
      <div className="space-y-2">
        {statItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-2 bg-gray-800 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-base md:text-sm">{item.icon}</span>
              <span className="text-sm md:text-xs text-gray-400">{item.label}</span>
            </div>
            <span className={`text-sm md:text-xs font-medium ${item.color}`}>
              {item.value.toLocaleString('en-US')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
