import { useState } from 'react'
import type { FormEvent } from 'react'

export default function QuickContactBar() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Open WhatsApp with pre-filled message
    const message = `Hello AH Repairing!\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nI'd like to request a repair service quote.`
    window.open(`https://wa.me/+966541638686?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="w-full bg-[#1A1A2E] py-6">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="flex-1 w-full bg-white rounded-lg px-5 py-3.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="flex-1 w-full bg-white rounded-lg px-5 py-3.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="flex-1 w-full bg-white rounded-lg px-5 py-3.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <button
            type="submit"
            className="w-full md:w-auto bg-orange-500 text-white px-10 py-3.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-orange-600 whitespace-nowrap"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
