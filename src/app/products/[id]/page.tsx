"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products, Product } from '../../../data/products';
import { useCart } from '../../../context/CartContext';

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const foundProduct = products.find(p => p.id === params.id);
      if (foundProduct) {
        setProduct(foundProduct);
      }
      setLoading(false);
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-black text-zinc-900 mb-4">Product Not Found</h1>
        <p className="text-zinc-500 mb-8">The gear you're looking for doesn't exist or has been removed.</p>
        <Link 
          href="/products" 
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-orange-600">
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-3 h-3 text-zinc-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <Link href="/products" className="ml-1 text-sm font-medium text-zinc-500 hover:text-orange-600 md:ml-2">
                Products
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="w-3 h-3 text-zinc-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span className="ml-1 text-sm font-medium text-zinc-900 md:ml-2">{product.name}</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="mb-2">
            <span className="bg-orange-100 text-orange-800 text-xs font-bold px-2.5 py-0.5 rounded uppercase tracking-wide">
              {product.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight">
            {product.name}
          </h1>
          <p className="text-3xl font-bold text-orange-600 mb-6">
            ${product.price.toFixed(2)}
          </p>
          
          <div className="prose prose-zinc mb-8">
            <p className="text-lg text-zinc-600 leading-relaxed">
              {product.description}
            </p>
          </div>
          
          <div className="border-t border-zinc-200 pt-8 mt-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  addToCart(product);
                  router.push('/cart');
                }}
                className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full transition-colors flex items-center justify-center gap-2 text-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="8" cy="21" r="1"/>
                  <circle cx="19" cy="21" r="1"/>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                </svg>
                Add to Cart
              </button>
              <button
                onClick={() => router.push('/products')}
                className="flex-1 bg-white border-2 border-zinc-200 hover:border-zinc-900 text-zinc-900 font-bold py-4 px-8 rounded-full transition-colors flex items-center justify-center text-lg"
              >
                Continue Shopping
              </button>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
              In Stock & Ready to Ship
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
                <rect width="16" height="16" x="4" y="4" rx="2"/>
                <rect width="6" height="6" x="9" y="9" rx="1"/>
                <path d="M15 2v2"/>
                <path d="M15 20v2"/>
                <path d="M2 15h2"/>
                <path d="M2 9h2"/>
                <path d="M20 15h2"/>
                <path d="M20 9h2"/>
                <path d="M9 2v2"/>
                <path d="M9 20v2"/>
              </svg>
              Secure Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
