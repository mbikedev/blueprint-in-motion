import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Mock data for Phase 1 - replace with database queries once DB is set up
const mockFieldTalks = [
  {
    id: '1',
    title: 'On Physical Mastery',
    slug: 'on-physical-mastery',
    content: `Most men treat their bodies as afterthoughts. A vehicle to carry the mind. This is backwards.

The body is the foundation. Without physical mastery, everything else crumbles.

Strength. Energy. Vitality. These are not luxuries. They are prerequisites.

You cannot think clearly when your body is weak. You cannot feel deeply when your energy is depleted. You cannot act powerfully when your vitality is compromised.

Physical mastery is not about aesthetics. It's about functionality. About building a body that serves your mission. That sustains your work. That carries you through the demands of legacy-building.

Start here. Master the physical field first. Everything else becomes easier.`,
    tags: 'Physical,Mastery,Foundation',
    blueprintPrinciple: 'The body is the foundation of all other fields',
    published: true,
    publishedAt: new Date('2025-01-15'),
  },
]

export default async function FieldTalkPage({ params }: { params: { slug: string } }) {
  // For Phase 1, using mock data
  // TODO: Replace with actual database query once DB is configured
  // const fieldtalk = await prisma.fieldTalk.findUnique({
  //   where: {
  //     slug: params.slug,
  //     published: true
  //   },
  // })

  const fieldtalk = mockFieldTalks.find(talk => talk.slug === params.slug)

  if (!fieldtalk) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Article Header */}
      <article className="py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link
            href="/fieldtalks"
            className="inline-flex items-center text-bim-blue hover:text-bim-gold mb-8 transition-colors"
          >
            ← Back to FieldTalks
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {fieldtalk.tags.split(',').map((tag) => (
              <span
                key={tag}
                className="text-xs uppercase tracking-wide text-gray-500 font-semibold bg-gray-100 px-3 py-1 rounded-full"
              >
                {tag.trim()}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="font-oswald text-5xl text-bim-blue mb-6 leading-tight">
            {fieldtalk.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            {fieldtalk.publishedAt && (
              <time>
                {new Date(fieldtalk.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            )}
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-800 leading-relaxed whitespace-pre-wrap">
              {fieldtalk.content}
            </div>
          </div>

          {/* Blueprint Principle */}
          <div className="mt-12 p-8 bg-gray-50 border-l-4 border-bim-gold rounded-r-lg">
            <h3 className="font-oswald text-xl text-bim-blue mb-3">
              Blueprint Principle
            </h3>
            <p className="text-gray-800 text-lg font-semibold">
              {fieldtalk.blueprintPrinciple}
            </p>
          </div>
        </div>
      </article>

      {/* Navigation to other FieldTalks */}
      <section className="py-12 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <Link
            href="/fieldtalks"
            className="inline-block bg-bim-blue text-white px-8 py-3 rounded-lg font-oswald font-semibold hover:bg-opacity-90 transition-colors"
          >
            Explore More FieldTalks
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

// Generate static params for all published fieldtalks
export async function generateStaticParams() {
  // For Phase 1, using mock data
  // TODO: Replace with actual database query once DB is configured
  // const fieldtalks = await prisma.fieldTalk.findMany({
  //   where: { published: true },
  //   select: { slug: true },
  // })

  return mockFieldTalks.map((talk) => ({
    slug: talk.slug,
  }))
}
