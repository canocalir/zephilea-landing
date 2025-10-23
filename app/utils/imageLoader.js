// Custom image loader for Next.js static export
export default function imageLoader({ src, width, quality }) {
  const basePath = process.env.NODE_ENV === 'production' ? '/zephilea-landing' : '';
  return `${basePath}${src}?w=${width}&q=${quality || 75}`;
}
