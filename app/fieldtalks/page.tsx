import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

// Mock data for Phase 1 - replace with database queries once DB is set up
const mockFieldTalks = [
  {
    id: '1',
    title: 'On Physical Mastery',
    slug: 'on-physical-mastery',
    content: 'Most men treat their bodies as afterthoughts. A vehicle to carry the mind. This is backwards. The body is the foundation. Without physical mastery, everything else crumbles. Strength. Energy. Vitality. These are not luxuries. They are prerequisites...',
    tags: ['Physical', 'Mastery'],
    blueprintPrinciple: 'The body is the foundation of all other fields',
    published: true,
    publishedAt: new Date('2025-01-15'),
  },
  // More FieldTalks will be added weekly
]

export default async function FieldTalksPage() {
  // For Phase 1, using mock data
  // TODO: Replace with actual database query once DB is configured
  // const fieldtalks = await prisma.fieldTalk.findMany({
  //   where: { published: true },
  //   orderBy: { publishedAt: 'desc' },
  // })

  const fieldtalks = mockFieldTalks

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 bg-bim-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-oswald text-6xl mb-6">
            FieldTalks
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Weekly transmissions on mastery. Short. Direct. Actionable.
            Each talk maps to one of the seven fields and one blueprint principle.
          </p>
        </div>
      </section>

      {/* FieldTalks List */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {fieldtalks.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                New FieldTalks coming soon. Check back weekly for fresh insights.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {fieldtalks.map((talk) => (
                <Link
                  key={talk.id}
                  href={`/fieldtalks/${talk.slug}`}
                  className="block group"
                >
                  <article className="border-l-4 border-bim-gold pl-8 py-6 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {talk.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs uppercase tracking-wide text-gray-500 font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-oswald text-3xl text-bim-blue mb-3 group-hover:text-bim-gold transition-colors">
                      {talk.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {talk.content.substring(0, 200)}...
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">
                        <span className="font-semibold">Blueprint Principle:</span> {talk.blueprintPrinciple}
                      </p>
                      <span className="text-bim-blue font-semibold group-hover:text-bim-gold transition-colors">
                        Read →
                      </span>
                    </div>
                    {talk.publishedAt && (
                      <p className="text-xs text-gray-400 mt-2">
                        {new Date(talk.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    )}
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-oswald text-3xl text-bim-blue mb-6">
            Never Miss a FieldTalk
          </h2>
          <p className="text-gray-700 mb-8">
            New insights delivered weekly. Subscribe to stay sharp.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-bim-blue"
              required
            />
            <button
              type="submit"
              className="bg-bim-blue text-white px-6 py-3 rounded-lg font-oswald font-semibold hover:bg-opacity-90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
