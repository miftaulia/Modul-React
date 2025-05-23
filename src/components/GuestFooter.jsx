import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-300 pt-16 pb-10 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
          <p className="mb-2">📞 666 888 0000</p>
          <p className="mb-2">✉️ info@company.com</p>
          <p className="mb-2">📍 66 top broklyn street. New York</p>
        </div>

        <div>
          <h4 className="text-xl font-bold text-white mb-4">Sosial Media</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-3">
              <FaInstagram className="text-pink-500 text-lg" />
              @sedap.app
            </li>
            <li className="flex items-center gap-3">
              <FaFacebookF className="text-blue-500 text-lg" />
              Sedap Official
            </li>
            <li className="flex items-center gap-3">
              <FaTwitter className="text-blue-400 text-lg" />
              @sedap_app
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-white mb-4">Partner</h4>
          <div className="flex items-center justify-center gap-6">
            <img
              src="https://avatar.iran.liara.run/public/15"
              alt="Partner 1"
              className="w-25 h-auto grayscale hover:grayscale-0 transition duration-300"
            />
            <img
              src="https://avatar.iran.liara.run/public/16"
              alt="Partner 2"
              className="w-25 h-auto grayscale hover:grayscale-0 transition duration-300"
            />
            <img
              src="https://avatar.iran.liara.run/public/17"
              alt="Partner 3"
              className="w-25 h-auto grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        &copy; Copyright 2025 by Company.com
      </div>
    </footer>
  );
}
