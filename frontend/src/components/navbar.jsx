import { useState } from "react";
import { Menu, X, Search, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-red-600 text-2xl font-bold">CP PLUS</div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-red-600 cursor-pointer">Home</li>
          <li className="hover:text-red-600 cursor-pointer">Products</li>
          <li className="hover:text-red-600 cursor-pointer">Solutions</li>
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
          <li className="hover:text-red-600 cursor-pointer">Support</li>
          <li className="hover:text-red-600 cursor-pointer">Contact Us</li>
        </ul>
      )}
    </nav>
  );
}