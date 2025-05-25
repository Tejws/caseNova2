// src/components/Header.tsx
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">CaseNova</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/category/hard-matte">Hard/Matte Cases</Link>
            </li>
            <li>
              <Link href="/category/soft-silicone">Soft/Silicone Cases</Link>
            </li>
            <li>
              <Link href="/checkout">Checkout</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
