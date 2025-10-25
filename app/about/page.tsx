import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-oswald text-5xl mb-8">About Blueprint In Motion</h1>
          <div className="prose prose-lg">
            <p className="text-gray-600 leading-relaxed mb-6">
              Blueprint In Motion is a comprehensive framework for personal development, 
              designed to help individuals transform their lives through structured growth 
              across seven key dimensions.
            </p>
            <h2 className="font-oswald text-3xl mt-12 mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              To provide a clear, actionable blueprint for personal transformation that 
              addresses all aspects of human development - physical, emotional, psychological, 
              relational, financial, spiritual, and quantum.
            </p>
            <h2 className="font-oswald text-3xl mt-12 mb-6">The Seven Dimensions</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-bim-gold mr-3">✓</span>
                <div>
                  <strong>Physical:</strong> Health, fitness, and vitality
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-bim-gold mr-3">✓</span>
                <div>
                  <strong>Emotional:</strong> Emotional intelligence and regulation
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-bim-gold mr-3">✓</span>
                <div>
                  <strong>Psychological:</strong> Mental clarity and cognitive development
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-bim-gold mr-3">✓</span>
                <div>
                  <strong>Relational:</strong> Connections and relationships
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-bim-gold mr-3">✓</span>
                <div>
                  <strong>Financial:</strong> Abundance and resource management
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-bim-gold mr-3">✓</span>
                <div>
                  <strong>Spiritual:</strong> Purpose and meaning
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-bim-gold mr-3">✓</span>
                <div>
                  <strong>Quantum:</strong> Consciousness and infinite potential
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}