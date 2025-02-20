'use client'

import Link from 'next/link'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import PlaceholderImage from './PlaceholderImage'

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
  discount?: number
  category?: string
  compact?: boolean
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  image, 
  discount, 
  category,
  compact = false 
}: ProductCardProps) => {
  const discountedPrice = discount ? price * (1 - discount / 100) : price

  const bgColor = 
    category === 'Bong' ? '#4ADE80' :
    category === 'Dichavador' ? '#F97316' :
    category === 'Seda' ? '#FBBF24' :
    category === 'Piteira' ? '#F472B6' :
    '#22C55E'

  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
  }

  return (
    <Link href={`/produtos/${slugify(name)}`} className="group block h-full">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
        <div className="relative aspect-[4/3]">
          <PlaceholderImage
            text={name}
            bgColor={bgColor}
            className="w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          {discount && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-1.5 py-0.5 rounded-full text-xs font-bold">
              -{discount}%
            </div>
          )}
          {category && !compact && (
            <div className="absolute top-2 left-2 bg-green-500 text-white px-1.5 py-0.5 rounded text-xs">
              {category}
            </div>
          )}
        </div>
        <div className={`flex-1 flex flex-col ${compact ? "p-4" : "p-5"}`}>
          <h3 className={`font-medium group-hover:text-green-600 transition-colors line-clamp-2 ${
            compact ? "text-base mb-2" : "text-xl mb-3"
          }`}>
            {name}
          </h3>
          <div className="mt-auto">
            <div className="flex items-center justify-between gap-4">
              <div>
                {discount ? (
                  <div className="space-y-1">
                    <div className="text-gray-400 line-through text-sm">
                      R$ {price.toFixed(2)}
                    </div>
                    <div className="text-green-600 font-semibold text-xl">
                      R$ {discountedPrice.toFixed(2)}
                    </div>
                  </div>
                ) : (
                  <div className="text-green-600 font-semibold text-xl">
                    R$ {price.toFixed(2)}
                  </div>
                )}
              </div>
              <button 
                className="p-2 rounded-full text-gray-400 hover:text-green-600 hover:bg-green-50 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  // Add to cart logic here
                }}
              >
                <ShoppingCartIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
