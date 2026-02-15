import React from 'react'
import Icon from './Icon'

export default function ServiceAI() {
  return (
    <section id="ai" className="py-16 bg-gradient-to-r from-white/0 to-white/3">
      <div className="max-w-5xl mx-auto px-6">
        <header className="mb-6 flex items-start gap-4">
          <div className="p-3 rounded-md bg-purple-50 text-purple-600">
            <Icon name="ai" size={28} color="currentColor" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">AI-based Web Applications</h1>
            <p className="text-gray-600 mt-2">
              We build intelligent web apps that combine modern LLMs, embeddings and bespoke ML models to deliver useful,
              production-grade experiences.
            </p>
          </div>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold">Capabilities</h2>
            <ul className="list-disc list-inside mt-3 text-sm text-gray-600 space-y-2">
              <li>Conversational assistants and domain-specific copilots</li>
              <li>Document ingestion, vector stores and semantic search</li>
              <li>Personalization, recommendations and predictive features</li>
              <li>Custom model fine-tuning and evaluation</li>
            </ul>

            <div className="mt-6">
              <h3 className="font-semibold">Responsible AI</h3>
              <p className="text-sm text-gray-500 mt-2">
                We implement guardrails, data governance and monitoring to reduce bias and ensure safe, auditable outputs.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">Engineering approach</h3>
              <p className="text-sm text-gray-500 mt-2">
                From prototyping with hosted LLMs to production deployments with vector databases and scalable inference,
                we focus on reliability, cost and latency trade-offs.
              </p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="p-4 bg-white/5 rounded">
              <h4 className="font-semibold">Common integrations</h4>
              <p className="text-sm text-gray-500 mt-2">OpenAI, Anthropic, Cohere, Pinecone, Milvus, Weaviate, AWS SageMaker</p>
            </div>

            <div className="p-4 bg-white/5 rounded">
              <h4 className="font-semibold">Engagement types</h4>
              <p className="text-sm text-gray-500 mt-2">PoC, pilot, or full production — we adapt to budget and risk.</p>
            </div>
          </aside>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold">Typical projects</h2>
          <ul className="list-disc list-inside mt-3 text-sm text-gray-600 space-y-2">
            <li>Knowledge base assistants for customer support</li>
            <li>Semantic search over documents and product catalogs</li>
            <li>Automated summarisation and insights for long-form content</li>
          </ul>
        </div>

        <div className="mt-10 flex gap-4">
          <a
            href="/contact"
            className="inline-block px-5 py-3 bg-purple-600 text-white rounded-md shadow-sm hover:bg-purple-700 hover:shadow-lg transition"
          >
            Discuss an AI project
          </a>
          <a
            href="/ai-resources"
            className="inline-block px-5 py-3 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition"
          >
            Learn about our AI approach
          </a>
        </div>
        {/* AI pipeline & integrations */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">AI development pipeline</h2>
          <p className="text-sm text-gray-500 mt-2">From data collection to deployment, we build reproducible ML pipelines.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="p-4 border rounded hover:shadow-md hover:bg-white/5 transition">
              <h4 className="font-semibold">Ingest</h4>
              <p className="text-sm text-gray-500 mt-2">Document parsing, cleaning and metadata extraction.</p>
            </div>
            <div className="p-4 border rounded hover:shadow-md hover:bg-white/5 transition">
              <h4 className="font-semibold">Embed</h4>
              <p className="text-sm text-gray-500 mt-2">Create vector representations for semantic search and retrieval.</p>
            </div>
            <div className="p-4 border rounded hover:shadow-md hover:bg-white/5 transition">
              <h4 className="font-semibold">Deploy</h4>
              <p className="text-sm text-gray-500 mt-2">Serve models with scalable inference and monitoring.</p>
            </div>
          </div>
        </div>

        {/* Responsible AI */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Responsible AI</h2>
          <p className="text-sm text-gray-500 mt-2">We emphasise privacy, explainability and human-in-the-loop review.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="p-4 border rounded">
              <h4 className="font-semibold">Governance</h4>
              <p className="text-sm text-gray-500 mt-2">Data lineage, consent and retention policies.</p>
            </div>
            <div className="p-4 border rounded">
              <h4 className="font-semibold">Evaluation</h4>
              <p className="text-sm text-gray-500 mt-2">Bias checks, prompt testing and human evaluation loops.</p>
            </div>
          </div>
        </div>

        {/* AI case studies */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">AI projects</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-white/5 rounded">
              <h3 className="font-semibold">Knowledge assistant</h3>
              <p className="text-sm text-gray-500 mt-2">Semantic search over documentation to reduce support load.</p>
            </div>
            <div className="p-6 bg-white/5 rounded">
              <h3 className="font-semibold">Content summarisation</h3>
              <p className="text-sm text-gray-500 mt-2">Automatic summarisation and highlights for long-form reports.</p>
            </div>
          </div>
        </div>

        {/* Why choose AI team */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Why work with our AI team</h2>
          <ul className="mt-4 list-disc list-inside text-sm text-gray-600 space-y-2">
            <li>Practical ML engineering with production focus</li>
            <li>Experience integrating LLMs and vector databases</li>
            <li>Emphasis on safety, cost and latency trade-offs</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

