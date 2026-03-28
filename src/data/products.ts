
export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Basketball Jersey',
    price: 59.99,
    imageUrl: '/images/jersey.jpg',
    description: 'High-quality basketball jersey, breathable and comfortable.',
  },
  {
    id: '2',
    name: 'Basketball Shoes',
    price: 129.99,
    imageUrl: '/images/shoes.jpg',
    description: 'Professional basketball shoes for optimal performance and support.',
  },
  {
    id: '3',
    name: 'Official Basketball',
    price: 34.99,
    imageUrl: '/images/basketball.jpg',
    description: 'Official size and weight basketball, perfect for indoor and outdoor play.',
  },
  {
    id: '4',
    name: 'Basketball Shorts',
    price: 29.99,
    imageUrl: '/images/shorts.jpg',
    description: 'Lightweight and comfortable basketball shorts for training and games.',
  },
];
