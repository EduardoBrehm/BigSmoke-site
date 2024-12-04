'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-50 to-white">
        <div className="container-custom py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sobre a BigSmoke
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sua loja especializada em produtos para tabacaria
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700">
              {/* Placeholder para imagem futura */}
              <div className="w-full h-full flex items-center justify-center text-white text-xl font-medium">
                Imagem da Loja
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Nossa História
            </h2>
            <p className="text-gray-600">
              A BigSmoke nasceu da paixão por oferecer produtos de alta qualidade para nossos clientes. 
              Desde nossa fundação, nos dedicamos a selecionar cuidadosamente cada item de nosso catálogo, 
              garantindo a melhor experiência para nossos clientes.
            </p>
            <p className="text-gray-600">
              Com anos de experiência no mercado, nos tornamos referência em produtos para tabacaria, 
              sempre priorizando a qualidade e a satisfação de nossos clientes.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nossos Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Qualidade',
                description: 'Selecionamos apenas os melhores produtos para nossos clientes.',
                icon: '🌟',
              },
              {
                title: 'Atendimento',
                description: 'Comprometidos em oferecer a melhor experiência de compra.',
                icon: '💚',
              },
              {
                title: 'Confiança',
                description: 'Construímos relacionamentos duradouros com nossos clientes.',
                icon: '🤝',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutPage
