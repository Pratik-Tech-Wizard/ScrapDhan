import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Recycle, Menu, X, Sun, Moon, User } from 'lucide-react';
import logo from '../../public/ScrapDhan-removebg-preview.png';

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

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white dark:bg-gray-800 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Site Logo" className="w-[5.25rem]"/>
              <span className="text-2xl font-bold text-gradient dark:text-white">ScrapDhan</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link dark:text-gray-300">Home</Link>
            <Link to="/sell" className="nav-link dark:text-gray-300">Sell Scrap</Link>
            <Link to="/scrap-types" className="nav-link dark:text-gray-300">Scrap Types</Link>
            <Link to="/auction" className="nav-link dark:text-gray-300">Auction</Link>
            <Link to="/contact" className="nav-link dark:text-gray-300">Contact</Link>
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {isDark ? <Sun className="h-5 w-5 text-gray-300" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link to="/auth" className="btn-primary dark:bg-green-500 dark:hover:bg-green-600">
              <User className="h-5 w-5" />
              <span>Sign In</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {isDark ? <Sun className="h-5 w-5 text-gray-300" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white dark:bg-gray-800 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 nav-link dark:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/sell"
              className="block px-3 py-2 nav-link dark:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Sell Scrap
            </Link>
            <Link
              to="/scrap-types"
              className="block px-3 py-2 nav-link dark:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Scrap Types
            </Link>
            <Link
              to="/auction"
              className="block px-3 py-2 nav-link dark:text-gray-300"
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
              className="block px-3 py-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-500"
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