import type { NextConfig } from "next";

// GitHub Pages configuration
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  // Configure base path for GitHub Pages deployment
  basePath: basePath,
  
  // Asset prefix for static files (required for GitHub Pages)
  assetPrefix: basePath,
  
  // Image optimization configuration
  images: {
    // Disable image optimization for static export (GitHub Pages)
    unoptimized: true,
    
    // Enable modern image formats
    formats: ['image/webp', 'image/avif'],
    
    // Allowed external domains for images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/vi/**',
      },
      {
        protocol: 'https',
        hostname: 'youtube.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.youtube.com',
        port: '',
        pathname: '/**',
      },
    ],
    
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    
    // Image sizes for different breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Minimize the number of requests by optimizing static images
    minimumCacheTTL: 86400, // 24 hours cache
    
    // Disable static optimization for dynamic images
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compiler optimizations
  compiler: {
    // Remove console.log statements in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Enable static exports when building for production (required for GitHub Pages)
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  trailingSlash: true,
};

export default nextConfig;
