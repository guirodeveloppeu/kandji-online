"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Sample data for cars (replace with your actual data)
const cars = [
  { id: 1, name: 'Luxury Sedan', image: '/img/car1.jpg', description: 'Elegant and comfortable luxury sedan for a smooth ride.' },
  { id: 2, name: 'Sports Car', image: '/img/car2.jpg', description: 'High-performance sports car for thrill-seekers.' },
  { id: 3, name: 'Electric SUV', image: '/img/car3.jpg', description: 'Eco-friendly SUV with advanced electric technology.' },
  { id: 4, name: 'Compact Hatchback', image: '/img/car4.jpg', description: 'Efficient and agile compact car for urban driving.' },
  { id: 5, name: 'Pickup Truck', image: '/img/car5.jpg', description: 'Powerful pickup truck for work and adventure.' },
  { id: 6, name: 'Convertible', image: '/img/car6.jpg', description: 'Stylish convertible for open-top driving experiences.' },
  // Add more cars as needed
];

const Globals = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex flex-col mx-auto px-4 mb-4 pb-4 bg-slate-400">
      <div className=" p-4  flex space-x-1 bg-transparent ">
        <p className="text-white text-center w-fit px-2 h-7 text-xl font-semibold bg-orange-500 -skew-x-12">Nos Offres</p>
        <div className="w-1 h-7 bg-orange-500 transform -skew-x-12"></div>
        <div className="w-1 h-7 bg-orange-500 transform -skew-x-12"></div>
        <div className="w-1 h-7 bg-orange-500 transform -skew-x-12"></div>
      </div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="relative h-48">
              <Image
                src={car.image}
                alt={car.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-white">{car.name}</h3>
              <p className="text-gray-300 mb-4">{car.description}</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Globals;
