"use client";

import React from 'react';
import { Product } from '@/data/products';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <Image src={product.imageUrl} alt={product.name} width={200} height={200} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-700 mb-2">${product.price.toFixed(2)}</p>
      <p className="text-gray-500 text-sm mb-4">{product.description}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
