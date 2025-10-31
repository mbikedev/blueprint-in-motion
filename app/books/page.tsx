import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 bg-bim-blue text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Book Cover */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-bim-gold to-yellow-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                  <div className="w-full max-w-sm aspect-[3/4] rounded-lg shadow-2xl overflow-hidden bg-gray-800">
                    <Image
                      src="/images/book.webp"
                      alt="Blueprint in Motion: From Survival to Legacy by Christian de Ley"
                      width={800}
                      height={1067}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Book Info */}
            <div className="text-center lg:text-left">
              <div className="inline-block bg-bim-gold text-bim-blue px-4 py-2 rounded-full font-semibold text-sm mb-6">
                BOOK 1 – AVAILABLE NOW
              </div>
              <h1 className="font-oswald text-5xl md:text-6xl mb-6 leading-tight">
                Blueprint in Motion
              </h1>
              <p className="text-3xl text-gray-200 mb-6 font-light">
                From Survival to Legacy
              </p>
              <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                By <span className="font-semibold text-bim-gold">Christian de Ley</span>
              </p>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                A systematic framework for masculine development. Seven fields of mastery.
                One complete blueprint. From chaos to clarity. From survival to legacy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#pre-order"
                  className="bg-bim-gold text-bim-blue px-8 py-4 rounded-lg font-oswald text-xl font-bold hover:bg-yellow-400 transition-colors shadow-xl"
                >
                  Pre-Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-oswald text-4xl text-bim-blue text-center mb-12">
            What's Inside
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="border-l-4 border-bim-gold pl-6">
              <h3 className="font-oswald text-2xl text-bim-blue mb-3">
                The Seven Fields
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Physical. Emotional. Psychological. Relational. Financial. Spiritual. Quantum.
                Each field mapped. Each field tested. Each field mastered.
              </p>
            </div>

            <div className="border-l-4 border-bim-gold pl-6">
              <h3 className="font-oswald text-2xl text-bim-blue mb-3">
                The Protocol
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Not theory. Not philosophy. A working system. Principles that function.
                Tools that work. Methods you can use today.
              </p>
            </div>

            <div className="border-l-4 border-bim-gold pl-6">
              <h3 className="font-oswald text-2xl text-bim-blue mb-3">
                The Assessment
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Know where you stand. Map your current state. Identify the gaps.
                Build your personal blueprint for transformation.
              </p>
            </div>

            <div className="border-l-4 border-bim-gold pl-6">
              <h3 className="font-oswald text-2xl text-bim-blue mb-3">
                The Integration
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Seven fields become one system. Fragmented becomes whole.
                Scattered energy becomes focused power.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/blueprint-manifest"
              className="inline-block text-bim-blue hover:text-bim-gold font-semibold transition-colors"
            >
              Explore the Blueprint Manifest →
            </Link>
          </div>
        </div>
      </section>

      {/* Pre-Order Section */}
      <section id="pre-order" className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-oswald text-4xl text-bim-blue mb-6">
            Pre-Order Book 1
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Be among the first to receive the Blueprint. Pre-order now and secure your copy.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Hardcover */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="font-oswald text-2xl text-bim-blue mb-4">Hardcover</h3>
              <div className="text-4xl font-bold text-bim-blue mb-4">€29.95</div>
              <ul className="text-left space-y-3 mb-8 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-bim-gold">▸</span>
                  <span>Premium hardcover edition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bim-gold">▸</span>
                  <span>Gold foil embossing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bim-gold">▸</span>
                  <span>Premium paper quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bim-gold">▸</span>
                  <span>Ships worldwide</span>
                </li>
              </ul>
              <button className="w-full bg-bim-blue text-white py-3 rounded-lg font-oswald font-semibold hover:bg-opacity-90 transition-colors">
                Pre-Order Hardcover
              </button>
            </div>

            {/* Digital */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="font-oswald text-2xl text-bim-blue mb-4">Digital Edition</h3>
              <div className="text-4xl font-bold text-bim-blue mb-4">€14.99</div>
              <ul className="text-left space-y-3 mb-8 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-bim-gold">▸</span>
                  <span>Instant digital access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bim-gold">▸</span>
                  <span>PDF, EPUB formats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bim-gold">▸</span>
                  <span>Read on any device</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bim-gold">▸</span>
                  <span>Searchable content</span>
                </li>
              </ul>
              <button className="w-full bg-bim-blue text-white py-3 rounded-lg font-oswald font-semibold hover:bg-opacity-90 transition-colors">
                Pre-Order Digital
              </button>
            </div>
          </div>

          <p className="mt-8 text-gray-600">
            Secure checkout • 30-day guarantee
          </p>
        </div>
      </section>

      {/* Book 2 Coming Soon */}
      <section className="py-20 px-4 sm:px-6 bg-bim-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-bim-gold text-bim-blue px-4 py-2 rounded-full font-semibold text-sm mb-6">
            COMING SOON
          </div>
          <h2 className="font-oswald text-5xl mb-6">
            Book 2
          </h2>
          <p className="text-2xl text-gray-200 mb-8">
            The Field Protocols
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Advanced methods for each of the seven fields. Deeper practices. Refined techniques.
            The next level of mastery. Available after the Cambodia immersion.
          </p>
          <div className="inline-block border-2 border-white px-8 py-3 rounded-lg font-oswald">
            Release Date: TBA
          </div>
        </div>
      </section>

      {/* About Author */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-oswald text-4xl text-bim-blue mb-6">
            About the Author
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Christian de Ley. Architect of Blueprint In Motion. Twenty years of study.
            Ten years of testing. One systematic framework for masculine development.
            From survival to legacy.
          </p>
          <Link
            href="/about"
            className="inline-block text-bim-blue hover:text-bim-gold font-semibold transition-colors"
          >
            Learn more about Christian →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
