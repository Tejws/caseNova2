// src/components/Cart.tsx
import React from 'react';

const Cart: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Your Cart</h2>
      <p className="mt-4">No items in your cart</p>
      {/* Cart item list will go here */}
    </div>
  );
};

export default Cart;
