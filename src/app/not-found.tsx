"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center bg-zinc-50 px-4 py-12 text-center dark:bg-zinc-950"
    >
      <h1 className="mb-4 text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-9xl">
        404
      </h1>
      <p className="mb-8 text-xl text-zinc-600 dark:text-zinc-400 md:text-2xl">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link href="/">
        <Button size="lg" className="px-8 py-3 text-lg">
          Go to Homepage
        </Button>
      </Link>
    </motion.div>
  );
}
