import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  function validate() {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrors('Please fill in all fields.')
      return false
    }
    // basic email check
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrors('Please provide a valid email address.')
      return false
    }
    setErrors(null)
    return true
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    // stub: would send to backend
    setSent(true)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6 text-gray-600">Fill out the form and we'll get back to you.</p>
      {sent ? (
        <div className="p-6 bg-green-50 border border-green-200 rounded">Thanks — your message was sent (stub).</div>
      ) : (
        <form className="max-w-lg" onSubmit={onSubmit} noValidate>
          {errors && <div className="mb-4 text-red-600">{errors}</div>}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded px-3 py-2" type="email" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full border rounded px-3 py-2" rows={5} />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
        </form>
      )}
    </div>
  )
}

