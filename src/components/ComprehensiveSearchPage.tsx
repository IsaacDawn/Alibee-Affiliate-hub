import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Search, X, Filter, ChevronDown, Play, TrendingUp, TrendingDown, Star, Zap } from 'lucide-react';
import { useSearchParams } from '../hooks/useSearchParams';
import { useCurrency } from '../hooks/useCurrency';
import { useTranslation } from '../utils/dictionary';

// Styled Components
const SearchPageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #6B46C1 0%, #4C1D95 100%);
  z-index: 100;
  overflow-y: auto;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const SearchHeader = styled.div`
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px 16px;
  position: sticky;
  top: 0;
  z-index: 10;
  flex-shrink: 0;
`;

const HeaderContent = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 16px;
`;

const SearchTitle = styled.h1`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  background: linear-gradient(45deg, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 12px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

const SearchContent = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const SearchForm = styled.form`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    padding: 12px;
    border-radius: 12px;
  }
`;

const FormSection = styled.div`
  margin-bottom: 16px;
  flex-shrink: 0;

  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`;

const SectionTitle = styled.h3`
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  gap: 6px;
  
  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 6px;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  
  @media (max-width: 768px) {
    gap: 4px;
  }
`;

const Label = styled.label`
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 10px 12px;
  color: white;
  font-size: 14px;
  transition: all 0.2s ease;
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #fbbf24;
    box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 8px 10px;
    font-size: 13px;
    border-radius: 8px;
  }
`;

const PriceRangeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  
  @media (max-width: 768px) {
    gap: 8px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

const Select = styled.select`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 10px 12px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #fbbf24;
    box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.1);
  }

  option {
    background: #1f2937;
    color: white;
  }
  
  @media (max-width: 768px) {
    padding: 8px 10px;
    font-size: 13px;
    border-radius: 8px;
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    padding: 10px;
    gap: 8px;
  }
`;

const Toggle = styled.button<{ $active: boolean }>`
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.$active ? '#10b981' : 'rgba(255, 255, 255, 0.2)'};
  flex-shrink: 0;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${props => props.$active ? '22px' : '2px'};
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: white;
    transition: all 0.3s ease;
  }
  
  @media (max-width: 768px) {
    width: 36px;
    height: 18px;
    
    &::after {
      width: 14px;
      height: 14px;
      left: ${props => props.$active ? '20px' : '2px'};
    }
  }
`;

const ToggleLabel = styled.span`
  color: white;
  font-size: 12px;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const SortOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  
  @media (max-width: 768px) {
    gap: 8px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    gap: 6px;
    margin-top: 12px;
    padding-top: 12px;
    flex-wrap: wrap;
  }
`;

const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: 10px 16px;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;

  ${props => props.$variant === 'primary' ? `
    background: linear-gradient(45deg, #ffffff, #f0f0f0);
    color: #1f2937;
    text-shadow: none;
    
    &:hover {
      background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
      transform: translateY(-1px);
      box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
    }
  ` : `
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
    
    &:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.3);
    }
  `}
  
  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 12px;
    border-radius: 8px;
    gap: 4px;
  }
`;


interface ComprehensiveSearchPageProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (searchData: {
    query: string;
    minPrice: number;
    maxPrice: number;
    sortBy: string;
    onlyWithVideo: boolean;
    targetCurrency: string;
  }) => void;
}

const ComprehensiveSearchPage: React.FC<ComprehensiveSearchPageProps> = ({
  isOpen,
  onClose,
  onSearch
}) => {
  const { searchParams } = useSearchParams();
  const { currentCurrency } = useCurrency();
  const { t } = useTranslation();

  // Form state
  const [query, setQuery] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [sortType, setSortType] = useState('price');
  const [sortOrder, setSortOrder] = useState('asc');
  const [onlyWithVideo, setOnlyWithVideo] = useState(false);

  // Sort type options
  const sortTypeOptions = [
    { value: 'price', label: t('price'), icon: <TrendingUp size={16} /> },
    { value: 'discount', label: t('discount'), icon: <Zap size={16} /> },
    { value: 'volume', label: t('salesVolume'), icon: <TrendingUp size={16} /> },
    { value: 'rating', label: t('rating'), icon: <Star size={16} /> }
  ];

  // Sort order options
  const sortOrderOptions = [
    { value: 'asc', label: t('ascending'), icon: <TrendingUp size={16} /> },
    { value: 'desc', label: t('descending'), icon: <TrendingDown size={16} /> }
  ];

  // Initialize form with current search params only when search page is first opened
  useEffect(() => {
    if (isOpen) {
      // Only initialize if form is empty (first time opening)
      if (query === '' && minPrice === 0 && maxPrice === 2000 && sortType === 'price' && sortOrder === 'asc' && !onlyWithVideo) {
        const initialQuery = searchParams.query === 'all' ? '' : (searchParams.query || '');
        setQuery(initialQuery);
        setMinPrice(searchParams.minPrice || 0);
        setMaxPrice(searchParams.maxPrice || 2000);
        
        // Parse existing sortBy parameter
        const currentSortBy = searchParams.sortBy || 'price_asc';
        const [type, order] = currentSortBy.split('_');
        setSortType(type || 'price');
        setSortOrder(order || 'asc');
        
        setOnlyWithVideo(searchParams.hasVideo || false);
      }
    }
  }, [isOpen]); // Only depend on isOpen, not searchParams

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const searchData = {
      query: query.trim() || 'all', // Use 'all' if query is empty
      minPrice,
      maxPrice,
      sortBy: `${sortType}_${sortOrder}`,
      onlyWithVideo,
      targetCurrency: currentCurrency?.code || 'USD'
    };

    console.log('🔍 [SEARCH FORM] Submitting search for:', searchData.query);
    
    onSearch(searchData);
    onClose();
  };

  const handleClear = () => {
    setQuery('');
    setMinPrice(0);
    setMaxPrice(2000);
    setSortType('price');
    setSortOrder('asc');
    setOnlyWithVideo(false);
  };

  if (!isOpen) return null;

  return (
    <SearchPageContainer>
      <SearchHeader>
        <HeaderContent>
          <SearchTitle>{t('advancedSearch')}</SearchTitle>
          <CloseButton onClick={onClose}>
            <X size={20} />
          </CloseButton>
        </HeaderContent>
      </SearchHeader>

      <SearchContent>
        <SearchForm onSubmit={handleSubmit}>
          {/* Product Name/ID Search */}
          <FormSection>
            <SectionTitle>
              <Search size={20} />
              {t('productName')} or {t('productId')}
            </SectionTitle>
            <InputGroup>
              <Label>{t('searchProducts')}</Label>
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., shoe, 1005009716975587"
                autoFocus
              />
            </InputGroup>
          </FormSection>

          {/* Price Range */}
          <FormSection>
            <SectionTitle>
              <Filter size={20} />
              {t('priceRange')}
            </SectionTitle>
            <PriceRangeContainer>
              <InputGroup>
                <Label>{t('minPrice')}</Label>
                <Input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value) || 0)}
                  placeholder="0"
                  min="0"
                />
              </InputGroup>
              <InputGroup>
                <Label>{t('maxPrice')}</Label>
                <Input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value) || 2000)}
                  placeholder="2000"
                  min="0"
                />
              </InputGroup>
            </PriceRangeContainer>
          </FormSection>

          {/* Sort Options */}
          <FormSection>
            <SectionTitle>
              <ChevronDown size={20} />
              {t('sortBy')}
            </SectionTitle>
            <SortOptionsContainer>
              <InputGroup>
                <Label>{t('sortBy')}</Label>
                <Select
                  value={sortType}
                  onChange={(e) => setSortType(e.target.value)}
                >
                  {sortTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              </InputGroup>
              <InputGroup>
                <Label>{t('sortOrder')}</Label>
                <Select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  {sortOrderOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              </InputGroup>
            </SortOptionsContainer>
          </FormSection>

          {/* Video Filter */}
          <FormSection>
            <SectionTitle>
              <Play size={20} />
              {t('onlyWithVideo')}
            </SectionTitle>
            <ToggleContainer>
              <Toggle
                $active={onlyWithVideo}
                onClick={() => setOnlyWithVideo(!onlyWithVideo)}
                type="button"
              />
              <ToggleLabel>{t('onlyWithVideo')}</ToggleLabel>
            </ToggleContainer>
          </FormSection>


          {/* Action Buttons */}
          <ActionButtons>
            <Button type="button" onClick={handleClear}>
              {t('clearFilters')}
            </Button>
            <Button type="button" onClick={onClose}>
              {t('cancel')}
            </Button>
            <Button type="submit" $variant="primary">
              <Search size={16} />
              {t('search')}
            </Button>
          </ActionButtons>
        </SearchForm>
      </SearchContent>
    </SearchPageContainer>
  );
};

export default ComprehensiveSearchPage;
