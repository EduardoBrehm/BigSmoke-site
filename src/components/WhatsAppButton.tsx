'use client'

import Image from 'next/image'

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5551958967784"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 group"
      aria-label="Contato WhatsApp"
    >
      <div className="relative flex items-center">
        {/* Message bubble */}
        <div className="absolute right-full mr-3 px-4 py-2 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          <p className="text-gray-800 text-sm">Precisa de ajuda?</p>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-white"></div>
        </div>

        {/* WhatsApp button */}
        <div className="bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors duration-300">
          <div className="relative w-12 h-12">
            <Image
              src="/images/social/whatsapp-white.png"
              alt="WhatsApp"
              fill
              className="p-2"
            />
          </div>
        </div>
      </div>
    </a>
  )
}

export default WhatsAppButton
