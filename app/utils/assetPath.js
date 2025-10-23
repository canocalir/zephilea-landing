/**
 * Utility function to handle asset paths in both development and production
 * @param {string} path - The asset path (should start with '/')
 * @returns {string} The correct asset path with basePath if in production
 */
export function getAssetPath(path) {
  // Ensure path starts with a forward slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // In production, prepend the base path
  if (process.env.NODE_ENV === 'production') {
    return `/zephilea-landing${normalizedPath}`;
  }
  
  return normalizedPath;
}
