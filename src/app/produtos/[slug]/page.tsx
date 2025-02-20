import { notFound } from 'next/navigation'
import Image from 'next/image'
import { ProductGallery } from '@/components/ProductGallery'
import { AddToCartButton } from '@/components/AddToCartButton'

// Simular dados do produto (depois você pode substituir por sua API real)
const getProduct = async (slug: string) => {
  // Mock de produtos existentes
  const products = {
    'dichavador-be-safe': {
      id: 1,
      name: 'Dichavador Be Safe',
      slug: 'dichavador-be-safe',
      price: 129.90,
      description: 'Dichavador premium da marca Be Safe, perfeito para um processamento consistente e eficiente.',
      features: [
        'Material resistente',
        'Dentes afiados',
        'Design ergonômico',
        'Compartimento coletor'
      ],
      images: [
        '/products/besafe.png',
        '/products/besafe-detail1.png',
        '/products/besafe-detail2.png'
      ],
      stock: 15,
      specifications: {
        material: 'Alumínio aeronáutico',
        diâmetro: '50mm',
        peso: '80g',
        compartimentos: '3'
      },
      category: 'Dichavador',
      discount: 15
    },
    'bong-vidro-preto': {
      id: 2,
      name: 'Bong de Vidro Preto',
      slug: 'bong-vidro-preto',
      price: 199.90,
      description: 'Bong de vidro premium com acabamento em preto, oferecendo uma experiência única.',
      features: [
        'Vidro borossilicato',
        'Acabamento em preto',
        'Base estável',
        'Percolador eficiente'
      ],
      images: [
        '/products/bong-preto.png',
        '/products/bong-preto-detail1.png',
        '/products/bong-preto-detail2.png'
      ],
      stock: 8,
      specifications: {
        material: 'Vidro borossilicato',
        altura: '30cm',
        peso: '450g',
        capacidade: '500ml'
      },
      category: 'Bong'
    }
  }

  return products[slug as keyof typeof products]
}

export default async function ProductPage({
  params
}: {
  params: { slug: string }
}) {
  const product = await getProduct(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Galeria de Imagens */}
        <div className="relative">
          <ProductGallery images={product.images} productName={product.name} />
        </div>

        {/* Informações do Produto */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">
              R$ {product.price.toFixed(2)}
            </span>
            {product.stock > 0 ? (
              <span className="ml-4 text-sm text-green-600">
                Em estoque ({product.stock} unidades)
              </span>
            ) : (
              <span className="ml-4 text-sm text-red-600">
                Fora de estoque
              </span>
            )}
          </div>

          <p className="text-gray-600">{product.description}</p>

          {/* Características */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Características</h2>
            <ul className="list-disc pl-5 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>

          {/* Especificações */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Especificações</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="border-b pb-2">
                  <span className="font-medium text-gray-700 capitalize">
                    {key}:
                  </span>
                  <span className="ml-2 text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Botão de Compra */}
          <div className="mt-8">
            <AddToCartButton 
              productId={product.id}
              disabled={product.stock === 0}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
