'use client'

import { TruckIcon, ShieldCheckIcon, CreditCardIcon } from '@heroicons/react/24/outline'
import Container from './Container'

type BenefitsProps = {
  backgroundColor?: string
  textColor?: string
  hoverColor?: string
  iconColor?: string
}

const defaultBenefits = [
  {
    id: 1,
    title: 'Entrega Rápida',
    description: 'Entrega em todo o Brasil',
    icon: 'truck',
  },
  {
    id: 2,
    title: 'Pagamento Seguro',
    description: 'Diversas formas de pagamento',
    icon: 'credit-card',
  },
  {
    id: 3,
    title: 'Compra Garantida',
    description: 'Satisfação garantida ou seu dinheiro de volta',
    icon: 'shield-check',
  },
]

const iconMap = {
  truck: TruckIcon,
  'credit-card': CreditCardIcon,
  'shield-check': ShieldCheckIcon,
}

export default function Benefits({
  backgroundColor = 'bg-gray-50',
  textColor = 'text-gray-900',
  hoverColor = 'hover:bg-gray-100',
  iconColor = 'text-green-600',
}: BenefitsProps) {
  return (
    <div className={backgroundColor}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {defaultBenefits.map((benefit) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap]
            return (
              <div
                key={benefit.id}
                className={`
                  flex items-center space-x-4 p-6 rounded-lg bg-white
                  ${hoverColor} transition-all duration-300 ease-in-out
                  shadow-sm hover:shadow-lg
                `}
              >
                <div className="flex-shrink-0">
                  <Icon className={`h-10 w-10 ${iconColor}`} />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${textColor}`}>
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}
