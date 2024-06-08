import { useContext } from "react";
// Import Product Context
import { ProductContext } from "../context/ProductContext";

// Components
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";

const Home = () => {
	// Get products from context
	const { products } = useContext(ProductContext);

	const filteredProducts = products.filter((product) => product.category === "women's clothing" || product.category === "men's clothing");

	return (
		<div>
			<Hero />
			<section className="py-16">
				<div className="container mx-auto">
					<h1 className="text-4xl font-medium capitalize text-center mb-10">Featured Products</h1>
					<div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
						{filteredProducts.map((product) => (
							<div
								key={product.id}
								className="w-full h-[450px] bg-white "
							>
								<ProductCard
									key={product.id}
									product={product}
								/>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
