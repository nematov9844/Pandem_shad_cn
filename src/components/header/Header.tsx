import Logo from '../../assets/Logo';
import { Button } from '../ui/button';
import { useState } from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full p-4 max-w-[1440px] mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Logo />
        <span className="text-2xl font-bold text-white">Pandem</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-white items-center">
        <a href="#docs" className="hover:text-gray-300">Docs</a>
        <a href="#pricing" className="hover:text-gray-300">Pricing</a>
        <a href="#status" className="hover:text-gray-300">Status</a>
        <a href="#faqs" className="hover:text-gray-300">FAQs</a>
        <a href="#contact" className="hover:text-gray-300">Contact Us</a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col space-y-4 p-4 md:hidden">
          <a href="#docs" className="hover:text-gray-300">Docs</a>
          <a href="#pricing" className="hover:text-gray-300">Pricing</a>
          <a href="#status" className="hover:text-gray-300">Status</a>
          <a href="#faqs" className="hover:text-gray-300">FAQs</a>
          <a href="#contact" className="hover:text-gray-300">Contact Us</a>
        </div>
      )}

      {/* Buttons */}
      <div className="hidden md:flex space-x-4">
        <Button className="bg-transparent hover:bg-gray-700">Login</Button>
        <Button variant="outline">Sign Up</Button>
      </div>
    </header>
  );
}
