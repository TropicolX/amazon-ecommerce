import { useState, useEffect } from "react";
import axios from "../axios";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import Loading from "../components/Loading";

export default function Home() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	function calculateDiscount({ productPrice, discount }) {
		// Perform complex discount calculation here
		const discountAmount = (productPrice * discount) / 100;
		const discountedPrice = (productPrice - discountAmount).toFixed(0);

		return discountedPrice;
	}

	const fetchProducts = async () => {
		const products = await axios
			.get("products/?offset=0&limit=9")
			.then((response) => response.data);

		const updatedProducts = products.map((product) => {
			const discount = Math.floor(Math.random() * 100);
			const discountedPrice = calculateDiscount({
				productPrice: product.price,
				discount,
			});
			return { ...product, discountedPrice };
		});

		setProducts(updatedProducts);
		return updatedProducts;
	};

	useEffect(() => {
		const fetchData = async () => {
			await fetchProducts();
			setLoading(false);
		};

		fetchData();
	}, []);

	if (loading) return <Loading />;

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
