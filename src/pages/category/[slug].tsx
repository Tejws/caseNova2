// src/pages/category/[slug].tsx
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../app/components/Header';
import Footer from '../../app/components/Footer';
import ProductCard from '../../app/components/ProductCard';

const CategoryPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  const products = [
    {
      id: '1',
      name: 'Hard Case for iPhone',
      description: 'Durable, stylish hard case for your iPhone.',
      price: 19.99,
      image: '/images/iphone-case.jpg',
    },
    // Add more products based on the category
  ];

  return (
    <>
      <Head>
        <title>CaseNova - {slug} Cases</title>
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">{slug} Phone Covers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CategoryPage;
