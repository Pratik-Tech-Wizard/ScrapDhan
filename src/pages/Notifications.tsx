import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Package, Truck, DollarSign, AlertCircle } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'pickup',
    title: 'Pickup Scheduled',
    message: 'Your scrap pickup has been scheduled for tomorrow between 9:00 AM - 11:00 AM',
    time: '2 hours ago',
    icon: Truck,
    color: 'text-blue-500',
    bgColor: 'bg-blue-100'
  },
  {
    id: 2,
    type: 'payment',
    title: 'Payment Received',
    message: 'Payment of ₹1,500 has been credited to your wallet',
    time: '1 day ago',
    icon: DollarSign,
    color: 'text-green-500',
    bgColor: 'bg-green-100'
  },
  {
    id: 3,
    type: 'auction',
    title: 'New Auction Alert',
    message: 'A new industrial scrap auction has been listed in your area',
    time: '2 days ago',
    icon: Package,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-100'
  }
];

const Notifications = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Bell className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h1 className="text-3xl font-bold dark:text-white">Notifications</h1>
            </div>
            <button className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-500">
              Mark all as read
            </button>
          </div>

          <div className="space-y-4">
            {notifications.map((notification) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${notification.bgColor}`}>
                    <notification.icon className={`w-6 h-6 ${notification.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold dark:text-white">{notification.title}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{notification.time}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{notification.message}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {notifications.length === 0 && (
            <div className="text-center py-12">
              <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300">No notifications</h3>
              <p className="text-gray-500 dark:text-gray-400">You're all caught up!</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Notifications;