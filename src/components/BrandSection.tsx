'use client'

import Image from 'next/image'
import Link from 'next/link'

const brands = [
  { name: '0 Arts', image: '/images/brands/0-arts.png', link: '/brands/0-arts' },
  { name: 'Mascotte', image: '/images/brands/mascotte.png', link: '/brands/mascotte' },
  { name: 'Sylvia', image: '/images/brands/sylvia.png', link: '/brands/sylvia' },
  { name: '8000 Kicks', image: '/images/brands/8000kicks.png', link: '/brands/8000kicks' },
  // Add more brands as needed
]

const BrandSection = () => {
  return (
    <section className="container-custom py-16">
      <h2 className="text-3xl font-bold mb-8">Marcas</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
        {brands.map((brand, index) => (
          <Link key={index} href={brand.link} className="hover:opacity-75 transition-opacity">
            <Image src={brand.image} alt={brand.name} width={120} height={80} className="object-contain" />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default BrandSection
