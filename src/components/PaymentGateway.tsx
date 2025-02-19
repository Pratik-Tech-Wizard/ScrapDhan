import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentGateway = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loadRazorpay = () => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        const options = {
          key: 'rzp_test_tA1GoWxiVdtmfE', // Replace with your Razorpay key
          amount: 50000, // Amount in paise (50000 paise = 500 INR)
          currency: 'INR',
          name: 'ScrapDhan',
          description: 'Auction Payment',
          image: '/ScrapDhan-removebg-preview.png', // Replace with your logo URL
          handler: function () {
            alert('Payment successful');
            navigate('/auctions');
          },
          prefill: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            contact: '9999999999',
          },
          theme: {
            color: '#3399cc',
          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };
      script.onerror = () => {
        alert('Failed to load Razorpay SDK');
      };
      document.body.appendChild(script);
    };

    loadRazorpay();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <h1 className="text-2xl font-bold dark:text-white">Processing Payment...</h1>
    </div>
  );
};

export default PaymentGateway;