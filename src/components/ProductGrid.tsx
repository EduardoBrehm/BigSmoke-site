'use client'

import ProductCard from './ProductCard'

interface Product {
  id: number
  name: string
  price: number
  image: string
  discount?: number
  category?: string
}

interface ProductGridProps {
  products: Product[]
  title?: string
  compact?: boolean
}

const ProductGrid = ({ products, title, compact = false }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Nenhum produto encontrado</p>
      </div>
    )
  }

  return (
    <section className={compact ? 'py-8' : 'py-16'}>
      <div className="container-custom">
        {title && (
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{title}</h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              discount={product.discount}
              category={product.category}
              compact={compact}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
