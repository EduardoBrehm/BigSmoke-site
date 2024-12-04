import { NextResponse } from 'next/server';

const benefitsData = [
  {
    id: 1,
    title: 'Frete Grátis',
    description: 'Para compras acima de R$ 120 em RS',
    icon: 'truck',
    theme: 'green',
  },
  {
    id: 2,
    title: 'Pagamento Seguro',
    description: 'Cartão, PIX e Boleto',
    icon: 'credit-card',
    theme: 'blue',
  },
  {
    id: 3,
    title: 'Compra Garantida',
    description: '7 dias para troca ou devolução',
    icon: 'shield-check',
    theme: 'purple',
  },
];

export async function GET() {
  return NextResponse.json(benefitsData);
}
