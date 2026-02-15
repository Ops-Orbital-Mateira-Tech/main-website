import React from 'react'

const cases = [
  { title: 'LabelXChange', desc: 'B2B fashion marketplace — placeholder' },
  { title: 'Fitness Freaks', desc: 'Wellness app — placeholder' }
]

export default function CaseStudies() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Case Studies</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {cases.map((c) => (
          <article key={c.title} className="p-6 border rounded bg-white">
            <h3 className="font-semibold text-xl mb-2">{c.title}</h3>
            <p className="text-gray-600">{c.desc}</p>
            <a className="text-blue-600 mt-4 inline-block" href="#">
              See Full Case Study
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}

