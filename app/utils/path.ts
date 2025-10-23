// This utility helps with path resolution in both development and production
const isProd = process.env.NODE_ENV === 'production';
const repo = 'zephilea-landing';

// Use the environment variable if available, otherwise fall back to the old logic
const basePath = 
  typeof process !== 'undefined' && process.env.NEXT_PUBLIC_BASE_PATH 
    ? process.env.NEXT_PUBLIC_BASE_PATH 
    : (isProd ? `` : '');

export const getAssetPath = (path: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}/${cleanPath}`.replace(/\/+$/, '');
};

export default getAssetPath;
