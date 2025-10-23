// Custom image loader for Next.js static export
export default function imageLoader({ src, width, quality }) {
  const basePath = process.env.NODE_ENV === 'production' ? '' : '';
  return `${basePath}${src}?w=${width}&q=${quality || 75}`;
}
