/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repo = 'zephilea-landing';

const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: isGithubActions ? `/${repo}` : '',
  assetPrefix: isGithubActions ? `/${repo}/` : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: false,
  // Disable the static HTML optimization for now
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

module.exports = nextConfig;
