import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function LabsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-oswald text-5xl text-center mb-8">BIM-Labs</h1>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Join our exclusive community of growth-minded individuals committed to transformation
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="border-2 border-gray-200 rounded-lg p-8">
              <h2 className="font-oswald text-3xl mb-4">Initiation Cycle</h2>
              <div className="text-4xl font-bold text-bim-blue mb-4">€9.11<span className="text-lg font-normal">/month</span></div>
              <p className="text-gray-600 mb-6">3-month commitment</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Access to all 7 dimension forums
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Ground Days participation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Community support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Monthly group calls
                </li>
              </ul>
              <Link href="/members/register?tier=initiation" className="block text-center bg-bim-blue text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
                Start Your Journey
              </Link>
            </div>
            
            <div className="border-2 border-bim-gold rounded-lg p-8 relative">
              <div className="absolute top-4 right-4 bg-bim-gold text-white px-3 py-1 rounded-md text-sm">
                RECOMMENDED
              </div>
              <h2 className="font-oswald text-3xl mb-4">Commitment Cycle</h2>
              <div className="text-4xl font-bold text-bim-blue mb-4">€19.11<span className="text-lg font-normal">/month</span></div>
              <p className="text-gray-600 mb-6">6-month commitment</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Everything in Initiation Cycle
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Brotherhood Voting rights
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Advanced workshops
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Priority retreat access
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Direct mentorship opportunities
                </li>
              </ul>
              <Link href="/members/register?tier=commitment" className="block text-center bg-bim-gold text-white py-3 rounded-md hover:bg-yellow-600 transition-colors">
                Commit to Excellence
              </Link>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="font-oswald text-2xl mb-4">Already a member?</h3>
            <Link href="/members/login" className="inline-block border-2 border-bim-blue text-bim-blue px-8 py-3 rounded-md hover:bg-bim-blue hover:text-white transition-colors">
              Login to BIM-Labs
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}