'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function NewPostPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    subcategory: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formData.title,
          content: formData.content,
          subcategory: formData.subcategory || null,
          type: 'TEXT',
        }),
      })

      const data = await response.json()

      if (response.ok) {
        router.push('/members/dashboard')
      } else {
        if (response.status === 401) {
          router.push('/members/login')
          return
        }
        setError(data.error || 'Failed to create post')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <Link
              href="/members/dashboard"
              className="text-bim-blue hover:underline flex items-center gap-2"
            >
              <span>←</span> Back to Dashboard
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="font-oswald text-3xl mb-6 text-gray-900">Create New Post</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-md">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Post Title *
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={(e) => updateFormData('title', e.target.value)}
                  required
                  maxLength={200}
                  placeholder="Enter a descriptive title for your post"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bim-blue text-gray-900"
                />
                <p className="text-xs text-gray-500 mt-1">
                  {formData.title.length}/200 characters
                </p>
              </div>

              <div>
                <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700 mb-2">
                  Topic/Tag (optional)
                </label>
                <input
                  type="text"
                  id="subcategory"
                  value={formData.subcategory}
                  onChange={(e) => updateFormData('subcategory', e.target.value)}
                  maxLength={50}
                  placeholder="e.g., Meditation, Fitness, Nutrition"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bim-blue text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  Post Content *
                </label>
                <textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => updateFormData('content', e.target.value)}
                  required
                  rows={12}
                  placeholder="Share your thoughts, experiences, or questions with the community..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bim-blue text-gray-900 resize-y"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Be respectful and constructive in your posts
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-bim-blue text-white py-3 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  {loading ? 'Publishing...' : 'Publish Post'}
                </button>
                <Link
                  href="/members/dashboard"
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-md hover:bg-gray-300 transition-colors text-center font-medium"
                >
                  Cancel
                </Link>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h2 className="font-oswald text-xl mb-3 text-gray-900">Community Guidelines</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-bim-blue mt-1">•</span>
                  <span>Be respectful and supportive of all community members</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bim-blue mt-1">•</span>
                  <span>Share constructive feedback and personal experiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bim-blue mt-1">•</span>
                  <span>Avoid spam, self-promotion, or off-topic content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bim-blue mt-1">•</span>
                  <span>Keep discussions focused on health, wellness, and personal growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
