
import { useState } from "react";
import { Menu, X, Search, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-red-600 text-2xl font-bold">CP PLUS</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-red-600 cursor-pointer">Home</li>
          <li className="hover:text-red-600 cursor-pointer">Products</li>
          <li
            className="hover:text-red-600 cursor-pointer relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            Solutions
            {isDropdownOpen && (
              <div className="absolute bg-white shadow-lg mt-2 p-6 grid grid-cols-3 gap-6 w-[600px] left-0">
                <div className="flex flex-col space-y-2">
                  <span className="font-semibold text-gray-900">Business</span>
                  <span className="hover:text-red-600 cursor-pointer">Banking</span>
                  <span className="hover:text-red-600 cursor-pointer">Campus</span>
                  <span className="hover:text-red-600 cursor-pointer">Healthcare</span>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="font-semibold text-gray-900">Residential</span>
                  <span className="hover:text-red-600 cursor-pointer">House</span>
                  <span className="hover:text-red-600 cursor-pointer">Office</span>
                  <span className="hover:text-red-600 cursor-pointer">Safe City</span>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="font-semibold text-gray-900">Industrial</span>
                  <span className="hover:text-red-600 cursor-pointer">Oil & Gas</span>
                  <span className="hover:text-red-600 cursor-pointer">Real Estate</span>
                </div>
              </div>
            )}
          </li>
          <li className="hover:text-red-600 cursor-pointer">Support</li>
          <li className="hover:text-red-600 cursor-pointer">Contact Us</li>
        </ul>

        {/* Icons */}
        <div className="hidden md:flex space-x-4">
          <Search className="cursor-pointer text-gray-700" />
          <User className="cursor-pointer text-gray-700" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white p-4 space-y-4 text-gray-700 text-center">
          <li className="hover:text-red-600 cursor-pointer">Home</li>
          <li className="hover:text-red-600 cursor-pointer">Products</li>
          <li className="hover:text-red-600 cursor-pointer">Solutions</li>
          <div className="grid grid-cols-2 gap-4 bg-gray-100 p-4 rounded">
            <span className="hover:text-red-600 cursor-pointer">Banking</span>
            <span className="hover:text-red-600 cursor-pointer">Campus</span>
            <span className="hover:text-red-600 cursor-pointer">Healthcare</span>
            <span className="hover:text-red-600 cursor-pointer">House</span>
            <span className="hover:text-red-600 cursor-pointer">Office</span>
            <span className="hover:text-red-600 cursor-pointer">Safe City</span>
            <span className="hover:text-red-600 cursor-pointer">Oil & Gas</span>
            <span className="hover:text-red-600 cursor-pointer">Real Estate</span>
          </div>
          <li className="hover:text-red-600 cursor-pointer">Support</li>
          <li className="hover:text-red-600 cursor-pointer">Contact Us</li>
        </ul>
      )}
    </nav>
  );
}
