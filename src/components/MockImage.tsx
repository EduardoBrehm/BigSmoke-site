'use client'

interface MockImageProps {
  text?: string
  width?: number
  height?: number
  bgColor?: string
  textColor?: string
}

const MockImage = ({ 
  text = 'Mock Image', 
  width = 400, 
  height = 400,
  bgColor = '#22C55E',
  textColor = '#FFFFFF'
}: MockImageProps) => {
  if (typeof window === 'undefined') {
    return ''
  }

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect width="${width}" height="${height}" fill="${bgColor}"/>
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial" 
        font-size="${Math.min(width, height) / 10}px" 
        fill="${textColor}"
        text-anchor="middle" 
        dominant-baseline="middle"
      >
        ${text}
      </text>
    </svg>
  `.trim()

  const blob = new Blob([svg], { type: 'image/svg+xml' })
  return URL.createObjectURL(blob)
}

export default MockImage
