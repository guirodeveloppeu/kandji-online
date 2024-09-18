"use client";
import Image from 'next/image';
import LathayeInt1 from "@/app/img/LathayeInt1.jpg"
import LathayeInt2 from "@/app/img/LathayeInt2.jpg"
import lathaye from "@/app/img/lathaye.jpg"

import soura from "@/app/img/souralait.jpg"
import souraint1 from "@/app/img/souralaiint1.jpg"
import souraint2 from "@/app/img/souralaiint2.jpg"

import swansran from "@/app/img/swansranminit.jpg"
import swanint1 from "@/app/img/swansranminiint2.jpg"
import swanint2 from "@/app/img/swansranminiint1.jpg"

import buse from '@/app/img/buset.jpg'
import busint1 from "@/app/img/buseint1.jpg"
import busint2 from "@/app/img/buseint2.jpg"

import car1 from '@/app/img/joyt.jpg'
import car2 from '@/app/img/k3t12.jpg'

import car3 from '@/app/img/rl7t1.jpg'
import car4 from '@/app/img/rl9t1.jpg'

import joyint1 from '@/app/img/joyint1.jpg'
import joyint2 from '@/app/img/joyint2.jpg'

import k3int1 from '@/app/img/k3int1.jpg'
import k3int2 from '@/app/img/k3int2.jpg'

import rl7int1 from '@/app/img/rl7int1.jpg'
import rl7int2 from '@/app/img/rl7int2.jpg'

import rl9int1 from '@/app/img/rl9int1.png'
import rl9int2 from '@/app/img/rl9int2.png'

import djetrant from "@/app/img/djetrant.jpg"
import djetranint1 from "@/app/img/djetranint1.webp"
import djetranint2 from "@/app/img/djetranint2.jpg"

import swasran from "@/app/img/swasrang.jpg"
import swasranint1 from "@/app/img/swansranminiint1.jpg"
import swasranint2 from "@/app/img/swansranminiint2.jpg"

import swatro1 from "@/app/img/swatro1.jpg"
import swatroint1 from "@/app/img/swatroint1.jpg"
import swatroint2 from "@/app/img/swatroint2.jpg"

import swatro2 from "@/app/img/swatrog.jpg"

import { useState, useEffect } from 'react';


// Sample data for cars (replace with your actual data)
const cars = [
  { id: 1, name: 'KPANDJI LATHAYE', int1:LathayeInt1, int2:LathayeInt2, image: lathaye, description: "Un chef-d'œuvre d'ingénierie se caractérisant par une puissance inébranlable, des fonctionnalités à la pointe et un confort opulent." },
  { id: 1, name: 'KPANDJI DJETRAN', int1:djetranint1, int2:djetranint2, image: djetrant, description: "Un chef-d'œuvre d'ingénierie se caractérisant par une puissance inébranlable, des fonctionnalités à la pointe et un confort opulent." },
  { id: 2, name: 'KPANDJI SOURALAI', int1:souraint1, int2:souraint2, image: soura, description: "Voiture SUV manuelle très pratique pour vos déplacements. Elle a un puissant moteur de 1600 cc. Elle offre une moyenne de 14 km par litre." },
  { id: 9, name: 'KPANDJI RL9', int1:rl9int1, int2:rl9int2, image: car4, description: 'SUV électrique intelligent haut de gamme, Grande capacité et de Longue portée.' },
  { id: 8, name: 'KPANDJI RL7', int1:rl7int1, int2:rl7int2, image: car3, description: 'SUV électrique suv intelligents de grande autonomie, confortable et spacieux.' },
  { id: 7, name: 'KPANDJI K3', int1:k3int1, int2:k3int2, int:joyint2, image: car2, description: 'Voiture électrique K3 de grande capacité avec un intérieur exquis.' },
  { id: 6, name: 'KPANDJI JOY01', int1:joyint1, int2:joyint2, image: car1, description: 'Grande capacité voiture électrique pure Joy 01 voiture électrique à grande vitesse adaptée à usage familial.' },
  { id: 4, name: 'KPANDJI BUS Electric', int1:busint1, int2:busint2, image: buse, description: "C'est un bus Electrique de 12m de long, spécialement développé et conçu pour s'adapter aux lignes principales urbaines. " },
  { id: 3, name: 'SWASRAN MINI', int1:swanint1, int2:swanint2, image: swansran, description: "Minibus électrique de luxe de 14 places. le véhicule peut être converti en véhicules spéciaux tels qu'une ambulance, " },

  { id: 10, name: 'KPANDJI SWASRAN', int1:swasranint1, int2:swasranint2, image:swasran, description: 'Minibus électrique à grande vitesse à toit surélevé, nouvelle fourgonnette Haice, autonomie et atteint 260 km' },
  { id: 11, name: 'SWATRO 1', int1:swatroint1, int2:swatroint2, image: swatro1, description: 'Mini camion de grande capacité et de haute sécurité  à essence et atteind une capacité de 1,5 tonne.' },
  { id: 11, name: 'SWATRO 2', int1:joyint1, int2:joyint2, image: swatro2, description:" C'est un camion qui fait sensation depuis son lancement en étant reconnu comme un chef-d'œuvre par ses opérateurs et l'industrie du fret." },
  // Add more cars as nee

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
            <div className="p-4 ">
              <h3 className="text-xl font-semibold mb-2 text-white">{car.name}</h3>
              <p className="text-gray-300 mb-4">{car.description}</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
                Voir +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Globals;
