import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 rounded-t-3xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">The Cozy Luxe - PG</h3>
            <p className="mb-4">Discover your cozy haven - where comfort meets community</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-300 transition-colors duration-300">Home</Link></li>
              <li><Link href="#about" className="hover:text-gray-300 transition-colors duration-300">About</Link></li>
              <li><Link href="#amenities" className="hover:text-gray-300 transition-colors duration-300">Amenities</Link></li>
              <li><Link href="#gallery" className="hover:text-gray-300 transition-colors duration-300">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">Near to nexus mall koramangala, Bengaluru</p>
            <p className="mb-2">Phone: +91(953) 558-5524</p>
            <p>Email: info@thecozyluxepg.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; {new Date().getFullYear()} The Cozy Luxe. All rights reserved.</p>
          <a href="https://github.com/abhiranjan2123" target='_blank' >  <p className='text-md mt-3'>Made with <span className='text-red-600'> &hearts;</span> by Abhi Ranjan </p></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

