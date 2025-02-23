import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '/ScrapDhan-removebg-preview.png'; 

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000); 

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <img src={logo} alt="ScrapDhan Logo" className="w-52 h-52 mb-4" />
      <h1 className="text-4xl font-bold mb-2">Welcome to ScrapDhan</h1>
      <p className="text-xl text-gray-600">Transforming waste management through AI-powered solutions.</p>
    </div>
  );
};

export default LandingPage;