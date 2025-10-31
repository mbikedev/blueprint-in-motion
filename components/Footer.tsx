import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-bim-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div>
            <h3 className="font-oswald text-2xl mb-6">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-bim-gold"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-bim-gold"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-bim-gold resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-bim-gold text-bim-blue px-6 py-3 rounded-lg font-oswald font-semibold hover:bg-yellow-400 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-oswald text-lg mb-4">Navigate</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-200 hover:text-bim-gold transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blueprint-manifest" className="text-gray-200 hover:text-bim-gold transition-colors">
                    Blueprint Manifest
                  </Link>
                </li>
                <li>
                  <Link href="/books" className="text-gray-200 hover:text-bim-gold transition-colors">
                    The Books
                  </Link>
                </li>
                <li>
                  <Link href="/fieldtalks" className="text-gray-200 hover:text-bim-gold transition-colors">
                    FieldTalks
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-200 hover:text-bim-gold transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/integrity" className="text-gray-200 hover:text-bim-gold transition-colors">
                    Integrity
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-oswald text-lg mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/integrity#privacy" className="text-gray-200 hover:text-bim-gold transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/integrity#terms" className="text-gray-200 hover:text-bim-gold transition-colors">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="/integrity#refund" className="text-gray-200 hover:text-bim-gold transition-colors">
                    Refund Policy
                  </Link>
                </li>
              </ul>

              <h4 className="font-oswald text-lg mb-4 mt-8">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com/blueprintinmotion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-bim-gold transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/blueprintinmotion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-bim-gold transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/blueprintinmotion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-bim-gold transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="font-oswald text-xl mb-1">Blueprint In Motion</p>
              <p className="text-sm text-gray-300">From Survival to Legacy</p>
            </div>
            <div className="text-center md:text-right text-sm text-gray-300">
              <p>&copy; {new Date().getFullYear()} Blueprint In Motion. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
