import { useState, useEffect } from 'react';
import api from '../services/api';
import type { Stats } from '../types';

export const useStats = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get('/api/stats');
      setStats(response.data.data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch stats');
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchStats();
  // }, []);

  return {
    stats,
    loading,
    error,
    refetch: fetchStats,
  };
};
