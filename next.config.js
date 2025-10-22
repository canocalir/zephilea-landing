/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/zephilea-landing' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/zephilea-landing/' : '',
  images: {
    unoptimized: true,
  },
  experimental: {
    // Enable the webpack build worker
    workerThreads: true,
    // Enable the new Next.js font optimization
    optimizeFonts: true,
  },
}

module.exports = nextConfig
