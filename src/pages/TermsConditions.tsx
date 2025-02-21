import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 dark:text-white">Terms & Conditions</h1>
            <p className="text-gray-600 dark:text-gray-300">
              These terms and conditions outline the rules and regulations for the use of ScrapDhan's website and services.
            </p>
          </motion.div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-start space-x-4">
              <FileText className="w-12 h-12 text-green-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">Introduction</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  By accessing this website, we assume you accept these terms and conditions. Do not continue to use ScrapDhan if you do not agree to all of the terms and conditions stated on this page.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-8">
            <div className="flex items-start space-x-4">
              <FileText className="w-12 h-12 text-green-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">License</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Unless otherwise stated, ScrapDhan and/or its licensors own the intellectual property rights for all material on ScrapDhan. All intellectual property rights are reserved.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-8">
            <div className="flex items-start space-x-4">
              <FileText className="w-12 h-12 text-green-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">User Comments</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. ScrapDhan does not filter, edit, publish or review Comments prior to their presence on the website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;