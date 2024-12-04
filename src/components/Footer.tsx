'use client'

import Image from 'next/image'
import IconMock from './IconMock'

const Footer = () => {
  const paymentIcons = {
    pix: IconMock({ name: 'PIX', bgColor: '#32BCAD' }),
    visa: IconMock({ name: 'VISA', bgColor: '#1434CB' }),
    mastercard: IconMock({ name: 'MC', bgColor: '#EB001B' })
  }

  const socialIcons = {
    instagram: IconMock({ name: 'IG', bgColor: '#E4405F' }),
    youtube: IconMock({ name: 'YT', bgColor: '#FF0000' }),
    whatsapp: IconMock({ name: 'WA', bgColor: '#25D366' })
  }

  return (
    <footer className="bg-[#0A1F0C] text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Institucional</h3>
            <ul className="space-y-2">
              <li><a href="/sobre" className="hover:text-green-400">Sobre nós</a></li>
              <li><a href="/politica-privacidade" className="hover:text-green-400">Política de Privacidade</a></li>
              <li><a href="/termos" className="hover:text-green-400">Termos de Uso</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Atendimento</h3>
            <ul className="space-y-2">
              <li><a href="/faq" className="hover:text-green-400">FAQ</a></li>
              <li><a href="/contato" className="hover:text-green-400">Contato</a></li>
              <li><a href="/trocas" className="hover:text-green-400">Trocas e Devoluções</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Formas de Pagamento</h3>
            <div className="grid grid-cols-3 gap-2">
              <Image src={paymentIcons.pix} alt="PIX" width={40} height={40} />
              <Image src={paymentIcons.visa} alt="Visa" width={40} height={40} />
              <Image src={paymentIcons.mastercard} alt="Mastercard" width={40} height={40} />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="hover:opacity-80">
                <Image src={socialIcons.instagram} alt="Instagram" width={32} height={32} />
              </a>
              <a href="https://youtube.com" className="hover:opacity-80">
                <Image src={socialIcons.youtube} alt="YouTube" width={32} height={32} />
              </a>
              <a href="https://wa.me/5551958967784" className="hover:opacity-80">
                <Image src={socialIcons.whatsapp} alt="WhatsApp" width={32} height={32} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p> 2024 BigSmoke Tabacaria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
