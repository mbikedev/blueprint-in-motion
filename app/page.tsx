import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 bg-bim-blue text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center overflow-hidden border-4 border-white/20">
                {/* Placeholder - replace with actual image */}
                <div className="text-6xl text-white/50">👤</div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left flex-1">
              <h1 className="font-oswald text-5xl md:text-6xl mb-4">
                Christian D. L.
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Architect of Blueprint In Motion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div className="text-xl">
              <p className="mb-6">
                Twenty years of study. Ten years of testing. One systematic framework
                for masculine development.
              </p>
              <p>
                From survival to legacy.
              </p>
            </div>

            <div className="border-l-4 border-bim-gold pl-8 py-4">
              <h2 className="font-oswald text-3xl text-bim-blue mb-4">
                The Journey
              </h2>
              <p className="text-lg mb-4">
                Christian de Ley began where most men begin—in survival mode. Working hard.
                Pushing through. Scattered across competing priorities. Fragmented.
              </p>
              <p className="text-lg mb-4">
                The turning point came not from adding more. It came from integration.
                From seeing that life is not lived in pieces. That physical strength means
                nothing without emotional mastery. That financial success rings hollow without
                spiritual purpose. That all seven dimensions must work as one system.
              </p>
              <p className="text-lg">
                Blueprint In Motion emerged from this realization. Not as theory. As practice.
                Tested through real application. Refined through repeated use. Built for men
                ready to move beyond survival and build legacy.
              </p>
            </div>

            <div className="border-l-4 border-bim-gold pl-8 py-4">
              <h2 className="font-oswald text-3xl text-bim-blue mb-4">
                The Method
              </h2>
              <p className="text-lg mb-4">
                Silence. Clarity. Movement.
              </p>
              <p className="text-lg mb-4">
                First, silence. Cutting through the noise. The endless content. The quick fixes.
                The fragmented advice. Creating space to see what actually matters.
              </p>
              <p className="text-lg mb-4">
                Then, clarity. Mapping the seven fields. Understanding where you are. Where you
                want to go. What stands between you and mastery.
              </p>
              <p className="text-lg">
                Finally, movement. Precise. Systematic. Action that compounds. Practice that
                transforms. The daily work of becoming.
              </p>
            </div>

            <div className="border-l-4 border-bim-gold pl-8 py-4">
              <h2 className="font-oswald text-3xl text-bim-blue mb-4">
                The Work
              </h2>
              <p className="text-lg mb-4">
                Christian serves as architect and guide. Through the books. Through FieldTalks.
                Through the protocols. But the work belongs to you.
              </p>
              <p className="text-lg mb-4">
                Blueprint In Motion provides the framework. The tools. The principles. You provide
                the commitment. The discipline. The courage to do what most men avoid.
              </p>
              <p className="text-lg">
                This is not for everyone. It's for men ready to master themselves. To integrate
                the fragments. To build something that lasts.
              </p>
            </div>

            <div className="border-l-4 border-bim-gold pl-8 py-4">
              <h2 className="font-oswald text-3xl text-bim-blue mb-4">
                The Vision
              </h2>
              <p className="text-lg mb-4">
                A world where men don't settle for survival. Where mediocrity isn't accepted as normal.
                Where systematic development replaces scattered effort.
              </p>
              <p className="text-lg mb-4">
                Men who master all seven fields. Physical. Emotional. Psychological. Relational.
                Financial. Spiritual. Quantum. Not one at the expense of others. All working as
                one integrated system.
              </p>
              <p className="text-lg">
                Men who build legacies. Who impact others. Who transform from reactivity to mastery.
                From chaos to clarity. From survival to legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-oswald text-4xl text-bim-blue mb-6">
            Ready to Begin?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Start with the Blueprint. Study the fields. Apply the protocols.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/books"
              className="bg-bim-blue text-white px-8 py-3 rounded-lg font-oswald font-semibold hover:bg-opacity-90 transition-colors"
            >
              Get the Book
            </Link>
            <Link
              href="/blueprint-manifest"
              className="border-2 border-bim-blue text-bim-blue px-8 py-3 rounded-lg font-oswald font-semibold hover:bg-bim-blue hover:text-white transition-colors"
            >
              Explore the Manifest
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
