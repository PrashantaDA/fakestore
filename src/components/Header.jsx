import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";

import { BsBagPlus } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

import Logo from "/logo.svg";

const Header = () => {
	const location = useLocation();

	const [title, setTitle] = useState(false);

	useEffect(() => {
		setTitle(location.pathname === "/products");
	}, [location]);

	const [isActive, setIsActive] = useState(false);

	const { isOpen, setIsOpen } = useContext(SidebarContext);
	const { itemAmount } = useContext(CartContext);

	// Event Listener
	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
		});
	});

	return (
		<header className={`${isActive ? "bg-white py-2 shadow-md" : "bg-none  py-4"} fixed w-full z-10 transition-all `}>
			<div className="container mx-auto flex justify-between items-center h-full xl:px-6">
				<Link
					to="/"
					className=""
				>
					<img
						className="w-[40px]"
						src={Logo}
						alt="Logo"
					/>
				</Link>
				<div
					className={`
				${title ? "hidden" : "block"}
				`}
				>
					<Link to="/products">
						<h1 className="uppercase text-3xl font-semibold hover:underline">Shop</h1>
					</Link>
				</div>
				<div className=" flex relative ">
					<BsBagPlus
						className="cursor-pointer"
						onClick={() => setIsOpen(!isOpen)}
						size={24}
					/>
					<div className="absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-steelblue  rounded-full flex justify-center items-center bg-slate-800 text-white">
						{itemAmount}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
