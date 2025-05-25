import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
      {/* Image Section with fixed width and height */}
      <div className="w-[150px] h-[150px] mb-6 relative"> {/* Increased bottom margin */}
        <Image
          src={product.image} // Path to the product image
          alt={product.name}
          width={150} // Fixed width for the image
          height={150} // Fixed height for the image
          className="rounded-lg object-cover" // Ensures the image covers the area without distortion
        />
      </div>

      {/* Product Name */}
      <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>

      {/* Product Description */}
      <p className="text-gray-600 mt-2">{product.description}</p>

      {/* Product Price */}
      <p className="text-lg font-bold text-gray-900 mt-2">${product.price.toFixed(2)}</p>

      {/* Add to Cart Button */}
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
