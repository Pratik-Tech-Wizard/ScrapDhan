import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const teamMembers = [
  {
    name: 'Rameswar',
    role: 'App Developer',
    image: 'RB.jpg',
  },
  {
    name: 'Prithiviraj',
    role: 'Frontend Developer',
    image: 'Prithvi.jpg',
  },
  {
    name: 'Pratik',
    role: 'Backend Developer',
    image: 'Pratik.jpg',
  }
];

const OurTeam = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 dark:text-white">Our Team</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Meet the dedicated team behind ScrapDhan. Our team is committed to providing the best service and support to our customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold dark:text-white">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;