import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GetServerSidePropsContext } from 'next';
import Navbar from '../../app/components/Navbar';
import Footer from '../../app/components/Footer';

// Define the type for a phone case
interface PhoneCase {
  id: number;
  model: string;
  name: string;
  image: string;
  description: string;
  price: number;
  rating: number;
  brand?: string;
}

// Define the type for the props
interface ProductPageProps {
  phoneCase: PhoneCase | null;
  device: string;
}

// Sample data for iPhone cases (X to 16) - UNCHANGED
const iphoneCases: PhoneCase[] = [
  { id: 1, model: 'iPhone X', name: 'iPhone X Hard Case', image: '/images/case1.png', description: 'Durable hard case for iPhone X.', price: 19.99, rating: 4.5 },
  { id: 2, model: 'iPhone X', name: 'iPhone X Silicone Case', image: '/images/case2.png', description: 'Soft silicone case for iPhone X.', price: 24.99, rating: 4.0 },
  { id: 3, model: 'iPhone 11', name: 'iPhone 11 Glass Case', image: '/images/case3.png', description: 'Elegant glass case for iPhone 11.', price: 29.99, rating: 4.8 },
  { id: 4, model: 'iPhone 11', name: 'iPhone 11 Hybrid Case', image: '/images/case4.png', description: 'Hybrid matte case for iPhone 11.', price: 27.99, rating: 4.2 },
  { id: 5, model: 'iPhone 12', name: 'iPhone 12 Hard Case', image: '/images/case1.png', description: 'Sturdy hard case for iPhone 12.', price: 22.99, rating: 4.3 },
  { id: 6, model: 'iPhone 12', name: 'iPhone 12 Silicone Case', image: '/images/case2.png', description: 'Comfortable silicone case for iPhone 12.', price: 26.99, rating: 4.1 },
  { id: 7, model: 'iPhone 13', name: 'iPhone 13 Glass Case', image: '/images/case3.png', description: 'Premium glass case for iPhone 13.', price: 32.99, rating: 4.7 },
  { id: 8, model: 'iPhone 13', name: 'iPhone 13 Hybrid Case', image: '/images/case4.png', description: 'Sleek hybrid case for iPhone 13.', price: 28.99, rating: 4.4 },
  { id: 9, model: 'iPhone 14', name: 'iPhone 14 Hard Case', image: '/images/case1.png', description: 'Durable hard case for iPhone 14.', price: 29.99, rating: 4.6 },
  { id: 10, model: 'iPhone 14', name: 'iPhone 14 Silicone Case', image: '/images/case2.png', description: 'Soft silicone case for iPhone 14.', price: 24.99, rating: 4.0 },
  { id: 11, model: 'iPhone 15', name: 'iPhone 15 Glass Case', image: '/images/case3.png', description: 'Elegant glass case for iPhone 15.', price: 34.99, rating: 4.9 },
  { id: 12, model: 'iPhone 15', name: 'iPhone 15 Hybrid Case', image: '/images/case4.png', description: 'Hybrid matte case for iPhone 15.', price: 27.99, rating: 4.3 },
  { id: 13, model: 'iPhone 16', name: 'iPhone 16 Hard Case', image: '/images/case1.png', description: 'Sturdy hard case for iPhone 16.', price: 31.99, rating: 4.5 },
  { id: 14, model: 'iPhone 16', name: 'iPhone 16 Silicone Case', image: '/images/case2.png', description: 'Premium silicone case for iPhone 16.', price: 29.99, rating: 4.2 },
];

