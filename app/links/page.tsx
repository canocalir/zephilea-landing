'use client';

import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube, FaGlobe, FaEnvelope, FaEtsy } from 'react-icons/fa';
import Image from 'next/image';
import Head from 'next/head';

const links = [
  {
    id: 1,
    title: 'Instagram',
    url: 'https://instagram.com/zephilea.atelier',
    icon: <FaInstagram className="w-4 h-4" />,
    color: 'from-pink-500 to-purple-600',
  },
  {
    id: 2,
    title: 'YouTube',
    url: 'https://youtube.com/@zephilea.atelier',
    icon: <FaYoutube className="w-4 h-4" />,
    color: 'from-red-500 to-red-600',
  },
  {
    id: 3,
    title: 'Etsy',
    url: 'https://www.etsy.com/shop/ZephileaAtelier',
    icon: <FaEtsy className="w-4 h-4" />,
    color: 'from-orange-500 to-amber-600',
  },
  {
    id: 4,
    title: 'Webshop',
    url: 'https://zephilea-atelier.com',
    icon: <FaGlobe className="w-4 h-4" />,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 5,
    title: 'Email',
    url: 'mailto:info@zephilea-atelier.com',
    icon: <FaEnvelope className="w-4 h-4" />,
    color: 'from-green-500 to-emerald-600',
  },
];

export default function LinksPage() {
  return (
    <div>
      <Head>
        <title>Zephilea Atelier - Crafted Elegance</title>
        <meta
          name="description"
          content="Connect with Zephilea Atelier and explore our handcrafted jewelry, care guides, and story."
        />
        <meta name="theme-color" content="#047857" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-gray-50 to-gray-100 text-gray-800">
        {/* Header */}
        <section className="text-center pt-12 pb-6">
          <div className="w-24 h-24 mx-auto rounded-full bg-white shadow-md overflow-hidden border-4 border-white ring-2 ring-emerald-100 mb-4">
            <Image
              src="/zephilea.png"
              alt="Zephilea Logo"
              width={96}
              height={96}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h1 className="text-3xl font-serif font-bold text-gray-900">Zephilea Atelier</h1>
          <p className="text-emerald-700 font-medium tracking-wide mt-2 text-base">
            Crafted by nature, perfected by hand
          </p>

          {/* Compact Links Row */}
          <div className="flex flex-wrap justify-center gap-3 mt-6 px-4">
            {links.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -2, scale: 1.03 }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${link.color} shadow-sm hover:shadow-md transition-all duration-300`}
              >
                {link.icon}
                <span>{link.title}</span>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10 space-y-12 pb-16">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-md rounded-2xl shadow-sm p-10 border border-gray-100"
          >
            <h2 className="text-3xl font-serif font-bold text-emerald-800 mb-5">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base max-w-3xl">
              <p>
                Zephilea Atelier celebrates the harmony between nature and craftsmanship. Every design is shaped by hand in Vienna, where Mediterranean calm meets Central European precision.
              </p>
              <p>
                We believe slow creation is the truest form of luxury — art that carries the soul of its maker and the rhythm of the earth.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-md rounded-2xl shadow-sm p-10 border border-gray-100"
          >
            <h2 className="text-3xl font-serif font-bold text-emerald-800 mb-5">
              Caring for Your Zephilea Piece
            </h2>
            <p className="italic text-gray-600 mb-4">
              Every Zephilea creation is born of wood, silver, and patience — it deserves the same gentle care it was made with.
            </p>
            <ul className="space-y-2 text-sm not-italic mt-3">
              <li><span className="text-emerald-600 font-semibold">•</span> Avoid water, perfume, and direct sunlight.</li>
              <li><span className="text-emerald-600 font-semibold">•</span> Store pieces in a soft, dry place when not worn.</li>
              <li><span className="text-emerald-600 font-semibold">•</span> Polish silver gently with a soft cloth only.</li>
              <li><span className="text-emerald-600 font-semibold">•</span> Treat each item with patience — beauty deepens with time.</li>
            </ul>
          </motion.section>

          <footer className="text-center text-gray-400 text-xs pt-8 pb-6">
            © {new Date().getFullYear()} Zephilea Atelier · Crafted in Vienna
          </footer>
        </div>
      </main>
    </div>
  );
}
