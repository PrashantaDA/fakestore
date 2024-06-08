import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import AllProducts from "./pages/AllProducts";

const App = () => {
	return (
		<div className="overflow-x-hidden">
			<Header />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/products"
					element={<AllProducts />}
				/>
				<Route
					path="/product/:id"
					element={<ProductDetails />}
				/>
			</Routes>
			<Sidebar />
			<Footer />
		</div>
	);
};

export default App;
