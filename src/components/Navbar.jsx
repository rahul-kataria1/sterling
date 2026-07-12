import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiPhone, FiMenu, FiX } from 'react-icons/fi'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/quote', label: 'Get Quote' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-blue-700 font-bold text-xl">
            <span className="text-2xl">✦</span>
            <span className="leading-tight">
              Sterling Solutions<br />
              <span className="text-sm font-normal text-gray-500">Cleaning & More</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-700 font-semibold border-b-2 border-blue-700 pb-0.5'
                    : 'text-gray-700 hover:text-blue-700 font-medium transition-colors'
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:5875008107"
              className="hidden sm:flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-blue-800 transition-colors"
            >
              <FiPhone className="text-base" />
              Call Now
            </a>
            <button
              className="md:hidden p-2 text-gray-700 hover:text-blue-700"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-100 py-3 pb-4 space-y-1">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg font-medium ${
                    isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="tel:5875008107"
              className="flex items-center gap-2 mt-2 mx-3 bg-blue-700 text-white px-4 py-2 rounded-full font-semibold text-sm justify-center"
            >
              <FiPhone />
              Call Now: (587) 500-8107
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
