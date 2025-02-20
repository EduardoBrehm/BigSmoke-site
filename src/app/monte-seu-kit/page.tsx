'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import KitBuilder from '@/components/KitBuilder'
import KitCarousel from '@/components/KitCarousel'
import IconMock from '@/components/IconMock'

interface KitItem {
  id: number
  name: string
  price: number
  image: string
  quantity?: number
}

// Definição dos kits pré-montados
const predefinedKits = {
  'kit-iniciante': [
    { id: 1, name: 'Cachimbo Básico', price: 89.90, image: IconMock({ name: 'CB', bgColor: '#4A90E2' }), quantity: 1 },
    { id: 4, name: 'Isqueiro Comum', price: 9.90, image: IconMock({ name: 'IC', bgColor: '#D0021B' }), quantity: 1 },
    { id: 7, name: 'Fumo 50g', price: 49.90, image: IconMock({ name: 'F50', bgColor: '#8B572A' }), quantity: 1 }
  ],
  'kit-intermediario': [
    { id: 2, name: 'Cachimbo Premium', price: 149.90, image: IconMock({ name: 'CP', bgColor: '#50E3C2' }), quantity: 1 },
    { id: 5, name: 'Isqueiro Torch', price: 49.90, image: IconMock({ name: 'IT', bgColor: '#9013FE' }), quantity: 1 },
    { id: 8, name: 'Fumo 100g', price: 89.90, image: IconMock({ name: 'F100', bgColor: '#7ED321' }), quantity: 1 },
    { id: 10, name: 'Kit Limpeza Básico', price: 29.90, image: IconMock({ name: 'KLB', bgColor: '#B8E986' }), quantity: 1 }
  ],
  'kit-premium': [
    { id: 3, name: 'Cachimbo Artesanal', price: 299.90, image: IconMock({ name: 'CA', bgColor: '#F5A623' }), quantity: 1 },
    { id: 6, name: 'Isqueiro Premium', price: 89.90, image: IconMock({ name: 'IP', bgColor: '#417505' }), quantity: 1 },
    { id: 9, name: 'Fumo 200g', price: 159.90, image: IconMock({ name: 'F200', bgColor: '#4A4A4A' }), quantity: 1 },
    { id: 11, name: 'Kit Limpeza Completo', price: 59.90, image: IconMock({ name: 'KLC', bgColor: '#9B9B9B' }), quantity: 1 }
  ]
}

export default function MonteSeuKitPage() {
  const [selectedItems, setSelectedItems] = useState<KitItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    const kitSlug = searchParams.get('kit')
    if (kitSlug && predefinedKits[kitSlug as keyof typeof predefinedKits]) {
      setIsLoading(true)
      // Simula um pequeno delay para mostrar o loading state
      setTimeout(() => {
        setSelectedItems(predefinedKits[kitSlug as keyof typeof predefinedKits])
        setIsLoading(false)
      }, 300)
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Monte Seu Kit</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escolha um dos nossos kits pré-montados ou personalize o seu próprio kit 
            com nossos produtos selecionados. Aproveite descontos especiais!
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Kits Sugeridos</h2>
          <KitCarousel />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {selectedItems.length > 0 ? 'Personalize Seu Kit' : 'Monte Seu Kit do Zero'}
          </h2>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
            </div>
          ) : (
            <KitBuilder 
              selectedItems={selectedItems}
              onItemsChange={setSelectedItems}
            />
          )}
        </div>
      </main>
    </div>
  )
}
