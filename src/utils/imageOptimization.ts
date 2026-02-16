/**
 * Image optimization utilities for web performance
 */

export interface ImageOptimizationOptions {
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'avif';
  width?: number;
  height?: number;
  lazy?: boolean;
}

/**
 * Generate optimized image sources for different formats
 */
export const generateImageSources = (
  baseSrc: string,
  options: ImageOptimizationOptions = {}
): { webp?: string; avif?: string; fallback: string } => {
  const { quality = 85, width, height } = options;
  
  // Extract filename and extension
  const lastDotIndex = baseSrc.lastIndexOf('.');
  const filename = baseSrc.substring(0, lastDotIndex);
  const extension = baseSrc.substring(lastDotIndex + 1);
  
  // Generate query parameters for optimization
  const params = new URLSearchParams();
  if (quality !== 85) params.append('q', quality.toString());
  if (width) params.append('w', width.toString());
  if (height) params.append('h', height.toString());
  
  const queryString = params.toString() ? `?${params.toString()}` : '';
  
  return {
    avif: `${filename}.avif${queryString}`,
    webp: `${filename}.webp${queryString}`,
    fallback: `${baseSrc}${queryString}`
  };
};

/**
 * Preload critical images for better performance
 */
export const preloadImage = (src: string, as: 'image' = 'image'): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = as;
  link.href = src;
  document.head.appendChild(link);
};

/**
 * Create responsive image srcSet for different screen densities
 */
export const createResponsiveSrcSet = (
  baseSrc: string,
  sizes: number[] = [480, 768, 1024, 1280, 1920]
): string => {
  const lastDotIndex = baseSrc.lastIndexOf('.');
  const filename = baseSrc.substring(0, lastDotIndex);
  const extension = baseSrc.substring(lastDotIndex + 1);
  
  return sizes
    .map(size => `${filename}-${size}w.${extension} ${size}w`)
    .join(', ');
};

/**
 * Determine optimal image format based on browser support
 */
export const getOptimalImageFormat = (): 'avif' | 'webp' | 'jpeg' => {
  // Check for AVIF support
  const avifSupport = document.createElement('canvas')
    .toDataURL('image/avif')
    .indexOf('data:image/avif') === 0;
  
  if (avifSupport) return 'avif';
  
  // Check for WebP support
  const webpSupport = document.createElement('canvas')
    .toDataURL('image/webp')
    .indexOf('data:image/webp') === 0;
  
  if (webpSupport) return 'webp';
  
  return 'jpeg';
};

/**
 * Image compression quality recommendations based on content type
 */
export const getRecommendedQuality = (imageType: 'photo' | 'graphic' | 'screenshot'): number => {
  switch (imageType) {
    case 'photo':
      return 100; // Maximum quality for photographs
    case 'graphic':
      return 100; // Maximum quality for graphics with text
    case 'screenshot':
      return 100; // Maximum quality for UI screenshots
    default:
      return 100;
  }
};

/**
 * Calculate optimal image dimensions based on container and device pixel ratio
 */
export const calculateOptimalDimensions = (
  containerWidth: number,
  containerHeight: number,
  devicePixelRatio: number = window.devicePixelRatio || 1
): { width: number; height: number } => {
  return {
    width: Math.ceil(containerWidth * devicePixelRatio),
    height: Math.ceil(containerHeight * devicePixelRatio)
  };
};