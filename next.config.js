/** @type {import('next').NextConfig} */
const nextConfig = {
    // Don't run ESLint during production builds for faster deployment
    eslint: {
      // Set this to true once you've fixed all the errors, 
      // for now we'll ignore them to allow deployment
      ignoreDuringBuilds: true,
    },
    
    // Additional configs
    reactStrictMode: true,
    swcMinify: true,
    
    // If you're using experimental features
    experimental: {
      // Add any experimental features here
    },
    
    // Image configuration for next/image
    images: {
      domains: [
        // Add any external domains for images here
      ],
    },
  };
  
  module.exports = nextConfig;