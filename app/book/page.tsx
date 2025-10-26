import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
// import Image from 'next/image' // TODO: Uncomment when book-cover.jpg is added

export default function BookPage() {
  const dimensions = [
    { name: 'Physical', icon: '💪', description: 'Transform your body into a vessel of strength and vitality' },
    { name: 'Emotional', icon: '❤️', description: 'Master your emotions and develop unshakeable resilience' },
    { name: 'Psychological', icon: '🧠', description: 'Cultivate mental clarity and cognitive excellence' },
    { name: 'Relational', icon: '🤝', description: 'Build meaningful connections that enrich your legacy' },
    { name: 'Financial', icon: '💰', description: 'Create abundance and master resource management' },
    { name: 'Spiritual', icon: '🌟', description: 'Discover your purpose and deeper meaning' },
    { name: 'Quantum', icon: '∞', description: 'Unlock consciousness and infinite potential' },
  ]

  const testimonials = [
    {
      quote: "This book completely transformed how I approach personal development. The seven dimensions framework is revolutionary.",
      author: "Sarah M.",
      role: "Entrepreneur"
    },
    {
      quote: "From Survival to Legacy gave me the blueprint I needed to break free from just getting by and start building something meaningful.",
      author: "Marcus T.",
      role: "Coach & Mentor"
    },
    {
      quote: "Christian de Ley's insights on integrating all seven dimensions changed my life. This isn't just theory - it's a practical roadmap.",
      author: "Elena R.",
      role: "Wellness Consultant"
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-bim-blue via-blue-700 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Book Cover */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                  {/* Book Cover - Placeholder until actual image is added */}
                  <div className="w-full max-w-sm aspect-[3/4] bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg shadow-2xl flex items-center justify-center border-4 border-amber-500/50">
                    <div className="text-center p-8">
                      <h3 className="font-oswald text-4xl mb-8 tracking-wider text-amber-200">BLUEPRINT<br/>IN MOTION</h3>

                      {/* Maze Cube Illustration */}
                      <div className="my-12 flex justify-center">
                        <div className="relative w-48 h-48">
                          {/* Outer cube face */}
                          <div className="absolute inset-0 border-4 border-amber-400/40"></div>
                          {/* Inner maze pattern */}
                          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                            <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.3"/>
                            <path d="M30,30 L70,30 L70,70 L30,70 Z" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.3"/>
                            <path d="M40,40 L60,40 L60,60 L40,60 Z" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.3"/>
                          </svg>
                          {/* Center star */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-5xl text-amber-300">✧</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-amber-200 text-lg mb-8 tracking-wide">FROM SURVIVAL TO LEGACY</p>
                      <div className="border-t border-amber-500/50 pt-6">
                        <p className="font-oswald text-2xl tracking-wide text-amber-100">CHRISTIAN DE LEY</p>
                        <p className="text-sm text-amber-300 mt-2">ARCHITECT OF MOTION</p>
                      </div>
                    </div>
                  </div>
                  {/*
                    TODO: Replace with actual image once added to public/images/book-cover.jpg
                    <Image
                      src="/images/book-cover.jpg"
                      alt="Blueprint in Motion: From Survival to Legacy by Christian de Ley"
                      width={400}
                      height={533}
                      className="w-full h-full object-cover"
                      priority
                    />
                  */}
                </div>
              </div>
            </div>

            {/* Right Column - Book Info */}
            <div className="text-center lg:text-left">
              <div className="inline-block bg-amber-400 text-blue-900 px-4 py-2 rounded-full font-semibold mb-6">
                NEW RELEASE
              </div>
              <h1 className="font-oswald text-6xl mb-6 leading-tight">
                Blueprint in Motion
              </h1>
              <p className="text-3xl text-blue-100 mb-6 font-light">
                From Survival to Legacy
              </p>
              <p className="text-xl text-blue-200 mb-8 max-w-xl">
                By <span className="font-semibold text-amber-300">Christian de Ley</span> - Architect of Motion
              </p>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl leading-relaxed">
                Transform your life through mastery of seven essential dimensions.
                This groundbreaking book provides a comprehensive blueprint for moving
                beyond mere survival and creating a lasting legacy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="#purchase"
                  className="bg-amber-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-amber-300 transition-colors text-lg shadow-xl"
                >
                  Get Your Copy Now
                </a>
                <a
                  href="#preview"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-bim-blue transition-colors text-lg"
                >
                  Read Sample Chapter
                </a>
              </div>

              <div className="flex items-center gap-6 justify-center lg:justify-start text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400">★★★★★</span>
                  <span className="text-blue-200">4.9/5</span>
                </div>
                <div className="text-blue-200">|</div>
                <div className="text-blue-200">500+ Reviews</div>
                <div className="text-blue-200">|</div>
                <div className="text-blue-200">Bestseller</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Visual */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-oswald text-4xl mb-12">Your Transformation Journey</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-red-500">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                🌱
              </div>
              <h3 className="font-oswald text-2xl mb-4">Survival</h3>
              <p className="text-gray-600">
                Break free from the survival mindset. Learn to recognize the patterns keeping you stuck.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-blue-500 transform md:scale-105">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                🏔️
              </div>
              <h3 className="font-oswald text-2xl mb-4">Growth</h3>
              <p className="text-gray-600">
                Master the seven dimensions through deliberate practice and integration.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-amber-500">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                👑
              </div>
              <h3 className="font-oswald text-2xl mb-4">Legacy</h3>
              <p className="text-gray-600">
                Create lasting impact and build a legacy that transcends your lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seven Dimensions */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-5xl mb-6">The Seven Dimensions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Like the intricate maze cube on the cover, all seven dimensions interconnect
              to form your complete blueprint for transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dimensions.map((dimension, index) => (
              <div
                key={dimension.name}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:border-bim-blue hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">{dimension.icon}</div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500">Dimension {index + 1}</div>
                    <h3 className="font-oswald text-2xl">{dimension.name}</h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{dimension.description}</p>
              </div>
            ))}

            {/* Integration Card */}
            <div className="bg-gradient-to-br from-bim-blue to-blue-700 text-white rounded-xl p-8 lg:col-span-3 md:col-span-2">
              <div className="max-w-2xl mx-auto text-center">
                <div className="text-6xl mb-4">🔷</div>
                <h3 className="font-oswald text-3xl mb-4">The Blueprint Integration</h3>
                <p className="text-blue-100 text-lg">
                  Discover how to weave all seven dimensions together into a cohesive blueprint
                  for life. The power isn't in mastering one dimension—it's in the integration of all seven.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-oswald text-4xl text-center mb-12">What's Inside</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-bim-blue rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                  📖
                </div>
                <div>
                  <h3 className="font-oswald text-xl mb-2">Comprehensive Framework</h3>
                  <p className="text-gray-600">
                    Step-by-step guidance through all seven dimensions with practical exercises and assessments
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-bim-blue rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                  🎯
                </div>
                <div>
                  <h3 className="font-oswald text-xl mb-2">Actionable Strategies</h3>
                  <p className="text-gray-600">
                    Proven techniques and tools you can implement immediately to start your transformation
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-bim-blue rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                  🧭
                </div>
                <div>
                  <h3 className="font-oswald text-xl mb-2">Personal Assessment Tools</h3>
                  <p className="text-gray-600">
                    Discover where you are in each dimension and create your personalized roadmap
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-bim-blue rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                  💡
                </div>
                <div>
                  <h3 className="font-oswald text-xl mb-2">Real-World Case Studies</h3>
                  <p className="text-gray-600">
                    Learn from others who've successfully transformed from survival to legacy
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-bim-blue rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                  🔄
                </div>
                <div>
                  <h3 className="font-oswald text-xl mb-2">Integration Practices</h3>
                  <p className="text-gray-600">
                    Master the art of weaving all dimensions together for maximum impact
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-bim-blue rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                  🎁
                </div>
                <div>
                  <h3 className="font-oswald text-xl mb-2">Bonus Resources</h3>
                  <p className="text-gray-600">
                    Access to exclusive online resources, worksheets, and the BIM-Labs community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-oswald text-4xl text-center mb-12">What Readers Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="text-amber-400 mb-4">★★★★★</div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Options */}
      <section id="purchase" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-5xl mb-6">Get Your Copy Today</h2>
            <p className="text-xl text-gray-300">
              Choose the format that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Hardcover */}
            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
              <div className="text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="font-oswald text-2xl mb-4">Hardcover</h3>
                <div className="text-4xl font-bold mb-2">€29.95</div>
                <p className="text-gray-600 mb-6">Premium edition with gold foiling</p>
                <ul className="text-left space-y-2 mb-8 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Beautiful hardcover design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Gold maze cube embossing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Premium paper quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Free shipping</span>
                  </li>
                </ul>
                <button className="w-full bg-bim-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Order Hardcover
                </button>
              </div>
            </div>

            {/* Digital + Bonus */}
            <div className="bg-gradient-to-br from-amber-400 to-amber-500 text-gray-900 rounded-2xl p-8 shadow-2xl transform scale-105 border-4 border-amber-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-bold">
                BEST VALUE
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="font-oswald text-2xl mb-4">Digital + BIM-Labs</h3>
                <div className="text-4xl font-bold mb-2">€19.11</div>
                <p className="text-gray-800 mb-6">Complete transformation package</p>
                <ul className="text-left space-y-2 mb-8 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-700">✓</span>
                    <span>Instant digital access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-700">✓</span>
                    <span>3 months BIM-Labs membership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-700">✓</span>
                    <span>Exclusive worksheets & tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-700">✓</span>
                    <span>Community access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-700">✓</span>
                    <span>Progress tracking dashboard</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                  Get Digital + Labs
                </button>
              </div>
            </div>

            {/* Ebook */}
            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
              <div className="text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="font-oswald text-2xl mb-4">E-Book</h3>
                <div className="text-4xl font-bold mb-2">€14.99</div>
                <p className="text-gray-600 mb-6">Digital edition</p>
                <ul className="text-left space-y-2 mb-8 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Instant download</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>PDF, EPUB, MOBI formats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Read on any device</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Searchable text</span>
                  </li>
                </ul>
                <button className="w-full bg-bim-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Buy E-Book
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">
              💳 Secure checkout • 📦 Fast delivery • 🔒 30-day money-back guarantee
            </p>
            <p className="text-sm text-gray-400">
              All purchases include access to bonus online resources
            </p>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full aspect-square bg-gradient-to-br from-bim-blue to-blue-700 rounded-2xl flex items-center justify-center text-white">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">👤</div>
                  <p className="font-oswald text-3xl">Christian de Ley</p>
                  <p className="text-blue-200 mt-2">Architect of Motion</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-oswald text-4xl mb-6">About the Author</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Christian de Ley is a renowned transformation architect and the founder of Blueprint in Motion.
                With over two decades of experience in personal development, he has helped thousands of individuals
                move from survival mode to creating lasting legacies.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Known as the "Architect of Motion," Christian specializes in the integration of multiple life
                dimensions into a cohesive framework for transformation. His unique seven-dimension approach
                has revolutionized how people think about personal growth.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Through his work with BIM-Labs and this groundbreaking book, Christian continues to guide
                individuals on their journey from mere survival to creating meaningful, lasting impact.
              </p>
              <Link
                href="/about"
                className="inline-block text-bim-blue hover:underline font-semibold"
              >
                Learn more about Christian →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-bim-blue to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-oswald text-5xl mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands who have moved from survival to legacy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#purchase"
              className="bg-amber-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-amber-300 transition-colors text-lg"
            >
              Get the Book Now
            </a>
            <Link
              href="/labs"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-bim-blue transition-colors text-lg"
            >
              Join BIM-Labs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
