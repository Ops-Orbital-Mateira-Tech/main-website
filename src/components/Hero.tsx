import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const bg = '/images/hero-1.png'

  return (
    <section
      className="relative h-screen min-h-[560px] overflow-hidden"
      aria-label="Hero"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.65), rgba(6,21,55,0.45)), url(${bg})`,
          backgroundBlendMode: 'overlay',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-3xl text-black">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
            Build digital products that scale and delight
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-800">
            We design and engineer web and mobile apps, eCommerce platforms and AI-powered experiences that drive growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              aria-label="Book a free consultation"
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md font-semibold shadow hover:bg-indigo-700 transition"
            >
              Book a Free Consultation
            </Link>
            <a
              href="#our-services"
              aria-label="View our services"
              className="inline-block px-6 py-3 bg-white text-indigo-600 rounded-md font-semibold hover:bg-white/90 transition"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      <svg className="absolute bottom-0 left-0 right-0 w-full -mb-1" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0 0h1440v40c-120 40-300 40-480 0C780 10 540 10 360 40 180 70 60 60 0 40V0z" fill="white" />
      </svg>
    </section>
  )
}

