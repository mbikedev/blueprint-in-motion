import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-oswald text-xl mb-4">Blueprint In Motion</h3>
            <p className="text-gray-400">
              Transform your life through structured personal development.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/book" className="text-gray-400 hover:text-white">Book</Link></li>
              <li><Link href="/labs" className="text-gray-400 hover:text-white">BIM-Labs</Link></li>
              <li><Link href="/retreats" className="text-gray-400 hover:text-white">Retreats</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Members</h4>
            <ul className="space-y-2">
              <li><Link href="/members" className="text-gray-400 hover:text-white">Login</Link></li>
              <li><Link href="/members/register" className="text-gray-400 hover:text-white">Register</Link></li>
              <li><Link href="/members/dashboard" className="text-gray-400 hover:text-white">Dashboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-gray-400 hover:text-white">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Blueprint In Motion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer