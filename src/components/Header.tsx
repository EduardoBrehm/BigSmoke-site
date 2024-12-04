'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Cart from './Cart'
import PlaceholderImage from './PlaceholderImage'

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Produtos', href: '/produtos' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Contato', href: '/contato' },
]

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality
    console.log('Search:', searchQuery)
  }

  return (
    <header className="bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-[#0A1F0C] text-white py-2">
        <div className="container-custom text-center text-sm">
          Frete grátis para todo o RS em compras acima de R$ 120
        </div>
      </div>

      <div className="container-custom py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="h-10 w-32">
              <PlaceholderImage
                text="BigSmoke"
                bgColor="#22C55E"
                className="w-full h-full rounded"
              />
            </div>
          </Link>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar produtos..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </form>

          {/* User actions */}
          <div className="flex items-center space-x-6">
            <Link href="/minha-conta" className="flex items-center text-gray-700 hover:text-green-600">
              <UserIcon className="h-6 w-6" />
              <span className="ml-2 text-sm font-medium hidden md:block">Minha Conta</span>
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center text-gray-700 hover:text-green-600"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="ml-2 text-sm font-medium hidden md:block">Carrinho</span>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4">
          <ul className="flex items-center justify-center space-x-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 font-medium"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Cart sidebar */}
      <Cart isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </header>
  )
}

export default Header
