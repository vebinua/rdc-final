import { useState, useEffect, useCallback } from 'react';
import { generateImageSources, getOptimalImageFormat, ImageOptimizationOptions } from '../utils/imageOptimization';

interface UseImageOptimizationReturn {
  optimizedSrc: string;
  webpSrc?: string;
  avifSrc?: string;
  isLoading: boolean;
  error: string | null;
  preloadImage: (src: string) => void;
}

export const useImageOptimization = (
  src: string,
  options: ImageOptimizationOptions = {}
): UseImageOptimizationReturn => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [optimalFormat, setOptimalFormat] = useState<'avif' | 'webp' | 'jpeg'>('jpeg');

  useEffect(() => {
    setOptimalFormat(getOptimalImageFormat());
  }, []);

  const { webp, avif, fallback } = generateImageSources(src, options);

  const preloadImage = useCallback((imageSrc: string) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = imageSrc;
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const img = new Image();
    
    img.onload = () => {
      setIsLoading(false);
    };
    
    img.onerror = () => {
      setError('Failed to load image');
      setIsLoading(false);
    };

    // Load the optimal format
    switch (optimalFormat) {
      case 'avif':
        img.src = avif || fallback;
        break;
      case 'webp':
        img.src = webp || fallback;
        break;
      default:
        img.src = fallback;
    }
  }, [src, optimalFormat, avif, webp, fallback]);

  return {
    optimizedSrc: fallback,
    webpSrc: webp,
    avifSrc: avif,
    isLoading,
    error,
    preloadImage
  };
};