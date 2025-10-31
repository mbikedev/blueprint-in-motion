import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function BlueprintManifest() {
  const fields = [
    {
      number: 1,
      name: 'Physical',
      description: 'The foundation of vitality. Build strength, energy, and resilience through disciplined physical practice.',
      principles: ['Movement as medicine', 'Energy management', 'Body as temple']
    },
    {
      number: 2,
      name: 'Emotional',
      description: 'Master your inner world. Develop emotional intelligence and the capacity to regulate your responses.',
      principles: ['Emotional sovereignty', 'Feeling without drowning', 'Heart coherence']
    },
    {
      number: 3,
      name: 'Psychological',
      description: 'Command your mind. Clear mental patterns, sharpen focus, and develop unshakeable clarity.',
      principles: ['Mental discipline', 'Cognitive mastery', 'Thought architecture']
    },
    {
      number: 4,
      name: 'Relational',
      description: 'Navigate human connection. Build meaningful relationships and master the art of influence.',
      principles: ['Authentic relating', 'Boundary mastery', 'Sacred connection']
    },
    {
      number: 5,
      name: 'Financial',
      description: 'Create abundance. Develop the mindset and skills to generate, manage, and multiply resources.',
      principles: ['Value creation', 'Resource stewardship', 'Wealth consciousness']
    },
    {
      number: 6,
      name: 'Spiritual',
      description: 'Connect to purpose. Discover meaning beyond the material and align with your deepest calling.',
      principles: ['Sacred purpose', 'Transcendence', 'Soul alignment']
    },
    {
      number: 7,
      name: 'Quantum',
      description: 'Access infinite potential. Explore consciousness, possibility, and the edges of human capability.',
      principles: ['Consciousness expansion', 'Reality design', 'Infinite possibility']
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 bg-bim-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-oswald text-5xl sm:text-6xl md:text-7xl mb-6">
            Blueprint Manifest
          </h1>
          <p className="text-xl sm:text-2xl mb-4 text-gray-200">
            The Seven Fields of Mastery
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From Survival to Legacy. A systematic approach to mastering every dimension of human existence.
          </p>
        </div>
      </section>

      {/* The Seven Fields */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {fields.map((field) => (
              <div
                key={field.number}
                className="border-l-4 border-bim-gold pl-8 py-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-oswald text-5xl text-bim-gold">
                    {field.number}
                  </span>
                  <h2 className="font-oswald text-4xl text-bim-blue">
                    {field.name}
                  </h2>
                </div>
                <p className="text-lg text-gray-700 mb-4 ml-16">
                  {field.description}
                </p>
                <div className="ml-16">
                  <h3 className="font-oswald text-sm uppercase text-gray-500 mb-2">
                    Core Principles
                  </h3>
                  <ul className="space-y-1">
                    {field.principles.map((principle, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center">
                        <span className="text-bim-gold mr-2">▸</span>
                        {principle}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BIM Section */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-oswald text-4xl text-bim-blue mb-8 text-center">
            Why Blueprint In Motion?
          </h2>

          <div className="space-y-8 text-lg text-gray-700">
            <div>
              <h3 className="font-oswald text-2xl text-bim-blue mb-3">
                Most Men Are Stuck in Survival
              </h3>
              <p className="leading-relaxed">
                You work hard. You push through. You survive. But deep down, you know there&apos;s more.
                You weren&apos;t built for mediocrity. You were built for mastery. For legacy. For impact.
              </p>
            </div>

            <div>
              <h3 className="font-oswald text-2xl text-bim-blue mb-3">
                The Problem: Fragmented Development
              </h3>
              <p className="leading-relaxed">
                Self-help offers pieces. A fitness program here. A business course there. A meditation app.
                But life isn&apos;t lived in pieces. You need a complete system. A blueprint that integrates
                every dimension of who you are.
              </p>
            </div>

            <div>
              <h3 className="font-oswald text-2xl text-bim-blue mb-3">
                The Solution: Systematic Mastery
              </h3>
              <p className="leading-relaxed">
                Blueprint In Motion is not another quick fix. It&apos;s a complete framework for masculine
                development. Seven fields. Systematic progression. From survival to legacy. From chaos to
                clarity. From potential to mastery.
              </p>
            </div>

            <div>
              <h3 className="font-oswald text-2xl text-bim-blue mb-3">
                The Journey: Silence, Clarity, Movement
              </h3>
              <p className="leading-relaxed">
                We start with silence—cutting through the noise. Then clarity—seeing what actually matters.
                Finally, movement—taking precise, powerful action. This is the way of mastery.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/books"
              className="inline-block bg-bim-blue text-white px-8 py-4 rounded-lg font-oswald text-xl hover:bg-opacity-90 transition-colors"
            >
              Get the Blueprint
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
