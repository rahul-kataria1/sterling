import { useEffect, useState } from 'react'
import { FiStar } from 'react-icons/fi'
import { fetchReviews, createReview } from '../lib/reviewsApi'

function StarRating({ rating, size = 'text-lg' }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <FiStar
          key={i}
          className={`${size} ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  )
}

function StarPicker({ value, onChange }) {
  const [hover, setHover] = useState(0)
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const star = i + 1
        const filled = star <= (hover || value)
        return (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className="p-0.5"
            aria-label={`${star} star${star > 1 ? 's' : ''}`}
          >
            <FiStar className={`text-2xl transition-colors ${filled ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
          </button>
        )
      })}
    </div>
  )
}

export default function Reviews() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)

  const [form, setForm] = useState({ name: '', rating: 5, text: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    fetchReviews()
      .then((data) => setReviews(data))
      .catch(() => setLoadError(true))
      .finally(() => setLoading(false))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.text.trim()) return
    setSubmitting(true)
    setSubmitError('')
    try {
      const newReview = await createReview(form)
      setReviews((prev) => [newReview, ...prev])
      setForm({ name: '', rating: 5, text: '' })
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 4000)
    } catch {
      setSubmitError('Something went wrong submitting your review. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const average = reviews.length
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : null

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-500">Don't just take our word for it.</p>
          {average && (
            <div className="mt-4 flex items-center justify-center gap-2">
              <StarRating rating={Math.round(average)} />
              <span className="font-semibold text-gray-700">{average} out of 5</span>
              <span className="text-gray-400">({reviews.length} review{reviews.length !== 1 ? 's' : ''})</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Write a review */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:sticky lg:top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Write a Review</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    placeholder="Jane Doe"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Rating *</label>
                  <StarPicker value={form.rating} onChange={(rating) => setForm({ ...form, rating })} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Review *</label>
                  <textarea
                    value={form.text}
                    onChange={(e) => setForm({ ...form, text: e.target.value })}
                    required
                    rows={4}
                    placeholder="Tell us about your experience..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>
                {submitError && <p className="text-sm text-red-600">{submitError}</p>}
                {submitted && <p className="text-sm text-green-600">Thanks for your review!</p>}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-blue-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Submitting...' : 'Submit Review'}
                </button>
              </form>
            </div>
          </div>

          {/* Reviews list */}
          <div className="lg:col-span-2">
            {loading && <p className="text-gray-500">Loading reviews...</p>}
            {loadError && (
              <p className="text-red-600">
                Couldn't load reviews right now. Please try again later.
              </p>
            )}
            {!loading && !loadError && reviews.length === 0 && (
              <p className="text-gray-500">Be the first to leave a review!</p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reviews.map((r) => (
                <div key={r.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <StarRating rating={r.rating} />
                  <p className="text-gray-600 my-4 italic">"{r.text}"</p>
                  <div className="font-semibold text-gray-900">— {r.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
