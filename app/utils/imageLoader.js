// Custom image loader for Next.js static export
export default function imageLoader({ src, width, quality }) {
  // Remove any leading slash from the src to prevent double slashes
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  // In production, we're serving from the root, so no base path is needed
  return `/${cleanSrc}${width ? `?w=${width}` : ''}${quality ? `&q=${quality}` : ''}`;
}
