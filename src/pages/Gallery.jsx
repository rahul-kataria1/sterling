import { useState } from 'react'

const categories = ['All', 'Cleaning', 'Yard Work', 'Snow Removal']

const galleryItems = [
  // Cleaning
  { id: 1, category: 'Cleaning', label: 'Kitchen Deep Clean', emoji: '🧹', before: 'Grimy countertops & buildup', after: 'Sparkling clean surfaces' },
  { id: 2, category: 'Cleaning', label: 'Bathroom Refresh', emoji: '🚿', before: 'Soap scum & mildew', after: 'Like-new shine' },
  { id: 3, category: 'Cleaning', label: 'Living Room Clean', emoji: '🛋️', before: 'Dusty & cluttered', after: 'Fresh & spotless' },
  { id: 4, category: 'Cleaning', label: 'Move-Out Clean', emoji: '🏠', before: 'Tenant left mess', after: 'Move-in ready' },
  // Yard Work
  { id: 5, category: 'Yard Work', label: 'Lawn Mowing', emoji: '🌿', before: 'Overgrown grass', after: 'Perfectly trimmed' },
  { id: 6, category: 'Yard Work', label: 'Hedge Trimming', emoji: '✂️', before: 'Unruly hedges', after: 'Neat & shaped' },
  { id: 7, category: 'Yard Work', label: 'Leaf Cleanup', emoji: '🍂', before: 'Covered in leaves', after: 'Clean yard' },
  { id: 8, category: 'Yard Work', label: 'Spring Cleanup', emoji: '🌱', before: 'Winter debris', after: 'Ready for spring' },
  // Snow Removal
  { id: 9, category: 'Snow Removal', label: 'Driveway Clear', emoji: '❄️', before: 'Buried under snow', after: 'Fully cleared' },
  { id: 10, category: 'Snow Removal', label: 'Walkway Cleared', emoji: '🚶', before: 'Icy & dangerous', after: 'Safe to walk' },
  { id: 11, category: 'Snow Removal', label: 'Salting Done', emoji: '🧂', before: 'Black ice risk', after: 'De-iced & safe' },
  { id: 12, category: 'Snow Removal', label: 'Parking Lot', emoji: '🅿️', before: 'Unplowed lot', after: 'Fully cleared' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? galleryItems : galleryItems.filter((g) => g.category === active)

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work Gallery</h1>
          <p className="text-blue-100 text-lg">
            Browse before and after transformations across our three core services.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors text-sm ${
                  active === cat
                    ? 'bg-blue-700 text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                {/* Before / After split display */}
                <div className="grid grid-cols-2 h-48">
                  <div className="bg-red-50 flex flex-col items-center justify-center p-4 border-r border-dashed border-gray-200">
                    <div className="text-4xl mb-2 opacity-40 grayscale">{item.emoji}</div>
                    <div className="text-xs text-red-500 font-semibold uppercase tracking-wide mb-1">Before</div>
                    <div className="text-xs text-gray-500 text-center">{item.before}</div>
                  </div>
                  <div className="bg-green-50 flex flex-col items-center justify-center p-4">
                    <div className="text-4xl mb-2">{item.emoji}</div>
                    <div className="text-xs text-green-600 font-semibold uppercase tracking-wide mb-1">After</div>
                    <div className="text-xs text-gray-500 text-center">{item.after}</div>
                  </div>
                </div>
                <div className="p-4 border-t border-gray-100">
                  <div className="font-semibold text-gray-900 text-sm">{item.label}</div>
                  <div className="text-xs text-blue-600 mt-1">{item.category}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-blue-50 border border-blue-100 rounded-2xl p-8">
            <p className="text-gray-600 mb-2 font-medium">📸 Real photos coming soon!</p>
            <p className="text-gray-500 text-sm">
              We are updating this gallery with actual before/after photos from our projects. Check back soon or follow us on social media.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
