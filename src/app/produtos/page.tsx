'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProductGrid } from '@/components/ProductGrid';
import Container from '@/components/Container';
import { getProducts, getCategories } from '@/services/api';
import { Slider } from '@/components/ui/Slider';

interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  category: string;
  discount?: number;
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const categoryFilter = searchParams.get('categoria');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [productsData, categoriesData] = await Promise.all([
          getProducts(),
          getCategories()
        ]);
        setProducts(productsData);
        setCategories(categoriesData);

        if (categoryFilter) {
          setSelectedCategories([categoryFilter]);
        }

        const maxPrice = Math.max(...productsData.map(p => p.price));
        setPriceRange([0, Math.ceil(maxPrice)]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryFilter]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategories.length === 0 || 
      selectedCategories.includes(product.category.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <Container>
        <div className="flex flex-col space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">
              {categoryFilter ? `Produtos - ${categoryFilter}` : 'Todos os Produtos'}
            </h1>
            <p className="mt-4 text-gray-600">
              Encontre os melhores produtos para você
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar com filtros */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm p-6 space-y-8 sticky top-24">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Filtros</h3>
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-medium text-gray-900 mb-3">Categorias</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <label key={category.id} className="flex items-center group cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category.slug)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedCategories([...selectedCategories, category.slug]);
                              } else {
                                setSelectedCategories(selectedCategories.filter(c => c !== category.slug));
                              }
                            }}
                            className="form-checkbox h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary focus:border-primary"
                          />
                          <span className="ml-3 text-gray-600 group-hover:text-gray-900 transition-colors">
                            {category.name}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 mt-6 pt-6">
                    <h4 className="font-medium text-gray-900 mb-4">Faixa de Preço</h4>
                    <div className="space-y-4">
                      <div className="px-2">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div 
                            className="h-full bg-primary rounded-full"
                            style={{
                              width: `${((priceRange[1] - priceRange[0]) / priceRange[1]) * 100}%`,
                              marginLeft: `${(priceRange[0] / priceRange[1]) * 100}%`
                            }}
                          />
                        </div>
                        <input
                          type="range"
                          min={0}
                          max={priceRange[1]}
                          value={priceRange[0]}
                          onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                          className="w-full mt-2"
                        />
                        <input
                          type="range"
                          min={0}
                          max={priceRange[1]}
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                          className="w-full mt-2"
                        />
                      </div>
                      <div className="flex items-center justify-between px-2">
                        <div className="bg-gray-100 rounded-md px-3 py-2">
                          <span className="text-sm text-gray-600">R$ {priceRange[0].toFixed(2)}</span>
                        </div>
                        <span className="text-gray-500">até</span>
                        <div className="bg-gray-100 rounded-md px-3 py-2">
                          <span className="text-sm text-gray-600">R$ {priceRange[1].toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Lista de produtos */}
            <div className="flex-1">
              {loading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">
                      {filteredProducts.length} produtos encontrados
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Ordenar por:</span>
                      <select className="form-select text-sm border-gray-300 rounded-md focus:ring-primary focus:border-primary">
                        <option>Mais relevantes</option>
                        <option>Menor preço</option>
                        <option>Maior preço</option>
                      </select>
                    </div>
                  </div>

                  <ProductGrid products={filteredProducts} />
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}