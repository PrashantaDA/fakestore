import { createContext, useEffect, useState } from "react";

// Create Context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [itemAmount, setItemAmount] = useState(0);
	const [total, setTotal] = useState(0);

	// Update item amount when cart changes
	useEffect(() => {
		setItemAmount(cart.reduce((acc, curr) => acc + curr.amount, 0));
	}, [cart]);

	// Update total price when cart changes
	useEffect(() => {
		setTotal(cart.reduce((acc, curr) => acc + curr.amount * curr.price, 0));
	}, [cart]);

	const addToCart = (product, id) => {
		const newItem = { ...product, amount: 1 };
		const cartItem = cart.find((item) => item.id === id);

		if (cartItem) {
			const newCart = cart.map((item) => (item.id === id ? { ...item, amount: cartItem.amount + 1 } : item));
			setCart(newCart);
		} else {
			setCart([...cart, newItem]);
		}
	};

	const removeFromCart = (id) => {
		const newCart = cart.filter((item) => item.id !== id);
		setCart(newCart);
	};

	const clearCart = () => {
		setCart([]);
	};

	const increaseAmount = (id) => {
		const cartItem = cart.find((item) => item.id === id);
		if (cartItem) {
			addToCart(cartItem, id);
		}
	};

	const decreaseAmount = (id) => {
		const cartItem = cart.find((item) => item.id === id);
		if (cartItem.amount === 1) {
			removeFromCart(id);
		} else {
			const newCart = cart.map((item) => (item.id === id ? { ...item, amount: item.amount - 1 } : item));
			setCart(newCart);
		}
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				clearCart,
				increaseAmount,
				decreaseAmount,
				total,
				itemAmount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