// Sample data for Google Pixel cases (Pixel 4 to Pixel 9) - UNCHANGED
const pixelCases: PhoneCase[] = [
  { id: 1, model: 'Pixel 4', name: 'Pixel 4 Hard Case', image: '/images/pixel_case1.png', description: 'Durable hard case for Pixel 4.', price: 19.99, rating: 4.1 },
  { id: 2, model: 'Pixel 4', name: 'Pixel 4 Silicone Case', image: '/images/pixel_case2.png', description: 'Soft silicone case for Pixel 4.', price: 24.99, rating: 4.0 },
  { id: 3, model: 'Pixel 5', name: 'Pixel 5 Glass Case', image: '/images/pixel_case3.png', description: 'Elegant glass case for Pixel 5.', price: 29.99, rating: 4.6 },
  { id: 4, model: 'Pixel 5', name: 'Pixel 5 Hybrid Case', image: '/images/pixel_case4.png', description: 'Hybrid matte case for Pixel 5.', price: 27.99, rating: 4.2 },
  { id: 5, model: 'Pixel 6', name: 'Pixel 6 Hard Case', image: '/images/pixel_case1.png', description: 'Sturdy hard case for Pixel 6.', price: 22.99, rating: 4.3 },
  { id: 6, model: 'Pixel 6', name: 'Pixel 6 Silicone Case', image: '/images/pixel_case2.png', description: 'Comfortable silicone case for Pixel 6.', price: 26.99, rating: 4.1 },
  { id: 7, model: 'Pixel 7', name: 'Pixel 7 Glass Case', image: '/images/pixel_case3.png', description: 'Premium glass case for Pixel 7.', price: 32.99, rating: 4.7 },
  { id: 8, model: 'Pixel 7', name: 'Pixel 7 Hybrid Case', image: '/images/pixel_case4.png', description: 'Sleek hybrid case for Pixel 7.', price: 28.99, rating: 4.4 },
  { id: 9, model: 'Pixel 8', name: 'Pixel 8 Hard Case', image: '/images/pixel_case1.png', description: 'Durable hard case for Pixel 8.', price: 29.99, rating: 4.5 },
  { id: 10, model: 'Pixel 8', name: 'Pixel 8 Silicone Case', image: '/images/pixel_case2.png', description: 'Soft silicone case for Pixel 8.', price: 24.99, rating: 4.0 },
  { id: 11, model: 'Pixel 9', name: 'Pixel 9 Glass Case', image: '/images/pixel_case3.png', description: 'Elegant glass case for Pixel 9.', price: 34.99, rating: 4.8 },
  { id: 12, model: 'Pixel 9', name: 'Pixel 9 Hybrid Case', image: '/images/pixel_case4.png', description: 'Hybrid matte case for Pixel 9.', price: 27.99, rating: 4.3 },
];

// Sample data for Samsung cases (Galaxy S20 to S24) - UNCHANGED
const samsungCases: PhoneCase[] = [
  { id: 1, model: 'Galaxy S20', name: 'Galaxy S20 Hard Case', image: '/images/cases/1.png', description: 'Durable hard case for Galaxy S20.', price: 20.99, rating: 4.2 },
  { id: 2, model: 'Galaxy S20', name: 'Galaxy S20 Silicone Case', image: '/images/samsung_case2.png', description: 'Soft silicone case for Galaxy S20.', price: 25.99, rating: 4.0 },
  { id: 3, model: 'Galaxy S21', name: 'Galaxy S21 Glass Case', image: '/images/samsung_case3.png', description: 'Elegant glass case for Galaxy S21.', price: 30.99, rating: 4.6 },
  { id: 4, model: 'Galaxy S21', name: 'Galaxy S21 Hybrid Case', image: '/images/samsung_case4.png', description: 'Hybrid matte case for Galaxy S21.', price: 28.99, rating: 4.3 },
  { id: 5, model: 'Galaxy S22', name: 'Galaxy S22 Hard Case', image: '/images/samsung_case1.png', description: 'Sturdy hard case for Galaxy S22.', price: 23.99, rating: 4.1 },
  { id: 6, model: 'Galaxy S22', name: 'Galaxy S22 Silicone Case', image: '/images/samsung_case2.png', description: 'Comfortable silicone case for Galaxy S22.', price: 27.99, rating: 4.4 },
  { id: 7, model: 'Galaxy S23', name: 'Galaxy S23 Glass Case', image: '/images/samsung_case3.png', description: 'Premium glass case for Galaxy S23.', price: 33.99, rating: 4.7 },
  { id: 8, model: 'Galaxy S23', name: 'Galaxy S23 Hybrid Case', image: '/images/samsung_case4.png', description: 'Sleek hybrid case for Galaxy S23.', price: 29.99, rating: 4.5 },
  { id: 9, model: 'Galaxy S24', name: 'Galaxy S24 Hard Case', image: '/images/samsung_case1.png', description: 'Durable hard case for Galaxy S24.', price: 31.99, rating: 4.6 },
  { id: 10, model: 'Galaxy S24', name: 'Galaxy S24 Silicone Case', image: '/images/samsung_case2.png', description: 'Soft silicone case for Galaxy S24.', price: 26.99, rating: 4.2 },
];

