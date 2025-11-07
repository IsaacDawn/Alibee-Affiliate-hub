import React, { useState } from 'react';
import styled from 'styled-components';
import { X } from 'lucide-react';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: fadeIn 0.2s ease;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContainer = styled.div`
  background: linear-gradient(135deg, #6B46C1 0%, #4C1D95 100%);
  border-radius: 20px;
  padding: 24px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  animation: slideUp 0.3s ease;
  
  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;

const CategoryOption = styled.button<{ $selected: boolean }>`
  background: ${props => props.$selected 
    ? 'rgba(255, 255, 255, 0.2)' 
    : 'rgba(255, 255, 255, 0.1)'};
  border: 2px solid ${props => props.$selected 
    ? 'rgba(255, 255, 255, 0.5)' 
    : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 12px;
  padding: 14px 16px;
  color: white;
  font-size: 16px;
  font-weight: ${props => props.$selected ? '600' : '400'};
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateX(4px);
  }
  
  ${props => props.$selected && `
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
  `}
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: 12px 24px;
  border-radius: 12px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${props => props.$variant === 'primary' ? `
    background: linear-gradient(45deg, #ffffff, #f0f0f0);
    color: #1f2937;
    
    &:hover {
      background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
      transform: translateY(-2px);
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
`;

export const CATEGORIES = [
  { value: 'all', label: 'All' },
  { value: 'fashion', label: 'Fashion' },
  { value: 'shoes', label: 'Shoes' },
  { value: 'jewelery', label: 'Jewelery' },
  { value: 'car accessories', label: 'Car Accessories' },
  { value: 'cellphone', label: 'Cellphone' }
] as const;

export type CategoryValue = typeof CATEGORIES[number]['value'];

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (category: CategoryValue) => void;
  defaultCategory?: CategoryValue;
}

export const CategoryModal: React.FC<CategoryModalProps> = ({
  isOpen,
  onClose,
  onSelect,
  defaultCategory = 'all'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryValue>(defaultCategory);

  if (!isOpen) return null;

  const handleConfirm = () => {
    onSelect(selectedCategory);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <ModalOverlay onClick={handleCancel}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Select Category</ModalTitle>
          <CloseButton onClick={handleCancel}>
            <X size={20} />
          </CloseButton>
        </ModalHeader>
        
        <CategoryList>
          {CATEGORIES.map((category) => (
            <CategoryOption
              key={category.value}
              $selected={selectedCategory === category.value}
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label}
            </CategoryOption>
          ))}
        </CategoryList>
        
        <ActionButtons>
          <Button $variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button $variant="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </ActionButtons>
      </ModalContainer>
    </ModalOverlay>
  );
};

