// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Adjust the path if needed

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}