import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 dark:text-white">Privacy Policy</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information.
            </p>
          </motion.div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-start space-x-4">
              <Shield className="w-12 h-12 text-green-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">Information Collection</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  We collect information that you provide to us directly, such as when you create an account, update your profile, or use our services.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-8">
            <div className="flex items-start space-x-4">
              <Shield className="w-12 h-12 text-green-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">Use of Information</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-8">
            <div className="flex items-start space-x-4">
              <Shield className="w-12 h-12 text-green-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">Information Sharing</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  We do not share your personal information with third parties except as necessary to provide our services or as required by law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;