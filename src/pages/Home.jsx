import { Link } from 'react-router-dom'
import { FiPhone, FiCheckCircle, FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import Reviews from '../components/Reviews'

const services = [
  {
    icon: '🧹',
    title: 'Cleaning Services',
    desc: 'Residential, commercial, deep cleaning, and move-in/move-out cleaning tailored to your needs.',
    link: '/services#cleaning',
  },
  {
    icon: '🌿',
    title: 'Yard Work',
    desc: 'Mowing, trimming, edging, hedge trimming, leaf bagging, and full seasonal yard cleanups.',
    link: '/services#yard',
  },
  {
    icon: '❄️',
    title: 'Snow Removal',
    desc: 'Driveway and sidewalk clearing, de-icing, salting, and seasonal snow contracts.',
    link: '/services#snow',
  },
]

const reasons = [
  'Fully insured and reliable professionals',
  'Satisfaction guaranteed on every job',
  'Affordable and transparent pricing',
  'Serving Calgary, Airdrie & Cochrane',
  'Flexible scheduling — weekdays & weekends',
  'Eco-friendly cleaning products available',
]

const faqs = [
  {
    q: 'What areas do you serve?',
    a: 'We serve Calgary, Airdrie, Cochrane and surrounding communities in Alberta.',
  },
  {
    q: 'How do I get a quote?',
    a: 'You can call us, send an email, or fill out our online quote form. We respond within 24 hours.',
  },
  {
    q: 'Do you offer recurring service plans?',
    a: 'Yes! We offer weekly, bi-weekly, and monthly plans for cleaning, yard work, and seasonal snow removal contracts.',
  },
  {
    q: 'Are your cleaning products safe?',
    a: 'We use professional-grade, EPA-approved products. Eco-friendly options are available upon request.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'We ask for 24-hour notice for cancellations. We understand life happens — just give us a call.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-600/50 border border-blue-400/30 text-blue-200 text-sm font-medium px-3 py-1 rounded-full mb-4">
              Calgary's Trusted Service Provider
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Professional Cleaning,{' '}
              <span className="text-blue-300">Yard Work</span> &{' '}
              <span className="text-blue-300">Snow Removal</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-xl">
              Reliable, affordable, and satisfaction guaranteed. Let us handle the hard work so you can enjoy your home.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:5875008107"
                className="flex items-center gap-2 bg-white text-blue-800 px-6 py-3 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                <FiPhone />
                Call Now
              </a>
              <Link
                to="/quote"
                className="flex items-center gap-2 bg-blue-600 border-2 border-blue-400 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-blue-500 transition-colors"
              >
                Get Free Quote
                <FiArrowRight />
              </Link>
              <a
                href="https://wa.me/15875008107"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-blue-200">
              <span className="flex items-center gap-1"><FiCheckCircle className="text-green-400" /> Fully Insured</span>
              <span className="flex items-center gap-1"><FiCheckCircle className="text-green-400" /> Satisfaction Guaranteed</span>
              <span className="flex items-center gap-1"><FiCheckCircle className="text-green-400" /> Free Estimates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">From spotless interiors to pristine yards and snow-free driveways — we do it all.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow group">
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 mb-6">{s.desc}</p>
                <Link
                  to={s.link}
                  className="inline-flex items-center gap-1 text-blue-700 font-semibold hover:gap-2 transition-all"
                >
                  Learn More <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Sterling Solutions?</h2>
              <p className="text-gray-500 mb-8 text-lg">
                We take pride in delivering top-quality service every single time. Our team is professional, punctual, and dedicated to exceeding your expectations.
              </p>
              <ul className="space-y-4">
                {reasons.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <FiCheckCircle className="text-blue-600 text-xl shrink-0 mt-0.5" />
                    <span className="text-gray-700">{r}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <Link to="/about" className="bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors">
                  About Us
                </Link>
                <Link to="/contact" className="border border-blue-700 text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '500+', label: 'Happy Clients' },
                { stat: '5★', label: 'Average Rating' },
                { stat: '3', label: 'Core Services' },
                { stat: '100%', label: 'Satisfaction' },
              ].map(({ stat, label }) => (
                <div key={label} className="bg-blue-50 rounded-2xl p-8 text-center">
                  <div className="text-4xl font-bold text-blue-700 mb-2">{stat}</div>
                  <div className="text-gray-600 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-blue-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Serving Calgary, Airdrie & Cochrane</h2>
          <p className="text-blue-100 mb-8 text-lg">
            We proudly serve Calgary, Airdrie, Cochrane, and nearby communities across Alberta.
          </p>
          <Link to="/contact" className="inline-block bg-white text-blue-800 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
            Check Your Area
          </Link>
        </div>
      </section>

      {/* Reviews */}
      <Reviews />

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 list-none">
                  {f.q}
                  <span className="text-blue-600 group-open:rotate-45 transition-transform duration-200 text-xl font-light">+</span>
                </summary>
                <div className="px-5 pb-5 text-gray-600">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8">Contact us today for a free no-obligation quote.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:5875008107" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
              <FiPhone /> (587) 500-8107
            </a>
            <a href="tel:5874367337" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
              <FiPhone /> (587) 436-7337
            </a>
            <Link to="/quote" className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
