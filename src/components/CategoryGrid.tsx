'use client'

import Link from 'next/link'

const categories = [
  {
    id: 1,
    name: 'BONG',
    filterName: 'Bong',
    upperBgColor: '#4ADE80',
    lowerBgColor: '#15803D',
  },
  {
    id: 2,
    name: 'PIPE',
    filterName: 'Pipe',
    upperBgColor: '#60A5FA',
    lowerBgColor: '#1E40AF',
  },
  {
    id: 3,
    name: 'SEDA',
    filterName: 'Seda',
    upperBgColor: '#FBBF24',
    lowerBgColor: '#92400E',
  },
  {
    id: 4,
    name: 'PITEIRA',
    filterName: 'Piteira',
    upperBgColor: '#F472B6',
    lowerBgColor: '#9D174D',
  },
  {
    id: 5,
    name: 'DICHAVADOR',
    filterName: 'Dichavador',
    upperBgColor: '#C084FC',
    lowerBgColor: '#6B21A8',
  },
  {
    id: 6,
    name: 'ISQUEIRO & CINZEIRO',
    filterName: 'Isqueiro',
    upperBgColor: '#F97316',
    lowerBgColor: '#9A3412',
  },
]

const CategoryGrid = () => {
  return (
    <section className="py-8">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/produtos?categoria=${category.filterName}`}
              className="group block rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-square">
                {/* Upper section */}
                <div 
                  className="absolute inset-x-0 top-0 h-3/4 flex items-center justify-center text-white font-medium text-center px-2"
                  style={{ backgroundColor: category.upperBgColor }}
                >
                  {category.name}
                </div>
                {/* Lower section */}
                <div 
                  className="absolute inset-x-0 bottom-0 h-1/4 flex items-center justify-center text-white text-sm"
                  style={{ backgroundColor: category.lowerBgColor }}
                >
                  Ver Produtos
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryGrid
