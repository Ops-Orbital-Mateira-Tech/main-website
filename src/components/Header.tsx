import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function Header() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLLIElement | null>(null)

  useEffect(() => {
    function onDocumentClick(e: MouseEvent) {
      if (!containerRef.current) return
      if (containerRef.current.contains(e.target as Node)) return
      setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDocumentClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocumentClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div
            role="img"
            aria-label="Logo placeholder"
            className="w-10 h-10 rounded-md bg-gray-100 border border-gray-200 flex items-center justify-center"
          >
            {/* logo goes here */}
          </div>
          <span className="font-bold text-lg">Ops Orbital</span>
        </Link>
        <nav>
          <ul className="flex gap-6 items-center">
            <li>
              <Link to="/" className="text-gray-700 hover:text-blue-600">
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
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 011.138.976l-4.25 5a.75.75 0 01-1.138 0l-4.25-5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <ul
                role="menu"
                className={`absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-100 transition-opacity ${
                  open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
              >
                <li>
                  <Link
                    to="/services/software"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <span className="p-1 rounded bg-indigo-50 text-indigo-600">
                      <Icon name="software" size={16} />
                    </span>
                    <span>Software Development</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/app"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <span className="p-1 rounded bg-green-50 text-green-600">
                      <Icon name="app" size={16} />
                    </span>
                    <span>App Development</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/ecommerce"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <span className="p-1 rounded bg-pink-50 text-pink-600">
                      <Icon name="ecommerce" size={16} />
                    </span>
                    <span>eCommerce Development</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/mvp"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <span className="p-1 rounded bg-yellow-50 text-yellow-600">
                      <Icon name="mvp" size={16} />
                    </span>
                    <span>MVP Development</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/ai"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <span className="p-1 rounded bg-purple-50 text-purple-600">
                      <Icon name="ai" size={16} />
                    </span>
                    <span>AI-based Web Applications</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 border-t mt-2"
                  >
                    View all services
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/projects" className="text-gray-700 hover:text-blue-600">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </li>
            <li>
              <a
                className="bg-blue-600 text-white px-4 py-2 rounded"
                href="#bookfreeconsultation"
              >
                Book a Consultation
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
