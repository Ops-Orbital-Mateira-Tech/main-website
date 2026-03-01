import React from 'react'
import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-10 sm:py-16 max-w-3xl">
      <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Terms of Service</h1>
      <p className="mb-6 sm:mb-8 text-gray-600 text-sm sm:text-base">
        Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>

      <div className="prose prose-gray max-w-none space-y-8 text-sm sm:text-base">
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">1. Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to Ops Orbital ("we", "our", or "us"). These Terms of Service govern your use of our website
            opsorbit.co.in and any services we provide. By accessing or using our site and services, you agree to be
            bound by these terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">2. Services</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Ops Orbital provides software development, app development, eCommerce solutions, MVP development, and
            AI-based web application services. Specific deliverables, timelines, and pricing are defined in individual
            project agreements or statements of work.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to modify, suspend, or discontinue any service with reasonable notice. We will not be
            liable for any modification, suspension, or discontinuation of services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">3. Use of Website</h2>
          <p className="text-gray-600 leading-relaxed mb-3">You agree to use our website only for lawful purposes. You must not:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-3">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on the intellectual property or rights of others</li>
            <li>Transmit malicious code, viruses, or harmful content</li>
            <li>Attempt to gain unauthorized access to our systems or networks</li>
            <li>Use the site for any fraudulent or misleading purpose</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            We may terminate or suspend access to our website at our sole discretion for any breach of these terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">4. Intellectual Property</h2>
          <p className="text-gray-600 leading-relaxed">
            All content on this website, including text, graphics, logos, images, and software, is the property of
            Ops Orbital or its licensors and is protected by copyright and other intellectual property laws. You may
            not reproduce, distribute, modify, or create derivative works without our prior written consent. For
            client projects, intellectual property rights are governed by the applicable project agreement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">5. Confidentiality</h2>
          <p className="text-gray-600 leading-relaxed">
            Both parties agree to keep confidential any proprietary or sensitive information disclosed during the
            course of our engagement. This includes business plans, technical specifications, source code, and other
            non-public information. Confidentiality obligations survive termination of our services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">6. Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            To the fullest extent permitted by law, Ops Orbital shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages arising from your use of our website or services. Our total
            liability for any claim shall not exceed the amount paid by you for the specific service giving rise to
            the claim.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">7. Indemnification</h2>
          <p className="text-gray-600 leading-relaxed">
            You agree to indemnify and hold harmless Ops Orbital, its officers, directors, and employees from any
            claims, damages, losses, or expenses (including legal fees) arising from your use of our website or
            services or your violation of these terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">8. Governing Law</h2>
          <p className="text-gray-600 leading-relaxed">
            These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising
            from these terms or our services shall be subject to the exclusive jurisdiction of the courts in India.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">9. Changes</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update these Terms of Service from time to time. We will notify you of material changes by posting
            the updated terms on this page and updating the "Last updated" date. Your continued use of our website
            after such changes constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">10. Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            For questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:maanav@opsorbit.co.in" className="text-indigo-600 hover:text-indigo-700">
              maanav@opsorbit.co.in
            </a>
            .
          </p>
        </section>
      </div>

      <div className="mt-10 pt-6 border-t border-gray-200">
        <Link to="/" className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
