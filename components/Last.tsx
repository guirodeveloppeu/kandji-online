"use client"
import terra from "../app/img/terralord.png";
import terraint from "../app/img/intterra1.png";
import Image from "next/image";
import { motion } from "framer-motion";


function Last() {
	return (
		<div className="">
			<div className="hidden lg:flex flex-col w-full ">
				<div className=" p-4  flex space-x-1 bg-transparent ">
					<p className="text-white text-center w-fit px-2 h-7 text-xl font-semibold bg-orange-500 -skew-x-12">
						Nos dernières sorties
					</p>
					<div className="w-1 h-7 bg-orange-500 transform -skew-x-12"></div>
					<div className="w-1 h-7 bg-orange-500 transform -skew-x-12"></div>
					<div className="w-1 h-7 bg-orange-500 transform -skew-x-12"></div>
				</div>

				<div className="flex justify-center space-x-5 bg-gradient-to-r from-primary to bg-primaryDark p-4   relative  overflow-hidden">
					{/* Background skewed divs */}
					<div className="absolute inset-0 flex">
						<div className="w-2/5 h-full  transform skew-x-12"></div>
						<div className="w-1/5 h-full bg-gradient-to-r from-primary to bg-primaryDark/90 glowing-shadow  transform -skew-x-12 opacity-50"></div>
						<div className="w-2/5 h-full  transform skew-x-12"></div>
					</div>
					<motion.div
								initial={{ opacity: 0, x: 100 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{
									type: "spring",
									stiffness: 100,
									damping: 10,
									delay: 0.4,
									duration: 0.8,
								}}
								className=" absolute top-0 left-0 z-[1]">
								<h1 className="text-[120px] font-bold text-cyan-200/40 leading-none bg-transparent">
									Djetran
								</h1>
							</motion.div>

					<div className="relative z-10 flex items-center w-full max-w-7xl">
						{/* First main div - Images */}
						<div 
						className="w-2/3 flex items-center">
							{/* Skewed Terra image */}
							<motion.div 
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0, scale: 1.4 }}
							transition={{
								duration: 1,
							}}
							className="w-2/3 transform -skew-x-6 overflow-hidden item-center  px-8">
								<Image
									src={terra}
									alt="Djetran"
									className=" object-contain "
								/>
							</motion.div>
							{/* Column of other images */}
							<div className="w-1/3 flex flex-col items-center flex-initial space-y-3 p-3">
								<motion.div 
								initial={{ opacity: 0, y: -100 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 1,
								}}
								className="h-1/2 transform -skew-x-6 overflow-hidden">
									<Image
										src={terraint}
										alt="Terra Interior"
										className="w-full h-full object-cover "
									/>
								</motion.div>
								<motion.div 
								initial={{ opacity: 0, y: 100 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 1,
								}}
								className="h-1/2 transform -skew-x-6 overflow-hidden">
									<Image
										src={terraint}
										alt="Terra Interior 2"
										className="w-full h-full object-cover "
									/>
								</motion.div>
							</div>
						</div>

						{/* Second main div - Text content */}
						<motion.div 
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							type: "spring",
							stiffness: 100,
							damping: 10,
							duration: 0.8,
						}}
						className="w-1/3 pl-8 flex flex-col justify-center -skew-x-6 scale-110 py-4 text-white">
							<h2 className="text-2xl font-bold mb-4 text-orange-600">
								KPANDJI DJETRAN
							</h2>
							<p className=" mb-4">
								Le KPANDJI DJETRAN est notre dernier modèle de Pick-Up, alliant
								luxe, performances et capacités tout-terrain. Avec son design
								élégant et son moteur puissant, il est parfait aussi bien pour
								la conduite en ville que pour les voyages aventureux.
							</p>
							<ul className="list-disc list-inside  text-sm">
								<li>Système 4x4 avancé</li>
								<li>Intérieur spacieux avec des matériaux haut de gamme</li>
								<li>Système d&apos;infodivertissement de pointe</li>
								<li>Excellente efficacité énergétique pour sa catégorie</li>
							</ul>
							<button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
								Voir +
							</button>
						</motion.div>
					</div>
				</div>
			</div>




			{/* small screan */}
			<div className="flex flex-col lg:hidden w-full relative ">
				<div className=" p-4  flex space-x-1 bg-transparent ">
					<p className="text-white text-center w-fit px-2 h-7 text-xl font-semibold bg-orange-500 -skew-x-12">
						Nos dernières sorties
					</p>
					<div className="w-1 h-7 bg-orange-500 transform -skew-x-12"></div>
					<div className="w-1 h-7 bg-orange-500 transform -skew-x-12"></div>
					<div className="w-1 h-7 bg-orange-500 transform -skew-x-12"></div>
				</div>

				<div className="flex flex-col justify-center space-x-5  bg-gradient-to-r from-primary to bg-primaryDark  p-4">
					
			

					<div className="flex flex-col items-center w-full max-w-7xl">
					
						{/* First main div - Images */}
						<div 
						className=" flex items-center mb-4">
							{/* Skewed Terra image */}
							<motion.div 
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0,  }}
							transition={{
								duration: 1,
							}}
							className="w-2/3 transform -skew-x-6 overflow-hidden item-center pr-2 border-r-2 px-4">
								<Image
									src={terra}
									alt="Djetran"
									className="w-full h-full object-contain transform skew-x-6 scale-110"
								/>
							</motion.div>
							{/* Column of other images */}
							<motion.div 
							initial={{ opacity: 0, x: 100 }}
							whileInView={{ opacity: 1, x: 0,  }}
							transition={{
								duration: 1,
							}}
							className="w-1/3 flex flex-col items-center flex-initial space-y-3 p-3">
								<div className="h-1/2 transform -skew-x-6 overflow-hidden ">
									<Image
										src={terraint}
										alt="Terra Interior"
										className="w-full h-full object-cover transform skew-x-6 scale-110"
									/>
								</div>
								<div className="h-1/2 transform -skew-x-6 overflow-hidden mb-2">
									<Image
										src={terraint}
										alt="Terra Interior 2"
										className="w-full h-full object-cover transform skew-x-6 scale-110"
									/>
								</div>
							</motion.div>
						</div>

						{/* Second main div - Text content */}
						<motion.div 
						initial={{ opacity: 0,y: 100 }}
						whileInView={{ opacity: 1,y: 0 }}
						transition={{
							type: "spring",
							stiffness: 100,
							damping: 10,
							duration: 0.8,
						}}
						className="p-4 flex flex-col justify-center mb-4 text-white">
							<h2 className="text-3xl font-bold mb-4 text-orange-600">
								KPANDJI DJETRAN
							</h2>
							<p className=" mb-4">
								Le KPANDJI DJETRAN est notre dernier modèle de Pick-Up, alliant
								luxe, performances et capacités tout-terrain. Avec son design
								élégant et son moteur puissant, il est parfait aussi bien pour
								la conduite en ville que pour les voyages aventureux.
							</p>
							<ul className="list-disc list-inside  text-sm">
								<li>Système 4x4 avancé</li>
								<li>Intérieur spacieux avec des matériaux haut de gamme</li>
								<li>Système d&apos;infodivertissement de pointe</li>
								<li>Excellent fuel efficiency for its class</li>
							</ul>
							<button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
								Voir +
							</button>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Last;