// Updated data for Other Devices (OnePlus, Xiaomi, Oppo, Vivo, Realme, Motorola) - UNCHANGED
const otherCases: PhoneCase[] = [
  { id: 1, brand: 'OnePlus', model: 'OnePlus 9', name: 'OnePlus 9 Hard Case', image: '/images/other_case1.png', description: 'Durable hard case for OnePlus 9.', price: 18.99, rating: 4.0 },
  { id: 2, brand: 'OnePlus', model: 'OnePlus 9', name: 'OnePlus 9 Silicone Case', image: '/images/other_case2.png', description: 'Soft silicone case for OnePlus 9.', price: 23.99, rating: 4.2 },
  { id: 3, brand: 'OnePlus', model: 'OnePlus 10 Pro', name: 'OnePlus 10 Pro Glass Case', image: '/images/other_case3.png', description: 'Elegant glass case for OnePlus 10 Pro.', price: 28.99, rating: 4.5 },
  { id: 4, brand: 'OnePlus', model: 'OnePlus 10 Pro', name: 'OnePlus 10 Pro Hybrid Case', image: '/images/other_case4.png', description: 'Hybrid matte case for OnePlus 10 Pro.', price: 26.99, rating: 4.3 },
  { id: 5, brand: 'Xiaomi', model: 'Xiaomi 13', name: 'Xiaomi 13 Hard Case', image: '/images/other_case1.png', description: 'Sturdy hard case for Xiaomi 13.', price: 21.99, rating: 4.1 },
  { id: 6, brand: 'Xiaomi', model: 'Xiaomi 13', name: 'Xiaomi 13 Silicone Case', image: '/images/other_case2.png', description: 'Comfortable silicone case for Xiaomi 13.', price: 25.99, rating: 4.4 },
  { id: 7, brand: 'Xiaomi', model: 'Xiaomi 14', name: 'Xiaomi 14 Glass Case', image: '/images/other_case3.png', description: 'Premium glass case for Xiaomi 14.', price: 31.99, rating: 4.6 },
  { id: 8, brand: 'Xiaomi', model: 'Xiaomi 14', name: 'Xiaomi 14 Hybrid Case', image: '/images/other_case4.png', description: 'Sleek hybrid case for Xiaomi 14.', price: 27.99, rating: 4.2 },
  { id: 9, brand: 'Oppo', model: 'Oppo Find X5', name: 'Oppo Find X5 Hard Case', image: '/images/other_case1.png', description: 'Durable hard case for Oppo Find X5.', price: 22.99, rating: 4.0 },
  { id: 10, brand: 'Oppo', model: 'Oppo Find X5', name: 'Oppo Find X5 Silicone Case', image: '/images/other_case2.png', description: 'Soft silicone case for Oppo Find X5.', price: 26.99, rating: 4.3 },
  { id: 11, brand: 'Oppo', model: 'Oppo Reno 8', name: 'Oppo Reno 8 Glass Case', image: '/images/other_case3.png', description: 'Elegant glass case for Oppo Reno 8.', price: 30.99, rating: 4.5 },
  { id: 12, brand: 'Oppo', model: 'Oppo Reno 8', name: 'Oppo Reno 8 Hybrid Case', image: '/images/other_case4.png', description: 'Hybrid matte case for Oppo Reno 8.', price: 28.99, rating: 4.1 },
  { id: 13, brand: 'Vivo', model: 'Vivo V25', name: 'Vivo V25 Hard Case', image: '/images/other_case1.png', description: 'Durable hard case for Vivo V25.', price: 20.99, rating: 4.0 },
  { id: 14, brand: 'Vivo', model: 'Vivo V25', name: 'Vivo V25 Silicone Case', image: '/images/other_case2.png', description: 'Soft silicone case for Vivo V25.', price: 24.99, rating: 4.2 },
  { id: 15, brand: 'Vivo', model: 'Vivo X80', name: 'Vivo X80 Glass Case', image: '/images/other_case3.png', description: 'Premium glass case for Vivo X80.', price: 29.99, rating: 4.6 },
  { id: 16, brand: 'Vivo', model: 'Vivo X80', name: 'Vivo X80 Hybrid Case', image: '/images/other_case4.png', description: 'Sleek hybrid case for Vivo X80.', price: 27.99, rating: 4.3 },
  { id: 17, brand: 'Realme', model: 'Realme 9 Pro', name: 'Realme 9 Pro Hard Case', image: '/images/other_case1.png', description: 'Durable hard case for Realme 9 Pro.', price: 19.99, rating: 4.1 },
  { id: 18, brand: 'Realme', model: 'Realme 9 Pro', name: 'Realme 9 Pro Silicone Case', image: '/images/other_case2.png', description: 'Soft silicone case for Realme 9 Pro.', price: 23.99, rating: 4.0 },
  { id: 19, brand: 'Realme', model: 'Realme GT 2', name: 'Realme GT 2 Glass Case', image: '/images/other_case3.png', description: 'Elegant glass case for Realme GT 2.', price: 28.99, rating: 4.4 },
  { id: 20, model: 'Realme GT 2', name: 'Realme GT 2 Hybrid Case', image: '/images/other_case4.png', description: 'Hybrid matte case for Realme GT 2.', price: 26.99, rating: 4.2, brand: 'Realme' },
  { id: 21, brand: 'Motorola', model: 'Motorola Edge 40', name: 'Motorola Edge 40 Hard Case', image: '/images/other_case1.png', description: 'Durable hard case for Motorola Edge 40.', price: 21.99, rating: 4.0 },
  { id: 22, brand: 'Motorola', model: 'Motorola Edge 40', name: 'Motorola Edge 40 Silicone Case', image: '/images/other_case2.png', description: 'Soft silicone case for Motorola Edge 40.', price: 25.99, rating: 4.3 },
  { id: 23, brand: 'Motorola', model: 'Motorola Razr 2023', name: 'Motorola Razr 2023 Glass Case', image: '/images/other_case3.png', description: 'Elegant glass case for Motorola Razr 2023.', price: 32.99, rating: 4.7 },
  { id: 24, brand: 'Motorola', model: 'Motorola Razr 2023', name: 'Motorola Razr 2023 Hybrid Case', image: '/images/other_case4.png', description: 'Hybrid matte case for Motorola Razr 2023.', price: 29.99, rating: 4.4 },
];

