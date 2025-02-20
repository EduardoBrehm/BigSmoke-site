'use client'

import { useState } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

interface AddToCartButtonProps {
  productId: number
  disabled?: boolean
}

export function AddToCartButton({ productId, disabled }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(false)

  const handleAddToCart = async () => {
    setLoading(true)
    // Aqui você implementaria a lógica real de adicionar ao carrinho
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulação de delay
    // Exemplo de como você poderia implementar:
    // await addToCart({ productId, quantity })
    setLoading(false)
  }

  return (
    <div className="space-y-4">
      {/* Seletor de Quantidade */}
      <div className="flex items-center space-x-4">
        <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
          Quantidade:
        </label>
        <div className="flex items-center border rounded-md">
          <button
            type="button"
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            className="px-3 py-2 text-gray-600 hover:text-gray-700 disabled:opacity-50"
            disabled={quantity <= 1 || disabled}
          >
            -
          </button>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-16 text-center border-x p-2"
            min="1"
            disabled={disabled}
          />
          <button
            type="button"
            onClick={() => setQuantity(q => q + 1)}
            className="px-3 py-2 text-gray-600 hover:text-gray-700 disabled:opacity-50"
            disabled={disabled}
          >
            +
          </button>
        </div>
      </div>

      {/* Botão Adicionar ao Carrinho */}
      <button
        onClick={handleAddToCart}
        disabled={disabled || loading}
        className={`
          w-full flex items-center justify-center px-6 py-3 rounded-md text-white
          ${disabled
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-black hover:bg-gray-800 active:bg-gray-900'
          }
          transition-colors duration-200
          ${loading ? 'opacity-75 cursor-wait' : ''}
        `}
      >
        <ShoppingCartIcon className="w-5 h-5 mr-2" />
        {disabled
          ? 'Indisponível'
          : loading
            ? 'Adicionando...'
            : 'Adicionar ao Carrinho'
        }
      </button>
    </div>
  )
}
