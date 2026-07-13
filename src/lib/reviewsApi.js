const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export async function fetchReviews() {
  const res = await fetch(`${API_URL}/reviews?_sort=createdAt&_order=desc`)
  if (!res.ok) throw new Error('Failed to load reviews')
  return res.json()
}

export async function createReview({ name, rating, text }) {
  const res = await fetch(`${API_URL}/reviews`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, rating, text, createdAt: new Date().toISOString() }),
  })
  if (!res.ok) throw new Error('Failed to submit review')
  return res.json()
}
