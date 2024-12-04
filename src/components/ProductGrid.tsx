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
  title: string
  products: Product[]
}

const ProductGrid = ({ title, products }: ProductGridProps) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          {title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              discount={product.discount}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
