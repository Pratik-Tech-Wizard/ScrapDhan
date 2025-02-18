import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface Rate {
  material: string;
  price: number;
  unit: string;
  category: string;
}

const rates: Rate[] = [
  { material: "Newspaper", price: 15, unit: "per kg", category: "Paper" },
  { material: "Cardboard", price: 12, unit: "per kg", category: "Paper" },
  { material: "PET Bottles", price: 25, unit: "per kg", category: "Plastic" },
  { material: "Iron Scrap", price: 35, unit: "per kg", category: "Metal" },
  { material: "Copper Wire", price: 400, unit: "per kg", category: "Metal" },
  { material: "Aluminum", price: 100, unit: "per kg", category: "Metal" },
  { material: "E-waste", price: 50, unit: "per kg", category: "Electronics" },
  { material: "Glass Bottles", price: 8, unit: "per kg", category: "Glass" }
];

const RateList = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(rates.map(rate => rate.category))];

  const filteredRates = rates.filter(rate => {
    const matchesSearch = rate.material.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || rate.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search materials..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4">Material</th>
              <th className="text-right py-3 px-4">Price</th>
              <th className="text-left py-3 px-4">Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredRates.map((rate, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4">{rate.material}</td>
                <td className="py-3 px-4 text-right">
                  ₹{rate.price} {rate.unit}
                </td>
                <td className="py-3 px-4">{rate.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RateList;