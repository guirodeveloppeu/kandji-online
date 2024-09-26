"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
//import bg from "../app/img/bg7.jpg";
import { useState, useEffect } from "react";
import slid1 from "../app/img/slide1.png";
import slid2 from "../app/img/slide2.png";
import { div } from "framer-motion/client";

//import { main } from "framer-motion/client";

const slides = [
	{
		carImage: slid1,
		carName: "KPANDJI DJETRAN",
		carNick: "DJETRAN",
		carType: "Pick-Up",
		textTitle: "KPANDJI DJETRAN ",
		description:
			"Le DJETRAN est notre dernier modèle de Pick-Up, alliant luxe, performances et capacités tout-terrain. Avec son design élégant et son moteur puissant, il est parfait aussi bien pour la conduite en ville que pour les voyages aventureux.",
	},

	{
		carImage: slid2,
		carName: "KPANDJI DJETRAN",
		carNick: "DJETRAN",
		carType: "Pick-Up",
		textTitle: "KPANDJI DJETRAN ",
		description:
			"Le DJETRAN est notre dernier modèle de Pick-Up, alliant luxe, performances et capacités tout-terrain. Avec son design élégant et son moteur puissant, il est parfait aussi bien pour la conduite en ville que pour les voyages aventureux.",
	},

	// Add more slides as needed
];

const bgImage = {
	backgroundImage: "url('/images/para5.jpg')",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	backgroundPosition: "center",
};

function Hero() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const slideInterval = setInterval(() => {
			setIsVisible(false);
			setTimeout(() => {
				setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
				setIsVisible(true);
				window.location.reload()
			},window.location.reload()); // Wait for fade out before changing slide
		}, 5000); // Change slide every 5 seconds

		return () => clearInterval(slideInterval);
	}, [currentSlide]);



	return (
		<>
			<main style={bgImage} className="">
				<div className="bg-gradient-to-r from-primary to bg-primaryDark/90 ">
					<div className="container text-white">
						<section className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[530px] pt-28">

							{slides.map((slide, index) =>(
								<div
								key={index}
								className={`absolute inset-0 sm:pt-2 flex w-full flex-col md:flex-row items-center justify-center transition-opacity duration-500  ${
								  currentSlide === index && isVisible ? 'opacity-100' : 'opacity-0'
								}`}
							  >
								<div className=" text-white space-y-8">
							
							<motion.div
								initial={{ opacity: 0, y: -100 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									type: "spring",
									stiffness: 100,
									damping: 10,
									delay: 0.3,
									duration: 0.4,
								}}
								className="space-y-8">

								<h1 className="text-4xl md:text-text-5xl lg:text-7xl font-bold leading-tight uppercase text-nowrap">
									{slide.carName}
									<br />
									<span className="uppercase text-transparent text-outline ">
										{slide.carType}
									</span>
								</h1>

								<button className="outline-btn flex justify-center items-center gap-4 group cursor-pointer z-50">
									Explorez{" "}
									<FaArrowRight className=" group-hover:translate-x-2 transition" />
								</button>
							</motion.div>

							{/* features text*/}
							<motion.div
								initial={{ opacity: 0, y: 100 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									type: "spring",
									stiffness: 100,
									damping: 10,
									delay: 0.4,
									duration: 0.4,
								}}
								className="bg-black/40 hidden sm:block space-y-2 lg:max-w-[350px] !mt-[60px] py-3 px-5">
								<h1 className=" text-xl uppercase">{slide.textTitle}</h1>
								<p className="text-xs leading-loose">
									{slide.description}
								</p>
							</motion.div>
						</div>
						{/* image section*/}
						<div className="relative">
							<motion.div
								initial={{ opacity: 0, x: 200 }}
								whileInView={{ opacity: 1, x: 0, scale: 1.4 }}
								transition={{
									duration: 1,
								}}
								className="relative w-full z-30 ">
								<Image src={slide.carImage} alt="Background" objectFit="contain" />
							</motion.div>
							{/* cercle section*/}
							<motion.div
								initial={{ opacity: 0, y: 0, scale: 0.5 }}
								whileInView={{ opacity: 1, y: 0, scale: 1 }}
								transition={{
									type: "spring",
									stiffness: 100,
									damping: 10,
									delay: 0.4,
									duration: 0.8,
								}}
								className="absolute top-0 border-orange-200 border-[15px] left-1/2 rounded-full h-[250px] w-[250px] md:w-[300px] md:h-[300px] glowing-shadow -mt-12"></motion.div>
							{/* big text section*/}
							<motion.div
								initial={{ opacity: 0, x: -100 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{
									type: "spring",
									stiffness: 100,
									damping: 10,
									delay: 1.4,
									duration: 0.8,
								}}
								className=" absolute -top-40 sm:left-0 right-0  z-[1]">
								<h1 className=" text-7xl sm:text-[150px]  font-bold text-cyan-200/10 leading-none">
									{slide.carNick}
								</h1>
							</motion.div>

							
						</div>
									
								</div>
							))}

						</section>
					</div>
				</div>
			</main>
		</>
	);
}

export default Hero;
