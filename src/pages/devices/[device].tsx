import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../app/components/Navbar';
import Footer from '../../app/components/Footer';
import { GetServerSidePropsContext } from 'next';

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
interface DevicePageProps {
  device: string;
  cases: PhoneCase[];
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
  { id: 20, brand: 'Realme', model: 'Realme GT 2', name: 'Realme GT 2 Hybrid Case', image: '/images/other_case4.png', description: 'Hybrid matte case for Realme GT 2.', price: 26.99, rating: 4.2 },
  { id: 21, brand: 'Motorola', model: 'Motorola Edge 40', name: 'Motorola Edge 40 Hard Case', image: '/images/other_case1.png', description: 'Durable hard case for Motorola Edge 40.', price: 21.99, rating: 4.0 },
  { id: 22, brand: 'Motorola', model: 'Motorola Edge 40', name: 'Motorola Edge 40 Silicone Case', image: '/images/other_case2.png', description: 'Soft silicone case for Motorola Edge 40.', price: 25.99, rating: 4.3 },
  { id: 23, brand: 'Motorola', model: 'Motorola Razr 2023', name: 'Motorola Razr 2023 Glass Case', image: '/images/other_case3.png', description: 'Elegant glass case for Motorola Razr 2023.', price: 32.99, rating: 4.7 },
  { id: 24, brand: 'Motorola', model: 'Motorola Razr 2023', name: 'Motorola Razr 2023 Hybrid Case', image: '/images/other_case4.png', description: 'Hybrid matte case for Motorola Razr 2023.', price: 29.99, rating: 4.4 },
];

// Server-side data fetching with proper typing
export async function getServerSideProps(context: GetServerSidePropsContext<{ device: string }>) {
  const device = context.params?.device || '';
  let cases: PhoneCase[] = [];
  const deviceLower = device.toLowerCase();
  if (deviceLower === 'iphone') {
    cases = iphoneCases;
  } else if (deviceLower === 'pixel') {
    cases = pixelCases;
  } else if (deviceLower === 'samsung') {
    cases = samsungCases;
  } else if (deviceLower === 'other') {
    cases = otherCases;
  }

  return {
    props: {
      device: deviceLower,
      cases,
    },
  };
}

// Function to convert USD to INR
const convertToINR = (usd: number): number => {
  const exchangeRate = 83; // 1 USD = 83 INR (approximate as of May 2025)
  return usd * exchangeRate;
};

// Function to render star ratings with safeguards
const renderStars = (rating: number | undefined) => {
  // Default to 0 if rating is undefined or invalid
  const safeRating = typeof rating === 'number' && rating >= 0 && rating <= 5 ? rating : 0;
  
  const filledStars = Math.floor(safeRating); // Number of filled stars
  const halfStar = safeRating % 1 >= 0.5 ? 1 : 0; // Check for half star
  const emptyStars = 5 - filledStars - halfStar; // Remaining empty stars

  return (
    <div className="flex items-center space-x-1">
      {/* Filled Stars */}
      {[...Array(filledStars)].map((_, index) => (
        <svg
          key={`filled-${index}`}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.314 9.397c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
        </svg>
      ))}
      {/* Half Star */}
      {halfStar === 1 && (
        <svg
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="gray" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.314 9.397c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z"
          />
        </svg>
      )}
      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <svg
          key={`empty-${index}`}
          className="w-5 h-5 text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.314 9.397c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
        </svg>
      ))}
      <span className="text-gray-600 text-sm ml-2">({safeRating.toFixed(1)})</span>
    </div>
  );
};

