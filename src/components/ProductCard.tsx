'use client'

import Link from 'next/link'
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline'
import PlaceholderImage from './PlaceholderImage'

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
  discount?: number
  category?: string
}

const ProductCard = ({ id, name, price, image, discount, category }: ProductCardProps) => {
  const discountedPrice = discount ? price * (1 - discount / 100) : price
  const installmentPrice = discountedPrice / 12

  const bgColor = 
    category === 'Bong' ? '#4ADE80' :
    category === 'Dichavador' ? '#F97316' :
    category === 'Seda' ? '#FBBF24' :
    '#22C55E'

  return (
    <Link href={`/produto/${id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        <div className="relative aspect-square">
          <PlaceholderImage
            text={name}
            bgColor={bgColor}
            className="w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          {discount && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
              -{discount}%
            </div>
          )}
          {category && (
            <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs">
              {category}
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
            {name}
          </h3>
          <div className="flex items-center space-x-2">
            {discount ? (
              <>
                <span className="text-xl font-bold text-green-600">
                  R$ {discountedPrice.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  R$ {price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-xl font-bold text-green-600">
                R$ {price.toFixed(2)}
              </span>
            )}
          </div>
          <div className="mt-2 text-sm text-gray-600">
            em até 12x de R$ {installmentPrice.toFixed(2)}
          </div>
          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
