import React from 'react'
import ServicesSection from '../components/ServicesSection'
import Icon from '../components/Icon'

export default function ServicesLanding() {
  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8 flex items-center gap-4">
          <div className="p-3 rounded-md bg-sky-50 text-sky-600">
            <Icon name="stack" size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Our Services</h1>
            <p className="text-gray-600 mt-2">Product, engineering and AI services to help you ship and scale.</p>
          </div>
        </div>
      </header>

      <main className="py-12">
        <ServicesSection />
      </main>
    </div>
  )
}

