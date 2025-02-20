'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import IconMock from './IconMock'

const kits = [
  {
    id: 'kit-iniciante',
    name: 'Kit Iniciante',
    description: 'Perfeito para começar sua jornada',
    price: 149.70,
    image: IconMock({ name: 'KI', bgColor: '#4A90E2' }),
    items: ['Cachimbo Básico', 'Isqueiro Comum', 'Fumo 50g']
  },
  {
    id: 'kit-intermediario',
    name: 'Kit Intermediário',
    description: 'Para quem busca mais qualidade',
    price: 319.60,
    image: IconMock({ name: 'KM', bgColor: '#50E3C2' }),
    items: ['Cachimbo Premium', 'Isqueiro Torch', 'Fumo 100g', 'Kit Limpeza Básico']
  },
  {
    id: 'kit-premium',
    name: 'Kit Premium',
    description: 'A experiência completa',
    price: 609.60,
    image: IconMock({ name: 'KP', bgColor: '#F5A623' }),
    items: ['Cachimbo Artesanal', 'Isqueiro Premium', 'Fumo 200g', 'Kit Limpeza Completo']
  }
]

export default function KitCarousel() {
  const router = useRouter()
  const [expandedKit, setExpandedKit] = useState<string | null>(null)

  const selectKit = (kitId: string) => {
    router.push(`/monte-seu-kit?kit=${kitId}`)
  }

  const toggleKit = (kitId: string) => {
    setExpandedKit(expandedKit === kitId ? null : kitId)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {kits.map((kit) => (
        <motion.div 
          key={kit.id} 
          className="bg-white rounded-xl shadow-md overflow-hidden"
          layout
          transition={{
            layout: { duration: 0.3 }
          }}
        >
          {/* Card Principal */}
          <motion.div 
            className="p-4 flex items-center space-x-4 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => toggleKit(kit.id)}
            layout="position"
          >
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src={kit.image}
                alt={kit.name}
                fill
                className="object-contain"
              />
            </div>
            
            <div className="flex-grow min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {kit.name}
                </h3>
                <motion.svg 
                  className="w-5 h-5 text-gray-500"
                  animate={{ rotate: expandedKit === kit.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </div>
              <p className="text-sm text-gray-600 line-clamp-1">
                {kit.description}
              </p>
              <p className="text-lg font-bold text-green-600">
                R$ {kit.price.toFixed(2)}
              </p>
            </div>
          </motion.div>

          {/* Conteúdo Expandido */}
          <AnimatePresence mode="wait">
            {expandedKit === kit.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: 'auto', 
                  opacity: 1,
                  transition: { 
                    height: { duration: 0.3 }, 
                    opacity: { duration: 0.2, delay: 0.1 } 
                  }
                }}
                exit={{ 
                  height: 0, 
                  opacity: 0,
                  transition: { 
                    height: { duration: 0.3 }, 
                    opacity: { duration: 0.2 } 
                  }
                }}
                className="overflow-hidden border-t border-gray-100"
              >
                <motion.div 
                  className="p-4 bg-gray-50"
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  exit={{ y: -10 }}
                >
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Itens Inclusos:
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-1 mb-4">
                    {kit.items.map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: index * 0.1 }
                        }}
                      >
                        <span className="w-1 h-1 bg-green-500 rounded-full mr-2" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button 
                    onClick={(e) => {
                      e.stopPropagation()
                      selectKit(kit.id)
                    }}
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Selecionar Kit
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}
