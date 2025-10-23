import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGithubActions ? '/zephilea-landing' : '';

const nextConfig: NextConfig = {
  reactCompiler: true,
  basePath: process.env.NODE_ENV === 'production' ? basePath : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? basePath : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
