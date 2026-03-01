import React from 'react'
import Icon from './Icon'

export default function ServiceSoftware() {
  return (
    <section id="software" className="py-16 bg-gradient-to-b from-white/0 to-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-8 flex items-start gap-4">
          <div className="p-3 rounded-md bg-indigo-50 text-indigo-600">
            <Icon name="software" size={28} color="currentColor" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Software Development Services</h1>
            <p className="text-gray-600 mt-3">
              Custom, secure and scalable software engineered to solve complex business problems — from SaaS platforms to
              enterprise systems and integrations.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold">What we build</h2>
            <p className="text-gray-600 mt-3">
              We design and deliver production-ready software using modern architectures. Our teams specialise in
              microservices, event-driven systems, and resilient APIs so your product stays maintainable as it grows.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded">
                <h3 className="font-semibold">Custom Applications</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Tailored solutions for workflows, automation, and unique product features that off-the-shelf tools can’t
                  provide.
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded">
                <h3 className="font-semibold">APIs & Integrations</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Stable REST or GraphQL APIs, integrations with 3rd-party services, webhooks and data pipelines.
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded">
                <h3 className="font-semibold">Platform Engineering</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Scalable cloud infrastructure, multi-region deployments, observability and security-first operations.
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded">
                <h3 className="font-semibold">Modernisation & Maintenance</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Replatform legacy systems, reduce technical debt, and introduce automated testing and CI/CD.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold">Industries we serve</h2>
              <p className="text-sm text-gray-500 mt-2">
                Healthcare, Fintech, Logistics, Retail, Education and more — we adapt processes and compliance to each
                domain.
              </p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="p-4 bg-white/5 rounded">
              <h4 className="font-semibold">Delivery model</h4>
              <p className="text-sm text-gray-500 mt-2">Fixed-scope, time & material, or dedicated teams — flexible to your needs.</p>
            </div>

            <div className="p-4 bg-white/5 rounded">
              <h4 className="font-semibold">Tech highlights</h4>
              <ul className="mt-2 text-sm text-gray-500 list-disc list-inside space-y-1">
                <li>Node.js, Go, Python</li>
                <li>Postgres, MongoDB, Redis</li>
                <li>Docker, Kubernetes, Terraform</li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold">Our process</h2>
          <ol className="list-decimal list-inside mt-3 text-sm text-gray-600 space-y-2">
            <li>
              Discovery — align business goals, user journeys and technical constraints.
            </li>
            <li>
              Architecture & planning — define a scalable architecture and roadmap.
            </li>
            <li>
              Iterative delivery — sprints with automated tests and continuous delivery.
            </li>
            <li>
              Launch & operate — deploy, monitor and iterate based on user feedback and metrics.
            </li>
          </ol>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-white/5 rounded">
            <h3 className="font-semibold">Customer outcomes</h3>
            <ul className="list-disc list-inside mt-3 text-sm text-gray-600 space-y-2">
              <li>Faster time-to-market with predictable delivery</li>
              <li>Reduced incidents and improved uptime</li>
              <li>Clear maintenance path and lower total cost of ownership</li>
            </ul>
          </div>

          <div className="p-6 bg-white/5 rounded">
            <h3 className="font-semibold">Case studies</h3>
            <p className="text-sm text-gray-500 mt-2">
              We've built platforms for marketplaces, healthcare portals and logistics tools — driving measurable business
              improvements. {/* <a href="/case-studies" className="text-blue-600">See examples</a> */}.
            </p>
          </div>
        </div>

        <div className="mt-10 flex gap-4">
          <a
            href="/contact"
            className="inline-block px-5 py-3 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 transition"
          >
            Book a free consultation
          </a>
          <a
            href="/contact"
            className="inline-block px-5 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition"
          >
            Request a quote
          </a>
        </div>

        {/* Process timeline */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Our software process</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="p-6 border rounded hover:shadow-md hover:bg-white/5 transition">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">01 — Requirements</h3>
                <div className="text-sm text-gray-400">01</div>
              </div>
              <p className="text-sm text-gray-600 mt-3">Gather goals, constraints and compliance needs to align scope.</p>
            </div>
            <div className="p-6 border rounded hover:shadow-md hover:bg-white/5 transition">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">02 — Design & Architecture</h3>
                <div className="text-sm text-gray-400">02</div>
              </div>
              <p className="text-sm text-gray-600 mt-3">Define architecture, data flows and UX with proof-of-concepts.</p>
            </div>
            <div className="p-6 border rounded hover:shadow-md hover:bg-white/5 transition">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">03 — Build & QA</h3>
                <div className="text-sm text-gray-400">03</div>
              </div>
              <p className="text-sm text-gray-600 mt-3">Iterative engineering, automated tests and continuous delivery.</p>
            </div>
          </div>
        </div>

        {/* Methodologies */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Methodologies</h2>
          <p className="text-sm text-gray-500 mt-2">We work with flexible processes to match project needs.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Agile', desc: 'Iterative sprints and continuous feedback' },
              { title: 'Scrum', desc: 'Sprint planning, reviews and retrospectives' },
              { title: 'Waterfall', desc: 'Predictable phases for fixed-scope projects' },
              { title: 'DevOps', desc: 'CI/CD, infra as code and observability' },
            ].map((m) => (
              <div key={m.title} className="p-6 bg-white/5 rounded">
                <h4 className="font-semibold">{m.title}</h4>
                <p className="text-sm text-gray-500 mt-2">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success stories */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Success stories</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <article className="p-6 bg-white/5 rounded">
              <h3 className="font-semibold">LabelXChange — B2B Marketplace</h3>
              <p className="text-sm text-gray-500 mt-2">Custom platform for apparel wholesale with search and secure transactions.</p>
              {/* <a href="/case-studies" className="text-sm text-blue-600 mt-3 inline-block">See full case study →</a> */}
            </article>
            <article className="p-6 bg-white/5 rounded">
              <h3 className="font-semibold">HealthPortal — Patient management</h3>
              <p className="text-sm text-gray-500 mt-2">HIPAA-aware portal to track patient records, telehealth and analytics.</p>
              {/* <a href="/case-studies" className="text-sm text-blue-600 mt-3 inline-block">See full case study →</a> */}
            </article>
          </div>
        </div>

        {/* Why choose */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Why choose us</h2>
          <ul className="mt-4 list-disc list-inside text-sm text-gray-600 space-y-2">
            <li>13+ years in software engineering and product delivery</li>
            <li>End-to-end delivery: design, engineering, QA and DevOps</li>
            <li>Focus on security, compliance and observability</li>
            <li>Flexible engagement: fixed-scope, T&M or dedicated teams</li>
          </ul>
        </div>

        {/* Team & roles */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Team expertise</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Front-end', desc: 'React, Next.js, Vue' },
              { title: 'Back-end', desc: 'Node, Python, Go' },
              { title: 'Mobile', desc: 'iOS, Android, React Native' },
              { title: 'QA', desc: 'Automated & manual testing' },
              { title: 'DevOps', desc: 'Kubernetes, Terraform' },
              { title: 'Data', desc: 'Postgres, Redis, analytics' },
            ].map((r) => (
              <div key={r.title} className="p-4 bg-white/5 rounded">
                <h4 className="font-semibold">{r.title}</h4>
                <p className="text-sm text-gray-500 mt-2">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Industries</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {['Healthcare','Fintech','Logistics','Retail','Manufacturing','Real Estate'].map((i) => (
              <div key={i} className="p-6 border rounded">
                <h4 className="font-semibold">{i}</h4>
                <p className="text-sm text-gray-500 mt-2">Custom software and compliance-aware solutions for {i}.</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services & support blocks */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="p-6 border rounded">
            <h4 className="font-semibold">Software development outsourcing</h4>
            <p className="text-sm text-gray-500 mt-2">Ongoing maintenance, upgrades and SLA-driven support.</p>
          </div>
          <div className="p-6 border rounded">
            <h4 className="font-semibold">Team augmentation</h4>
            <p className="text-sm text-gray-500 mt-2">Embed experienced engineers into your team for fast ramp.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

