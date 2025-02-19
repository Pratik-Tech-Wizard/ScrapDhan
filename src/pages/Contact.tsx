import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 dark:text-white">Get in Touch</h1>
            <p className="text-gray-600 dark:text-gray-300">Have questions? We're here to help!</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-300 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border-gray-300 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border-gray-300 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">Our Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    123 Green Street, Eco City<br />
                    Sustainable State, 12345
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex items-start space-x-4">
                <Phone className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    +91 8144733758, +91 7077102250, +91 93370005825<br />
                    Mon-Sat 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex items-start space-x-4">
                <Mail className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    support@scrapdhan.com<br />
                    info@scrapdhan.com
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex items-start space-x-4">
                <Clock className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">Business Hours</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 h-96"
          >
            {/* Google Maps integration will go here */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;