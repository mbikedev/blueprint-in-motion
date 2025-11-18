import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useTranslations } from 'next-intl'

export default function IntegrityPage() {
  const t = useTranslations('integrity')

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 bg-bim-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-oswald text-5xl mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Founders' Declaration */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-bim-gold pl-8 py-4 mb-16">
            <h2 className="font-oswald text-3xl text-bim-blue mb-8">
              {t('foundersDeclaration.title')}
            </h2>
            <div className="text-lg space-y-4 text-gray-700 leading-relaxed">
              <p>{t('foundersDeclaration.notExtract')}</p>
              <p>{t('foundersDeclaration.restore')}</p>

              <p className="pt-4">
                {t('foundersDeclaration.everyLine')}<br />
                {t('foundersDeclaration.elevate')}
              </p>

              <p className="pt-4">
                {t('foundersDeclaration.technologyMirror')}<br />
                {t('foundersDeclaration.privacySacred')}<br />
                {t('foundersDeclaration.transparencyRight')}<br />
                {t('foundersDeclaration.innovationEthics')}
              </p>

              <p className="pt-4">
                {t('foundersDeclaration.noDataSold')}<br />
                {t('foundersDeclaration.noBehavior')}<br />
                {t('foundersDeclaration.noManipulation')}
              </p>

              <p className="pt-4">
                {t('foundersDeclaration.exists')}<br />
                {t('foundersDeclaration.witness')}
              </p>
            </div>

            {/* Blueprint Principle */}
            <div className="bg-gray-50 border-2 border-bim-gold p-6 mt-8">
              <p className="font-oswald text-lg text-bim-blue text-center italic">
                {t('principle.title')}<br />
                <span className="text-gray-700 not-italic">
                  {t('principle.text')}
                </span>
              </p>
            </div>
          </div>

          {/* Seven Ethical Foundations */}
          <div className="mb-16">
            <h2 className="font-oswald text-4xl text-bim-blue mb-12 text-center">
              {t('sevenFoundations.title')}
            </h2>

            <div className="space-y-8">
              {/* 1. Human First */}
              <div className="border-l-4 border-bim-gold pl-8 py-4">
                <h3 className="font-oswald text-2xl text-bim-blue mb-4">
                  {t('sevenFoundations.humanFirst.title')}
                </h3>
                <div className="text-lg text-gray-700 space-y-2">
                  <p>{t('sevenFoundations.humanFirst.begins')}</p>
                  <p>{t('sevenFoundations.humanFirst.servant')}</p>
                </div>
              </div>

              {/* 2. Privacy as Sacred */}
              <div className="border-l-4 border-bim-gold pl-8 py-4">
                <h3 className="font-oswald text-2xl text-bim-blue mb-4">
                  {t('sevenFoundations.privacySacred.title')}
                </h3>
                <div className="text-lg text-gray-700 space-y-2">
                  <p>{t('sevenFoundations.privacySacred.notResource')}</p>
                  <p>{t('sevenFoundations.privacySacred.minimal')}</p>
                  <p>{t('sevenFoundations.privacySacred.nothingLeaves')}</p>
                </div>
              </div>

              {/* 3. Transparency by Design */}
              <div className="border-l-4 border-bim-gold pl-8 py-4">
                <h3 className="font-oswald text-2xl text-bim-blue mb-4">
                  {t('sevenFoundations.transparency.title')}
                </h3>
                <div className="text-lg text-gray-700 space-y-2">
                  <p>{t('sevenFoundations.transparency.explainable')}</p>
                  <p>{t('sevenFoundations.transparency.cannotExplain')}</p>
                  <p>{t('sevenFoundations.transparency.architecture')}</p>
                </div>
              </div>

              {/* 4. Non-Exploitation */}
              <div className="border-l-4 border-bim-gold pl-8 py-4">
                <h3 className="font-oswald text-2xl text-bim-blue mb-4">
                  {t('sevenFoundations.nonExploitation.title')}
                </h3>
                <div className="text-lg text-gray-700 space-y-2">
                  <p>{t('sevenFoundations.nonExploitation.noManipulation')}</p>
                  <p>{t('sevenFoundations.nonExploitation.attention')}</p>
                </div>
              </div>

              {/* 5. Integrity over Innovation */}
              <div className="border-l-4 border-bim-gold pl-8 py-4">
                <h3 className="font-oswald text-2xl text-bim-blue mb-4">
                  {t('sevenFoundations.integrityOverInnovation.title')}
                </h3>
                <div className="text-lg text-gray-700 space-y-2">
                  <p>{t('sevenFoundations.integrityOverInnovation.notDefined')}</p>
                  <p>{t('sevenFoundations.integrityOverInnovation.align')}</p>
                </div>
              </div>

              {/* 6. Consent and Clarity */}
              <div className="border-l-4 border-bim-gold pl-8 py-4">
                <h3 className="font-oswald text-2xl text-bim-blue mb-4">
                  {t('sevenFoundations.consent.title')}
                </h3>
                <div className="text-lg text-gray-700 space-y-2">
                  <p>{t('sevenFoundations.consent.noAssumed')}</p>
                  <p>{t('sevenFoundations.consent.mustKnow')}</p>
                </div>
              </div>

              {/* 7. The Human Witness */}
              <div className="border-l-4 border-bim-gold pl-8 py-4">
                <h3 className="font-oswald text-2xl text-bim-blue mb-4">
                  {t('sevenFoundations.humanWitness.title')}
                </h3>
                <div className="text-lg text-gray-700 space-y-2">
                  <p>{t('sevenFoundations.humanWitness.behind')}</p>
                  <p>{t('sevenFoundations.humanWitness.assist')}</p>
                  <p>{t('sevenFoundations.humanWitness.traceable')}</p>
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
              {t('application.title')}
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                {t('application.applies')}<br />
                {t('application.divisions')}
              </p>
              <p>
                {t('application.binding')}<br />
                {t('application.governs')}
              </p>
              <p>
                {t('application.violation')}<br />
                {t('application.alignment')}
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
              <p className="mb-6">{t('closing.notContract')}</p>
              <p className="font-oswald text-3xl">{t('closing.covenant')}</p>
            </div>

            <div className="pt-8 border-t border-white/20 text-lg">
              <p className="mb-2 italic">{t('closing.signed')}</p>
              <p className="font-oswald text-xl">{t('closing.name')}</p>
              <p className="text-gray-200">{t('closing.role')}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
