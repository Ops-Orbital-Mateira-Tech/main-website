import React, { useState } from 'react'

const CONTACT_EMAIL = 'maanav@opsorbit.co.in'
const MAP_LINK = 'https://maps.app.goo.gl/e14hTYYfdRW1VdVC9'
// To show an embedded map: Open the link above in Google Maps → Share → Embed a map → copy the iframe src URL here
const MAP_EMBED_URL = ''

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<string | null>(null)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  function validate() {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrors('Please fill in all fields.')
      return false
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrors('Please provide a valid email address.')
      return false
    }
    setErrors(null)
    return true
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSending(true)
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setErrors('Something went wrong. Please try again or email us directly.')
      }
    } catch {
      setErrors('Something went wrong. Please try again or email us directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-10 sm:py-16">
      <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Contact Us</h1>
      <p className="mb-6 sm:mb-8 text-gray-600 text-sm sm:text-base">Fill out the form and we'll get back to you.</p>

      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        <div>
          {sent ? (
            <div className="p-6 bg-green-50 border border-green-200 rounded">
              Thanks — your message was sent. We'll get back to you soon.
            </div>
          ) : (
            <form className="max-w-lg" onSubmit={onSubmit} noValidate>
              {errors && <div className="mb-4 text-red-600">{errors}</div>}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  className="w-full border rounded px-3 py-2"
                  disabled={sending}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  className="w-full border rounded px-3 py-2"
                  disabled={sending}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  className="w-full border rounded px-3 py-2"
                  rows={5}
                  disabled={sending}
                />
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50" disabled={sending}>
                {sending ? 'Sending...' : 'Send'}
              </button>
            </form>
          )}
        </div>

        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-3">Find us</h2>
          {MAP_EMBED_URL ? (
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm h-[280px] sm:h-[320px] lg:h-[360px] min-h-[240px]">
              <iframe
                src={MAP_EMBED_URL}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office location map"
                allowFullScreen
              />
            </div>
          ) : (
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden border border-gray-200 shadow-sm h-[280px] sm:h-[320px] lg:h-[360px] min-h-[240px] bg-slate-100 hover:border-indigo-300 hover:shadow-md transition-all group"
            >
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-6">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-slate-600 font-medium mb-1">View our location</span>
                <span className="text-indigo-600 font-semibold flex items-center gap-2">
                  Open in Google Maps
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </div>
            </a>
          )}
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-indigo-600 hover:text-indigo-700 text-sm font-medium"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </div>
  )
}
