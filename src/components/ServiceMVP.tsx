import React from 'react'
import Icon from './Icon'

export default function ServiceMVP() {
  return (
    <section id="mvp" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <header className="mb-6 flex items-start gap-4">
          <div className="p-3 rounded-md bg-yellow-50 text-yellow-600">
            <Icon name="mvp" size={28} color="currentColor" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">MVP Development</h1>
            <p className="text-gray-600 mt-2">
              Validate quickly with a focused product build. We help founders move from idea to measurable user feedback with
              a production-ready MVP.
            </p>
          </div>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold">What we do</h2>
            <ul className="list-disc list-inside mt-3 text-sm text-gray-600 space-y-2">
              <li>Problem discovery and hypothesis mapping</li>
              <li>Wireframes, prototypes and clickable designs</li>
              <li>Rapid engineering sprints to ship the core product</li>
              <li>Measurement plan to validate product-market fit</li>
            </ul>

            <div className="mt-6">
              <h3 className="font-semibold">Why an MVP</h3>
              <p className="text-sm text-gray-500 mt-2">
                An MVP reduces risk and cost — we prioritise features that test the riskiest assumptions and deliver user
                value quickly.
              </p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="p-4 bg-white/5 rounded">
              <h4 className="font-semibold">Deliverables</h4>
              <p className="text-sm text-gray-500 mt-2">Prototype, working web app or mobile MVP, analytics and a testing plan.</p>
            </div>

            <div className="p-4 bg-white/5 rounded">
              <h4 className="font-semibold">Timeline</h4>
              <p className="text-sm text-gray-500 mt-2">Typically 4–10 weeks depending on scope and integrations.</p>
            </div>
          </aside>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold">MVP process</h2>
          <ol className="list-decimal list-inside mt-3 text-sm text-gray-600 space-y-2">
            <li>Discovery & prioritisation — decide the riskiest assumptions to test</li>
            <li>Design & prototype — validate flows with users</li>
            <li>Build & release — iterate with short sprints and metrics</li>
            <li>Learn & iterate — use data to plan the next milestones</li>
          </ol>
        </div>

        <div className="mt-10 flex gap-4">
          <a
            href="/contact"
            className="inline-block px-5 py-3 bg-yellow-600 text-white rounded-md shadow-sm hover:bg-yellow-700 hover:shadow-lg transition"
          >
            Validate my idea
          </a>
          <a
            href="/process"
            className="inline-block px-5 py-3 border border-yellow-600 text-yellow-600 rounded-md hover:bg-yellow-50 transition"
          >
            Learn about our approach
          </a>
        </div>
        {/* MVP deliverables */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">MVP deliverables</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="p-4 border rounded hover:shadow-md hover:bg-white/5 transition">
              <h4 className="font-semibold">Prototype</h4>
              <p className="text-sm text-gray-500 mt-2">Clickable flows and validated UX before building.</p>
            </div>
            <div className="p-4 border rounded hover:shadow-md hover:bg-white/5 transition">
              <h4 className="font-semibold">Working MVP</h4>
              <p className="text-sm text-gray-500 mt-2">Production-ready core features with analytics hooks.</p>
            </div>
            <div className="p-4 border rounded hover:shadow-md hover:bg-white/5 transition">
              <h4 className="font-semibold">Measurement plan</h4>
              <p className="text-sm text-gray-500 mt-2">Key metrics, funnels and experiment ideas.</p>
            </div>
          </div>
        </div>

        {/* Timeline & process */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Timeline</h2>
          <p className="text-sm text-gray-500 mt-2">Typical MVPs ship in 4–10 weeks depending on integrations.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="p-4 border rounded">
              <h4 className="font-semibold">Sprint cadence</h4>
              <p className="text-sm text-gray-500 mt-2">Weekly demo and prioritisation for fast feedback loops.</p>
            </div>
            <div className="p-4 border rounded">
              <h4 className="font-semibold">Post-launch</h4>
              <p className="text-sm text-gray-500 mt-2">Iterate using user data to prioritise next features.</p>
            </div>
          </div>
        </div>

        {/* Case studies */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">MVP success stories</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-white/5 rounded">
              <h3 className="font-semibold">Marketplace MVP — validated demand</h3>
              <p className="text-sm text-gray-500 mt-2">Launched initial marketplace and validated buyer activity in 6 weeks.</p>
            </div>
            <div className="p-6 bg-white/5 rounded">
              <h3 className="font-semibold">Health MVP — early users</h3>
              <p className="text-sm text-gray-500 mt-2">Delivered early patient onboarding and telehealth features to test retention.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

