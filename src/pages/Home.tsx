import React from 'react'
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import ClientsCarousel from '../components/ClientsCarousel'
import Icon from '../components/Icon'

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">What We Do</h2>
        <ServicesSection />
      </section>

      <section className="w-full bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Trusted by</h3>
              <p className="text-slate-300 mt-2">Leading teams and startups rely on our engineering and design teams.</p>
            </div>
            <div className="flex-1">
              <ClientsCarousel />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 text-slate-900">
        <div className="py-8">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>

          <div className="grid gap-12">
            <article className="grid md:grid-cols-2 gap-6 items-stretch bg-white rounded-lg overflow-hidden shadow">
              <div className="relative h-64 md:h-auto">
                <img
                  src="/images/case-1.jpg"
                  alt="LabelXChange screenshot"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-2 bg-slate-100/80 text-slate-900 px-3 py-1 rounded text-xs">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-90">
                      <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    Web Applications
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-slate-900">Developed Custom Mobile App for LabelXChange</h3>
                <p className="mt-3 text-slate-600">
                  A B2B marketplace platform for designer apparel — we built secure transactions, catalog search and a
                  performant admin portal to manage listings and orders.
                </p>
                <a href="/case-studies" className="inline-block mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md">
                  See Full Case Study →
                </a>
              </div>
            </article>

            <article className="grid md:grid-cols-2 gap-6 items-stretch bg-white rounded-lg overflow-hidden shadow">
              <div className="relative h-64 md:h-auto order-2 md:order-1">
                <img
                  src="/images/case-2.jpg"
                  alt="Wellness app screenshot"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-2 bg-slate-100/80 text-slate-900 px-3 py-1 rounded text-xs">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-90">
                      <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    Mobile Application Development
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center order-1 md:order-2">
                <h3 className="text-2xl font-semibold text-slate-900">Mobile App for Chronic Bowel Disease Support</h3>
                <p className="mt-3 text-slate-600">
                  A patient-focused health app with secure data handling, symptom tracking and telehealth integration to
                  support ongoing care.
                </p>
                <a href="/case-studies" className="inline-block mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md">
                  See Full Case Study →
                </a>
              </div>
            </article>

            {/* small projects grid */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { img: '/images/thumb-1.jpg', title: 'Inventory Platform', tags: ['Backend', 'SaaS'] },
                { img: '/images/thumb-2.jpg', title: 'Retail Analytics', tags: ['Data', 'Web'] },
                { img: '/images/thumb-3.jpg', title: 'Booking Portal', tags: ['Web', 'Integration'] },
                { img: '/images/thumb-4.jpg', title: 'Customer Support Bot', tags: ['AI', 'Chat'] },
                { img: '/images/thumb-5.jpg', title: 'Subscription Service', tags: ['eCommerce'] },
                { img: '/images/thumb-6.jpg', title: 'Employee Portal', tags: ['Internal Tools'] },
              ].map((p, idx) => (
                <div key={idx} className="bg-white rounded overflow-hidden shadow-sm">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h4 className="font-semibold text-slate-900">{p.title}</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-700">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

