'use client'

import { useEffect, useState } from 'react'
import { TruckIcon, ShieldCheckIcon, CreditCardIcon } from '@heroicons/react/24/outline'

type Benefit = {
  id: number
  title: string
  description: string
  icon: string
  theme: string
}

type BenefitsProps = {
  backgroundColor?: string
  textColor?: string
  hoverColor?: string
  iconColor?: string
}

const iconMap = {
  truck: TruckIcon,
  'credit-card': CreditCardIcon,
  'shield-check': ShieldCheckIcon,
}

const Benefits = ({
  backgroundColor = 'bg-white',
  textColor = 'text-gray-900',
  hoverColor = 'hover:bg-gray-100',
  iconColor = 'text-green-600',
}: BenefitsProps) => {
  const [benefits, setBenefits] = useState<Benefit[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        const response = await fetch('/api/benefits')
        const data = await response.json()
        setBenefits(data)
      } catch (error) {
        console.error('Error fetching benefits:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBenefits()
  }, [])

  if (isLoading) {
    return (
      <section className={`py-12 ${backgroundColor}`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="animate-pulse flex items-center space-x-4 p-6 rounded-lg bg-gray-100"
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200" />
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`py-12 ${backgroundColor}`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap]
            return (
              <div
                key={benefit.id}
                className={`
                  flex items-center space-x-4 p-6 rounded-lg bg-gray-50 
                  ${hoverColor} transition-all duration-300 ease-in-out
                  transform hover:scale-105 hover:shadow-lg
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
      </div>
    </section>
  )
}

export default Benefits
