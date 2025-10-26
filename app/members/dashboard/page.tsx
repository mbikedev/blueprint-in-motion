'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

interface User {
  id: string
  email: string
  name: string | null
  avatar: string | null
  bio: string | null
  createdAt: string
  membership: {
    tier: string
    status: string
    startDate: string
    endDate: string | null
  } | null
  posts: Array<{
    id: string
    title: string
    createdAt: string
  }>
  notifications: Array<{
    id: string
    title: string
    message: string
    type: string
    createdAt: string
  }>
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchUserData()
  }, [])

  const fetchUserData = async () => {
    try {
      const response = await fetch('/api/auth/me')

      if (!response.ok) {
        if (response.status === 401) {
          router.push('/members/login')
          return
        }
        throw new Error('Failed to fetch user data')
      }

      const data = await response.json()
      setUser(data.user)
    } catch (err) {
      setError('Failed to load dashboard data')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
      })
      router.push('/members/login')
    } catch (err) {
      console.error('Logout failed:', err)
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-48 mx-auto"></div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  if (error || !user) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="font-oswald text-4xl mb-4">Error</h1>
            <p className="text-gray-600">{error || 'User not found'}</p>
            <Link href="/members/login" className="inline-block mt-6 bg-bim-blue text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Go to Login
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const tierName = user.membership?.tier === 'COMMITMENT' ? 'Commitment Cycle' : 'Initiation Cycle'
  const tierPrice = user.membership?.tier === 'COMMITMENT' ? '€19.11' : '€9.11'
  const memberSince = new Date(user.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-bim-blue text-white flex items-center justify-center text-2xl font-bold">
                  {user.name?.charAt(0).toUpperCase() || user.email.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h1 className="font-oswald text-3xl mb-2">
                    Welcome back, {user.name || 'Member'}!
                  </h1>
                  <p className="text-gray-600">Member since {memberSince}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-gray-800 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Membership Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="font-oswald text-xl mb-4">Membership</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tier:</span>
                  <span className="font-semibold">{tierName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-semibold">{tierPrice}/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className={`font-semibold ${
                    user.membership?.status === 'ACTIVE' ? 'text-green-600' : 'text-gray-600'
                  }`}>
                    {user.membership?.status || 'N/A'}
                  </span>
                </div>
              </div>
              <Link
                href="/members/billing"
                className="block mt-4 text-center text-bim-blue hover:underline"
              >
                Manage Billing
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="font-oswald text-xl mb-4">Activity</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-2xl font-bold text-bim-blue">{user.posts?.length || 0}</p>
                  <p className="text-gray-600 text-sm">Posts Created</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-bim-blue">{user.notifications?.length || 0}</p>
                  <p className="text-gray-600 text-sm">Unread Notifications</p>
                </div>
              </div>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="font-oswald text-xl mb-4">Profile</h2>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
              <Link
                href="/members/profile"
                className="block text-center bg-bim-blue text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Edit Profile
              </Link>
            </div>
          </div>

          {/* Community Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-oswald text-xl">Recent Posts</h2>
                <Link href="/members/posts" className="text-sm text-bim-blue hover:underline">
                  View All
                </Link>
              </div>
              {user.posts && user.posts.length > 0 ? (
                <div className="space-y-3">
                  {user.posts.map((post) => (
                    <div key={post.id} className="border-l-4 border-bim-blue pl-4 py-2">
                      <h3 className="font-semibold">{post.title}</h3>
                      <p className="text-sm text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No posts yet</p>
              )}
              <Link
                href="/members/posts/new"
                className="block mt-4 text-center bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                Create New Post
              </Link>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-oswald text-xl">Notifications</h2>
                <Link href="/members/notifications" className="text-sm text-bim-blue hover:underline">
                  View All
                </Link>
              </div>
              {user.notifications && user.notifications.length > 0 ? (
                <div className="space-y-3">
                  {user.notifications.slice(0, 5).map((notification) => (
                    <div key={notification.id} className="border-b border-gray-100 pb-3 last:border-b-0">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-bim-blue rounded-full mt-2"></div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">{notification.title}</p>
                          <p className="text-sm text-gray-600">{notification.message}</p>
                          <p className="text-xs text-gray-400 mt-1">
                            {new Date(notification.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No new notifications</p>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h2 className="font-oswald text-xl mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/members/community"
                className="text-center p-4 border border-gray-200 rounded-md hover:border-bim-blue hover:bg-blue-50 transition-colors"
              >
                <div className="text-2xl mb-2">👥</div>
                <p className="text-sm font-medium">Community</p>
              </Link>
              <Link
                href="/members/resources"
                className="text-center p-4 border border-gray-200 rounded-md hover:border-bim-blue hover:bg-blue-50 transition-colors"
              >
                <div className="text-2xl mb-2">📚</div>
                <p className="text-sm font-medium">Resources</p>
              </Link>
              <Link
                href="/members/events"
                className="text-center p-4 border border-gray-200 rounded-md hover:border-bim-blue hover:bg-blue-50 transition-colors"
              >
                <div className="text-2xl mb-2">📅</div>
                <p className="text-sm font-medium">Events</p>
              </Link>
              <Link
                href="/contact"
                className="text-center p-4 border border-gray-200 rounded-md hover:border-bim-blue hover:bg-blue-50 transition-colors"
              >
                <div className="text-2xl mb-2">💬</div>
                <p className="text-sm font-medium">Support</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
