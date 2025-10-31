import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 py-20 sm:py-0">
      <div className="text-center px-4 sm:px-6">
        <h1 className="font-oswald text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-4 sm:mb-6">
          Blueprint In Motion
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
          A structured approach to personal development through the seven dimensions of life
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="/labs"
            className="bg-bim-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg hover:bg-blue-700 transition-colors"
          >
            Join BIM-Labs
          </Link>
          <Link
            href="/book"
            className="border-2 border-bim-blue text-bim-blue px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg hover:bg-bim-blue hover:text-white transition-colors"
          >
            Get The Book
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

export default Hero