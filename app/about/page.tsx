import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 bg-bim-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-oswald text-5xl mb-4">
            About
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16 text-gray-700 leading-relaxed">

            {/* The Architect */}
            <div className="border-l-4 border-bim-gold pl-8 py-4">
              <h2 className="font-oswald text-3xl text-bim-blue mb-6">
                The Architect
              </h2>
              <div className="text-lg space-y-4">
                <p>My name is Christian De Ley</p>
                <p>I am not here to motivate anyone.</p>
                <p>I am here to build the architecture that makes change unavoidable.</p>
                <p className="pt-4">
                  For years I worked in silence.<br />
                  Nights in institutions. Days in garages.<br />
                  Noise around me. Restlessness inside me.<br />
                  At some point I realised most men are awake only enough to function, not to live.
                </p>
                <p className="pt-4">
                  Blueprint in Motion began as a necessity.<br />
                  A structure that could hold truth without collapsing.<br />
                  A discipline that could turn pain into movement.
                </p>
              </div>
            </div>

            {/* The Why */}
            <div className="border-l-4 border-bim-gold pl-8 py-4">
              <h2 className="font-oswald text-3xl text-bim-blue mb-6">
                The Why
              </h2>
              <div className="text-lg space-y-4">
                <p>
                  We live in a time that worships distraction.<br />
                  Men scroll, chase, consume, and call it living.<br />
                  Awareness has become rebellion.
                </p>
                <p className="pt-4">
                  I built this work to restore direction.<br />
                  To bring structure where chaos pretends to be freedom.<br />
                  To remind men that silence is not weakness but calibration.<br />
                  That clarity is not a gift but a consequence.
                </p>
              </div>
            </div>

            {/* The System */}
            <div className="border-l-4 border-bim-gold pl-8 py-4">
              <h2 className="font-oswald text-3xl text-bim-blue mb-6">
                The System
              </h2>
              <div className="text-lg space-y-4">
                <p>
                  Blueprint in Motion is not a method. It is a mirror.<br />
                  Seven Fields reflect seven dimensions of mastery:<br />
                  <span className="italic">Physical. Emotional. Psychological. Relational. Financial. Spiritual. Quantum.</span>
                </p>
                <p className="pt-4">
                  Each field reveals where a man resists himself.<br />
                  Where emotion becomes information.<br />
                  Where discipline turns into presence.
                </p>
                <p className="pt-4">
                  You can explore them one by one.<br />
                  Or you can start reading FieldTalks, where the framework moves in real time.<br />
                  That is where theory breathes and structure becomes story.
                </p>
              </div>
            </div>

            {/* The Ethic */}
            <div className="border-l-4 border-bim-gold pl-8 py-4">
              <h2 className="font-oswald text-3xl text-bim-blue mb-6">
                The Ethic
              </h2>
              <div className="text-lg space-y-4">
                <p>
                  The modern world sells attention.<br />
                  We protect it.
                </p>
                <p className="pt-4">
                  No tracking. No manipulation. No hidden extraction.<br />
                  Privacy is sacred. Presence is currency.
                </p>
                <p className="pt-4">
                  Everything here operates under the Blueprint Integrity Charter.<br />
                  It is not a rulebook but a vow.<br />
                  A reminder that innovation without ethics is just ego in disguise.
                </p>
                <p className="pt-4">
                  Blueprint in Motion was built to prove one thing.<br />
                  That consciousness can expand without losing its centre.
                </p>
              </div>
            </div>

            {/* The Motion */}
            <div className="border-l-4 border-bim-gold pl-8 py-4">
              <h2 className="font-oswald text-3xl text-bim-blue mb-6">
                The Motion
              </h2>
              <div className="text-lg space-y-4">
                <p>
                  From Blueprint Labs to Blueprint Retreats, everything points to one horizon.<br />
                  The Conscious Field.<br />
                  Not a new technology. A new responsibility.
                </p>
                <p className="pt-4">
                  This began as a notebook and became a movement.<br />
                  Men rebuilding themselves through observation, discipline, and brotherhood.
                </p>
                <p className="pt-4">
                  When motion needs words, it becomes FieldTalks.<br />
                  Where awareness leaves a trace so others can find their own.
                </p>
              </div>
            </div>

            {/* The Contact */}
            <div className="border-l-4 border-bim-gold pl-8 py-4">
              <h2 className="font-oswald text-3xl text-bim-blue mb-6">
                Contact
              </h2>
              <div className="text-lg space-y-4">
                <p>
                  This space is not for everyone.<br />
                  It is for those who feel the quiet pull to wake up.
                </p>
                <p className="pt-4">
                  No forms. No filters.<br />
                  If something in you moves, follow that.<br />
                  Reach out in silence.<br />
                  We will meet there.
                </p>
              </div>
            </div>

            {/* Blueprint Principle */}
            <div className="bg-gray-50 border-2 border-bim-gold p-8 mt-12">
              <p className="font-oswald text-xl text-bim-blue text-center italic">
                Blueprint Principle:<br />
                <span className="text-gray-700 not-italic">
                  Integrity is not a feature. It is the foundation that allows truth to function.
                </span>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 bg-bim-blue text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-oswald text-4xl mb-6">
            Ready to Begin?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Start with the Blueprint. Study the fields. Apply the protocols.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/books"
              className="bg-bim-gold text-bim-blue px-8 py-3 rounded-lg font-oswald font-semibold hover:bg-opacity-90 transition-colors"
            >
              Get the Book
            </Link>
            <Link
              href="/fieldtalks"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-oswald font-semibold hover:bg-white hover:text-bim-blue transition-colors"
            >
              Explore FieldTalks
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
