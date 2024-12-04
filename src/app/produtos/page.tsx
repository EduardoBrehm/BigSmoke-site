import ProductGrid from '@/components/ProductGrid'

const mockProducts = [
  {
    id: 1,
    name: 'Dichavador Be Safe',
    price: 129.90,
    image: 'besafe.png',
    category: 'Dichavador',
    discount: 15,
  },
  {
    id: 2,
    name: 'Bong de Vidro Preto',
    price: 199.90,
    image: 'bong-preto.png',
    category: 'Bong',
  },
  {
    id: 3,
    name: 'Seda King Size',
    price: 7.90,
    image: 'seda-king.png',
    category: 'Seda',
    discount: 10,
  },
  {
    id: 4,
    name: 'Piteira de Vidro',
    price: 29.90,
    image: 'piteira-vidro.png',
    category: 'Piteira',
  },
  {
    id: 5,
    name: 'Isqueiro Clipper',
    price: 15.90,
    image: 'clipper.png',
    category: 'Isqueiro',
    discount: 5,
  },
  {
    id: 6,
    name: 'Cinzeiro de Cerâmica',
    price: 39.90,
    image: 'cinzeiro.png',
    category: 'Cinzeiro',
  },
  {
    id: 7,
    name: 'Kit Seda + Piteira',
    price: 12.90,
    image: 'kit-seda.png',
    category: 'Kit',
    discount: 20,
  },
  {
    id: 8,
    name: 'Pipe de Madeira',
    price: 89.90,
    image: 'pipe-madeira.png',
    category: 'Pipe',
  },
]

export default function ProdutosPage() {
  return (
    <div className="py-8">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Nossos Produtos
        </h1>
        <div className="flex flex-col space-y-4 mb-8">
          <div className="flex items-center space-x-4">
            <select className="rounded-lg border-gray-300 focus:ring-green-500 focus:border-green-500">
              <option value="">Categoria</option>
              <option value="bong">Bong</option>
              <option value="seda">Seda</option>
              <option value="dichavador">Dichavador</option>
              <option value="piteira">Piteira</option>
              <option value="isqueiro">Isqueiro</option>
              <option value="cinzeiro">Cinzeiro</option>
            </select>
            <select className="rounded-lg border-gray-300 focus:ring-green-500 focus:border-green-500">
              <option value="">Ordenar por</option>
              <option value="price-asc">Menor preço</option>
              <option value="price-desc">Maior preço</option>
              <option value="name">Nome</option>
            </select>
          </div>
        </div>
        <ProductGrid products={mockProducts} />
      </div>
    </div>
  )
}
