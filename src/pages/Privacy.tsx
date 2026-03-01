import React from 'react'
import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-10 sm:py-16 max-w-3xl">
      <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Privacy Policy</h1>
      <p className="mb-6 sm:mb-8 text-gray-600 text-sm sm:text-base">
        Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>

      <div className="prose prose-gray max-w-none space-y-8 text-sm sm:text-base">
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">1. Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            Ops Orbital ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when you visit our website opsorbit.co.in or
            engage our services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed mb-3">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-3">
            <li><strong>Contact information:</strong> Name, email address, phone number when you submit a form or reach out to us</li>
            <li><strong>Communications:</strong> Messages and correspondence when you contact us</li>
            <li><strong>Usage data:</strong> IP address, browser type, referring URLs, pages visited, and approximate location</li>
            <li><strong>Cookies and similar technologies:</strong> Session data and preferences to improve site functionality</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            We collect this information to respond to inquiries, provide services, and improve our website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
          <p className="text-gray-600 leading-relaxed mb-3">We use the information we collect to:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>Respond to your inquiries and provide requested services</li>
            <li>Send project updates, invoices, and service-related communications</li>
            <li>Improve our website, services, and user experience</li>
            <li>Analyze site usage and trends</li>
            <li>Comply with legal obligations and protect our rights</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">4. Sharing of Information</h2>
          <p className="text-gray-600 leading-relaxed">
            We do not sell your personal information. We may share your information with service providers who assist
            us in operating our website and business (e.g., form submission services, hosting providers) under
            appropriate confidentiality agreements. We may also disclose information when required by law or to
            protect our rights, safety, or property.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">5. Data Retention</h2>
          <p className="text-gray-600 leading-relaxed">
            We retain your information only for as long as necessary to fulfill the purposes outlined in this policy,
            comply with legal obligations, resolve disputes, and enforce our agreements. Contact form submissions are
            retained as needed to respond to and follow up on inquiries.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">6. Security</h2>
          <p className="text-gray-600 leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal information
            against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
            over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">7. Your Rights</h2>
          <p className="text-gray-600 leading-relaxed mb-3">Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate or incomplete data</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict certain processing</li>
            <li>Withdraw consent where we rely on consent for processing</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-3">
            To exercise these rights, contact us at{' '}
            <a href="mailto:maanav@opsorbit.co.in" className="text-indigo-600 hover:text-indigo-700">
              maanav@opsorbit.co.in
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">8. Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            Our website may use cookies and similar technologies to enhance your experience. You can control cookies
            through your browser settings. Note that disabling certain cookies may affect site functionality.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">9. Third-Party Links</h2>
          <p className="text-gray-600 leading-relaxed">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices
            of those sites. We encourage you to read their privacy policies before providing any information.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">10. Updates</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this Privacy Policy from time to time. We will post the updated policy on this page and
            update the "Last updated" date. Continued use of our website after changes constitutes acceptance of the
            updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">11. Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            For questions about this Privacy Policy or our data practices, please contact us at{' '}
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
