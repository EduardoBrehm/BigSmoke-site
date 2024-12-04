'use client'

import Link from 'next/link'
import PlaceholderImage from './PlaceholderImage'

const categories = [
  {
    id: 1,
    name: 'BONG',
    bgColor: '#4ADE80',
    href: '/categoria/bong',
    gridClass: 'bg-green-100',
  },
  {
    id: 2,
    name: 'PIPE',
    bgColor: '#60A5FA',
    href: '/categoria/pipe',
    gridClass: 'bg-blue-100',
  },
  {
    id: 3,
    name: 'SEDA',
    bgColor: '#FBBF24',
    href: '/categoria/seda',
    gridClass: 'bg-yellow-100',
  },
  {
    id: 4,
    name: 'PITEIRA',
    bgColor: '#F472B6',
    href: '/categoria/piteira',
    gridClass: 'bg-pink-100',
  },
  {
    id: 5,
    name: 'DICHAVADOR',
    bgColor: '#C084FC',
    href: '/categoria/dichavador',
    gridClass: 'bg-purple-100',
  },
  {
    id: 6,
    name: 'ISQUEIRO & CINZEIRO',
    bgColor: '#F97316',
    href: '/categoria/isqueiro',
    gridClass: 'bg-orange-100',
  },
]

const CategoryGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Categorias
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className={`group relative rounded-lg overflow-hidden ${category.gridClass} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="aspect-square">
                <PlaceholderImage
                  text={category.name}
                  bgColor={category.bgColor}
                  className="w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-black/50 p-2">
                <h3 className="text-white text-center text-sm font-medium">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryGrid
