'use client'

import { useState } from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

const NewsletterSignup = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add newsletter signup logic here
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <section className="bg-[#0A1F0C] text-white py-16">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Receba nossas novidades
          </h2>
          <p className="text-gray-300 mb-8">
            Cadastre-se para receber ofertas exclusivas e lançamentos em primeira mão
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
            <div className="flex-1 relative">
              <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-[#0A1F0C]"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSignup
