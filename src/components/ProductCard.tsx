'use client';

import React from 'react';
import { Product } from '@/data/products';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 15px 25px -5px rgba(0, 0, 0, 0.15)' }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className={`flex flex-col h-full overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 dark:bg-zinc-800 dark:border-zinc-700 ${featured ? 'border-2 border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : ''}`}>
        <CardHeader className="p-0 relative h-64 w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="rounded-t-2xl object-cover"
            quality={90}
            priority={featured}
          />
          {featured && (
            <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
              <Star className="h-4 w-4" /> Featured
            </div>
          )}
        </CardHeader>
        <CardContent className="flex-grow p-6">
          <CardTitle className="text-xl font-semibold mb-2 line-clamp-2">
            {product.name}
          </CardTitle>
          <CardDescription className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">
            {product.description}
          </CardDescription>
          <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            ${product.price.toFixed(2)}
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <ShoppingCart className="h-5 w-5" /> Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
