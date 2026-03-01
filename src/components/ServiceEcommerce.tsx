import React from 'react'
import Icon from './Icon'

export default function ServiceEcommerce() {
  return (
    <section id="ecommerce" className="py-16 bg-white/2">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <header className="mb-6 flex items-start gap-4">
          <div className="p-3 rounded-md bg-pink-50 text-pink-600">
            <Icon name="ecommerce" size={28} color="currentColor" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">eCommerce Development</h1>
            <p className="text-gray-600 mt-2">
              Build fast, conversion-focused stores and headless commerce platforms that scale with your catalog and traffic.
            </p>
          </div>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold">Services we offer</h2>
            <ul className="list-disc list-inside mt-3 text-sm text-gray-600 space-y-2">
              <li>Headless storefronts with React / Next.js for fast, SEO-friendly pages</li>
              <li>Checkout, payments and subscription integrations (Stripe, PayPal)</li>
              <li>Inventory, shipping and ERP integrations</li>
              <li>Conversion-driven UX, A/B testing and analytics</li>
            </ul>

            <div className="mt-6">
              <h3 className="font-semibold">Performance & SEO</h3>
              <p className="text-sm text-gray-500 mt-2">
                We prioritise page speed and on-page SEO to improve discovery and conversion — from image optimisation to
                server-side rendering.
              </p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="p-4 bg-white/5 rounded">
              <h4 className="font-semibold">Platforms</h4>
              <p className="text-sm text-gray-500 mt-2">Shopify, BigCommerce, Commerce.js, custom headless stacks</p>
            </div>

            <div className="p-4 bg-white/5 rounded">
              <h4 className="font-semibold">Outcomes</h4>
              <p className="text-sm text-gray-500 mt-2">Higher conversion rates, faster load times, and simpler merchant workflows.</p>
            </div>
          </aside>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-white/5 rounded">
            <h3 className="font-semibold">Commerce analytics</h3>
            <p className="text-sm text-gray-500 mt-2">
              We instrument event tracking, funnels and cohort analysis so decisions are data-informed and measurable.
            </p>
          </div>
          <div className="p-6 bg-white/5 rounded">
            <h3 className="font-semibold">Migration & replatforming</h3>
            <p className="text-sm text-gray-500 mt-2">
              Safe migrations from legacy platforms with inventory sync, URL redirects and SEO preservation.
            </p>
          </div>
        </div>

        <div className="mt-10 flex gap-4">
          <a
            href="/contact"
            className="inline-block px-5 py-3 bg-pink-600 text-white rounded-md shadow-sm hover:bg-pink-700 hover:shadow-lg transition"
          >
            Build an eCommerce store
          </a>
          {/* <a
            href="/case-studies"
            className="inline-block px-5 py-3 border border-pink-600 text-pink-600 rounded-md hover:bg-pink-50 transition"
          >
            See commerce case studies
          </a> */}
        </div>

        {/* Commerce process & analytics */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Commerce approach</h2>
          <p className="text-sm text-gray-500 mt-2">We design for conversion, speed and reliable merchant workflows.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="p-4 border rounded hover:shadow-md hover:bg-white/5 transition">
              <h4 className="font-semibold">Headless storefronts</h4>
              <p className="text-sm text-gray-500 mt-2">Fast, SEO-friendly pages using modern frameworks.</p>
            </div>
            <div className="p-4 border rounded hover:shadow-md hover:bg-white/5 transition">
              <h4 className="font-semibold">Checkout optimisations</h4>
              <p className="text-sm text-gray-500 mt-2">Reduce friction and cart abandonment with smooth flows.</p>
            </div>
            <div className="p-4 border rounded hover:shadow-md hover:bg-white/5 transition">
              <h4 className="font-semibold">Analytics</h4>
              <p className="text-sm text-gray-500 mt-2">Event tracking, funnels and CRO experiments.</p>
            </div>
          </div>
        </div>

        {/* Migrations & platforms */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Platforms & migrations</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="p-4 border rounded">
              <h4 className="font-semibold">Migrations</h4>
              <p className="text-sm text-gray-500 mt-2">SEO-safe migrations, redirects and data syncing.</p>
            </div>
            <div className="p-4 border rounded">
              <h4 className="font-semibold">Supported platforms</h4>
              <p className="text-sm text-gray-500 mt-2">Shopify, BigCommerce, Commerce.js and custom headless stacks.</p>
            </div>
          </div>
        </div>

        {/* Success stories */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Commerce success stories</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-white/5 rounded">
              <h3 className="font-semibold">D2C Store — improved conversion</h3>
              <p className="text-sm text-gray-500 mt-2">Redesigned product pages and checkout, boosting conversions by 24%.</p>
            </div>
            <div className="p-6 bg-white/5 rounded">
              <h3 className="font-semibold">Enterprise catalogue migration</h3>
              <p className="text-sm text-gray-500 mt-2">Migrated a large catalogue to headless CMS with minimal downtime.</p>
            </div>
          </div>
        </div>

        {/* Why choose commerce */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Why choose us for commerce</h2>
          <ul className="mt-4 list-disc list-inside text-sm text-gray-600 space-y-2">
            <li>Conversion-focused design backed by analytics</li>
            <li>Headless expertise for performance and flexibility</li>
            <li>Seamless payments and inventory integrations</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

