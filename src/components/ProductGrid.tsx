'use client';

import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  discount?: number;
}

interface ProductGridProps {
  title?: string;
  products: Product[];
  compact?: boolean;
}

export function ProductGrid({ title, products, compact = false }: ProductGridProps) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Nenhum produto encontrado</p>
      </div>
    );
  }

  const formatPrice = (price: number | string): string => {
    const numPrice = typeof price === 'string' ? parseFloat(price) : price;
    return !isNaN(numPrice) ? numPrice.toFixed(2) : '0.00';
  };

  const getImageUrl = (url: string | undefined): string => {
    if (!url) return '/images/placeholder.png';
    if (url.startsWith('http')) return url;
    if (url.startsWith('/')) return url;
    return `/images/products/${url}`;
  };

  return (
    <div className={compact ? '' : 'py-8'}>
      {title && (
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/produtos/${product.id}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={getImageUrl(product.images?.[0])}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.discount && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded">
                    -{product.discount}%
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 group-hover:text-primary">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    R$ {formatPrice(product.price)}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
