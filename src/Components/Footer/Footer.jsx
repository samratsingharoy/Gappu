import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-6 mt-[100px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Product Section */}
        <div>
          <h2 className="text-orange-500 text-lg font-semibold mb-4">Product</h2>
          <ul className="space-y-2">
            <li>Premium Cajon</li>
            <li>Cajon</li>
            <li>Shaker</li>
            <li>Bongo</li>
            <li>Snare</li>
            <li>Accessories</li>
          </ul>
        </div>

        {/* Center Logo Section */}
        <div className="flex flex-col items-center w-[458.25px] h-[207.25px]flex-shrink: 0">
          <img src="public\Gappu.png" alt="Gappu Logo" className="mb-2" />
          <p className="text-sm">Music Brings Happiness</p>
          <h2 className="text-orange-500 text-lg font-semibold mt-4">All Social Links</h2>
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com" className="text-blue-500">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" className="text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://youtube.com" className="text-red-600">
              <FaYoutube size={20} />
            </a>
            <a href="https://instagram.com" className="text-pink-500">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" className="text-blue-700">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Other Section */}
        <div>
          <h2 className="text-orange-500 text-lg font-semibold mb-4">Other</h2>
          <ul className="space-y-2">
            <li>🎤 Artist</li>
            <li>📚 Courses</li>
            <li>📄 PDS</li>
            <li>📍 Dealer Locator</li>
            <li>📝 Feedback Form</li>
            <li>❓ FAQ</li>
          </ul>
          <h2 className="text-lg font-semibold text-gray-200 mt-6">Partnered Events</h2>
          <div className="flex space-x-4 mt-2">
            <img src="path/to/event1-logo.png" alt="Event 1" className="h-12 w-12" />
            <img src="path/to/event2-logo.png" alt="Event 2" className="h-12 w-12" />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        <p>&copy; 2024 <span className="font-bold text-orange-500">GAPPU CAJON</span></p>
        <p className="mt-2">
          Terms & Conditions | Return, Refund & Cancellation | Policy | Privacy Policy
        </p>
        <p className="mt-2">
          Designed & Developed By <span className="font-bold text-orange-500">INFLUCON</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
