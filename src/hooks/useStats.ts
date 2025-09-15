// Custom hook for statistics management
import { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import type { Stats, SystemStatus } from '../types';

interface UseStatsReturn {
  stats: Stats | null;
  systemStatus: SystemStatus | null;
  loading: boolean;
  error: string | null;
  refreshStats: () => Promise<void>;
  refreshSystemStatus: () => Promise<void>;
}

export function useStats(): UseStatsReturn {
  const [stats, setStats] = useState<Stats | null>(null);
  const [systemStatus, setSystemStatus] = useState<SystemStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async () => {
    try {
      const response = await apiService.getStats();
      setStats(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch stats');
    }
  };

  const fetchSystemStatus = async () => {
    try {
      const response = await apiService.getHealth();
      setSystemStatus(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch system status');
    }
  };

  const refreshStats = async () => {
    await fetchStats();
  };

  const refreshSystemStatus = async () => {
    await fetchSystemStatus();
  };

  useEffect(() => {
    const loadInitialData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        await Promise.all([fetchStats(), fetchSystemStatus()]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load initial data');
      } finally {
        setLoading(false);
      }
    };

    loadInitialData();
  }, []);

  return {
    stats,
    systemStatus,
    loading,
    error,
    refreshStats,
    refreshSystemStatus,
  };
}
