import { useState, useEffect } from 'react';

export type Language = 'en' | 'he' | 'ar';

export interface LanguageConfig {
  code: Language;
  name: string;
  flag: string;
}

export const languages: LanguageConfig[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'he', name: 'עברית', flag: '🇮🇱' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('preferred-language', language);
  };

  useEffect(() => {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && languages.some(l => l.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  return {
    currentLanguage,
    changeLanguage,
    languages,
  };
};
