/* eslint-disable react/prop-types */
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { useContext } from "react";

const Cart = ({ item }) => {
	const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
	const { id, title, image, price, amount } = item;
	return (
		<div className="flex gap-x-4 py-2  border-b border-gray-200 w-full font-light text-slate-700">
			<div className="w-full min-h-[150px] flex items-center gap-x-4">
				{/* Image */}
				<Link to={`/product/${id}`}>
					<img
						className="max-w-[80px]"
						src={image}
						alt={title}
					/>
				</Link>
				<div className="w-full flex flex-col">
					{/* Title and Remove*/}
					<div className="flex justify-between mb-2 ">
						<Link
							to={`/product/${id}`}
							className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline decoration-dotted"
						>
							{title}
						</Link>
						{/* Remove item */}

						<IoMdClose
							onClick={() => removeFromCart(id)}
							size={24}
							className="text-gray-500 cursor-pointer hover:text-red-500 transition"
						/>
					</div>
					<div className=" flex gap-x-2 h-[36px] text-sm rounded items-center">
						{/* Quantity */}
						<div className="flex flex-1 max-w-[100px]  items-center h-full border text-primary font-medium">
							{/* - */}
							<IoMdRemove
								onClick={() => decreaseAmount(id)}
								size={22}
								className="flex-1 cursor-pointer "
							/>
							<div className="">{amount}</div>
							{/* + */}
							<IoMdAdd
								onClick={() => increaseAmount(id)}
								className="flex-1 cursor-pointer"
								size={22}
							/>
						</div>
						{/* Price */}
						<div className="flex-1 items-center justify-around">$ {price}</div>
						{/* Total */}
						<div
							className="flex flex-1 justify-end items-center font-medium text-primary
						"
						>
							$ {(price * amount).toFixed(2)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
