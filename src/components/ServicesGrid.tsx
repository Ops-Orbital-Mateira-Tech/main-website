import React from 'react'

const services = [
  { title: 'Mobile App Development', desc: 'iOS and Android apps' },
  { title: 'Web Development', desc: 'React, Next.js, and more' },
  { title: 'Software Development', desc: 'Custom backend systems' },
  { title: 'UI/UX Design', desc: 'Design systems and prototyping' }
]

export default function ServicesGrid() {
  return (
    <div id="services" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s) => (
        <div key={s.title} className="p-6 border rounded shadow-sm bg-white">
          <h4 className="font-semibold mb-2">{s.title}</h4>
          <p className="text-gray-600 text-sm">{s.desc}</p>
        </div>
      ))}
    </div>
  )
}

