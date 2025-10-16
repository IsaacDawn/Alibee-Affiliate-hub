import React, { useState } from 'react';
import { useTheme, type Theme } from '../hooks/useTheme';
import { Palette } from 'lucide-react';

const ThemeSelector: React.FC = () => {
  const { currentTheme, changeTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const currentThemeConfig = themes.find(t => t.value === currentTheme);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="glass-card flex items-center space-x-2 px-4 py-2 rounded-2xl hover:bg-white/10 transition-all duration-300"
      >
        <Palette className="w-5 h-5 text-white" />
        <span className="text-white text-xl">{currentThemeConfig?.icon}</span>
        <span className="text-white text-sm font-medium">{currentThemeConfig?.name}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 glass-card-strong rounded-2xl p-2 min-w-[150px] z-50">
          {themes.map((theme) => (
            <button
              key={theme.value}
              onClick={() => {
                changeTheme(theme.value);
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                currentTheme === theme.value
                  ? 'bg-purple-500/20 text-purple-300'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <span className="text-xl">{theme.icon}</span>
              <span className="font-medium">{theme.name}</span>
              {currentTheme === theme.value && (
                <div className="ml-auto w-2 h-2 bg-purple-400 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
