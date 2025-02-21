// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, History } from "lucide-react";

// interface Transaction {
//   id: number;
//   scrapType: string;
//   weight: string;
//   date: string;
//   rewards: string;
// }

// const transactions: Transaction[] = [
//   { id: 1, scrapType: "Paper", weight: "10kg", date: "2025-02-15", rewards: "₹100" },
//   { id: 2, scrapType: "Plastic", weight: "5kg", date: "2025-02-18", rewards: "₹125" },
//   { id: 3, scrapType: "Metal", weight: "8kg", date: "2025-02-20", rewards: "₹280" },
// ];

// const Rewards = () => {
//   const [showHistory, setShowHistory] = useState(false);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
//       {/* Total Rewards */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="bg-green-600 text-white p-8 rounded-xl shadow-lg w-full max-w-md text-center"
//       >
//         <h2 className="text-2xl font-bold">Total Rewards Earned</h2>
//         <p className="text-4xl font-semibold mt-2">₹505</p>
//       </motion.div>

//       {/* Transaction History Button */}
//       <motion.button
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
//         onClick={() => setShowHistory(true)}
//       >
//         <History className="w-5 h-5" /> View Transaction History
//       </motion.button>

//       {/* Transaction History Modal */}
//       {showHistory && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-lg w-full shadow-xl"
//           >
//             <h3 className="text-xl font-bold dark:text-white">Transaction History</h3>
//             <ul className="mt-4 space-y-3">
//               {transactions.map((transaction) => (
//                 <li
//                   key={transaction.id}
//                   className="p-4 border rounded-lg dark:border-gray-700 dark:text-white"
//                 >
//                   <p className="font-semibold">{transaction.scrapType}</p>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">
//                     Weight: {transaction.weight} • Date: {transaction.date}
//                   </p>
//                   <p className="font-semibold text-green-600">Rewards: {transaction.rewards}</p>
//                 </li>
//               ))}
//             </ul>
//             <button
//               className="mt-6 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
//               onClick={() => setShowHistory(false)}
//             >
//               Close
//             </button>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Rewards;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, History } from "lucide-react";

interface Transaction {
  id: number;
  scrapType: string;
  weight: string;
  date: string;
  rewards: string;
}

const transactions: Transaction[] = [
  { id: 1, scrapType: "Paper", weight: "10kg", date: "2025-02-15", rewards: "₹100" },
  { id: 2, scrapType: "Plastic", weight: "5kg", date: "2025-02-18", rewards: "₹125" },
  { id: 3, scrapType: "Metal", weight: "8kg", date: "2025-02-20", rewards: "₹280" },
];

const giftCards = [
  { name: "Amazon Gift Card", points: 500 },
  { name: "Flipkart Voucher", points: 700 },
  { name: "Myntra Gift Card", points: 600 },
  { name: "Google Play Gift Card", points: 800 },
];

const Rewards = () => {
  const [showHistory, setShowHistory] = useState(false);
  const [showVouchers, setShowVouchers] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
      {/* Total Rewards */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-green-600 text-white p-8 rounded-xl shadow-lg w-full max-w-md text-center"
      >
        <h2 className="text-2xl font-bold">Total Rewards Earned</h2>
        <p className="text-4xl font-semibold mt-2">₹505</p>
      </motion.div>

      {/* Transaction History Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        onClick={() => {
          setShowHistory(true);
          setShowVouchers(false);
        }}
      >
        <History className="w-5 h-5" /> View Transaction History
      </motion.button>

      {/* Transaction History Modal */}
      {showHistory && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-lg w-full shadow-xl"
          >
            {/* Conditional Rendering for Transactions or Gift Cards */}
            {!showVouchers ? (
              <>
                <h3 className="text-xl font-bold dark:text-white">Transaction History</h3>
                <ul className="mt-4 space-y-3">
                  {transactions.map((transaction) => (
                    <li
                      key={transaction.id}
                      className="p-4 border rounded-lg dark:border-gray-700 dark:text-white"
                    >
                      <p className="font-semibold">{transaction.scrapType}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Weight: {transaction.weight} • Date: {transaction.date}
                      </p>
                      <p className="font-semibold text-green-600">Rewards: {transaction.rewards}</p>
                    </li>
                  ))}
                </ul>

                {/* Convert to Gift Card Button */}
                <button
                  className="mt-6 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  onClick={() => setShowVouchers(true)}
                >
                  Convert to Gift Card or Vouchers
                </button>

                <button
                  className="mt-3 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
                  onClick={() => setShowHistory(false)}
                >
                  Close
                </button>
              </>
            ) : (
              <>
                <h3 className="text-xl font-bold dark:text-white">Available Gift Cards</h3>
                <ul className="mt-4 space-y-3">
                  {giftCards.map((gift, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center p-3 border rounded-lg dark:border-gray-700 dark:text-white"
                    >
                      <span>{gift.name}</span>
                      <span className="font-bold text-green-600">{gift.points} Points</span>
                    </li>
                  ))}
                </ul>

                {/* Back & Close Buttons */}
                <button
                  className="mt-6 w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  onClick={() => setShowVouchers(false)}
                >
                  Back to Transactions
                </button>

                <button
                  className="mt-3 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
                  onClick={() => setShowHistory(false)}
                >
                  Close
                </button>
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Rewards;
