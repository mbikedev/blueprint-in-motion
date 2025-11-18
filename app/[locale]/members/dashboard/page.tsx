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
  const [stats, setStats] = useState({ totalUsers: 0, totalPosts: 0, activeMembers: 0 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchUserData()
    fetchStats()
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

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/stats')
      if (response.ok) {
        const data = await response.json()
        setStats(data)
      }
    } catch (err) {
      console.error('Failed to fetch stats:', err)
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

  // Calculate journey progress (example based on days active and posts)
  const daysActive = Math.floor((Date.now() - new Date(user.createdAt).getTime()) / (1000 * 60 * 60 * 24))
  const postsCount = user.posts?.length || 0
  const journeyProgress = Math.min(Math.floor((daysActive * 2 + postsCount * 5) / 3), 100)

  const getJourneyStage = (progress: number) => {
    if (progress < 30) return { stage: 'Survival', icon: '🌱', color: 'from-red-500 to-orange-500' }
    if (progress < 70) return { stage: 'Growth', icon: '🏔️', color: 'from-blue-500 to-indigo-500' }
    return { stage: 'Legacy', icon: '👑', color: 'from-yellow-500 to-amber-500' }
  }

  const currentStage = getJourneyStage(journeyProgress)

  const dimensions = [
    { name: 'Physical', icon: '💪', color: 'bg-red-100', progress: Math.floor(Math.random() * 100) },
    { name: 'Emotional', icon: '❤️', color: 'bg-pink-100', progress: Math.floor(Math.random() * 100) },
    { name: 'Psychological', icon: '🧠', color: 'bg-purple-100', progress: Math.floor(Math.random() * 100) },
    { name: 'Relational', icon: '🤝', color: 'bg-blue-100', progress: Math.floor(Math.random() * 100) },
    { name: 'Financial', icon: '💰', color: 'bg-green-100', progress: Math.floor(Math.random() * 100) },
    { name: 'Spiritual', icon: '🌟', color: 'bg-yellow-100', progress: Math.floor(Math.random() * 100) },
    { name: 'Quantum', icon: '∞', color: 'bg-violet-100', progress: Math.floor(Math.random() * 100) },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-4">
              <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-bim-blue text-white flex items-center justify-center text-xl sm:text-2xl font-bold flex-shrink-0">
                  {user.name?.charAt(0).toUpperCase() || user.email.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <h1 className="font-oswald text-2xl sm:text-3xl mb-1 sm:mb-2 truncate">
                    Welcome back, {user.name || 'Member'}!
                  </h1>
                  <p className="text-sm sm:text-base text-gray-600">Member since {memberSince}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="w-full sm:w-auto text-gray-600 hover:text-gray-800 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm sm:text-base"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Transformation Journey */}
          <div className={`bg-gradient-to-r ${currentStage.color} rounded-lg shadow-md p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 text-white`}>
            <h2 className="font-oswald text-xl sm:text-2xl mb-3 sm:mb-4 text-center">Your Transformation Journey</h2>
            <p className="text-center mb-4 sm:mb-6 text-sm sm:text-base text-white/90">From Survival to Legacy</p>

            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm font-semibold">🌱 Survival</span>
                <span className="text-xs sm:text-sm font-semibold hidden sm:inline">🏔️ Growth</span>
                <span className="text-xs sm:text-sm font-semibold">👑 Legacy</span>
              </div>

              <div className="bg-white/20 rounded-full h-3 sm:h-4 overflow-hidden backdrop-blur-sm">
                <div
                  className="bg-white h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-1 sm:pr-2"
                  style={{ width: `${journeyProgress}%` }}
                >
                  <span className="text-xs font-bold text-gray-700">{journeyProgress}%</span>
                </div>
              </div>

              <div className="text-center mt-4 sm:mt-6">
                <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3">
                  <span className="text-2xl sm:text-3xl">{currentStage.icon}</span>
                  <div className="text-left">
                    <p className="text-xs sm:text-sm opacity-90">Current Stage</p>
                    <p className="font-oswald text-lg sm:text-xl">{currentStage.stage}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seven Dimensions Progress */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
            <h2 className="font-oswald text-xl sm:text-2xl mb-4 sm:mb-6">Seven Dimensions Mastery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
              {dimensions.map((dimension) => (
                <div key={dimension.name} className="text-center">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${dimension.color} flex items-center justify-center text-xl sm:text-2xl mx-auto mb-1 sm:mb-2`}>
                    {dimension.icon}
                  </div>
                  <p className="font-semibold text-xs sm:text-sm mb-1 sm:mb-2 truncate">{dimension.name}</p>
                  <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-bim-blue h-full rounded-full transition-all"
                      style={{ width: `${dimension.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{dimension.progress}%</p>
                </div>
              ))}
            </div>
            <div className="mt-4 sm:mt-6 text-center">
              <Link
                href="/members/dimensions"
                className="inline-block text-bim-blue hover:underline font-semibold text-sm sm:text-base"
              >
                Explore All Dimensions →
              </Link>
            </div>
          </div>

          {/* Community Stats */}
          <div className="bg-gradient-to-r from-bim-blue to-blue-600 rounded-lg shadow-md p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 text-white">
            <h2 className="font-oswald text-xl sm:text-2xl mb-4 sm:mb-6 text-center">Community Overview</h2>
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">{stats.totalUsers}</p>
                <p className="text-xs sm:text-sm md:text-base text-blue-100">Registered Members</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">{stats.activeMembers}</p>
                <p className="text-xs sm:text-sm md:text-base text-blue-100">Active Memberships</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">{stats.totalPosts}</p>
                <p className="text-xs sm:text-sm md:text-base text-blue-100">Community Posts</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Membership Card */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h2 className="font-oswald text-lg sm:text-xl mb-3 sm:mb-4 text-gray-900">Membership</h2>
              <div className="space-y-2">
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Tier:</span>
                  <span className="font-semibold text-gray-900 text-right">{tierName}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-semibold text-gray-900">{tierPrice}/month</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
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
                className="block mt-3 sm:mt-4 text-center text-sm sm:text-base text-bim-blue hover:underline"
              >
                Manage Billing
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h2 className="font-oswald text-lg sm:text-xl mb-3 sm:mb-4 text-gray-900">Activity</h2>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-bim-blue">{user.posts?.length || 0}</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Posts Created</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-bim-blue">{user.notifications?.length || 0}</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Unread Notifications</p>
                </div>
              </div>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h2 className="font-oswald text-lg sm:text-xl mb-3 sm:mb-4 text-gray-900">Profile</h2>
              <div className="space-y-2 mb-3 sm:mb-4">
                <p className="text-xs sm:text-sm text-gray-600">Email</p>
                <p className="font-medium text-sm sm:text-base text-gray-900 break-all">{user.email}</p>
              </div>
              <Link
                href="/members/profile"
                className="block text-center bg-bim-blue text-white py-2 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                Edit Profile
              </Link>
            </div>
          </div>

          {/* Community Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h2 className="font-oswald text-lg sm:text-xl text-gray-900">Recent Posts</h2>
                <Link href="/members/posts" className="text-xs sm:text-sm text-bim-blue hover:underline">
                  View All
                </Link>
              </div>
              {user.posts && user.posts.length > 0 ? (
                <div className="space-y-3">
                  {user.posts.map((post) => (
                    <div key={post.id} className="border-l-4 border-bim-blue pl-3 sm:pl-4 py-2">
                      <h3 className="font-semibold text-sm sm:text-base text-gray-900">{post.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-500">
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
                <h2 className="font-oswald text-xl text-gray-900">Notifications</h2>
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
                          <p className="font-semibold text-sm text-gray-900">{notification.title}</p>
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
            <h2 className="font-oswald text-xl mb-4 text-gray-900">Quick Links</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/members/community"
                className="text-center p-4 border border-gray-200 rounded-md hover:border-bim-blue hover:bg-blue-50 transition-colors"
              >
                <div className="text-2xl mb-2">👥</div>
                <p className="text-sm font-medium text-gray-900">Community</p>
              </Link>
              <Link
                href="/members/resources"
                className="text-center p-4 border border-gray-200 rounded-md hover:border-bim-blue hover:bg-blue-50 transition-colors"
              >
                <div className="text-2xl mb-2">📚</div>
                <p className="text-sm font-medium text-gray-900">Resources</p>
              </Link>
              <Link
                href="/members/events"
                className="text-center p-4 border border-gray-200 rounded-md hover:border-bim-blue hover:bg-blue-50 transition-colors"
              >
                <div className="text-2xl mb-2">📅</div>
                <p className="text-sm font-medium text-gray-900">Events</p>
              </Link>
              <Link
                href="/contact"
                className="text-center p-4 border border-gray-200 rounded-md hover:border-bim-blue hover:bg-blue-50 transition-colors"
              >
                <div className="text-2xl mb-2">💬</div>
                <p className="text-sm font-medium text-gray-900">Support</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
