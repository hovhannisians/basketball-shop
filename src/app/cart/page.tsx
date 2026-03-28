
import React from 'react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center border rounded-lg p-4 shadow-sm">
              <Image src={item.imageUrl} alt={item.name} width={80} height={80} className="w-20 h-20 object-cover rounded-md mr-4" />
              <div className="flex-grow">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-700">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
                >
                  -
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-right text-2xl font-bold mt-8">
            Total: ${cartTotal.toFixed(2)}
          </div>
          <div className="text-right mt-4">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-green-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