const DevicePage: React.FC<DevicePageProps> = ({ device, cases }) => {
  const [selectedModel, setSelectedModel] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  // List of brands for the "other" device section
  const brands = device === 'other' ? ['OnePlus', 'Oppo', 'Realme', 'Vivo', 'Xiaomi', 'Motorola'] : [];

  // List of models for the dropdown based on device or selected brand
  let models: string[] = [];
  if (device === 'other') {
    models = selectedBrand
      ? ['All', ...new Set(cases.filter((c) => c.brand === selectedBrand).map((c) => c.model))]
      : ['All', ...new Set(cases.map((c) => c.model))];
  } else if (device === 'iphone') {
    models = ['All', 'iPhone X', 'iPhone 11', 'iPhone 12', 'iPhone 13', 'iPhone 14', 'iPhone 15', 'iPhone 16'];
  } else if (device === 'pixel') {
    models = ['All', 'Pixel 4', 'Pixel 5', 'Pixel 6', 'Pixel 7', 'Pixel 8', 'Pixel 9'];
  } else if (device === 'samsung') {
    models = ['All', 'Galaxy S20', 'Galaxy S21', 'Galaxy S22', 'Galaxy S23', 'Galaxy S24'];
  } else {
    models = ['All'];
  }

  // Filter cases based on selected brand (for "other" devices) and model
  const filteredCases = device === 'other'
    ? selectedBrand
      ? selectedModel === 'All'
        ? cases.filter((c) => c.brand === selectedBrand)
        : cases.filter((c) => c.brand === selectedBrand && c.model === selectedModel)
      : selectedModel === 'All'
      ? cases
      : cases.filter((c) => c.model === selectedModel)
    : selectedModel === 'All'
    ? cases
    : cases.filter((c) => c.model === selectedModel);

  // Determine the device display name
  const deviceDisplayName = device === 'iphone' ? 'iPhone' : device === 'pixel' ? 'Google Pixel' : device === 'samsung' ? 'Samsung' : device === 'other' ? 'Other Devices' : device.charAt(0).toUpperCase() + device.slice(1);

  return (
    <div className="font-inter bg-gray-100 min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-4 py-12 mt-24">
        {/* Device Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 tracking-tight">
          {deviceDisplayName} Cases
        </h2>

        {/* Filters Section at the Top */}
        <div className="mb-8 flex flex-col lg:flex-row lg:items-center lg:space-x-6 space-y-4 lg:space-y-0">
          {/* Brand Selection for "other" devices */}
          {device === 'other' && (
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Device:</label>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => {
                      setSelectedBrand(brand);
                      setSelectedModel('All'); // Reset model when brand changes
                    }}
                    className={`py-1 px-3 rounded-lg border ${
                      selectedBrand === brand
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    } transition duration-200 shadow-sm`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Model Selection Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="model-select" className="block text-sm font-medium text-gray-700 mb-2">
              Select Model:
            </label>
            <select
              id="model-select"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="w-full lg:w-64 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white shadow-sm"
            >
              {models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Cases Grid */}
        {filteredCases.length === 0 ? (
          <div className="text-center">
            <p className="text-xl text-gray-600 mb-8">
              No cases found for {selectedModel === 'All' ? deviceDisplayName : selectedModel}.
            </p>
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200 shadow-sm"
            >
              Back to Home
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredCases.map((phoneCase) => (
              <Link href={`/product/${phoneCase.id}`} key={phoneCase.id}>
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-200 ease-in-out w-full max-w-[400px] mx-auto border border-gray-100 cursor-pointer">
                  <div className="relative w-80 h-80 mx-auto mb-6 p-0">
                    <Image
                      src={phoneCase.image}
                      alt={phoneCase.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 400px"
                      className="object-contain rounded-lg"
                      priority
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{phoneCase.name}</h3>
                  <p className="text-gray-500 text-base mb-4 line-clamp-2">{phoneCase.description}</p>
                  {/* Ratings */}
                  <div className="mb-4">{renderStars(phoneCase.rating)}</div>
                  {/* Price in INR only */}
                  <p className="text-gray-800 text-xl font-bold mb-6">Rs {convertToINR(phoneCase.price).toFixed(2)}</p>
                  <div className="block text-center bg-blue-600 text-white font-medium py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-200 shadow-sm">
                    View Details
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Back to Home Button */}
        <div className="py-12 text-center">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white font-medium py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-200 shadow-sm"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DevicePage;