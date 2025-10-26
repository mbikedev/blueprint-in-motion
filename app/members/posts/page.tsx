'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

interface Post {
  id: string
  title: string
  content: string
  subcategory: string | null
  createdAt: string
  author: {
    id: string
    name: string | null
    email: string
  }
  category: {
    id: string
    name: string
  }
  _count: {
    comments: number
    reactions: number
  }
}

export default function PostsPage() {
  const router = useRouter()
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts')

      if (!response.ok) {
        throw new Error('Failed to fetch posts')
      }

      const data = await response.json()
      setPosts(data.posts)
    } catch (err) {
      setError('Failed to load posts')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
      return diffInMinutes <= 1 ? 'Just now' : `${diffInMinutes} minutes ago`
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`
    } else if (diffInHours < 168) {
      const diffInDays = Math.floor(diffInHours / 24)
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`
    } else {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    }
  }

  const truncateContent = (content: string, maxLength: number = 200) => {
    if (content.length <= maxLength) return content
    return content.substring(0, maxLength) + '...'
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navigation />
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded w-64"></div>
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg p-6 space-y-3">
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="font-oswald text-4xl text-gray-900">Community Posts</h1>
              <Link
                href="/members/posts/new"
                className="bg-bim-blue text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Create Post
              </Link>
            </div>
            <p className="text-gray-600">
              Share and discover insights from the Blueprint in Motion community
            </p>
          </div>

          {/* Back to Dashboard */}
          <div className="mb-6">
            <Link
              href="/members/dashboard"
              className="text-bim-blue hover:underline flex items-center gap-2"
            >
              <span>←</span> Back to Dashboard
            </Link>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6">
              {error}
            </div>
          )}

          {/* Posts List */}
          {posts.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="font-oswald text-2xl mb-2 text-gray-900">No posts yet</h2>
              <p className="text-gray-600 mb-6">
                Be the first to share something with the community!
              </p>
              <Link
                href="/members/posts/new"
                className="inline-block bg-bim-blue text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Create First Post
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    {/* Post Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-bim-blue text-white flex items-center justify-center font-semibold">
                            {(post.author.name || post.author.email).charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {post.author.name || 'Member'}
                            </p>
                            <p className="text-sm text-gray-500">{formatDate(post.createdAt)}</p>
                          </div>
                        </div>
                      </div>
                      {post.subcategory && (
                        <span className="bg-blue-50 text-bim-blue px-3 py-1 rounded-full text-sm font-medium">
                          {post.subcategory}
                        </span>
                      )}
                    </div>

                    {/* Post Content */}
                    <h2 className="font-oswald text-2xl mb-3 text-gray-900">
                      {post.title}
                    </h2>
                    <p className="text-gray-700 mb-4 whitespace-pre-line">
                      {truncateContent(post.content)}
                    </p>

                    {/* Post Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <span>💬</span>
                          <span>{post._count.comments} comment{post._count.comments !== 1 ? 's' : ''}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>❤️</span>
                          <span>{post._count.reactions} reaction{post._count.reactions !== 1 ? 's' : ''}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📁</span>
                          <span>{post.category.name}</span>
                        </div>
                      </div>
                      <button
                        className="text-bim-blue hover:underline font-medium"
                        onClick={() => {
                          // For now, just scroll to top or show full content
                          // In future, this could link to individual post page
                          alert('Full post view coming soon!')
                        }}
                      >
                        Read more →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pagination placeholder for future */}
          {posts.length > 0 && (
            <div className="mt-8 text-center text-gray-500">
              <p className="text-sm">Showing {posts.length} post{posts.length !== 1 ? 's' : ''}</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
