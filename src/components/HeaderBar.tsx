import React, { useState } from 'react';
import styled from 'styled-components';
import { useCurrency } from '../hooks/useCurrency';
import { useTranslation } from '../utils/dictionary';
import { currencyLogger } from '../utils/currencyLogger';
import { Search } from 'lucide-react';

// Styled Components
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  height: 60px;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  direction: ltr; /* Force LTR direction */
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  direction: ltr; /* Force LTR direction */
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
`;

const AppName = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
  margin: 0;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const SearchButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 8px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

const CurrencySection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  direction: ltr; /* Force LTR direction */
`;

const CurrencyButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 8px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  gap: 4px;
  font-size: 10px;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

const CurrencyDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 12px;
  padding: 8px;
  min-width: 160px;
  z-index: 50;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const CurrencyOption = styled.button<{ $active?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${props => props.$active ? 'rgba(34, 197, 94, 0.2)' : 'transparent'};
  border: none;

  &:hover {
    background: ${props => props.$active ? 'rgba(34, 197, 94, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  }
`;

const CurrencyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CurrencyName = styled.span`
  font-weight: 500;
  font-size: 14px;
`;

const CurrencyCode = styled.span`
  font-size: 12px;
  opacity: 0.75;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 40;
`;

interface HeaderBarProps {
  onSearchClick?: () => void;
  onCurrencyChange?: (currencyCode: string) => void;
  onLanguageChange?: (languageCode: string) => void;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ onSearchClick, onCurrencyChange, onLanguageChange }) => {
  const { currentCurrency, changeCurrency, currencies } = useCurrency();
  const { currentLanguage, changeLanguage, languages } = useTranslation();
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  // const currentLang = languages.find(l => l.code === currentLanguage); // Removed
  const currentCurr = currentCurrency;

  return (
    <HeaderContainer>
      <HeaderContent>
        {/* Logo and App Name */}
        <LogoSection>
          <Logo 
            src="/Logo.png" 
            alt="Alibee Logo"
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/32x32?text=A';
            }}
          />
          <AppName>Alibee Affiliate Hub</AppName>
        </LogoSection>

        {/* Search Button - Center */}
        <SearchButton onClick={onSearchClick}>
          <Search size={16} />
        </SearchButton>

        {/* Language and Currency Selectors */}
        <CurrencySection>
          {/* Language Selector */}
          <div style={{ position: 'relative' }}>
            <CurrencyButton
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              title={`Language: ${currentLanguage}`}
            >
              <span>{currentLanguage}</span>
            </CurrencyButton>

            {isLanguageOpen && (
              <CurrencyDropdown>
                {languages.map((lang) => (
                   <CurrencyOption
                     key={lang.code}
                     onClick={() => {
                       changeLanguage(lang.code as any);
                       setIsLanguageOpen(false);
                       if (onLanguageChange) {
                         onLanguageChange(lang.code);
                       }
                     }}
                     className={currentLanguage === lang.code ? 'active' : ''}
                   >
                    <span>{lang.code}</span>
                    <span>{lang.name}</span>
                  </CurrencyOption>
                ))}
              </CurrencyDropdown>
            )}
          </div>

          {/* Currency Selector */}
          <div style={{ position: 'relative' }}>
            <CurrencyButton
              onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
              title={`${currentCurr?.name} (${currentCurr?.code})`}
            >
              <span>{currentCurr?.symbol}</span>
              <span>{currentCurr?.code}</span>
            </CurrencyButton>

            {isCurrencyOpen && (
              <CurrencyDropdown>
                {currencies.map((currency) => (
                  <CurrencyOption
                    key={currency.code}
                    $active={currentCurrency.code === currency.code}
                    onClick={() => {
                      currencyLogger.info('HeaderBar', 'Currency selection clicked', {
                        selectedCurrency: currency.code,
                        currentCurrency: currentCurrency.code
                      });
                      
                      changeCurrency(currency.code);
                      setIsCurrencyOpen(false);
                      
                      // Trigger search with new currency
                      if (onCurrencyChange) {
                        onCurrencyChange(currency.code);
                      }
                      
                      currencyLogger.info('HeaderBar', 'Currency changed and search triggered', {
                        newCurrency: currency.code
                      });
                    }}
                  >
                    <span>{currency.flag}</span>
                    <CurrencyInfo>
                      <CurrencyName>{currency.name}</CurrencyName>
                      <CurrencyCode>{currency.code} {currency.symbol}</CurrencyCode>
                    </CurrencyInfo>
                  </CurrencyOption>
                ))}
              </CurrencyDropdown>
            )}
          </div>
        </CurrencySection>
      </HeaderContent>

      {/* Click outside to close dropdowns */}
      {isCurrencyOpen && (
        <Overlay 
          onClick={() => {
            setIsCurrencyOpen(false);
          }}
        />
      )}
    </HeaderContainer>
  );
};

export default HeaderBar;
