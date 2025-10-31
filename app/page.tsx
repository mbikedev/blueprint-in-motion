import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Book Cover */}
      <section className="relative py-20 px-4 sm:px-6 bg-bim-blue text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Book Cover */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-bim-gold to-yellow-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                  <div className="w-full max-w-sm aspect-[3/4] rounded-lg shadow-2xl overflow-hidden bg-gray-800">
                    <Image
                      src="/images/book.webp"
                      alt="Blueprint in Motion: From Survival to Legacy"
                      width={800}
                      height={1067}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Text */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <h1 className="font-oswald text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                Blueprint In Motion
              </h1>
              <p className="text-3xl md:text-4xl text-gray-200 mb-6 font-light">
                From Survival to Legacy
              </p>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                A systematic framework for masculine development. Seven fields of mastery.
                Silence. Clarity. Movement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/books"
                  className="bg-bim-gold text-bim-blue px-8 py-4 rounded-lg font-oswald text-xl font-bold hover:bg-yellow-400 transition-colors shadow-xl"
                >
                  Get the Book
                </Link>
                <Link
                  href="/blueprint-manifest"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-oswald text-xl font-semibold hover:bg-white hover:text-bim-blue transition-colors"
                >
                  The Manifest
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-16 px-4 sm:px-6 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl text-gray-800 font-light leading-relaxed">
            Most men survive. Few master. Fewer still build legacies.
          </p>
        </div>
      </section>

      {/* The Seven Fields */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-oswald text-4xl text-bim-blue text-center mb-4">
            The Seven Fields
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Master each dimension. Integrate all seven. Build your complete blueprint.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border-l-4 border-bim-gold pl-6 py-4">
              <div className="text-4xl mb-3">1</div>
              <h3 className="font-oswald text-2xl text-bim-blue mb-2">Physical</h3>
              <p className="text-gray-700">Strength, vitality, energy</p>
            </div>

            <div className="border-l-4 border-bim-gold pl-6 py-4">
              <div className="text-4xl mb-3">2</div>
              <h3 className="font-oswald text-2xl text-bim-blue mb-2">Emotional</h3>
              <p className="text-gray-700">Mastery, regulation, sovereignty</p>
            </div>

            <div className="border-l-4 border-bim-gold pl-6 py-4">
              <div className="text-4xl mb-3">3</div>
              <h3 className="font-oswald text-2xl text-bim-blue mb-2">Psychological</h3>
              <p className="text-gray-700">Clarity, focus, mental discipline</p>
            </div>

            <div className="border-l-4 border-bim-gold pl-6 py-4">
              <div className="text-4xl mb-3">4</div>
              <h3 className="font-oswald text-2xl text-bim-blue mb-2">Relational</h3>
              <p className="text-gray-700">Connection, influence, boundaries</p>
            </div>

            <div className="border-l-4 border-bim-gold pl-6 py-4">
              <div className="text-4xl mb-3">5</div>
              <h3 className="font-oswald text-2xl text-bim-blue mb-2">Financial</h3>
              <p className="text-gray-700">Abundance, resources, wealth</p>
            </div>

            <div className="border-l-4 border-bim-gold pl-6 py-4">
              <div className="text-4xl mb-3">6</div>
              <h3 className="font-oswald text-2xl text-bim-blue mb-2">Spiritual</h3>
              <p className="text-gray-700">Purpose, meaning, transcendence</p>
            </div>

            <div className="border-l-4 border-bim-gold pl-6 py-4 md:col-span-2 lg:col-span-3">
              <div className="text-4xl mb-3">7</div>
              <h3 className="font-oswald text-2xl text-bim-blue mb-2">Quantum</h3>
              <p className="text-gray-700">Consciousness, potential, infinite possibility</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/blueprint-manifest"
              className="inline-block text-bim-blue hover:text-bim-gold font-semibold transition-colors"
            >
              Explore the complete framework →
            </Link>
          </div>
        </div>
      </section>

      {/* The Method */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-oswald text-4xl text-bim-blue text-center mb-16">
            The Method
          </h2>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-bim-blue text-white flex items-center justify-center text-3xl font-oswald">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-oswald text-2xl text-bim-blue mb-3">Silence</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Cut through the noise. The endless content. The quick fixes. Create space to see
                  what actually matters. In silence, clarity emerges.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-bim-blue text-white flex items-center justify-center text-3xl font-oswald">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-oswald text-2xl text-bim-blue mb-3">Clarity</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Map the seven fields. Understand where you are. Where you want to go. What stands
                  between you and mastery. Build your personal blueprint.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-bim-blue text-white flex items-center justify-center text-3xl font-oswald">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-oswald text-2xl text-bim-blue mb-3">Movement</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Take precise, systematic action. Daily practice. Compound progress. From survival
                  to legacy. From potential to mastery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FieldTalks Preview */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-oswald text-4xl text-bim-blue mb-6">
            FieldTalks
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Weekly transmissions on mastery. Short. Direct. Actionable. Each talk maps to
            one of the seven fields and one blueprint principle.
          </p>
          <Link
            href="/fieldtalks"
            className="inline-block bg-bim-blue text-white px-8 py-3 rounded-lg font-oswald font-semibold hover:bg-opacity-90 transition-colors"
          >
            Read FieldTalks
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 bg-bim-blue text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-oswald text-5xl mb-6">
            Begin Your Journey
          </h2>
          <p className="text-xl text-gray-200 mb-12">
            From survival to legacy. The blueprint starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/books"
              className="bg-bim-gold text-bim-blue px-8 py-4 rounded-lg font-oswald text-xl font-bold hover:bg-yellow-400 transition-colors"
            >
              Get the Book
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-oswald text-xl font-semibold hover:bg-white hover:text-bim-blue transition-colors"
            >
              About Christian
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
