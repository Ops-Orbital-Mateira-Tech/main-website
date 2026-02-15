import React from 'react'
import Icon from './Icon'

export default function ServiceApp() {
  return (
    <section id="app" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <header className="mb-6 flex items-start gap-4">
          <div className="p-3 rounded-md bg-green-50 text-green-600">
            <Icon name="app" size={28} color="currentColor" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">App Development</h1>
            <p className="text-gray-600 mt-2">
              Design-led mobile apps and cross-platform experiences that scale — from early prototypes to global releases.
            </p>
          </div>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold">Our mobile capabilities</h2>
            <ul className="list-disc list-inside mt-3 text-sm text-gray-600 space-y-2">
              <li>Native iOS (Swift) and Android (Kotlin) development</li>
              <li>Cross-platform with React Native or Flutter for faster iterations</li>
              <li>Offline sync, background processing and complex native integrations</li>
              <li>App store submission, release management and monitoring</li>
            </ul>

            <div className="mt-6">
              <h3 className="font-semibold">Design & UX</h3>
              <p className="text-sm text-gray-500 mt-2">
                We pair product design with engineering to craft usable, accessible interfaces and polished interactions.
              </p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="p-4 bg-white/5 rounded">
              <h4 className="font-semibold">Typical timeline</h4>
              <p className="text-sm text-gray-500 mt-2">6–14 weeks for MVPs, 3–6+ months for feature-rich apps.</p>
            </div>

            <div className="p-4 bg-white/5 rounded">
              <h4 className="font-semibold">Platforms & tools</h4>
              <p className="text-sm text-gray-500 mt-2">Swift, Kotlin, React Native, Flutter, Firebase, App Center</p>
            </div>
          </aside>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold">Release & support</h2>
          <p className="text-sm text-gray-600 mt-2">
            We don’t stop at launch — we provide crash analytics, performance monitoring and continuous delivery so your
            app stays fast and reliable.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-white/5 rounded">
            <h3 className="font-semibold">What clients get</h3>
            <ul className="list-disc list-inside mt-3 text-sm text-gray-600 space-y-2">
              <li>Production-ready app with analytics & CI</li>
              <li>Optimised onboarding flows and retention features</li>
              <li>App store approvals and release management</li>
            </ul>
          </div>
          <div className="p-6 bg-white/5 rounded">
            <h3 className="font-semibold">Case study snapshot</h3>
            <p className="text-sm text-gray-500 mt-2">
              Delivered a cross-platform wellness app with 50k+ downloads and 4.8+ ratings — improved retention through A/B
              tested onboarding.
            </p>
          </div>
        </div>

        <div className="mt-10 flex gap-4">
          <a
            href="/contact"
            className="inline-block px-5 py-3 bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700 hover:shadow-lg transition"
          >
            Start your app project
          </a>
          <a
            href="/portfolio"
            className="inline-block px-5 py-3 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition"
          >
            View mobile work
          </a>
        </div>
        {/* Tech stack */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Tech & tools</h2>
          <p className="text-sm text-gray-500 mt-2">We use modern mobile stacks and tooling for quality and speed.</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {['Swift','Kotlin','React Native','Flutter','Firebase','AppCenter'].map((t) => (
              <div
                key={t}
                className="p-4 rounded bg-gradient-to-b from-white/3 to-white/5 hover:shadow-md transition text-sm text-gray-600"
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Release & process */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Release process</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="p-4 border rounded">
              <h4 className="font-semibold">Design & prototype</h4>
              <p className="text-sm text-gray-500 mt-2">UX flows, prototypes and user testing before engineering begins.</p>
            </div>
            <div className="p-4 border rounded">
              <h4 className="font-semibold">Engineering sprints</h4>
              <p className="text-sm text-gray-500 mt-2">Short sprints with feature toggles and telemetry.</p>
            </div>
            <div className="p-4 border rounded">
              <h4 className="font-semibold">Launch & monitor</h4>
              <p className="text-sm text-gray-500 mt-2">Crash analytics, performance monitoring and staged rollouts.</p>
            </div>
          </div>
        </div>

        {/* Case studies */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Case studies</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-white/5 rounded">
              <h3 className="font-semibold">Wellness App — 50k+ downloads</h3>
              <p className="text-sm text-gray-500 mt-2">Cross-platform app improving onboarding and retention.</p>
            </div>
            <div className="p-6 bg-white/5 rounded">
              <h3 className="font-semibold">Taxi App — high reliability</h3>
              <p className="text-sm text-gray-500 mt-2">Real-time tracking, optimized routing and payments integration.</p>
            </div>
          </div>
        </div>

        {/* Why choose */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Why choose our mobile team</h2>
          <ul className="mt-4 list-disc list-inside text-sm text-gray-600 space-y-2">
            <li>Design-driven approach for higher retention</li>
            <li>Native expertise and cross-platform efficiency</li>
            <li>End-to-end release management and monitoring</li>
          </ul>
        </div>

        {/* Industries */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Industries we serve</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {['Health','Fitness','Transport','Retail','Finance','Education'].map((i) => (
              <div key={i} className="p-4 border rounded">
                <h4 className="font-semibold">{i}</h4>
                <p className="text-sm text-gray-500 mt-2">Mobile solutions tailored for {i} use-cases and constraints.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

