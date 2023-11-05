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
			.get("products/")
			.then((response) => response.data);

		const updatedProducts = await calculateDiscountedPrices(
			worker,
			products
		);

		setProducts(updatedProducts);
		return updatedProducts;
	};

	useEffect(() => {
		const fetchData = async () => {
			const products = await fetchProducts();

			const firstThreeProductImages = products
				.slice(0, 3)
				.map((product) => product.images[0]);

			// Preload images and fetch data
			await preloadImages([
				...imagesToPreload,
				...firstThreeProductImages,
			]);
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
