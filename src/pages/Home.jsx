import { useState, useEffect } from "react";
import axios from "../axios";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import Loading from "../components/Loading";
import { amazonChoiceUrl, bannerUrl, logoUrl } from "../constants";
import { calculateDiscountedPrices, preloadImages } from "../utils";

const worker = new Worker("/discountCalculatorWorker.js");
const imagesToPreload = [bannerUrl, logoUrl, amazonChoiceUrl];

export default function Home() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchProducts = async () => {
		const products = await axios
			.get("products/?offset=0&limit=30")
			.then((response) => response.data);

		const updatedProducts = await calculateDiscountedPrices(
			worker,
			products
		);

		setProducts(updatedProducts);
		setLoading(false);
	};

	useEffect(() => {
		// Preload images and fetch data
		const cleanupPreload = preloadImages(imagesToPreload, fetchProducts);

		// Clean up preloaded images when the component is unmounted
		return () => {
			cleanupPreload();
		};
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
