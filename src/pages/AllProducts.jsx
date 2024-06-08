import { useContext, useState } from "react";
// Import Product Context
import { ProductContext } from "../context/ProductContext";

// Components
import ProductCard from "../components/ProductCard";

// Get products from context

const AllProducts = () => {
	const { products } = useContext(ProductContext);

	// Pagination
	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 10;

	// FIlter Selected Categories
	const filteredProducts = products.filter((product) => product.category === "women's clothing" || product.category === "men's clothing" || product.category === "jewelery");

	//Calculation of number of item to display on current page
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

	// Calculate total pages
	const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);

		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="py-16 px-8 mt-10">
			<h1 className="text-4xl font-medium capitalize text-center mb-10">All Products</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
				{currentProducts.map((product) => (
					<div
						key={product.id}
						className="w-full h-[450px] bg-white"
					>
						<ProductCard
							key={product.id}
							product={product}
						/>
					</div>
				))}
			</div>
			<div className="flex justify-center mt-10">
				{[...Array(totalPages)].map((_, index) => (
					<button
						key={index}
						onClick={() => handlePageChange(index + 1)}
						className={`px-4 py-2 mx-1 ${index + 1 === currentPage ? "bg-slate-700 text-teal-100" : "bg-gray-200 text-gray-700"}`}
					>
						{index + 1}
					</button>
				))}
			</div>
		</div>
	);
};

export default AllProducts;
