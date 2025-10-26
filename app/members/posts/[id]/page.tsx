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

interface Comment {
  id: string
  content: string
  createdAt: string
  author: {
    id: string
    name: string | null
    email: string
  }
}

export default function PostDetailPage() {
  const params = useParams()
  const router = useRouter()
  const postId = params.id as string
  const [post, setPost] = useState<Post | null>(null)
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [loading, setLoading] = useState(true)
  const [commentsLoading, setCommentsLoading] = useState(false)
  const [commentSubmitting, setCommentSubmitting] = useState(false)
  const [reacting, setReacting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (postId) {
      fetchPost()
      fetchComments()
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

  const fetchComments = async () => {
    setCommentsLoading(true)
    try {
      const response = await fetch(`/api/posts/${postId}/comments`)
      if (response.ok) {
        const data = await response.json()
        setComments(data.comments)
      }
    } catch (err) {
      console.error('Failed to fetch comments:', err)
    } finally {
      setCommentsLoading(false)
    }
  }

  const handleReact = async () => {
    if (reacting) return
    setReacting(true)
    try {
      const response = await fetch(`/api/posts/${postId}/react`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'LIKE' }),
      })

      if (response.ok) {
        // Refresh post to get updated reaction count
        fetchPost()
      } else if (response.status === 401) {
        router.push('/members/login')
      }
    } catch (err) {
      console.error('Failed to react:', err)
    } finally {
      setReacting(false)
    }
  }

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim() || commentSubmitting) return

    setCommentSubmitting(true)
    try {
      const response = await fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newComment }),
      })

      if (response.ok) {
        setNewComment('')
        fetchComments()
        fetchPost() // Refresh to update comment count
      } else if (response.status === 401) {
        router.push('/members/login')
      } else {
        const data = await response.json()
        alert(data.error || 'Failed to post comment')
      }
    } catch (err) {
      console.error('Failed to post comment:', err)
      alert('Failed to post comment')
    } finally {
      setCommentSubmitting(false)
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
                  className="flex-1 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium disabled:opacity-50"
                  onClick={handleReact}
                  disabled={reacting}
                >
                  {reacting ? '...' : '❤️ React'}
                </button>
                <button
                  className="flex-1 bg-bim-blue text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
                  onClick={() => document.getElementById('comment-input')?.focus()}
                >
                  💬 Comment
                </button>
              </div>
            </div>
          </article>

          {/* Comments Section */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-8">
            <h2 className="font-oswald text-2xl mb-6 text-gray-900">
              Comments ({post._count.comments})
            </h2>

            {/* Add Comment Form */}
            <form onSubmit={handleCommentSubmit} className="mb-8">
              <textarea
                id="comment-input"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your thoughts..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bim-blue text-gray-900 resize-y"
              />
              <div className="flex items-center justify-between mt-3">
                <p className="text-sm text-gray-500">
                  {newComment.length}/1000 characters
                </p>
                <button
                  type="submit"
                  disabled={!newComment.trim() || commentSubmitting}
                  className="bg-bim-blue text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {commentSubmitting ? 'Posting...' : 'Post Comment'}
                </button>
              </div>
            </form>

            {/* Comments List */}
            {commentsLoading ? (
              <div className="text-center py-8">
                <div className="animate-pulse space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            ) : comments.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p className="text-6xl mb-4">💬</p>
                <p>No comments yet</p>
                <p className="text-sm mt-2">Be the first to share your thoughts!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="border-l-4 border-bim-blue pl-4 py-2">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-bim-blue text-white flex items-center justify-center font-semibold flex-shrink-0">
                        {(comment.author.name || comment.author.email).charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold text-gray-900">
                            {comment.author.name || 'Member'}
                          </p>
                          <span className="text-gray-400">•</span>
                          <p className="text-sm text-gray-500">
                            {formatDate(comment.createdAt)}
                          </p>
                        </div>
                        <p className="text-gray-700 whitespace-pre-line">{comment.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
