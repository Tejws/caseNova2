// src/pages/checkout.tsx
import Head from 'next/head';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';

const Checkout: React.FC = () => {
  return (
    <>
      <Head>
        <title>CaseNova - Checkout</title>
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>
        <form>
          {/* Form for user to fill in shipping and payment details */}
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Checkout;
