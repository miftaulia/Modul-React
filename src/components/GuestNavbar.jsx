import { Link } from "react-router-dom";
import { FaUser, FaChevronDown } from "react-icons/fa";


export default function GuestNavbar() {
  return (
<nav className="bg-gray-100 py-4 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm text-gray-700 font-poppins">
        
        <div className="flex items-center gap-2">
          <div className="bg-green-500 text-white p-1.5 rounded-full">
            <FaUser size={12} />
          </div>
          <Link to="/login" className="hover:text-green-600">
            Login / Register
          </Link>
        </div>

        <ul className="flex gap-6 items-center font-medium">
          <li>
            <a href="#home" className="text-green-600">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-700 hover:text-green-600">
              About
            </a>
          </li>
          <li>
            <a href="#produk" className="text-gray-700 hover:text-green-600">
              Product
            </a>
          </li>
          <li>
            <a href="#testi" className="text-gray-700 hover:text-green-600">
              Testimony
            </a>
          </li>
          <a href="#member" className="text-gray-700 hover:text-green-600">
              Cek Keanggotaan
            </a>
        </ul>

        <div className="flex items-center gap-2 cursor-pointer hover:text-green-600">
          <img
            src="img/uk.png"
            alt="English"
            className="w-5 h-5 rounded-full"
          />
          <span>English</span>
          <FaChevronDown className="text-xs" />
        </div>
      </div>
    </nav>
  );
}
