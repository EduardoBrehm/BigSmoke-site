'use client'

import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductGrid from '@/components/ProductGrid'
import ProductsFilter from '@/components/ProductsFilter'

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
  {
    id: 5,
    name: 'Isqueiro Clipper',
    price: 15.90,
    image: 'clipper.png',
    category: 'Isqueiro',
    discount: 5,
  },
  {
    id: 6,
    name: 'Cinzeiro de Cerâmica',
    price: 39.90,
    image: 'cinzeiro.png',
    category: 'Cinzeiro',
  },
  {
    id: 7,
    name: 'Kit Seda + Piteira',
    price: 12.90,
    image: 'kit-seda.png',
    category: 'Kit',
    discount: 20,
  },
  {
    id: 8,
    name: 'Pipe de Madeira',
    price: 89.90,
    image: 'pipe-madeira.png',
    category: 'Pipe',
  },
]

export default function ProdutosPage() {
  const searchParams = useSearchParams()
  
  // Inicializa os filtros com os valores da URL
  const initialCategory = searchParams.get('categoria') || ''
  
  const [filters, setFilters] = useState({
    search: '',
    category: initialCategory,
    sort: '',
    priceRange: [0, Infinity] as [number, number],
  })

  // Mantém os filtros sincronizados com a URL
  useEffect(() => {
    const categoria = searchParams.get('categoria')
    if (categoria && categoria !== filters.category) {
      setFilters(prev => ({
        ...prev,
        category: categoria
      }))
    }
  }, [searchParams])

  const categories = [...new Set(mockProducts.map((p) => p.category))].filter(Boolean) as string[]

  const filteredProducts = useMemo(() => {
    let result = [...mockProducts]

    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchLower)
      )
    }

    // Apply category filter
    if (filters.category) {
      result = result.filter((product) => product.category === filters.category)
    }

    // Apply price range filter
    result = result.filter(
      (product) =>
        product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    )

    // Apply sorting
    if (filters.sort) {
      result.sort((a, b) => {
        switch (filters.sort) {
          case 'price-asc':
            return a.price - b.price
          case 'price-desc':
            return b.price - a.price
          case 'name':
            return a.name.localeCompare(b.name)
          default:
            return 0
        }
      })
    }

    return result
  }, [filters])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-b from-green-50 to-white">
        <div className="container-custom py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nossos Produtos</h1>
          <p className="text-lg text-gray-600 mb-8">
            Encontre os melhores produtos para você
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <ProductsFilter
              categories={categories}
              initialFilters={{
                category: filters.category
              }}
              onFilterChange={setFilters}
            />
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'Produto' : 'Produtos'}
                {filters.category ? ` em ${filters.category}` : ''}
              </h2>
            </div>
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  )
}
