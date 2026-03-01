import React from 'react'
import Icon from './Icon'

type Props = {
  title: string
  subtitle?: string
  bullets?: string[]
  href?: string
  icon?: string
}

function pickColor(title: string) {
  const t = title.toLowerCase()
  if (t.includes('software')) return 'text-indigo-500 bg-indigo-100'
  if (t.includes('app')) return 'text-green-500 bg-green-100'
  if (t.includes('ecom') || t.includes('commerce')) return 'text-pink-500 bg-pink-100'
  if (t.includes('mvp')) return 'text-yellow-600 bg-yellow-100'
  if (t.includes('ai')) return 'text-purple-600 bg-purple-100'
  return 'text-sky-500 bg-sky-100'
}

export default function ServiceCard({ title, subtitle, bullets = [], href = '#', icon }: Props) {
  const colorClasses = pickColor(title)

  return (
    <a
      href={href}
      className="group block p-4 sm:p-6 rounded-lg shadow-sm bg-white/5 hover:shadow-lg transform hover:-translate-y-1 transition-all"
    >
      <div className="flex items-start gap-4">
        {icon ? (
          <img src={icon} alt={`${title} icon`} className="w-12 h-12 object-contain" />
        ) : (
          <div className={`w-12 h-12 rounded-md flex items-center justify-center ${colorClasses} transition-transform group-hover:scale-105`}>
            <Icon name={title.split(' ')[0].toLowerCase()} size={20} color="currentColor" />
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          {subtitle && <p className="text-sm text-gray-400 mt-1">{subtitle}</p>}
          {bullets.length > 0 && (
            <ul className="mt-3 text-sm list-disc list-inside space-y-1 text-gray-400">
              {bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </a>
  )
}

