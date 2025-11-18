import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('landing')

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 bg-bim-blue text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/20">
                <Image
                  src="/images/chris.jpeg"
                  alt="Christian De Ley"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left flex-1">
              <h1 className="font-oswald text-5xl md:text-6xl mb-4">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                {t('hero.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16 text-gray-700 leading-relaxed">

            {/* The Architect */}
            <div className="border-l-4 border-bim-gold pl-8 py-4">
              <h2 className="font-oswald text-3xl text-bim-blue mb-6">
                {t('architect.title')}
              </h2>
              <div className="text-lg space-y-4">
                <p>{t('architect.intro')}</p>
                <p>{t('architect.notMotivate')}</p>
                <p>{t('architect.buildArchitecture')}</p>
                <p className="pt-4">
                  {t('architect.workedInSilence')}<br />
                  {t('architect.nightsAndDays')}<br />
                  {t('architect.noiseAndRestlessness')}<br />
                  {t('architect.menAwake')}
                </p>
                <p className="pt-4">
                  {t('architect.beganAsNecessity')}<br />
                  {t('architect.structureThatHolds')}<br />
                  {t('architect.disciplineThatTurns')}
                </p>
              </div>
            </div>

            {/* The Why */}
            <div className="border-l-4 border-bim-gold pl-8 py-4">
              <h2 className="font-oswald text-3xl text-bim-blue mb-6">
                {t('why.title')}
              </h2>
              <div className="text-lg space-y-4">
                <p>
                  {t('why.worshipsDistraction')}<br />
                  {t('why.menScroll')}<br />
                  {t('why.awarenessRebellion')}
                </p>
                <p className="pt-4">
                  {t('why.builtToRestore')}<br />
                  {t('why.bringStructure')}<br />
                  {t('why.remindMen')}<br />
                  {t('why.clarityConsequence')}
                </p>
              </div>
            </div>

            {/* The System */}
            <div className="border-l-4 border-bim-gold pl-8 py-4">
              <h2 className="font-oswald text-3xl text-bim-blue mb-6">
                {t('system.title')}
              </h2>
              <div className="text-lg space-y-4">
                <p>
                  {t('system.notMethod')}<br />
                  {t('system.sevenFields')}<br />
                  <span className="italic">{t('system.fields')}</span>
                </p>
                <p className="pt-4">
                  {t('system.revealsResistance')}<br />
                  {t('system.emotionInformation')}<br />
                  {t('system.disciplinePresence')}
                </p>
                <p className="pt-4">
                  {t('system.exploreOneByOne')}<br />
                  {t('system.startFieldTalks')}<br />
                  {t('system.theoryBreathes')}
                </p>
              </div>
            </div>

            {/* The Ethic */}
            <div className="border-l-4 border-bim-gold pl-8 py-4">
              <h2 className="font-oswald text-3xl text-bim-blue mb-6">
                {t('ethic.title')}
              </h2>
              <div className="text-lg space-y-4">
                <p>
                  {t('ethic.sellsAttention')}<br />
                  {t('ethic.weProtect')}
                </p>
                <p className="pt-4">
                  {t('ethic.noTracking')}<br />
                  {t('ethic.privacySacred')}
                </p>
                <p className="pt-4">
                  {t('ethic.integrityCharter')}<br />
                  {t('ethic.notRulebook')}<br />
                  {t('ethic.reminderEthics')}
                </p>
                <p className="pt-4">
                  {t('ethic.builtToProve')}<br />
                  {t('ethic.consciousnessExpand')}
                </p>
              </div>
            </div>

            {/* The Motion */}
            <div className="border-l-4 border-bim-gold pl-8 py-4">
              <h2 className="font-oswald text-3xl text-bim-blue mb-6">
                {t('motion.title')}
              </h2>
              <div className="text-lg space-y-4">
                <p>
                  {t('motion.labsToRetreats')}<br />
                  {t('motion.consciousField')}<br />
                  {t('motion.notNewTech')}
                </p>
                <p className="pt-4">
                  {t('motion.notebookToMovement')}<br />
                  {t('motion.menRebuilding')}
                </p>
                <p className="pt-4">
                  {t('motion.motionNeedsWords')}<br />
                  {t('motion.awarenessTrace')}
                </p>
              </div>
            </div>

            {/* The Contact */}
            <div className="border-l-4 border-bim-gold pl-8 py-4">
              <h2 className="font-oswald text-3xl text-bim-blue mb-6">
                {t('contact.title')}
              </h2>
              <div className="text-lg space-y-4">
                <p>
                  {t('contact.notForEveryone')}<br />
                  {t('contact.forThoseWhoFeel')}
                </p>
                <p className="pt-4">
                  {t('contact.noForms')}<br />
                  {t('contact.ifSomethingMoves')}<br />
                  {t('contact.reachOut')}<br />
                  {t('contact.meetThere')}
                </p>
              </div>
            </div>

            {/* Blueprint Principle */}
            <div className="bg-gray-50 border-2 border-bim-gold p-8 mt-12">
              <p className="font-oswald text-xl text-bim-blue text-center italic">
                {t('principle.title')}<br />
                <span className="text-gray-700 not-italic">
                  {t('principle.text')}
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
            {t('cta.title')}
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/books"
              className="bg-bim-gold text-bim-blue px-8 py-3 rounded-lg font-oswald font-semibold hover:bg-opacity-90 transition-colors"
            >
              {t('cta.getBook')}
            </Link>
            <Link
              href="/fieldtalks"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-oswald font-semibold hover:bg-white hover:text-bim-blue transition-colors"
            >
              {t('cta.exploreFieldTalks')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
