import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  const dimensions = [
    {
      name: 'Physical',
      icon: '💪',
      description: 'Health, fitness, and vitality',
      color: 'from-red-500 to-orange-500',
      order: 1
    },
    {
      name: 'Emotional',
      icon: '❤️',
      description: 'Emotional intelligence and regulation',
      color: 'from-pink-500 to-rose-500',
      order: 2
    },
    {
      name: 'Psychological',
      icon: '🧠',
      description: 'Mental clarity and cognitive development',
      color: 'from-purple-500 to-indigo-500',
      order: 3
    },
    {
      name: 'Relational',
      icon: '🤝',
      description: 'Connections and relationships',
      color: 'from-blue-500 to-cyan-500',
      order: 4
    },
    {
      name: 'Financial',
      icon: '💰',
      description: 'Abundance and resource management',
      color: 'from-green-500 to-emerald-500',
      order: 5
    },
    {
      name: 'Spiritual',
      icon: '🌟',
      description: 'Purpose and meaning',
      color: 'from-yellow-500 to-amber-500',
      order: 6
    },
    {
      name: 'Quantum',
      icon: '∞',
      description: 'Consciousness and infinite potential',
      color: 'from-violet-500 to-purple-500',
      order: 7
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />

      {/* Journey Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-oswald text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-gray-900">From Survival to Legacy</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            Transform your life through mastery of seven essential dimensions.
            Move beyond mere survival and create a lasting legacy.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            <div className="text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-red-100 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <span className="text-2xl sm:text-3xl">🌱</span>
              </div>
              <h3 className="font-oswald text-xl sm:text-2xl mb-1 sm:mb-2">Survival</h3>
              <p className="text-sm sm:text-base text-gray-600">Where you are</p>
            </div>
            <div className="hidden md:block">
              <svg className="w-32 h-8" viewBox="0 0 100 20" fill="none">
                <path d="M0 10 L90 10" stroke="#2563eb" strokeWidth="2" strokeDasharray="4 4"/>
                <path d="M85 5 L95 10 L85 15" fill="#2563eb"/>
              </svg>
            </div>
            <div className="md:hidden">
              <svg className="w-8 h-16 mx-auto" viewBox="0 0 20 100" fill="none">
                <path d="M10 0 L10 90" stroke="#2563eb" strokeWidth="2" strokeDasharray="4 4"/>
                <path d="M5 85 L10 95 L15 85" fill="#2563eb"/>
              </svg>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blue-100 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <span className="text-2xl sm:text-3xl">🏔️</span>
              </div>
              <h3 className="font-oswald text-xl sm:text-2xl mb-1 sm:mb-2">Growth</h3>
              <p className="text-sm sm:text-base text-gray-600">The journey</p>
            </div>
            <div className="hidden md:block">
              <svg className="w-32 h-8" viewBox="0 0 100 20" fill="none">
                <path d="M0 10 L90 10" stroke="#2563eb" strokeWidth="2" strokeDasharray="4 4"/>
                <path d="M85 5 L95 10 L85 15" fill="#2563eb"/>
              </svg>
            </div>
            <div className="md:hidden">
              <svg className="w-8 h-16 mx-auto" viewBox="0 0 20 100" fill="none">
                <path d="M10 0 L10 90" stroke="#2563eb" strokeWidth="2" strokeDasharray="4 4"/>
                <path d="M5 85 L10 95 L15 85" fill="#2563eb"/>
              </svg>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-yellow-100 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <span className="text-2xl sm:text-3xl">👑</span>
              </div>
              <h3 className="font-oswald text-xl sm:text-2xl mb-1 sm:mb-2">Legacy</h3>
              <p className="text-sm sm:text-base text-gray-600">Your destination</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7 Dimensions */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-oswald text-3xl sm:text-4xl text-center mb-3 sm:mb-4">The Seven Dimensions</h2>
          <p className="text-center text-sm sm:text-base text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Master each dimension to unlock your full potential and create lasting transformation
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {dimensions.map((dimension) => (
              <div
                key={dimension.name}
                className="group relative overflow-hidden rounded-xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${dimension.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative p-4 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="text-3xl sm:text-4xl">{dimension.icon}</div>
                    <div>
                      <div className="text-xs font-semibold text-gray-500">Dimension {dimension.order}</div>
                      <h3 className="font-oswald text-xl sm:text-2xl">{dimension.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{dimension.description}</p>
                  <div className="flex items-center text-bim-blue font-semibold text-sm sm:text-base group-hover:translate-x-2 transition-transform">
                    Explore <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            ))}

            {/* The Cube - Integration of all dimensions */}
            <div className="group relative overflow-hidden rounded-xl border-2 border-bim-blue bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-2xl transition-all duration-300">
              <div className="relative p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="text-3xl sm:text-4xl">🔷</div>
                  <div>
                    <div className="text-xs font-semibold text-bim-blue">Integration</div>
                    <h3 className="font-oswald text-xl sm:text-2xl">The Blueprint</h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Like the maze cube on the book cover, integrate all seven dimensions into a cohesive blueprint for life
                </p>
                <div className="flex items-center text-bim-blue font-semibold text-sm sm:text-base group-hover:translate-x-2 transition-transform">
                  Begin Journey <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-r from-bim-blue to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-oswald text-3xl sm:text-4xl mb-4 sm:mb-6">Ready to Build Your Legacy?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-100 px-4">
            Join the BIM-Labs community and start your transformation journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link
              href="/labs"
              className="bg-white text-bim-blue px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-base sm:text-lg"
            >
              Explore BIM-Labs
            </Link>
            <Link
              href="/book"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-bim-blue transition-colors text-base sm:text-lg"
            >
              Get the Book
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}