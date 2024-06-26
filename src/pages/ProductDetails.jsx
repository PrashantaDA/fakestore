import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
	const { id } = useParams();
	const { products } = useContext(ProductContext);
	const { addToCart } = useContext(CartContext);

	const product = products.find((item) => item.id === parseInt(id));

	if (!product) {
		return <section className="h-screen flex justify-center items-center">Product Not Found</section>;
	}

	const { title, price, description, category, image } = product;

	return (
		<section className="pt-24 pb-12 lg:py-32 lg:h-screen flex items-center">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row items-center">
					{/* Image */}
					<div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
						<img
							className="max-w-[200px] lg:max-w-sm"
							src={image}
							alt={title}
						/>
					</div>
					{/* Text */}
					<div className="flex-1 text-center lg:text-left">
						<h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">{title}</h1>
						<h4 className="text-sm font-medium mb-2 uppercase">{category}</h4>
						<div className="text-xl text-red-500 font-medium mb-4">${price}</div>
						<p className="mb-6">{description}</p>
						<button
							className="bg-slate-800 text-white py-4 px-8 rounded-md"
							onClick={() => addToCart(product, product.id)}
						>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetails;
