'use client'

import { useState, useEffect } from 'react'
import { MagnifyingGlassIcon, FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

interface ProductsFilterProps {
  categories: string[]
  initialFilters?: {
    search?: string
    category?: string
    sort?: string
    priceRange?: [number, number]
  }
  onFilterChange: (filters: {
    search: string
    category: string
    sort: string
    priceRange: [number, number]
  }) => void
}

const priceRanges = [
  { min: 0, max: 50, label: 'Até R$ 50' },
  { min: 50, max: 100, label: 'R$ 50 - R$ 100' },
  { min: 100, max: 200, label: 'R$ 100 - R$ 200' },
  { min: 200, max: Infinity, label: 'Acima de R$ 200' },
]

export default function ProductsFilter({ 
  categories, 
  initialFilters = {},
  onFilterChange 
}: ProductsFilterProps) {
  const router = useRouter()
  const [filters, setFilters] = useState({
    search: initialFilters.search || '',
    category: initialFilters.category || '',
    sort: initialFilters.sort || '',
    priceRange: initialFilters.priceRange || [0, Infinity],
  })
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    setFilters(prev => ({
      ...prev,
      ...initialFilters
    }))
  }, [initialFilters])

  const handleChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const clearAllFilters = () => {
    const newFilters = {
      search: '',
      category: '',
      sort: '',
      priceRange: [0, Infinity],
    }
    setFilters(newFilters)
    onFilterChange(newFilters)
    router.push('/produtos')
  }

  const clearFilter = (key: string) => {
    const newFilters = {
      ...filters,
      [key]: key === 'priceRange' ? [0, Infinity] : ''
    }
    setFilters(newFilters)
    onFilterChange(newFilters)
    
    if (key === 'category') {
      router.push('/produtos')
    }
  }

  // Verifica se há filtros ativos
  const hasActiveFilters = filters.category || 
    filters.search || 
    filters.sort || 
    (filters.priceRange[0] > 0 || filters.priceRange[1] < Infinity)

  const FilterSection = () => (
    <div className="space-y-6">
      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold">Filtros Ativos</h3>
            <button
              onClick={clearAllFilters}
              className="text-sm text-red-600 hover:text-red-800 font-medium"
            >
              Limpar Todos
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.category && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                {filters.category}
                <button
                  onClick={() => clearFilter('category')}
                  className="ml-2 hover:text-green-900"
                >
                  <XMarkIcon className="h-4 w-4" />
                </button>
              </span>
            )}
            {filters.search && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                Busca: {filters.search}
                <button
                  onClick={() => clearFilter('search')}
                  className="ml-2 hover:text-blue-900"
                >
                  <XMarkIcon className="h-4 w-4" />
                </button>
              </span>
            )}
            {filters.sort && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
                {filters.sort === 'price-asc' ? 'Menor Preço' : 
                 filters.sort === 'price-desc' ? 'Maior Preço' : 
                 filters.sort === 'name' ? 'Nome' : 'Relevância'}
                <button
                  onClick={() => clearFilter('sort')}
                  className="ml-2 hover:text-purple-900"
                >
                  <XMarkIcon className="h-4 w-4" />
                </button>
              </span>
            )}
            {(filters.priceRange[0] > 0 || filters.priceRange[1] < Infinity) && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-800">
                {`R$ ${filters.priceRange[0]} - R$ ${filters.priceRange[1] === Infinity ? '∞' : filters.priceRange[1]}`}
                <button
                  onClick={() => clearFilter('priceRange')}
                  className="ml-2 hover:text-orange-900"
                >
                  <XMarkIcon className="h-4 w-4" />
                </button>
              </span>
            )}
          </div>
        </div>
      )}

      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Categorias</h3>
        <div className="space-y-2">
          <div 
            className={`cursor-pointer hover:text-green-600 ${
              filters.category === '' ? 'text-green-600 font-medium' : 'text-gray-600'
            }`}
            onClick={() => handleChange('category', '')}
          >
            Todas
          </div>
          {categories.map((category) => (
            <div
              key={category}
              className={`cursor-pointer hover:text-green-600 ${
                filters.category === category ? 'text-green-600 font-medium' : 'text-gray-600'
              }`}
              onClick={() => handleChange('category', category)}
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Faixa de Preço</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <div
              key={range.label}
              className={`cursor-pointer hover:text-green-600 ${
                filters.priceRange[0] === range.min && filters.priceRange[1] === range.max
                  ? 'text-green-600 font-medium'
                  : 'text-gray-600'
              }`}
              onClick={() => handleChange('priceRange', [range.min, range.max])}
            >
              {range.label}
            </div>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Ordenar por</h3>
        <div className="space-y-2">
          <div
            className={`cursor-pointer hover:text-green-600 ${
              filters.sort === '' ? 'text-green-600 font-medium' : 'text-gray-600'
            }`}
            onClick={() => handleChange('sort', '')}
          >
            Relevância
          </div>
          <div
            className={`cursor-pointer hover:text-green-600 ${
              filters.sort === 'price-asc' ? 'text-green-600 font-medium' : 'text-gray-600'
            }`}
            onClick={() => handleChange('sort', 'price-asc')}
          >
            Menor Preço
          </div>
          <div
            className={`cursor-pointer hover:text-green-600 ${
              filters.sort === 'price-desc' ? 'text-green-600 font-medium' : 'text-gray-600'
            }`}
            onClick={() => handleChange('sort', 'price-desc')}
          >
            Maior Preço
          </div>
          <div
            className={`cursor-pointer hover:text-green-600 ${
              filters.sort === 'name' ? 'text-green-600 font-medium' : 'text-gray-600'
            }`}
            onClick={() => handleChange('sort', 'name')}
          >
            Nome A-Z
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile filter dialog */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Filtros</h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <FilterSection />
          </div>
        </div>
      )}

      <div className="container-custom">
        <div className="flex items-center justify-between py-4 border-b lg:hidden">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={filters.search}
              onChange={(e) => handleChange('search', e.target.value)}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          <button
            className="ml-4 p-2 text-gray-600 hover:text-green-600"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <FunnelIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop filters */}
        <div className="hidden lg:block sticky top-4">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={filters.search}
              onChange={(e) => handleChange('search', e.target.value)}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          <FilterSection />
        </div>
      </div>
    </>
  )
}
