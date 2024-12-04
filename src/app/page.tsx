import HeroCarousel from '@/components/HeroCarousel'
import CategoryGrid from '@/components/CategoryGrid'
import ProductGrid from '@/components/ProductGrid'
import Benefits from '@/components/Benefits'

const mockProducts = [
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
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Benefits */}
      <Benefits />

      {/* Category Grid */}
      <CategoryGrid />

      {/* Featured Products */}
      <ProductGrid title="Produtos em Destaque" products={mockProducts} />
    </main>
  )
}
