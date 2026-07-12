import { Link } from 'react-router-dom'
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi'

const cleaningServices = [
  'Standard Residential Cleaning',
  'Deep Cleaning',
  'Commercial / Office Cleaning',
  'Move-In / Move-Out Cleaning',
  'Post-Renovation Cleaning',
  'Recurring Maintenance Plans (Weekly / Bi-Weekly / Monthly)',
]

const yardServices = [
  'Lawn Mowing & Edging',
  'Weed Trimming',
  'Hedge & Shrub Trimming',
  'Yard Debris Cleanup',
  'Leaf Raking & Bagging',
  'Spring & Fall Seasonal Cleanups',
  'Garden Bed Maintenance',
]

const snowServices = [
  'Driveway Snow Removal',
  'Walkway & Sidewalk Clearing',
  'Parking Lot Clearing',
  'De-Icing & Salting',
  'Roof Snow Removal (on request)',
  'Seasonal Snow Contracts',
]

function ServiceSection({ id, icon, title, subtitle, services, price, color, ctaText }) {
  return (
    <section id={id} className={`py-20 ${color}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-6xl mb-4">{icon}</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-gray-500 mb-8 text-lg">{subtitle}</p>
            <ul className="space-y-3 mb-8">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <FiCheckCircle className="text-blue-600 shrink-0 mt-0.5 text-lg" />
                  <span className="text-gray-700">{s}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-2 rounded-full font-semibold text-sm">
                {price}
              </div>
              <Link
                to="/quote"
                className="flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors"
              >
                {ctaText} <FiArrowRight />
              </Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-100 to-blue-200 h-80 flex items-center justify-center">
            <div className="text-center text-blue-400">
              <div className="text-8xl mb-4">{icon}</div>
              <p className="text-blue-600 font-medium">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-blue-100 text-lg">
            Professional, reliable, and affordable services for every season. Contact us for a free quote.
          </p>
        </div>
      </section>

      <ServiceSection
        id="cleaning"
        icon="🧹"
        title="Cleaning Services"
        subtitle="From routine home cleaning to commercial and post-renovation deep cleans, we deliver spotless results every time with attention to every detail."
        services={cleaningServices}
        price="Starting from $80"
        color="bg-white"
        ctaText="Get a Cleaning Quote"
      />

      <ServiceSection
        id="yard"
        icon="🌿"
        title="Yard Work"
        subtitle="Keep your property looking its best year-round. Our yard crew handles everything from weekly mowing to complete seasonal cleanups."
        services={yardServices}
        price="Starting from $60"
        color="bg-green-50"
        ctaText="Get a Yard Quote"
      />

      <ServiceSection
        id="snow"
        icon="❄️"
        title="Snow Removal"
        subtitle="Don't let winter slow you down. We clear driveways, walkways, and parking lots quickly and safely so you can get on with your day."
        services={snowServices}
        price="Contact for Quote"
        color="bg-sky-50"
        ctaText="Get a Snow Quote"
      />

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Not Sure What You Need?</h2>
          <p className="text-gray-400 mb-8">Give us a call or fill out our quote form — we'll recommend the best service for your situation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:5875008107" className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
              Call (587) 500-8107
            </a>
            <Link to="/quote" className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
