"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import slid1 from "../app/img/slide3.png";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const bgImage = {
	backgroundImage: "url('/images/para3.jpg')",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	backgroundPosition: "center",
};

function Hero() {
	return (
		<main style={bgImage}>
			<div className="bg-gradient-to-r from-primary to bg-primaryDark/90 ">
				<div className="container text-white">
					<Navbar />
					<section className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[500px] pt-28">
						<div className=" text-white space-y-8">
							<motion.div
								initial={{ opacity: 0, y: -100 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									type: "spring",
									stiffness: 100,
									damping: 10,
									delay: 1,
									duration: 0.4,
								}}
								className="space-y-8">
								<h1 className="text-5xl lg:text-7xl font-bold leading-tight uppercase text-nowrap">
									KPANDJI djetran
									<br />
									<span className="uppercase text-transparent text-outline ">
										Pick-Ip
									</span>
								</h1>

								<button className="outline-btn flex justify-center items-center gap-4 group">
									Explore{" "}
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
									delay: 1.2,
									duration: 0.4,
								}}
								className="bg-black/40 space-y-2 lg:max-w-[350px] !mt-[60px]">
								<h1 className=" text-xl uppercase">Vehicles fratures</h1>
								<p className="text-xs leading-loose">
									Work Location Type: Onsite As a leading industrial distributor
									with operations primarily in North America, Japan and the
									United Kingdom. Work Location Type: Onsite As a leading
									industrial distributor with operations primarily in North
									America, Japan and the United Kingdom. Work Location Type:
									Onsite As a leading industrial distributor with operations
									primarily in North America, Japan and the United Kingdom [...]
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
								<Image src={slid1} alt="Background" objectFit="contain" />
							</motion.div>
							{/* cercle section*/}
							<motion.div
								initial={{ opacity: 0, y: 0, scale: 0.5 }}
								whileInView={{ opacity: 1, y: 0, scale: 1 }}
								transition={{
									type: "spring",
									stiffness: 100,
									damping: 10,
									delay: 0.8,
									duration: 0.8,
								}}
								className="absolute top-0 border-cyan-200 border-[20px] left-1/2 rounded-full h-[180px] w-[180px] md:w-[300px] md:h-[300px] glowing-shadow -mt-10"></motion.div>
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
								className=" absolute -top-40 left-0 z-[1]">
								<h1 className="text-[180px] font-bold text-cyan-200/10 leading-none">
									Sport
								</h1>
							</motion.div>
						</div>
					</section>
				</div>
			</div>
		</main>
	);
}

export default Hero;
