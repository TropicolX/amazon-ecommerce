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

	useEffect(() => {
		const getProducts = async () => {
			const products = await axios
				.get("products/?offset=0&limit=30")
				.then((response) => response.data);
			const finalProducts = products.map((product) => {
				const newProduct = {
					...product,
					discount: Math.floor(Math.random() * 10) + 1,
				};
				return newProduct;
			});
			setProducts(finalProducts);
			setLoading(false);
		};

		getProducts();
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
