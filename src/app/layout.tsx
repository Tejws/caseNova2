import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Loading fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CaseNova - Premium Phone Covers",
  description: "Shop a wide variety of premium phone covers for all major brands.",
  keywords: "phone covers, cases, hard cases, matte cases, silicone cases, metal cases, transparent cases",
  robots: "index, follow", // Telling search engines to index the pages and follow links
  openGraph: {
    type: "website",
    url: "https://casenova.com", // Replace with your actual URL
    title: "CaseNova - Premium Phone Covers",
    description: "Shop a wide variety of premium phone covers for all major brands.",
    images: [
      {
        url: "https://casenova.com/images/og-image.jpg", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "CaseNova Phone Covers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@casenova", // Replace with your Twitter handle if you have one
    title: "CaseNova - Premium Phone Covers",
    description: "Shop a wide variety of premium phone covers for all major brands.",
    // Replace with your actual image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 w-full`}
        style={{ margin: 0, padding: 0 }}
      >
        {children}
      </body>
    </html>
  );
  
}
