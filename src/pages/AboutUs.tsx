import React from 'react';
import { motion } from 'framer-motion';
import { Info, Eye, Heart, History } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 dark:text-white">About Us</h1>
            <p className="text-gray-600 dark:text-gray-300">
              ScrapDhan is dedicated to providing efficient and eco-friendly scrap recycling solutions. Our mission is to make recycling easy and accessible for everyone. We offer a range of services to help you recycle your scrap responsibly and get the best value for it.
            </p>
          </motion.div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-start space-x-4">
              <Info className="w-12 h-12 text-green-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  At ScrapDhan, our mission is to promote sustainable recycling practices and provide top-notch services to our customers. We believe in creating a cleaner and greener environment by encouraging responsible recycling.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <Eye className="w-12 h-12 text-green-600 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4 dark:text-white">Our Vision</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our vision is to be the leading provider of sustainable recycling solutions, making a positive impact on the environment and communities we serve. We strive to innovate and improve our services to meet the evolving needs of our customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <Heart className="w-12 h-12 text-green-600 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4 dark:text-white">Our Values</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    We are committed to integrity, sustainability, and customer satisfaction. Our values guide our actions and decisions, ensuring that we operate responsibly and ethically in all aspects of our business.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <History className="w-12 h-12 text-green-600 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4 dark:text-white">Our History</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    ScrapDhan was founded in 2025 with the goal of revolutionizing the recycling industry. Over the years, we have grown and expanded our services, building a reputation for excellence and innovation in the field of scrap recycling.
                  </p>
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;