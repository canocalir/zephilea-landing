/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true' || process.env.NODE_ENV === 'production';
const repo = 'zephilea-landing';
const basePath = isGithubActions ? `/${repo}` : '';

const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './app/utils/imageLoader.js',
  },
  trailingSlash: true,
  reactStrictMode: true,
  
  // Configure webpack to handle asset prefixing
  webpack: (config, { isServer, dev }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    
    // Add public path for static assets in production
    if (!isServer && !dev) {
      config.output.publicPath = `${basePath}${config.output.publicPath}`;
      
      // Ensure chunks are properly prefixed
      if (config.optimization && config.optimization.splitChunks) {
        config.optimization.splitChunks = {
          ...config.optimization.splitChunks,
          chunks: 'all',
          cacheGroups: {
            ...config.optimization.splitChunks.cacheGroups,
            styles: {
              name: 'styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true,
            },
          },
        };
      }
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
