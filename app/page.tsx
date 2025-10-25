import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-oswald text-4xl text-center mb-12">Transform Your Life</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-gray-200 rounded-lg">
              <h3 className="font-oswald text-2xl mb-4">Physical</h3>
              <p className="text-gray-600">Build strength and vitality through structured physical development.</p>
            </div>
            <div className="text-center p-8 border border-gray-200 rounded-lg">
              <h3 className="font-oswald text-2xl mb-4">Mental</h3>
              <p className="text-gray-600">Develop clarity, focus, and emotional intelligence.</p>
            </div>
            <div className="text-center p-8 border border-gray-200 rounded-lg">
              <h3 className="font-oswald text-2xl mb-4">Spiritual</h3>
              <p className="text-gray-600">Connect with your deeper purpose and meaning.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}