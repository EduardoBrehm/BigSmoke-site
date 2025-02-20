'use client';

import Link from 'next/link';

interface Category {
  name: string;
  slug: string;
  description: string;
}

interface CategoryGridProps {
  categories: Category[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  if (!categories || categories.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Nenhuma categoria encontrada</p>
      </div>
    );
  }

  return (
    <section className="py-8">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Categorias</h2>
          <p className="mt-2 text-gray-600">Explore nossos produtos por categoria</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categoria/${category.slug}`}
              className="group block rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-square">
                <div 
                  className="absolute inset-x-0 top-0 h-3/4 flex items-center justify-center text-white font-medium text-center px-2"
                  style={{ backgroundColor: '#4ADE80' }}
                >
                  {category.name}
                </div>
                <div 
                  className="absolute inset-x-0 bottom-0 h-1/4 flex items-center justify-center text-white text-sm"
                  style={{ backgroundColor: '#15803D' }}
                >
                  Ver Produtos
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
