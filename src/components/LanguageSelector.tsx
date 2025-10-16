import React, { useState } from 'react';
import { useLanguage, type Language } from '../hooks/useLanguage';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find(l => l.code === currentLanguage);

  return (
    <div className="relative" dir="ltr">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="glass-card flex items-center space-x-2 px-4 py-2 rounded-2xl hover:bg-white/10 transition-all duration-300"
      >
        <Globe className="w-5 h-5 text-white" />
        <span className="text-white font-medium">{currentLang?.flag}</span>
        <span className="text-white text-sm font-medium">
          {currentLang?.code.toUpperCase()}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 glass-card-strong rounded-2xl p-2 min-w-[200px] z-50" dir="ltr">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                currentLanguage === lang.code
                  ? 'bg-purple-500/20 text-purple-300'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="font-medium">{lang.name} {lang.code.toUpperCase()}</span>
              {currentLanguage === lang.code && (
                <div className="ml-auto w-2 h-2 bg-purple-400 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
