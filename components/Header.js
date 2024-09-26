"use client";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import Image from "next/image";
import logo from "../app/img/logo.png";
import { useState, useEffect } from "react";
import Link from "next/link";

function Header() {
	const [scrollY, setScrollY] = useState(0);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [textColor, setTextColor] = useState("white");

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
			setTextColor("#ea580c");
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
		style={{ color: `${textColor}` }}
			className={`fixed top-0 left-0 w-full transition-colors duration-300 text-white z-50 ${
				scrollY >= 90 ? "bg-white  "  : ""
			}`}>
			{/* large screen */}
			<div className="container mx-auto px-4 py-4 hidden  lg:flex justify-between items-center uppercase  ">
				<div className="flex space-x-6">
					<Link href="/suv" className="myLink">
						SUV
					</Link>
					<Link href="/quatre" className="myLink">
						4X4
					</Link>
					<Link href="/pickup" className="myLink">
						PICKUP
					</Link>
					<Link href="/utilitaires" className="myLink">
						UTILITAIRES
					</Link>
				</div>
				<div>
					<Link href="/">
						<Image
							src={logo}
							alt="Logo"
							width={100}
							height={50}
							className=" cursor-pointer"
						/>
					</Link>
				</div>
				<div className="flex space-x-6 uppercase">
					<Link href="/accessoires" className="myLink">
						Accessoires
					</Link>
					<Link href="/pieces" className="myLink">
						Pièces
					</Link>
					<Link href="/maintenance" className="myLink">
						maintenance
					</Link>
					<Link href="/contact" className="myLink">
						Contact
					</Link>
				</div>
			</div>

			{/* middle screen */}

			<div className="hidden md:flex lg:hidden container mx-auto  py-2 justify-between items-center">
				<div>
					<Link href="/">
						<Image
							src={logo}
							alt="Logo"
							width={100}
							height={50}
							className=" cursor-pointer"
						/>
					</Link>
				</div>
				<div className="flex flex-wrap justify-end space-x-2 uppercase ">
					<Link href="/suv" className="myLink">
						SUV
					</Link>
					<Link href="/suv" className="myLink">
						4X4
					</Link>
					<Link href="/pickup" className="myLink">
						PICKUP
					</Link>
					<Link href="/utilitaires" className="myLink">
						UTILITAIRES
					</Link>
					<Link href="/accessoires" className="myLink">
						Accessoires
					</Link>
					<Link href="/pieces" className="myLink">
						Pièces
					</Link>
					<Link href="/pieces" className="myLink">
						Maintenance
					</Link>
					<Link href="/contact" className="myLink">
						Contact
					</Link>
				</div>
			</div>

			{/* small screen  */}

			<div className="md:hidden flex container mx-auto px-2 py-2 justify-between items-center ">
				<div>
					<Link href="/">
						<Image
							src={logo}
							alt="Logo"
							width={100}
							height={50}
							className=" cursor-pointer"
						/>
					</Link>
				</div>
				<div>
					<div className="relative">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label="Toggle menu">
							<IoMenuSharp className="text-2xl" />
						</button>
						{isMenuOpen && (
							<div className="absolute top-full right-0 bg-white shadow-md p-4 mt-2">
								<div className="flex justify-between items-center mb-4">
									<button
										onClick={() => setIsMenuOpen(false)}
										aria-label="Close menu">
										<IoCloseSharp className="text-2xl" />
									</button>
								</div>
								<div className="flex flex-col space-y-2 uppercase ">
									<Link href="/suv" className="myLink">
										SUV
									</Link>
									<Link href="/suv" className="myLink">
										4X4
									</Link>
									<Link href="/pickup" className="myLink">
										PICKUP
									</Link>
									<Link href="/utilitaires" className="myLink">
										UTILITAIRES
									</Link>
									<Link href="/accessoires" className="myLink">
										Accessoires
									</Link>
									<Link href="/pieces" className="myLink">
										Pièces
									</Link>
									<Link href="/pieces" className="myLink">
										Maintenance
									</Link>
									<Link href="/contact" className="myLink">
										Contact
									</Link>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
