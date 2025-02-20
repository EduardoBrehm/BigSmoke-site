'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface ProductGalleryProps {
  images: string[]
  productName: string
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  return (
    <div className="space-y-4">
      {/* Imagem Principal */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full"
          >
            <Image
              src={images[currentImageIndex]}
              alt={`${productName} - Imagem ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={currentImageIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Miniaturas */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => setCurrentImageIndex(index)}
            className={`relative aspect-square overflow-hidden rounded-lg bg-gray-100 
              ${currentImageIndex === index ? 'ring-2 ring-black' : 'hover:opacity-75'}`}
          >
            <Image
              src={image}
              alt={`${productName} - Miniatura ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 25vw, 12vw"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
