import { createContext, useEffect, useState } from "react";
import Loading from "../components/Loading";

// CONTEXT
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);

	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				setLoading(false);
			});
	}, []);

	return <>{loading ? <Loading /> : <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>}</>;
};

export default ProductProvider;
