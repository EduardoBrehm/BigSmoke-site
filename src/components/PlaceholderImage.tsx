'use client'

interface PlaceholderImageProps {
  text: string
  className?: string
  bgColor?: string
  textColor?: string
}

const PlaceholderImage = ({ 
  text, 
  className = '', 
  bgColor = '#22C55E',
  textColor = '#FFFFFF' 
}: PlaceholderImageProps) => {
  return (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <span 
        className="text-center font-medium"
        style={{ color: textColor }}
      >
        {text}
      </span>
    </div>
  )
}

export default PlaceholderImage
