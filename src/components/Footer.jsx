import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-white font-bold text-xl mb-3">
              <span className="text-blue-400">✦</span> Sterling Solutions
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Professional cleaning, yard work, and snow removal services. Reliable, affordable, and satisfaction guaranteed.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors text-xl">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors text-xl">
                <FaInstagram />
              </a>
              <a href="https://wa.me/15875008107" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-400 transition-colors text-xl">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/about', label: 'About Us' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/quote', label: 'Get a Quote' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Residential Cleaning</li>
              <li>Commercial Cleaning</li>
              <li>Deep Cleaning</li>
              <li>Move-In / Move-Out</li>
              <li>Lawn Mowing & Trimming</li>
              <li>Hedge & Yard Cleanup</li>
              <li>Snow Removal</li>
              <li>De-Icing & Salting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FiPhone className="text-blue-400 shrink-0" />
                <div>
                  <a href="tel:5875008107" className="hover:text-white block">(587) 500-8107</a>
                  <a href="tel:5874367337" className="hover:text-white block">(587) 436-7337</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <FiMail className="text-blue-400 shrink-0 mt-0.5" />
                <a href="mailto:sterlingsolutionscleaning@gmail.com" className="hover:text-white break-all">
                  sterlingsolutionscleaning@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiMapPin className="text-blue-400 shrink-0" />
                <span>Serving Calgary, Airdrie & Cochrane, AB</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sterling Solutions Cleaning. All rights reserved.</p>
          <p>Professional Services You Can Trust</p>
        </div>
      </div>
    </footer>
  )
}
