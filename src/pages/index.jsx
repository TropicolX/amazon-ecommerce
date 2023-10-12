import { useState, useEffect } from "react";
import axios from "../axios";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getProducts = async () => {
			const products = await axios
				.get("products/")
				.then((response) => response.data);
			const finalProducts = products.slice(0, 30);
			setProducts(finalProducts);
			setLoading(false);
		};

		getProducts();
	}, []);

	if (loading)
		return (
			<div className="global-loading">
				<svg
					width={40}
					height={40}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						cx={12}
						cy={12}
						r={10}
						stroke="currentColor"
						strokeWidth={4}
					/>
					<path
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					/>
				</svg>
			</div>
		);

	return (
		<div className="home">
			<Header />
			<main>
				<Banner />
				<ProductFeed products={products} />
			</main>
			<Footer />
		</div>
	);
}
