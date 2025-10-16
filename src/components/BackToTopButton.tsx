import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ChevronUp } from 'lucide-react';

const BackToTopContainer = styled.div<{ $visible: boolean }>`
  position: fixed !important;
  bottom: 16px !important;
  right: 20px !important;
  z-index: 999999 !important;
  opacity: ${props => props.$visible ? 1 : 0};
  visibility: ${props => props.$visible ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  pointer-events: auto !important;
  transform: translateZ(0);
  will-change: transform;
`;

const BackToTopButton = styled.button`
  width: 32px !important;
  height: 32px !important;
  border-radius: 50% !important;
  background: linear-gradient(45deg, #FF4081, #9333EA) !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  color: white !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;
  transition: all 0.3s ease !important;
  font-size: 14px !important;
  position: relative !important;
  z-index: 999999 !important;
  pointer-events: auto !important;
  
  &:hover {
    transform: translateY(-2px) scale(1.05) !important;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5) !important;
    border-color: rgba(255, 255, 255, 0.6) !important;
  }
  
  &:active {
    transform: translateY(-1px) scale(1.02) !important;
  }
`;

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Check both window scroll and main content scroll
      const windowScrollY = window.scrollY || document.documentElement.scrollTop;
      const mainContent = document.querySelector('[data-scroll-container]') as HTMLElement;
      const mainContentScrollTop = mainContent ? mainContent.scrollTop : 0;
      
      // Use the larger of the two scroll values
      const scrollY = Math.max(windowScrollY, mainContentScrollTop);
      const shouldShow = scrollY > 100;
      
      if (shouldShow) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add debug function to window for manual testing
    (window as any).debugBackToTop = () => {
      console.log('🔼 [DEBUG] Manual debug triggered');
      console.log('🔼 [DEBUG] Current scroll:', window.scrollY);
      console.log('🔼 [DEBUG] isVisible state:', isVisible);
      
      // Force show for testing
      setIsVisible(true);
      console.log('🔼 [DEBUG] Forced visibility to true');
    };

    // Add scroll listeners to both window and main content
    window.addEventListener('scroll', toggleVisibility);
    
    const mainContent = document.querySelector('[data-scroll-container]') as HTMLElement;
    if (mainContent) {
      mainContent.addEventListener('scroll', toggleVisibility);
    }
    

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      
      const mainContent = document.querySelector('[data-scroll-container]') as HTMLElement;
      if (mainContent) {
        mainContent.removeEventListener('scroll', toggleVisibility);
      }
      
      delete (window as any).debugBackToTop;
    };
  }, [isVisible]);

  const scrollToTop = () => {
    // Scroll both window and main content to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    const mainContent = document.querySelector('[data-scroll-container]') as HTMLElement;
    if (mainContent) {
      mainContent.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <BackToTopContainer $visible={isVisible} data-back-to-top>
      <BackToTopButton onClick={scrollToTop} title="Back to top">
        <ChevronUp size={22} />
      </BackToTopButton>
    </BackToTopContainer>
  );
};
