'use client'

import { useState } from 'react'
import Image from 'next/image'
import IconMock from './IconMock'

interface KitItem {
  id: number
  name: string
  price: number
  image: string
  quantity?: number
}

interface KitBuilderProps {
  selectedItems: KitItem[]
  onItemsChange: (items: KitItem[]) => void
}

const kitItems = {
  cachimbos: [
    { id: 1, name: 'Cachimbo Básico', price: 89.90, image: IconMock({ name: 'CB', bgColor: '#4A90E2' }) },
    { id: 2, name: 'Cachimbo Premium', price: 149.90, image: IconMock({ name: 'CP', bgColor: '#50E3C2' }) },
    { id: 3, name: 'Cachimbo Artesanal', price: 299.90, image: IconMock({ name: 'CA', bgColor: '#F5A623' }) }
  ],
  isqueiros: [
    { id: 4, name: 'Isqueiro Comum', price: 9.90, image: IconMock({ name: 'IC', bgColor: '#D0021B' }) },
    { id: 5, name: 'Isqueiro Torch', price: 49.90, image: IconMock({ name: 'IT', bgColor: '#9013FE' }) },
    { id: 6, name: 'Isqueiro Premium', price: 89.90, image: IconMock({ name: 'IP', bgColor: '#417505' }) }
  ],
  fumos: [
    { id: 7, name: 'Fumo 50g', price: 49.90, image: IconMock({ name: 'F50', bgColor: '#8B572A' }) },
    { id: 8, name: 'Fumo 100g', price: 89.90, image: IconMock({ name: 'F100', bgColor: '#7ED321' }) },
    { id: 9, name: 'Fumo 200g', price: 159.90, image: IconMock({ name: 'F200', bgColor: '#4A4A4A' }) }
  ],
  acessorios: [
    { id: 10, name: 'Kit Limpeza Básico', price: 29.90, image: IconMock({ name: 'KLB', bgColor: '#B8E986' }) },
    { id: 11, name: 'Kit Limpeza Completo', price: 59.90, image: IconMock({ name: 'KLC', bgColor: '#9B9B9B' }) },
    { id: 12, name: 'Bolsa para Cachimbo', price: 39.90, image: IconMock({ name: 'BC', bgColor: '#F8E71C' }) }
  ]
}

export default function KitBuilder({ selectedItems, onItemsChange }: KitBuilderProps) {
  const [activeCategory, setActiveCategory] = useState('cachimbos')

  const addToKit = (item: KitItem) => {
    const existingItem = selectedItems.find((i) => i.id === item.id)
    if (!existingItem) {
      onItemsChange([...selectedItems, { ...item, quantity: 1 }])
    }
  }

  const removeFromKit = (itemId: number) => {
    onItemsChange(selectedItems.filter((item) => item.id !== itemId))
  }

  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity < 1) return
    onItemsChange(
      selectedItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const totalPrice = selectedItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <div className="flex overflow-x-auto pb-2 mb-6 -mx-2">
          {Object.keys(kitItems).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 mx-2 rounded-lg whitespace-nowrap transition-colors ${
                activeCategory === category
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {kitItems[activeCategory as keyof typeof kitItems].map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
                <p className="text-green-600 font-bold mb-3">
                  R$ {item.price.toFixed(2)}
                </p>
                <button
                  onClick={() => addToKit(item)}
                  className="w-full bg-green-600 text-white rounded-lg py-2 hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  disabled={selectedItems.some((i) => i.id === item.id)}
                >
                  {selectedItems.some((i) => i.id === item.id) ? 'Adicionado' : 'Adicionar'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 h-fit sticky top-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Seu Kit</h2>
        {selectedItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">Seu kit está vazio</p>
            <p className="text-sm text-gray-400">
              Selecione itens das categorias ao lado para montar seu kit personalizado
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {selectedItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{item.name}</h4>
                      <p className="text-green-600 font-medium">
                        R$ {(item.price * (item.quantity || 1)).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2 bg-gray-100 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                        className="px-2 py-1 text-gray-600 hover:bg-gray-200 rounded-l-lg transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity || 1}</span>
                      <button
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                        className="px-2 py-1 text-gray-600 hover:bg-gray-200 rounded-r-lg transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromKit(item.id)}
                      className="text-red-500 hover:text-red-600 transition-colors p-1"
                      aria-label="Remover item"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600">Total do Kit:</span>
                <span className="text-2xl font-bold text-green-600">
                  R$ {totalPrice.toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-green-600 text-white rounded-lg py-3 hover:bg-green-700 transition-colors">
                Finalizar Pedido
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
