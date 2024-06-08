// Icons
import { IoMdArrowForward } from "react-icons/io";

// Import components
import Cart from "../components/Cart";

// Sidebar Context
import { SidebarContext } from "../context/SidebarContext";
import { useContext } from "react";

// CART context
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const { cart, clearCart, total } = useContext(CartContext);
	const { isOpen, handleClose } = useContext(SidebarContext);
	return (
		<div
			className={`${
				isOpen ? "right-0" : "-right-full"
			} w-full bg-[#fff] fixed top-0 h-full shadow-2xl md:w-[55vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[2rem]`}
		>
			<div className="flex items-center justify-between py-6 border-b">
				<div className="uppercase text-sm font-semibold">Shopping Bag ({cart.length})</div>
				<div
					onClick={handleClose}
					className="cursor-pointer w-8 h-8 flex justify-center items-center"
				>
					<IoMdArrowForward
						size={22}
						onClick={handleClose}
					/>
				</div>
			</div>

			{/* CART */}
			<div className="flex flex-col gap-y-2 max-h-[420px] overflow-y-auto overflow-x-hidden border-b">
				{cart.map((item) => (
					<Cart
						key={item.id}
						item={item}
					/>
				))}
			</div>

			<div className="flex flex-col gap-y-3 py-4 mt-4">
				<div className="flex justify-between items-center w-full">
					{/* Total */}
					<div className="uppercase font-semibold ">
						<span className="mr-2">Total: </span> $ {total.toFixed(2)}
					</div>
					{/* Cart Reset */}

					<div className="py-4 flex justify-center items-center">
						<h2
							onClick={clearCart}
							className="cursor-pointer font-bold flex justify-center items-center text-red-500 hover:text-red-600 transition"
						>
							Reset Cart
						</h2>
					</div>
				</div>
				<Link
					to="/"
					className="bg-slate-700 p-4 flex justify-center items-center text-center text-white uppercase font-medium transition-all duration-300 hover:bg-slate-900 "
				>
					View Cart
				</Link>
				<Link
					to="/"
					className="bg-slate-800 p-4 flex justify-center items-center text-center text-white uppercase font-medium transition-all duration-300 hover:bg-slate-400 "
				>
					Checkout
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;
