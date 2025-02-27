import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Newspaper, Wrench, Laptop, Package,
  Car, Factory, Leaf, Scale, ArrowRight,
  Search, Filter
} from 'lucide-react';

interface ScrapType {
  id: number;
  name: string;
  icon: React.ReactNode;
  description: string;
  price: string;
  category: string;
  acceptanceGuidelines: string[];
  image: string;
}

const scrapTypes: ScrapType[] = [
  {
    id: 1,
    name: "Newspapers & Magazines",
    icon: <Newspaper className="w-8 h-8" />,
    description: "Old newspapers, magazines, books, and printed materials",
    price: "₹15-20/kg",
    category: "Paper",
    acceptanceGuidelines: [
      "Must be dry and clean",
      "No food-contaminated paper",
      "Properly bundled or packed"
    ],
    image: "./paper.jpg"
  },
  {
    id: 2,
    name: "PET Bottles & Plastics",
    icon: <Package className="w-8 h-8" />,
    description: "Clean plastic bottles, containers, and packaging materials",
    price: "₹25-30/kg",
    category: "Plastic",
    acceptanceGuidelines: [
      "Cleaned and dried",
      "Labels removed",
      "Crushed to save space"
    ],
    image: "./plastic.jpg"
  },
  {
    id: 3,
    name: "Metal Scrap",
    icon: <Wrench className="w-8 h-8" />,
    description: "Iron, aluminum, copper, steel, brass and other metal materials",
    price: "₹35-400/kg",
    category: "Metal",
    acceptanceGuidelines: [
      "Sorted by metal type",
      "Free from non-metallic attachments",
      "No hazardous materials"
    ],
    image: "./metal.jpg"
  },
  {
    id: 4,
    name: "E-Waste",
    icon: <Laptop className="w-8 h-8" />,
    description: "Electronic devices, computers, phones, and accessories",
    price: "₹50-100/kg",
    category: "Electronics",
    acceptanceGuidelines: [
      "Data wiped from devices",
      "Batteries removed",
      "Complete units preferred"
    ],
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const ScrapTypes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header with Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 dark:text-white">Scrap Materials We Accept</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Learn about different types of scrap materials we accept and their current market rates.
            All materials are processed following eco-friendly guidelines.
          </p>
          
          {/* Video Tutorial Button */}
          <button
            onClick={() => setShowVideo(true)}
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            <Leaf className="w-5 h-5" />
            Watch Recycling Guide
          </button>
        </motion.div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search scrap types..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <select
              className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="paper">Paper</option>
              <option value="plastic">Plastic</option>
              <option value="metal">Metal</option>
              <option value="electronics">Electronics</option>
            </select>
            <button className="px-4 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-white">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrap Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scrapTypes
            .filter(type => 
              (selectedCategory === 'all' || type.category.toLowerCase() === selectedCategory) &&
              (type.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
               type.description.toLowerCase().includes(searchTerm.toLowerCase()))
            )
            .map((type) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={type.image}
                    alt={type.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                    {type.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-100 rounded-lg text-green-600">
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-semibold dark:text-white">{type.name}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{type.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <Scale className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-semibold text-green-600">{type.price}</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold dark:text-white">Acceptance Guidelines:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                      {type.acceptanceGuidelines.map((guideline, index) => (
                        <li key={index}>{guideline}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  onClick={() => navigate('/sell')}>
                    Schedule Pickup
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Special Categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-r from-green-600 to-slate-700 rounded-xl p-8 text-white"
          >
            <Car className="w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Vehicle Scrapping</h2>
            <p className="mb-6">
              Professional end-of-life vehicle scrapping services with proper documentation
              and environmental compliance.
            </p>
            <button className="bg-white text-slate-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors inline-flex items-center gap-2">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-r from-green-600 to-slate-700 rounded-xl p-8 text-white"
          >
            <Factory className="w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Industrial Waste Management</h2>
            <p className="mb-6">
              Comprehensive industrial waste management solutions for businesses
              with proper documentation and recycling certificates.
            </p>
            <button className="bg-white text-slate-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors inline-flex items-center gap-2">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 max-w-4xl w-full mx-4">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                {/* Replace with actual video embed */}
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Recycling Tips</h2>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Always clean and dry your recyclables before disposing of them.</li>
                  <li>Remove labels and caps from plastic bottles.</li>
                  <li>Sort your recyclables by category: paper, plastic, metal, and electronics.</li>
                  <li>Bundle or pack paper materials properly to avoid scattering.</li>
                  <li>Crush plastic bottles to save space.</li>
                  <li>Ensure electronic devices are data-wiped and batteries are removed.</li>
                  <li>Separate metal scrap by type and remove non-metallic attachments.</li>
                  <li>Follow local recycling guidelines for specific disposal instructions.</li>
                </ul>
              </div>
              <button
                onClick={() => setShowVideo(false)}
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrapTypes;