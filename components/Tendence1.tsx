"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import car1 from '@/app/img/joy01t1.jpg'
import car2 from '@/app/img/k3t.jpg'

import { motion } from "framer-motion";

import car3 from '@/app/img/rl7t.jpg'
import car4 from '@/app/img/rl9t.jpg'

import joyint1 from '@/app/img/joyint1.jpg'
import joyint2 from '@/app/img/joyint2.jpg'

import k3int1 from '@/app/img/k3int1.jpg'
import k3int2 from '@/app/img/k3int2.jpg'

import rl7int1 from '@/app/img/rl7int1.jpg'
import rl7int2 from '@/app/img/rl7int2.jpg'

import rl9int1 from '@/app/img/rl9int1.png'
import rl9int2 from '@/app/img/rl9int2.png'
// Sample data for cars (replace with your actual data)
const cars = [
  { id: 1, name: 'KPANDJI JOY01', int1:joyint1, int2:joyint2, image: car1, description: 'Grande capacité voiture électrique pure Joy 01 voiture électrique à grande vitesse adaptée à usage familial.' },
  { id: 2, name: 'KPANDJI K3', int1:k3int1, int2:k3int2, int:joyint2, image: car2, description: 'Voiture électrique K3 de grande capacité avec un intérieur exquis.' },
  { id: 3, name: 'KPANDJI RL7', int1:rl7int1, int2:rl7int2, image: car3, description: 'SUV électrique suv intelligents de grande autonomie, confortable et spacieux.' },
  { id: 4, name: 'KPANDJI RL9', int1:rl9int1, int2:rl9int2, image: car4, description: 'SUV électrique intelligent haut de gamme, Grande capacité et de Longue portée.' },
  { id: 5, name: 'Pickup Truck', int1:joyint1, int2:joyint2, image: '/img/car5.jpg', description: 'Powerful pickup truck for work and adventure.' },
  { id: 6, name: 'Convertible', int1:joyint1, int2:joyint2, image: '/img/car6.jpg', description: 'Stylish convertible for open-top driving experiences.' },
  // Add more cars as needed
];

const Tendence = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex flex-col mx-auto ">
      <div className=" p-4  flex space-x-1 bg-transparent ">
        <p className="text-white text-center w-fit px-2 h-7 text-xl font-semibold bg-orange-500 -skew-x-12">Tendence du mois</p>
        <div className="w-1 h-7 bg-orange-500 transform -skew-x-12"></div>
        <div className="w-1 h-7 bg-orange-500 transform -skew-x-12"></div>
        <div className="w-1 h-7 bg-orange-500 transform -skew-x-12"></div>
      </div>
      <div className="overflow-x-auto pt-4 scrollbar-hide ">
        <div className="flex space-x-6" style={{ width: `${cars.length * 320}px` }}>
          {cars.map((car) => (
            <motion.div
            initial={{ y: -100, opacity: 0 }}
						transition={{ duration: 1.2 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
              key={car.id}
              className={`flex-none w-80 sm:w-96 sm:p-4 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="relative h-48">
                <Image
                  src={car.image}
                  alt={car.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105 sm:rounded-t-xl"
                />
              </div>
              <div className="flex border-y-2 border-gray-700">
                <div className="w-1/2 h-24 relative border-x-2 border-gray-700">
                  <Image
                    src={car.int1}
                    alt={`${car.name} - Left`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="w-1/2 h-24 relative">
                  <Image
                    src={car.int2}
                    alt={`${car.name} - Right`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-white">{car.name}</h3>
                <p className="text-gray-300 mb-4">{car.description}</p>
                <Link href={`/car/${car.id}`} passHref>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
                    Voir +
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tendence;


