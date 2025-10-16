import { useState, useEffect } from 'react';

export type Theme = 'dark' | 'light' | 'auto';

export interface ThemeConfig {
  name: string;
  value: Theme;
  icon: string;
}

export const themes: ThemeConfig[] = [
  { name: 'Dark', value: 'dark', icon: '🌙' },
  { name: 'Light', value: 'light', icon: '☀️' },
  { name: 'Auto', value: 'auto', icon: '🔄' },
];

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('dark');

  useEffect(() => {
    // Load saved theme preference
    const savedTheme = localStorage.getItem('preferred-theme') as Theme;
    if (savedTheme && themes.some(t => t.value === savedTheme)) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;
    
    if (currentTheme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else if (currentTheme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      // Auto theme - use system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.add('light');
        root.classList.remove('dark');
      }
    }
  }, [currentTheme]);

  const changeTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    localStorage.setItem('preferred-theme', theme);
  };

  return {
    currentTheme,
    changeTheme,
    themes,
  };
};
