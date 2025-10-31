import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function IntegrityPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 bg-bim-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-oswald text-6xl mb-6">
            Integrity
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            Our foundation. Our protocol. Our commitment.
          </p>
        </div>
      </section>

      {/* Charter */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-oswald text-4xl text-bim-blue mb-8">
            The BIM Charter
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div className="border-l-4 border-bim-gold pl-8">
              <h3 className="font-oswald text-2xl text-bim-blue mb-4">
                1. Truth Over Comfort
              </h3>
              <p className="text-lg">
                We speak what is real, not what feels good. Truth serves growth.
                Comfort serves stagnation. We choose growth.
              </p>
            </div>

            <div className="border-l-4 border-bim-gold pl-8">
              <h3 className="font-oswald text-2xl text-bim-blue mb-4">
                2. Action Over Theory
              </h3>
              <p className="text-lg">
                Knowledge without action is entertainment. We test. We apply. We measure.
                The blueprint lives in practice, not in pages.
              </p>
            </div>

            <div className="border-l-4 border-bim-gold pl-8">
              <h3 className="font-oswald text-2xl text-bim-blue mb-4">
                3. Integration Over Fragmentation
              </h3>
              <p className="text-lg">
                Life is not lived in pieces. Physical. Emotional. Psychological. Relational.
                Financial. Spiritual. Quantum. Seven fields, one system.
              </p>
            </div>

            <div className="border-l-4 border-bim-gold pl-8">
              <h3 className="font-oswald text-2xl text-bim-blue mb-4">
                4. Mastery Over Mediocrity
              </h3>
              <p className="text-lg">
                Survival is not enough. Comfort is not the goal. We build for legacy.
                We train for mastery. We live for impact.
              </p>
            </div>

            <div className="border-l-4 border-bim-gold pl-8">
              <h3 className="font-oswald text-2xl text-bim-blue mb-4">
                5. Silence Over Noise
              </h3>
              <p className="text-lg">
                The world is loud. We cultivate silence. In silence, clarity emerges.
                In clarity, power is found. In power, legacy is built.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Protocol */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-oswald text-4xl text-bim-blue mb-8">
            The BIM Protocol
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-oswald text-xl text-bim-blue mb-3">
                What We Provide
              </h3>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-bim-gold">▸</span>
                  <span>Systematic frameworks for personal development across seven dimensions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bim-gold">▸</span>
                  <span>Tools and methods tested through real application</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bim-gold">▸</span>
                  <span>Weekly FieldTalks on specific principles and practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bim-gold">▸</span>
                  <span>Books, resources, and protocols for self-directed transformation</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-oswald text-xl text-bim-blue mb-3">
                What We Don't Provide
              </h3>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-bim-gold">▸</span>
                  <span>Quick fixes or instant transformations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bim-gold">▸</span>
                  <span>Emotional validation or comfort without growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bim-gold">▸</span>
                  <span>Guarantees of success without your commitment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bim-gold">▸</span>
                  <span>Excuses for mediocrity or stagnation</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-oswald text-xl text-bim-blue mb-3">
                What We Expect
              </h3>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-bim-gold">▸</span>
                  <span>Personal responsibility for your own transformation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bim-gold">▸</span>
                  <span>Commitment to practice, not just consumption</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bim-gold">▸</span>
                  <span>Honesty about where you are and where you want to go</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bim-gold">▸</span>
                  <span>Patience with the process and persistence through challenges</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Terms */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-oswald text-4xl text-bim-blue mb-8">
            Privacy & Terms
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-oswald text-2xl text-bim-blue mb-4">
                Your Privacy
              </h3>
              <p className="mb-4">
                We collect only what is necessary to provide our services. Your email for communications.
                Your name for personalization. Your payment information for transactions (processed securely
                through trusted third-party providers).
              </p>
              <p className="mb-4">
                We do not sell your data. We do not share your information with third parties for
                marketing purposes. Your privacy is non-negotiable.
              </p>
              <p>
                You may request deletion of your data at any time by contacting us directly.
              </p>
            </div>

            <div>
              <h3 className="font-oswald text-2xl text-bim-blue mb-4">
                Terms of Use
              </h3>
              <p className="mb-4">
                All content provided by Blueprint In Motion is for educational and informational purposes.
                It is not a substitute for professional medical, psychological, or financial advice.
              </p>
              <p className="mb-4">
                You are responsible for your own choices and actions. BIM provides frameworks and tools,
                but transformation requires your commitment and effort.
              </p>
              <p>
                All materials are protected by copyright. Personal use is permitted. Commercial use
                or redistribution requires explicit permission.
              </p>
            </div>

            <div>
              <h3 className="font-oswald text-2xl text-bim-blue mb-4">
                Refund Policy
              </h3>
              <p className="mb-4">
                Digital products: 30-day money-back guarantee if you are not satisfied.
              </p>
              <p className="mb-4">
                Physical books: Returns accepted within 14 days of delivery in original condition.
              </p>
              <p>
                We stand behind our work. If it doesn't serve you, we'll refund your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 sm:px-6 bg-bim-blue text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-oswald text-4xl mb-6">
            Questions About Our Integrity?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            We value transparency. If you have questions about our charter, protocol,
            or policies, reach out directly.
          </p>
          <a
            href="#contact"
            className="inline-block bg-bim-gold text-bim-blue px-8 py-3 rounded-lg font-oswald font-semibold hover:bg-yellow-400 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
