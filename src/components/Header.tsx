"use client";
import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const Header: React.FC = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
            HoopsHub
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Products
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-gray-300">
                Cart ({totalItems})
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
