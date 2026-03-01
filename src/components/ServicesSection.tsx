import React from 'react'
import ServiceCard from './ServiceCard'
import Icon from './Icon'

const services = [
  {
    id: 'software',
    title: 'Software Development',
    subtitle: 'Custom backend, APIs, and platforms built to scale',
    bullets: [
      'Enterprise-grade backend systems',
      'Microservices, APIs & integrations',
      'Performance, security, and observability',
    ],
  },
  {
    id: 'app',
    title: 'App Development',
    subtitle: 'Native and cross-platform mobile experiences',
    bullets: ['iOS & Android', 'React Native & Flutter', 'App store deployment'],
  },
  {
    id: 'ecommerce',
    title: 'eCommerce Development',
    subtitle: 'Conversion-focused stores and headless commerce',
    bullets: ['Fast, SEO-friendly storefronts', 'Payment & inventory integrations', 'Analytics & CRO'],
  },
  {
    id: 'mvp',
    title: 'MVP Development',
    subtitle: 'Validate fast with lean, production-ready MVPs',
    bullets: ['Product strategy & scoping', 'Rapid prototyping', 'Shipable MVP in weeks'],
  },
  {
    id: 'ai',
    title: 'AI-based Web Applications',
    subtitle: 'Intelligent web apps powered by modern ML and LLMs',
    bullets: [
      'Conversational assistants & copilots',
      'Document understanding & semantic search',
      'Custom recommendation engines',
    ],
  },
]

export default function ServicesSection() {
  return (
    <section id="our-services" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <header className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="p-3 rounded-md bg-sky-50 text-sky-600 w-fit">
            <Icon name="stack" size={28} color="currentColor" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Our Services</h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              We design, build and scale product-grade software — from mobile apps to complex backend systems and
              intelligent web applications.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s) => (
            <ServiceCard key={s.id} title={s.title} subtitle={s.subtitle} bullets={s.bullets} href={`/services/${s.id}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

