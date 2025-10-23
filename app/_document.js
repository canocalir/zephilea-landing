import { Html, Head, Main, NextScript } from 'next/document';
import { getAssetPath } from './utils/path';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={getAssetPath('/favicon.ico')} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
