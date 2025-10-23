import { Html, Head, Main, NextScript } from 'next/document';

// Helper function to get the correct asset path
function getAssetPath(path) {
  const basePath = process.env.NODE_ENV === 'production' ? '' : '';
  return `${basePath}${path}`;
}

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={getAssetPath('/favicon.ico')} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Zephilea - Your website description" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
