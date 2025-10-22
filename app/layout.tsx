import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zephilea Atelier - Handcrafted Creations',
  description: 'Discover unique, handcrafted creations by Zephilea Atelier. Each piece is made with passion and attention to detail. Shop now on Etsy!',
  keywords: ['handmade', 'artisan', 'crafts', 'etsy', 'zephilea', 'atelier', 'handcrafted'],
  authors: [{ name: 'Zephilea Atelier' }],
  openGraph: {
    title: 'Zephilea Atelier - Handcrafted Creations',
    description: 'Discover unique, handcrafted creations by Zephilea Atelier. Each piece is made with passion and attention to detail.',
    url: 'https://zephilea.com',
    siteName: 'Zephilea Atelier',
    images: [
      {
        url: '/zephilea.png',
        width: 800,
        height: 600,
        alt: 'Zephilea Atelier Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  metadataBase: new URL('https://zephilea.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
