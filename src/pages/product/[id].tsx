// src/pages/product/[id].tsx
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../app/components/Header';
import Footer from '../../app/components/Footer';

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>CaseNova - Product {id}</title>
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">Product {id}</h1>
        {/* Display product details here */}
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
