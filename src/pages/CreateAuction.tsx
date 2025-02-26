import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Upload, Plus, Calendar, Clock, FileText, X } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { db, storage } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const CreateAuction = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [currentBid, setCurrentBid] = useState<number | string>('');
  const [dateLeft, setDateLeft] = useState('');
  const [timeLeft, setTimeLeft] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [category, setCategory] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false); 
  

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg']
    },
    onDrop: (acceptedFiles) => {
      setImages([...images, ...acceptedFiles]);
    }
  });

  const handleRemoveImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted 

    try {
      // Upload images to Firebase Storage and get URLs
      const imageUrls = await Promise.all(images.map(async (file) => {
        const storageRef = ref(storage, `auctionImages/${file.name}`);
        await uploadBytes(storageRef, file);
        return await getDownloadURL(storageRef);
      }));

      const newAuctionItem = {
        title,
        description,
        company,
        location,
        currentBid,
        dateLeft,
        timeLeft,
        images: imageUrls, // Convert File objects to URLs
        category,
        contactNumber
      };

      // Add new auction item to Firestore
      const docRef = await addDoc(collection(db, "auctionItems"), newAuctionItem);
      console.log("Document written with ID: ", docRef.id);

      // Optionally, reset form after submission
      setTitle('');
      setDescription('');
      setCompany('');
      setLocation('');
      setCurrentBid('0');
      setDateLeft('');
      setTimeLeft('');
      setImages([]);
      setCategory('');
      setContactNumber('');
      setSuccessMessage('Auction created successfully!');
      setTimeout(() => {
        navigate('/auction');
      }, 2000);
    } catch (error) {
      console.error("Error adding document: ", error);
    }finally {
      setLoading(false); // Set loading to false after form submission is complete
    }
  };  

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
        >
          <h1 className="text-4xl font-bold mb-8 text-center dark:text-white">Create Auction</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Auction Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Auction Title"
                className="w-full rounded-lg border-gray-300 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="w-full rounded-lg border-gray-300 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                rows={4}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Company Name
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company Name"
                className="w-full rounded-lg border-gray-300 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                className="w-full rounded-lg border-gray-300 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-lg border-gray-300 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="Metal">Metal</option>
                <option value="Electronics">Electronics</option>
                <option value="Plastic">Plastic</option>
                <option value="Paper">Paper</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Starting Bid (₹)
              </label>
              <input
                type="number"
                value={currentBid}
                onChange={(e) => setCurrentBid(Number(e.target.value))}
                placeholder="Starting Bid (₹)"
                className="w-full rounded-lg border-gray-300 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Contact Number
              </label>
              <input
                type="text"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="Contact Number"
                className="w-full rounded-lg border-gray-300 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  End Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    value={dateLeft}
                    onChange={(e) => setDateLeft(e.target.value)}
                    className="pl-10 w-full rounded-lg border-gray-300 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  End Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="time"
                    value={timeLeft}
                    onChange={(e) => setTimeLeft(e.target.value)}
                    className="pl-10 w-full rounded-lg border-gray-300 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>
            </div>
            <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-green-500 transition-colors dark:bg-gray-700 dark:border-gray-600">
              <input {...getInputProps()} />
              <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600 dark:text-gray-300">Drag & drop images here, or click to select files</p>
            </div>
            {images.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((file, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Auction Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                      >
                        <X className="w-5 h-5" />
                      </button>
                  </div>
                ))}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              disabled={loading} // Disable button when loading
            >
              {loading ? 'Submitting...' : 'Submit Auction'}
            </button>
            <button
                type="button"
                onClick={() => navigate('/auction')}
                className="w-full bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors mt-4"
              >
                Back
            </button>
          </div>
        </form>
        {successMessage && (
            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
              {successMessage}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CreateAuction;