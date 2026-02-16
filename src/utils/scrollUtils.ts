/**
 * Scroll utility functions for enhanced scroll management
 */

/**
 * Smooth scroll to element with offset for fixed headers
 * @param elementId - ID of the element to scroll to
 * @param offset - Offset from the top (useful for fixed headers)
 */
export const scrollToElement = (elementId: string, offset: number = 0): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Check if element is in viewport
 * @param element - DOM element to check
 * @param threshold - Percentage of element that should be visible (0-1)
 */
export const isElementInViewport = (element: Element, threshold: number = 0.1): boolean => {
  const rect = element.getBoundingClientRect();
  const elementHeight = rect.bottom - rect.top;
  const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
  
  return visibleHeight >= elementHeight * threshold;
};

/**
 * Get current scroll percentage of the page
 */
export const getScrollPercentage = (): number => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
  if (scrollHeight === 0) return 0;
  
  return Math.round((scrollTop / scrollHeight) * 100);
};

/**
 * Debounce function for scroll events
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function for scroll events
 * @param func - Function to throttle
 * @param limit - Time limit in milliseconds
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Save scroll position to sessionStorage with error handling
 * @param key - Storage key
 * @param position - Scroll position object
 */
export const saveScrollToStorage = (key: string, position: { x: number; y: number }): void => {
  try {
    sessionStorage.setItem(key, JSON.stringify({
      ...position,
      timestamp: Date.now()
    }));
  } catch (error) {
    console.warn('Failed to save scroll position to storage:', error);
  }
};

/**
 * Load scroll position from sessionStorage with error handling
 * @param key - Storage key
 * @returns Scroll position or null if not found/invalid
 */
export const loadScrollFromStorage = (key: string): { x: number; y: number } | null => {
  try {
    const stored = sessionStorage.getItem(key);
    if (stored) {
      const position = JSON.parse(stored);
      
      // Check if position is not too old (30 minutes)
      if (Date.now() - position.timestamp < 30 * 60 * 1000) {
        return { x: position.x, y: position.y };
      }
    }
  } catch (error) {
    console.warn('Failed to load scroll position from storage:', error);
  }
  
  return null;
};