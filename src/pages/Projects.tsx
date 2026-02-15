import React, { useState } from 'react'

const projects = [
  {
    title: 'LabelXChange',
    img: '/images/case-1.jpg',
    tags: ['Web Applications', 'eCommerce', 'Backend'],
    desc: 'B2B fashion marketplace with secure transactions and catalog management.',
  },
  {
    title: 'Fitness Freaks',
    img: '/images/case-2.jpg',
    tags: ['Mobile', 'iOS', 'Android'],
    desc: 'Cross-platform wellness app focused on retention and user engagement.',
  },
  {
    title: 'Inventory Platform',
    img: '/images/thumb-1.jpg',
    tags: ['Backend', 'SaaS'],
    desc: 'Inventory and warehouse management with realtime sync.',
  },
  {
    title: 'Retail Analytics',
    img: '/images/thumb-2.jpg',
    tags: ['Data', 'Web'],
    desc: 'Dashboards and insights to boost retail conversion.',
  },
  {
    title: 'Booking Portal',
    img: '/images/thumb-3.jpg',
    tags: ['Web', 'Integration'],
    desc: 'Customer-facing booking and admin portal with integrations.',
  },
  {
    title: 'Customer Support Bot',
    img: '/images/thumb-4.jpg',
    tags: ['AI', 'Chat'],
    desc: 'Semantic search and conversational assistant for support teams.',
  },
]

export default function Projects() {
  const [filter, setFilter] = useState<string>('All')
  const tags = Array.from(new Set(projects.flatMap((p) => p.tags).concat(['All'])))

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter))

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="mb-6 flex gap-3 flex-wrap">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`text-sm px-3 py-1 rounded-md ${t === filter ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-800'}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <article key={p.title} className="bg-white rounded shadow overflow-hidden">
            <img src={p.img} alt={p.title} loading="lazy" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((tg) => (
                  <span key={tg} className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-700">
                    {tg}
                  </span>
                ))}
              </div>
              <a href="#" className="inline-block mt-4 text-indigo-600">
                See Full Case Study →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

