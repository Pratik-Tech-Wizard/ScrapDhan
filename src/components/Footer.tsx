import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Recycle, MapPin, Phone, Mail } from 'lucide-react';
import Rewards from '@/pages/Rewards';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Recycle className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-2xl font-bold">ScrapDhan</span>
            </Link>
            <p className="text-gray-400">
              Transforming waste management through AI-powered solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/scrap-types" className="text-gray-400 hover:text-green-500">Scrap Types</Link></li>
              <li><Link to="/auction" className="text-gray-400 hover:text-green-500">Auction</Link></li>
              <li><Link to="/rewards" className="text-gray-400 hover:text-green-500">Rewards</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-green-500">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-green-500">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-gray-400 hover:text-green-500">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-green-500" />
                <span className="text-gray-400">ITER, Bhubaneswar, Odisha, 751030</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-6 w-6 text-green-500" />
                <span className="text-gray-400">+91 8144733758, +91 7077102250, +91 93370005825</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-6 w-6 text-green-500" />
                <span className="text-gray-400">support@scrapdhan.com</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-green-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-green-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-green-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-green-500">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ScrapDhan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
