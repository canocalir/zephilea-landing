'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { getAssetPath } from './utils/path';

const LoadingBar = () => {
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    const countdown = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(countdown);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex flex-col items-center text-center mb-3">
        <div className="w-full flex justify-between text-xs text-gray-500 mb-1 px-1">
          <span>Loading Zephilea Atelier Etsy Shop</span>
          <span className="font-medium text-emerald-800">{secondsLeft}s</span>
        </div>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden border border-gray-200">
        <motion.div 
          className="h-full bg-gradient-to-r from-emerald-700 to-emerald-800"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ 
            duration: 10.2,
            ease: 'linear',
          }}
        />
      </div>
      <p className="text-xs text-emerald-800/80 mt-2 text-center font-medium">
        {secondsLeft > 0 
          ? `Redirecting in ${secondsLeft} second${secondsLeft !== 1 ? 's' : ''}...`
          : 'Almost there...'}
      </p>
    </div>
  );
};

export default function Home() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    // Start loading animation immediately
    const loadingTimer = setTimeout(() => {
      setIsRedirecting(true);
      window.location.href = 'https://www.etsy.com/shop/ZephileaAtelier';
    }, 10000);
    
    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <div>
      <Head>
        <meta name="theme-color" content="#4f46e5" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      
      <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="w-full max-w-md mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="p-6 sm:p-8 text-center">
                <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-white shadow-sm overflow-hidden border-4 border-white ring-2 ring-indigo-100">
                  <Image 
                    src={getAssetPath('/zephilea.png')} 
                    alt="Zephilea Logo"
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                    priority
                    sizes="(max-width: 640px) 112px, 128px"
                  />
                </div>
                
                <div className="mb-8">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 font-serif tracking-tight">
                    Zephilea Atelier
                  </h1>
                  <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-emerald-700 mx-auto mb-4 rounded-full"></div>
                  <p className="text-lg text-gray-600 mb-6">
                  Crafted by nature, perfected by hand.
                  </p>
                  
                  <div className="max-w-xs mx-auto">
                    <LoadingBar />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-block w-full"
                  >
                    <a 
                      href="https://www.etsy.com/shop/ZephileaAtelier" 
                      className="inline-flex items-center justify-center w-full px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium text-white bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 shadow-md hover:shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit our Etsy shop"
                    >
                      <span>Explore Our Etsy Shop</span>
                      <svg className="ml-2 -mr-1 w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </motion.div>
                  
                  <p className="text-sm text-emerald-800/80">
                    You'll be automatically redirected in a moment
                  </p>
                </div>
              </div>
            </motion.div>
            
            {isRedirecting && (
              <motion.div
                key="redirecting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm"
              >
                <div className="text-center p-6">
                  <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-700">Taking you to our Etsy shop...</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} Zephilea Atelier. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
