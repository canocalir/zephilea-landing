/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true' || process.env.NODE_ENV === 'production';
const repo = 'zephilea-landing';
const basePath = isGithubActions ? `/${repo}` : '';

const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
    path: basePath ? `${basePath}/_next/image` : '/_next/image',
  },
  trailingSlash: true,
  reactStrictMode: false,
  
  // Configure webpack to handle asset prefixing
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    
    // Add public path for static assets
    if (!isServer) {
      config.output.publicPath = `${basePath}${config.output.publicPath}`;
    }
    
    return config;
  },
  
  // Turbopack configuration
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  
  // Disable Turbopack for now as we're using webpack
  turbopack: {},
  
  // Environment variables that will be available in the browser
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
