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
    path: basePath ? `${basePath}/_next/image` : '/_next/image',
  },
  trailingSlash: true,
  reactStrictMode: false,
  // Ensure public assets are properly prefixed
  publicRuntimeConfig: {
    basePath: basePath,
  },
  // Disable the static HTML optimization for now
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

module.exports = nextConfig;
