import React from 'react'

type Props = {
  name: string
  size?: number
  className?: string
  color?: string
}

export default function Icon({ name, size = 24, className = '', color = 'currentColor' }: Props) {
  const common = { width: size, height: size, className }

  switch (name) {
    case 'software':
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="12" rx="2" stroke={color} strokeWidth="1.5" />
          <path d="M7 20h10" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'app':
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="3" width="12" height="18" rx="2" stroke={color} strokeWidth="1.5" />
          <circle cx="12" cy="18" r="0.8" fill={color} />
        </svg>
      )
    case 'ecommerce':
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6h2l2 11h10l2-7H8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="10" cy="20" r="1" fill={color} />
          <circle cx="18" cy="20" r="1" fill={color} />
        </svg>
      )
    case 'mvp':
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3 6 6 .5-4.5 3 1.5 6L12 14l-6 4 1.5-6L3 8.5 9 8 12 2z" stroke={color} strokeWidth="1" strokeLinejoin="round" fill="none" />
        </svg>
      )
    case 'ai':
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.5" />
          <path d="M12 8v8M8 12h8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'stack':
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="5" width="18" height="3" rx="1" stroke={color} strokeWidth="1.2" />
          <rect x="6" y="11" width="12" height="3" rx="1" stroke={color} strokeWidth="1.2" />
          <rect x="9" y="17" width="6" height="3" rx="1" stroke={color} strokeWidth="1.2" />
        </svg>
      )
    default:
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" />
        </svg>
      )
  }
}

