'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MockImage from './MockImage'

const slides = [
  {
    id: 1,
    title: 'Promoção de Bongs',
    description: 'Até 30% de desconto em bongs selecionados',
    link: '/promocoes/bongs',
    bgColor: '#4ADE80',
  },
  {
    id: 2,
    title: 'Novos Dichavadores',
    description: 'Confira nossa nova coleção',
    link: '/categoria/dichavador',
    bgColor: '#F97316',
  },
  {
    id: 3,
    title: 'Kits Promocionais',
    description: 'Monte seu kit e ganhe desconto',
    link: '/kits',
    bgColor: '#8B5CF6',
  },
]

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const mockImages = slides.map((slide) => 
    MockImage({
      text: slide.title,
      width: 1200,
      height: 400,
      bgColor: slide.bgColor,
    })
  )

  return (
    <div className="relative h-[400px]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative h-full">
            <Image
              src={mockImages[index]}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl mb-8">{slide.description}</p>
                <Link
                  href={slide.link}
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Confira Agora
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroCarousel
