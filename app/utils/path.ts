// This utility helps with path resolution in both development and production
const isProd = process.env.NODE_ENV === 'production';
const repo = 'zephilea-landing';
const basePath = isProd ? `/${repo}` : '';

export const getAssetPath = (path: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}/${cleanPath}`.replace(/\/+$/, '');
};

export default getAssetPath;
