// src/components/CategoryList.tsx
import React from 'react';
import Link from 'next/link';

interface Category {
  name: string;
  slug: string;
}

const categories: Category[] = [
  { name: 'Hard/Matte Cases', slug: 'hard-matte' },
  { name: 'Soft/Silicone Cases', slug: 'soft-silicone' },
  { name: 'Glass/UV Cases', slug: 'glass-uv' },
  { name: 'Hybrid Matte Cases', slug: 'hybrid-matte' },
  { name: 'Metal Cases', slug: 'metal' },
  { name: 'Transparent Cases', slug: 'transparent' },
];

const CategoryList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {categories.map((category) => (
        <div key={category.slug} className="border border-gray-200 p-4 rounded-md shadow-md hover:shadow-lg">
          <h3 className="text-xl font-semibold">{category.name}</h3>
          <Link href={`/category/${category.slug}`} passHref>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md mt-4">Shop Now</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
