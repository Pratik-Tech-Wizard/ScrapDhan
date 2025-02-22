import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Scale, Recycle, Phone } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import ScrapTypeGrid from '../components/ScrapTypeGrid';
import RateList from '../components/RateList';
import BlurText from "../components/BlurText";
import Carousel from '../components/Carousel';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleAnimationComplete = () => {
    console.log('Animation completed');
  };

  const handleScrollToRates = () => {
    const rateListSection = document.querySelector('#rate-list-section');
    if (rateListSection) {
      rateListSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'userDetails'), {
        name,
        email,
        message,
      });
      alert('Details submitted successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

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
            className="flex items-center gap-8"
          >
            <div className="w-2/3">
              <BlurText
                text="Turn Junk Into Money ♻️⚙️"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-5xl mb-8 text-white"
              />
              <p className="text-xl text-gray-200 mb-8">
                Transform your waste into wealth with our AI-powered scrap management platform.
                Get the best prices and contribute to a sustainable future.
              </p>
              <div className="flex gap-4">
                <button className="btn-primary" onClick={() => navigate('/sell')}>
                  {t('schedulePickup')}
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="btn-secondary" onClick={handleScrollToRates}>
                  {t('checkRates')}
                  <Scale className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="w-1/2 h-full flex justify-center items-center">
              <Carousel
                baseWidth={300}
                autoplay={true}
                autoplayDelay={3000}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* User Details Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('enterDetails')}</h2>
            <p className="text-xl text-gray-600">{t('weWouldLoveToHearFromYou')}</p>
          </div>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                {t('name')}
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-green-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                {t('email')}
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-green-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                {t('message')}
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-green-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              {t('submit')}
            </button>
          </form>
        </div>
      </section>

      {/* Scrap Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('whatWouldYouLikeToSell')}</h2>
            <p className="text-xl text-gray-600">{t('chooseFromOurWideRange')}</p>
          </div>
          <ScrapTypeGrid />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('ourServices')}</h2>
            <p className="text-xl text-gray-600">{t('sustainableSolutions')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Truck className="w-12 h-12" />}
              title={t('doorstepPickup')}
              description={t('freePickupService')}
            />
            <ServiceCard
              icon={<Scale className="w-12 h-12" />}
              title={t('bestPrices')}
              description={t('aiPoweredPricing')}
            />
            <ServiceCard
              icon={<Recycle className="w-12 h-12" />}
              title={t('sustainableImpact')}
              description={t('contributingToCircularEconomy')}
            />
          </div>
        </div>
      </section>

      {/* Rate List Section */}
      <section id="rate-list-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('currentScrapRates')}</h2>
            <p className="text-xl text-gray-600 mb-8">{t('getTheBestPrices')}</p>
          </div>
          <RateList />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">{t('readyToGetStarted')}</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            {t('joinThousandsOfUsers')}
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          onClick={() => navigate('/contact')}>
            <Phone className="h-5 w-5" />
            {t('contactUsNow')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;