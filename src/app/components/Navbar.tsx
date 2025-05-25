import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-500 fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between py-4 px-6 h-20"> {/* Ensure the height of navbar is fixed */}
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/images/CaseNova_33.png"
            alt="CaseNova Logo"
            className="h-48 object-contain" /* Increased logo height to 48 */
          />
        </div>

        {/* Menu Section */}
        <ul className="flex space-x-6 text-gray-800 font-medium">
          <li>
            <a href="#shop-posters" className="hover:text-pink-600">
              Shop Posters
            </a>
          </li>
          <li>
            <a href="#custom-posters" className="hover:text-pink-600">
              Custom Posters
            </a>
          </li>
          <li>
            <a href="#wall-collage-kit" className="hover:text-pink-600">
              Wall Collage Kit
            </a>
          </li>
          <li>
            <a href="#split-posters" className="hover:text-pink-600">
              Split Posters
            </a>
          </li>
          <li>
            <a href="#reviews" className="hover:text-pink-600">
              Reviews
            </a>
          </li>
          <li>
            <a href="#how-to-avail-offer" className="hover:text-pink-600">
              How To Avail Offer
            </a>
          </li>
          <li>
            <a href="#support" className="hover:text-pink-600">
              Support
            </a>
          </li>
        </ul>

        {/* Action Section */}
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          {/* User Icon */}
          <button className="text-gray-800 hover:text-gray-600">
            <i className="fas fa-user"></i> {/* Replace with an icon library */}
          </button>

          {/* Cart Icon */}
          <button className="relative text-gray-800 hover:text-gray-600 flex items-center">
            <img
              src="/images/cart_icon.png"
              alt="Cart Icon"
              className="h-16 w-16" /* Adjusted height and width for cart icon */
            />
            <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full px-1">
              1
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
