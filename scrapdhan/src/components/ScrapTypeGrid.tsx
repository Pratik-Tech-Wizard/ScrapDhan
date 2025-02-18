import React from 'react';
import { Newspaper, Droplet, Wrench, Laptop, Package } from 'lucide-react';

interface ScrapType {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const scrapTypes: ScrapType[] = [
  {
    icon: <Newspaper className="w-8 h-8" />,
    name: "Papers",
    description: "Newspapers, magazines, books"
  },
  {
    icon: <Droplet className="w-8 h-8" />,
    name: "Plastics",
    description: "Bottles, containers, packaging"
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    name: "Metals",
    description: "Iron, aluminum, copper"
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    name: "E-waste",
    description: "Electronics, appliances"
  },
  {
    icon: <Package className="w-8 h-8" />,
    name: "Other Items",
    description: "Miscellaneous recyclables"
  }
];

const ScrapTypeGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {scrapTypes.map((type, index) => (
        <button
          key={index}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-500/50 transition-all duration-300 flex flex-col items-center text-center group"
        >
          <div className="mb-4 text-green-500 group-hover:scale-110 transition-transform duration-300">
            {type.icon}
          </div>
          <h3 className="text-lg font-semibold mb-2">{type.name}</h3>
          <p className="text-sm text-gray-600">{type.description}</p>
        </button>
      ))}
    </div>
  );
};

export default ScrapTypeGrid;