// Function to convert USD to INR
const convertToINR = (usd: number): number => {
  const exchangeRate = 83; // 1 USD = 83 INR (approximate as of May 2025)
  return usd * exchangeRate;
};

// Function to render star ratings with safeguards
const renderStars = (rating: number | undefined) => {
  const safeRating = typeof rating === 'number' && rating >= 0 && rating <= 5 ? rating : 0;
  const filledStars = Math.floor(safeRating);
  const halfStar = safeRating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - filledStars - halfStar;

  return (
    <div className="flex items-center space-x-1 group">
      {[...Array(filledStars)].map((_, index) => (
        <svg
          key={`filled-${index}`}
          className="w-5 h-5 text-yellow-500 transition-transform duration-200 group-hover:scale-110"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.314 9.397c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
        </svg>
      ))}
      {halfStar === 1 && (
        <svg
          className="w-5 h-5 text-yellow-500 transition-transform duration-200 group-hover:scale-110"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#d1d5db" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.314 9.397c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z"
          />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <svg
          key={`empty-${index}`}
          className="w-5 h-5 text-gray-300 transition-transform duration-200 group-hover:scale-110"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.314 9.397c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
        </svg>
      ))}
      <span className="text-gray-700 text-sm ml-2 font-medium">({safeRating.toFixed(1)})</span>
    </div>
  );
};

