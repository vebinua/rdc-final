import React, { useEffect } from 'react';
import { useScrollManagement } from '../hooks/useScrollManagement';

/**
 * ScrollManager Component
 * Provides scroll management functionality across the entire application
 * Should be placed at the root level of your app
 */
const ScrollManager: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { scrollToTop } = useScrollManagement();

  // Handle initial page load
  useEffect(() => {
    // Always start at the top on initial load - instant scroll
    window.scrollTo(0, 0);
  }, [scrollToTop]);

  return <>{children}</>;
};

export default ScrollManager;