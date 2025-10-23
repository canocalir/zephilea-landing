import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const isProd = process.env.NODE_ENV === 'production';
const basePath = isGithubActions || isProd ? '' : '';

const nextConfig: NextConfig = {
  reactCompiler: true,
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  output: 'export',
  images: {
    unoptimized: true,
    // Use default loader for static export
    loader: 'default',
    path: basePath ? `${basePath}/_next/image` : '/_next/image',
  },
  poweredByHeader: false,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

// For development, use default Next.js settings
if (!isProd) {
  delete (nextConfig as any).basePath;
  delete (nextConfig as any).assetPrefix;
  nextConfig.images = {
    ...nextConfig.images,
    unoptimized: false,
  };
}

export default nextConfig;
