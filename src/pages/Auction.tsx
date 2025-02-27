import React, { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import PaymentGateway from '../components/PaymentGateway';
import { 
  Gavel, Clock, Building2, Package, ArrowRight, 
  Search, Filter, SortAsc, MapPin 
} from 'lucide-react';

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

const Auction: React.FC = () => {
const [initialAuctionItems] = useState<AuctionItem[]>([
  {
    id: 1,
    title: "Industrial Metal Scrap Lot",
    description: "Large quantity of mixed metal scrap including steel, aluminum, and copper",
    company: "Steel Industries Ltd",
    location: "Mumbai, Maharashtra",
    currentBid: 250000,
    dateLeft: "2025-03-02",
    timeLeft: "2 days",
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Metal"
  },
  {
    id: 2,
    title: "E-Waste Collection",
    description: "Bulk electronic waste including PCBs, processors, and components",
    company: "Tech Solutions Inc",
    location: "Bangalore, Karnataka",
    currentBid: 180000,
    dateLeft: "2025-2-28",
    timeLeft: "5 hours",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Electronics"
  }
]);
const [fetchedAuctionItems, setFetchedAuctionItems] = useState<AuctionItem[]>([]);
const [showPaymentGateway, setShowPaymentGateway] = useState(false);
const [selectedItem, setSelectedItem] = useState<AuctionItem | null>(null);
const [searchTerm, setSearchTerm] = useState('');
const [selectedCategory, setSelectedCategory] = useState('all');
const [isSortedAsc, setIsSortedAsc] = useState(true);
const navigate = useNavigate();

  // Fetch auction items from Firestore on component mount
  useEffect(() => {
    const fetchAuctionItems = async () => {
      const querySnapshot = await getDocs(collection(db, "auctionItems"));
      const items: AuctionItem[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        items.push({
          id: Number(doc.id),
          title: data.title,
          description: data.description,
          company: data.company,
          location: data.location,
          currentBid: data.currentBid,
          dateLeft: data.dateLeft,
          timeLeft: data.timeLeft,
          image: data.image,
          category: data.category
        } as AuctionItem);
      });
      setFetchedAuctionItems(items);
    };

    fetchAuctionItems();
  }, []); // Empty dependency array ensures it runs once when the component mounts

  const combinedAuctionItems = [...initialAuctionItems, ...fetchedAuctionItems];

  const handlePlaceBid = (item: AuctionItem) => {
    setSelectedItem(item);
    setShowPaymentGateway(true);
    console.log(`Placing bid on item: ${item.title}`);
  };

  const handlePaymentSuccess = () => {
    setShowPaymentGateway(false);
    console.log('Payment Successful!');
    setTimeout(() => {
      window.location.reload();
    }, 0.000);
  };

  const handlePaymentFailure = () => {
    setShowPaymentGateway(false);
    console.log('Payment Failed!');
  };

  const filteredItems = combinedAuctionItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedItems = filteredItems.sort((a, b) => {
    if (isSortedAsc) {
      return a.currentBid - b.currentBid;
    } else {
      return b.currentBid - a.currentBid;
    }
  });

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 dark:text-white">
            <Gavel className="inline-block w-10 h-10 mr-3 text-green-600" />
            Scrap Auctions
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Bid on bulk industrial scrap materials from verified businesses. 
            All auctions are verified and quality-checked.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search auctions..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <select
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="metal">Metal</option>
                <option value="electronics">Electronics</option>
                <option value="plastic">Plastic</option>
                <option value="paper">Paper</option>
              </select>
              <button className="px-4 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-white" onClick={() => setIsSortedAsc(!isSortedAsc)}>
                <Filter className="w-5 h-5" />
              </button>
              <button className="px-4 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-white">
              <SortAsc className={`w-5 h-5 ${isSortedAsc ? '' : 'transform rotate-180'}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Auction Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold dark:text-white">{item.title}</h3>
                  <div className="flex items-center text-orange-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{item.timeLeft}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{item.company}</span>
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{item.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Current Bid</p>
                    <p className="text-2xl font-bold text-green-600">₹{item.currentBid.toLocaleString()}</p>
                  </div>
                  <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  onClick={() => handlePlaceBid(item)}>
                    Place Bid
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Create Auction CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white text-center"
        >
          <Package className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Have Industrial Scrap to Sell?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Create your own auction and reach thousands of verified scrap dealers across India.
            Get the best value for your industrial waste.
          </p>
          <button 
            className="bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            onClick={() => navigate('/create-auction')}
          >
            <Gavel className="w-5 h-5" />
            Create Auction
          </button>
        </motion.div>
        
        {/* Payment Gateway Modal */}
        {showPaymentGateway && selectedItem && (
          <PaymentGateway 
            amount={selectedItem.currentBid}
            item={selectedItem} 
            onSuccess={handlePaymentSuccess} 
            onError={handlePaymentFailure} 
          />
        )}

      </div>
    </div>
  );
};

export default Auction;