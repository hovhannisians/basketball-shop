'use client';

import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import FilterBar from '@/components/FilterBar';

export default function Home() {
  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const featuredProducts = products.slice(0, 3); // Get first 3 products as featured

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="relative h-[65vh] md:h-[75vh] flex items-center justify-center text-center overflow-hidden rounded-b-4xl shadow-2xl dark:shadow-black/80"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-basketball.webp"
            alt="Basketball Gear"
            fill
            className="object-cover brightness-75 dark:brightness-50"
            quality={90}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent dark:from-black/80 dark:via-transparent dark:to-transparent" />
          <div className="absolute inset-0 bg-glass-effect" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center p-6 max-w-4xl mx-auto text-white">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.7 } }}
          >
            Elevate Your Game
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-10 max-w-3xl drop-shadow-md"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.7 } }}
          >
            Discover premium basketball gear, apparel, and accessories designed for peak performance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.7, duration: 0.5 } }}
          >
            <Button asChild size="lg" className="px-10 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/#products">Shop All Products</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Products Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="container mx-auto px-4 md:px-6"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">
          Featured Essentials
        </motion.h2>
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} featured />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Filter Bar */}
      <FilterBar />

      {/* All Products Section */}
      <motion.section
        id="products"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="container mx-auto px-4 md:px-6"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">
          Explore Our Collection
        </motion.h2>
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}

// Tailwind CSS glass effect utility class
// Add this to your global CSS if not present:
// .bg-glass-effect {
//   background: rgba(255, 255, 255, 0.1);
//   backdrop-filter: saturate(180%) blur(20px);
// }
