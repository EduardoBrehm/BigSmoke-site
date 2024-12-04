'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import MockImage from './MockImage'

interface CartProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const mockCartItems = [
  {
    id: 1,
    name: 'Dichavador Be Safe',
    price: 129.90,
    quantity: 1,
    bgColor: '#F97316',
  },
  {
    id: 2,
    name: 'Bong de Vidro',
    price: 199.90,
    quantity: 2,
    bgColor: '#4ADE80',
  },
]

const Cart = ({ isOpen, setIsOpen }: CartProps) => {
  const total = mockCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Carrinho de Compras
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Fechar painel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {mockCartItems.map((item) => {
                              const mockImageUrl = MockImage({
                                text: item.name,
                                width: 200,
                                height: 200,
                                bgColor: item.bgColor,
                              })

                              return (
                                <li key={item.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <Image
                                      src={mockImageUrl}
                                      alt={item.name}
                                      width={96}
                                      height={96}
                                      className="h-full w-full object-contain"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>{item.name}</h3>
                                        <p className="ml-4">R$ {item.price.toFixed(2)}</p>
                                      </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <div className="flex items-center space-x-2">
                                        <span className="text-gray-500">Qtd</span>
                                        <select
                                          value={item.quantity}
                                          onChange={() => {}}
                                          className="rounded-md border-gray-300 py-1.5 text-base leading-4 focus:border-green-500 focus:ring-green-500"
                                        >
                                          {[1, 2, 3, 4, 5].map((num) => (
                                            <option key={num} value={num}>
                                              {num}
                                            </option>
                                          ))}
                                        </select>
                                      </div>
                                      <button
                                        type="button"
                                        className="font-medium text-green-600 hover:text-green-500"
                                      >
                                        Remover
                                      </button>
                                    </div>
                                  </div>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>R$ {total.toFixed(2)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Frete e impostos calculados no checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700"
                        >
                          Finalizar Compra
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          ou{' '}
                          <button
                            type="button"
                            className="font-medium text-green-600 hover:text-green-500"
                            onClick={() => setIsOpen(false)}
                          >
                            Continuar Comprando
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Cart
