'use client'

const LogoMock = () => {
  const svg = `
    <svg width="200" height="60" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#22C55E"/>
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial" 
        font-size="24" 
        fill="#FFFFFF"
        text-anchor="middle" 
        dominant-baseline="middle"
        font-weight="bold"
      >
        BigSmoke
      </text>
    </svg>
  `

  const encodedSvg = typeof window !== 'undefined' 
    ? encodeURIComponent(svg)
    : ''

  return `data:image/svg+xml;charset=utf-8,${encodedSvg}`
}

export default LogoMock