// Server-side props to fetch the phone case by ID
export async function getServerSideProps(context: GetServerSidePropsContext<{ id: string }>) {
  const id = parseInt(context.params?.id || '0', 10);
  let phoneCase: PhoneCase | null = null;
  let device = '';

  // Search for the phone case in each category
  phoneCase = iphoneCases.find((c) => c.id === id);
  if (phoneCase) {
    device = 'iphone';
  } else {
    phoneCase = pixelCases.find((c) => c.id === id);
    if (phoneCase) {
      device = 'pixel';
    } else {
      phoneCase = samsungCases.find((c) => c.id === id);
      if (phoneCase) {
        device = 'samsung';
      } else {
        phoneCase = otherCases.find((c) => c.id === id);
        if (phoneCase) {
          device = 'other';
        }
      }
    }
  }

  return {
    props: {
      phoneCase: phoneCase || null,
      device,
    },
  };
}

const ProductPage: React.FC<ProductPageProps> = ({ phoneCase, device }) => {
  // State for dropdowns
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);

  // Determine the device display name for breadcrumb
  const deviceDisplayName = device === 'iphone' ? 'iPhone' : device === 'pixel' ? 'Google Pixel' : device === 'samsung' ? 'Samsung' : device === 'other' ? 'Other Devices' : device.charAt(0).toUpperCase() + device.slice(1);

  if (!phoneCase) {
    return (
      <div className="font-inter bg-gray-100 min-h-screen">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-20 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Product Not Found
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            The phone case you are looking for does not exist.
          </p>
          <Link
            href={`/${device || ''}`}
            className="inline-block bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-indigo-700 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Back to Cases
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-inter bg-gray-100 min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-20">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-sm text-gray-600 mb-8 space-x-2">
          <Link href="/" className="hover:text-indigo-600 transition-colors font-medium">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <Link href={`/${device}`} className="hover:text-indigo-600 transition-colors font-medium">
            {deviceDisplayName} Cases
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">{phoneCase.name}</span>
        </nav>

        {/* Product Details */}
        <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-5xl mx-auto border border-gray-100 bg-gradient-to-br from-white to-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Image */}
            <div className="relative w-full h-96 sm:h-[500px] mx-auto overflow-hidden rounded-2xl group shadow-lg">
              <Image
                src={phoneCase.image}
                alt={phoneCase.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain rounded-2xl transition-transform duration-500 group-hover:scale-110"
                priority
              />
              {/* In Stock Badge */}
              <span className="absolute top-4 left-4 bg-emerald-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md">
                In Stock
              </span>
            </div>

            {/* Details */}
            <div className="w-full space-y-6">
              <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">{phoneCase.name}</h1>
              <div className="flex items-center space-x-3 text-gray-700">
                <span className="font-semibold">Model:</span>
                <span>{phoneCase.model}</span>
              </div>
              {phoneCase.brand && (
                <div className="flex items-center space-x-3 text-gray-700">
                  <span className="font-semibold">Brand:</span>
                  <span>{phoneCase.brand}</span>
                </div>
              )}
              <div className="flex items-center">{renderStars(phoneCase.rating)}</div>
              <p className="text-gray-700 text-lg leading-relaxed">{phoneCase.description}</p>
              <p className="text-3xl font-bold text-indigo-600">
                ₹{convertToINR(phoneCase.price).toFixed(2)}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-indigo-700 hover:scale-105 transition-all duration-300 shadow-lg"
                  onClick={() => alert('Add to Cart functionality not implemented')}
                >
                  Add to Cart
                </button>
                <Link
                  href={`/${device}`}
                  className="bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-full hover:bg-gray-300 hover:scale-105 transition-all duration-300 shadow-lg text-center"
                >
                  Back to Cases
                </Link>
              </div>

              {/* Additional Small Image (aa.png) */}
              <div className="relative w-48 h-48 mt-6">
                <Image
                  src="/images/aa.png"
                  alt="Additional view of the phone case"
                  fill
                  sizes="200px"
                  className="object-contain rounded-lg border border-gray-200 shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-12 border-gray-200" />

          {/* Product Details Dropdown */}
          <div className="space-y-4">
            <button
              onClick={() => setIsDetailsOpen(!isDetailsOpen)}
              className="w-full flex justify-between items-center text-2xl font-bold text-gray-900 focus:outline-none"
            >
              <span>Product Details</span>
              <svg
                className={`w-6 h-6 text-indigo-600 transition-transform duration-300 ${isDetailsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDetailsOpen && (
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 transition-all duration-300">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="text-indigo-500">•</span>
                    <div>
                      <span className="font-semibold">Material:</span> High-quality {phoneCase.name.includes('Silicone') ? 'Silicone' : phoneCase.name.includes('Glass') ? 'Tempered Glass' : phoneCase.name.includes('Hybrid') ? 'Hybrid (PC + TPU)' : 'Polycarbonate'}
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-indigo-500">•</span>
                    <div>
                      <span className="font-semibold">Compatibility:</span> Designed specifically for {phoneCase.model}
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-indigo-500">•</span>
                    <div>
                      <span className="font-semibold">Features:</span> {phoneCase.name.includes('Silicone') ? 'Anti-slip grip, shock-absorbent' : phoneCase.name.includes('Glass') ? 'Scratch-resistant, glossy finish' : phoneCase.name.includes('Hybrid') ? 'Dual-layer protection, raised edges' : 'Slim profile, impact-resistant'}
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-indigo-500">•</span>
                    <div>
                      <span className="font-semibold">Protection Level:</span> {phoneCase.name.includes('Silicone') ? 'Moderate' : phoneCase.name.includes('Glass') ? 'High (scratch protection)' : phoneCase.name.includes('Hybrid') ? 'High (drop protection)' : 'Standard'}
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-indigo-500">•</span>
                    <div>
                      <span className="font-semibold">Design Style:</span> {phoneCase.name.includes('Silicone') ? 'Minimalist, soft-touch' : phoneCase.name.includes('Glass') ? 'Elegant, transparent' : phoneCase.name.includes('Hybrid') ? 'Rugged, matte finish' : 'Sleek, glossy'}
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-indigo-500">•</span>
                    <div>
                      <span className="font-semibold">Warranty:</span> 6 months limited warranty
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Divider */}
          <hr className="my-12 border-gray-200" />

          {/* Specifications Dropdown */}
          <div className="space-y-4">
            <button
              onClick={() => setIsSpecsOpen(!isSpecsOpen)}
              className="w-full flex justify-between items-center text-2xl font-bold text-gray-900 focus:outline-none"
            >
              <span>Specifications</span>
              <svg
                className={`w-6 h-6 text-indigo-600 transition-transform duration-300 ${isSpecsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isSpecsOpen && (
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 transition-all duration-300">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="text-indigo-500">•</span>
                    <div>
                      <span className="font-semibold">Dimensions:</span> {phoneCase.name.includes('iPhone') ? '150 x 75 x 10 mm' : phoneCase.name.includes('Pixel') ? '155 x 78 x 9 mm' : phoneCase.name.includes('Galaxy') ? '160 x 80 x 11 mm' : '152 x 76 x 10 mm'} (L x W x H)
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-indigo-500">•</span>
                    <div>
                      <span className="font-semibold">Weight:</span> {phoneCase.name.includes('Silicone') ? '35g' : phoneCase.name.includes('Glass') ? '45g' : phoneCase.name.includes('Hybrid') ? '50g' : '40g'}
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-indigo-500">•</span>
                    <div>
                      <span className="font-semibold">Color:</span> {phoneCase.name.includes('Silicone') ? 'Matte Black' : phoneCase.name.includes('Glass') ? 'Clear' : phoneCase.name.includes('Hybrid') ? 'Black/Grey' : 'Glossy Black'}
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-indigo-500">•</span>
                    <div>
                      <span className="font-semibold">Drop Protection:</span> Up to {phoneCase.name.includes('Hybrid') ? '2 meters' : '1.5 meters'}
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-indigo-500">•</span>
                    <div>
                      <span className="font-semibold">Port Accessibility:</span> Precise cutouts for all ports, buttons, and cameras
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-indigo-500">•</span>
                    <div>
                      <span className="font-semibold">Wireless Charging:</span> Compatible
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;