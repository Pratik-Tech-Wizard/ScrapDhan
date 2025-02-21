import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is ScrapDhan?',
    answer: 'ScrapDhan is a platform that provides efficient and eco-friendly scrap recycling solutions.',
  },
  {
    question: 'How do I schedule a pickup?',
    answer: 'You can schedule a pickup by visiting our scheduling page or calling us at 1800-SCRAP-NOW.',
  },
  {
    question: 'What types of scrap do you accept?',
    answer: 'We accept a wide range of scrap materials including paper, metal, plastic, and electronics.',
  },
  // Add more FAQs as needed
];

const FAQ = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 dark:text-white">Frequently Asked Questions</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Find answers to the most commonly asked questions about ScrapDhan.
            </p>
          </motion.div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <div className="flex items-start space-x-4">
                  <HelpCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;