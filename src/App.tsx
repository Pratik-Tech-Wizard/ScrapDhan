import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Home />
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;