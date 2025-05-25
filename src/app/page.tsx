"use client"; // Add this directive at the top

import React, { useState, useEffect } from 'react'; // Add useState and useEffect
import ProductCard from '../app/components/ProductCard';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';

export default function Home() {
  // State for the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Add space before the posters array for better readability

  // Array of poster images for the carousel
  const posters = [
    '/images/caro1.png', // The image you provided (soft silicone cases)
    '/images/caro2.png', // Placeholder for the second poster
    '/images/caro1.png', // Placeholder for the third poster
  ];

  // Auto-swipe every 3 seconds using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % posters.length);
    }, 3000); // 3000ms = 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [posters.length]);

  return (
    <div className="font-inter bg-gray-100 min-h-screen">
      {/* Navbar Component */}
      <Navbar />

      <main className="max-w-7xl mx-auto">
        {/* Sections with padding (Carousel, Featured Products, Newly Launched Collection) */}
        <div className="px-4 sm:px-8 py-12">
          {/* Carousel Section with margin-top */}
          <div className="w-full h-[400px] sm:h-[500px] relative overflow-hidden mt-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {posters.map((poster, index) => (
                <div key={index} className="min-w-full h-[400px] sm:h-[500px] relative">
                  <Image
                    src={poster}
                    alt={`Poster ${index + 1}`}
                    fill
                    sizes="100vw"
                    className="object-cover rounded-lg"
                    priority={index === 0} // Prioritize the first image for faster loading
                  />
                  {/* Overlay for the first poster (Soft Silicone Cases) */}
                  {index === 0 && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      <h2 className="text-2xl sm:text-4xl font-bold font-inter tracking-tight">
                        Soft Silicone Cases
                      </h2>
                      <Link
                        href="/category/soft-silicone"
                        className="mt-4 bg-white text-black font-medium py-2 px-6 rounded-lg hover:bg-gray-200 transition duration-200"
                      >
                        Shop Now
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Dots for navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {posters.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? 'bg-white' : 'bg-gray-400'
                  } transition duration-200`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sections without padding (Choose Your Device, Explore Our Categories) */}
        <div>
          {/* Choose Your Device Section */}
          <div className="w-full text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4 my-8 font-inter tracking-tight">
              Choose Your Device
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-10">
              Find the perfect case for your phone.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center bg-white p-5 sm:p-7 rounded-xl shadow-lg hover:bg-gray-50 transition duration-200 ease-in-out w-full max-w-[280px] mx-auto border border-gray-200">
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 mx-auto mb-4">
                  <Image
                    src="/images/apple.png"
                    alt="iPhone"
                    fill
                    sizes="(max-width: 640px) 100vw, 280px"
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>
                <h3 className="mt-2 text-lg sm:text-xl font-semibold text-gray-800 font-inter">iPhone</h3>
                <Link
                  href="/devices/iphone"
                  className="text-blue-600 hover:text-blue-700 py-2 px-5 rounded-lg mt-5 inline-block transition duration-200 ease-in-out border border-blue-200 hover:border-blue-300"
                >
                  Explore
                </Link>
              </div>
              <div className="text-center bg-white p-5 sm:p-7 rounded-xl shadow-lg hover:bg-gray-50 transition duration-200 ease-in-out w-full max-w-[280px] mx-auto border border-gray-200">
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 mx-auto mb-4">
                  <Image
                    src="/images/samsung.png"
                    alt="Samsung"
                    fill
                    sizes="(max-width: 640px) 100vw, 280px"
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>
                <h3 className="mt-2 text-lg sm:text-xl font-semibold text-gray-800 font-inter">Samsung</h3>
                <Link
                  href="/devices/samsung"
                  className="text-blue-600 hover:text-blue-700 py-2 px-5 rounded-lg mt-5 inline-block transition duration-200 ease-in-out border border-blue-200 hover:border-blue-300"
                >
                  Explore
                </Link>
              </div>
              <div className="text-center bg-white p-5 sm:p-7 rounded-xl shadow-lg hover:bg-gray-50 transition duration-200 ease-in-out w-full max-w-[280px] mx-auto border border-gray-200">
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 mx-auto mb-4">
                  <Image
                    src="/images/googlepixel.png"
                    alt="Google Pixel"
                    fill
                    sizes="(max-width: 640px) 100vw, 280px"
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>
                <h3 className="mt-2 text-lg sm:text-xl font-semibold text-gray-800 font-inter">Google Pixel</h3>
                <Link
                  href="/devices/pixel"
                  className="text-blue-600 hover:text-blue-700 py-2 px-5 rounded-lg mt-5 inline-block transition duration-200 ease-in-out border border-blue-200 hover:border-blue-300"
                >
                  Explore
                </Link>
              </div>
              <div className="text-center bg-white p-5 sm:p-7 rounded-xl shadow-lg hover:bg-gray-50 transition duration-200 ease-in-out w-full max-w-[280px] mx-auto border border-gray-200">
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 mx-auto mb-4">
                  <Image
                    src="/images/android.png"
                    alt="Other Devices"
                    fill
                    sizes="(max-width: 640px) 100vw, 280px"
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>
                <h3 className="mt-2 text-lg sm:text-xl font-semibold text-gray-800 font-inter">Other Devices</h3>
                <Link
                  href="/devices/other"
                  className="text-blue-600 hover:text-blue-700 py-2 px-5 rounded-lg mt-5 inline-block transition duration-200 ease-in-out border border-blue-200 hover:border-blue-300"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>

          {/* Categories Section */}
          <div className="w-full text-center">
            <h2 className="text-4xl font-semibold text-gray-900 mb-8 my-8 font-inter tracking-tight">
              Explore Our Categories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-16">
              <div className="text-center bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 transition duration-200 ease-in-out w-full max-w-[300px] mx-auto border border-gray-200">
                <Image
                  src="/images/case2.png"
                  alt="Hard/Matte Cases"
                  width={180}
                  height={180}
                  className="rounded-lg mx-auto"
                />
                <h3 className="mt-6 text-2xl font-semibold font-inter">Hard Cases</h3>
                <p className="text-gray-500 text-lg overflow-hidden text-ellipsis whitespace-nowrap">
                  Durable and stylish hard matte cases to protect your phone.
                </p>
                <Link
                  href="/category/hard-matte"
                  className="text-blue-600 hover:text-blue-700 py-2 px-6 rounded-lg mt-4 inline-block transition duration-200 ease-in-out"
                >
                  Shop Now
                </Link>
              </div>

              <div className="text-center bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 transition duration-200 ease-in-out w-full max-w-[300px] mx-auto border border-gray-200">
                <Image
                  src="/images/case2.png"
                  alt="Soft/Silicone Cases"
                  width={180}
                  height={180}
                  className="rounded-lg mx-auto"
                />
                <h3 className="mt-6 text-2xl font-semibold font-inter">Silicone Cases</h3>
                <p className="text-gray-500 text-lg overflow-hidden text-ellipsis whitespace-nowrap">
                  Soft, flexible silicone cases for ultimate comfort and protection.
                </p>
                <Link
                  href="/category/soft-silicone"
                  className="text-blue-600 hover:text-blue-700 py-2 px-6 rounded-lg mt-4 inline-block transition duration-200 ease-in-out"
                >
                  Shop Now
                </Link>
              </div>

              <div className="text-center bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 transition duration-200 ease-in-out w-full max-w-[300px] mx-auto border border-gray-200">
                <Image
                  src="/images/case4.png"
                  alt="Glass/UV Cases"
                  width={180}
                  height={180}
                  className="rounded-lg mx-auto"
                />
                <h3 className="mt-6 text-2xl font-semibold font-inter">Glass Cases</h3>
                <p className="text-gray-500 text-lg overflow-hidden text-ellipsis whitespace-nowrap">
                  Elegant glass and UV-protected cases for a premium look.
                </p>
                <Link
                  href="/category/glass-uv"
                  className="text-blue-600 hover:text-blue-700 py-2 px-6 rounded-lg mt-4 inline-block transition duration-200 ease-in-out"
                >
                  Shop Now
                </Link>
              </div>

              <div className="text-center bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 transition duration-200 ease-in-out w-full max-w-[300px] mx-auto border border-gray-200">
                <Image
                  src="/images/case2.png"
                  alt="Hybrid Matte Cases"
                  width={180}
                  height={180}
                  className="rounded-lg mx-auto"
                />
                <h3 className="mt-6 text-2xl font-semibold font-inter">Hybrid Matte Cases</h3>
                <p className="text-gray-500 text-lg overflow-hidden text-ellipsis whitespace-nowrap">
                  Hybrid matte cases offering maximum protection with style.
                </p>
                <Link
                  href="/category/hybrid-matte"
                  className="text-blue-600 hover:text-blue-700 py-2 px-6 rounded-lg mt-4 inline-block transition duration-200 ease-in-out"
                >
                  Shop Now
                </Link>
              </div>

              <div className="text-center bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 transition duration-200 ease-in-out w-full max-w-[300px] mx-auto border border-gray-200">
                <Image
                  src="/images/case2.png"
                  alt="Metal Cases"
                  width={180}
                  height={180}
                  className="rounded-lg mx-auto"
                />
                <h3 className="mt-6 text-2xl font-semibold font-inter">Metal Cases</h3>
                <p className="text-gray-500 text-lg overflow-hidden text-ellipsis whitespace-nowrap">
                  Premium metal cases for a sleek and sturdy design.
                </p>
                <Link
                  href="/category/metal"
                  className="text-blue-600 hover:text-blue-700 py-2 px-6 rounded-lg mt-4 inline-block transition duration-200 ease-in-out"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sections with padding (continued) */}
        <div className="px-4 sm:px-8 py-12">
          {/* Featured Products Section */}
          <div className="mt-16 w-full text-center">
            <h2 className="text-4xl font-semibold text-gray-900 mb-8 my-8 font-inter tracking-tight">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Check out our top picks for this season.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 transition duration-200 ease-in-out w-full max-w-[350px] mx-auto border border-gray-200">
                <Image
                  src="/images/featured-case1.png"
                  alt="Featured Case 1"
                  width={200}
                  height={200}
                  className="rounded-lg mx-auto object-cover"
                />
                <h3 className="mt-4 text-xl font-semibold font-inter text-gray-800">Sparkle Case</h3>
                <p className="text-gray-500 text-base overflow-hidden text-ellipsis whitespace-nowrap">
                  A glittery case to make your phone shine.
                </p>
                <Link
                  href="/product/sparkle-case"
                  className="text-blue-600 hover:text-blue-700 py-2 px-4 rounded-lg mt-4 inline-block transition duration-200 ease-in-out"
                >
                  View Product
                </Link>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 transition duration-200 ease-in-out w-full max-w-[350px] mx-auto border border-gray-200">
                <Image
                  src="/images/featured-case2.png"
                  alt="Featured Case 2"
                  width={200}
                  height={200}
                  className="rounded-lg mx-auto object-cover"
                />
                <h3 className="mt-4 text-xl font-semibold font-inter text-gray-800">Floral Case</h3>
                <p className="text-gray-500 text-base overflow-hidden text-ellipsis whitespace-nowrap">
                  Add a touch of nature with this floral design.
                </p>
                <Link
                  href="/product/floral-case"
                  className="text-blue-600 hover:text-blue-700 py-2 px-4 rounded-lg mt-4 inline-block transition duration-200 ease-in-out"
                >
                  View Product
                </Link>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 transition duration-200 ease-in-out w-full max-w-[350px] mx-auto border border-gray-200">
                <Image
                  src="/images/featured-case3.png"
                  alt="Featured Case 3"
                  width={200}
                  height={200}
                  className="rounded-lg mx-auto object-cover"
                />
                <h3 className="mt-4 text-xl font-semibold font-inter text-gray-800">Rainbow Case</h3>
                <p className="text-gray-500 text-base overflow-hidden text-ellipsis whitespace-nowrap">
                  Brighten your day with this colorful case.
                </p>
                <Link
                  href="/product/rainbow-case"
                  className="text-blue-600 hover:text-blue-700 py-2 px-4 rounded-lg mt-4 inline-block transition duration-200 ease-in-out"
                >
                  View Product
                </Link>
              </div>
            </div>
          </div>

          {/* Newly Launched Collection Section (Carousel) */}
          <div className="text-center bg-white p-16 rounded-lg shadow-md hover:bg-gray-50 transition duration-200 ease-in-out w-full max-w-[1200px] mx-auto mt-16 border border-gray-200">
            <h2 className="text-5xl font-semibold text-gray-900 font-inter tracking-tight">
              New In
            </h2>
            <p className="mt-6 text-xl text-gray-600">
              Discover our latest collection of premium phone covers.
            </p>

            <div className="mt-8 overflow-hidden relative">
              <div className="flex animate-slide" style={{ animation: 'slide 12s infinite' }}>
                <div className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2">
                  <div className="text-center bg-white p-8 rounded-lg shadow-md hover:bg-gray-50 transition duration-200 ease-in-out w-[300px] h-[400px] mx-auto flex flex-col justify-between border border-gray-200">
                    <Image
                      src="/images/case4.png"
                      alt="New Phone Case 1"
                      width={180}
                      height={180}
                      className="rounded-lg mx-auto object-cover"
                    />
                    <div>
                      <h3 className="mt-4 text-xl font-semibold font-inter">New Phone Case 1</h3>
                      <p className="text-gray-500 text-base overflow-hidden text-ellipsis whitespace-nowrap">
                        Stylish new design for your phone, offering sleek protection.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2">
                  <div className="text-center bg-white p-8 rounded-lg shadow-md hover:bg-gray-50 transition duration-200 ease-in-out w-[300px] h-[400px] mx-auto flex flex-col justify-between border border-gray-200">
                    <Image
                      src="/images/case2.png"
                      alt="New Phone Case 2"
                      width={180}
                      height={180}
                      className="rounded-lg mx-auto object-cover"
                    />
                    <div>
                      <h3 className="mt-4 text-xl font-semibold font-inter">New Phone Case 2</h3>
                      <p className="text-gray-500 text-base overflow-hidden text-ellipsis whitespace-nowrap">
                        Modern design with enhanced durability and style.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2">
                  <div className="text-center bg-white p-8 rounded-lg shadow-md hover:bg-gray-50 transition duration-200 ease-in-out w-[300px] h-[400px] mx-auto flex flex-col justify-between border border-gray-200">
                    <Image
                      src="/images/case4.png"
                      alt="New Phone Case 3"
                      width={180}
                      height={180}
                      className="rounded-lg mx-auto object-cover"
                    />
                    <div>
                      <h3 className="mt-4 text-xl font-semibold font-inter">New Phone Case 3</h3>
                      <p className="text-gray-500 text-base overflow-hidden text-ellipsis whitespace-nowrap">
                        Premium protection with a sleek, elegant finish.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2">
                  <div className="text-center bg-white p-8 rounded-lg shadow-md hover:bg-gray-50 transition duration-200 ease-in-out w-[300px] h-[400px] mx-auto flex flex-col justify-between border border-gray-200">
                    <Image
                      src="/images/case2.png"
                      alt="New Phone Case 2"
                      width={180}
                      height={180}
                      className="rounded-lg mx-auto object-cover"
                    />
                    <div>
                      <h3 className="mt-4 text-xl font-semibold font-inter">New Phone Case 2</h3>
                      <p className="text-gray-500 text-base overflow-hidden text-ellipsis whitespace-nowrap">
                        Modern design with enhanced durability and style.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2">
                  <div className="text-center bg-white p-8 rounded-lg shadow-md hover:bg-gray-50 transition duration-200 ease-in-out w-[300px] h-[400px] mx-auto flex flex-col justify-between border border-gray-200">
                    <Image
                      src="/images/case4.png"
                      alt="New Phone Case 3"
                      width={180}
                      height={180}
                      className="rounded-lg mx-auto object-cover"
                    />
                    <div>
                      <h3 className="mt-4 text-xl font-semibold font-inter">New Phone Case 3</h3>
                      <p className="text-gray-500 text-base overflow-hidden text-ellipsis whitespace-nowrap">
                        Premium protection with a sleek, elegant finish.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2">
                  <div className="text-center bg-white p-8 rounded-lg shadow-md hover:bg-gray-50 transition duration-200 ease-in-out w-[300px] h-[400px] mx-auto flex flex-col justify-between border border-gray-200">
                    <Image
                      src="/images/case2.png"
                      alt="New Phone Case 2"
                      width={180}
                      height={180}
                      className="rounded-lg mx-auto object-cover"
                    />
                    <div>
                      <h3 className="mt-4 text-xl font-semibold font-inter">New Phone Case 2</h3>
                      <p className="text-gray-500 text-base overflow-hidden text-ellipsis whitespace-nowrap">
                        Modern design with enhanced durability and style.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2">
                  <div className="text-center bg-white p-8 rounded-lg shadow-md hover:bg-gray-50 transition duration-200 ease-in-out w-[300px] h-[400px] mx-auto flex flex-col justify-between border border-gray-200">
                    <Image
                      src="/images/case4.png"
                      alt="New Phone Case 3"
                      width={180}
                      height={180}
                      className="rounded-lg mx-auto object-cover"
                    />
                    <div>
                      <h3 className="mt-4 text-xl font-semibold font-inter">New Phone Case 3</h3>
                      <p className="text-gray-500 text-base overflow-hidden text-ellipsis whitespace-nowrap">
                        Premium protection with a sleek, elegant finish.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2">
                  <div className="text-center bg-white p-8 rounded-lg shadow-md hover:bg-gray-50 transition duration-200 ease-in-out w-[300px] h-[400px] mx-auto flex flex-col justify-between border border-gray-200">
                    <Image
                      src="/images/case4.png"
                      alt="New Phone Case 1"
                      width={180}
                      height={180}
                      className="rounded-lg mx-auto object-cover"
                    />
                    <div>
                      <h3 className="mt-4 text-xl font-semibold font-inter">New Phone Case 1</h3>
                      <p className="text-gray-500 text-base overflow-hidden text-ellipsis whitespace-nowrap">
                        Stylish new design for your phone, offering sleek protection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/category/new-arrivals"
                className="text-blue-600 hover:text-blue-700 py-3 px-8 rounded-lg inline-block transition duration-200 ease-in-out"
              >
                Show More
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section - Already outside main to avoid padding */}
      <Footer />
    </div>
  );
}