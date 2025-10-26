'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
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

export default function PostDetailPage() {
  const params = useParams()
  const router = useRouter()
  const postId = params.id as string
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (postId) {
      fetchPost()
    }
  }, [postId])

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/posts/${postId}`)

      if (!response.ok) {
        if (response.status === 404) {
          setError('Post not found')
        } else {
          throw new Error('Failed to fetch post')
        }
        return
      }

      const data = await response.json()
      setPost(data.post)
    } catch (err) {
      setError('Failed to load post')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navigation />
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-64 bg-gray-200 rounded"></div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  if (error || !post) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navigation />
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <div className="text-6xl mb-4">😕</div>
              <h1 className="font-oswald text-3xl mb-2 text-gray-900">Post Not Found</h1>
              <p className="text-gray-600 mb-6">{error || 'The post you are looking for does not exist.'}</p>
              <Link
                href="/members/posts"
                className="inline-block bg-bim-blue text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Back to Posts
              </Link>
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
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/members/posts"
              className="text-bim-blue hover:underline flex items-center gap-2"
            >
              <span>←</span> Back to Posts
            </Link>
            <Link
              href="/members/dashboard"
              className="text-gray-600 hover:text-gray-900"
            >
              Dashboard
            </Link>
          </div>

          {/* Post Content */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Post Header */}
            <div className="p-8 border-b border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-bim-blue text-white flex items-center justify-center font-semibold text-lg">
                  {(post.author.name || post.author.email).charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {post.author.name || 'Member'}
                  </p>
                  <p className="text-sm text-gray-500">{formatDate(post.createdAt)}</p>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 mb-4">
                <h1 className="font-oswald text-4xl text-gray-900 flex-1">
                  {post.title}
                </h1>
                {post.subcategory && (
                  <span className="bg-blue-50 text-bim-blue px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                    {post.subcategory}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span>📁</span>
                  <span>{post.category.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>💬</span>
                  <span>{post._count.comments} comment{post._count.comments !== 1 ? 's' : ''}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>❤️</span>
                  <span>{post._count.reactions} reaction{post._count.reactions !== 1 ? 's' : ''}</span>
                </div>
              </div>
            </div>

            {/* Post Body */}
            <div className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {post.content}
                </p>
              </div>
            </div>

            {/* Post Footer - Engagement Section */}
            <div className="p-8 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <button
                  className="flex-1 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium"
                  onClick={() => alert('Reactions feature coming soon!')}
                >
                  ❤️ React
                </button>
                <button
                  className="flex-1 bg-bim-blue text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
                  onClick={() => alert('Comments feature coming soon!')}
                >
                  💬 Comment
                </button>
              </div>
            </div>
          </article>

          {/* Comments Section Placeholder */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-8">
            <h2 className="font-oswald text-2xl mb-4 text-gray-900">Comments</h2>
            <div className="text-center py-8 text-gray-500">
              <p className="text-6xl mb-4">💬</p>
              <p>Comments feature coming soon!</p>
              <p className="text-sm mt-2">Users will be able to discuss and engage with posts here.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
