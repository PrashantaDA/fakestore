import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

// Context Provider
import ProductProvider from "./context/ProductContext.jsx";
import SidebarProvider from "./context/SidebarContext.jsx";
import CartProvider from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<SidebarProvider>
			<CartProvider>
				<ProductProvider>
					<Router>
						<App />
					</Router>
				</ProductProvider>
			</CartProvider>
		</SidebarProvider>
	</React.StrictMode>
);
