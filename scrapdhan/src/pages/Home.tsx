import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Scale, Banknote, MapPin, Recycle, Phone } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen gradient-bg flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl font-bold text-white mb-6">
              Got <span className="text-green-500">scrap</span>?<br />
              Sell it to us.
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Transform your waste into wealth with our AI-powered scrap management platform.
              Get the best prices and contribute to a sustainable future.
            </p>
            <div className="flex gap-4">
              <button className="btn-primary">
                Schedule Pickup
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="btn-secondary">
                Check Rates
                <Scale className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Sustainable solutions with ease</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Truck className="w-12 h-12" />}
              title="Doorstep Pickup"
              description="Free pickup service for 40+ types of recyclables"
            />
            <ServiceCard
              icon={<Scale className="w-12 h-12" />}
              title="Best Prices"
              description="AI-powered pricing for maximum value"
            />
            <ServiceCard
              icon={<Recycle className="w-12 h-12" />}
              title="Sustainable Impact"
              description="Contributing to circular economy"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to get started?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Join thousands of users who are making a difference while earning from their waste.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;