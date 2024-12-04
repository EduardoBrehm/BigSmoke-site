import HeroCarousel from '@/components/HeroCarousel'
import CategoryGrid from '@/components/CategoryGrid'
import ProductGrid from '@/components/ProductGrid'
import Benefits from '@/components/Benefits'
import NewsletterSection from '@/components/NewsletterSection'
import Container from '@/components/Container'

const featuredProducts = [
  {
    id: 1,
    name: 'Dichavador Be Safe',
    price: 129.90,
    image: 'besafe.png',
    category: 'Dichavador',
    discount: 15,
  },
  {
    id: 2,
    name: 'Bong de Vidro Preto',
    price: 199.90,
    image: 'bong-preto.png',
    category: 'Bong',
  },
  {
    id: 3,
    name: 'Seda King Size',
    price: 7.90,
    image: 'seda-king.png',
    category: 'Seda',
    discount: 10,
  },
  {
    id: 4,
    name: 'Piteira de Vidro',
    price: 29.90,
    image: 'piteira-vidro.png',
    category: 'Piteira',
  },
  {
    id: 5,
    name: 'Isqueiro Clipper',
    price: 15.90,
    image: 'clipper.png',
    category: 'Isqueiro',
    discount: 5,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Benefits Section */}
      <Benefits backgroundColor="bg-white" />

      {/* Categories Section */}
      <section className="bg-gray-50">
        <Container>
          <div className="py-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Categorias</h2>
              <p className="mt-2 text-gray-600">Explore nossos produtos por categoria</p>
            </div>
            <CategoryGrid />
          </div>
        </Container>
      </section>

      {/* Featured Products Section */}
      <section className="bg-white">
        <Container>
          <div className="py-16">
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

      {/* Newsletter Section */}
      <NewsletterSection />
    </main>
  )
}
