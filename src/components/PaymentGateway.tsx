import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface AuctionItem {
  id: number;
  title: string;
  description: string;
  company: string;
  location: string;
  currentBid: number;
  dateLeft: string;
  timeLeft: string;
  image: string;
  category: string;
}

interface PaymentGatewayProps{
  amount: number;
  item: AuctionItem;
  onSuccess: ()=> void;
  onError: ()=> void;
}

const PaymentGateway: React.FC<PaymentGatewayProps> = ({ amount, item, onSuccess, onError }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const loadRazorpay = () => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        const options = {
          key: 'rzp_test_tA1GoWxiVdtmfE', // Replace with your Razorpay key
          amount: amount * 100, // Amount in paise (50000 paise = 500 INR)
          currency: 'INR',
          name: 'ScrapDhan',
          description: `Payment for ${item.title}`,
          image: '/ScrapDhan-removebg-preview.png', // Replace with your logo URL
          handler: function () {
            onSuccess();
          },
          prefill: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            contact: '9999999999',
          },
          theme: {
            color: '#3399cc',
          },
          modal: {
            ondismiss: function () {
              onError();
            }
          }
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
  }, [amount, navigate, onSuccess, onError]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <h1 className="text-2xl font-bold dark:text-white">Processing Payment...</h1>
    </div>
  );
};

export default PaymentGateway;