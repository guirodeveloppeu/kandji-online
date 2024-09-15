import React from 'react'
import terra from "../app/img/terralord.png"
import terraint from "../app/img/intterra1.png"
import Image from 'next/image'

function Last() {
  return (
    <div className=''>
    <div className='hidden lg:flex flex-col w-full '>
      <div className=" p-4  flex space-x-1 bg-transparent ">
        <p className="text-white text-center w-fit px-2 h-7 text-xl font-semibold bg-orange-500 -skew-x-12">Nos dernières sorties</p>
        <div className="w-1 h-7 bg-orange-500 transform -skew-x-12"></div>
        <div className="w-1 h-7 bg-orange-500 transform -skew-x-12"></div>
        <div className="w-1 h-7 bg-orange-500 transform -skew-x-12"></div>
      </div>

      <div className="flex justify-center space-x-5 bg-slate-400 p-4">
        <div className="flex items-center w-full max-w-7xl">
          {/* First main div - Images */}
          <div className="w-2/3 flex items-center">
            {/* Skewed Terra image */}
            <div className="w-2/3 transform -skew-x-6 overflow-hidden item-center pr-2 border-l-4 border-r-4 px-4">
              <Image src={terra} alt="Djetran" className="w-full h-full object-contain transform skew-x-6 scale-110" />
            </div>
            {/* Column of other images */}
            <div className="w-1/3 flex flex-col items-center flex-initial space-y-3 p-3">
              <div className="h-1/2 transform -skew-x-6 overflow-hidden ">
                <Image src={terraint} alt="Terra Interior" className="w-full h-full object-cover transform skew-x-6 scale-110" />
              </div>
              <div className="h-1/2 transform -skew-x-6 overflow-hidden mb-2">
                <Image src={terraint} alt="Terra Interior 2" className="w-full h-full object-cover transform skew-x-6 scale-110" />
              </div>
             
            </div>
          </div>
          
          {/* Second main div - Text content */}
          <div className="w-1/3 pl-8 flex flex-col justify-center -skew-x-6 scale-110 py-4">
            <h2 className="text-2xl font-bold mb-4 text-orange-600">
                KPANDJI DJETRAN</h2>
            <p className="text-gray-900 mb-4">
            Le KPANDJI DJETRAN est notre dernier modèle de Pick-Up, alliant luxe, performances et capacités tout-terrain. Avec son design élégant et son moteur puissant, il est parfait aussi bien pour la conduite en ville que pour les voyages aventureux.
            </p>
            <ul className="list-disc list-inside text-black text-sm">
              <li>Système 4x4 avancé</li>
              <li>Intérieur spacieux avec des matériaux haut de gamme</li>
              <li>Système d&apos;infodivertissement de pointe</li>
              <li>Excellent fuel efficiency for its class</li>
            </ul>
            <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
              Voir +
            </button>
          </div>
        </div>
      </div>

    </div>

  {/* small screan */}
    <div className='flex flex-col lg:hidden w-full '>
      <div className=" p-4  flex space-x-1 bg-transparent ">
        <p className="text-white text-center w-fit px-2 h-7 text-xl font-semibold bg-orange-500 -skew-x-12">Nos dernières sorties</p>
        <div className="w-1 h-7 bg-orange-500 transform -skew-x-12"></div>
        <div className="w-1 h-7 bg-orange-500 transform -skew-x-12"></div>
        <div className="w-1 h-7 bg-orange-500 transform -skew-x-12"></div>
      </div>

      <div className="flex flex-col justify-center space-x-5 bg-slate-400 ">
        <div className="flex flex-col items-center w-full max-w-7xl">
          {/* First main div - Images */}
          <div className=" flex items-center mb-4">
            {/* Skewed Terra image */}
            <div className="w-2/3 transform -skew-x-6 overflow-hidden item-center pr-2 border-l-2 border-r-2 px-4">
              <Image src={terra} alt="Djetran" className="w-full h-full object-contain transform skew-x-6 scale-110" />
            </div>
            {/* Column of other images */}
            <div className="w-1/3 flex flex-col items-center flex-initial space-y-3 p-3">
              <div className="h-1/2 transform -skew-x-6 overflow-hidden ">
                <Image src={terraint} alt="Terra Interior" className="w-full h-full object-cover transform skew-x-6 scale-110" />
              </div>
              <div className="h-1/2 transform -skew-x-6 overflow-hidden mb-2">
                <Image src={terraint} alt="Terra Interior 2" className="w-full h-full object-cover transform skew-x-6 scale-110" />
              </div>
             
            </div>
          </div>
          
          {/* Second main div - Text content */}
          <div className="pl-8 flex flex-col justify-center mb-4">
            <h2 className="text-3xl font-bold mb-4 text-orange-600">
                KPANDJI DJETRAN</h2>
            <p className="text-black mb-4">
            Le KPANDJI DJETRAN est notre dernier modèle de Pick-Up, alliant luxe, performances et capacités tout-terrain. Avec son design élégant et son moteur puissant, il est parfait aussi bien pour la conduite en ville que pour les voyages aventureux.
            </p>
            <ul className="list-disc list-inside text-black text-sm">
              <li>Système 4x4 avancé</li>
              <li>Intérieur spacieux avec des matériaux haut de gamme</li>
              <li>Système d&apos;infodivertissement de pointe</li>
              <li>Excellent fuel efficiency for its class</li>
            </ul>
            <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
            Voir +
            </button>
          </div>
        </div>
      </div>

    </div>

    </div>
  )
}

export default Last