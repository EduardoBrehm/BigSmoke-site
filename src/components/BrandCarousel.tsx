'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const brands = [
  { id: 1, name: 'Brand 1', logo: '/images/brands/brand1.png' },
  { id: 2, name: 'Brand 2', logo: '/images/brands/brand2.png' },
  { id: 3, name: 'Brand 3', logo: '/images/brands/brand3.png' },
  // Add more brands as needed
]

const BrandCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return

    const scrollAmount = 200
    const container = scrollContainerRef.current
    
    container.scrollTo({
      left: container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount),
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative">
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide space-x-8 py-8 px-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex-shrink-0 w-48 h-24 relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            style={{ scrollSnapAlign: 'start' }}
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain p-4"
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  )
}

export default BrandCarousel
