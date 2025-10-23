import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const isProd = process.env.NODE_ENV === 'production';
const basePath = isGithubActions || isProd ? '' : '';

const nextConfig: NextConfig = {
  reactCompiler: true,
  basePath: basePath,
  assetPrefix: basePath || undefined,
  output: 'export',
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  trailingSlash: true,
  // Disable type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// For development, clear basePath and assetPrefix
if (!isProd) {
  delete (nextConfig as any).basePath;
  delete (nextConfig as any).assetPrefix;
}

export default nextConfig;
