import Image from "next/image";
import logo from "../app/img/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

const NavMenu =[
    {
        id:1,
        title:"Home",
        link:"#",
    },
    {
        id:2,
        title:"About us",
        link:"#",
    },
    {
        id:3,
        title:"Bike",
        link:"#",
    },
    {
        id:4,
        title:" Cars",
        link:"#",
    },
]

function Navbar() {
	return (
		<main className=" absolute top-0 left-0 w-full pt-10 text-white z-20 ">
			<div className="container">
				<div className="flex justify-between items-center">
					<div>
						<Image
							src={logo}
							alt="Background"
							objectFit="contain"
							className="w-20 backdrop-invert-0"
						/>
					</div>
                    <div className="hidden md:block">
                        <ul className=" flex gap-4">

                        {NavMenu.map((menu)=>(
                            <li key={menu.id}>
                                <a href={menu.link} className="inline-block px-6 py-2 uppercase hover:bg-primary duration-200 rounded-md hover:shadow-[0px_0px_20px_8px_#d2e6ff]">
                                    {menu.title}
                                </a>

                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="flex items-center gap-6">
                        
                        <p className="rounded-icons">
                            <GiHamburgerMenu className="text-xl"/>
                        </p> 
                        <p className="rounded-icons"> 
                            <FaSearch className="text-xl"/> 
                        </p>
                    </div>
				</div>
			</div>
		</main>
	);
}

export default Navbar;
