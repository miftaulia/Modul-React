import { GiCottonFlower } from "react-icons/gi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";

export default function GuestHeader() {
  return (
    <header className="bg-white text-gray-800 py-6 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 relative">
        
        <div className="flex items-center gap-6 text-sm font-poppins z-10">
          <div className="flex items-center gap-2 border-r pr-4">
            <FaTwitter className="text-gray-500" />
            <FaFacebookF className="text-gray-500" />
            <FaInstagram className="text-gray-500" />
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-green-600 text-lg " />
            <div className="hidden sm:block">
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-sm text-gray-700">info@organik.com</p>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-abril flex items-center gap-1">
          <span className="text-green-600 text-4xl">
            <GiCottonFlower />
          </span>
          Organik
        </div>

        <div className="flex items-center gap-6 text-sm font-poppins z-10">
          <div className="flex items-center gap-2 pr-4 border-r">
            <FaPhone className="text-green-600 text-lg" />
            <div className="hidden sm:block">
              <p className="text-xs text-gray-500">Phone</p>
              <p className="text-sm text-gray-700">92 666 888 0000</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-lg">
            <FaSearch className="cursor-pointer text-gray-700" />
            <FaShoppingCart className="cursor-pointer text-gray-700" />
          </div>
        </div>
      </div>
    </header>
  );
}
