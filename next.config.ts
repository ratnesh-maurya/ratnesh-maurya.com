import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Microlink OG image API
      { protocol: 'https', hostname: 'cdn.microlink.io' },
      { protocol: 'https', hostname: '*.microlink.io' },
      // Project sites may serve OG images from CDNs
      { protocol: 'https', hostname: '*.vercel.app' },
      { protocol: 'https', hostname: '*.ratnesh-maurya.com' },
      // Common CDNs
      { protocol: 'https', hostname: '**.cloudfront.net' },
      { protocol: 'https', hostname: '**.amazonaws.com' },
      { protocol: 'https', hostname: '**.imgix.net' },
      { protocol: 'https', hostname: 'opengraph.githubassets.com' },
    ],
  },
};

export default nextConfig;
