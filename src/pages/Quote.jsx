import { useState } from 'react'
import { FiPhone, FiMail, FiCheckCircle } from 'react-icons/fi'

const serviceTypes = [
  'Residential Cleaning',
  'Commercial Cleaning',
  'Deep Cleaning',
  'Move-In / Move-Out Cleaning',
  'Lawn Mowing & Yard Work',
  'Seasonal Yard Cleanup',
  'Snow Removal',
  'De-Icing / Salting',
  'Other / Multiple Services',
]

export default function Quote() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    date: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission (replace with EmailJS/Formspree integration)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 max-w-lg w-full text-center">
          <FiCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quote Request Sent!</h2>
          <p className="text-gray-500 mb-8">
            Thank you, <strong>{form.name}</strong>! We have received your request and will contact you within 24 hours.
          </p>
          <div className="space-y-3">
            <a href="tel:5875008107" className="flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors w-full">
              <FiPhone /> Call Us: (587) 500-8107
            </a>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', address: '', service: '', date: '', message: '' }) }}
              className="w-full border border-gray-300 text-gray-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get a Free Quote</h1>
          <p className="text-blue-100 text-lg">
            Fill out the form below and we'll get back to you within 24 hours with a no-obligation estimate.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Prefer to Call?</h3>
                <div className="space-y-4">
                  <a href="tel:5875008107" className="flex items-center gap-3 text-gray-700 hover:text-blue-700 transition-colors">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                      <FiPhone className="text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Primary</div>
                      <div className="font-semibold">(587) 500-8107</div>
                    </div>
                  </a>
                  <a href="tel:5874367337" className="flex items-center gap-3 text-gray-700 hover:text-blue-700 transition-colors">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                      <FiPhone className="text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Secondary</div>
                      <div className="font-semibold">(587) 436-7337</div>
                    </div>
                  </a>
                  <a href="mailto:sterlingsolutionscleaning@gmail.com" className="flex items-start gap-3 text-gray-700 hover:text-blue-700 transition-colors">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                      <FiMail className="text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Email</div>
                      <div className="font-semibold text-sm break-all">sterlingsolutionscleaning@gmail.com</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="bg-blue-700 rounded-2xl p-8 text-white">
                <h3 className="font-bold text-lg mb-3">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-blue-100">
                  <li className="flex gap-2"><span className="font-bold text-white">1.</span> Submit your quote request</li>
                  <li className="flex gap-2"><span className="font-bold text-white">2.</span> We review your details</li>
                  <li className="flex gap-2"><span className="font-bold text-white">3.</span> We contact you within 24 hrs</li>
                  <li className="flex gap-2"><span className="font-bold text-white">4.</span> We schedule your service</li>
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Request a Free Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
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
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="(587) 000-0000"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      required
                      placeholder="123 Main St, Calgary, AB"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Service Type *</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="">Select a service...</option>
                        {serviceTypes.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Details</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us more about your needs — property size, specific requirements, or any questions..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Submit Quote Request'}
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    We will never share your information. By submitting you agree to be contacted about your request.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
