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
    loader: 'custom',
    loaderFile: './app/utils/imageLoader.js',
    path: basePath ? `${basePath}/_next/image` : '/_next/image',
  },
  poweredByHeader: false,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable image optimization API routes in static export
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: `${basePath}/_next/static/images`,
            outputPath: 'static/images',
            name: '[name]-[hash].[ext]',
          },
        },
      ],
    });
    return config;
  },
};

// For development, use default Next.js image optimization
if (!isProd) {
  delete (nextConfig as any).images?.loader;
  delete (nextConfig as any).images?.loaderFile;
  delete (nextConfig as any).basePath;
  delete (nextConfig as any).assetPrefix;
}

export default nextConfig;
