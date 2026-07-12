import { useState } from 'react'
import { FiPhone, FiMail, FiMapPin, FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg">
            We'd love to hear from you. Reach out by phone, email, or the form below.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                      <FiPhone className="text-blue-700 text-xl" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Phone</div>
                      <a href="tel:5875008107" className="block text-blue-700 hover:underline font-medium">(587) 500-8107</a>
                      <a href="tel:5874367337" className="block text-blue-700 hover:underline font-medium">(587) 436-7337</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                      <FiMail className="text-blue-700 text-xl" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Email</div>
                      <a href="mailto:sterlingsolutionscleaning@gmail.com" className="text-blue-700 hover:underline break-all font-medium">
                        sterlingsolutionscleaning@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                      <FiMapPin className="text-blue-700 text-xl" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Service Area</div>
                      <p className="text-gray-600">Calgary, Airdrie, Cochrane<br />& surrounding areas, AB</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="space-y-3">
                <a
                  href="tel:5875008107"
                  className="flex items-center justify-center gap-3 bg-blue-700 text-white px-6 py-4 rounded-xl font-bold hover:bg-blue-800 transition-colors w-full"
                >
                  <FiPhone className="text-xl" />
                  Call (587) 500-8107
                </a>
                <a
                  href="https://wa.me/15875008107"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-500 text-white px-6 py-4 rounded-xl font-bold hover:bg-green-600 transition-colors w-full"
                >
                  <FaWhatsapp className="text-xl" />
                  Chat on WhatsApp
                </a>
                <a
                  href="mailto:sterlingsolutionscleaning@gmail.com"
                  className="flex items-center justify-center gap-3 border-2 border-blue-700 text-blue-700 px-6 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors w-full"
                >
                  <FiMail className="text-xl" />
                  Send Email
                </a>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors text-xl">
                    <FaFacebook />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity text-xl">
                    <FaInstagram />
                  </a>
                  <a href="https://wa.me/15875008107" target="_blank" rel="noreferrer" className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors text-xl">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl h-48 flex items-center justify-center">
                <div className="text-center text-blue-600">
                  <FiMapPin className="text-4xl mx-auto mb-2" />
                  <p className="font-semibold">Serving Calgary, Airdrie & Cochrane, AB</p>
                  <p className="text-sm text-blue-500 mt-1">Call us to confirm your area</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <FiCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                  <p className="text-gray-500 mb-8">Thanks for reaching out. We'll reply within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }) }}
                    className="text-blue-700 font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(587) 000-0000"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="How can we help you?"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-colors disabled:opacity-60"
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
