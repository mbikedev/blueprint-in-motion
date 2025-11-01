import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function IntegrityPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 bg-bim-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-oswald text-5xl mb-6">
            Blueprint Integrity Charter
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            Our covenant. Our foundation. Our sacred commitment.
          </p>
        </div>
      </section>

      {/* Founders' Declaration */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-bim-gold pl-8 py-4 mb-16">
            <h2 className="font-oswald text-3xl text-bim-blue mb-8">
              Founders' Declaration
            </h2>
            <div className="text-lg space-y-4 text-gray-700 leading-relaxed">
              <p>I did not create Blueprint in Motion to extract or to manipulate.</p>
              <p>I created it to restore integrity in a world that has turned awareness into a product.</p>

              <p className="pt-4">
                Every line of code, every word, every design and decision must serve one purpose:<br />
                to elevate human consciousness, not to harvest it.
              </p>

              <p className="pt-4">
                Technology should mirror the human soul, not market it.<br />
                Privacy is sacred, not negotiable.<br />
                Transparency is a right, not a privilege.<br />
                Innovation without ethics is regression disguised as progress.
              </p>

              <p className="pt-4">
                No data will ever be sold.<br />
                No behavior will ever be gamified for profit.<br />
                No manipulation will ever hide behind optimization.
              </p>

              <p className="pt-4">
                Blueprint in Motion exists to remind both creators and users that consciousness must remain the owner of its tools.<br />
                When technology starts to witness rather than exploit, humanity evolves — not by force, but by presence.
              </p>
            </div>

            {/* Blueprint Principle */}
            <div className="bg-gray-50 border-2 border-bim-gold p-6 mt-8">
              <p className="font-oswald text-lg text-bim-blue text-center italic">
                Blueprint Principle:<br />
                <span className="text-gray-700 not-italic">
                  Integrity is not a feature. It is the foundation that allows truth to function.
                </span>
              </p>
            </div>
          </div>

          {/* Seven Ethical Foundations */}
          <div className="mb-16">
            <h2 className="font-oswald text-4xl text-bim-blue mb-12 text-center">
              The Seven Ethical Foundations
            </h2>

            <div className="space-y-8">
              {/* 1. Human First */}
              <div className="border-l-4 border-bim-gold pl-8 py-4">
                <h3 className="font-oswald text-2xl text-bim-blue mb-4">
                  1. Human First
                </h3>
                <div className="text-lg text-gray-700 space-y-2">
                  <p>Every structure begins and ends with the human being.</p>
                  <p>Technology is a servant of consciousness, not its replacement.</p>
                </div>
              </div>

              {/* 2. Privacy as Sacred */}
              <div className="border-l-4 border-bim-gold pl-8 py-4">
                <h3 className="font-oswald text-2xl text-bim-blue mb-4">
                  2. Privacy as Sacred
                </h3>
                <div className="text-lg text-gray-700 space-y-2">
                  <p>Data is not a resource. It is an extension of trust.</p>
                  <p>All systems within Blueprint in Motion follow the principle of minimal collection and local processing.</p>
                  <p>Nothing leaves the user's domain without consent. Ever.</p>
                </div>
              </div>

              {/* 3. Transparency by Design */}
              <div className="border-l-4 border-bim-gold pl-8 py-4">
                <h3 className="font-oswald text-2xl text-bim-blue mb-4">
                  3. Transparency by Design
                </h3>
                <div className="text-lg text-gray-700 space-y-2">
                  <p>Every mechanism, transaction, and algorithm must be explainable in human language.</p>
                  <p>If it cannot be explained, it cannot be deployed.</p>
                  <p>Transparency is the architecture of trust.</p>
                </div>
              </div>

              {/* 4. Non-Exploitation */}
              <div className="border-l-4 border-bim-gold pl-8 py-4">
                <h3 className="font-oswald text-2xl text-bim-blue mb-4">
                  4. Non-Exploitation
                </h3>
                <div className="text-lg text-gray-700 space-y-2">
                  <p>No manipulation, emotional or behavioral, will be coded or tolerated.</p>
                  <p>Attention is treated as sacred currency — never as a commodity.</p>
                </div>
              </div>

              {/* 5. Integrity over Innovation */}
              <div className="border-l-4 border-bim-gold pl-8 py-4">
                <h3 className="font-oswald text-2xl text-bim-blue mb-4">
                  5. Integrity over Innovation
                </h3>
                <div className="text-lg text-gray-700 space-y-2">
                  <p>Progress is not defined by how much we can do, but by how truthfully we can do it.</p>
                  <p>Every new tool must align with the ethical framework before it enters the field.</p>
                </div>
              </div>

              {/* 6. Consent and Clarity */}
              <div className="border-l-4 border-bim-gold pl-8 py-4">
                <h3 className="font-oswald text-2xl text-bim-blue mb-4">
                  6. Consent and Clarity
                </h3>
                <div className="text-lg text-gray-700 space-y-2">
                  <p>No interaction is assumed. Every form of data, presence, or participation requires conscious agreement.</p>
                  <p>The user must always know what is happening, why, and with what consequence.</p>
                </div>
              </div>

              {/* 7. The Human Witness */}
              <div className="border-l-4 border-bim-gold pl-8 py-4">
                <h3 className="font-oswald text-2xl text-bim-blue mb-4">
                  7. The Human Witness
                </h3>
                <div className="text-lg text-gray-700 space-y-2">
                  <p>Behind every interface stands a human witness who carries responsibility.</p>
                  <p>Automation can assist, but never replace accountability.</p>
                  <p>Every system remains traceable to a human origin.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-bim-gold pl-8 py-4">
            <h2 className="font-oswald text-3xl text-bim-blue mb-6">
              Application
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                This charter applies to all divisions of the Blueprint ecosystem:<br />
                Blueprint in Motion, BIM-Labs, Blueprint Retreats, and The Conscious Field.
              </p>
              <p>
                It is legally binding for every developer, contributor, and partner.<br />
                It governs how technology, psychology, and economy interact within the Blueprint infrastructure.
              </p>
              <p>
                Violation of these principles results in immediate termination of access and collaboration.<br />
                Alignment is voluntary, but once entered, it is sacred.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 px-4 sm:px-6 bg-bim-blue text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-8">
            <div className="text-2xl leading-relaxed">
              <p className="mb-6">This Charter is not a contract.</p>
              <p className="font-oswald text-3xl">It is a covenant.</p>
            </div>

            <div className="pt-8 border-t border-white/20 text-lg">
              <p className="mb-2 italic">Signed in silence,</p>
              <p className="font-oswald text-xl">Christian De Ley</p>
              <p className="text-gray-200">Architect of Blueprint in Motion</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
