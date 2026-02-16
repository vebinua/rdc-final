import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

interface ScrollPosition {
  x: number;
  y: number;
  timestamp: number;
}

interface ScrollStorage {
  [key: string]: ScrollPosition;
}

/**
 * Custom hook for comprehensive scroll management
 * Handles initial page load positioning and browser back navigation restoration
 */
export const useScrollManagement = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const scrollPositions = useRef<ScrollStorage>({});
  const isRestoringScroll = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  /**
   * Save current scroll position to memory storage
   * @param pathname - Current page pathname
   */
  const saveScrollPosition = (pathname: string) => {
    try {
      const scrollPosition: ScrollPosition = {
        x: window.scrollX || window.pageXOffset,
        y: window.scrollY || window.pageYOffset,
        timestamp: Date.now()
      };
      
      scrollPositions.current[pathname] = scrollPosition;
      
      // Also save to sessionStorage as backup
      sessionStorage.setItem(
        `scroll_${pathname}`, 
        JSON.stringify(scrollPosition)
      );
    } catch (error) {
      console.warn('Failed to save scroll position:', error);
    }
  };

  /**
   * Restore scroll position for a given pathname
   * @param pathname - Page pathname to restore scroll for
   */
  const restoreScrollPosition = (pathname: string) => {
    try {
      // First try to get from memory
      let savedPosition = scrollPositions.current[pathname];
      
      // Fallback to sessionStorage
      if (!savedPosition) {
        const stored = sessionStorage.getItem(`scroll_${pathname}`);
        if (stored) {
          savedPosition = JSON.parse(stored);
        }
      }

      if (savedPosition) {
        // Check if position is not too old (prevent stale positions)
        const isPositionFresh = Date.now() - savedPosition.timestamp < 30 * 60 * 1000; // 30 minutes
        
        if (isPositionFresh) {
          isRestoringScroll.current = true;
          
          // Use requestAnimationFrame to ensure DOM is ready
          requestAnimationFrame(() => {
            // Double-check that content is loaded by waiting for next frame
            requestAnimationFrame(() => {
              window.scrollTo({
                left: savedPosition.x,
                top: savedPosition.y,
                behavior: 'auto' // Instant scroll for back navigation
              });
              
              // Reset flag after a short delay
              setTimeout(() => {
                isRestoringScroll.current = false;
              }, 100);
            });
          });
          
          return true; // Position was restored
        }
      }
    } catch (error) {
      console.warn('Failed to restore scroll position:', error);
    }
    
    return false; // Position was not restored
  };

  /**
   * Scroll to top of page with smooth animation
   */
  const scrollToTop = () => {
    // For new page navigation, jump to top instantly without animation
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'auto' // Instant scroll, no animation
    });
  };

  /**
   * Handle scroll events to save position
   */
  const handleScroll = () => {
    // Don't save position if we're currently restoring
    if (isRestoringScroll.current) return;
    
    // Debounce scroll saving to improve performance
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      saveScrollPosition(location.pathname);
    }, 150);
  };

  /**
   * Clean up old scroll positions to prevent memory leaks
   */
  const cleanupOldPositions = () => {
    const now = Date.now();
    const maxAge = 60 * 60 * 1000; // 1 hour
    
    // Clean memory storage
    Object.keys(scrollPositions.current).forEach(pathname => {
      const position = scrollPositions.current[pathname];
      if (now - position.timestamp > maxAge) {
        delete scrollPositions.current[pathname];
      }
    });
    
    // Clean sessionStorage
    try {
      Object.keys(sessionStorage).forEach(key => {
        if (key.startsWith('scroll_')) {
          const stored = sessionStorage.getItem(key);
          if (stored) {
            const position = JSON.parse(stored);
            if (now - position.timestamp > maxAge) {
              sessionStorage.removeItem(key);
            }
          }
        }
      });
    } catch (error) {
      console.warn('Failed to cleanup old scroll positions:', error);
    }
  };

  // Main effect for handling route changes
  useEffect(() => {
    // Override browser's default scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Handle different navigation types
    const handleRouteChange = () => {
      if (navigationType === 'POP') {
        // Browser back/forward navigation - try to restore position
        const wasRestored = restoreScrollPosition(location.pathname);
        
        if (!wasRestored) {
          // If no saved position, scroll to top
          scrollToTop();
        }
      } else {
        // New navigation (PUSH/REPLACE) - always scroll to top
        scrollToTop();
      }
    };

    // Immediate scroll to top for new navigation
    handleRouteChange();

    return () => {
      // No cleanup needed
    };
  }, [location.pathname, navigationType]);

  // Effect for setting up scroll listener
  useEffect(() => {
    // Add scroll listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup old positions periodically
    const cleanupInterval = setInterval(cleanupOldPositions, 5 * 60 * 1000); // Every 5 minutes

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(cleanupInterval);
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [location.pathname]);

  // Effect for handling page visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // Save current position when page becomes hidden
        saveScrollPosition(location.pathname);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [location.pathname]);

  // Effect for handling beforeunload
  useEffect(() => {
    const handleBeforeUnload = () => {
      saveScrollPosition(location.pathname);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [location.pathname]);

  return {
    scrollToTop,
    saveScrollPosition: () => saveScrollPosition(location.pathname),
    restoreScrollPosition: () => restoreScrollPosition(location.pathname)
  };
};