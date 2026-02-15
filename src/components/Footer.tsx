import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold mb-2">Services Website</h4>
          <p className="text-gray-400 text-sm">Placeholder company description. Replace with your copy.</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Services</h5>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>Mobile App Development</li>
            <li>Web Development</li>
            <li>Software Development</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Contact</h5>
          <p className="text-gray-400 text-sm">Email: contact@example.com</p>
        </div>
      </div>
      <div className="bg-gray-800 text-gray-400 text-sm py-4 text-center">© {new Date().getFullYear()} Services Website</div>
    </footer>
  )
}

