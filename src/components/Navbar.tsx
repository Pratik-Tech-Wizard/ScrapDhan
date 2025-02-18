import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Recycle, Menu, X, Sun, Moon, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Recycle className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gradient">ScrapDhan</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/scrap-types" className="nav-link">Scrap Types</Link>
            <Link to="/auction" className="nav-link">Auction</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link to="/auth" className="btn-primary">
              <User className="h-5 w-5" />
              <span>Sign In</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 nav-link"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/scrap-types"
              className="block px-3 py-2 nav-link"
              onClick={() => setIsOpen(false)}
            >
              Scrap Types
            </Link>
            <Link
              to="/auction"
              className="block px-3 py-2 nav-link"
              onClick={() => setIsOpen(false)}
            >
              Auction
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 nav-link"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/auth"
              className="block px-3 py-2 text-green-600 hover:text-green-700"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;