import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SellScrap from './pages/SellScrap';
import ScrapTypes from './pages/ScrapTypes';
import Auction from './pages/Auction';
import CreateAuction from './pages/CreateAuction';
import Contact from './pages/Contact';
import Notifications from './pages/Notifications';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import PaymentGateway from './components/PaymentGateway';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell" element={<SellScrap />} />
          <Route path="/scrap-types" element={<ScrapTypes />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/create-auction" element={<CreateAuction />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/payment-gateway" element={<PaymentGateway amount={100} onSuccess={() => console.log('Payment Successful')} onError={() => console.log('Payment Failed')} />} />
        </Routes>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;