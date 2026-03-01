import React from 'react'
import { Link } from 'react-router-dom'
import { scrollToTop } from '../utils/scroll'

const currentYear = new Date().getFullYear()

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/ops-orbital',
    icon: (className: string) => (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/opsorbital',
    icon: (className: string) => (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/opsorbital',
    icon: (className: string) => (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4" onClick={scrollToTop}>
              <img
                src="/images/Logo.png"
                alt="Ops Orbital"
                className="h-9 w-auto opacity-90 hover:opacity-100 transition"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              We design and engineer web and mobile apps, eCommerce platforms and AI-powered experiences that drive growth.
            </p>
            <div className="mt-4 flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                  aria-label={s.name}
                >
                  {s.icon('h-5 w-5')}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition" onClick={scrollToTop}>Home</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition" onClick={scrollToTop}>Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition" onClick={scrollToTop}>Contact</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition" onClick={scrollToTop}>Book a Consultation</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/services/software" className="hover:text-white transition" onClick={scrollToTop}>Software Development</Link>
              </li>
              <li>
                <Link to="/services/app" className="hover:text-white transition" onClick={scrollToTop}>App Development</Link>
              </li>
              <li>
                <Link to="/services/ecommerce" className="hover:text-white transition" onClick={scrollToTop}>eCommerce Development</Link>
              </li>
              <li>
                <Link to="/services/mvp" className="hover:text-white transition" onClick={scrollToTop}>MVP Development</Link>
              </li>
              <li>
                <Link to="/services/ai" className="hover:text-white transition" onClick={scrollToTop}>AI-based Web Applications</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="mailto:maanav@opsorbit.co.in" className="hover:text-white transition">
                  maanav@opsorbit.co.in
                </a>
              </li>
              <li>
                <Link to="/contact" className="inline-block mt-2 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded transition" onClick={scrollToTop}>
                  Get in touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {currentYear} Ops Orbital. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-gray-300 transition" onClick={scrollToTop}>Privacy</Link>
            <Link to="/terms" className="hover:text-gray-300 transition" onClick={scrollToTop}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
