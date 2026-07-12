import { Link } from 'react-router-dom'
import { FiCheckCircle, FiAward, FiHeart, FiDollarSign, FiShield } from 'react-icons/fi'

const values = [
  {
    icon: <FiShield className="text-3xl text-blue-600" />,
    title: 'Reliable & Trustworthy',
    desc: 'We show up on time, every time. Our team is background-checked, professional, and fully insured.',
  },
  {
    icon: <FiAward className="text-3xl text-blue-600" />,
    title: 'Satisfaction Guaranteed',
    desc: 'If you are not 100% satisfied, we will come back and make it right. Your happiness is our priority.',
  },
  {
    icon: <FiDollarSign className="text-3xl text-blue-600" />,
    title: 'Affordable Pricing',
    desc: 'High quality does not have to mean high cost. We offer competitive, transparent pricing with no hidden fees.',
  },
  {
    icon: <FiHeart className="text-3xl text-blue-600" />,
    title: 'Community-Focused',
    desc: 'We are local to Calgary and take pride in serving our community with care and dedication.',
  },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-blue-100 text-lg">
            We are Sterling Solutions — a locally owned cleaning and property maintenance company serving Calgary, Airdrie, Cochrane and Alberta.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg mb-4">
                Sterling Solutions Cleaning was founded with a simple mission: to provide reliable, high-quality home and property services that Calgarians can count on.
              </p>
              <p className="text-gray-600 mb-4">
                We started as a small residential cleaning operation and grew into a full-service property maintenance company offering cleaning, yard work, and snow removal. Today, we serve hundreds of satisfied customers across Calgary, Airdrie, Cochrane and surrounding communities.
              </p>
              <p className="text-gray-600 mb-8">
                Every job, big or small, receives our full attention and care. We treat your home the same way we treat our own — with respect, precision, and pride.
              </p>
              <ul className="space-y-3">
                {[
                  'Locally owned and operated in Calgary, AB',
                  'Fully insured and professional staff',
                  'Eco-friendly options available',
                  'Serving residential and commercial clients',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FiCheckCircle className="text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-700 rounded-2xl p-8 text-white text-center">
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-blue-200">Happy Clients</div>
              </div>
              <div className="bg-blue-50 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-blue-700 mb-2">5★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="bg-green-50 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-green-700 mb-2">3</div>
                <div className="text-gray-600">Core Services</div>
              </div>
              <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-blue-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            "To deliver clean, safe, and beautiful spaces for every client — with professionalism, integrity, and a smile. We believe a clean environment improves quality of life, and we work hard every day to make that a reality for our community."
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-500 max-w-xl mx-auto">These principles guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-4">{v.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-500 mb-8">Get in touch today for a free, no-obligation quote.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/quote" className="bg-blue-700 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition-colors">
              Get Free Quote
            </Link>
            <Link to="/contact" className="border border-blue-700 text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
