import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Building2, Home, Upload, Plus, Calendar, Clock, FileText, X } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

type ScrapType = 'household' | 'industry' | null;
type SellingOption = 'us' | 'kabadiwalas' | null;

interface ScrapCategory {
  category: string;
  quantity: number;
  unit: string;
  description?: string;
}

const SellScrap = () => {
  const navigate = useNavigate();
  const [scrapType, setScrapType] = useState<ScrapType>(null);
  const [sellingOption, setSellingOption] = useState<SellingOption>(null);
  const [industryName, setIndustryName] = useState('');
  const [categories, setCategories] = useState<ScrapCategory[]>([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [legalDocument, setLegalDocument] = useState<File | null>(null);
  const [images, setImages] = useState<File[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg']
    },
    onDrop: (acceptedFiles) => {
      setImages([...images, ...acceptedFiles]);
    }
  });

  const handleAddCategory = () => {
    setCategories([...categories, { category: '', quantity: 0, unit: 'kg' }]);
  };

  const handleCategoryChange = (index: number, field: keyof ScrapCategory, value: string | number) => {
    const newCategories = [...categories];
    newCategories[index] = { ...newCategories[index], [field]: value };
    setCategories(newCategories);
  };

  const handleRemoveImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  }

  const handleRemoveDocument = () => {
    setLegalDocument(null);
  };

  const timeSlots = ['9:00-11:00', '11:00-13:00', '14:00-16:00', '16:00-18:00'];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Sell Your Scrap</h1>

          {/* Step 1: Select Scrap Type */}
          {!scrapType && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => setScrapType('household')}
                className="p-8 border-2 border-gray-200 rounded-xl hover:border-green-500 transition-colors group"
              >
                <Home className="w-12 h-12 mb-4 text-gray-400 group-hover:text-green-500" />
                <h3 className="text-xl font-semibold mb-2">Household Scrap</h3>
                <p className="text-gray-600">Sell your household recyclable items</p>
              </button>
              <button
                onClick={() => setScrapType('industry')}
                className="p-8 border-2 border-gray-200 rounded-xl hover:border-green-500 transition-colors group"
              >
                <Building2 className="w-12 h-12 mb-4 text-gray-400 group-hover:text-green-500" />
                <h3 className="text-xl font-semibold mb-2">Industrial Scrap</h3>
                <p className="text-gray-600">Bulk scrap from industries and businesses</p>
              </button>
            </div>
          )}

          {/* Household Flow */}
          {scrapType === 'household' && !sellingOption && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => setSellingOption('us')}
                className="p-8 border-2 border-gray-200 rounded-xl hover:border-green-500 transition-colors group"
              >
                <Building2 className="w-12 h-12 mb-4 text-gray-400 group-hover:text-green-500" />
                <h3 className="text-xl font-semibold mb-2">Sell to ScrapDhan</h3>
                <p className="text-gray-600">Get the best prices and professional service</p>
              </button>
              <button
                onClick={() => setSellingOption('kabadiwalas')}
                className="p-8 border-2 border-gray-200 rounded-xl hover:border-green-500 transition-colors group"
              >
                <Home className="w-12 h-12 mb-4 text-gray-400 group-hover:text-green-500" />
                <h3 className="text-xl font-semibold mb-2">Sell to Local Kabadiwalas</h3>
                <p className="text-gray-600">Connect with verified local scrap dealers</p>
              </button>
            </div>
          )}

          {/* Household Details Form */}
          {scrapType === 'household' && sellingOption && (
            <div className="space-y-6">
              <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-green-500 transition-colors">
                <input {...getInputProps()} />
                <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600">Drag & drop images here, or click to select files <br />
                  .png, .jpg, .jpeg format
                </p>
              </div>

              {images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {images.map((file, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Scrap ${index + 1}`}
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

              <div className="space-y-4">
                {categories.map((category, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <select
                      value={category.category}
                      onChange={(e) => handleCategoryChange(index, 'category', e.target.value)}
                      className="rounded-lg border-gray-300 focus:ring-green-500"
                    >
                      <option value="">Select Category</option>
                      <option value="paper">Paper</option>
                      <option value="metal">Metal</option>
                      <option value="plastic">Plastic</option>
                      <option value="electronics">Electronics</option>
                    </select>
                    <input
                      type="number"
                      value={category.quantity}
                      onChange={(e) => handleCategoryChange(index, 'quantity', parseFloat(e.target.value))}
                      placeholder="Quantity"
                      className="rounded-lg border-gray-300 focus:ring-green-500"
                    />
                    <select
                      value={category.unit}
                      onChange={(e) => handleCategoryChange(index, 'unit', e.target.value)}
                      className="rounded-lg border-gray-300 focus:ring-green-500"
                    >
                      <option value="kg">Kilograms (kg)</option>
                      <option value="g">Grams (g)</option>
                      <option value="pieces">Pieces</option>
                      <option value="tons">Tons</option>
                    </select>
                  </div>
                ))}
                <button
                  onClick={handleAddCategory}
                  className="flex items-center gap-2 text-green-600 hover:text-green-700"
                >
                  <Plus className="w-5 h-5" />
                  Add Category
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="pl-10 w-full rounded-lg border-gray-300 focus:ring-green-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="pl-10 w-full rounded-lg border-gray-300 focus:ring-green-500"
                    >
                      <option value="">Select Time Slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Industrial Flow */}
          {scrapType === 'industry' && (
            <div className="space-y-6">
              <input
                type="text"
                value={industryName}
                onChange={(e) => setIndustryName(e.target.value)}
                placeholder="Industry Name"
                className="w-full rounded-lg border-gray-300 focus:ring-green-500"
              />

              <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-green-500 transition-colors">
                <input {...getInputProps()} />
                <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600">Upload scrap images <br />.png, .jpg, .jpeg format</p>
              </div>

              {images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {images.map((file, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Scrap ${index + 1}`}
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

              <div className="space-y-4">
                {categories.map((category, index) => (
                  <div key={index} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <select
                        value={category.category}
                        onChange={(e) => handleCategoryChange(index, 'category', e.target.value)}
                        className="rounded-lg border-gray-300 focus:ring-green-500"
                      >
                        <option value="">Select Category</option>
                        <option value="metal">Metal</option>
                        <option value="plastic">Plastic</option>
                        <option value="paper">Paper</option>
                        <option value="automobile">Automobile Parts</option>
                        <option value="machinery">Machinery</option>
                      </select>
                      <input
                        type="number"
                        value={category.quantity}
                        onChange={(e) => handleCategoryChange(index, 'quantity', parseFloat(e.target.value))}
                        placeholder="Quantity"
                        className="rounded-lg border-gray-300 focus:ring-green-500"
                      />
                      <select
                        value={category.unit}
                        onChange={(e) => handleCategoryChange(index, 'unit', e.target.value)}
                        className="rounded-lg border-gray-300 focus:ring-green-500"
                      >
                        <option value="kg">Kilograms (kg)</option>
                        <option value="ton">Tons</option>
                        <option value="quintal">Quintals</option>
                      </select>
                    </div>
                    <textarea
                      value={category.description}
                      onChange={(e) => handleCategoryChange(index, 'description', e.target.value)}
                      placeholder="Description (e.g., steel rods with quality specifications)"
                      className="w-full rounded-lg border-gray-300 focus:ring-green-500"
                      rows={3}
                    />
                  </div>
                ))}
                <button
                  onClick={handleAddCategory}
                  className="flex items-center gap-2 text-green-600 hover:text-green-700"
                >
                  <Plus className="w-5 h-5" />
                  Add Category
                </button>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-green-500 transition-colors">
                <input
                  type="file"
                  onChange={(e) => setLegalDocument(e.target.files?.[0] || null)}
                  className="hidden"
                  id="legal-doc"
                  accept=".pdf,.doc,.docx"
                />
                <label htmlFor="legal-doc" className="cursor-pointer">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600">Upload Legal Document/Authorization <br />.pdf, .doc, .docx format</p>
                </label>
                {legalDocument && (
                  <div className="relative mt-4">
                    <p className="text-gray-600">{legalDocument.name}</p>
                    <button
                      onClick={handleRemoveDocument}
                      className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => {
                if (sellingOption) setSellingOption(null);
                else if (scrapType) setScrapType(null);
                else navigate('/');
              }}
              className="px-6 py-2 text-gray-600 hover:text-gray-800"
            >
              Back
            </button>
            <button
              onClick={() => {
                // Handle form submission
                console.log('Form submitted');
              }}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              {scrapType === 'industry' ? 'Send to Dealers' : 'Schedule Pickup'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SellScrap;