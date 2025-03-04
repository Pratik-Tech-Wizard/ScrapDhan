import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import SellScrap from './pages/SellScrap';
import ScrapTypes from './pages/ScrapTypes';
import Auction from './pages/Auction';
import CreateAuction from './pages/CreateAuction';
import Contact from './pages/Contact';
import Notifications from './pages/Notifications';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import PaymentGateway from './components/PaymentGateway';
import AuthPage from './pages/AuthPage';
import AboutUs from './pages/AboutUs';
import OurTeam from './pages/OurTeam';
import Rewards from './pages/Rewards';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import FAQ from './pages/FAQ';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';

// import ScrapIdentifier from './components/ScrapIdentifier';

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sell" element={<SellScrap />} />
          <Route path="/scrap-types" element={<ScrapTypes />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/create-auction" element={<CreateAuction />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/payment-gateway" element={<PaymentGateway amount={100} onSuccess={() => console.log('Payment Successful')} onError={() => console.log('Payment Failed')} />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/faq" element={<FAQ />} />

          {/* <Route path="/scrap-identifier" element={<ScrapIdentifier />} /> */}
        </Routes>
        <Footer />
        <Chatbot />
      </div>
      <div className="App">
        <header className="App-header">
          <LanguageSwitcher />
        </header>
      </div>
    </Router>
  );
}

export default App;
