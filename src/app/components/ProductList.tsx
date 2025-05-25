// src/components/ProductList.tsx
import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: '1',
    name: 'Leather Cover 1',
    description: 'A high-quality leather phone cover.',
    price: 19.99,
    image: 'leather_cover_1.png',
  },
  // Add more products here
];

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
