import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function Header() {
  const [open, setOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const containerRef = useRef<HTMLLIElement | null>(null)
  const closeDropdown = () => setOpen(false)

  useEffect(() => {
    function onDocumentClick(e: MouseEvent) {
      if (!containerRef.current) return
      if (containerRef.current.contains(e.target as Node)) return
      setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', onDocumentClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocumentClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navLinks = (
    <>
      <li>
        <Link to="/" className="block py-3 text-gray-700 hover:text-blue-600 md:py-0" onClick={() => setMobileOpen(false)}>
          Home
        </Link>
      </li>
      <li className="relative" ref={containerRef}>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-haspopup="menu"
          className="text-gray-700 hover:text-blue-600 flex items-center gap-2 focus:outline-none"
        >
          Services
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 011.138.976l-4.25 5a.75.75 0 01-1.138 0l-4.25-5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
        <ul
          role="menu"
          onMouseDown={(e) => e.stopPropagation()}
          className={`${open ? 'block opacity-100' : 'hidden md:block md:opacity-0 md:pointer-events-none'} ${mobileOpen ? 'mt-2 pl-4 border-l-2 border-gray-200' : ''} md:absolute md:right-0 md:mt-2 md:w-56 md:bg-white md:rounded-md md:shadow-lg md:border md:border-gray-100 md:border-l-0 md:pl-0 md:z-[60] transition-opacity`}
        >
          <li>
            <Link to="/services/software" onClick={() => { closeDropdown(); setMobileOpen(false) }} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              <span className="p-1 rounded bg-indigo-50 text-indigo-600"><Icon name="software" size={16} /></span>
              <span>Software Development</span>
            </Link>
          </li>
          <li>
            <Link to="/services/app" onClick={() => { closeDropdown(); setMobileOpen(false) }} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              <span className="p-1 rounded bg-green-50 text-green-600"><Icon name="app" size={16} /></span>
              <span>App Development</span>
            </Link>
          </li>
          <li>
            <Link to="/services/ecommerce" onClick={() => { closeDropdown(); setMobileOpen(false) }} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              <span className="p-1 rounded bg-pink-50 text-pink-600"><Icon name="ecommerce" size={16} /></span>
              <span>eCommerce Development</span>
            </Link>
          </li>
          <li>
            <Link to="/services/mvp" onClick={() => { closeDropdown(); setMobileOpen(false) }} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              <span className="p-1 rounded bg-yellow-50 text-yellow-600"><Icon name="mvp" size={16} /></span>
              <span>MVP Development</span>
            </Link>
          </li>
          <li>
            <Link to="/services/ai" onClick={() => { closeDropdown(); setMobileOpen(false) }} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              <span className="p-1 rounded bg-purple-50 text-purple-600"><Icon name="ai" size={16} /></span>
              <span>AI-based Web Applications</span>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/projects" className="text-gray-700 hover:text-blue-600" onClick={() => setMobileOpen(false)}>
          Projects
        </Link>
      </li>
      <li>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600" onClick={() => setMobileOpen(false)}>
          Contact
        </Link>
      </li>
      <li>
        <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition" onClick={() => setMobileOpen(false)}>
          Book a Consultation
        </Link>
      </li>
    </>
  )

  return (
    <header className="relative z-50 bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img src="/images/Logo.png" alt="Ops Orbital Logo" className="h-8 sm:h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block overflow-visible">
          <ul className="flex gap-6 items-center overflow-visible">
            {navLinks}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg overflow-y-auto transition-all duration-200 ${
          mobileOpen ? 'max-h-[calc(100vh-4rem)] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks}
          </ul>
        </nav>
      </div>
    </header>
  )
}
