'use client'

interface IconMockProps {
  name: string
  bgColor?: string
  size?: number
}

const IconMock = ({ name, bgColor = '#22C55E', size = 40 }: IconMockProps) => {
  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${bgColor}" rx="4"/>
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial" 
        font-size="${size/4}" 
        fill="#FFFFFF"
        text-anchor="middle" 
        dominant-baseline="middle"
      >
        ${name}
      </text>
    </svg>
  `

  const encodedSvg = typeof window !== 'undefined' 
    ? encodeURIComponent(svg)
    : ''

  return `data:image/svg+xml;charset=utf-8,${encodedSvg}`
}

export default IconMock
