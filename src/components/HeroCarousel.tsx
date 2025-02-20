'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    id: 1,
    title: 'Promoção de Bongs',
    description: 'Até 30% de desconto em bongs selecionados',
    link: '/promocoes/bongs',
    image: '/images/hero/slide1.jpg',
  },
  {
    id: 2,
    title: 'Novos Dichavadores',
    description: 'Confira nossa nova coleção',
    link: '/categoria/dichavador',
    image: '/images/hero/slide2.jpg',
  },
  {
    id: 3,
    title: 'Monte Seu Kit',
    description: 'Monte seu kit personalizado com desconto especial',
    link: '/monte-seu-kit',
    image: '/images/hero/slide3.jpg',
  },
]

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] bg-gray-100 overflow-hidden">
      {/* Slides */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="relative h-full">
            {/* Background Image */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-700/90">
              {slides[currentSlide].image && (
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  fill
                  className="object-cover mix-blend-overlay"
                  priority
                />
              )}
            </div>
            
            {/* Content */}
            <div className="relative h-full flex items-center justify-center px-4">
              <div className="text-center text-white max-w-3xl">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                >
                  {slides[currentSlide].title}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg sm:text-xl md:text-2xl mb-8"
                >
                  {slides[currentSlide].description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    href={slides[currentSlide].link}
                    className="inline-block bg-white text-green-600 px-6 sm:px-8 py-3 rounded-lg text-lg font-medium
                             hover:bg-gray-100 transition-colors duration-300 hover:shadow-lg"
                  >
                    Confira Agora
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 
                   backdrop-blur-sm transition-colors text-white hidden sm:block"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 
                   backdrop-blur-sm transition-colors text-white hidden sm:block"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false)
              setCurrentSlide(index)
            }}
            className={`group transition-all duration-300 ${
              index === currentSlide ? 'w-8' : 'w-3'
            } h-3 rounded-full`}
          >
            <div
              className={`h-full rounded-full transition-colors duration-300 ${
                index === currentSlide
                  ? 'bg-white w-full'
                  : 'bg-white/50 w-full group-hover:bg-white/70'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default HeroCarousel
