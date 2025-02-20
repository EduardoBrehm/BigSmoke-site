import { getFeaturedProducts, getCategories } from '@/services/api';
import { CategoryGrid } from '@/components/CategoryGrid';
import { ProductGrid } from '@/components/ProductGrid';
import HeroCarousel from '@/components/HeroCarousel';
import Benefits from '@/components/Benefits';
import NewsletterSection from '@/components/NewsletterSection';
import Container from '@/components/Container';

export default async function Home() {
  let featuredProducts = [];
  let categories = [];

  try {
    [featuredProducts, categories] = await Promise.all([
      getFeaturedProducts().catch(() => []),
      getCategories().catch(() => [])
    ]);
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Categories Section */}
      <section className="bg-gray-50">
        <Container>
          <CategoryGrid categories={categories} />
        </Container>
      </section>

      {/* Featured Products Section */}
      <section className="bg-white">
        <Container>
          <div className="py-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Produtos em Destaque</h2>
              <p className="mt-2 text-gray-600">Confira nossa seleção especial</p>
            </div>
            <ProductGrid 
              products={featuredProducts} 
              compact={true}
            />
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <Benefits backgroundColor="bg-gray-50" />

      {/* Newsletter Section */}
      <NewsletterSection />
    </main>
  )
}
