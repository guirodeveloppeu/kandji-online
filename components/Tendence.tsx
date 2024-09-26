"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import car1 from "@/app/img/tendence/joy.png";
import car2 from "@/app/img/tendence/k3t.png";

import { motion } from "framer-motion";
import { FaLongArrowAltLeft } from "react-icons/fa";

import car3 from "@/app/img/tendence/rl7.png";
import car4 from "@/app/img/tendence/rl9.png";

import car5 from "@/app/img/tendence/souralai.png";
import car6 from "@/app/img/tendence/lathaye.png";
import car7 from "@/app/img/tendence/bus.png";

import joyint1 from "@/app/img/tendence/tendint/joyint1.jpg";
import joyint2 from "@/app/img/tendence/tendint/joyint2.jpg";

import busint1 from "@/app/img/tendence/tendint/busint1.jpg";
import busint2 from "@/app/img/tendence/tendint/busint2.jpg";

import k3int1 from "@/app/img/tendence/tendint/k2int1.jpg";
import k3int2 from "@/app/img/tendence/tendint/k2int2.jpg";

import rl7int1 from "@/app/img/tendence/tendint/rl7int1.jpg";
import rl7int2 from "@/app/img/tendence/tendint/rl7int2.jpg";

import rl9int1 from "@/app/img/tendence/tendint/rl9int1.jpg";
import rl9int2 from "@/app/img/tendence/tendint/rl9int2.jpg";

import souralaiint1 from "@/app/img/tendence/tendint/souralaiint1.jpg";
import souralaiint2 from "@/app/img/tendence/tendint/souralaiint2.jpg";

import lathayeint1 from "@/app/img/tendence/tendint/lathayeint1.jpg";
import lathayeint2 from "@/app/img/tendence/tendint/lathayeint2.jpg";

//import lathint2 from '@/app/img/rl9int2.png'
//import lathint2 from '@/app/img/rl9int2.png'
// Sample data for cars (replace with your actual data)
const cars = [
	{
		id: 1,
		name: "KPANDJI JOY01",
		nick:"Joy01",
		int1: joyint1,
		int2: joyint2,
		image: car1,
		description:
			"Grande capacité voiture électrique pure Joy 01 voiture électrique à grande vitesse adaptée à usage familial.",
	},
	{
		id: 2,
		name: "KPANDJI K3",
		nick:"KPANDJI K3",
		int1: k3int1,
		int2: k3int2,
		int: joyint2,
		image: car2,
		description:
			"Voiture électrique K3 de grande capacité avec un intérieur exquis.",
	},
	{
		id: 3,
		name: "KPANDJI RL7",
		nick:"RL7",
		int1: rl7int1,
		int2: rl7int2,
		image: car3,
		description:
			"SUV électrique suv intelligents de grande autonomie, confortable et spacieux.",
	},
	{
		id: 4,
		name: "KPANDJI RL9",
		nick:"RL9",
		int1: rl9int1,
		int2: rl9int2,
		image: car4,
		description:
			"SUV électrique intelligent haut de gamme, Grande capacité et de Longue portée.",
	},
	{
		id: 5,
		name: "KPANDJI SOURALAI",
		nick:"Souralai",
		int1: souralaiint1,
		int2: souralaiint2,
		image: car5,
		description: " Voiture SUV manuelle très pratique avec un puissant moteur de 1600 cc.",
	},
	{
		id: 6,
		name: "KPANDJI LATHAYE",
		nick:"Latahye",
		int1: lathayeint1,
		int2: lathayeint2,
		image:car6,
		description: "Un chef-d'œuvre d'ingénierie se caractérisant par une puissance inébranlable, des fonctionnalités de pointe",
	},
	{
		id: 6,
		name: "KPANDJI BUS",
		nick:"Bus",
		int1: busint1,
		int2: busint2,
		image: car7,
		description: "C'est un bus Electrique de 12m de long, spécialement développé et conçu pour les zones urbaines.",
	},
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
				<p className="text-white text-center w-fit px-2 h-7 text-xl font-semibold bg-orange-500 -skew-x-12">
					Tendence du mois
					<FaLongArrowAltLeft className=" animate-bounce sm:hidden " />
				</p>
				<div className="w-1 h-7 bg-orange-500 transform -skew-x-12"></div>
				<div className="w-1 h-7 bg-orange-500 transform -skew-x-12"></div>
				<div className="w-1 h-7 bg-orange-500 transform -skew-x-12"></div>
			</div>
			<div className="overflow-x-auto p-2 scrollbar-hide">
				<div className="flex space-x-10">
					{cars.map((car) => (
						<div
							key={car.id}
							className={`flex-none w-screen sm:w-3/5  bg-primary rounded-t-xl  overflow-hidden shadow-lg transition-all duration-300 drop-shadow-md shadow-gray-50 ${
								isLoaded
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							}`}>
							<div className="absolute inset-0 flex flex-col ">
								<div className=" h-1/5 w-full  transform skew-x-12 ">
									<div className="absolute inset-0 flex">
										<div className="w-2/5 h-full  transform skew-x-12"></div>
										<div className="w-1/5 h-full bg-gradient-to-r from-primary to bg-primaryDark/90 glowing-shadow  transform -skew-x-12 opacity-50"></div>
										<div className="w-2/5 h-full  transform skew-x-12"></div>
									</div>
								</div>
								<div className="  w-full rounded-full bg-gradient-to-r from-primary to bg-primaryDark/90 glowing-shadow  transform  opacity-50"></div>
							</div>
							<motion.div
								initial={{ opacity: 0, x: -100 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{
									type: "spring",
									stiffness: 100,
									damping: 10,
									delay: 0.4,
									duration: 0.8,
								}}
								className=" absolute  left-0 -z-10">
								<h1 className="text-7xl font-bold text-cyan-200/50 leading-none">
								{car.nick}
								</h1>
							</motion.div>
							<motion.div 
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0, }}
							transition={{
								duration: 1,
							}}
							className="relative flex items-center justify-center rounded-t-xl mt-8">
								<Image
									src={car.image}
									alt={car.name}
									quality={100}
									objectFit="contain"
									className="transition-transform duration-300 hover:scale-105 rounded-t-xl mb-4 "
								/>
							</motion.div>
							<div className="flex border-y-2 border-gray-700">
								<motion.div 
								initial={{ opacity: 0, x: -100 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{
									duration: 1,
								}}
								className="w-1/2  relative border-x-2 border-gray-700">
									<Image
										src={car.int1}
										alt={`${car.name} - Left`}
										objectFit="cover"
									/>
								</motion.div>
								<motion.div 
								initial={{ opacity: 0, x: 100 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{
									duration: 1,
								}}
								className="w-1/2  relative">
									<Image
										src={car.int2}
										alt={`${car.name} - Right`}
										objectFit="cover"
									/>
								</motion.div>
							</div>
							<div className="p-4 h-full bg-white text-black">
								<h3 className="text-xl font-semibold mb-2 ">
									{car.name}
								</h3>
								<p className=" mb-4">{car.description}</p>
								<Link href={`/car/${car.id}`} passHref>
									<button className="bg-orange-500  px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
										Voir +
									</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Tendence;
