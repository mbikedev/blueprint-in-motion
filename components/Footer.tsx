import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-oswald text-lg sm:text-xl mb-3 sm:mb-4">Blueprint In Motion</h3>
            <p className="text-sm sm:text-base text-gray-400">
              Transform your life through structured personal development.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><Link href="/about" className="text-sm sm:text-base text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/book" className="text-sm sm:text-base text-gray-400 hover:text-white">Book</Link></li>
              <li><Link href="/labs" className="text-sm sm:text-base text-gray-400 hover:text-white">BIM-Labs</Link></li>
              <li><Link href="/retreats" className="text-sm sm:text-base text-gray-400 hover:text-white">Retreats</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Members</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><Link href="/members" className="text-sm sm:text-base text-gray-400 hover:text-white">Login</Link></li>
              <li><Link href="/members/register" className="text-sm sm:text-base text-gray-400 hover:text-white">Register</Link></li>
              <li><Link href="/members/dashboard" className="text-sm sm:text-base text-gray-400 hover:text-white">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><Link href="/privacy" className="text-sm sm:text-base text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm sm:text-base text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-sm sm:text-base text-gray-400 hover:text-white">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-xs sm:text-sm">&copy; 2025 Blueprint In Motion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer