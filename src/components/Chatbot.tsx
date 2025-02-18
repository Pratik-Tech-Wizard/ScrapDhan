import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { MessageSquare, X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const steps = [
    {
      id: '1',
      message: 'Welcome to ScrapDhan! How can I help you today?',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 1, label: 'Schedule a pickup', trigger: '3' },
        { value: 2, label: 'Check scrap rates', trigger: '4' },
        { value: 3, label: 'Contact support', trigger: '5' },
      ],
    },
    {
      id: '3',
      message: 'Please visit our scheduling page or call us at 1800-SCRAP-NOW',
      trigger: '2',
    },
    {
      id: '4',
      message: 'Current market rates are updated daily. Visit our rates page for live prices.',
      trigger: '2',
    },
    {
      id: '5',
      message: 'You can reach our support team at support@scrapdhan.com',
      trigger: '2',
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-2 top-2 z-10 p-2 bg-white rounded-full shadow-md"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
          <ChatBot
            steps={steps}
            headerTitle="ScrapDhan Support"
            floating={true}
            style={{ width: '350px' }}
          />
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
        )}
        </div>
      );
    };
    
    export default Chatbot;